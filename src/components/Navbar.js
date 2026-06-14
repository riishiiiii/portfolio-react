import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContaxt";

const NAV_ITEMS = [
  { name: "Work",       id: "projects" },
  { name: "Skills",     id: "skills" },
  { name: "Experience", id: "experience" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="position-fixed fixed-top w-100"
      style={{
        height: "var(--nav-h)",
        background: scrolled ? "var(--bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        zIndex: 1000,
        transition: "background 200ms ease, border-color 200ms ease",
      }}
    >
      <div
        className="d-flex align-items-center justify-content-between h-100 px-4 px-md-5 w-100"
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontFamily: "'Space Grotesk Variable', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "1.2rem",
            color: "var(--text)",
            textDecoration: "none",
            letterSpacing: "-0.03em",
          }}
        >
          rishi.
        </a>

        {/* Desktop center links */}
        <div className="d-none d-md-flex align-items-center gap-4">
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 120ms ease",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--text)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right: theme + CTA */}
        <div className="d-flex align-items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              width: 36, height: 36,
              background: "transparent",
              border: "1px solid var(--border-strong)",
              borderRadius: "50%",
              color: "var(--text-muted)",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.8rem",
              transition: "border-color 120ms ease, color 120ms ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--text-muted)"; e.currentTarget.style.color = "var(--text)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-strong)"; e.currentTarget.style.color = "var(--text-muted)"; }}
          >
            <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`} />
          </button>

          <a href="#contact-me" className="btn-pill d-none d-md-inline-flex">
            Let's Talk →
          </a>

          {/* Mobile hamburger */}
          <button
            className="d-md-none navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileNav"
            aria-controls="mobileNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              width: 36, height: 36,
              background: "transparent",
              border: "1px solid var(--border-strong)",
              borderRadius: "50%",
              color: "var(--text)",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.8rem",
            }}
          >
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className="collapse" id="mobileNav" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="px-4 py-3 d-flex flex-column gap-3">
          {[...NAV_ITEMS, { name: "Contact", id: "contact-me" }].map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => { const t = document.querySelector("[data-bs-target='#mobileNav']"); if (t) t.click(); }}
              style={{ fontSize: "1rem", fontWeight: 500, color: "var(--text-muted)", textDecoration: "none" }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
