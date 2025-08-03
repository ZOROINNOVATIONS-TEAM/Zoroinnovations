
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Blog from './pages/Blog';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/blog" element={<Blog />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
