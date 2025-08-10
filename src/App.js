import React from "react";
import { ThemeProvider } from "./components/ThemeContaxt";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skils";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

import "./App.css";
import "./styles/modern.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
