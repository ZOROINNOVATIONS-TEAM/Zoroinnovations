import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserMessages from "./components/UserMessages";
import ProjectsDashboard from "./components/ProjectDashboard";"./components//ProjectDashboard";
import "./index.css"; // Assuming you have a CSS file for styling

const ContactPage = () => {
  return (
    <div className="app">
      <Header />
      <ProjectsDashboard />
      <Footer />
    </div>
  );
};

export default ContactPage;
