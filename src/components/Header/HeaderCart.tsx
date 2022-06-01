import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import classnames from 'classnames'
import { CartSVG } from '../../assets/svg'
import { appStateType } from '../../redux'
import CartPopup from './CartPoup'

function HeaderCart() {
  const { totalPrice, totalCount } = useSelector((state: appStateType) => state.cart)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseHover = () => {
    setIsHovered((prevState) => !prevState)
  }

  return (
    <div
      className={classnames('mobile', 'header__cart')}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
    >
      <Link to='/cart' className='button button--cart'>
        <span className='header__cart-price'>{totalPrice} $</span>
        <div className='button__delimiter' />
        <CartSVG />
        <span className='header__cart-count'>{totalCount}</span>
      </Link>
      {isHovered && <CartPopup />}
    </div>
  )
}

export default HeaderCart
