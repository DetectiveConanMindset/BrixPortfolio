"use client";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "React Native & Expo Developer",
  ".NET & C# Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);    
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const doneTyping = !deleting && typed === current;
    const doneDeleting = deleting && typed === "";
    const delay = doneTyping ? 1200 : doneDeleting ? 250 : deleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
        return;
      }
      if (doneDeleting) {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
        return;
      }
      setTyped(current.slice(0, typed.length + (deleting ? -1 : 1)));
    }, delay);

    return () => clearTimeout(timer);
  }, [deleting, roleIndex, typed]);

  const secondaryButtonStyle = {
    padding: "0.75rem 1.75rem",
    borderRadius: "var(--radius)",
    background: "var(--bg-card)",
    color: "var(--text-primary)",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "0.9375rem",
    border: "1px solid var(--border)",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    boxShadow: "var(--shadow-sm)",
  };

  const liftButton = (e) => {
    e.currentTarget.style.borderColor = "var(--primary)";
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "var(--shadow-md)";
  };

  const resetButton = (e) => {
    e.currentTarget.style.borderColor = "var(--border)";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "var(--shadow-sm)";
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", 
        padding: "6rem 1.5rem 2rem", 
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
          backgroundSize: "48px 48px",
          opacity: 0.4,
          pointerEvents: "none",
          transform: `translateY(${offset * 0.2}px)`,
        }}
      />

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div 
        className="hero-content"
        style={{ 
          position: "relative", 
          zIndex: 1,
          maxWidth: "1100px", 
          width: "100%",
          display: "flex",
          alignItems: "center", 
          justifyContent: "space-between", 
          gap: "4rem", 
          textAlign: "left",
          flex: "1", 
          transform: `translateY(${offset * -0.1}px)`,
          opacity: Math.max(0, 1 - offset / 700),
          transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
        }}
      >
        {/* LEFT COLUMN: TEXT AND BUTTONS */}
        <div style={{ flex: "1", maxWidth: "640px" }} className="hero-text">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
              padding: "0.5rem 1rem",
              borderRadius: "99px",
              background: "var(--accent-light)",
              border: "1px solid rgba(34,197,94,0.15)",
              marginBottom: "2rem",
              animation: "pulse-subtle 3s infinite ease-in-out",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--accent)",
                display: "inline-block",
                boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.4)",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--accent)",
                letterSpacing: "0.01em",
              }}
            >
              Available for new projects
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Hi, I&apos;m{" "}
            <span style={{ color: "var(--primary)", fontStyle: "italic", position: "relative" }}>
              Anthon Brix Timbal
              <svg 
                style={{ 
                  position: "absolute", 
                  bottom: "-8px", 
                  left: 0, 
                  width: "100%", 
                  height: "8px",
                  color: "var(--primary)",
                  opacity: 0.2
                }} 
                viewBox="0 0 100 10" 
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1.125rem, 2.2vw, 1.375rem)",
              color: "var(--text-secondary)",
              fontWeight: 400,
              marginBottom: "3rem",
              lineHeight: 1.6,
              maxWidth: "540px",
            }}
          >
            A <span style={{ color: "var(--primary)", fontWeight: 600 }}>
              {typed}
              <span style={{ animation: "blink 1s step-end infinite", fontWeight: 300 }}>|</span>
            </span>{" "}
            crafting elegant digital experiences with code and creativity.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#projects"
              suppressHydrationWarning
              style={{
                padding: "0.875rem 2rem",
                borderRadius: "var(--radius)",
                background: "var(--primary)",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                boxShadow: "0 4px 14px 0 rgba(37, 99, 235, 0.39)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(37, 99, 235, 0.23)";
                e.currentTarget.style.filter = "brightness(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 14px 0 rgba(37, 99, 235, 0.39)";
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              View My Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" suppressHydrationWarning style={secondaryButtonStyle} onMouseEnter={liftButton} onMouseLeave={resetButton}>
              Let&apos;s Talk
            </a>
            <a href="https://drive.google.com/file/d/11vF_LdcNtXJbza373kEkrxJ3UMxy30Hy/view?usp=sharing" target="_blank" rel="noopener noreferrer" suppressHydrationWarning style={secondaryButtonStyle} onMouseEnter={liftButton} onMouseLeave={resetButton}>
              Resume
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: IMAGE */}
        <div 
          className="hero-image-wrapper"
          style={{
            flexShrink: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "float 6s ease-in-out infinite",
          }}
        >
          <div
            style={{
              width: "clamp(300px, 40vw, 500px)", 
              height: "clamp(350px, 45vw, 600px)",
              borderRadius: "48px", 
              overflow: "hidden",
              border: "8px solid var(--bg-card)",
              boxShadow: "var(--shadow-lg)",
              background: "var(--bg-card)",
              position: "relative",
            }}
          >
            <div 
              style={{
                position: "absolute",
                inset: 0,
                border: "1px solid var(--border)",
                borderRadius: "32px",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            <img
              src="/images/profile1.JPG" 
              alt="Anthon Brix Timbal"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                background: "#c59d83", // Matching the background color of your photo
              }}
            />
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div
        style={{
          paddingTop: "4rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Explore
        </span>
        <div
          style={{
            width: "1px",
            height: "60px",
            background: "linear-gradient(to bottom, var(--primary), transparent)",
            borderRadius: "1px",
          }}
        />
      </div>

      <style>{` 
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @media (max-width: 968px) {
          .hero-content {
            flex-direction: column !important;
            text-align: center !important;
            gap: 3rem !important;
            justify-content: center !important;
            padding-top: 2rem !important;
          }
          .hero-text {
            max-width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .hero-text p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-text div {
            justify-content: center !important;
          }
          .hero-image-wrapper {
            order: -1 !important;
          }
        }

        @media (max-width: 480px) {
          #hero {
            padding: 5rem 1rem 2rem !important;
          }
          .hero-content {
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}