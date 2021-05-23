import {useEffect} from "react"
import ContentItem from "./ContentItem"
import {ContentTypes, ResponseType} from "../shared/types"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import {fetchPizzas} from "../../redux/actionCreators"
import {appStateType} from "../../redux"
import {PizzasState} from "../../redux/pizzas"



function PizzasList() {
    const pizzas = useSelector((state: appStateType) => state.pizzaItems.pizzas)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPizzas())
    }, [])

    const contentTypes: ContentTypes = {
        sizes: ['small', 'medium', 'large'],
        doughTypes: ['traditional', 'slim']
    }


    return (
        <div className={'content__list'}>
            {
                pizzas!.map(item => {
                    return <ContentItem key={item.id} contentTypes={contentTypes}
                                        {...item}
                    />
                })
            }
        </div>
    )
}

export default PizzasList