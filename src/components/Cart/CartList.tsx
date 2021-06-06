import CartItem from "./CartItem"
import {CartStateItems} from "../../redux/cart/cartSlice"
import {getDough, getSize} from "../../utills"


type Props = {
    items: CartStateItems,
    finalItem: string[],
}

function CartList({items, finalItem}:Props){
    return(
        <div className={'cart__list'}>
            {
                finalItem.map((item, i, arr) => {
                    return <CartItem key={arr[i]}
                                     totalPrice={items[item].totalPrice}
                                     info={items[item].pizzas[0]}
                                     singleItemCount={items[item].pizzas.length}
                                     getDough={getDough}
                                     getSize={getSize}
                    />
                })
            }
        </div>
    )
}

export default CartList