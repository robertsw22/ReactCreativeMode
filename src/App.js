import './App.css';
import LandingPage from './Page0';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';  // Import the Page3 component
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/terms-of-use' element={<Page1 />} />
          <Route path='/privacy-policy' element={<Page2 />} />
          {/* Define a new route for the Page3 component */}
          <Route path='/sign-up' element={<Page3 />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
