import DoubleButton from "../shared/DoubleButton"
import Bucket from "./BucketSVG"
import {CartItemType} from "../shared/types"
import {useDispatch} from "react-redux"
import {getUniqueID} from "../shared/getUniqueID"
import {minusItemFromCart, plusItemInCart, removeItemFromCart} from "../redux/actionCreators"

type Props = {
    totalPrice: number,
    info: CartItemType,
    getDough: (i: number) => string,
    getSize: (i: string) => string,
    singleItemCount: number
}

function CartItem({totalPrice, info, getDough, getSize, singleItemCount}: Props) {
    const dispatch = useDispatch()
    const pizzaId = getUniqueID(info)

    const handlePlusClick = () => {
        dispatch(plusItemInCart(pizzaId))
    }
    const handleRemoveClick = () => {
        dispatch(removeItemFromCart(pizzaId))
    }
    const handleMinusClick = () => {
        dispatch(minusItemFromCart(pizzaId))
    }

    return (
        <div className={'cart__item'}>
            <div className={'cart__item-top'}>
                <img
                    className={'cart__item-img'}
                    src={info.image}
                    alt="pizza"/>
                <div className={'cart__item-info'}>
                    <h4 className={'cart__item-name'}>{info.name}</h4>
                    <p className={'cart__item-detail'}>{getSize(info.size)}, {getDough(info.type)}</p>
                </div>
                <DoubleButton singleItemCount={singleItemCount} handlePlusClick={handlePlusClick} handleMinusClick={handleMinusClick} />
                <div className={'cart__item-price'}>
                    <span>{totalPrice}$</span>
                </div>
                <button className={'cart__item-remove'} onClick={handleRemoveClick}>
                    <Bucket/>
                </button>
            </div>
        </div>
    )
}

export default CartItem