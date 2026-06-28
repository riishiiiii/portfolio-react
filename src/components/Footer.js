import React from "react";
import { motion } from "framer-motion";
import NowPlaying from "./NowPlaying";

const SOCIALS = [
  { href: "https://github.com/riishiiiii",                          icon: "fab fa-github" },
  { href: "https://www.linkedin.com/in/rishi-pandey-247962182/",   icon: "fab fa-linkedin" },
  { href: "https://twitter.com/Riishiiiiii",                       icon: "fab fa-twitter" },
];

const Footer = () => (
  <section id="contact-me" style={{ borderTop: "1px solid var(--border)" }}>
    <div className="px-4 px-md-5 w-100" style={{ paddingTop: "clamp(5rem, 10vw, 8rem)", paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >

        {/* Now Playing card — sits above the CTA */}
        <NowPlaying />

        {/* Divider */}
        <div style={{ margin: "40px 0", height: 1, background: "var(--border)" }} />

        {/* Contact CTA */}
        <p className="section-label mb-4">Contact</p>
        <h2 style={{
          fontFamily: "'Space Grotesk Variable', system-ui, sans-serif",
          fontSize: "clamp(2.5rem, 7vw, 6rem)",
          fontWeight: 700,
          letterSpacing: "-0.04em",
          lineHeight: 0.95,
          color: "var(--text)",
          marginBottom: 48,
        }}>
          Let's work<br />
          <span style={{ color: "var(--text-dim-head)" }}>together.</span>
        </h2>

        <div className="d-flex flex-wrap gap-3 mb-5">
          <a href="mailto:riship4611@gmail.com" className="btn-pill">
            riship4611@gmail.com →
          </a>
          <a href="https://www.linkedin.com/in/rishi-pandey-247962182/" target="_blank" rel="noopener noreferrer" className="btn-pill-outline">
            <i className="fab fa-linkedin" /> LinkedIn
          </a>
          <a href="https://github.com/riishiiiii" target="_blank" rel="noopener noreferrer" className="btn-pill-outline">
            <i className="fab fa-github" /> GitHub
          </a>
        </div>

        {/* Footer bar */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 28 }}>
          <div className="footer-bottom">
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>© 2025 Rishi Pandey</span>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Python Developer · AI & Backend · Ahmedabad</span>
            <div className="d-flex gap-4">
              {SOCIALS.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ color: "var(--text-muted)", fontSize: "0.9rem", transition: "color 120ms ease" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--text)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  </section>
);

export default Footer;
