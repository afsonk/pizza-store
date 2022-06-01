import { createRoot } from 'react-dom/client'

import App from './App'
import 'normalize.css'

const element = document.getElementById('root') as Element
const root = createRoot(element)

root.render(<App />)
