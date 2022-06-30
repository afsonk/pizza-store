import { createSelector } from '@reduxjs/toolkit'
import { CartStateItems, identType } from '../cartSlice'
import { appStateType } from '../../index'

export const stateItemSelector = (state: identType) => state.pizzas
export const totalItemsSelector = (state: CartStateItems) => state

export const totalSumSelector = createSelector(totalItemsSelector, (arr) => {
  const preArr: { [s: string]: any } = Object.keys(arr).map((key) => arr[key])

  const allCartItems: identType[] = [].concat(...Object.values(preArr))

  return allCartItems.reduce((acc, next) => acc + next.totalPrice, 0)
})

export const isCartEmptySelector = createSelector(
  (state: appStateType) => state.cart,
  (cart) => {
    return cart.totalCount === 0 && cart.totalPrice === 0 && Object.keys(cart.items).length === 0
  }
)
