import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { useTheme } from "./ThemeContaxt";

const Hero = () => {
  useTheme();

  useEffect(() => {
    // Smooth scrolling once at mount
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1,
      wheelMultiplier: 0.9,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section id="home" className="position-relative section-py">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div
        className="container max-w-hero position-relative"
        style={{ zIndex: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="mb-3">
            <span className="tag">
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: "#22d3ee",
                  boxShadow: "0 0 10px #22d3ee",
                }}
              />
              Building reliable backends & AI features
            </span>
          </div>
          <h1
            className="heading-xl fw-800 mb-3"
            style={{
              background:
                "linear-gradient(120deg, var(--text) 30%, var(--brand-2))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Rishi Pandey
          </h1>
          <p className="lead subtle mx-auto" style={{ maxWidth: 780 }}>
            Python developer with 3.5+ years of experience building scalable
            backends and AI-driven features. Proficient in FastAPI, Docker, and
            PostgreSQL, with expertise in deploying applications to AWS (EC2,
            S3, Bedrock). Skilled in Large Language Models (LLMs),
            LangChain/LangGraph, RAG pipelines, and vector databases (pgvector,
            Neo4j). Experienced in Docling-based parsing, and committed to clean
            architecture, high performance, and reliable systems.
          </p>
          <div className="d-flex gap-2 gap-sm-3 justify-content-center mt-4 flex-wrap">
            <a
              href={process.env.PUBLIC_URL + "/cv/resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-modern"
            >
              <i className="fa fa-download me-2" /> Resume
            </a>
            <a
              href="#projects"
              className="btn-modern"
              style={{ background: "rgba(124,58,237,0.2)" }}
            >
              View Projects
            </a>
          </div>
        </motion.div>

        <div className="soft-divider mt-5" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="row g-4 mt-4"
        >
          {["FastAPI", "PostgreSQL", "AWS", "LangChain", "LangGraph", "Docker"].map((s, i) => (
            <div key={s} className="col-6 col-sm-4 col-md-2">
              <div className="glass-card text-center py-3 tilt-card">
                <div className="tilt-layer fw-semibold">{s}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
