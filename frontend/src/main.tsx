import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { AudioProvider } from './Components/SearchPage/Audio/AudioContext'
import { QueueProvider } from './Components/Queue/QueueContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AudioProvider>
      <QueueProvider>
        <App />
      </QueueProvider>
    </AudioProvider>
  </StrictMode>,
)
