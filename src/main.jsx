import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppWrap from './AppWrap';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppCounter /> */}
    <AppWrap />
  </StrictMode>,
)
