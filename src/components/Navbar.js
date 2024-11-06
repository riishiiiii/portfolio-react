import React, { useState, useEffect } from "react";
import { useTheme } from './ThemeContaxt';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = ['home', 'skills', 'projects', 'contact-me'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Handle clicks outside navbar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && 
          !e.target.closest('#navbarNavAltMarkup') && 
          !e.target.closest('.navbar-toggler')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const navbarStyle = {
    background: scrolled ? (darkMode ? 'rgba(10,10,15,0.95)' : 'rgba(255,255,255,0.95)') : 'transparent',
    backdropFilter: 'blur(15px)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.1)' : 'none',
    borderBottom: scrolled ? `1px solid ${darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` : 'none',
    zIndex: 1000
  };

  const mobileMenuStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: darkMode ? 'rgba(10,10,15,0.98)' : 'rgba(255,255,255,0.98)',
    backdropFilter: 'blur(15px)',
    padding: '1rem',
    borderRadius: '0 0 12px 12px',
    boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? 'visible' : 'hidden',
    transition: 'all 0.3s ease',
    maxHeight: isOpen ? '90vh' : '0',
    overflowY: 'auto'
  };

  return (
    <>
      <section id="nav">
        <nav
          className={`navbar navbar-expand-lg position-fixed fixed-top ${scrolled ? 'scrolled' : ''}`}
          style={navbarStyle}
        >
          <div className="container">
            <a 
              className="navbar-brand fs-3" 
              href="#home"
              style={{
                fontWeight: '800',
                background: 'linear-gradient(135deg, #4ecdc4 0%, #ff6b6b 50%, #4ecdc4 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient 3s linear infinite',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            >
              Rishi Pandey
            </a>

            <div className="d-flex align-items-center">
              <button
                onClick={toggleTheme}
                className="btn me-3"
                aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: darkMode ? '#fff' : '#000',
                  fontSize: '1.2rem',
                  padding: '0.5rem',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              >
                <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>

              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-controls="navbarNavAltMarkup"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
                style={{
                  border: 'none',
                  padding: '0.5rem',
                  background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease'
                }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div
              className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
              id="navbarNavAltMarkup"
              style={window.innerWidth < 992 ? mobileMenuStyle : {}}
            >
              <div className="navbar-nav text-center ms-auto">
                {[
                  {name: 'Home', id: 'home'},
                  {name: 'Skills', id: 'skills'},
                  {name: 'Projects', id: 'projects'},
                  {name: 'Contacts', id: 'contact-me'}
                ].map((item, index) => (
                  <a
                    key={index}
                    className="nav-link mx-3 position-relative"
                    href={`#${item.id}`}
                    onClick={() => window.innerWidth < 992 && setIsOpen(false)}
                    style={{
                      fontSize: '1rem',
                      fontWeight: '500',
                      color: activeSection === item.id ? '#4ecdc4' : (darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'),
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      padding: '0.75rem 0',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={e => {
                      e.target.style.color = '#4ecdc4';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.target.style.color = activeSection === item.id ? '#4ecdc4' : (darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)');
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {item.name}
                    <span 
                      style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: activeSection === item.id ? '100%' : '0%',
                        height: '2px',
                        background: 'linear-gradient(90deg, #4ecdc4, #ff6b6b)',
                        transition: 'width 0.3s ease',
                        borderRadius: '2px'
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
