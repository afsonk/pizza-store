import CartItem from "./CartItem"
import {CartStateItems} from "../../redux/cart/cartReducer"


type Props = {
    items: CartStateItems,
    finalItem: string[],
}

function CartList({items, finalItem}:Props){

    function getDough(dough: number): string {
        switch (dough) {
            case 0:
                return 'traditional dough'
            default:
                return 'slim dough'
        }
    }

    function getSize(size: string): string {
        switch (size) {
            case 'small':
                return 'Small size 26cm'
            case 'medium':
                return 'Medium size 30cm'
            default:
                return 'Large size 40cm'
        }
    }
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