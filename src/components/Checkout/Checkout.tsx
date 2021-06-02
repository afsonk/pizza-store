import Cards from 'react-credit-cards'
import 'react-credit-cards/lib/styles.scss'
import './style.scss'
import CheckoutLine from './CheckoutLine'
import {useDispatch, useSelector} from "react-redux"
import {appStateType} from "../../redux"
import {CheckoutStateType} from "../../redux/checkout/checkoutReducer"
import {setCardDetails} from "../../redux/checkout/actions"
import {Container} from "../../shared"
import {Arrow} from "../../assets/svg"
import {Link, useHistory} from "react-router-dom"


function Checkout() {
    const {cvc, expiry, name, number} = useSelector((state: appStateType): CheckoutStateType => state.checkout)
    const {totalPrice} = useSelector((state: appStateType) => state.cart)

    const history = useHistory()
    const dispatch = useDispatch()

    const handleChange = (name: string) => (e: any) => {
        const {target: {value}} = e
        dispatch(setCardDetails({name, value}))
    }

    return (
        <div className={'checkout'}>
            <Container>
                <Cards
                    cvc={cvc}
                    expiry={expiry}
                    name={name}
                    number={number}
                    focused={'number'}
                    callback={(...args) => console.log(args)}
                />
                <form className={'checkout__form'}>
                    <div className={'checkout__top'}>
                        <CheckoutLine value={number} handleChange={handleChange} label={"Card Number"} text={"number"} length={16}/>
                        <CheckoutLine value={name} handleChange={handleChange} label={"Card Holder"} text={"name"}/>
                        <CheckoutLine value={cvc} handleChange={handleChange} label={"CVC"} text={"cvc"} length={3}/>
                        <CheckoutLine value={expiry} handleChange={handleChange} label={"Expiry date"} text={"date"}/>
                    </div>
                    <div className={'cart__bottom'}>
                        <p className={'cart__bottom-text'}>Total Price: <span>{totalPrice}$</span></p>
                        <div className={'cart__bottom-actions'}>
                            <a className={'button button--empty'} onClick={() => history.goBack()}>
                                <Arrow/>
                                <span>Go Back</span>
                            </a>
                            <Link to={'/checkout'}>
                                <button className={'button pay-btn'} type={"submit"}><span>Pay</span></button>
                            </Link>
                        </div>
                    </div>

                </form>
            </Container>
        </div>
    )
}

export default Checkout