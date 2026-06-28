import React, { useEffect, useRef, useCallback } from "react";
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

/* Custom cursor with magnetic button effect — hidden on mobile */
const Cursor = () => {
  const dot   = useRef(null);
  const ring  = useRef(null);
  const pos   = useRef({ x: -100, y: -100 });
  const raf   = useRef(null);

  const applyMagnetic = useCallback((el, mx, my) => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = mx - cx;
    const dy = my - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const radius = Math.max(rect.width, rect.height) * 0.8;
    if (dist < radius) {
      const strength = (1 - dist / radius) * 0.35;
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      el.dataset.magnetic = "1";
    } else if (el.dataset.magnetic === "1") {
      el.style.transform = "";
      el.dataset.magnetic = "0";
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const move = e => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", move);

    const loop = () => {
      const { x, y } = pos.current;
      if (dot.current)  dot.current.style.transform  = `translate(${x - 4}px, ${y - 4}px)`;
      if (ring.current) ring.current.style.transform = `translate(${x - 18}px, ${y - 18}px)`;

      document.querySelectorAll(".btn-pill, .btn-pill-outline").forEach(el =>
        applyMagnetic(el, x, y)
      );

      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    const addHover    = () => ring.current?.classList.add("hovered");
    const removeHover = () => ring.current?.classList.remove("hovered");
    document.querySelectorAll("a,button,[role=button]").forEach(el => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf.current);
    };
  }, [applyMagnetic]);

  return (
    <>
      <div ref={dot}  id="cursor-dot"  />
      <div ref={ring} id="cursor-ring" />
    </>
  );
};

/* Subtle noise/grain overlay */
const Grain = () => (
  <svg
    aria-hidden="true"
    style={{
      position: "fixed", inset: 0,
      width: "100%", height: "100%",
      pointerEvents: "none", zIndex: 9989,
      opacity: 0.055,
    }}
    preserveAspectRatio="xMidYMid slice"
  >
    <filter id="grain-filter">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#grain-filter)" />
  </svg>
);

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const AnimatedSection = ({ children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={sectionVariants}
  >
    {children}
  </motion.div>
);

const App = () => (
  <ThemeProvider>
    <ScrollProgress />
    <Grain />
    <Cursor />
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <AnimatedSection><Skills /></AnimatedSection>
        <AnimatedSection><Projects /></AnimatedSection>
        <AnimatedSection><Experience /></AnimatedSection>
        <AnimatedSection><Footer /></AnimatedSection>
      </main>
    </div>
  </ThemeProvider>
);

export default App;
