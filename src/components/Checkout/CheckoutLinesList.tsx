import CheckoutLine from './CheckoutLine'
import { FocusType } from '../../pages/Checkout/Checkout'

type Props = {
  handleFocus: (el: FocusType) => void
}

function CheckoutLinesList({ handleFocus }: Props) {
  const fieldsArray = [
    { name: 'number', label: 'Card Number', place: '4242 4242 4242 4242' },
    { name: 'name', label: 'Cardholder Name', place: 'John Smith' },
    { name: 'cvc', label: 'CVC', place: '123' },
    { name: 'expiry', label: 'Expiry', place: '12/25' }
  ] as Array<{ name: FocusType; label: string; place: string }>

  return (
    <>
      {fieldsArray.map((el) => (
        <CheckoutLine
          key={el.name}
          name={el.name}
          label={el.label}
          handleFocus={handleFocus}
          place={el.place}
        />
      ))}
    </>
  )
}

export default CheckoutLinesList
