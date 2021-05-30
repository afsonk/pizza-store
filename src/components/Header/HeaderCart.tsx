import {Link} from "react-router-dom"
import {CartSVG} from "../../assets/svg"
import {useSelector} from "react-redux"
import {appStateType} from "../../redux"
import {useState} from "react"
import CartPopup from "./CartPoup"


function HeaderCart() {
    const {totalPrice, totalCount} = useSelector((state:appStateType ) => state.cart)
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseHover = () => {
        setIsHovered(prevState => !prevState)
    }

    return (
        <div className="header__cart" onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
            <Link to={"/cart"} className="button button--cart">
                <span>{totalPrice} $</span>
                <div className="button__delimiter"></div>
                <CartSVG/>
                <span>{totalCount}</span>
            </Link>
            {
                isHovered && <CartPopup/>
            }
        </div>
    )
}

export default HeaderCart
