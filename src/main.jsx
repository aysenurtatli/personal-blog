import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router";
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </HashRouter>
)
