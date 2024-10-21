import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal website v1</h1>
        <p>Hi, I'm Siddhant</p>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="about">
        <h2>About Me</h2>
        <p>me me me</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: siddhant@example.com</p>
      </section>
    </div>
  );
}

export default App;
