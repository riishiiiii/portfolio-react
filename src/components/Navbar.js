import React from "react";

const Navbar = () => {
  return (
    <>
      <section id="nav">
        <nav
          className="navbar navbar-expand-lg position-fixed fixed-top"
          data-bs-theme="dark"
          style={{ backgroundColor: "#000000" }}
        >
          <div class="container-fluid">
            <a class="navbar-brand fs-4" href="#home">
              Rishi Pandey
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div class="navbar-nav ">
                <a
                  class="nav-link active fs-4"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
                <a class="nav-link active fs-4" href="#skills">
                  Skills
                </a>
                <a class="nav-link active fs-4" href="#projects">
                  Projects
                </a>
                <a
                  class="nav-link active fs-4"
                  href="#contact-me"
                  aria-disabled="true"
                >
                  Contacts
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
