import {applyMiddleware,combineReducers,createStore, compose} from "redux"
import thunk from 'redux-thunk'
import pizzasReducer from "./pizzas"


const rootReducer = combineReducers({
    pizzaItems:pizzasReducer
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

type returnType = typeof rootReducer

export type appStateType = ReturnType<returnType>

export default store