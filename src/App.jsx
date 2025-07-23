import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import  EmployeeVer from './pages/EmployeeVer.jsx'

function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<EmployeeVer/>} />
    </Routes>
    </>
  )
}

export default App
