import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Navbar from './Components/Navbar'
import NotFound from './Routes/NotFound'
import { CocktailProvider } from './Hooks/useCocktails'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <StrictMode>
    <CocktailProvider>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CocktailProvider>
    </StrictMode>,
  rootElement
)
