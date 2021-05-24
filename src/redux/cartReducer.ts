import {CartItemType} from "../shared/types"
import {actionsType, addToCart} from "./actionCreators"


type State = {
    items: {
        [id: number]: CartItemType[]
    },
    totalCount: any,
    totalPrice: any
}

const initialState: State = {
    items: {},
    totalCount: 0,
    totalPrice: 0
}

function getTotalSum(arr: CartItemType[]) {
    return arr.reduce((acc, next: CartItemType) => acc + next.price, 0)
}

const cartReducer = (state = initialState, action: actionsType): State => {
    switch (action.type) {
        case addToCart:
            const newItems = {
                ...state.items,
                [action.payload.id]: state.items[action.payload.id]
                    ? [...state.items[action.payload.id], action.payload]
                    : [action.payload]
            }
            // @ts-ignore
            const arr: CartItemType[] = [].concat(...Object.values(newItems))
            const sum = getTotalSum(arr)
            return {
                ...state,
                items: newItems,
                totalPrice: sum,
                totalCount: arr.length
            }

        default:
            return state
    }
}

export default cartReducer