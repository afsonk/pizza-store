import {BrowserRouter as Router, Route} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./redux"
import './style.scss'
import Header from "./Header/Header"
import Home from "./Home/Home"
import Cart from "./Cart/Cart"


function App() {
    return (
        <Router>
            <Provider store={store}>
                <Header/>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/cart'} component={Cart}/>
            </Provider>
        </Router>
    )
}

export default App
