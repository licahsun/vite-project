import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App08005-1.jsx'
import App from "./pages/App0813-weather3.jsx"
import './assets/all.scss'

createRoot(document.getElementById('root')).render(
  // 嚴謹模式
  <StrictMode>
    <App />
  </StrictMode>,
)
