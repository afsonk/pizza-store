import Categories from "./Categories"
import Container from "../shared/Container"
import Sort from "./Sort"

function Home() {
    const categories = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed']
    return (
        <main className={'content'}>
            <Container>
                <div className={'content__top'}>
                    <Categories categories={categories}/>
                    <Sort/>
                </div>
            </Container>
        </main>
    )
}

export default Home
