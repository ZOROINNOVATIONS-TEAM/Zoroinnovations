import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import EmployeeVer from './pages/EmployeeVer.jsx'
import Locations from './pages/Location.jsx'
import Login from './pages/login.jsx'

function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Login/>} />
       <Route path="/verify" element={<EmployeeVer/>} />
       <Route path="/location" element={<Locations/>} />
    </Routes>
    </>
  )
}

export default App
