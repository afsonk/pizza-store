import {useState} from "react"
import Categories from "./Categories"
import Container from "../shared/Container"
import Sort from "./Sort"
import ContentTitle from "./ContentTitle"

function Home() {
    const categories = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed']
    const [activeCategory, setActiveCategory] = useState<null | number>(null)
    return (
        <main className={'content'}>
            <Container>
                <div className={'content__top'}>
                    <Categories categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                    <Sort/>
                </div>
                <ContentTitle activeCategory={categories[activeCategory!]}/>
            </Container>
        </main>
    )
}

export default Home
