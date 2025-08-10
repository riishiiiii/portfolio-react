import React from "react";
import { useTheme } from "./ThemeContaxt";
import { motion } from "framer-motion";

const Projects = () => {
  useTheme();

  const projects = [
    {
      title: "AI-Agent for Risk Matrices",
      description:
        "Agent that generates risk matrices for industrial activities from user queries or images. Dual knowledge bases (structured Excel embeddings + unstructured sources), LangChain + LangGraph tool-augmented reasoning, Redis chat context, AWS Bedrock LLMs, Neo4j for relational querying, Dockerized and deployed on AWS EC2 with a lightweight UI.",
      link: null,
      icon: "fa-robot",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
      icon: "fa-file-medical",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      tags: ["FastAPI", "LangChain", "Docling", "pgvector", "Docker"],
    },
    {
      title: "Digital Twin",
      description:
        "Platform to simulate real-world scenarios and enable data-driven decisions. Role-based org/access control, CSV/Excel ingestion into dynamic tables, unit/integration tests with Pytest, Docker/Compose workflows, AWS S3 for storage, and Databricks for large-scale processing.",
      link: null,
      icon: "fa-cube",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
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
      icon: "fa-discord",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return (
    <section id="projects" className="section-py">
      <div className="container px-3">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="heading-lg mb-3">Featured Projects</h2>
          <p className="subtle" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Selected work showcasing technical expertise and real-world impact
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="row g-4 g-lg-5"
        >
          {projects.map((project, index) => (
            <motion.div
              variants={cardVariants}
              key={index}
              className="col-12 col-lg-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="project-card glass-card p-4 p-lg-5 h-100"
                style={{ cursor: project.link ? "pointer" : "default" }}
                onClick={() =>
                  project.link && window.open(project.link, "_blank")
                }
              >
                <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
                  <div 
                    className="d-flex align-items-center justify-content-center rounded-3"
                    style={{
                      width: '60px',
                      height: '60px',
                      background: project.gradient,
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                    }}
                  >
                    <i 
                      className={`fas ${project.icon}`}
                      style={{ 
                        fontSize: '1.5rem', 
                        color: 'white',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                      }}
                    />
                  </div>
                  <h3
                    className="h4 mb-0 flex-grow-1"
                    style={{ 
                      color: "var(--text)", 
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3
                    }}
                  >
                    {project.title}
                  </h3>
                  {project.link && (
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-2"
                      style={{
                        width: '40px',
                        height: '40px',
                        background: 'rgba(255,255,255,0.1)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <i
                        className="fas fa-external-link-alt"
                        style={{ fontSize: "0.9rem", color: 'var(--text)' }}
                      />
                    </div>
                  )}
                </div>
                <p className="project-desc mb-4" style={{ lineHeight: 1.7 }}>
                  {project.description}
                </p>
                <div className="d-flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tagIndex} 
                      className="tag"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
