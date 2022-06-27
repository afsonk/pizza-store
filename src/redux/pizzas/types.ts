import { ResponseType, SortType } from '../../utills'

export interface SortParams {
  category?: null | number
  sortBy?: SortType
  order?: string
}

export type PizzasSliceType = {
  pizzas: Array<ResponseType>
  isLoading: boolean
}
