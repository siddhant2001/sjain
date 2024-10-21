import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Publications from './components/Publications';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="about"><About /></div>
      <div id="experience"><Experience /></div>
      <div id="publications"><Publications /></div>
    </div>
  );
}

export default App;
