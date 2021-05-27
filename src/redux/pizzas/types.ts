import {ResponseType} from "../../shared/types"

export const setPizzas = 'pizzas/setPizzas'
export const isLoading = 'pizzas/isLoading'


export type SetPizzasType = {
    type: typeof setPizzas,
    payload: Array<ResponseType>
}

export type ToggleIsLoadingType = {
    type: typeof isLoading,
    payload: boolean
}