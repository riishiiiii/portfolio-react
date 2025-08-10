import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeContaxt";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navbarStyle = {
    background: darkMode
      ? scrolled 
        ? "rgba(15, 15, 22, 0.8)"
        : "rgba(15, 15, 22, 0.4)"
      : scrolled
        ? "rgba(255, 255, 255, 0.9)"
        : "rgba(255, 255, 255, 0.6)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "none",
    borderBottom: "none",
    zIndex: 1000,
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact-me" },
  ];

  return (
    <>
      <section id="nav">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`navbar navbar-expand-lg position-fixed fixed-top ${scrolled ? "scrolled" : ""}`}
          style={navbarStyle}
        >
          <div className="container-fluid px-3 position-relative">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="navbar-brand fs-3"
              href="#home"
              style={{
                fontWeight: 800,
                letterSpacing: "-0.02em",
                textDecoration: 'none'
              }}
            >
              <span className="text-gradient">Rishi Pandey</span>
            </motion.a>

            <div className="d-flex align-items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="btn me-3"
                aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--text)",
                  fontSize: "1.2rem",
                  padding: "0.5rem",
                  borderRadius: "12px",
                }}
              >
                <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="navbar-toggler d-lg-none"
                type="button"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
                style={{
                  border: "none",
                  padding: "0.5rem",
                  background: darkMode
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                }}
              >
                <motion.i 
                  className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}
                  style={{ color: "var(--text)" }}
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>

            {/* Desktop Navigation */}
            <div className="d-none d-lg-flex navbar-nav ms-auto">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  className="nav-link mx-2 position-relative"
                  href={`#${item.id}`}
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: activeSection === item.id ? "var(--brand)" : "var(--text)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    padding: "0.75rem 1rem",
                    borderRadius: "12px",
                    textDecoration: 'none'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="position-absolute"
                      style={{
                        bottom: "0",
                        left: "50%",
                        width: "60%",
                        height: "2px",
                        background: "linear-gradient(90deg, var(--brand), var(--brand-2))",
                        borderRadius: "2px",
                        transform: "translateX(-50%)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="position-absolute top-100 start-0 end-0 d-lg-none"
                  style={{
                    background: darkMode
                      ? "rgba(15, 15, 22, 0.95)"
                      : "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "0 0 20px 20px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderTop: "none",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                    overflow: "hidden"
                  }}
                >
                  <div className="p-4">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={index}
                        className="d-block nav-link text-center py-3 position-relative"
                        href={`#${item.id}`}
                        onClick={closeMenu}
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 500,
                          color: activeSection === item.id ? "var(--brand)" : "var(--text)",
                          textDecoration: 'none',
                          borderRadius: "12px",
                          margin: "0.25rem 0"
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.02,
                          backgroundColor: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.name}
                        {activeSection === item.id && (
                          <motion.div
                            className="position-absolute"
                            style={{
                              left: "50%",
                              bottom: "8px",
                              width: "40px",
                              height: "2px",
                              background: "linear-gradient(90deg, var(--brand), var(--brand-2))",
                              borderRadius: "2px",
                              transform: "translateX(-50%)"
                            }}
                            layoutId="mobileActiveIndicator"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      </section>
      
      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="position-fixed d-lg-none"
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
              backdropFilter: "blur(5px)"
            }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
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
