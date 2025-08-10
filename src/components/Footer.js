import React from "react";
import { useTheme } from "./ThemeContaxt";

const Footer = () => {
  const { darkMode } = useTheme();
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
          <div
            className="text-center mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="heading-lg mb-2">Get In Touch</h2>
            <p className="subtle">
              Let's connect and create something amazing together
            </p>
          </div>

          <div className="row g-3 g-md-4">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="p-4 h-100 glass-card">
                <h3 className="h4 mb-4" style={{ color: "var(--text)" }}>
                  Contact Details
                </h3>
                <div className="d-flex align-items-center mb-3 contact-item">
                  <div
                    className="icon-wrapper me-3 p-2 rounded"
                    style={{
                      background: darkMode
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(15,23,42,0.08)",
                    }}
                  >
                    <i
                      className="fas fa-envelope"
                      style={{ color: "var(--text)" }}
                    ></i>
                  </div>
                  <a
                    href="mailto:riship4611@gmail.com"
                    className="text-decoration-none opacity-75 hover-opacity-100"
                    style={{ color: "var(--text)" }}
                  >
                    riship4611@gmail.com
                  </a>
                </div>
                <div className="d-flex align-items-center contact-item">
                  <div
                    className="icon-wrapper me-3 p-2 rounded"
                    style={{
                      background: darkMode
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(15,23,42,0.08)",
                    }}
                  >
                    <i
                      className="fas fa-phone"
                      style={{ color: "var(--text)" }}
                    ></i>
                  </div>
                  <span className="opacity-75" style={{ color: "var(--text)" }}>
                    +91 9510310510
                  </span>
                  <span className="opacity-75 ml-3" style={{ color: "var(--text)" }}>
                    +91 7990370056
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="p-4 h-100 glass-card">
                <h3 className="h4 mb-4" style={{ color: "var(--text)" }}>
                  Social Links
                </h3>
                <div className="d-flex gap-4">
                  <a
                    href="https://twitter.com/Riishiiiiii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link p-3 rounded"
                    style={{
                      background: darkMode
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(15,23,42,0.08)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = darkMode
                        ? "rgba(255,255,255,0.2)"
                        : "rgba(15,23,42,0.14)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = darkMode
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(15,23,42,0.08)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <i
                      className="fab fa-twitter"
                      style={{ color: "var(--text)" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rishi-pandey-247962182/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link p-3 rounded"
                    style={{
                      background: darkMode
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(15,23,42,0.08)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = darkMode
                        ? "rgba(255,255,255,0.2)"
                        : "rgba(15,23,42,0.14)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = darkMode
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(15,23,42,0.08)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <i
                      className="fab fa-linkedin"
                      style={{ color: "var(--text)" }}
                    ></i>
                  </a>
                  <a
                    href="https://github.com/riishiiiii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link p-3 rounded"
                    style={{
                      background: darkMode
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(15,23,42,0.08)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = darkMode
                        ? "rgba(255,255,255,0.2)"
                        : "rgba(15,23,42,0.14)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = darkMode
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(15,23,42,0.08)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <i
                      className="fab fa-github"
                      style={{ color: "var(--text)" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <p className="subtle mb-0">
              © 2025 Rishi Pandey. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
