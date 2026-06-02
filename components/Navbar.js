"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Timeline", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 1.5rem",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: scrolled ? "rgba(var(--bg-rgb), 0.8)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      {/* Scroll Progress Bar */}
      <div 
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          background: "var(--primary)",
          width: `${scrollProgress}%`,
          transition: "width 0.1s ease-out",
        }}
      />
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: "var(--font-dm-serif), serif",
          fontSize: "1.5rem",
          color: "var(--text-primary)",
          textDecoration: "none",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
        }}
      >
        BrixDev<span style={{ color: "var(--primary)", fontWeight: 700 }}>.</span>
      </a>

      {/* Desktop links */}
      <div className="desktop-nav" style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "1.5rem",
        background: scrolled ? "transparent" : "rgba(var(--bg-card-rgb), 0.5)",
        padding: scrolled ? "0" : "0.5rem 1rem",
        borderRadius: "99px",
        border: scrolled ? "none" : "1px solid var(--border)",
        transition: "all 0.3s ease",
      }}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontSize: "0.875rem",
              color: "var(--text-primary)",
              textDecoration: "none",
              fontWeight: 600,
              transition: "all 0.2s ease",
              padding: "0.5rem 0.75rem",
              borderRadius: "8px",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "var(--primary)";
              e.target.style.background = "var(--primary-light)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "var(--text-primary)";
              e.target.style.background = "transparent";
            }}
          >
            {link.label}
          </a>
        ))}
        <div style={{ width: "1px", height: "20px", background: "var(--border)", margin: "0 0.5rem" }} />
        <ThemeToggle />
      </div>

      {/* Mobile: theme + hamburger */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="mobile-nav">
        <ThemeToggle />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          suppressHydrationWarning
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            color: "var(--text-primary)",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span style={{ display: "block", width: "22px", height: "2px", background: "currentColor", borderRadius: "2px", transition: "0.2s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "currentColor", borderRadius: "2px", opacity: menuOpen ? 0 : 1, transition: "0.2s" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "currentColor", borderRadius: "2px", transition: "0.2s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(var(--bg-rgb), 0.95)",
            backdropFilter: "blur(12px)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            padding: "2rem",
          }}
        >
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "1.5rem",
                color: "var(--text-primary)",
                textDecoration: "none",
                fontWeight: 700,
                opacity: 0,
                animation: `fadeIn 0.5s ease forwards ${idx * 0.1}s`,
              }}
            >
              {link.label}
            </a>
          ))}
          
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-nav { display: none !important; }
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
