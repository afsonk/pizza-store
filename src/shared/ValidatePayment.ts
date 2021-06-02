import validator from "validator"
import {CheckoutStateType} from "../redux/checkout/checkoutReducer"


const {isEmpty, isCreditCard} = validator

export const validatePaymentDetails = (details: CheckoutStateType): { valid: boolean, message: string} => {
    for (const key in details){
        // @ts-ignore
        const value = details[key]
        if(isEmpty(value)){
            return {valid: false, message: `${key} is required`}
        }

        if(key === 'number'){
            if(!isCreditCard(value)){
                return {valid: false, message: `credit card number is invalid`}
            }
        }

        if(key === 'expiry'){
            const today = new Date()
            const expiryDate = new Date(value)
            if(today > expiryDate){
                return {valid: false, message: `expiry date is invalid`}
            }
        }
    }
    return {valid: true, message: `Payment was successful`}
}