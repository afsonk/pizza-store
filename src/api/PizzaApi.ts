import { SortParams } from '../redux/pizzas/types'
import { instance } from './api'
import { ResponseType } from '../utills'

export const PizzaApi = Object.freeze({
  fetchPizzas: async ({ category, sortBy, order }: SortParams) => {
    const { data } = await instance.get<Array<ResponseType>>(`/pizzas`, {
      params: {
        category,
        _sort: sortBy,
        _order: order
      }
    })

    return data
  }
})
