import {CartItemType} from "../../shared/types"
import {
    AddItemToCart,
    addToCart, minusItemCart,
    MinusItemFromCart,
    plusItemCart,
    PlusItemInCart,
    removeFromCart,
    RemoveItemFromCart
} from "./types"

export const addItemToCart = (payload: CartItemType): AddItemToCart => ({
    type: addToCart,
    payload
})

export const plusItemInCart = (payload: string): PlusItemInCart => ({
    type: plusItemCart,
    payload
})

export const removeItemFromCart = (payload: string): RemoveItemFromCart => ({
    type: removeFromCart,
    payload
})

export const minusItemFromCart = (payload: string): MinusItemFromCart => ({
    type: minusItemCart,
    payload
})