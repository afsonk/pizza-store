import { getUniqueID } from "../../shared/getUniqueID"
import {CartItemType} from "../../shared/types"
import {actionsType} from "../actionCreators"


export type CartStateItems = {
    [id: string]: {
        pizzas: CartItemType[],
        totalPrice: any
    }
}

type State = {
    items: CartStateItems,
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

            const newItems: CartStateItems = {
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
            const newItems = {
                ...state.items,
            }
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].pizzas.length
            delete newItems[action.payload]
            delete state.items[action.payload]
            return {
                ...state,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        }
        case "cart/plusItem": {
            const newObjItems = [
                ...state.items[action.payload].pizzas,
                state.items[action.payload].pizzas[0],
            ]
            const newItems: CartStateItems = {
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
        case "cart/minusItem": {
            const oldItems = state.items[action.payload].pizzas
            const newObjItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems
            const newItems: CartStateItems = {
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
        case "cart/clear":
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0
            }
        default:
            return state
    }
}

export default cartReducer

