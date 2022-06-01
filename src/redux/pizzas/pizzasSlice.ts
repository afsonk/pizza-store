import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ResponseType } from '../../utills'

export type PizzasState = {
  pizzas: Array<ResponseType>
  isLoading: boolean
}

const initialState: PizzasState = {
  pizzas: [],
  isLoading: false
}

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState: initialState as PizzasState,
  reducers: {
    setPizzasInState(state, action: PayloadAction<Array<ResponseType>>) {
      state.pizzas = action.payload
    },
    toggleIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    }
  }
})

export default pizzasSlice.reducer
export const { setPizzasInState, toggleIsLoading } = pizzasSlice.actions
