import * as Yup from "yup"
import valid from "card-validator"

export const validationSchema = Yup.object().shape({
    number: Yup.string()
        .test('test-number',
            'Credit Card number is invalid',
            value => valid.number(value).isValid)
        .required('Credit Card number is required'),
    expiry:  Yup.string()
        .typeError('Not a valid expiration date. Example: MM/YY')
        .max(5, 'Not a valid expiration date. Example: MM/YY')
        .matches(
            /([0-9]{2})\/([0-9]{2})/,
            'Not a valid expiration date. Example: MM/YY'
        )
        .required('Expiration date is required')
        .test(
            'test-credit-card-expiration-date',
            'Invalid Expiration Month',
            expirationDate => {
                if (!expirationDate) {
                    return false
                }
                const today = new Date()
                    .getFullYear()
                    .toString()
                    .substr(-2)

                const [expMonth] = expirationDate.split('/')

                if (Number(expMonth) > 12) {
                    return false
                }
                return true
            }
        )
        .test(
            'test-credit-card-expiration-date',
            'Invalid Expiration Date has past',
            expirationDate => {
                if (!expirationDate) {
                    return false
                }

                const today = new Date()
                const monthToday = today.getMonth() + 1
                const yearToday = today
                    .getFullYear()
                    .toString()
                    .substr(-2)

                const [expMonth, expYear] = expirationDate.split('/')

                if (Number(expYear) < Number(yearToday)) {
                    return false
                } else if (
                    Number(expMonth) < monthToday &&
                    Number(expYear) <= Number(yearToday)
                ) {
                    return false
                }

                return true
            }
        ),
    cvc: Yup.string()
        .test(
            value => valid.cvv(value).isValid
        )
        .label('CVC')
        .min(3)
        .max(4)
        .required('CVC code is required'),
    name: Yup.string()
        .label('Name on card')
        .required('Cardholder is Required'),
})