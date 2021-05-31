import {useSelector} from "react-redux"
import {appStateType} from "../../redux"
import CartItem from "../Cart/CartItem"
import {getDough, getSize} from "../../shared"
import classnames from "classnames"
import EmptyCartPopup from "./EmptyCartPopup"


function CartPopup() {
    const {items, totalCount, totalPrice} = useSelector((state: appStateType) => state.cart)
    const finalItem = Object.keys(items)

    return (
        <div className={classnames('cart__popup', {
            'fulled': totalCount,
            'empty': !totalCount
        })}>
            {
                totalCount
                    ? <>
                        <div className={'cart__popup-list'}>
                            {
                                finalItem.map((item, i, arr) => {
                                    return <CartItem key={arr[i]}
                                                     totalPrice={items[item].totalPrice}
                                                     info={items[item].pizzas[0]}
                                                     singleItemCount={items[item].pizzas.length}
                                                     getDough={getDough}
                                                     getSize={getSize}
                                                     isPopup
                                    />
                                })
                            }
                        </div>
                        <div className={'cart__popup-bottom'}>
                            <p>Total Price</p>
                            <span>{totalPrice}$</span>
                        </div>
                    </>
                    : <EmptyCartPopup/>
            }

        </div>
    )
}

export default CartPopup