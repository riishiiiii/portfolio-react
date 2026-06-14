import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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

/* Scroll progress bar */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 2,
        background: "var(--text)", transformOrigin: "0%", scaleX,
        zIndex: 9999,
      }}
    />
  );
};

/* Custom cursor — hidden on mobile */
const Cursor = () => {
  const dot   = useRef(null);
  const ring  = useRef(null);
  const pos   = useRef({ x: -100, y: -100 });
  const raf   = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const move = e => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", move);

    const loop = () => {
      if (dot.current)  { dot.current.style.transform  = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;  }
      if (ring.current) { ring.current.style.transform = `translate(${pos.current.x - 18}px, ${pos.current.y - 18}px)`; }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    const addHover   = () => ring.current?.classList.add("hovered");
    const removeHover= () => ring.current?.classList.remove("hovered");
    document.querySelectorAll("a,button,[role=button]").forEach(el => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={dot}  id="cursor-dot"  />
      <div ref={ring} id="cursor-ring" />
    </>
  );
};

const App = () => (
  <ThemeProvider>
    <ScrollProgress />
    <Cursor />
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

export default App;
