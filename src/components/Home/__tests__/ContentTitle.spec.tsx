import { render, screen } from '@testing-library/react'
import ContentTitle from '../ContentTitle'

describe('ContentTitle component test', () => {
  it('Should render "All pizzas" when prop is not provided', () => {
    render(<ContentTitle activeCategory='' />)
    expect(screen.getByText(/All pizzas/i)).toBeInTheDocument()
  })

  it('Should render category name and pizzas when prop is provided', () => {
    render(<ContentTitle activeCategory='Meat' />)
    expect(screen.getByText(/Meat pizzas/i)).toBeInTheDocument()
  })
})
