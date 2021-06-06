
import {configureStore,combineReducers} from "@reduxjs/toolkit"

import pizzasSlice from "./pizzas/pizzasSlice"
import filterSlice from "./filter/filterSlice"
import cartSlice from "./cart/cartSlice"



const rootReducer = combineReducers({
    pizzaItems: pizzasSlice,
    filterCat: filterSlice,
    cart: cartSlice,
})

const store = configureStore({
    reducer: rootReducer,
})

type returnType = typeof rootReducer

export type appStateType = ReturnType<returnType>
export type appDispatchType = typeof store.dispatch

export default store