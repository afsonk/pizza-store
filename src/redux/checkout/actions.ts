import {Dispatch} from "redux"
import {actionsType} from "../actionCreators"
import {appStateType} from "../index"
import {initialFormState} from "../../components/Checkout/Checkout"
import {clearCartAction} from "../cart/actions"
import {instance} from "../../utills/api"
import {OrdersResponseType} from "./types"


export const makePayment =
    (values: initialFormState,
     amount: number,
     history: { push({pathname, state}: { pathname: string, state: any }): void }) => async (
        dispatch: Dispatch<actionsType>,
        getState: () => appStateType) => {

        const {cart} = getState()

        const result = await instance.post(`/orders`, {...values, amount, meta: cart})
        if (result) {
            const response = await instance.get<Array<OrdersResponseType>>(`/orders`)
            const lastCustomer = response.data[response.data.length - 1]
            history.push({pathname: '/checkout/result', state: {id: lastCustomer.id, name: lastCustomer.name}})
            dispatch(clearCartAction())
        }

    }