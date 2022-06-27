import Cart from './Cart'
import { screen } from '@testing-library/react'
import cartSlice from '../../redux/cart/cartSlice'
import { configureStore } from '@reduxjs/toolkit'
import { renderTestApp, renderWithRouterAndRedux } from '../../tests/helpers'
import filterSlice, { sortByType } from '../../redux/filter/filterSlice'
import pizzasSlice from '../../redux/pizzas/pizzasSlice'

describe('Cart page test', () => {
  it('should render component without crashing', () => {
    const preloadedState = {
      cart: {
        items: {},
        totalCount: 5,
        totalPrice: 22
      }
    }

    const store = configureStore({
      reducer: { cart: cartSlice },
      preloadedState
    })
    renderWithRouterAndRedux(<Cart />, store)

    expect(screen.getByTestId('cartPage')).toBeInTheDocument()
    expect(screen.getByTestId('cartTotalCount')).toHaveTextContent(
      preloadedState.cart.totalCount.toString()
    )
    expect(screen.getByTestId('cartTotalPrice')).toHaveTextContent(
      preloadedState.cart.totalPrice + '$'
    )
  })

  it('should return Items when total count is greater or less then 1', () => {
    const preloadedState = {
      cart: {
        items: {},
        totalCount: 5,
        totalPrice: 22
      }
    }

    const store = configureStore({
      reducer: { cart: cartSlice },
      preloadedState
    })
    renderWithRouterAndRedux(<Cart />, store)

    expect(screen.getByTestId('cartHeader')).toHaveTextContent(
      preloadedState.cart.totalCount + ' Items'
    )
  })

  it('should return Item when total count is equal to 1', () => {
    const preloadedState = {
      cart: {
        items: {},
        totalCount: 1,
        totalPrice: 1
      }
    }

    const store = configureStore({
      reducer: { cart: cartSlice },
      preloadedState
    })
    renderWithRouterAndRedux(<Cart />, store)

    expect(screen.getByTestId('cartHeader')).toHaveTextContent(
      preloadedState.cart.totalCount + ' Item'
    )
  })

  it('should redirect user to the cartEmpty page when totalCount is falsy value', () => {
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

    renderTestApp(<Cart />, { store, path: '/cart' })

    expect(screen.getByTestId('cartEmpty')).toBeInTheDocument()
  })
})
