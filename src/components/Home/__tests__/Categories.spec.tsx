import { screen } from '@testing-library/react'
import Categories from '../Categories'
import { categoriesMock } from '../../../tests/mocks'
import { configureStore } from '@reduxjs/toolkit'
import filterSlice, { sortByType } from '../../../redux/filter/filterSlice'
import { renderWithRedux } from '../../../tests/helpers'

describe('Categories component test', () => {
  it('should 6 category items with ALL category that present by default', () => {
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
      <Categories
        categories={categoriesMock}
        activeCategory={preloadedState.filterCat.activeCategory}
      />,
      store
    )

    expect(screen.getByTestId('categories')).toBeInTheDocument()
    expect(screen.getByTestId('categories').children).toHaveLength(categoriesMock.length + 1)
    expect(screen.getByText(/All/i).className).toContain('active')
  })
})
