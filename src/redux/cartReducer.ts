import { getUniqueID } from "../shared/getUniqueID"
import {CartItemType} from "../shared/types"
import {actionsType} from "./actionCreators"


type StateItems = {
    [id: string]: {
        pizzas: CartItemType[],
        totalPrice: any
    }
}

type State = {
    items: StateItems,
    totalCount: any,
    totalPrice: any
}

const initialState: State = {
    items: {},
    totalCount: 0,
    totalPrice: 0
}

function getTotalSum(arr: CartItemType[]): number {
    return arr.reduce((acc, next: CartItemType) => acc + next.price, 0)
}


function makeArray(arr: any): CartItemType[] {
    const preArr = []
    for (let item in arr) {
        preArr.push(arr[item].pizzas)
    }
    return [].concat(...Object.values(preArr))
}

const cartReducer = (state = initialState, action: actionsType): State => {
    switch (action.type) {
        case "cart/addItem": {

            const ident: string = getUniqueID(action.payload)

            const singleItem = state.items[ident]
                ? [...state.items[ident].pizzas, action.payload]
                : [action.payload]

            const newItems: StateItems = {
                ...state.items,
                [ident]: {
                    ...state.items[ident],
                    pizzas: singleItem,
                    totalPrice: getTotalSum(singleItem)
                }
            }

            const arr: CartItemType[] = makeArray(newItems)
            const sum: number = getTotalSum(arr)

            return {
                ...state,
                items: newItems,
                totalPrice: sum,
                totalCount: arr.length
            }
        }
        case "cart/removeItem":{
            delete state.items[action.payload]
            return {
                ...state,
            }
        }
        case "cart/plusItem": {
            const newObjItems = [
                ...state.items[action.payload].pizzas,
                state.items[action.payload].pizzas[0],
            ]
            const newItems: StateItems = {
                ...state.items,
                [action.payload]: {
                    ...state.items[action.payload],
                    pizzas: newObjItems,
                    totalPrice: getTotalSum(newObjItems)
                }
            }
            const arr: CartItemType[] = makeArray(newItems)
            const sum: number = getTotalSum(arr)
            return {
                ...state,
                items: newItems,
                totalPrice: sum,
                totalCount: arr.length
            }
        }
        default:
            return state
    }
}

export default cartReducer

