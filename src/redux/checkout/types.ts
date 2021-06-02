
export const setCard = "checkout/setCardInfo"

export type ChangeCardPayload = {
    name: string,
    value: string
}

export type SetCardDetails = {
    type: typeof setCard,
    payload: any
}


