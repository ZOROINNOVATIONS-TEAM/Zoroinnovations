import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import  EmployeeVer from './pages/EmployeeVer.jsx'
import Header from './pages/Header.jsx'
import Footer from './pages/Footer.jsx'
import Locations from './pages/Location.jsx'

function App() {
  return (
    <>
    <Header/>
    <Routes>
       <Route path="/verify" element={<EmployeeVer/>} />
       <Route path="/location" element={<Locations/>} />
    </Routes>
      <Footer/>
    </>
  )
}

export default App
