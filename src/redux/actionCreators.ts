import axios from "axios"
import {Dispatch} from 'redux'
import {ResponseType} from "../components/shared/types"

export const setPizzas = 'set pizzas in state'
export const isLoading = 'is data loading?'

export const setPizzasInState = (payload: ResponseType[]): SetPizzasType => ({
    type: setPizzas,
    payload
})

export const toggleIsLoading = (payload: boolean): ToggleIsLoadingType => ({
    type: isLoading,
    payload
})

export const fetchPizzas = () => (dispatch: Dispatch<actionsType>) => {
    dispatch(toggleIsLoading(true))
    axios.get(`http://localhost:3001/pizzas?`)
        .then(({data}) => {
            dispatch(setPizzasInState(data))
            dispatch(toggleIsLoading(false))
        })
}

type SetPizzasType = {
    type: typeof setPizzas,
    payload: Array<ResponseType>
}

type ToggleIsLoadingType = {
    type: typeof isLoading,
    payload: boolean
}

export type actionsType = SetPizzasType | ToggleIsLoadingType

//${activeCategory != null ? `category=${activeCategory}` : ''}&_sort=${sortBy}&_order=${order}