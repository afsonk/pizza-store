import { render, screen } from '@testing-library/react'
import CheckoutLinesList from './CheckoutLinesList'
import { Formik } from 'formik'

describe('CheckoutLinesList component test', () => {
  const handleFocusMock = jest.fn()

  it('should render 5 CheckoutLines without crashing', () => {
    render(
      <Formik
        initialValues={{
          number: '',
          expiry: '',
          cvc: '',
          name: ''
        }}
        onSubmit={handleFocusMock}
      >
        <CheckoutLinesList handleFocus={handleFocusMock} />
      </Formik>
    )

    expect(screen.getAllByTestId('checkoutLine')).toHaveLength(4)
  })
})
