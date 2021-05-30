import CartItem from "./CartItem"
import {CartStateItems} from "../../redux/cart/cartReducer"
import {getDough, getSize} from "../../shared"


type Props = {
    items: CartStateItems,
    finalItem: string[],
}

function CartList({items, finalItem}:Props){
    return(
        <div className={'cart__list'}>
            {
                finalItem.map(item => {
                    return <CartItem key={items[item].pizzas[0].id}
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