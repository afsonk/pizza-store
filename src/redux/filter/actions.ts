import {SortType} from "../../shared/types"
import {SetActiveCategory, SetActiveSort, setCategory, setSort} from "./types"

export const setActiveCategory = (payload: null | number): SetActiveCategory => ({
    type: setCategory,
    payload
})

export const setActiveSort = (payload: SortType): SetActiveSort => ({
    type: setSort,
    payload
})