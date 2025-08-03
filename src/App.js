import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Login from './pages/login';
import LandingPage from './pages/LandingPage';
import EmployeeVer from './pages/EmployeeVer';
import Locations from './pages/Location';
import Team from './pages/Team';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/verify" element={<EmployeeVer />} />
          <Route path="/location" element={<Locations />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
