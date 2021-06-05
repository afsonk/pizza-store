import {SortType} from "../../utills/types"

export const setCategory = 'filter/category'
export const setSort = 'filter/sort'


export type SetActiveCategory = {
    type: typeof setCategory,
    payload: null | number
}

export type SetActiveSort = {
    type: typeof setSort,
    payload: SortType
}