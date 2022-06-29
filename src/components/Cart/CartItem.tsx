import { useDispatch } from 'react-redux'
import classnames from 'classnames'
import { Bucket } from '../../assets/svg'
import { minusItemFromCart, removeItemFromCart, plusItemInCart } from '../../redux/cart/cartSlice'
import { DoubleButton, CartItemType, getUniqueID } from '../../utills'
import { memo } from 'react'
import {
  StyledCartItem,
  StyledCartItemDetail,
  StyledCartItemImage,
  StyledCartItemInner,
  StyledCartItemName, StyledCartItemRemove
} from './styles'

type Props = {
  totalPrice: number
  info: CartItemType
  getDough: (i: number) => string
  getSize: (i: string) => string
  singleItemCount: number
  isPopup?: boolean
}

function CartItem({
  totalPrice,
  info,
  getDough,
  getSize,
  singleItemCount,
  isPopup = false
}: Props) {
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
    <StyledCartItem data-testid='cartItem'>
      <StyledCartItemInner
        isPopup={isPopup}
      >
        {isPopup ? (
          <>
            <StyledCartItemImage src={info.image} alt='pizza' />
            <div className='cart__detailed'>
              <div className='cart__item-top'>
                <StyledCartItemName className='cart__item-name'>{info.name}</StyledCartItemName>
                <button className='cart__item-remove' onClick={handleRemoveClick} type='button'>
                  <Bucket />
                </button>
              </div>
              <div className='cart__item-text'>
                <StyledCartItemDetail className='cart__item-detail'>
                  {getSize(info.size)}, {getDough(info.type)}
                </StyledCartItemDetail>
              </div>
              <div className='cart__item-bottom'>
                <DoubleButton
                  singleItemCount={singleItemCount}
                  handlePlusClick={handlePlusClick}
                  handleMinusClick={handleMinusClick}
                />
                <div className='cart__item-price'>
                  <span>{totalPrice}$</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='cart__item-left'>
              <img className='cart__item-img' src={info.image} alt='pizza' />
              <div className='cart__item-info'>
                <h4 className='cart__item-name'>{info.name}</h4>
                <p className='cart__item-detail'>
                  {getSize(info.size)}, {getDough(info.type)}
                </p>
              </div>
            </div>
            <div className='cart__item-right'>
              <DoubleButton
                singleItemCount={singleItemCount}
                handlePlusClick={handlePlusClick}
                handleMinusClick={handleMinusClick}
              />
              <div className='cart__item-price'>
                <span>{totalPrice}$</span>
              </div>
              <StyledCartItemRemove onClick={handleRemoveClick} type='button'>
                <Bucket />
              </StyledCartItemRemove>
            </div>
          </>
        )}
      </StyledCartItemInner>
    </StyledCartItem>
  )
}

export default memo(CartItem)
