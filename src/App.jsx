import React from 'react'
import { BrowserRouter } from 'react-router'
import { Routes, Route } from 'react-router'
import Body from './components/Body'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App