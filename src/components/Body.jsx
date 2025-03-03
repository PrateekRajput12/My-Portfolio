import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
const Body = () => {
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

export default Body;
