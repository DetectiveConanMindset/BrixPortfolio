"use client";
import SectionHeader from "./SectionHeader";
import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <section id="about" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <SectionHeader tag="about" title="Who I Am" />

      <div style={{ marginTop: "3rem" }}>
        <p
          style={{
            fontSize: "1.0625rem",
            color: "var(--text-secondary)",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          I&apos;m a graduating Information Technology student and a passionate coder who enjoys building clean, practical, and user-focused web applications, mobile apps, and desktop software. I like working across the full development process — from designing efficient databases to writing code that brings ideas to life through simple and intuitive interfaces.
        </p>
        <p
          style={{
            fontSize: "1.0625rem",
            color: "var(--text-secondary)",
            lineHeight: 1.85,
            marginBottom: "2rem",
          }}
        >
          Through hands-on projects, I&apos;ve developed strong problem-solving skills and a mindset focused on continuous improvement. I spend most of my time coding, exploring new technologies, and refining my craft.
          <br /><br />
          For me, good software is simple, reliable, and works exactly the way it should — no unnecessary complexity, just clean code and great user experience.
        </p>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {["Problem Solver", "Detail-Oriented", "Team Player"].map((trait) => (
            <span
              key={trait}
              style={{
                padding: "0.375rem 0.875rem",
                borderRadius: "99px",
                background: "var(--primary-light)",
                color: "var(--primary)",
                fontSize: "0.8125rem",
                fontWeight: 500,
                border: "1px solid rgba(59,130,246,0.2)",
              }}
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
