import { render, screen } from '@testing-library/react'
import Header from '../index'
import { Router } from 'react-router-dom'
import 'react-router-dom'
import { createMemoryHistory } from 'history'

const renderWithRouter = (path = '/') => {
  const history = createMemoryHistory()
  history.push(path)

  render(
    <Router location={history.location} navigator={history}>
      <Header />
    </Router>
  )
}

jest.mock('../HeaderCart', () => () => <div>HeaderCart Component</div>)

describe('Header component test', () => {
  it('should render without crashing', () => {
    renderWithRouter()

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('should render HeaderCart', () => {
    renderWithRouter('/')

    expect(screen.getByText(/HeaderCart Component/)).toBeInTheDocument()
  })

  it("shouldn't render HeaderCart", () => {
    renderWithRouter('/cart')

    expect(screen.queryByText(/HeaderCart Component/)).not.toBeInTheDocument()
  })
})
