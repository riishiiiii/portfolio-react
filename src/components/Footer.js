import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContaxt";

const Footer = () => {
  const { darkMode } = useTheme();
  
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/Riishiiiiii",
      icon: "fab fa-twitter",
      color: "#1DA1F2"
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/rishi-pandey-247962182/",
      icon: "fab fa-linkedin",
      color: "#0077B5"
    },
    {
      name: "GitHub",
      url: "https://github.com/riishiiiii", 
      icon: "fab fa-github",
      color: "#333"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <>
      <section
        id="contact-me"
        className="section-py"
        style={{
          background: "var(--bg-elev-1)",
          borderTop: darkMode
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(15,23,42,0.08)",
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <h2 className="heading-lg mb-3">Let's Connect</h2>
            <p className="subtle" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Ready to collaborate on your next project? Let's build something amazing together
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="row g-4 g-lg-5"
          >
            <motion.div
              variants={itemVariants}
              className="col-md-6"
            >
              <div className="p-4 p-lg-5 h-100 glass-card">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div 
                    className="d-flex align-items-center justify-content-center rounded-3"
                    style={{
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, var(--brand), var(--brand-2))',
                      boxShadow: '0 8px 20px rgba(124, 58, 237, 0.3)'
                    }}
                  >
                    <i 
                      className="fas fa-envelope"
                      style={{ 
                        fontSize: '1.2rem', 
                        color: 'white',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                      }}
                    />
                  </div>
                  <h3 className="h4 mb-0" style={{ color: "var(--text)" }}>
                  Contact Details
                  </h3>
                </div>
                
                <div className="d-flex align-items-center mb-4 contact-item">
                  <motion.a
                    href="mailto:riship4611@gmail.com"
                    className="text-decoration-none d-flex align-items-center gap-3 p-3 rounded-3 w-100"
                    style={{ 
                      color: "var(--text)",
                      background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.05)",
                      transition: "all 0.3s ease"
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(15,23,42,0.1)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="fas fa-envelope" style={{ color: "var(--brand)", fontSize: '1.1rem' }} />
                    <span className="fw-medium">riship4611@gmail.com</span>
                  </motion.a>
                </div>
                
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3" 
                    style={{ 
                      background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.05)"
                    }}
                  >
                    <i className="fas fa-phone" style={{ color: "var(--brand)", fontSize: '1.1rem' }} />
                    <div className="d-flex flex-column gap-1">
                      <span className="fw-medium" style={{ color: "var(--text)" }}>
                        +91 9510310510
                      </span>
                      <span className="fw-medium" style={{ color: "var(--text)" }}>
                        +91 7990370056
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="col-md-6"
            >
              <div className="p-4 p-lg-5 h-100 glass-card">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div 
                    className="d-flex align-items-center justify-content-center rounded-3"
                    style={{
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, var(--brand-2), var(--accent))',
                      boxShadow: '0 8px 20px rgba(6, 182, 212, 0.3)'
                    }}
                  >
                    <i 
                      className="fas fa-share-alt"
                      style={{ 
                        fontSize: '1.2rem', 
                        color: 'white',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                      }}
                    />
                  </div>
                  <h3 className="h4 mb-0" style={{ color: "var(--text)" }}>
                  Social Links
                  </h3>
                </div>
                
                <div className="d-flex flex-column gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link d-flex align-items-center gap-3 p-3 rounded-3 text-decoration-none"
                      style={{
                        background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.05)",
                        color: "var(--text)",
                        transition: "all 0.3s ease",
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(15,23,42,0.1)",
                        y: -2
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <i
                        className={social.icon}
                        style={{ 
                          color: social.color,
                          fontSize: '1.2rem'
                        }}
                      />
                      <span className="fw-medium">{social.name}</span>
                      <i 
                        className="fas fa-external-link-alt ms-auto"
                        style={{ fontSize: '0.8rem', opacity: 0.6 }}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-6"
          >
            <div className="soft-divider mb-4" />
            <p className="subtle mb-0" style={{ fontSize: '0.95rem' }}>
              © 2025 Rishi Pandey. All rights reserved.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Footer;
