import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppProduct from './AppProduct';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppCounter /> */}
    <AppProduct />
  </StrictMode>,
)
