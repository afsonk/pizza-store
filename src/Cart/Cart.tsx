import Container from "../shared/Container"
import DoubleButton from "../shared/DoubleButton"
import CartItem from "./CartItem"
import ArrowRightSVG from "./ArrowRightSVG"
import {Link} from "react-router-dom"


function Cart() {
    return (
        <main className={'cart'}>
            <Container>
                <div className={'cart__content'}>
                    <div className={'cart__content-top'}>
                        <h1 className={'cart__header'}><span>3</span> Items</h1>
                    </div>
                    <div className={'cart__list'}>
                        <CartItem/>
                        <CartItem/>
                    </div>
                    <div className={'cart__bottom'}>
                        <p className={'cart__bottom-text'}>Total Price: <span>100$</span></p>
                        <div className={'cart__bottom-actions'}>
                            <Link to={'/'} className={'button button--empty'}>
                                <ArrowRightSVG/>
                                <span>Go Back</span>
                            </Link>
                            <button className={'button pay-btn'}><span>Pay Now</span></button>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default Cart