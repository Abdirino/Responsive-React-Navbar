import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
    </>
  )
}

export default App