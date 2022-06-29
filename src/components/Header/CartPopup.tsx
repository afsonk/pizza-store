import { useSelector } from 'react-redux'
import { BrowserView } from 'react-device-detect'
import { appStateType } from '../../redux'
import CartItem from '../Cart/CartItem'
import { getDough, getSize } from '../../utills'
import EmptyCartPopup from './EmptyCartPopup'
import { StyledCartPopup, StyledCartPopupBottom, StyledCartPopupList } from './styles'

function CartPopup() {
  const { items, totalCount, totalPrice } = useSelector((state: appStateType) => state.cart)
  const finalItem = Object.keys(items)

  return (
      <StyledCartPopup
        totalCount={totalCount}
        data-testid='cartPopup'
      >
        {totalCount ? (
          <>
            <StyledCartPopupList>
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
            </StyledCartPopupList>
            <StyledCartPopupBottom>
              <p>Total Price</p>
              <span data-testid='cartPopupPrice'>{totalPrice}$</span>
            </StyledCartPopupBottom>
          </>
        ) : (
          <EmptyCartPopup />
        )}
      </StyledCartPopup>
  )
}

export default CartPopup
