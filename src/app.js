import React from "react";

import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import HowWeWork from "./components/HowWeWork";
import DigitalResources from "./components/DigitalResources";
import ContactForm from "./components/ContactForm";
import CTASection from "./components/CTASection";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./index.css"; // Assuming you have a CSS file for styling

const ContactPage = () => {
  return (
    <div className="app">
      <Header />
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
};

export default ContactPage;
