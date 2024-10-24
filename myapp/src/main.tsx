import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import Display from './Display.tsx'
import Counter from './Countet.tsx'
import CounterInMyClass from './CounterInMyClass.tsx'
import DisplayDataUsingAPI from './DisplayDataUsingAPI.tsx'
import PostFunctnio from './PostFunctnio.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostFunctnio />
  </StrictMode>,
)
