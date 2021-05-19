import {BrowserRouter as Router} from "react-router-dom"
import './style.scss'
import Header from "./components/Header/Header"


function App() {
    return (
        <Router>
            <Header/>
        </Router>
    )
}

export default App
