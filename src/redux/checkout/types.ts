
export const setCard = "checkout/setCardInfo"

export type SetCardDetailsPayload = {
    [key: string]: string
}

export type SetCardDetails = {
    type: typeof setCard,
    payload: SetCardDetailsPayload
}


