import React from 'react';
import './index.css'
import Navbar from './component/Navbar';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import Footer from './component/Footer';
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
