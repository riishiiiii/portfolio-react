import React, { useEffect } from "react";
import ProfilePic from "../assets/images/profile-pic.png";


const Home = () => {

  useEffect(() =>{
    const textContainer = document.getElementById('text-container');
    const texts = [
      'PYTHON DEVELOPER',
      'AI ENTHUSIAST',    
  ];
  
  let currentTextIndex = 0;
  let currentCharIndex = 0;
  
  function updateText() {
      const currentText = texts[currentTextIndex];
      textContainer.textContent = currentText.substring(0, currentCharIndex);
      currentCharIndex++;
  
      if (currentCharIndex > currentText.length) {
          currentCharIndex = 0;
          currentTextIndex = (currentTextIndex + 1) % texts.length;
      }
  }
  
  setInterval(updateText, 250);
  })



  return (
    <>
      <section class="pt-5" id="home">
        <div
          class="container mx-auto mt-5"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h1 style={{ color: "#0D6EFD" }} class="text-center">
            HI I AM <span id="text-container"> </span>
          </h1>
        </div>

        <div class="container">
          <div class="row mt-5">
            <div class="col-md-8 mx-auto d-flex align-items-center justify-content-center">
              <p
                class="lh-base fs-4"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Hello, I'm Rishi Pandey from Ahmedabad, Gujarat. My journey into
                the world of technology began with a keen interest in Python.
                Over the past 2+ years, I've delved into backend development
                using FastAPI and Django, gaining valuable experience along the
                way. Beyond web development, I've explored the captivating
                realms of machine learning and artificial intelligence,
                cultivating a deep enthusiasm for pushing the boundaries of AI
                innovation. Join me on this exciting adventure where technology
                meets creativity, and together, we can create something
                extraordinary..
              </p>
            </div>

            <div
              class="col-md-4 d-flex align-items-center justify-content-center text-center"
              style={{ height: "50vh" }}
            >
              <img
                src={ProfilePic}
                alt=""
                rel="noopener noreferrer"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                className="img-fluid"
                data-aos="fade-left"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>

        <div class="container mx-auto mt-5 text-center">
          <a
            href="/cv/resume.pdf"
            target="_blank"
            class="btn btn-primary fs-4"
          >
            <i class="fa fa-download"></i> Download Resume
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
