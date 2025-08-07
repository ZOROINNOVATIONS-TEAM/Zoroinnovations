import React from "react";
import Header from "./ContactComponents/Header";
import Footer from "./ContactComponents/Footer";
import ProjectsDashboard from "./ContactComponents/ProjectDashboard";"./components//ProjectDashboard";
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

export default ProjectPage;
