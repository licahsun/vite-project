import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App08005-1.jsx'
// import App from './pages/Home'
import App from './MyApp'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // 嚴謹模式
  <StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </StrictMode>,
)
