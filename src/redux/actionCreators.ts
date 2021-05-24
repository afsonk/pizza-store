import axios from "axios"
import {Dispatch} from 'redux'
import {ResponseType, SortType} from "../shared/types"

export const setPizzas = 'set pizzas in state'
export const isLoading = 'is data loading?'
export const setCategory = 'filter/category'
export const setSort = 'filter/sort'

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

export const setActiveCategory = (payload: null | number):SetActiveCategory => ({
    type: setCategory,
    payload
})

export const setActiveSort = (payload: SortType): SetActiveSort => ({
    type: setSort,
    payload
})

type SetPizzasType = {
    type: typeof setPizzas,
    payload: Array<ResponseType>
}

type ToggleIsLoadingType = {
    type: typeof isLoading,
    payload: boolean
}

type SetActiveCategory = {
    type: typeof setCategory,
    payload: null | number
}

type SetActiveSort = {
    type: typeof setSort,
    payload: SortType
}

export type actionsType =
    SetPizzasType
    | ToggleIsLoadingType
    | SetActiveCategory
    | SetActiveSort

