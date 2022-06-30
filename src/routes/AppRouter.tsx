import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Home, Cart } from '../pages'

const CheckoutPage = lazy(() => import('../pages/Checkout/Checkout'))
const CheckoutResultPage = lazy(() => import('../pages/CheckoutResult/CheckoutResult'))

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route
        path='/cart'
        element={<Cart />}
      />

      <Route
        path='/checkout'
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <CheckoutPage />
          </Suspense>
        }
      />

      <Route
        path='/checkout/result'
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <CheckoutResultPage />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default AppRouter
