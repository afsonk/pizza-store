import {useEffect} from "react"
import ContentItem from "./ContentItem"
import {ContentTypes} from "../shared/types"
import {useDispatch, useSelector} from "react-redux"
import {fetchPizzas, toggleIsLoading} from "../redux/actionCreators"
import {appStateType} from "../redux"
import LoadingBlock from "./LoadingBlock"


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

    return (
        <div className={'content__list'}>
            {
                isLoading
                    ? Array(12).fill(0).map((_, index) => {
                        return <LoadingBlock key={index}/>
                    })
                    : pizzas!.map(item => {
                        return <ContentItem key={item.id} contentTypes={contentTypes}
                                            {...item}
                        />
                    })
            }
        </div>
    )
}

export default PizzasList


