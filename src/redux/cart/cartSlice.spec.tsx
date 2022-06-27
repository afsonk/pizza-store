import cartSlice, {
  addItemToCart,
  CartSliceStateType,
  clearCart,
  removeItemFromCart
} from './cartSlice'
import { AnyAction } from '@reduxjs/toolkit'
import { cartItemMock } from '../../tests/mocks'

const initialState: CartSliceStateType = Object.freeze({
  items: {},
  totalPrice: 0,
  totalCount: 0
})

describe('cartSlice', () => {
  it('should return initial state', () => {
    expect(cartSlice(undefined, {} as AnyAction)).toEqual(initialState)
  })

  it('should clear cart', () => {
    const previousState: CartSliceStateType = {
      items: {
        item1: {
          pizzas: [],
          totalPrice: 200,
          totalCount: 2
        }
      },
      totalPrice: 200,
      totalCount: 400
    }

    expect(cartSlice(previousState, clearCart())).toEqual(initialState)
  })

  it('addItemToCart action should add item to the cart', () => {
    expect(cartSlice(initialState, addItemToCart(cartItemMock)).items['123-small-0']).toEqual(
      cartItemMock
    )
    expect(cartSlice(initialState, addItemToCart(cartItemMock)).totalPrice).toBe(cartItemMock.price)
    expect(cartSlice(initialState, addItemToCart(cartItemMock)).totalCount).toBe(1)
  })

  it.skip('should remove item from cart', () => {
    // const previousState: CartSliceStateType = { ...initialState, items: {'123-small-0': { pizzas: [cartItemMock], totalPrice: cartItemMock.price }} }

    expect(cartSlice(initialState, removeItemFromCart('123-small-0')).totalCount).toBe(0)
    expect(cartSlice(initialState, removeItemFromCart('123-small-0')).totalPrice).toBe(0)
  })
})
