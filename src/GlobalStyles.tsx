import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --black: #232323;
    --grey: #8a8a8a;
    --light-grey: #ffeeee;
    --orange: rgb(255, 105, 0);
    --shadow: RGB(6 5 50 / 15%) 0px 4px 22px -6px;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html {
    font-size: 15px;
  }

  ul {
    list-style: none;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }


  .double-button{
    display: flex;
    margin-left: auto;
    margin-right: 20px;
    width: 96px;
    height: 32px;
    background-color: rgb(243, 243, 247);
    border-radius: 20px;
    justify-content: space-between;

    button{
      background: transparent;
      cursor: pointer;
      border: none;
      height: 100%;
      padding: 0 8px;
      transition: .1s linear;

      &.disabled{
        pointer-events: none;
        opacity: 0.4;
      }
      svg{
        fill: #454B54;
      }
      &:hover{
        svg{
          rect{
            fill: var(--black);
          }
        }
      }
    }
    span{
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 16px;
      color: rgb(92, 99, 112);
    }

  }

  .button {
    display: inline-block;
    background-color: var(--orange);
    border-radius: 30px;
    padding: 10px 20px;
    min-width: 100px;
    text-align: center;
    cursor: pointer;
    transition: all .1s ease-in-out;
    border: 1px solid transparent;

    &__delimiter {
      width: 1px;
      height: 25px;
      background-color: rgba(255, 255, 255, 0.25);
      margin-left: 14px;
      margin-right: 14px;
    }

    &:hover {
      background-color: #e75c00;
    }

    &:active {
      background-color: #cd4d00;
    }

    &--cart {
      display: flex;
      align-items: center;
      color: #fff;
      line-height: 23px;
      padding: 12px 25px;

      span {
        font-weight: 600;
        font-size: 16px;
        margin-left: 5px;
      }
    }
    &--empty{
      border: 1px solid #ddd;
      background-color: #f6f6f6;
      padding: 13.5px 45px;
      text-align: center;
      font-size: 1.4rem;
      font-weight: 500;
      width: 210px;
      color: #c3c3c3;
      align-self: center;
      span{
        padding-left: 13px;
      }

      &:hover {
        color: #fff;
        background-color: var(--black);
      }
    }
    &.pay-btn{
      color: #fff;
      font-size: 1.4rem;
      font-weight: 600;
      width: 210px;
      padding: 10px 45px;
      line-height: 31.5px;
    }
  }
`