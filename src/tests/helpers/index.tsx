import { render } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { ReactNode } from 'react'
import AppRouter from '../../routes/AppRouter'
import { Provider } from 'react-redux'
import { Store } from '@reduxjs/toolkit'

export function renderWithRouterAndRedux(component: ReactNode, store: Store) {
  return render(
    <BrowserRouter>
      <Provider store={store}>{component}</Provider>
    </BrowserRouter>
  )
}

export function renderWithRouter(component: ReactNode) {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

export function renderWithRedux(component: ReactNode, store: Store) {
  return render(<Provider store={store}>{component}</Provider>)
}

type renderTestAppProps = {
  path?: string
  store: Store
}

export function renderTestApp(
  children: ReactNode,
  { path = '/', store = {} as Store }: renderTestAppProps
) {
  return render(
    <MemoryRouter initialEntries={[{ pathname: path }]}>
      <Provider store={store}>
        <AppRouter />
        {children}
      </Provider>
    </MemoryRouter>
  )
}
