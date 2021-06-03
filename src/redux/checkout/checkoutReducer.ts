import {actionsType} from "../actionCreators"
import {setCard} from "./types"

export type CheckoutStateType = {
    cvc: string,
    name: string,
    number: string,
    expiry: string
}

const initialState: CheckoutStateType = {
    cvc: '',
    name: '',
    number: '',
    expiry: ''
}

const checkoutReducer = (state = initialState, action: actionsType): CheckoutStateType => {
    switch (action.type) {
        case setCard:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default checkoutReducer

