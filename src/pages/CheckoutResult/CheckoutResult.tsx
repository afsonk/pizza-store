import { Navigate, Link, useLocation } from 'react-router-dom'
import { Container } from '../../utills'
import { Arrow } from '../../assets/svg'
import success from '../../assets/img/success.png'

export type Props = {
  state: {
    id?: number
    name?: string
  }
}

function CheckoutResult() {
  const { state } = useLocation() as Props
  if (!state.id) {
    return <Navigate to='/' />
  }

  return (
    <div className='result__page'>
      <Container>
        <div className='cart__content result-content'>
          <h1 className='cart__header empty'>Thank you {state.name} for your purchase!</h1>
          <p className='cart__text'>Your order id is {state?.id}</p>
          <img src={success} alt='success' />
          <Link className='button button--empty' to='/'>
            <Arrow />
            <span>Go Back</span>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default CheckoutResult
