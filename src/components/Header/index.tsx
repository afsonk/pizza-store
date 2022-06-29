import { useLocation } from 'react-router-dom'
import { ReactElement } from 'react'

import { Container } from '../../utills'
import { StyledHeaderInner } from './styles'
import Logo from './Logo'
import HeaderCart from './HeaderCart'

function Header(): ReactElement {
  const location = useLocation()
  return (
    <header>
      <Container>
        <StyledHeaderInner>
          <Logo />
          {location.pathname === '/' && <HeaderCart />}
        </StyledHeaderInner>
      </Container>
    </header>
  )
}

export default Header
