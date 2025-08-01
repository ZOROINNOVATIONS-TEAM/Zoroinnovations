import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css'
import Navbar from './components/homePage/Navbar';
import Header from './components/homePage/Header';
import HeroSection from './components/homePage/HeroSection';
import Footer from './components/homePage/Footer';
import Login from './pages/login';
import LandingPage from "./pages/LandingPage";

// Main Home Page Component
function HomePage() {
  return (
    <div>
      <Navbar />
      <Header />
      <HeroSection/>
      <Footer/>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
