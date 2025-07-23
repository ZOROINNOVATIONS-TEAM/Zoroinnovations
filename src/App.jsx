import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Header from './pages/Header'
import  EmployeeVer from './pages/EmployeeVer.jsx'

function App() {
  return (
    <>
    <Header/>
    <Routes>
       <Route path="/" element={<EmployeeVer/>} />
    </Routes>
    </>
  )
}

export default App
