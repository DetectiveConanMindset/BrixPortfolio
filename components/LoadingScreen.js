"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setActive(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  if (!active) return null;

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        background: "var(--bg)",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div style={{ display: "grid", gap: "1rem", justifyItems: "center" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "3px solid var(--border)",
            borderTopColor: "var(--primary)",
            animation: "spin 0.8s linear infinite",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "1.5rem",
            color: "var(--text-primary)",
          }}
        >
          BrixDev<span style={{ color: "var(--primary)" }}>.</span>
        </span>
      </div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
