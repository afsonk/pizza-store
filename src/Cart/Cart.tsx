import Container from "../shared/Container"
import CartItem from "./CartItem"
import ArrowRightSVG from "./ArrowRightSVG"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import {appStateType} from "../redux"


function Cart() {
    const {items, totalCount, totalPrice} = useSelector((state: appStateType) => state.cart)
    const finalItem = Object.keys(items)

    function getDough(dough: number): string {
        if (dough === 0) {
            return 'traditional dough'
        } else {
            return 'slim dough'
        }
    }

    function getSize(size: string): string {
        if (size === 'small') {
            return 'Small size 26cm'
        }
        if (size === 'medium') {
            return 'Medium size 30cm'
        } else {
            return 'Large size 40cm'
        }
    }

    return (
        <main className={'cart'}>
            <Container>
                <div className={'cart__content'}>
                    <div className={'cart__content-top'}>
                        <h1 className={'cart__header'}><span>{totalCount}</span>{totalCount === 1 ? ' Item' : ' Items'}
                        </h1>
                    </div>
                    <div className={'cart__list'}>
                        {
                            finalItem.map((item, i) => {
                                return <CartItem totalPrice={items[item].totalPrice}
                                                 info={items[item].pizzas[0]}
                                                 singleItemCount={items[item].pizzas.length}
                                                 getDough={getDough}
                                                 getSize={getSize}
                                />
                            })
                        }
                    </div>
                    <div className={'cart__bottom'}>
                        <p className={'cart__bottom-text'}>Total Price: <span>{totalPrice}$</span></p>
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