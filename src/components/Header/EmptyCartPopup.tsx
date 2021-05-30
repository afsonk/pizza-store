import {DogWithPizzaSVG} from "../../assets/svg"

function EmptyCartPopup() {
    return (
        <div className={'cart__popup'}>
            <DogWithPizzaSVG/>
            <h2 className={'cart__popup-title'}>Oh, Empty!</h2>
            <p>We always deliver for free,
                but the order amount must be from 30 $
            </p>
        </div>
    )
}

export default EmptyCartPopup