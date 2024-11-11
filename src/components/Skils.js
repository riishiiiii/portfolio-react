import React from "react";
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

import { useTheme } from './ThemeContaxt';

const Skills = () => {
  const { darkMode } = useTheme();

  const skillGroups = [
    {
      title: "Core Technologies",
      skills: [
        { Icon: Python, name: "Python" },
        { Icon: JavaScript, name: "JavaScript" },
        { Icon: FastApi, name: "FastAPI" },
        { Icon: HTML, name: "HTML" },
        { Icon: CSS, name: "CSS" },
        { Icon: Bash, name: "Bash" }
      ]
    },
    {
      title: "Tools & Databases",
      skills: [
        { Icon: Jupyter, name: "Jupyter" },
        { Icon: MongoDB, name: "MongoDB" },
        { Icon: PgSql, name: "PostgreSQL" },
        { Icon: GIT, name: "GIT" },
        { Icon: Docker, name: "Docker" },
        { Icon: Vs, name: "VS Code" }
      ]
    },
    {
      title: "AI & Frameworks",
      skills: [
        { Icon: TensorFlow, name: "TensorFlow" },
        { Icon: Pytorch, name: "PyTorch" },
        { Icon: Pandas, name: "Pandas" },
        { Icon: Numpy, name: "Numpy" },
        { Icon: Django, name: "Django" },
        { Icon: ReactLogo, name: "React" }
      ]
    }
  ];

  return (
    <section id="skills" className="min-vh-100 py-5">
      <div className="container px-3">
        <div 
          className="text-center mb-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 
            className="display-4 fw-bold" 
            style={{
              color: darkMode ? "#fff" : "#000",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)' // Responsive font size
            }}
          >
            Technical Skills
          </h2>
          <p 
            className="lead" 
            style={{
              color: darkMode ? "#fff" : "#333",
              fontSize: 'clamp(1rem, 2vw, 1.2rem)' // Responsive font size
            }}
          >
            Technologies and tools I work with
          </p>
        </div>

        {skillGroups.map((group, index) => (
          <div 
            key={index}
            className="mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={index * 100}
          >
            <h3 
              className="h4 mb-4" 
              style={{
                color: darkMode ? "#fff" : "#000",
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' // Responsive font size
              }}
            >
              {group.title}
            </h3>
            <div className="row g-3 g-md-4">
              {group.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="col-4 col-sm-4 col-md-3 col-lg-2">
                  <div 
                    className="skill-card p-3 text-center"
                    style={{
                      background: darkMode ? "#222" : "#f5f5f5",
                      borderRadius: "12px",
                      transition: "all 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.background = darkMode ? "#333" : "#e5e5e5";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.background = darkMode ? "#222" : "#f5f5f5";
                    }}
                  >
                    <skill.Icon className="img-fluid mb-2" style={{height: "40px"}}/>
                    <p className="mb-0" style={{color: darkMode ? "#fff" : "#000", fontSize: "0.9rem"}}>
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;