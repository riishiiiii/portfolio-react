import React from "react";

const Footer = () => {
  return (
    <>
      <section
        id="contact-me"
        className="section-py"
        style={{
          background: "#0f0f16",
          borderTop: "1px solid rgba(255,255,255,0.08)",
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
                <h3 className="h4 mb-4 text-white">Contact Details</h3>
                <div className="d-flex align-items-center mb-3 contact-item">
                  <div
                    className="icon-wrapper me-3 p-2 rounded"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <a
                    href="mailto:riship4611@gmail.com"
                    className="text-white text-decoration-none opacity-75 hover-opacity-100"
                  >
                    riship4611@gmail.com
                  </a>
                </div>
                <div className="d-flex align-items-center contact-item">
                  <div
                    className="icon-wrapper me-3 p-2 rounded"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <span className="text-white opacity-75">+91 9510310510</span>
                  <span className="text-white opacity-75 ml-3">
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
                <h3 className="h4 mb-4 text-white">Social Links</h3>
                <div className="d-flex gap-4">
                  <a
                    href="https://twitter.com/Riishiiiiii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link p-3 rounded"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.2)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.1)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <i className="fab fa-twitter text-white"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rishi-pandey-247962182/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link p-3 rounded"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.2)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.1)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <i className="fab fa-linkedin text-white"></i>
                  </a>
                  <a
                    href="https://github.com/riishiiiii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link p-3 rounded"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.2)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.1)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <i className="fab fa-github text-white"></i>
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
