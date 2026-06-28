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

const ProjectCard = ({ project, featured = false }) => (
  <div
    className="card-lift"
    style={{
      background: "var(--bg-card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      padding: featured ? "clamp(20px, 4vw, 40px)" : 24,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      minWidth: 0,
      overflow: "hidden",
    }}
  >
    {/* Header: num + title + badge */}
    <div>
      <span className="project-num" style={{ display: "block", marginBottom: 6 }}>{project.num}</span>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <h3 style={{
          fontFamily: "'Space Grotesk Variable', system-ui, sans-serif",
          fontSize: featured ? "clamp(1.2rem, 2.5vw, 2rem)" : "1.05rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "var(--text)",
          margin: 0,
          minWidth: 0,
        }}>
          {project.title}
        </h3>
        <span style={{
          fontSize: "0.75rem", fontWeight: 600,
          color: "var(--text-muted)",
          background: "var(--bg-hover)",
          border: "1px solid var(--border-strong)",
          borderRadius: 999,
          padding: "4px 10px",
          whiteSpace: "nowrap",
          flexShrink: 0,
          alignSelf: "flex-start",
        }}>
          {project.impact}
        </span>
      </div>
    </div>

    <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0, flex: 1 }}>
      {project.description}
    </p>

    <div style={{
      background: "var(--bg-hover)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",
      padding: "10px 14px",
      fontSize: "0.78rem",
      color: "var(--text-muted)",
      lineHeight: 1.6,
    }}>
      {project.metric}
    </div>

    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {project.tags.slice(0, featured ? project.tags.length : 4).map((t, i) => (
        <span key={i} className="chip">{t}</span>
      ))}
      {!featured && project.tags.length > 4 && (
        <span className="chip">+{project.tags.length - 4}</span>
      )}
    </div>
  </div>
);

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.52, delay, ease: [0.16, 1, 0.3, 1] },
});

const Projects = () => {
  const [p0, p1, p2, p3] = PROJECTS;

  return (
    <section id="projects" className="section-py" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="px-4 px-md-5 w-100">

        <motion.div
          className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-5"
          {...fadeIn()}
        >
          <div>
            <p className="section-label mb-3">Selected Work</p>
            <h2 className="section-heading">Projects<br /><span style={{ color: "var(--text-dim-head)" }}>with impact.</span></h2>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", maxWidth: 280, lineHeight: 1.6 }}>
            Production AI systems built and deployed end-to-end for enterprise clients.
          </p>
        </motion.div>

        <div className="bento-grid">
          <motion.div className="bento-featured" {...fadeIn(0)}>
            <ProjectCard project={p0} featured />
          </motion.div>

          <motion.div className="bento-side" {...fadeIn(0.06)}>
            <ProjectCard project={p1} />
          </motion.div>

          <motion.div className="bento-small" {...fadeIn(0.1)}>
            <ProjectCard project={p2} />
          </motion.div>

          <motion.div className="bento-wide" {...fadeIn(0.14)}>
            <ProjectCard project={p3} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
