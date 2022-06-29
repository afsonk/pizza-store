import styled, { css, StyledProps } from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const StyledHeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

export const StyledLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  grid-column-gap: 5px;
  text-decoration: none;
`

export const StyledLogoImage = styled.img`
  width: 100%;
  max-width: 65px;
  height: 65px;
  display: block;
`

export const StyledLogoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-transform: uppercase;
    font-size: 24px;
    line-height: 26px;
    color: var(--black);
    font-weight: 800;
    margin: 3px 0;
  }

  p {
    color: var(--grey);
  }
`

export const StyledHeaderCart = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 70px;
  @media (max-width: 805px) {
    ${(props: StyledProps<{isMobile: boolean}>) => props.isMobile && css`{
      position: fixed;
      right: 20px;
      bottom: 20px;

      .header__cart-price, .button__delimiter {
        display: none;
      }

      .header__cart-count {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 25px;
        height: 24px;
        margin: 0;
        position: absolute;
        top: 0;
        right: 0;
        padding: 2px;
        line-height: 0.9;
        background-color: #fff;
        border: 1px solid var(--orange);
        border-radius: 50%;
        color: var(--orange);
      }

      .button {
        min-width: inherit;
      }

      .button--cart {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 56px;
        height: 56px;
        border-radius: 28px;
        background-image: radial-gradient(100% 100% at 50% 0%, RGB(255, 111, 0) 0%, RGB(247, 91, 0) 100%);
        box-shadow: RGB(0 0 0 / 20%) 0 10px 20px;
        transition: all 0.25s ease 0s;
        user-select: none;
        z-index: 3;
      }

      .cart__svg {
        position: absolute;
        width: 25px;
        height: 25px;
      }
    }`}
  }
`

export const StyledCartPopup = styled.div`
  position: absolute;
  right: 0;
  top: 60px;
  z-index: 5;
  padding: ${(p: StyledProps<{ totalCount?: number }>) => p.totalCount ? '20px 15px' : '40px'};
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: RGB(6 5 50 / 15%) 0 4px 22px -6px;;
  background-color: #fff;
  text-align: center;

  h2 {
    margin-top: 10px;
    line-height: 26px;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
  }
`

export const StyledCartPopupList = styled.div`
  max-height: 340px;
  width: 352px;
  overflow: auto;
  transition: .1s linear;

  .cart__item:first-child {
    border-top: none;
  }

  .cart__item {
    margin: 0 10px;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 16px;
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d6d6d6;
    border-radius: 16px;
    border: 4px solid #ffffff;

    &:hover {
      background-color: #acacac;
    }
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`

export const StyledCartPopupBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 19px;
  font-weight: 500;
  margin: 0 10px;

  span {
    color: #ff6900;
  }
`

