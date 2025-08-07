import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserMessages from "./components/UserMessages";
import "./index.css";

const ContactPage = () => {
  return (
    <div className="app">
      <Header />
      <UserMessages />
      <Footer />
    </div>
  );
};

export default ContactPage;
