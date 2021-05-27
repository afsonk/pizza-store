import {Dispatch} from "redux"
import axios from "axios"
import {ResponseType, SortType} from "../../shared/types"
import {actionsType} from "../actionCreators"
import {isLoading, setPizzas, SetPizzasType, ToggleIsLoadingType} from "./types"

export const setPizzasInState = (payload: ResponseType[]): SetPizzasType => ({
    type: setPizzas,
    payload
})

export const toggleIsLoading = (payload: boolean): ToggleIsLoadingType => ({
    type: isLoading,
    payload
})

export const fetchPizzas = (activeCategory: null | number, sortBy: SortType, order: string) => (dispatch: Dispatch<actionsType>) => {
    dispatch(toggleIsLoading(true))
    axios.get(`http://localhost:3001/pizzas?${activeCategory != null ? `category=${activeCategory}` : ''}&_sort=${sortBy === 'price' && Array.isArray(sortBy) ? sortBy[0] : sortBy}&_order=${order}`)
        .then(({data}) => {
            dispatch(setPizzasInState(data))
            dispatch(toggleIsLoading(false))
        })
}