// src/App.js

import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FeaturedArtists from './components/FeaturedArtists';
import ImageSlider from './components/ImageSlider';  // Add this import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MUAProfiles from './pages/MUAProfiles';
import Masterclasses from './pages/Masterclasses';
import Blog from './pages/Blog';
import Membership from './pages/Membership';
import ContactUs from './pages/ContactUs';
import Signup from './pages/Signup';  // Import the Signup page

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<><Hero /><ImageSlider /><FeaturedArtists /></>} />  {/* Add ImageSlider here */}
          <Route path="/mua-profiles" element={<MUAProfiles />} />
          <Route path="/masterclasses" element={<Masterclasses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/signup" element={<Signup />} />  {/* Add the signup route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
