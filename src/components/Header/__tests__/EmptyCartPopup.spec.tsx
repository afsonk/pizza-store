import { render, screen } from '@testing-library/react'
import EmptyCartPopup from '../EmptyCartPopup'

describe('EmptyCartPopup component test', () => {
  it('should render without crashing', () => {
    render(<EmptyCartPopup />)

    expect(screen.getByText(/Oh, Empty!/)).toBeInTheDocument()
  })
})
