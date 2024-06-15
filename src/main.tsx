import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <NextUIProvider>
          <main className="dark text-foreground bg-background">
              <BrowserRouter>
                  <App/>
              </BrowserRouter>
          </main>
      </NextUIProvider>
  </React.StrictMode>
,
)
