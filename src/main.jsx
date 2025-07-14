import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppProfile from './AppProfile'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProfile />
  </StrictMode>,
)
