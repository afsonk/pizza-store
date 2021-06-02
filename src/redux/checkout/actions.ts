import {SetCardDetails, ChangeCardPayload,} from "./types"
import {Dispatch} from "redux"
import {actionsType} from "../actionCreators"
import {appStateType} from "../index"
import {validatePaymentDetails} from "../../shared/ValidatePayment"
import axios from "axios"
import {clearCartAction} from "../cart/actions"



export const setCardDetails = (payload: ChangeCardPayload):SetCardDetails => ({
    type: "checkout/setCardInfo",
    payload
})

export const makePayment = (amount: number, history: {push(url: string): void}) => async (
    dispatch: Dispatch<actionsType>,
    getState: () => appStateType) => {

    const {checkout, cart} = getState()

    const {valid, message} = validatePaymentDetails(checkout)
    if(!valid){
        alert(message)
        return
    }

    const result = await axios.post(`http://localhost:3001/orders`, {...checkout, amount, meta: cart})
    if(result){
        alert('Payment was successful')
        dispatch(clearCartAction())
        history.push('/')
    }


}