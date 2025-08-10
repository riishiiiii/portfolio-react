import React from "react";
import { useTheme } from "./ThemeContaxt";
import { motion } from "framer-motion";
// import TiltCard from "./TiltCard";

const Projects = () => {
  useTheme();

  const projects = [
    {
      title: "AI-Agent for Risk Matrices",
      description:
        "Agent that generates risk matrices for industrial activities from user queries or images. Dual knowledge bases (structured Excel embeddings + unstructured sources), LangChain + LangGraph tool-augmented reasoning, Redis chat context, AWS Bedrock LLMs, Neo4j for relational querying, Dockerized and deployed on AWS EC2 with a lightweight UI.",
      link: null,
      tags: [
        "LangChain",
        "LangGraph",
        "FastAPI",
        "AWS Bedrock",
        "Redis",
        "Neo4j",
        "Docker",
        "EC2",
      ],
    },
    {
      title: "RAG Pipeline for Medical Reports",
      description:
        "Patients can ask natural language questions on uploaded medical reports. FastAPI backend, Docling text/tablular extraction, pgvector embeddings for similarity search, client-hosted models for privacy, and Dockerized environments for consistency.",
      link: null,
      tags: ["FastAPI", "LangChain", "Docling", "pgvector", "Docker"],
    },
    {
      title: "Digital Twin",
      description:
        "Platform to simulate real-world scenarios and enable data-driven decisions. Role-based org/access control, CSV/Excel ingestion into dynamic tables, unit/integration tests with Pytest, Docker/Compose workflows, AWS S3 for storage, and Databricks for large-scale processing.",
      link: null,
      tags: [
        "FastAPI",
        "Docker",
        "SQLAlchemy",
        "PostgreSQL",
        "Alembic",
        "AWS S3",
        "Databricks",
        "Pytest",
      ],
    },
    {
      title: "Discord Bot Assistant",
      description:
        "Feature-rich modular Discord bot with persistent Postgres + Alembic migrations, Docker Compose orchestration, shell-scripted operations, deployed on AWS EC2; integrated third-party APIs and dynamic image generation via Pillow.",
      link: null,
      tags: [
        "Python",
        "PostgreSQL",
        "Alembic",
        "Docker",
        "Compose",
        "EC2",
        "APIs",
        "Pillow",
      ],
    },
  ];

  return (
    <section id="projects" className="section-py">
      <div className="container px-3">
        <div className="text-center mb-5">
          <h2 className="heading-lg">Projects</h2>
          <p className="subtle">Selected work with impact</p>
        </div>

        <div className="row g-3 g-md-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-12 col-md-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div
                className="project-card glass-card p-4 h-100"
                style={{ cursor: project.link ? "pointer" : "default" }}
                onClick={() =>
                  project.link && window.open(project.link, "_blank")
                }
              >
                <div className="d-flex align-items-start justify-content-between gap-2 mb-1">
                  <h3
                    className="h5 mb-0"
                    style={{ color: "var(--text)", letterSpacing: "-0.01em" }}
                  >
                    {project.title}
                  </h3>
                  {project.link && (
                    <i
                      className="fas fa-external-link-alt subtle"
                      style={{ fontSize: "0.9rem" }}
                    />
                  )}
                </div>
                <p className="project-desc mb-2">{project.description}</p>
                <div className="d-flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
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
