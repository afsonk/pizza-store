import { createSlice } from '@reduxjs/toolkit'
import { PizzasSliceType } from './types'
import { asyncFetchPizza } from './actions'

const initialState: PizzasSliceType = {
  pizzas: [],
  isLoading: false
}

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState: initialState as PizzasSliceType,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncFetchPizza.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(asyncFetchPizza.fulfilled, (state, action) => {
      state.pizzas = action.payload
      state.isLoading = false
    })
  }
})

export default pizzasSlice.reducer
