import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Lenis from "lenis";
import { useTheme } from "./ThemeContaxt";

const TYPED_PHRASES = [
  "that scale.",
  "that ship.",
  "reliably.",
  "at speed.",
];

const useTypewriter = (phrases, speed = 70, pause = 2200) => {
  const [displayed, setDisplayed] = useState(phrases[0]);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx]     = useState(phrases[0].length);
  const [deleting, setDeleting]   = useState(false);
  const timeout                   = useRef(null);

  useEffect(() => {
    const current = phrases[phraseIdx];
    if (!deleting && charIdx < current.length) {
      timeout.current = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout.current = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setPhraseIdx(i => (i + 1) % phrases.length);
    }
    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout.current);
  }, [charIdx, deleting, phraseIdx, phrases, speed, pause]);

  return displayed;
};

const STATS = [
  { value: "4.5+",  label: "Years of experience" },
  { value: "~35%",  label: "API latency reduced" },
  { value: "~20%",  label: "LLM cost cut" },
  { value: "5+",    label: "Client projects" },
];

const StatCounter = ({ value, label, style }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const match = value.match(/^([~]?)(\d+\.?\d*)([+%]?)$/);
    if (!match) { setDisplay(value); return; }
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const isDecimal = numStr.includes(".");
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const cur = target * eased;
      setDisplay(`${prefix}${isDecimal ? cur.toFixed(1) : Math.floor(cur)}${suffix}`);
      if (t < 1) requestAnimationFrame(tick);
      else setDisplay(value);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ backgroundColor: "var(--bg-card)" }}
      style={style}
    >
      <div style={{
        fontFamily: "'Space Grotesk Variable', system-ui, sans-serif",
        fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
        fontWeight: 700,
        letterSpacing: "-0.03em",
        color: "var(--text)",
        lineHeight: 1,
        marginBottom: 8,
      }}>
        {display}
      </div>
      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 500 }}>
        {label}
      </div>
    </motion.div>
  );
};

/* Heading lines with staggered clip-path reveal */
const LINES = [
  { text: "Building",      dim: false },
  { text: "RAG systems,",  dim: false },
  { text: "AI agents &",   dim: false },
  { text: "backends.",     dim: false },
];

const lineVariant = {
  hidden: { y: "105%", opacity: 0 },
  show:   (i) => ({
    y: 0, opacity: 1,
    transition: { duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] } },
});

const Hero = () => {
  useTheme();
  const isMobile  = typeof window !== "undefined" && window.innerWidth < 768;
  const typed     = useTypewriter(TYPED_PHRASES);
  const resumeUrl = `${process.env.PUBLIC_URL || ""}/cv/resume.pdf`;

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.1, wheelMultiplier: 0.9 });
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
    const id = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="home"
      style={{ minHeight: "calc(100vh - var(--nav-h))", display: "flex", flexDirection: "column", justifyContent: "center" }}
    >
      <div className="px-4 px-md-5" style={{ width: "100%", paddingTop: isMobile ? "1.5rem" : "3rem", paddingBottom: isMobile ? "2rem" : "3rem" }}>

        {/* Label */}
        <motion.p
          variants={fadeUp(0)} initial="hidden" animate="show"
          style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-muted)", marginBottom: 24 }}
        >
          Hello! I'm Rishi.
        </motion.p>

        {/* Staggered heading */}
        <h1 className="hero-heading" style={{ marginBottom: 32 }}>
          {LINES.map((line, i) => (
            <span key={i} className="line-wrap" style={{ display: "block" }}>
              <motion.span
                custom={i}
                variants={lineVariant}
                initial="hidden"
                animate="show"
                style={{
                  display: "block",
                  color: line.dim ? "var(--text-dim-head)" : "var(--text)",
                }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}

          {/* Typewriter last line — nowrap keeps height exactly 1 line, no shift */}
          <span className="line-wrap" style={{ display: "block", overflow: "hidden" }}>
            <motion.span
              custom={LINES.length}
              variants={lineVariant}
              initial="hidden"
              animate="show"
              style={{
                display: "block",
                color: "var(--text-dim-head)",
                whiteSpace: "nowrap",
              }}
            >
              {typed}
              <span style={{
                display: "inline-block", width: "0.06em", height: "0.85em",
                background: "var(--text-muted)", marginLeft: "0.05em",
                verticalAlign: "middle", animation: "blink 1s step-end infinite",
              }} />
            </motion.span>
          </span>
        </h1>

        {/* Bio + CTAs */}
        <motion.div
          variants={fadeUp(0.45)} initial="hidden" animate="show"
          className="d-flex flex-column flex-md-row align-items-md-center gap-4"
          style={{ maxWidth: 800 }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.65, margin: 0, maxWidth: 440 }}>
            Python Developer specialising in AI & Backend with 4.5+ years building voice, image,
            and text agents — from RAG pipelines to FastAPI microservices — owned end-to-end across design, development, and AWS deployment.
          </p>
          <div className="d-flex flex-wrap gap-3 flex-shrink-0">
            <a href="#projects" className="btn-pill">View Work →</a>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" download className="btn-pill-outline">
              Resume
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp(0.6)} initial="hidden" animate="show"
          style={{ marginTop: 80, display: "flex", flexWrap: "wrap", gap: "0px" }}
        >
          {STATS.map((s, i) => (
            <StatCounter
              key={i}
              value={s.value}
              label={s.label}
              style={{
                flex: "1 1 140px",
                padding: "24px 28px",
                borderTop: "1px solid var(--border)",
                borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
                transition: "background 120ms ease",
                cursor: "default",
              }}
            />
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
