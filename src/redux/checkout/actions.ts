import {SetCardDetails, SetCardDetailsPayload,} from "./types"
import {Dispatch} from "redux"
import {actionsType} from "../actionCreators"
import {appStateType} from "../index"
import axios from "axios"



export const setCardDetails = (payload: SetCardDetailsPayload):SetCardDetails => ({
    type: "checkout/setCardInfo",
    payload
})

export const makePayment = (amount: number, history: {push(url: string): void}) => async (
    dispatch: Dispatch<actionsType>,
    getState: () => appStateType) => {

    const {checkout,cart} = getState()

    const result = await axios.post(`http://localhost:3001/orders`, {...checkout, amount, meta: cart})
    if(result){
        // dispatch(clearCartAction())
        // history.push('/')
        console.log(result)
    }
}