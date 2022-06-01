import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'

import { CartItemType, getUniqueID } from '../../utills'

type identType = {
  pizzas: CartItemType[]
  totalPrice: number
}

export type CartStateItems = {
  [id: string]: identType
}

type State = {
  items: CartStateItems
  totalCount: number
  totalPrice: number
}

const initialState: State = {
  items: {},
  totalCount: 0,
  totalPrice: 0
}

const stateItemSelector = (state: identType) => state.pizzas
const totalItemsSelector = (state: CartItemType[]) => state
const arrayMakingSelector = (state: CartStateItems) => state

const singleItemSumSelector = createSelector(stateItemSelector, (arr) =>
  arr.reduce((acc, next: CartItemType) => acc + next.price, 0)
)
const totalSumSelector = createSelector(totalItemsSelector, (arr) =>
  arr.reduce((acc, next: CartItemType) => acc + next.price, 0)
)

const makeArray = createSelector(arrayMakingSelector, (arr: any): CartItemType[] => {
  const preArr = []
  for (const item in arr) {
    preArr.push(arr[item].pizzas)
  }
  return [].concat(...Object.values(preArr))
})

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState as State,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItemType>) {
      const ident: string = getUniqueID(action.payload)

      if (!state.items[ident]) {
        state.items[ident] = { pizzas: [], totalPrice: 0 }
      }
      const newItems = state.items[ident]
      newItems.pizzas.push(action.payload)
      newItems.totalPrice = singleItemSumSelector(newItems)

      const arr: CartItemType[] = makeArray(state.items)

      state.totalCount = arr.length
      state.totalPrice = totalSumSelector(arr)
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
      items.pizzas.pop()
      items.totalPrice -= items.pizzas[0].price

      const arr: CartItemType[] = makeArray(state.items)

      state.totalPrice = totalSumSelector(arr)
      state.totalCount = arr.length
    },
    plusItemInCart(state, action: PayloadAction<string>) {
      const pizzaItems = state.items[action.payload]
      pizzaItems.pizzas.push(pizzaItems.pizzas[0])

      pizzaItems.totalPrice += pizzaItems.pizzas[0].price

      const arr: CartItemType[] = makeArray(state.items)

      state.totalPrice = totalSumSelector(arr)
      state.totalCount = arr.length
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
