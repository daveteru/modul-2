import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Gridbg from './Gridbg'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Gridbg/>
      </StrictMode>,
)
