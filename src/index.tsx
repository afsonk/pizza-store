import App from "./App"
import 'normalize.css'
import {createRoot} from "react-dom/client"

const element = document.getElementById('root') as Element
const root = createRoot(element)

root.render(<App/>)