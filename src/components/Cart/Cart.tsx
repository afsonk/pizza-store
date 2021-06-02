import {Container} from "../../shared"
import CartList from "./CartList"
import {Redirect, useHistory, Link} from "react-router-dom"
import {useSelector} from "react-redux"
import {appStateType} from "../../redux"
import {Arrow} from "../../assets/svg"
import './style.scss'


function Cart() {
    const {items, totalCount, totalPrice} = useSelector((state: appStateType) => state.cart)
    const finalItem = Object.keys(items)
    const history = useHistory()

    if(!totalCount){
        return <Redirect to={'/cartEmpty'}/>
    }

    return (
        <main className={'cart'}>
            <Container>
                <div className={'cart__content'}>
                    <div className={'cart__content-top'}>
                        <h1 className={'cart__header'}><span>{totalCount}</span>{totalCount === 1 ? ' Item' : ' Items'}
                        </h1>
                    </div>
                    <CartList finalItem={finalItem} items={items} />
                    <div className={'cart__bottom'}>
                        <p className={'cart__bottom-text'}>Total Price: <span>{totalPrice}$</span></p>
                        <div className={'cart__bottom-actions'}>
                            <a className={'button button--empty'} onClick={() => history.goBack()}>
                                <Arrow/>
                                <span>Go Back</span>
                            </a>
                            <Link to={'/checkout'}><button className={'button pay-btn'}><span>Checkout</span></button></Link>
                        </div>
                    </div>
                </div>
            </Container>

        </main>
    )
}

export default Cart