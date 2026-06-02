"use client";
import SectionHeader from "./SectionHeader";
import FadeInSection from "./FadeInSection";

const skillGroups = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["HTML/CSS", "JavaScript", "React JS", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Mobile",
    icon: "📱",
    skills: ["React Native", "Expo"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["PHP", ".NET", "VB.NET", "C#", "MySQL", "PostgreSQL"],
  },
  {
    category: "Database & Cloud",
    icon: "☁️",
    skills: ["Firebase", "Supabase"],
  },
  {
    category: "Tools & OS",
    icon: "🛠️",
    skills: ["XAMPP", "Git & GitHub", "VS Code", "Windows", "Linux"],
  },
];

function SkillCard({ group }) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "1.5rem",
        boxShadow: "var(--shadow)",
        transition: "box-shadow 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.25rem" }}>
        <span style={{ fontSize: "1.125rem" }}>{group.icon}</span>
        <h3
          style={{
            fontSize: "0.9375rem",
            fontWeight: 600,
            color: "var(--text-primary)",
          }}
        >
          {group.category}
        </h3>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {group.skills.map((skill) => (
          <span
            key={skill}
            style={{
              padding: "0.3125rem 0.75rem",
              borderRadius: "8px",
              background: "var(--bg)",
              border: "1px solid var(--border)",
              fontSize: "0.8125rem",
              color: "var(--text-secondary)",
              fontWeight: 500,
              transition: "background 0.15s, color 0.15s, border-color 0.15s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--primary-light)";
              e.currentTarget.style.color = "var(--primary)";
              e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--bg)";
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ maxWidth: "1100px", margin: "0 auto" }}>
      <SectionHeader title="Skills & Tools" subtitle="My technical toolkit" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // Slightly wider columns
          gap: "1.5rem", // More gap for breathing room
          marginTop: "3rem",
        }}
      >
        {skillGroups.map((group, index) => (
          <FadeInSection key={group.category} direction="up" delay={index * 100}>
            <SkillCard group={group} />
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
