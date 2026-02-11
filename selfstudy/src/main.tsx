import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = createRoot(document.getElementById("root")!)

root.render(
  <StrictMode>
    <>
      <h1>hello, this is a test</h1>
      <App />
    </>
  </StrictMode>
)
