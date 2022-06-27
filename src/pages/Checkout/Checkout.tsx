import Cards from 'react-credit-cards'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { useCallback, useMemo, useState } from 'react'
import 'react-credit-cards/lib/styles.scss'
import './style.scss'
import { Form, Formik, FormikProps } from 'formik'
import { makePayment } from '../../redux/checkout/actions'
import { Container, validationSchema, Button } from '../../utills'
import { Arrow } from '../../assets/svg'
import { appStateType, useAppDispatch } from '../../redux'
import CheckoutLinesList from '../../components/Checkout/CheckoutLinesList'

export type initialFormState = {
  number: string
  expiry: string
  cvc: string
  name: string
}

export type FocusType = 'number' | 'name' | 'expiry' | 'cvc'

function Checkout() {
  const [focus, setFocus] = useState<FocusType>('number')
  const { totalPrice } = useSelector((state: appStateType) => state.cart)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const initialValues: initialFormState = {
    number: '',
    expiry: '',
    cvc: '',
    name: ''
  }

  const handlePayClick = (values: initialFormState) => {
    dispatch(makePayment(values, totalPrice, navigate))
  }

  const handleFocus = useCallback(
    (el: FocusType) => {
      setFocus(el)
    },
    [focus]
  )

  const goBack = useCallback(() => navigate(-1), [])

  if (!totalPrice) {
    return <Navigate to='/' />
  }

  return (
    <div className='checkout'>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handlePayClick}
        >
          {(props: FormikProps<initialFormState>) => (
            <Form
              onSubmit={(e) => {
                e.preventDefault()
                props.handleSubmit()
              }}
            >
              <Cards {...props.values} focused={focus} placeholders={{ name: 'CARDHOLDER' }} />
              <CheckoutLinesList handleFocus={handleFocus} />
              <div className='cart__bottom'>
                <p className='cart__bottom-text'>
                  Total Price: <span>{totalPrice}$</span>
                </p>
                <div className='cart__bottom-actions'>
                  <Button empty onClick={goBack}>
                    <Arrow />
                    <span>Go Back</span>
                  </Button>
                  <Button pay type='submit'>
                    <span>Pay</span>
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  )
}

export default Checkout
