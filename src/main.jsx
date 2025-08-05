import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Part2 from './Part2.jsx'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    {/*<Part2 />*/}
    {/*<App />*/}
  </StrictMode>,
)
