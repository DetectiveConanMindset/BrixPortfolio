"use client";
export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        padding: "2rem 1.5rem",
        borderTop: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <span
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "1.125rem",
            color: "var(--text-primary)",
          }}
        >
          BrixDev<span style={{ color: "var(--primary)" }}>.</span>
        </span>
        <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Anthon Brix Timbal — Built with Next.js & Tailwind CSS
        </p>
      </div>

      <a
        href="#hero"
        style={{
          fontSize: "0.875rem",
          fontWeight: 600,
          color: "var(--primary)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          background: "var(--primary-light)",
          transition: "all 0.2s ease",
        }}
      >
        Back to top
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"/>
          <polyline points="5 12 12 5 19 12"/>
        </svg>
      </a>

      <style>{`
        @media (max-width: 640px) {
          .footer {
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
