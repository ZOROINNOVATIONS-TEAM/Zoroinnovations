
import { Routes, Route, useLocation} from 'react-router-dom'

import Team from './pages/Team.jsx'

function App() {
  const location = useLocation();
  
  // Pages that should not have header and footer
  const noHeaderFooterPages = ['/', '/landing'];
  const shouldShowHeaderFooter = !noHeaderFooterPages.includes(location.pathname);

  return (
    <>
 
      <div className={shouldShowHeaderFooter ? "pt-16" : ""}>
        <Routes>
          <Route path="/team" element={<Team/>} />
          
        </Routes>
      </div>
    </>
  )
}

export default App
