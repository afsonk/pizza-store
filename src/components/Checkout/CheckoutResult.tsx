import {Container} from "../../shared"
import {Redirect, Link} from "react-router-dom"
import {Arrow} from "../../assets/svg"


export type Props = {
    location: {
        state: {
            id?: number
        }
    }
}

function CheckoutResult({location: {state}}: Props) {

    if (!state.id) {return <Redirect to={'/'}/>}

    return (
        <div className={'result__page'}>
            <Container>
                <div className={'cart__content result-content'}>
                    <h1 className={'result__header'}>Thank you for your purchase!</h1>
                    <p className={'result__text'}>Your order id is {state?.id}</p>
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