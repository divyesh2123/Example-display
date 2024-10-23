import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Counter from './Countet.tsx'
import Display from './Display.tsx'
import Countet from './Countet.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Display />
  </StrictMode>,
)
