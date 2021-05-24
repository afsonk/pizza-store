import {actionsType} from "./actionCreators"
import {SortType} from "../shared/types"


export type StateType = {
    activeCategory: null | number,
    sortBy: {
        name: SortType,
        order: 'asc' | 'desc'
    }
}

const initialState:StateType = {
    activeCategory: null,
    sortBy: {
        name: 'rating',
        order: "asc"
    }
}

const filterReducer = (state: StateType = initialState, action: actionsType): StateType => {
    switch (action.type) {
        case "filter/category":
            return {
                ...state,
                activeCategory: action.payload
            }
        case 'filter/sort':
            return {
                ...state,
                sortBy: {
                    ...state.sortBy,
                    name: action.payload
                }
            }
        default:
            return state
    }

}

export default filterReducer