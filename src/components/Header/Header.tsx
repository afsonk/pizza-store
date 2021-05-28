import {Container} from "../../shared"
import Logo from "./Logo"
import HeaderCart from "./HeaderCart"

function Header() {
    return (
        <header className={'header'}>
            <Container>
                <div className={'header__inner'}>
                    <Logo/>
                    <HeaderCart/>
                </div>
            </Container>
        </header>
    )
}

export default Header
