import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../src/styles/nav.styles.css'
import '../src/styles/hero.styles.css'
import '../src/styles/collabbtn.styles.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
