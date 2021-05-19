import Container from "../shared/Container"
import Logo from "./Logo";

function Header() {
    return (
        <header className={'header'}>
            <Container>
                <div className={'header__inner'}>
                    <Logo/>
                </div>
            </Container>
        </header>
    )
}

export default Header
