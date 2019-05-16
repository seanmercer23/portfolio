import React from 'react';
import Header from './Header'
import About from './About'
import Banner from './Banner'
import Footer from './Footer'
import './App.css';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
