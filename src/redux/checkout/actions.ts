import {Dispatch} from "redux"
import {actionsType} from "../actionCreators"
import {appStateType} from "../index"
import {initialFormState} from "../../components/Checkout/Checkout"
import {clearCartAction} from "../cart/actions"
import {instance} from "../../shared/api"



export const makePayment = (values: initialFormState, amount: number) =>  async (
    dispatch: Dispatch<actionsType>,
    getState: () => appStateType) => {

    const {cart} = getState()

    const result = await instance.post(`/orders`, {...values,amount, meta: cart })
        if(result){
            alert('Post success')
        }
}