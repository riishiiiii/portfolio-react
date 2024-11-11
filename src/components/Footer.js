import React from "react";

const Footer = () => {
  return (
    <>
      <section id="contact-me" className="py-5" style={{background: "#1a1a1a", borderTop: "1px solid rgba(255,255,255,0.1)"}}>
        <div className="container">
          <div 
            className="text-center mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="display-4 fw-bold text-white mb-3">Get In Touch</h2>
            <p className="lead text-white opacity-75">Let's connect and create something amazing together</p>
          </div>

          <div className="row g-4">
            <div 
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="p-4 h-100" style={{
                background: "rgba(255, 255, 255, 0.05)", 
                borderRadius: "15px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
              }}>
                <h3 className="h4 mb-4 text-white">Contact Details</h3>
                <div className="d-flex align-items-center mb-3 contact-item">
                  <div className="icon-wrapper me-3 p-2 rounded" style={{background: "rgba(255,255,255,0.1)"}}>
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <a href="mailto:rishi4611@gmail.com" className="text-white text-decoration-none opacity-75 hover-opacity-100">
                    rishi4611@gmail.com
                  </a>
                </div>
                <div className="d-flex align-items-center contact-item">
                  <div className="icon-wrapper me-3 p-2 rounded" style={{background: "rgba(255,255,255,0.1)"}}>
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <span className="text-white opacity-75">+91 9510310510</span>
                </div>
              </div>
            </div>

            <div 
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="p-4 h-100" style={{
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "15px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
              }}>
                <h3 className="h4 mb-4 text-white">Social Links</h3>
                <div className="d-flex gap-4">
                  <a
                    href="https://twitter.com/Riishiiiiii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link p-3 rounded"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.1)";
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
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.1)";
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
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.1)";
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
            <p className="text-white opacity-75 mb-0">© 2024 Rishi Pandey. All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;