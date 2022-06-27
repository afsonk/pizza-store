import { Route, Routes } from 'react-router-dom'
import { Cart, CartEmpty, Checkout, CheckoutResult, Home } from '../pages'

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/cartEmpty' element={<CartEmpty />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/checkout/result' element={<CheckoutResult />} />
    </Routes>
  )
}

export default AppRouter
