import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { useSelector } from 'react-redux'
import { useCallback, useState } from 'react'
import { CartSVG } from '../../assets/svg'
import { appStateType } from '../../redux'

import CartPopup from './CartPopup'
import { StyledHeaderCart } from './styles'

function HeaderCart() {
  const { totalPrice, totalCount } = useSelector((state: appStateType) => state.cart)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseHover = useCallback(() => {
    setIsHovered((prevState) => !prevState)
  }, [])

  return (
    <StyledHeaderCart
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
      data-testid='headerCart'
      isMobile={isMobile}
    >
      <Link to='/cart' className='button button--cart'>
        <span className='header__cart-price'>{totalPrice} $</span>
        <div className='button__delimiter' />
        <CartSVG />
        <span className='header__cart-count'>{totalCount}</span>
      </Link>
      {isHovered && <CartPopup />}
    </StyledHeaderCart>
  )
}

export default HeaderCart
