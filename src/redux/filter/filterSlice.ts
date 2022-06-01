import { createSlice } from '@reduxjs/toolkit'
import { SortType } from '../../utills'

export type StateType = {
  activeCategory: null | number
  sortBy: {
    name: SortType
    order: 'asc' | 'desc'
  }
}

const initialState: StateType = {
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
    setActiveCategory(state, action) {
      state.activeCategory = action.payload
    },
    setActiveSort(state, action) {
      state.sortBy.name = action.payload
    }
  }
})

export default filterSlice.reducer
export const { setActiveCategory, setActiveSort } = filterSlice.actions
