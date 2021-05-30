import {Link} from 'react-router-dom'
import empty from '../../assets/img/empty-cart.png'
import {Container} from "../../shared"
import {Arrow} from "../../assets/svg"




function CartEmpty() {
    return (
        <main className={'cart'}>
            <Container>
                <div className={'cart__content empty'}>
                    <div className={'cart__content-top'}>
                        <h1 className={'cart__header empty'}>Cart is empty</h1>
                        <p className={'cart__text'}>Add something from menu</p>
                        <img src={empty} alt="empty-cart"/>
                    </div>
                    <div className={'cart__content-bottom'}>
                        <Link to={'/'} className={'button button--empty'}>
                            <Arrow/>
                            <span>Go Back</span>
                        </Link>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default CartEmpty