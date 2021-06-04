import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./redux"
import './style.scss'
import {Cart, Header, Home, CartEmpty, Checkout, CheckoutResult} from "./components"

function App() {
    return (
        <Router>
            <Provider store={store}>
                <Header/>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/cart'} component={Cart}/>
                    <Route exact path={'/cartEmpty'} component={CartEmpty}/>
                    <Route exact path={'/checkout'} component={Checkout}/>
                    <Route exact path={'/checkout/result'} component={CheckoutResult}/>
                </Switch>
            </Provider>
        </Router>
    )
}

export default App
