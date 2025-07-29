import React from 'react';
import './index.css'
import Navbar from './components/homePage/Navbar';
import Header from './components/homePage/Header';
import HeroSection from './components/homePage/HeroSection';
import Footer from './components/homePage/Footer';
import Login from './pages/login';

function App() {
  // You can add routing logic here to switch between pages
  // For now, showing the main page components
  return (
    <div>
      <Navbar />
      <Header />
      <HeroSection/>
      <Footer/>
      {/* Login component is available for use */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
