import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../src/styles/nav.styles.css'
import '../src/styles/hero.styles.css'
import '../src/styles/collabbtn.styles.css'
import '../src/styles/projects.styles.css'
import '../src/styles/projectcard.styles.css'
import '../src/styles/title.style.css'
import '../src/styles/techbadge.style.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
