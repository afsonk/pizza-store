import classnames from "classnames"
import {useEffect, useState} from "react"
import {CartItemType, ContentTypes, ResponseType} from "../../shared"
import LoadingBlock from "./LoadingBlock"


type Props = {
    contentTypes: ContentTypes,
    handleAddToCart: (payload: CartItemType) => void,
} & ResponseType

function ContentItem({contentTypes, handleAddToCart, ...item}: Props) {
    const [selectedSize, setSelectedSize] = useState<string>(() => item.sizes[0])
    const [selectedDough, setSelectedDough] = useState<number>(() => item.types[0])
    const [activePrice, setActivePrice] = useState<number>(0)
    const [imageLoading, setImageLoading] = useState(true)


    const onPageLoad = () => {
        const initialSize = item.sizes.find(() => selectedSize === item.sizes[0])
        const index = contentTypes.sizes.indexOf(initialSize!)
        setActivePrice(index)
    }

    const handleSizeClick = (size: string, index: number): void => {
        setSelectedSize(size)
        setActivePrice(index)
    }
    const handleDoughClick = (index: number) => {
        if(selectedDough !== index){
            setImageLoading(true)
            setSelectedDough(index)
        }
    }

    const getItemPrice = (activePrice: number): number => item.price[activePrice]
    const getItemImage = (num: number): string => item.imageUrl[num]

    const handleAddPizza = () => {
        const obj: CartItemType = {
            id: item.id,
            name: item.name,
            image: getItemImage(selectedDough),
            price: getItemPrice(activePrice),
            type: selectedDough,
            size: selectedSize
        }
        handleAddToCart(obj)
    }
    const handleImageLoad = () => setImageLoading(false)

    useEffect(() => {
        onPageLoad()
    }, [])

    return (
        <div className={'content__item'}>
            {imageLoading && <LoadingBlock image/>}
            <img className={'content__item-image'}
                 src={getItemImage(selectedDough)}
                 alt="pizza"
                 style={{display: imageLoading ? 'none' : 'block'}}
                 onLoad={handleImageLoad}
            />
            <h2 className={'content__item-title'}>{item.name}</h2>
            <div className={'content-types'}>
                <ul className={'content-types-list content-types__sizes'}>
                    {
                        contentTypes.sizes.map((size, index) => <li
                            className={classnames({
                                'active': size === selectedSize,
                                'disabled': !item.sizes.includes(size),
                            })}
                            onClick={() => handleSizeClick(size, index)}
                            key={size}>{size}</li>)
                    }
                </ul>
                <ul className={'content-types-list content-types__dough'}>
                    {
                        contentTypes.doughTypes.map((dough, index) => <li
                            className={classnames({
                                'active': index === selectedDough,
                                'disabled': !item.types.includes(index)
                            })}
                            key={dough}
                            onClick={() => handleDoughClick(index)}
                        >{dough}</li>)
                    }
                </ul>
            </div>
            <footer className={'item-bottom content-item__bottom'}>
                <span className={'item-bottom__price'}>{getItemPrice(activePrice)} USD</span>
                <button className={'item-bottom__cart button button--cart'} onClick={handleAddPizza}>
                    <span>Add to cart</span>
                </button>
            </footer>
        </div>
    )
}

export default ContentItem