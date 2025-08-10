import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContaxt";
import {} from /* motion, AnimatePresence */ "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { darkMode, toggleTheme } = useTheme();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = [
        "home",
        "skills",
        "projects",
        "experience",
        "contact-me",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // No custom resize/click-outside logic needed; Bootstrap handles collapse.

  const navbarStyle = {
    background: darkMode
      ? "rgba(15, 15, 22, 0.55)"
      : "rgba(255, 255, 255, 0.65)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    transition: "all 0.3s ease",
    boxShadow: "none",
    borderBottom: "none",
    zIndex: 1000,
  };

  // Mobile menu styles handled by Bootstrap's collapse classes

  return (
    <>
      <section id="nav">
        <nav
          className={`navbar navbar-expand-lg position-fixed fixed-top ${scrolled ? "scrolled" : ""}`}
          style={navbarStyle}
        >
          <div className="container-fluid px-3 position-relative">
            <a
              className="navbar-brand fs-3"
              href="#home"
              style={{
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              <span className="text-gradient">Rishi Pandey</span>
            </a>

            <div className="d-flex align-items-center">
              <button
                onClick={toggleTheme}
                className="btn me-3"
                aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--text)",
                  fontSize: "1.2rem",
                  padding: "0.5rem",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
              </button>

              <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{
                  border: "none",
                  padding: "0.5rem",
                  background: darkMode
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                }}
              >
                <i className="fas fa-bars" style={{ color: "var(--text)" }} />
              </button>
            </div>

            <div className={`collapse navbar-collapse`} id="navbarNavAltMarkup">
              <div className="navbar-nav text-center ms-auto">
                {[
                  { name: "Home", id: "home" },
                  { name: "Skills", id: "skills" },
                  { name: "Projects", id: "projects" },
                  { name: "Experience", id: "experience" },
                  { name: "Contacts", id: "contact-me" },
                ].map((item, index) => (
                  <a
                    key={index}
                    className="nav-link mx-3 position-relative"
                    href={`#${item.id}`}
                    onClick={() => {
                      if (typeof window !== "undefined" && window.innerWidth < 992) {
                        const toggler = document.querySelector(".navbar-toggler");
                        if (toggler) {
                          toggler.click();
                        }
                      }
                    }}
                    style={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      color:
                        activeSection === item.id
                          ? "#7c3aed"
                          : darkMode
                            ? "rgba(255,255,255,0.8)"
                            : "rgba(0,0,0,0.8)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      padding: "0.75rem 0",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {item.name}
                    <span
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        width: activeSection === item.id ? "100%" : "0%",
                        height: "2px",
                        background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
                        transition: "width 0.3s ease",
                        borderRadius: "2px",
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
