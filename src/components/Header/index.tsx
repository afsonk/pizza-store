import { useLocation } from 'react-router-dom'

import { Container } from '../../utills'
import './style.scss'
import Logo from './Logo'
import HeaderCart from './HeaderCart'
import { ReactElement } from 'react'

function Header(): ReactElement {
  const location = useLocation()
  return (
    <header className='header'>
      <Container>
        <div className='header__inner'>
          <Logo />
          {location.pathname === '/' && <HeaderCart />}
        </div>
      </Container>
    </header>
  )
}

export default Header
