import logo from '../../assets/img/logo.png'
import {NavLink} from "react-router-dom"

function Logo() {
    return (
        <NavLink to={'/'} className={'logo'}>
            <img className={'logo__image'} src={logo} alt={'logo'}/>
        </NavLink>
    )
}

export default Logo
