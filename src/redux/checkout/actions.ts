import {SetCardDetails, ChangeCardPayload,} from "./types"


export const setCardDetails = (payload: ChangeCardPayload):SetCardDetails => ({
    type: "checkout/setCardInfo",
    payload
})