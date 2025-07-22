import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './pages/Header'
import { Verification } from './pages/Verification'

function App() {
  return (
    <>
    <Header/>
    <Routes>
       <Route path="/" element={<Verification/>} />
    </Routes>
    </>
  )
}

export default App
