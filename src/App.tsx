import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux'
import './style.scss'

import { Header } from './components'
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <AppRouter />
      </Provider>
    </Router>
  )
}

export default App
