import styled, { css, StyledProps } from 'styled-components'

export const StyledCartItem = styled.div`
  padding: 20px 0;
  border-top: 1px solid rgb(226, 226, 233);

  &:last-child {
    border-bottom: 1px solid rgb(226, 226, 233);
  }
`

export const StyledCartItemInner = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  @media (max-width: 530px) {
    display: block;
  }

  ${(p: StyledProps<{ isPopup: boolean }>) => p.isPopup && css`
    align-items: flex-start;

    .cart__item-top {
      display: flex;
      justify-content: space-between;

      .cart__item-remove {
        margin-left: auto;
        margin-right: 0;
      }
    }

    .cart__item-text {
      text-align: left;

      p {
        margin-top: 7px;
      }
    }

    .cart__item-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;

      .double-button {
        margin-left: 0;
      }
    }
  `}
`

export const StyledCartItemImage = styled.img`
  font-size: 0;
  height: 60px;
  max-width: 60px;
`

export const StyledCartItemName = styled.h4`
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: var(--black);
  margin: 0 0 4px;
`

export const StyledCartItemDetail = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: rgb(92, 99, 112);
`

export const StyledCartItemRemove = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  margin: 0 20px;
  .bucket{
    path{
      transform-origin: 17px 5px;
      transition: transform 0.2s ease-in-out 0s, fill;
    }
  }
  &:hover{
    .bucket{
      path{
        fill: var(--orange);
      }
      path:last-child{
        transform: rotate(10deg);
      }
    }
  }
`