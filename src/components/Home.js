import React, { useEffect, useRef, useState } from "react";
import { useTheme } from './ThemeContaxt';

const Home = () => {
  const textRef = useRef(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    const texts = [
      'PYTHON DEVELOPER',
      'AI ENTHUSIAST', 
      'FULL STACK DEV'
    ];
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let interval;

    const updateText = () => {
      if (!textRef.current) return;
      
      const currentText = texts[currentTextIndex];
      
      if (!isDeleting) {
        textRef.current.textContent = currentText.substring(0, currentCharIndex);
        currentCharIndex++;

        if (currentCharIndex > currentText.length) {
          isDeleting = true;
          setTimeout(() => {
            interval = setInterval(updateText, 50);
          }, 1500);
          clearInterval(interval);
          return;
        }
      } else {
        textRef.current.textContent = currentText.substring(0, currentCharIndex);
        currentCharIndex--;

        if (currentCharIndex === 0) {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % texts.length;
        }
      }
    };

    interval = setInterval(updateText, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center position-relative py-5">
      <div 
        className="position-absolute w-100 h-100" 
        style={{
          background: darkMode 
            ? 'radial-gradient(circle at 50% 50%, rgba(100, 100, 100, 0.05), transparent 70%)'
            : 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.05), transparent 70%)',
          zIndex: 0
        }}
      />

      <div className="container position-relative" style={{zIndex: 1}}>
        <div className="row justify-content-center">
          <div 
            className="col-lg-8 text-center px-3 px-md-4"
            data-aos="fade-up" 
            data-aos-duration="1200"
          >
            <div className="mb-4 d-flex justify-content-center">
              <div className="mb-4" style={{width: '80px', height: '2px', background: darkMode ? '#666' : '#ccc'}} />
            </div>
            <h2 
              className="h3 mb-4 d-inline-block position-relative" 
              style={{color: darkMode ? '#fff' : '#000'}}
            >
              <span ref={textRef} className="typing-text"></span>
              <span className="typing-cursor">|</span>
            </h2>
            <h1 
              className="display-3 fw-bold mb-4" 
              style={{
                color: darkMode ? '#ffffff' : '#000000',
                letterSpacing: '-1px',
                lineHeight: '1.2',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)'
              }}
            >
              Hi, I'm Rishi Pandey
              <span style={{
                color: darkMode ? '#888' : '#666',
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)'
              }}> —Python Developer</span>
            </h1>
            <p 
              className="lead mb-5" 
              style={{
                color: darkMode ? '#999' : '#666',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                lineHeight: '1.8',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              A passionate developer from Ahmedabad with over 2 years of expertise in Python backend development. 
              Specializing in FastAPI and Django, I craft elegant solutions that merge functionality with stunning design. 
              Currently exploring the frontiers of AI and machine learning to push innovation forward.
            </p>
            <div className="d-flex flex-wrap gap-4 justify-content-center align-items-center">
              <a
                href={process.env.PUBLIC_URL + "/cv/resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg px-5 py-3"
                style={{
                  background: darkMode ? '#666' : '#888',
                  border: 'none',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = darkMode ? '#888' : '#666';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = darkMode ? '#666' : '#888';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <i className="fa fa-download me-2"></i>
                Download Resume
              </a>
              <div className="social-links d-flex gap-3">
                <a
                  href="https://github.com/riishiiiii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{
                    color: darkMode ? '#fff' : '#000',
                    fontSize: '1.5rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#666'}
                  onMouseLeave={(e) => e.target.style.color = darkMode ? '#fff' : '#000'}
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/rishi-pandey-247962182/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="social-icon"
                  style={{
                    color: darkMode ? '#fff' : '#000',
                    fontSize: '1.5rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#0077b5'}
                  onMouseLeave={(e) => e.target.style.color = darkMode ? '#fff' : '#000'}
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://x.com/Riishiiiiii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{
                    color: darkMode ? '#fff' : '#000',
                    fontSize: '1.5rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#1DA1F2'}
                  onMouseLeave={(e) => e.target.style.color = darkMode ? '#fff' : '#000'}
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;