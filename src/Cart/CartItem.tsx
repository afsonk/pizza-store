import DoubleButton from "../shared/DoubleButton"
import Bucket from "./BucketSVG"


function CartItem(){
    return(
        <div className={'cart__item'}>
            <div className={'cart__item-top'}>
                <img
                    className={'cart__item-img'}
                    src="https://dodopizza-a.akamaihd.net/static/Img/Products/78e732c620334b5e8e5d821685c1c4b5_1875x1875.jpeg"
                    alt="pizza"/>
                <div className={'cart__item-info'}>
                    <h4 className={'cart__item-name'}>Pizzas Name</h4>
                    <p className={'cart__item-detail'}>Средняя 30 см, традиционное тесто</p>
                </div>
                <DoubleButton/>
                <div className={'cart__item-price'}>
                    <span>1000$</span>
                </div>
                <button className={'cart__item-remove'}>
                    <Bucket/>
                </button>
            </div>
        </div>
    )
}

export default CartItem