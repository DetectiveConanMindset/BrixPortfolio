import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        background: "var(--bg)",
        color: "var(--text-primary)",
        textAlign: "center",
      }}
    >
      <section style={{ maxWidth: "520px" }}>
        <p
          style={{
            color: "var(--primary)",
            fontSize: "0.8125rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(2.5rem, 8vw, 4rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          Page not found
        </h1>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "2rem",
          }}
        >
          The page you opened does not exist or may have been moved.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.75rem 1.5rem",
            borderRadius: "12px",
            background: "var(--primary)",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
