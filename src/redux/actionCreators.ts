import {SetPizzasType, ToggleIsLoadingType} from "./pizzas/types"
import {SetActiveCategory, SetActiveSort} from "./filter/types"
import {AddItemToCart, ClearCart, MinusItemFromCart, PlusItemInCart, RemoveItemFromCart} from "./cart/types"
import {SetCardDetails} from "./checkout/types"

export type actionsType =
    SetPizzasType
    | ToggleIsLoadingType
    | SetActiveCategory
    | SetActiveSort
    | AddItemToCart
    | PlusItemInCart
    | RemoveItemFromCart
    | MinusItemFromCart
    | SetCardDetails
| ClearCart


