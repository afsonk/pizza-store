import logo from '../../assets/img/logo.png'
import { ReactElement } from 'react'
import { StyledLogo, StyledLogoImage, StyledLogoText } from './styles'

function Logo(): ReactElement {
  return (
    <StyledLogo to='/'>
      <StyledLogoImage src={logo} alt='logo' />
      <StyledLogoText>
        <h1>PIZZA CITY</h1>
        <p>the best pizza in the world</p>
      </StyledLogoText>
    </StyledLogo>
  )
}

export default Logo
