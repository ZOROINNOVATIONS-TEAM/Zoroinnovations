import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Team />} />
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
