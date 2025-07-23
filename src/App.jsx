import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import HowWeWork from './components/HowWeWork';
import DigitalResources from './components/DigitalResources';
import ContactForm from './components/ContactForm';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <HowWeWork />
      <DigitalResources />
      <ContactForm />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;