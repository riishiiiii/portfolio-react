import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContaxt";

const experiences = [
  {
    role: "Python Developer",
    company: "Brainerhub Solutions",
    period: "Jun 2022 — Present",
    duration: "2.5+ years",
    type: "Full-time",
    location: "Remote",
    companyLogo: "fa-building",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
    duration: "6 months",
    type: "Full-time",
    location: "Remote",
    companyLogo: "fa-code",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    points: [
      "Backend work using Django REST Framework and SQL for AI + backend feature delivery.",
      "Implemented robust APIs integrating AI functionality for client projects.",
    ],
  },
];

const Experience = () => {
  useTheme();
  
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="experience" className="section-py">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="heading-lg mb-3">Professional Experience</h2>
          <p className="subtle" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            My journey in building scalable software solutions and AI-powered applications
          </p>
        </motion.div>

        <div className="position-relative" style={{ isolation: "isolate" }}>
          {/* Timeline line */}
          <div 
            className="position-absolute d-none d-md-block"
            style={{
              left: '2rem',
              top: '2rem',
              bottom: '2rem',
              width: '2px',
              background: 'linear-gradient(180deg, var(--brand), var(--brand-2))',
              borderRadius: '2px',
              opacity: 0.3
            }}
          />
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="row g-4 g-lg-5"
          >
            {experiences.map((exp, i) => (
              <motion.div
                variants={cardVariants}
                key={i}
                className="col-12"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass-card p-4 p-lg-5 tilt-card position-relative">
                  {/* Timeline dot */}
                  <div 
                    className="position-absolute d-none d-md-block"
                    style={{
                      left: '-0.5rem',
                      top: '2rem',
                      width: '1rem',
                      height: '1rem',
                      background: exp.gradient,
                      borderRadius: '50%',
                      boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)',
                      border: '2px solid var(--bg)'
                    }}
                  />
                  
                  <div className="row align-items-start">
                    <div className="col-12 col-lg-8">
                      <div className="d-flex align-items-start gap-3 mb-3">
                        <div 
                          className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                          style={{
                            width: '60px',
                            height: '60px',
                            background: exp.gradient,
                            boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                          }}
                        >
                          <i 
                            className={`fas ${exp.companyLogo}`}
                            style={{ 
                              fontSize: '1.5rem', 
                              color: 'white',
                              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                            }}
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h3 className="h4 mb-1" style={{ color: 'var(--text)', letterSpacing: '-0.01em' }}>
                            {exp.role}
                          </h3>
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <span className="fw-semibold" style={{ color: 'var(--brand)' }}>
                              {exp.company}
                            </span>
                            <span className="subtle">•</span>
                            <span className="subtle">{exp.type}</span>
                            <span className="subtle">•</span>
                            <span className="subtle">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 text-lg-end">
                      <div className="d-inline-flex flex-column align-items-lg-end gap-1">
                        <span 
                          className="tag"
                          style={{ 
                            background: 'rgba(124, 58, 237, 0.1)',
                            border: '1px solid rgba(124, 58, 237, 0.2)',
                            color: 'var(--brand)'
                          }}
                        >
                          {exp.period}
                        </span>
                        <span className="subtle" style={{ fontSize: '0.9rem' }}>
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="mt-4 mb-0" style={{ paddingLeft: "1.5rem", lineHeight: 1.7 }}>
                    {exp.points.map((p, idx) => (
                      <li key={idx} className="subtle mb-2" style={{ fontSize: '0.95rem' }}>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
