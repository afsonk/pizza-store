import {BrowserRouter as Router, Route} from "react-router-dom"
import './style.scss'
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"


function App() {
    return (
        <Router>
            <Header/>
            <Route exact path={'/'} component={Home}/>
        </Router>
    )
}

export default App
