import React from 'react'
import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Navbar from "./components/Navbar.jsx";
import MainSection from "./components/MainSection.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Planning from './components/Planning.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <MainSection />
      <Planning  />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </Router>
  )
}

export default App