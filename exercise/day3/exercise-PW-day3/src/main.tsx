import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sidebar from './sidebar.tsx'
import Content from './Content.tsx'
import HighPerformanceGlow from './HighPerformanceGlow.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HighPerformanceGlow>
      <div className='wrap'>
        <Sidebar/>
        <Content/>
      </div>
    </HighPerformanceGlow>
  </StrictMode>,
)
