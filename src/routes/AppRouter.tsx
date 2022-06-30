import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Home } from '../pages'

const CheckoutPage = lazy(() => import('../pages/Checkout/Checkout'))
const CheckoutResultPage = lazy(() => import('../pages/CheckoutResult/CheckoutResult'))
const Cart = lazy(() => import('../pages/Cart/Cart'))

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route
        path='/cart'
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        }
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
