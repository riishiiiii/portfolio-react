import React from "react";
import { ThemeProvider } from "./components/ThemeContaxt";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skils";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Navbar />
        <main>
          <Home />
          <Skills />
          <Projects />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
