import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/home/About';
import Experience from './components/home/Experience';
import Publications from './components/home/Publications';
import Footer from './components/layout/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingButton from './components/layout/FloatingButton';
import Blog from './components/blog/Blog';
import Education from './components/home/Education';
import { Analytics } from "@vercel/analytics/react"

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={
            <>
              <div id="about"><About /></div>
              <div id="experience"><Experience /></div>
              <div id="publications"><Publications /></div>
              <div id="education"><Education /></div>
            </>
          } />
          <Route path="/blog/*" element={<Blog />} />
      </Routes>
      <FloatingButton />
      <Analytics />
      <Footer />
    </div>
    </Router>
  );
  
}

export default App;
