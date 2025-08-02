import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import EmployeeVer from './pages/EmployeeVer.jsx'
import Locations from './pages/Location.jsx'
import Login from './pages/login.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Header from './pages/Header.jsx'

function App() {
  return (
    <>
    <Header />
    <div className="pt-16"> {/* Add padding top to account for fixed header */}
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/landing" element={<LandingPage/>} />
        <Route path="/verify" element={<EmployeeVer/>} />
        <Route path="/location" element={<Locations/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
