import { useSelector } from 'react-redux'
import { appStateType, useAppDispatch } from '../../redux'
import Categories from '../../components/Home/Categories'
import Container from '../../components/shared/Container'
import Sort from '../../components/Home/Sort'
import ContentTitle from '../../components/Home/ContentTitle'
import PizzasList from '../../components/Home/PizzasList'
import { SortType } from '../../utills'
import './style.scss'
import { useEffect, useMemo } from 'react'
import { asyncFetchPizza } from '../../redux/pizzas/actions'

function Home() {
  const categories: Array<string> = useMemo(
    () => ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'],
    []
  )
  const sort: Array<SortType> = useMemo(() => ['rating', 'price', 'name'], [])

  const { sortBy, activeCategory } = useSelector((state: appStateType) => state?.filterCat)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      asyncFetchPizza({ category: activeCategory, sortBy: sortBy.name, order: sortBy.order })
    )
  }, [activeCategory, sortBy])

  return (
    <main className='content' data-testid='homePage'>
      <Container>
        <div className='content__top'>
          <Categories categories={categories} activeCategory={activeCategory} />
          <Sort sort={sort} activeSort={sortBy.name} />
        </div>
        <ContentTitle activeCategory={categories[activeCategory!]} />
        <PizzasList />
      </Container>
    </main>
  )
}

export default Home
