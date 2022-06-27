import * as Yup from 'yup'
import valid from 'card-validator'

export const validationSchema = Yup.object().shape({
  number: Yup.string()
    .test('test-number', 'Credit Card number is invalid', (value) => valid.number(value).isValid)
    .required('Credit Card number is required')
    .max(16, 'Maximum length is 16 characters'),
  expiry: Yup.string()
    .typeError('Not a valid expiration date. Example: MM/YY')
    .max(5, 'Not a valid expiration date. Example: MM/YY')
    .matches(/([0-9]{2})\/([0-9]{2})/, 'Not a valid expiration date. Example: MM/YY')
    .required('Expiration date is required')
    .test('test-credit-card-expiration-date', 'Invalid Expiration Month', (expirationDate) => {
      if (!expirationDate) {
        return false
      }

      const [expMonth] = expirationDate.split('/')

      return Number(expMonth) <= 12
    })
    .test(
      'test-credit-card-expiration-date',
      'Invalid Expiration Date has past',
      (expirationDate) => {
        if (!expirationDate) {
          return false
        }

        const today = new Date()
        const monthToday = today.getMonth() + 1
        const yearToday = today.getFullYear().toString().substr(-2)

        const [expMonth, expYear] = expirationDate.split('/')

        if (Number(expYear) < Number(yearToday)) {
          return false
        }
        return !(Number(expMonth) < monthToday && Number(expYear) <= Number(yearToday))
      }
    ),
  cvc: Yup.string()
    .test((value) => valid.cvv(value).isValid)
    .label('CVC')
    .min(3, 'Minimum length is 3')
    .max(3, 'Maximum length is 3')
    .required('CVC code is required'),
  name: Yup.string()
    .test('Cardholder name is invalid', (value) => valid.cardholderName(value).isValid)
    .label('Name on card')
    .required('Cardholder is Required')
})
