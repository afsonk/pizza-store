import Cards from 'react-credit-cards'
import {useDispatch, useSelector} from "react-redux"
import {appStateType} from "../../redux"
import {useHistory} from "react-router-dom"
import {useState} from "react"
import 'react-credit-cards/lib/styles.scss'
import './style.scss'
import {makePayment} from "../../redux/checkout/actions"
import {Container, validationSchema} from "../../shared"
import {Arrow} from "../../assets/svg"
import { Form, Formik, FormikProps} from "formik"
import CheckoutLine from "./CheckoutLine"

export type initialFormState = {
    number: string,
    expiry: string,
    cvc: string,
    name: string
}

function Checkout() {
    const initialValues: initialFormState = {
        number: '',
        expiry: '',
        cvc: '',
        name: ''
    }
    const fieldsArray = [
        {name: 'number', label: 'Card Number'},
        {name: 'name', label: 'Cardholder Name'},
        {name: 'cvc', label: 'CVC'},
        {name: 'expiry', label: 'Expiry'}
    ]

    const [focus, setFocus] = useState<string>('number')

    const {totalPrice} = useSelector((state: appStateType) => state.cart)

    const history = useHistory()
    const dispatch = useDispatch()

    const handlePayClick = (values: initialFormState) => {
        dispatch(makePayment(values, totalPrice))
    }
    const handleFocus = (el: string) => setFocus(el)


    return (
        <div className={'checkout'}>
            <Container>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handlePayClick}
                >
                    {(props: FormikProps<initialFormState>) => (
                        <Form onSubmit={(e) => {
                            e.preventDefault()
                            props.handleSubmit()
                        }}>
                            <Cards
                                {...props.values}
                                // @ts-ignore
                                focused={focus}
                            />
                            {
                                fieldsArray.map(el => <CheckoutLine key={el.name} name={el.name} label={el.label}
                                                                    handleFocus={handleFocus}/>)
                            }
                            <div className={'cart__bottom'}>
                                <p className={'cart__bottom-text'}>Total Price: <span>{totalPrice}$</span></p>
                                <div className={'cart__bottom-actions'}>
                                    <a className={'button button--empty'} onClick={() => history.goBack()}>
                                        <Arrow/>
                                        <span>Go Back</span>
                                    </a>
                                    <button className={'button pay-btn'} type={"submit"} >
                                        <span>Pay</span>
                                    </button>
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


