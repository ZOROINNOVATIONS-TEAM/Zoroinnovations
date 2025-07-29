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

// Navigation Component
function Navigation() {
  return (
    <nav style={{ 
      background: '#f8f9fa', 
      padding: '10px', 
      marginBottom: '20px',
      borderBottom: '1px solid #dee2e6'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        gap: '20px',
        alignItems: 'center'
      }}>
        <h3 style={{ margin: 0, color: '#333' }}>Zoro Innovations - Navigation</h3>
        <Link to="/" style={{ 
          textDecoration: 'none', 
          color: '#007bff', 
          padding: '8px 16px',
          borderRadius: '4px',
          border: '1px solid #007bff'
        }}>Home</Link>
        <Link to="/login" style={{ 
          textDecoration: 'none', 
          color: '#007bff', 
          padding: '8px 16px',
          borderRadius: '4px',
          border: '1px solid #007bff'
        }}>Login</Link>
        <Link to="/landing" style={{ 
          textDecoration: 'none', 
          color: '#007bff', 
          padding: '8px 16px',
          borderRadius: '4px',
          border: '1px solid #007bff'
        }}>Landing Page</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navigation />
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
