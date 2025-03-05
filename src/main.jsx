import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './route/index.jsx'
import './scss/custom-bootstrap.scss'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
