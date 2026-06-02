"use client";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Form submit failed");
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "10px",
    border: "1px solid var(--border)",
    background: "var(--bg)",
    color: "var(--text-primary)",
    fontSize: "0.9375rem",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      style={{
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeader tag="contact" title="Let's Connect" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            marginTop: "2.5rem",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              I'm currently open to freelance opportunities. If
              you have a project in mind or just want to say hello, drop me a
              message - I'll get back to you soon.
            </p>

            <div style={{ marginBottom: "2rem" }}>
              <a
                href="mailto:petsuetv@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  color: "var(--primary)",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              >
                Petsuetv@gmail.com
              </a>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    minWidth: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    border: "1px solid var(--border)",
                    background: "var(--bg)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    padding: "0 0.85rem",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    transition: "color 0.2s, border-color 0.2s, transform 0.2s",
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "1.75rem",
              boxShadow: "var(--shadow)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.875rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.375rem" }}>Name</label>
                <input
                  type="text"
                  required
                  suppressHydrationWarning
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.375rem" }}>Email</label>
                <input
                  type="email"
                  required
                  suppressHydrationWarning
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.375rem" }}>Message</label>
              <textarea
                required
                suppressHydrationWarning
                rows={5}
                placeholder="Tell me about your project or say hello..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
              />
            </div>

            <button
              type="submit"
              suppressHydrationWarning
              disabled={status === "sending"}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "10px",
                background: status === "sent" ? "var(--accent)" : "var(--primary)",
                color: "#fff",
                border: "none",
                fontWeight: 600,
                fontSize: "0.9375rem",
                cursor: status === "sending" ? "wait" : "pointer",
                fontFamily: "inherit",
              }}
            >
              {status === "sent" ? "Message Sent!" : status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "error" && (
              <p style={{ fontSize: "0.8125rem", color: "#EF4444", lineHeight: 1.6 }}>
                Message could not be sent. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
