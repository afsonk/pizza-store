import {Container} from "../../shared"
import './style.scss'
import Logo from "./Logo"
import HeaderCart from "./HeaderCart"
import {Route} from "react-router-dom"

function Header() {
    return (
        <header className={'header'}>
            <Container>
                <div className={'header__inner'}>
                    <Logo/>
                    <Route exact path={'/'}>
                        <HeaderCart/>
                    </Route>
                </div>
            </Container>
        </header>
    )
}

export default Header
