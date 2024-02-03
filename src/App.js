import React  from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skils";
import Projects from "./components/Projects";
import LastPlayedSongs from "./components/LastPlayedSongs";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <LastPlayedSongs/>
      <Footer />
    </div>
  );
};

export default App;
