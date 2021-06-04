import Cards from 'react-credit-cards'
import {useDispatch} from "react-redux"
import {Redirect, useHistory} from "react-router-dom"
import {useState} from "react"
import 'react-credit-cards/lib/styles.scss'
import './style.scss'
import {makePayment} from "../../redux/checkout/actions"
import {Container, validationSchema, Button} from "../../shared"
import {Arrow} from "../../assets/svg"
import { Form, Formik, FormikProps} from "formik"
import CheckoutLine from "./CheckoutLine"

export type initialFormState = {
    number: string,
    expiry: string,
    cvc: string,
    name: string
}

export type Props = {
    location: {
        state: {
            totalPrice?: number
        }
    }
}

export type FocusType = "number" |"name" |"expiry" |"cvc"

function Checkout({location: {state}}: Props) {
    const initialValues: initialFormState = {
        number: '',
        expiry: '',
        cvc: '',
        name: ''
    }
    const fieldsArray = [
        {name: 'number', label: 'Card Number', place: "4242 4242 4242 4242"},
        {name: 'name', label: 'Cardholder Name', place: "John Smith"},
        {name: 'cvc', label: 'CVC', place: "123"},
        {name: 'expiry', label: 'Expiry', place: "12/25"}
    ] as Array<{name: FocusType, label: string, place: string}>

    const [focus, setFocus] = useState<FocusType>('number')

    const history = useHistory()
    const dispatch = useDispatch()

    const handlePayClick = (values: initialFormState) => {
        dispatch(makePayment(values, state?.totalPrice!, history))
    }
    const handleFocus = (el: FocusType) => {
        setFocus(el)
    }

    if(!state.totalPrice){
        return <Redirect to={'/'}/>
    }

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
                                focused={focus}
                                placeholders={{name: 'CARDHOLDER'}}
                            />
                            {
                                fieldsArray.map(el => <CheckoutLine key={el.name} name={el.name} label={el.label}
                                                                    handleFocus={handleFocus} place={el.place}/>)
                            }
                            <div className={'cart__bottom'}>
                                <p className={'cart__bottom-text'}>Total Price: <span>{state.totalPrice}$</span></p>
                                <div className={'cart__bottom-actions'}>
                                    <Button empty onClick={() => history.goBack()}>
                                        <Arrow/>
                                        <span>Go Back</span>
                                    </Button>
                                    <Button pay type={"submit"} >
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


