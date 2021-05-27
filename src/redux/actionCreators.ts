import {SetPizzasType, ToggleIsLoadingType} from "./pizzas/types"
import {SetActiveCategory, SetActiveSort} from "./filter/types"
import {AddItemToCart, MinusItemFromCart, PlusItemInCart, RemoveItemFromCart} from "./cart/types"

export type actionsType =
    SetPizzasType
    | ToggleIsLoadingType
    | SetActiveCategory
    | SetActiveSort
    | AddItemToCart
    | PlusItemInCart
    | RemoveItemFromCart
    | MinusItemFromCart

