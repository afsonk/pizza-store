import { fireEvent, screen } from '@testing-library/react'
import CartEmpty from './CartEmpty'
import { renderTestApp, renderWithRouter } from '../../tests/helpers'
import filterSlice, { sortByType } from '../../redux/filter/filterSlice'
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../../redux/cart/cartSlice'
import pizzasSlice from '../../redux/pizzas/pizzasSlice'

describe('CartEmpty component test', () => {
  it('should render without crashing', () => {
    renderWithRouter(<CartEmpty />)
    expect(screen.getByText(/Cart is empty/i)).toBeInTheDocument()
  })

  it('should redirect user on "Go Back" button click', () => {
    const preloadedState = {
      cart: {
        items: {},
        totalCount: 0,
        totalPrice: 0
      },
      filterCat: {
        activeCategory: null,
        sortBy: {
          name: 'rating',
          order: 'asc'
        } as sortByType
      },
      pizzaItems: {
        pizzas: [],
        isLoading: true
      }
    }

    const store = configureStore({
      reducer: { cart: cartSlice, filterCat: filterSlice, pizzaItems: pizzasSlice },
      preloadedState
    })

    renderTestApp(<CartEmpty />, { store })
    expect(screen.getByText(/Cart is empty/i)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('link'))
    expect(screen.getByTestId('homePage')).toBeInTheDocument()
  })
})
