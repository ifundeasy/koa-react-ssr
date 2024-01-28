import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Main from './pages/Main'
import reportWebVitals from './utils/report-web-vitals'
import './index.css'

const rootElm = document.getElementById('root')
const root = createRoot(rootElm)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>,
)

// Report web vitals to an analytics service or log them to the console
reportWebVitals(console.debug)
