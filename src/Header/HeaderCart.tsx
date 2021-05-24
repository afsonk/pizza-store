import {Link} from "react-router-dom"
import CartSVG from "./CartSVG"


function HeaderCart() {
    return (
        <div className="header__cart">
            <Link to={"/cart"} className="button button--cart">
                <span>{0} $</span>
                <div className="button__delimiter"></div>
                <CartSVG/>
                <span>{0}</span>
            </Link>
        </div>
    )
}

export default HeaderCart
