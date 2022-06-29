import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux'

import { Header } from './components'
import AppRouter from './routes/AppRouter'
import { GlobalStyles } from './GlobalStyles'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <GlobalStyles/>
        <Header />
        <AppRouter />
      </Provider>
    </Router>
  )
}

export default App
