import {useEffect} from "react"
import ContentItem from "./ContentItem"
import {CartItemType, ContentTypes} from "../../utills"
import {useDispatch, useSelector} from "react-redux"
import {fetchPizzas} from "../../redux/pizzas/actions"
import {appStateType} from "../../redux"
import LoadingBlock from "./LoadingBlock"
import {addItemToCart} from "../../redux/cart/actions"


function PizzasList() {
    const {pizzas, isLoading} = useSelector((state: appStateType) => state.pizzaItems)
    const {sortBy, activeCategory} = useSelector((state: appStateType) => state.filterCat)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPizzas(activeCategory, sortBy.name, sortBy.order))
    }, [activeCategory, sortBy])

    const contentTypes: ContentTypes = {
        sizes: ['small', 'medium', 'large'],
        doughTypes: ['traditional', 'slim']
    }
    const handleAddToCart = (payload: CartItemType) => {
        dispatch(addItemToCart(payload))
    }

    return (
        <div className={'content__list'}>

            {
                isLoading
                    ? Array(4).fill(0).map((_, index) => {
                        return <LoadingBlock key={index}/>
                    })
                    : pizzas!.map(item => {
                        return <ContentItem key={item.id} contentTypes={contentTypes}
                                            {...item} handleAddToCart={handleAddToCart}
                        />
                    })
            }
        </div>
    )
}

export default PizzasList


