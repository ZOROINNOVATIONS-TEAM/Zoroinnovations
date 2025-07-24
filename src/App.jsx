import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import  EmployeeVer from './pages/EmployeeVer.jsx'
import Header from './pages/Header.jsx'
import Footer from './pages/Footer.jsx'

function App() {
  return (
    <>
    <Header/>
    <Routes>
       <Route path="/" element={<EmployeeVer/>} />
    </Routes>
      <Footer/>
    </>
  )
}

export default App
