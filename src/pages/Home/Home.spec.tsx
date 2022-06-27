import { screen } from '@testing-library/react'
import Home from './Home'
import { configureStore } from '@reduxjs/toolkit'
import filterSlice, { sortByType } from '../../redux/filter/filterSlice'
import pizzasSlice from '../../redux/pizzas/pizzasSlice'
import { renderWithRouterAndRedux } from '../../tests/helpers'

describe('Home page test', () => {
  it('should render without crashing', () => {
    const preloadedState = {
      filterCat: {
        activeCategory: null,
        sortBy: {
          name: 'rating',
          order: 'asc'
        } as sortByType
      },
      pizzaItems: {
        pizzas: [
          {
            id: 4,
            imageUrl: [
              'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
              'https://dodopizza-a.akamaihd.net/static/Img/Products/b42fbff70d844e359dccaf5786df5f3d_584x584.jpeg'
            ],
            name: 'Cheeseburger pizza',
            types: [0, 1],
            sizes: ['small', 'medium', 'large'],
            price: [12, 19, 25],
            category: 1,
            rating: 8
          },
          {
            id: 1,
            imageUrl: [
              'https://dodopizza-a.akamaihd.net/static/Img/Products/f2e043398dad4bd5b42f4ef1990439c2_584x584.jpeg',
              'https://dodopizza-a.akamaihd.net/static/Img/Products/95f1a39790ac4743bf8159799e58fe12_584x584.jpeg'
            ],
            name: 'Cheesy',
            types: [0],
            sizes: ['small', 'large'],
            price: [11, 15, 24],
            category: 1,
            rating: 6
          },
          {
            id: 9,
            imageUrl: [
              'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg',
              'https://dodopizza-a.akamaihd.net/static/Img/Products/7209fcf80a9b4a75a0d61d6ba8ae298a_584x584.jpeg'
            ],
            name: 'Vegeterian',
            types: [0, 1],
            sizes: ['small', 'medium', 'large'],
            price: [35, 40, 50],
            category: 1,
            rating: 7
          }
        ],
        isLoading: false
      }
    }

    const store = configureStore({
      reducer: { filterCat: filterSlice, pizzaItems: pizzasSlice },
      preloadedState
    })
    renderWithRouterAndRedux(<Home />, store)

    expect(screen.getByTestId('homePage')).toBeInTheDocument()
  })
})
