import {CartItemType} from "../../utills/types"
import {
    AddItemToCart,
    addToCart,
    clearCart,
    ClearCart,
    minusItemCart,
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

export const clearCartAction = (): ClearCart => ({ type: clearCart })