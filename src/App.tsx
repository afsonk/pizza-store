import {BrowserRouter as Router, Route} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./redux"
import './style.scss'
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"


function App() {
    return (
        <Router>
            <Provider store={store}>
                <Header/>
                <Route exact path={'/'} component={Home}/>
            </Provider>
        </Router>
    )
}

export default App
