import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';

// Sub-services
import Rent from './Pages/Services/Rent';
import Resale from './Pages/Services/Resale';
import Marketing from './Pages/Services/Marketing';
import PressBook from './Pages/Services/PressBook';

// Components
import Navbar from './components/navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        {/* Services Subpages */}
        <Route path="/services/rent" element={<Rent />} />
        <Route path="/services/resale" element={<Resale />} />
        <Route path="/services/marketing" element={<Marketing />} />
        <Route path="/services/pressbook" element={<PressBook />} />
      </Routes>
    </Router>
  );
};

export default App;
