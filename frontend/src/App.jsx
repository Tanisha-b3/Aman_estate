import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
