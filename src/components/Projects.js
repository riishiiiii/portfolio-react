import React from "react";
import { useTheme } from './ThemeContaxt';

const Projects = () => {
  const { darkMode } = useTheme();

  const projects = [
    {
      title: "Digital Twin",
      description: "Led the development of a high-performance FastAPI backend from inception, addressing performance challenges experienced with Anvil. Integrated Databricks, AWS S3, and AWS EC2 to create a robust data processing pipeline using PySpark for efficient handling of large datasets. Implemented APIs for training machine learning models with PyTorch on Databricks.",
      link: null,
      tags: ["FastAPI", "AWS", "Databricks", "PySpark", "PyTorch"]
    },
    {
      title: "Know Your Data",
      description: "Created a web application using streamlit to get the best-performing model on data provided by users. Users can visualize data, apply preprocessing on data, and find a perfect model for predicting new outputs.",
      link: "https://github.com/riishiiiii/knowyourdata",
      tags: ["Streamlit", "Machine Learning", "Data Visualization", "Python"]
    },
    {
      title: "Q&A Using Langchain and OpenAI",
      description: "Developed a compact yet impactful project integrating LangChain, OpenAI, and Pinecone to facilitate efficient information retrieval from PDF-formatted books. Leveraging the power of LangChain for language processing, OpenAI for advanced natural language understanding, and Pinecone for robust search capabilities, the project enables users to effortlessly extract answers from any book in PDF format.",
      link: "https://github.com/riishiiiii/QNA_langchain",
      tags: ["LangChain", "OpenAI", "Pinecone", "NLP"]
    }
  ];

  return (
    <section id="projects" className="min-vh-100 py-5">
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
            Projects
          </h2>
          <p 
            className="lead" 
            style={{
              color: darkMode ? "#fff" : "#333",
              fontSize: 'clamp(1rem, 2vw, 1.2rem)' // Responsive font size
            }}
          >
            Showcasing my journey through code and innovation
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="col-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <div 
                className="p-3 p-md-4 h-100"
                style={{
                  background: darkMode ? "#222" : "#f5f5f5",
                  borderRadius: "15px",
                  transition: "all 0.3s ease",
                  cursor: project.link ? "pointer" : "default"
                }}
                onMouseEnter={e => {
                  if (project.link) {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.background = darkMode ? "#333" : "#e5e5e5";
                  }
                }}
                onMouseLeave={e => {
                  if (project.link) {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = darkMode ? "#222" : "#f5f5f5";
                  }
                }}
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                <h3 
                  className="h4 mb-3" 
                  style={{
                    color: darkMode ? "#fff" : "#000",
                    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' // Responsive font size
                  }}
                >
                  {project.title}
                  {project.link && <i className="fas fa-external-link-alt ms-2" style={{fontSize: "0.8em"}}></i>}
                </h3>
                <p 
                  className="mb-4" 
                  style={{
                    color: darkMode ? "#fff" : "#333",
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)' // Responsive font size
                  }}
                >
                  {project.description}
                </p>
                <div className="d-flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1"
                      style={{
                        background: darkMode ? "#333" : "#e5e5e5",
                        color: darkMode ? "#fff" : "#000",
                        borderRadius: "20px",
                        fontSize: "0.85rem"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
