import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useCallback } from 'react'

import { Button, Container } from '../../utills'
import CartList from '../../components/Cart/CartList'
import { appStateType } from '../../redux'
import { Arrow } from '../../assets/svg'
import './style.scss'
import { isCartEmptySelector } from '../../redux/cart/selectors'
import CartEmpty from '../CartEmpty/CartEmpty'

function Cart() {
  const { totalCount, totalPrice } = useSelector((state: appStateType) => state.cart)
  const navigate = useNavigate()
  const isCartEmpty = useSelector(isCartEmptySelector)

  const navigateBack = useCallback(() => navigate(-1), [navigate])

  return (
    <>
      {!isCartEmpty ? (
        <main className='cart' data-testid='cartPage'>
          <Container>
            <div className='cart__content'>
              <div className='cart__content-top'>
                <h1 className='cart__header' data-testid='cartHeader'>
                  <span data-testid='cartTotalCount'>{totalCount}</span>
                  {totalCount === 1 ? ' Item' : ' Items'}
                </h1>
              </div>
              <CartList />
              <div className='cart__bottom'>
                <p className='cart__bottom-text'>
                  Total Price: <span data-testid='cartTotalPrice'>{totalPrice}$</span>
                </p>
                <div className='cart__bottom-actions'>
                  <Button empty onClick={navigateBack}>
                    <Arrow />
                    <span>Go Back</span>
                  </Button>
                  <Link to='/checkout' state={totalPrice}>
                    <Button pay>
                      <span>Checkout</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </main>
      ) : (
        <CartEmpty />
      )}
    </>
  )
}

export default Cart
