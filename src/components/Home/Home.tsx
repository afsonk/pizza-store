import {useDispatch, useSelector} from "react-redux"
import {appStateType} from "../../redux"
import {setActiveCategory} from "../../redux/actionCreators"
import Categories from "./Categories"
import Container from "../shared/Container"
import Sort from "./Sort"
import ContentTitle from "./ContentTitle"
import PizzasList from "./PizzasList"
import {SortType} from "../shared/types"

function Home() {
    const categories: Array<string> = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed']
    const sort: Array<SortType> = ['rating', 'price', 'name']

    const {activeCategory} = useSelector((state: appStateType) => state.filterCat)
    const {name} = useSelector((state: appStateType) => state.filterCat.sortBy)

    const dispatch = useDispatch()

    const setCategory = (payload: null | number) => {
        dispatch(setActiveCategory(payload))
    }

    return (
        <main className={'content'}>
            <Container>
                <div className={'content__top'}>
                    <Categories categories={categories} activeCategory={activeCategory} setCategory={setCategory}/>
                    <Sort sort={sort} activeSort={name} dispatch={dispatch}/>
                </div>
                <ContentTitle activeCategory={categories[activeCategory!]}/>
                <PizzasList/>
            </Container>
        </main>
    )
}

export default Home
