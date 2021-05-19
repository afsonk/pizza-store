import logo from '../../assets/img/logo.png'
import {NavLink} from "react-router-dom"

function Logo() {
    return (
        <NavLink to={'/'} className={'header__logo'}>
            <img className={'logo__image'} src={logo} alt={'logo'}/>
            <div className={'logo__text'}>
                <h1>PIZZA CITY</h1>
                <p>the best pizza in the world</p>
            </div>
        </NavLink>
    )
}

export default Logo
