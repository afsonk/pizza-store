import {Button, Container} from "../../shared"
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
                            <Button empty onClick={() => history.goBack()}>
                                <Arrow/>
                                <span>Go Back</span>
                            </Button>
                            <Link to={{pathname:'/checkout', state: { totalPrice }}}><Button pay><span>Checkout</span></Button></Link>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default Cart