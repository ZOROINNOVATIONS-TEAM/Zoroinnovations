import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';


import Blog from './pages/Blog.jsx';


function App() {
  const location = useLocation();

  // Pages that should not have header and footer
  const noHeaderFooterPages = ['/', '/landing'];
  const shouldShowHeaderFooter = !noHeaderFooterPages.includes(location.pathname);

  return (
    <>
     
      <div className={shouldShowHeaderFooter ? "pt-16" : ""}>
        <Routes>
          <Route path="/blog" element={<Blog />} />
        
        </Routes>
      </div>
    </>
  );
}

export default App;
