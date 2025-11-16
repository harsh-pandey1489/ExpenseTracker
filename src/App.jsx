import React from 'react'
import Index from './pages/Index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
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
