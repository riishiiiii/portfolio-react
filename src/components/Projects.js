import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    num: "01",
    title: "AI Risk Matrix Agent",
    impact: "Multi-hour manual process → real-time generation",
    description:
      "Multi-agent system generating industrial risk matrices from natural language queries or uploaded images. Dual knowledge base: structured Excel data in pgvector + unstructured documents via Docling. LangGraph orchestrates agent decision flows with dynamic tool routing and Neo4j for entity-relationship traversal.",
    metric: "~50% query latency reduction via Neo4j vs. full-text search",
    tags: ["LangChain", "LangGraph", "FastAPI", "AWS Bedrock", "Neo4j", "pgvector", "Redis", "Docker"],
    featured: true,
  },
  {
    num: "02",
    title: "Medical Report RAG Pipeline",
    impact: "20+ min → under 30 seconds",
    description:
      "Privacy-first RAG system letting patients query medical reports in natural language. Docling's table-aware PDF parser extracts structured clinical data. All inference runs on client-hosted models — zero third-party data exposure.",
    metric: "Sub-second similarity search across hundreds of reports",
    tags: ["FastAPI", "LangChain", "Docling", "pgvector", "PostgreSQL", "Docker"],
    featured: false,
  },
  {
    num: "03",
    title: "Digital Twin Platform",
    impact: "~60% faster data onboarding",
    description:
      "Enterprise simulation platform for real-time industrial workflow modelling. CSV/Excel ingestion with dynamic PostgreSQL schema generation. Fine-grained RBAC for multi-tenant access. 90%+ test coverage via Pytest.",
    metric: "90%+ test coverage across all critical API paths",
    tags: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "AWS S3", "Databricks", "Pytest", "Docker"],
    featured: false,
  },
  {
    num: "04",
    title: "Discord Community Bot",
    impact: "99%+ uptime on AWS EC2",
    description:
      "Modular production-deployed Discord bot handling community automation, third-party API integrations, and dynamic image generation via Pillow. Docker Compose orchestration with Alembic versioned migrations.",
    metric: "Zero-downtime schema migrations via Alembic",
    tags: ["Python", "PostgreSQL", "Docker Compose", "Alembic", "AWS EC2", "Pillow"],
    featured: false,
  },
];

const Projects = () => {
  const featured = PROJECTS[0];
  const rest = PROJECTS.slice(1);

  return (
    <section id="projects" className="section-py" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="px-4 px-md-5 w-100">

        <motion.div
          className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="section-label mb-3">Selected Work</p>
            <h2 className="section-heading">Projects<br /><span style={{ color: "var(--text-dim-head)" }}>with impact.</span></h2>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", maxWidth: 280, lineHeight: 1.6 }}>
            Production AI systems built and deployed end-to-end for enterprise clients.
          </p>
        </motion.div>

        {/* Featured project */}
        <motion.div
          className="card card-lift mb-3"
          style={{ padding: "40px" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-4">
            <div>
              <span className="project-num mb-2 d-block">{featured.num}</span>
              <h3 style={{
                fontFamily: "'Space Grotesk Variable', system-ui, sans-serif",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text)",
                margin: 0,
              }}>
                {featured.title}
              </h3>
            </div>
            <span style={{
              fontSize: "0.8rem", fontWeight: 600,
              color: "var(--text-muted)",
              background: "var(--bg-hover)",
              border: "1px solid var(--border-strong)",
              borderRadius: "999px",
              padding: "6px 14px",
              whiteSpace: "normal",
            }}>
              {featured.impact}
            </span>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-7">
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                {featured.description}
              </p>
            </div>
            <div className="col-12 col-md-5">
              <div style={{
                background: "var(--bg-hover)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                padding: "16px 20px",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                marginBottom: 20,
                lineHeight: 1.6,
              }}>
                {featured.metric}
              </div>
              <div className="d-flex flex-wrap gap-2">
                {featured.tags.map((t, i) => <span key={i} className="chip">{t}</span>)}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other projects grid */}
        <div className="row g-3">
          {rest.map((project, i) => (
            <motion.div
              key={i}
              className="col-12 col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="card card-lift h-100 d-flex flex-column" style={{ gap: 16 }}>
                <div>
                  <span className="project-num d-block mb-2">{project.num}</span>
                  <h3 style={{
                    fontFamily: "'Space Grotesk Variable', system-ui, sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--text)",
                    margin: 0,
                  }}>
                    {project.title}
                  </h3>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.65, margin: 0, flex: 1 }}>
                  {project.description}
                </p>
                <div style={{
                  fontSize: "0.78rem", color: "var(--text-muted)",
                  borderTop: "1px solid var(--border)", paddingTop: 14,
                }}>
                  {project.impact}
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((t, ti) => <span key={ti} className="chip">{t}</span>)}
                  {project.tags.length > 4 && (
                    <span className="chip">+{project.tags.length - 4}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
