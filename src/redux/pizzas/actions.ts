import { createAsyncThunk } from '@reduxjs/toolkit'
import { SortParams } from './types'
import { PizzaApi } from '../../api/PizzaApi'

export const asyncFetchPizza = createAsyncThunk('pizzas/fetchPizza', (params: SortParams) => {
  return PizzaApi.fetchPizzas(params)
})
