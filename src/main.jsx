import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppCounter from './AppCounter'
import AppUseEffect from './AppUseEffect'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppCounter /> */}
    <AppUseEffect />
  </StrictMode>,
)
