import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux'
import './style.scss'
import { Cart, Header, Home, CartEmpty, CheckoutResult, Checkout } from './components'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/cartEmpty' element={<CartEmpty />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout/result' element={<CheckoutResult />} />
        </Routes>
      </Provider>
    </Router>
  )
}

export default App
