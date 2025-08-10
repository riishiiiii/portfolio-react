import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContaxt";

const experiences = [
  {
    role: "Python Developer",
    company: "Brainerhub Solutions",
    period: "Jun 2022 — Present",
    points: [
      "Develop and maintain Python applications using FastAPI, Django, PostgreSQL, and Docker.",
      "Build AI-integrated services using LangChain/LangGraph, RAG pipelines, and vector DBs.",
      "Own CI-friendly, production deployments to AWS EC2; lead clean, scalable designs.",
    ],
  },
  {
    role: "Python Developer",
    company: "Coodeit Solutions",
    period: "Dec 2021 — Jun 2022",
    points: [
      "Backend work using Django REST Framework and SQL for AI + backend feature delivery.",
      "Implemented robust APIs integrating AI functionality for client projects.",
    ],
  },
  // Add earlier experiences here if needed from PDF
];

const Experience = () => {
  useTheme();
  return (
    <section id="experience" className="section-py">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="heading-lg">Experience</h2>
          <p className="subtle">Recent roles and impact</p>
        </div>

        <div className="position-relative" style={{ isolation: "isolate" }}>
          <div className="soft-divider mb-4" />
          <div className="row g-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="col-12"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <div className="glass-card p-4 tilt-card">
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                    <div>
                      <div className="h4 mb-1">{exp.role}</div>
                      <div className="subtle">{exp.company}</div>
                    </div>
                    <div className="subtle">{exp.period}</div>
                  </div>
                  <ul className="mt-3 mb-0" style={{ paddingLeft: "1.2rem" }}>
                    {exp.points.map((p, idx) => (
                      <li key={idx} className="subtle">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
