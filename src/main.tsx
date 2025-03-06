import './global.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Toaster
    position="top-center"
    reverseOrder={true}
    containerStyle={{
      fontSize: 16,
    }}
      toastOptions={{
      duration: 2500,
    }}
  />
    <App />
  </StrictMode>
)
