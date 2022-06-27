import { screen } from '@testing-library/react'
import Logo from '../Logo'
import { renderWithRouter } from '../../../tests/helpers'

describe('Logo component test', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Logo />)
    const element = screen.getByText(/PIZZA CITY/)

    expect(element).toBeInTheDocument()
  })
})
