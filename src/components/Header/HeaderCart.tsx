import {Link} from "react-router-dom"
import CartSVG from "../../assets/svg/CartSVG"
import {useSelector} from "react-redux"
import {appStateType} from "../../redux"


function HeaderCart() {
    const {totalPrice, totalCount} = useSelector((state:appStateType ) => state.cart)
    return (
        <div className="header__cart">
            <Link to={"/cart"} className="button button--cart">
                <span>{totalPrice} $</span>
                <div className="button__delimiter"></div>
                <CartSVG/>
                <span>{totalCount}</span>
            </Link>
        </div>
    )
}

export default HeaderCart
