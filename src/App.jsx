import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './pages/Header'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
    <Header/>
    <Routes>
       <Route path="/" element={<HomePage />} />
    </Routes>
    </>
  )
}

export default App
