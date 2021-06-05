import {Bucket} from "../../assets/svg"
import {useDispatch} from "react-redux"
import {minusItemFromCart, plusItemInCart, removeItemFromCart} from "../../redux/cart/actions"
import {DoubleButton, CartItemType, getUniqueID} from "../../utills"
import classnames from "classnames"


type Props = {
    totalPrice: number,
    info: CartItemType,
    getDough: (i: number) => string,
    getSize: (i: string) => string,
    singleItemCount: number,
    isPopup?: boolean
}

function CartItem({totalPrice, info, getDough, getSize, singleItemCount, isPopup}: Props) {
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
            <div className={classnames('cart__item-inner', {
                'popup': isPopup
            })}>
                {
                    isPopup
                        ? <>
                            <img
                                className={'cart__item-img'}
                                src={info.image}
                                alt="pizza"/>
                            <div className={'cart__detailed'}>
                                <div className={'cart__item-top'}>
                                    <h4 className={'cart__item-name'}>{info.name}</h4>
                                    <button className={'cart__item-remove'} onClick={handleRemoveClick}>
                                        <Bucket/>
                                    </button>
                                </div>
                                <div className={'cart__item-text'}>
                                    <p className={'cart__item-detail'}>{getSize(info.size)}, {getDough(info.type)}</p>
                                </div>
                                <div className={'cart__item-bottom'}>
                                    <DoubleButton singleItemCount={singleItemCount}
                                                  handlePlusClick={handlePlusClick}
                                                  handleMinusClick={handleMinusClick}/>
                                    <div className={'cart__item-price'}>
                                        <span>{totalPrice}$</span>
                                    </div>
                                </div>
                            </div>
                        </>
                        : <>
                        <div className={'cart__item-left'}>
                            <img
                                className={'cart__item-img'}
                                src={info.image}
                                alt="pizza"/>
                            <div className={'cart__item-info'}>
                                <h4 className={'cart__item-name'}>{info.name}</h4>
                                <p className={'cart__item-detail'}>{getSize(info.size)}, {getDough(info.type)}</p>
                            </div>
                        </div>
                            <div className={'cart__item-right'}>
                                <DoubleButton singleItemCount={singleItemCount}
                                              handlePlusClick={handlePlusClick}
                                              handleMinusClick={handleMinusClick}/>
                                <div className={'cart__item-price'}>
                                    <span>{totalPrice}$</span>
                                </div>
                                <button className={'cart__item-remove'} onClick={handleRemoveClick}>
                                    <Bucket/>
                                </button>
                            </div>
                        </>
                }

            </div>
        </div>
    )
}

export default CartItem