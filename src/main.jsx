import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Memory from './Memory.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <Memory />
  </StrictMode>,
)
