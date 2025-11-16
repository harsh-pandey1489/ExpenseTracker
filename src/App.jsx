import React from 'react'
import Index from './pages/Index.jsx'
import NotFound from './pages/NotFound.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={  <Index />}/>
          <Route path='*' element={  <NotFound/>}/>
        </Routes>
      </BrowserRouter>
  
    
    </div>
  )
}

export default App
