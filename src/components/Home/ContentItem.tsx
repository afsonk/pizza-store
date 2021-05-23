import classnames from "classnames"
import {useEffect, useState} from "react"
import {ContentTypes, ResponseType} from "../shared/types"


type Props = {contentTypes: ContentTypes} & ResponseType

function ContentItem({contentTypes, ...item}: Props) {
    const [selectedSize, setSelectedSize] = useState<string>(() => item.sizes[0])
    const [selectedDough, setSelectedDough] = useState<number>(() => item.types[0])
    const [activePrice, setActivePrice] = useState<number>(0)

    const onPageLoad = () => {
        const initialSize = item.sizes.find(() => selectedSize === item.sizes[0])
        const index = contentTypes.sizes.indexOf(initialSize!)
        setActivePrice(index)
    }
    const handleSizeClick = (size: string, index: number): void => {
        setSelectedSize(size)
        setActivePrice(index)
    }

    const getItemPrice = (activePrice: number): number => {
        return item.price[activePrice]
    }
    const getItemImage = (num: number): string => {
        return item.imageUrl[num]
    }

    useEffect(() => {
        onPageLoad()
    },[])

    return (
        <div className={'content__item'}>
            <img className={'content__item-image'}
                 src={getItemImage(selectedDough)}
                 alt="pizza"/>
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
                            onClick={() => setSelectedDough(index)}
                        >{dough}</li>)
                    }
                </ul>
            </div>
            <footer className={'item-bottom content-item__bottom'}>
                <span className={'item-bottom__price'}>{getItemPrice(activePrice)} USD</span>
                <button className={'item-bottom__cart button button--cart'}>
                    <span>Add to cart</span>
                </button>
            </footer>
        </div>
    )
}

export default ContentItem