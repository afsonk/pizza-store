import { configureStore, combineReducers, Action, ThunkDispatch } from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux'
import pizzasSlice from './pizzas/pizzasSlice'
import filterSlice from './filter/filterSlice'
import cartSlice from './cart/cartSlice'

const rootReducer = combineReducers({
  pizzaItems: pizzasSlice,
  filterCat: filterSlice,
  cart: cartSlice
})

const store = configureStore({
  reducer: rootReducer
})

type returnType = typeof rootReducer

export type ThunkAction<
  R, // Return type of the thunk function
  S, // state type used by getState
  E, // any "extra argument" injected into the thunk
  A extends Action // known types of actions that can be dispatched
> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R

export type appStateType = ReturnType<returnType>
export type appDispatchType = typeof store.dispatch

export const useAppDispatch = () => useDispatch<appDispatchType>()

export default store
