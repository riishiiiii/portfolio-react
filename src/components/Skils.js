import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as Python }      from "../assets/icons/python.svg";
import { ReactComponent as FastApi }     from "../assets/icons/fastapi-1.svg";
import { ReactComponent as Django }      from "../assets/icons/django.svg";
import { ReactComponent as MongoDB }     from "../assets/icons/mongodb-icon-2.svg";
import { ReactComponent as PgSql }       from "../assets/icons/pgsql.svg";
import { ReactComponent as GIT }         from "../assets/icons/git.svg";
import { ReactComponent as Docker }      from "../assets/icons/docker.svg";
import { ReactComponent as Redis }       from "../assets/icons/redis.svg";
import { ReactComponent as PgVector }    from "../assets/icons/pgvector.svg";
import { ReactComponent as Neo4j }       from "../assets/icons/neo4j.svg";
import { ReactComponent as SQLAlchemy }  from "../assets/icons/sqlalchemy.svg";
import { ReactComponent as Langchain }   from "../assets/icons/langchain.svg";
import { ReactComponent as LangGraph }   from "../assets/icons/langgraph.svg";

const MARQUEE_SKILLS = [
  { Icon: Python,     name: "Python" },
  { Icon: FastApi,    name: "FastAPI" },
  { Icon: Django,     name: "Django" },
  { Icon: Langchain,  name: "LangChain" },
  { Icon: LangGraph,  name: "LangGraph" },
  { Icon: PgSql,      name: "PostgreSQL" },
  { Icon: PgVector,   name: "pgvector" },
  { Icon: Neo4j,      name: "Neo4j" },
  { Icon: Redis,      name: "Redis" },
  { Icon: MongoDB,    name: "MongoDB" },
  { Icon: Docker,     name: "Docker" },
  { Icon: GIT,        name: "Git" },
  { Icon: SQLAlchemy, name: "SQLAlchemy" },
  { name: "AWS Bedrock" },
  { name: "Kafka" },
  { name: "Langfuse" },
  { name: "RAG Pipelines" },
  { name: "AWS EC2" },
];

const SKILL_GROUPS = [
  {
    title: "LLM & RAG",
    items: [
      { name: "LangChain",           detail: "Production pipelines" },
      { name: "LangGraph",           detail: "Multi-agent orchestration" },
      { name: "AWS Bedrock",         detail: "Claude, Titan models" },
      { name: "RAG Pipelines",       detail: "Hybrid search + rerank" },
      { name: "Prompt Engineering",  detail: "Few-shot, CoT, ReAct" },
      { name: "Langfuse",            detail: "LLM observability" },
      { name: "Streaming Responses", detail: "SSE + WebSocket" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Python",         detail: "4+ years, primary lang" },
      { name: "FastAPI",        detail: "REST + async APIs" },
      { name: "Django",         detail: "DRF, admin, ORM" },
      { name: "Microservices",  detail: "Event-driven arch" },
      { name: "Pytest",         detail: "90%+ test coverage" },
      { name: "Shell Scripting",detail: "Automation & CI" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL",   detail: "Primary data store" },
      { name: "pgvector",     detail: "Vector similarity search" },
      { name: "Neo4j",        detail: "Graph traversal & KG" },
      { name: "MongoDB",      detail: "Document store" },
      { name: "Redis",        detail: "Cache + pub/sub" },
      { name: "SQLAlchemy",   detail: "ORM + Alembic migrations" },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { name: "Docker",        detail: "Compose + multi-stage" },
      { name: "AWS EC2 / S3",  detail: "Deployed & maintained" },
      { name: "Kafka",         detail: "Event streaming" },
      { name: "Git",           detail: "GitHub, GitLab workflows" },
      { name: "Linux",         detail: "Ubuntu, bash admin" },
      { name: "Docling",       detail: "PDF / table extraction" },
    ],
  },
];

const MarqueeItem = ({ Icon, name }) => (
  <div className="chip d-inline-flex align-items-center gap-2">
    {Icon && (
      <span style={{ width: 16, height: 16, display: "flex", alignItems: "center", flexShrink: 0 }}>
        <Icon style={{ width: 16, height: 16 }} />
      </span>
    )}
    {name}
  </div>
);

const Skills = () => (
  <section id="skills" style={{ borderTop: "1px solid var(--border)" }}>

    {/* Marquee strip */}
    <div className="marquee-container" style={{ padding: "28px 0", borderBottom: "1px solid var(--border)" }}>
      <div style={{ display: "flex", gap: 12 }}>
        <div className="marquee-track">
          {[...MARQUEE_SKILLS, ...MARQUEE_SKILLS].map((s, i) => (
            <MarqueeItem key={i} {...s} />
          ))}
        </div>
      </div>
    </div>

    {/* Skills grid */}
    <div className="section-py">
      <div className="px-4 px-md-5 w-100">
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label mb-3">Expertise</p>
          <h2 className="section-heading">Technologies<br /><span style={{ color: "var(--text-dim-head)" }}>I work with.</span></h2>
        </motion.div>

        <div className="row g-3">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={gi}
              className="col-12 col-sm-6 col-lg-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="card card-lift h-100">
                <p style={{
                  fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 20,
                }}>
                  {group.title}
                </p>
                <div className="d-flex flex-column">
                  {group.items.map((item, ii) => (
                    <div
                      key={ii}
                      className="skill-item"
                      style={{
                        borderBottom: ii < group.items.length - 1 ? "1px solid var(--border)" : "none",
                      }}
                    >
                      <span className="skill-name">{item.name}</span>
                      <span className="skill-detail">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    <style>{`
      .skill-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 8px;
        margin: 0 -8px;
        border-radius: 6px;
        cursor: default;
        transition: background 140ms ease;
        gap: 12px;
      }
      .skill-item:hover {
        background: var(--bg-hover);
      }
      .skill-name {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--text);
        transition: color 140ms ease;
        white-space: nowrap;
      }
      .skill-detail {
        font-size: 0.72rem;
        font-weight: 500;
        color: var(--text-muted);
        opacity: 0;
        transform: translateX(6px);
        transition: opacity 160ms ease, transform 160ms ease;
        white-space: nowrap;
        text-align: right;
      }
      .skill-item:hover .skill-detail {
        opacity: 1;
        transform: translateX(0);
      }
    `}</style>
  </section>
);

export default Skills;
