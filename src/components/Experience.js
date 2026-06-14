import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Python Developer — AI & Backend",
    company: "Brainerhub Solutions",
    period: "Jun 2022 — Present",
    current: true,
    points: [
      "Engineered async FastAPI services with LangChain agents — reduced API latency by ~35% via non-blocking I/O and structured prompt orchestration.",
      "Shipped multi-agent RAG pipelines in LangGraph with dynamic tool routing across pgvector (semantic) and Neo4j (graph) sources.",
      "Introduced Langfuse for distributed LLM tracing, token accounting, and latency dashboards — drove ~20% inference cost reduction.",
      "Standardized Docker-based deployments across 5+ client projects, cutting environment setup from hours to under 10 minutes.",
      "Architected Kafka-based event pipelines to decouple high-throughput services and improve fault isolation.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Coodeit Solutions",
    period: "Dec 2021 — Jun 2022",
    current: false,
    points: [
      "Delivered DRF APIs serving 1,000+ daily ML prediction requests with clean, versioned contracts.",
      "Optimized high-volume PostgreSQL schemas via indexing and query restructuring — improved read performance by ~40%.",
      "Established shared API contracts with the ML team, eliminating interface ambiguity and cross-team debugging cycles.",
    ],
  },
];

const Experience = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="section-py" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="px-4 px-md-5 w-100">

        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label mb-3">Career</p>
          <h2 className="section-heading">Work<br /><span style={{ color: "var(--text-dim-head)" }}>History.</span></h2>
        </motion.div>

        {/* Accordion-style experience */}
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              style={{ borderBottom: "1px solid var(--border)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Header row — clickable */}
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  padding: "28px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div className="d-flex align-items-center gap-4 flex-wrap">
                  <div>
                    <div style={{
                      fontFamily: "'Space Grotesk Variable', system-ui, sans-serif",
                      fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "var(--text)",
                      marginBottom: 4,
                    }}>
                      {exp.company}
                    </div>
                    <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", fontWeight: 500 }}>
                      {exp.role}
                    </div>
                  </div>
                  {exp.current && (
                    <span style={{
                      fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
                      textTransform: "uppercase", color: "var(--text)",
                      border: "1px solid var(--border-strong)",
                      borderRadius: "999px", padding: "4px 12px",
                    }}>
                      Current
                    </span>
                  )}
                </div>
                <div className="d-flex align-items-center gap-3 flex-shrink-0">
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>
                    {exp.period}
                  </span>
                  <span style={{
                    width: 28, height: 28, borderRadius: "50%",
                    border: "1px solid var(--border-strong)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--text-muted)", fontSize: "0.7rem",
                    transform: open === i ? "rotate(45deg)" : "none",
                    transition: "transform 200ms ease",
                    flexShrink: 0,
                  }}>
                    +
                  </span>
                </div>
              </button>

              {/* Expanded content */}
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ paddingBottom: 28 }}>
                      <div className="d-flex flex-column gap-3" style={{ maxWidth: 720 }}>
                        {exp.points.map((p, pi) => (
                          <div key={pi} className="d-flex gap-3" style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                            <span style={{ flexShrink: 0, marginTop: "0.4em", width: 4, height: 4, borderRadius: "50%", background: "var(--text-muted)", display: "inline-block" }} />
                            {p}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          className="mt-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label mb-4">Education</p>
          <div className="row g-3">
            {[
              { degree: "B.Tech — Electrical Engineering", school: "Gyanmanjari Institute of Technology", year: "2018 – 2021" },
              { degree: "Diploma — Electrical Engineering", school: "Sir Bhavsinhji Polytechnic Institute", year: "2015 – 2018" },
            ].map((edu, i) => (
              <div key={i} className="col-12 col-md-6">
                <div className="card card-lift">
                  <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>{edu.degree}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{edu.school}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--border)" }}>{edu.year}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
