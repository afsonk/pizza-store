import filterSlice, { sortByType } from '../../../redux/filter/filterSlice'
import { fireEvent, screen } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { sortMock } from '../../../tests/mocks'
import Sort from '../Sort'
import { renderWithRedux } from '../../../tests/helpers'

describe('Sort component test', () => {
  it('should render without crashing', () => {
    const preloadedState = {
      filterCat: {
        activeCategory: null,
        sortBy: {
          name: 'rating',
          order: 'asc'
        } as sortByType
      }
    }

    const store = configureStore({ reducer: { filterCat: filterSlice }, preloadedState })
    renderWithRedux(
      <Sort sort={sortMock} activeSort={preloadedState.filterCat.sortBy.name} />,
      store
    )

    expect(screen.getByTestId('sort')).toBeInTheDocument()
  })

  it('should open or close sortPopup', () => {
    const preloadedState = {
      filterCat: {
        activeCategory: null,
        sortBy: {
          name: 'rating',
          order: 'asc'
        } as sortByType
      }
    }

    const store = configureStore({ reducer: { filterCat: filterSlice }, preloadedState })
    renderWithRedux(
      <Sort sort={sortMock} activeSort={preloadedState.filterCat.sortBy.name} />,
      store
    )
    const popup = screen.getByTestId('sortPopup')

    expect(popup.className).not.toContain('active')
    fireEvent.click(screen.getByTestId('sortLabel'))
    expect(popup.className).toContain('active')
  })
})
