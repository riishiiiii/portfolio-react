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

  const resumeUrl = `${process.env.PUBLIC_URL || ""}/cv/resume.pdf`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };
  return (
    <section id="home" className="position-relative section-py">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div
        className="container max-w-hero position-relative"
        style={{ zIndex: 1 }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="tag">
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: "#22d3ee",
                  boxShadow: "0 0 10px #22d3ee",
                  animation: "pulse 2s infinite"
                }}
              />
              Building reliable backends & AI features
            </span>
          </motion.div>
          <motion.h1
            variants={itemVariants}
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
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="lead subtle mx-auto" 
            style={{ maxWidth: 820, lineHeight: 1.8 }}
          >
            Python developer with 3.5+ years of experience building scalable
            backends and AI-driven features. Proficient in FastAPI, Docker, and
            PostgreSQL, with expertise in deploying applications to AWS (EC2,
            S3, Bedrock). Skilled in Large Language Models (LLMs),
            LangChain/LangGraph, RAG pipelines, and vector databases (pgvector,
            Neo4j). Experienced in Docling-based parsing, and committed to clean
            architecture, high performance, and reliable systems.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="d-flex gap-3 justify-content-center mt-5 flex-wrap"
          >
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-modern"
              download
              onClick={(e) => {
                // Fallback if popup blockers interfere
                const win = window.open(resumeUrl, "_blank");
                if (!win) {
                  e.preventDefault();
                  window.location.href = resumeUrl;
                }
              }}
            >
              <i className="fa fa-download me-2" /> Resume
            </a>
            <a
              href="#projects"
              className="btn-modern"
              style={{ background: "rgba(124,58,237,0.2)" }}
            >
              <i className="fa fa-code me-2" />
              View Projects
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="soft-divider mt-6"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="row g-3 g-md-4 mt-5"
        >
          {["FastAPI", "PostgreSQL", "AWS", "LangChain", "LangGraph", "Docker"].map((s, i) => (
            <motion.div 
              key={s} 
              variants={skillVariants}
              className="col-6 col-sm-4 col-md-2"
            >
              <div className="glass-card text-center py-4 tilt-card floating skill-card">
                <div className="tilt-layer fw-semibold" style={{ fontSize: '0.9rem' }}>{s}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
