import React from "react";

const Footer = () => {
  return (
    <>
      <section id="contact-me" class="mt-5 pt-5">
        <footer class="bg-trans text-white p-4">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h5>Contact Information</h5>
                <p>Email: rishi4611@gmail.com</p>
                <p>Phone: +91 9510310510</p>
              </div>
              <div class="col-md-6">
                <h5>Follow Me</h5>

                <a
                  href="https://twitter.com/Riishiiiiii"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-icons hvr-grow"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/rishi-pandey-247962182/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-icons hvr-grow"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/riishiiiii"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-icons hvr-grow"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};


export default Footer;