import styled, { css, StyledProps } from 'styled-components'

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`

export const StyledDoubleButton = styled.div`
  .double-button {
    display: flex;
    margin-left: auto;
    margin-right: 20px;
    width: 96px;
    height: 32px;
    background-color: rgb(243, 243, 247);
    border-radius: 20px;
    justify-content: space-between;

    span {
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 16px;
      color: rgb(92, 99, 112);
    }
  }
`

export const StyledButtonInDouble = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  height: 100%;
  padding: 0 8px;
  transition: 0.1s linear;

  ${(p: StyledProps<{ disabled: boolean }>) =>
    p.disabled &&
    css`
      pointer-events: none;
      opacity: 0.4;
    `}
  svg {
    fill: #454b54;
  }

  &:hover {
    svg {
      rect {
        fill: var(--black);
      }
    }
  }
`
