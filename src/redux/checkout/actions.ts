import { NavigateFunction } from 'react-router'
import { AnyAction } from '@reduxjs/toolkit'
import { appStateType, ThunkAction } from '../index'
import { initialFormState } from '../../pages/Checkout/Checkout'
import { clearCart } from '../cart/cartSlice'
import { instance } from '../../api/api'
import { OrdersResponseType } from './types'

export const makePayment =
  (
    values: initialFormState,
    amount: number,
    navigate: NavigateFunction
  ): ThunkAction<void, appStateType, unknown, AnyAction> =>
  async (dispatch, getState) => {
    const { cart } = getState()

    const result = await instance.post(`/orders`, {
      ...values,
      amount,
      meta: cart
    })

    if (result) {
      const response = await instance.get<Array<OrdersResponseType>>(`/orders`)
      const lastCustomer = response.data[response.data.length - 1]

      navigate('/checkout/result', {
        state: { id: lastCustomer.id, name: lastCustomer.name }
      })
      dispatch(clearCart())
    }
  }
