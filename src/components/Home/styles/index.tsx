import styled, { css, StyledProps } from 'styled-components'

export const StyledCategories = styled.ul`
  display: flex;
  grid-gap: 10px;
  @media (max-width: 805px) {
    overflow-x: scroll;
  }
`

export const StyledCategoryItem = styled.li`
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  padding: 0.6rem 1.6rem;
  background-color: var(--light-grey);
  border-radius: 20px;
  transition: 0.1s linear;

  &:hover {
    background-color: #e2e2e2;
  }

  &:active {
    background-color: #cdcdcd;
  }

  ${(p: StyledProps<{ active: boolean }>) =>
    p.active &&
    css`
      color: #fff;
      background-color: #232323;

      &:hover {
        background-color: #232323;
      }
    `}
`

export const StyledContentTitle = styled.h2`
  font-size: 26px;
  padding: 20px 0;
`

export const StyledSort = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;

  @media (max-width: 805px) {
    margin-top: 15px;
    font-size: 1.4rem;
  }

  b {
    display: inline-block;
    font-size: 1.2rem;
    margin-left: 10px;

    @media (max-width: 805px) {
      font-size: 1.4rem;
    }
  }

  span {
    font-size: 1.2rem;
    margin-left: 5px;
    color: var(--orange);
    text-decoration: dashed;
    cursor: pointer;

    @media (max-width: 805px) {
      font-size: 1.4rem;
    }
  }
`

export const StyledSortPopup = styled.div`
  display: ${(p: StyledProps<{ isVisible?: boolean; isListItemActive?: boolean }>) =>
    p.isVisible ? 'block' : 'none'};
  position: absolute;
  width: 160px;
  padding: 5px 0;
  right: 0;
  bottom: -150px;
  background-color: #fff;
  box-shadow: var(--shadow);
  border-radius: 10px;

  ul {
    border-radius: 10px;
    list-style: none;
    color: var(--black);
    font-size: 1.1rem;
  }
}
`

export const StyledPopupListItem = styled.li`
  display: inline-block;
  cursor: pointer;
  width: 100%;
  padding: 12px 20px;
  transition: 0.1s linear;

  ${(p: StyledProps<{ isListItemActive?: boolean }>) =>
    p.isListItemActive &&
    css`
      color: var(--orange);
      background-color: rgba(252, 213, 213, 0.4);
      font-weight: 500;
    `}
  &:hover {
    background-color: rgba(252, 213, 213, 0.4);
  }
`

export const StyledContentItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 24.8%;
  padding: 10px;
  border-radius: 6px;
  transition: 0.1s linear;
  text-align: center;

  @media (max-width: 1220px) {
    flex-basis: 33%;
  }
  @media (max-width: 920px) {
    flex-basis: 48%;
  }
  @media (max-width: 630px) {
    flex-basis: 70%;
  }
  @media (max-width: 500px) {
    flex-basis: 100%;
  }

  &:hover {
    box-shadow: RGB(6 5 50 / 15%) 0px 4px 22px -6px;
  }

  &-image {
    max-width: 260px;
    width: 100%;
    height: auto;
    align-self: center;
    @media (max-width: 920px) {
      max-width: 300px;
    }
    @media (max-width: 500px) {
      max-width: 280px;
    }
  }

  &-title {
    margin-bottom: 1rem;
  }
`
