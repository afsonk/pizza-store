import {CartItemType} from "../../shared/types"

export const addToCart = 'cart/addItem'
export const removeFromCart = 'cart/removeItem'
export const plusItemCart = 'cart/plusItem'
export const minusItemCart = 'cart/minusItem'
export const clearCart = 'cart/clear'


export type AddItemToCart = {
    type: typeof addToCart,
    payload: CartItemType
}

export type PlusItemInCart = {
    type: typeof plusItemCart,
    payload: string
}

export type RemoveItemFromCart = {
    type: typeof removeFromCart,
    payload: string
}

export type MinusItemFromCart = {
    type: typeof minusItemCart,
    payload: string
}

export type ClearCart = {
    type: typeof clearCart
}