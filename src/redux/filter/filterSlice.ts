import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SortType } from '../../utills'

export type sortByType = {
  name: SortType
  order: 'asc' | 'desc'
}

export type FilterSliceStateType = {
  activeCategory: null | number
  sortBy: sortByType
}

const initialState: FilterSliceStateType = {
  activeCategory: null,
  sortBy: {
    name: 'rating',
    order: 'asc'
  }
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<number | null>) {
      state.activeCategory = action.payload
    },
    setActiveSort(state, action: PayloadAction<SortType>) {
      state.sortBy.name = action.payload
    }
  }
})

export default filterSlice.reducer
export const { setActiveCategory, setActiveSort } = filterSlice.actions
