import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="container overflow-x-hidden max-h-[100vh] font-[var(--hero-family)] max-w-[100vw]  bg-[var(--containerColor)] z-0">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
