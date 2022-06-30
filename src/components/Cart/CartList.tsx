import CartItem from './CartItem'
import { getDough, getSize } from '../../utills'
import { useSelector } from 'react-redux'
import { appStateType } from '../../redux'

function CartList() {
  const { items } = useSelector((state: appStateType) => state.cart)
  const finalItem = Object.keys(items)

  return (
    <div className='cart__list'>
      {finalItem.map((item) => {
        return (
          <CartItem
            key={items[item].pizzas[0].id}
            totalPrice={items[item].totalPrice}
            info={items[item].pizzas[0]}
            singleItemCount={items[item].totalCount}
            getDough={getDough}
            getSize={getSize}
          />
        )
      })}
    </div>
  )
}

export default CartList
