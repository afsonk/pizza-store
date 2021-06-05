import {Container} from "../../utills"
import {Redirect, Link} from "react-router-dom"
import {Arrow} from "../../assets/svg"
import success from "../../assets/img/success.png"


export type Props = {
    location: {
        state: {
            id?: number,
            name?: string
        }
    }
}

function CheckoutResult({location: {state}}: Props) {

    if (!state.id) {return <Redirect to={'/'}/>}

    return (
        <div className={'result__page'}>
            <Container>
                <div className={'cart__content result-content'}>
                    <h1 className={'cart__header empty'}>Thank you {state.name} for your purchase!</h1>
                    <p className={'cart__text'}>Your order id is {state?.id}</p>
                    <img src={success} alt="success"/>
                    <Link className={'button button--empty'} to={'/'}>
                        <Arrow/>
                        <span>Go Back</span>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default CheckoutResult