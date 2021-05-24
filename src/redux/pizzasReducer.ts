import {actionsType} from "./actionCreators"
import {ResponseType} from "../shared/types"


export type PizzasState = {
    pizzas: Array<ResponseType>,
    isLoading: boolean
}

const initialState: PizzasState = {
    pizzas: [],
    isLoading: false
}


const pizzasReducer = (state:PizzasState = initialState, action: actionsType):PizzasState => {
        switch (action.type){
            case "set pizzas in state":
                return{
                    ...state,
                    pizzas: action.payload
                }
            case "is data loading?":
                return {
                    ...state,
                    isLoading: action.payload
                }
            default:
                return state
        }
}

export default pizzasReducer