import { createSelector } from '@reduxjs/toolkit'
import { CartStateItems, identType } from '../cartSlice'

const stateItemSelector = (state: identType) => state.pizzas
const totalItemsSelector = (state: CartStateItems) => state

const totalSumSelector = createSelector(totalItemsSelector, (arr) => {
  const preArr: { [s: string]: any } = Object.keys(arr).map((key) => arr[key])

  const allCartItems: identType[] = [].concat(...Object.values(preArr))

  return allCartItems.reduce((acc, next) => acc + next.totalPrice, 0)
})

export { stateItemSelector, totalItemsSelector, totalSumSelector }
