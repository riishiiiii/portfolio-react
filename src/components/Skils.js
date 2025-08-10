import React from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { ReactComponent as Python } from "../assets/icons/python.svg";
import { ReactComponent as JavaScript } from "../assets/icons/js.svg";
import { ReactComponent as FastApi } from "../assets/icons/fastapi-1.svg";
import { ReactComponent as HTML } from "../assets/icons/html.svg";
import { ReactComponent as CSS } from "../assets/icons/css.svg";
import { ReactComponent as Bash } from "../assets/icons/bash.svg";
import { ReactComponent as Jupyter } from "../assets/icons/jyupyter.svg";
import { ReactComponent as MongoDB } from "../assets/icons/mongodb-icon-2.svg";
import { ReactComponent as PgSql } from "../assets/icons/pgsql.svg";
import { ReactComponent as GIT } from "../assets/icons/git.svg";
import { ReactComponent as TensorFlow } from "../assets/icons/tf.svg";
import { ReactComponent as Pytorch } from "../assets/icons/pytorch.svg";
import { ReactComponent as Django } from "../assets/icons/django.svg";
import { ReactComponent as Vs } from "../assets/icons/vs.svg";
import { ReactComponent as ReactLogo } from "../assets/icons/react.svg";
import { ReactComponent as Pandas } from "../assets/icons/pandas.svg";
import { ReactComponent as Numpy } from "../assets/icons/numpy.svg";
import { ReactComponent as Docker } from "../assets/icons/docker.svg";
import { ReactComponent as Langchain } from "../assets/icons/langchain.svg";
import { ReactComponent as Redis } from "../assets/icons/redis.svg";
import { ReactComponent as Neo4j } from "../assets/icons/neo4j.svg";
import { ReactComponent as SQLAlchemy } from "../assets/icons/sqlalchemy.svg";
import { useTheme } from "./ThemeContaxt";
import { ReactComponent as PgVector } from "../assets/icons/pgvector.svg";
import { ReactComponent as LangGraph } from "../assets/icons/langgraph.svg";

const Skills = () => {
  useTheme();

  const skillGroups = [
    {
      title: "Core Technologies",
      description: "Primary languages and frameworks I work with daily",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      skills: [
        { Icon: Python, name: "Python" },
        { Icon: JavaScript, name: "JavaScript" },
        { Icon: FastApi, name: "FastAPI" },
        { Icon: Django, name: "Django" },
        { Icon: ReactLogo, name: "React" },
        { Icon: HTML, name: "HTML" },
        { Icon: CSS, name: "CSS" },
        { Icon: Bash, name: "Bash" },
      ],
    },
    {
      title: "Tools, Cloud & Databases",
      description: "Development tools and infrastructure technologies",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      skills: [
        { Icon: Jupyter, name: "Jupyter" },
        { Icon: MongoDB, name: "MongoDB" },
        { Icon: PgSql, name: "PostgreSQL" },
        { Icon: GIT, name: "GIT" },
        { Icon: Docker, name: "Docker" },
        { Icon: Vs, name: "VS Code" },
        { Icon: Redis, name: "Redis" },
        { Icon: PgVector, name: "pgvector" },
        { Icon: Neo4j, name: "Neo4j" },
        { Icon: SQLAlchemy, name: "SQLAlchemy 2.0" },
      ],
    },
    {
      title: "AI & Frameworks",
      description: "Machine learning and AI development tools",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      skills: [
        { Icon: TensorFlow, name: "TensorFlow" },
        { Icon: Pytorch, name: "PyTorch" },
        { Icon: Langchain, name: "LangChain" },
        { Icon: Pandas, name: "Pandas" },
        { Icon: Numpy, name: "Numpy" },
        { Icon: LangGraph, name: "LangGraph" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const groupVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
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
    <section id="skills" className="section-py">
      <style>
        {`
          #skills svg {
            width: 52px;
            height: 52px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .skill-group-header {
            position: relative;
            padding: 1.5rem;
            border-radius: 16px;
            margin-bottom: 2rem;
            overflow: hidden;
          }
          
          .skill-group-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0.1;
            z-index: -1;
          }
        `}
      </style>
      <div className="container px-3">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="heading-lg mb-3">Technical Expertise</h2>
          <p className="subtle" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Technologies and tools I use to build exceptional software solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              variants={groupVariants}
              className="mb-6"
            >
              <div 
                className="skill-group-header text-center"
                style={{
                  background: `linear-gradient(135deg, ${group.color.split('(')[1].split(')')[0]})`,
                }}
              >
                <h3 className="h3 mb-2 text-white fw-bold">{group.title}</h3>
                <p className="mb-0 text-white opacity-90" style={{ fontSize: '1rem' }}>
                  {group.description}
                </p>
              </div>
              
              <div className="row g-3 g-lg-4">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    className="col-6 col-sm-4 col-md-3 col-xl-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TiltCard
                      className="skill-card p-3 p-lg-4 text-center glass-card floating"
                      style={{ 
                        borderRadius: 16,
                        minHeight: '120px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                      maxTilt={12}
                      glare={true}
                    >
                      {skill.Icon ? (
                        <skill.Icon
                          className="img-fluid mb-3"
                          style={{ 
                            height: "48px",
                            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                          }}
                        />
                      ) : (
                        <div
                          className="mb-3"
                          style={{
                            height: 48,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <span
                            className="tag"
                            style={{ 
                              background: "rgba(255,255,255,0.1)",
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            {skill.name}
                          </span>
                        </div>
                      )}
                      <p className="mb-0 fw-semibold" style={{ 
                        fontSize: "0.9rem",
                        color: 'var(--text)',
                        letterSpacing: '-0.01em'
                      }}>
                        {skill.name}
                      </p>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
