import { useSelector } from 'react-redux'
import classnames from 'classnames'
import { BrowserView } from 'react-device-detect'
import { appStateType } from '../../redux'
import CartItem from '../Cart/CartItem'
import { getDough, getSize } from '../../utills'
import EmptyCartPopup from './EmptyCartPopup'

function CartPopup() {
  const { items, totalCount, totalPrice } = useSelector((state: appStateType) => state.cart)
  const finalItem = Object.keys(items)

  return (
    <BrowserView>
      <div
        className={classnames('cart__popup', {
          fulled: totalCount,
          empty: !totalCount
        })}
        data-testid='cartPopup'
      >
        {totalCount ? (
          <>
            <div className='cart__popup-list'>
              {finalItem.map((item, i, arr) => {
                return (
                  <CartItem
                    key={arr[i]}
                    totalPrice={items[item].totalPrice}
                    info={items[item].pizzas[0]}
                    singleItemCount={items[item].totalCount}
                    getDough={getDough}
                    getSize={getSize}
                    isPopup
                  />
                )
              })}
            </div>
            <div className='cart__popup-bottom'>
              <p>Total Price</p>
              <span data-testid='cartPopupPrice'>{totalPrice}$</span>
            </div>
          </>
        ) : (
          <EmptyCartPopup />
        )}
      </div>
    </BrowserView>
  )
}

export default CartPopup
