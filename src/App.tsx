import {BrowserRouter as Router, Route} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./redux"
import './style.scss'
import {Cart, Header, Home} from "./components"
import CartEmpty from "./components/Cart/CartEmpty"


function App() {
    return (
        <Router>
            <Provider store={store}>
                <Header/>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/cart'} component={Cart}/>
                <Route exact path={'/cartEmpty'} component={CartEmpty}/>
            </Provider>
        </Router>
    )
}

export default App
