import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/portfolio/Navbar";
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import Experience from "./components/portfolio/Experience";
import Projects from "./components/portfolio/Projects";
import Skills from "./components/portfolio/Skills";
import Research from "./components/portfolio/Research";
import Contact from "./components/portfolio/Contact";
import Footer from "./components/portfolio/Footer";

const Portfolio = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#0f1117';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1117] text-slate-200" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <div className="grain-overlay" />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
