export default function SectionHeader({ tag, title }) {
  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <span
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--primary)",
          display: "block",
          marginBottom: "0.5rem",
        }}
      >
        /{tag}
      </span>
      <h2
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: 400,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
    </div>
  );
}
