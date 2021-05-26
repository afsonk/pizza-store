import {CartItemType} from "../shared/types"
import {actionsType, addToCart} from "./actionCreators"


type State = {
    items: {
        [id: string]: {
            pizzas: CartItemType[],
            totalPrice: any
        }
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

function getUniqueID(action: CartItemType): string {
    return `${action.id}-${action.size}-${action.type}`
}

function makeArray(arr: any) {
    const preArr = []
    for (let item in arr){
        preArr.push(arr[item].pizzas)
    }
    return [].concat(...Object.values(preArr))
}

const cartReducer = (state = initialState, action: actionsType): State => {
    switch (action.type) {
        case addToCart:
            const ident: string = getUniqueID(action.payload)
            const singleItems = state.items[ident]
                ? [...state.items[ident].pizzas, action.payload]
                : [action.payload]

            const newItems: any = {
                ...state.items,
                [ident]: {
                    ...state.items[ident],
                    pizzas: singleItems,
                    totalCount: getTotalSum(singleItems)
                }
            }

            const arr: CartItemType[] = makeArray(newItems)
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

