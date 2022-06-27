import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CartItemType, getUniqueID } from '../../utills'
import { totalSumSelector } from './selectors'

export type identType = {
  pizzas: CartItemType[]
  totalPrice: number
  totalCount: number
}

export type CartStateItems = {
  [id: string]: identType
}

export type CartSliceStateType = {
  items: CartStateItems
  totalCount: number
  totalPrice: number
}

const initialState: CartSliceStateType = {
  items: {},
  totalCount: 0,
  totalPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItemType>) {
      const ident: string = getUniqueID(action.payload)

      if (!state.items[ident]) {
        state.items[ident] = { pizzas: [], totalPrice: 0, totalCount: 0 }
      }

      const newItems = state.items[ident]
      if (!newItems.pizzas[0]) {
        newItems.pizzas.push(action.payload)
      }

      newItems.totalCount = ++newItems.totalCount
      newItems.totalPrice = newItems.pizzas[0].price * newItems.totalCount

      state.totalCount = ++state.totalCount
      state.totalPrice = totalSumSelector(state.items)
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
      const currentPrice = state.items[action.payload].totalPrice
      const currentCount = state.items[action.payload].pizzas.length

      delete state.items[action.payload]

      state.totalPrice -= currentPrice
      state.totalCount -= currentCount
    },
    minusItemFromCart(state, action: PayloadAction<string>) {
      const items = state.items[action.payload]
      items.totalPrice -= items.pizzas[0].price
      items.totalCount = --items.totalCount

      state.totalCount = --state.totalCount
      state.totalPrice = totalSumSelector(state.items)
    },
    plusItemInCart(state, action: PayloadAction<string>) {
      const pizzaItems = state.items[action.payload]
      pizzaItems.totalPrice += pizzaItems.pizzas[0].price
      pizzaItems.totalCount = ++pizzaItems.totalCount

      state.totalCount = ++state.totalCount
      state.totalPrice = totalSumSelector(state.items)
    },
    clearCart(state) {
      state.totalCount = 0
      state.items = {}
      state.totalPrice = 0
    }
  }
})
export default cartSlice.reducer
export const { addItemToCart, removeItemFromCart, minusItemFromCart, clearCart, plusItemInCart } =
  cartSlice.actions
