import HeaderCart from '../HeaderCart'
import { fireEvent, screen } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../../../redux/cart/cartSlice'
import { renderWithRouterAndRedux } from '../../../tests/helpers'

describe('HeaderCart component spec', () => {
  it('should render without errors', () => {
    const preloadedState = {
      cart: {
        items: {},
        totalCount: 5,
        totalPrice: 22
      }
    }

    const store = configureStore({ reducer: { cart: cartSlice }, preloadedState })
    renderWithRouterAndRedux(<HeaderCart />, store)

    expect(screen.getByTestId('headerCart')).toBeInTheDocument()
  })

  it('should show or hide cartPopup when user enters or leaves HeaderCart component', () => {
    const preloadedState = {
      cart: {
        items: {},
        totalCount: 5,
        totalPrice: 22
      }
    }

    const store = configureStore({ reducer: { cart: cartSlice }, preloadedState })
    renderWithRouterAndRedux(<HeaderCart />, store)

    const element = screen.getByTestId('headerCart')

    fireEvent.mouseEnter(element)
    expect(screen.getByTestId('cartPopup')).toBeInTheDocument()

    fireEvent.mouseLeave(element)
    expect(screen.queryByTestId('cartPopup')).not.toBeInTheDocument()
  })
})
