import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseState from './hooks/UseState.hook'
import UseEffect from './hooks/UseEffect.hook'
import UseRef from './hooks/UseRef.hook'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseState />
    <UseEffect />
    <UseRef />
  </StrictMode>,
)