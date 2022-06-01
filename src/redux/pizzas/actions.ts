import { AnyAction } from '@reduxjs/toolkit'
import { SortType } from '../../utills'
import { toggleIsLoading, setPizzasInState } from './pizzasSlice'
import { instance } from '../../utills/api'
import { appStateType, ThunkAction } from '../index'

export const fetchPizzas =
  (
    activeCategory: null | number,
    sortBy: SortType,
    order: string
  ): ThunkAction<void, appStateType, unknown, AnyAction> =>
  (dispatch) => {
    dispatch(toggleIsLoading(true))
    instance
      .get(
        `/pizzas?${activeCategory != null ? `category=${activeCategory}` : ''}&_sort=${
          sortBy === 'price' && Array.isArray(sortBy) ? sortBy[0] : sortBy
        }&_order=${order}`
      )
      .then(({ data }) => {
        dispatch(setPizzasInState(data))
        dispatch(toggleIsLoading(false))
      })
  }
