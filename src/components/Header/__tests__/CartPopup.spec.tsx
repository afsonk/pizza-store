import { screen } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../../../redux/cart/cartSlice'
import CartPopup from '../CartPopup'
import { renderWithRedux } from '../../../tests/helpers'

describe('CartPopup component test', () => {
  it('should render component without crashing', () => {
    const preloadedState = {
      cart: {
        items: {},
        totalCount: 5,
        totalPrice: 22
      }
    }

    const store = configureStore({ reducer: { cart: cartSlice }, preloadedState })
    renderWithRedux(<CartPopup />, store)

    expect(screen.getByTestId('cartPopup')).toBeInTheDocument()
  })

  it('should display totalCount with redux parameters', () => {
    const preloadedState = {
      cart: {
        items: {},
        totalCount: 5,
        totalPrice: 22
      }
    }

    const store = configureStore({ reducer: { cart: cartSlice }, preloadedState })
    renderWithRedux(<CartPopup />, store)

    expect(screen.getByTestId('cartPopupPrice')).toHaveTextContent(
      `${preloadedState.cart.totalPrice}$`
    )
  })

  it('should render 3 cart items', () => {
    const preloadedState = {
      cart: {
        items: {
          '0-small-0': {
            pizzas: [
              {
                id: 0,
                name: 'Pepperoni fresh',
                image:
                  'https://dodopizza-a.akamaihd.net/static/Img/Products/a386dd626cab472db3238bf88b1313cb_584x584.jpeg',
                price: 10,
                type: 0,
                size: 'small'
              }
            ],
            totalCount: 1,
            totalPrice: 10
          },
          '5-medium-0': {
            pizzas: [
              {
                id: 5,
                name: 'Double pepperony',
                image:
                  'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/68c66460-5054-4227-8ecf-274bb4874fe2.jpg',
                price: 14,
                type: 0,
                size: 'medium'
              }
            ],
            totalCount: 1,
            totalPrice: 10
          },
          '1-small-0': {
            pizzas: [
              {
                id: 1,
                name: 'Cheesy',
                image:
                  'https://dodopizza-a.akamaihd.net/static/Img/Products/f2e043398dad4bd5b42f4ef1990439c2_584x584.jpeg',
                price: 11,
                type: 0,
                size: 'small'
              }
            ],
            totalCount: 1,
            totalPrice: 10
          }
        },
        totalCount: 3,
        totalPrice: 35
      }
    }

    const store = configureStore({ reducer: { cart: cartSlice }, preloadedState })
    renderWithRedux(<CartPopup />, store)

    expect(screen.getAllByTestId('cartItem')).toHaveLength(3)
  })

  it('should render EmptyCartPopup when total items count is equal to 0', () => {
    const preloadedState = {
      cart: {
        items: {},
        totalCount: 0,
        totalPrice: 0
      }
    }

    const store = configureStore({ reducer: { cart: cartSlice }, preloadedState })
    renderWithRedux(<CartPopup />, store)

    expect(screen.getByText(/Oh, Empty!/)).toBeInTheDocument()
  })
})
