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

  return (
    <section id="skills" className="section-py">
      <style>
        {`
          #skills svg {
            width: 48px;
            height: 48px;
          }
        `}
      </style>
      <div className="container px-3">
        <div className="text-center mb-5">
          <h2 className="heading-lg">Technical Skills</h2>
          <p className="subtle">Technologies and tools I work with</p>
        </div>

        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={index * 100}
          >
            <h3 className="h4 mb-3 text-gradient">{group.title}</h3>
            <div className="row g-2 g-sm-3 g-md-4">
              {group.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="col-6 col-sm-4 col-md-3 col-lg-2"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: (skillIndex % 6) * 0.05 }}
                >
                  <TiltCard
                    className="skill-card p-2 p-sm-3 text-center glass-card"
                    style={{ borderRadius: 12 }}
                    maxTilt={8}
                    glare={false}
                  >
                    {skill.Icon ? (
                      <skill.Icon
                        className="img-fluid mb-2"
                        style={{ height: "40px" }}
                      />
                    ) : (
                      <div
                        className="mb-2"
                        style={{
                          height: 40,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          className="tag"
                          style={{ background: "rgba(255,255,255,0.06)" }}
                        >
                          {skill.name}
                        </span>
                      </div>
                    )}
                    <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                      {skill.name}
                    </p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
