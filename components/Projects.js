"use client";
import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import FadeInSection from "./FadeInSection";

const projects = [
  {
    title: "Cscoach App",
    description:
      "An interactive, voice-driven Civil Service Exam reviewer app designed for hands-free and accessible learning. It features an AI chatbot for personalized tutoring, audio-based question streaming, and an analytics dashboard tailored specifically to civil service grading metrics (e.g., weighted passing scores, sub-test mastery).",
    tech: ["React Native (Expo)", "Firebase (Auth, Firestore)", "Tailwind CSS"],
    accent: "#3B82F6",
    accentLight: "rgba(59,130,246,0.08)",
    codeLink: "https://github.com/DetectiveConanMindset/CsCoachApp",
    uiLink: "#",
    logo: "/images/Cscoach/7.png",
    gallery: [
      "/images/Cscoach/1.png",
      "/images/Cscoach/2.png",
      "/images/Cscoach/3.png",
      "/images/Cscoach/4.png",
      "/images/Cscoach/5.png",
      "/images/Cscoach/6.png",
    ],
  },
  {
    title: "Cscoach App Admin",
    description:
      "A web-based Admin Control Panel for the Civil Service Reviewer platform. It enables administrators to manage exam content in real-time, supports single and bulk CSV question uploading, and features a robust Question Bank Manager to categorize items by civil service topics, difficulty levels, and sources.",
    "tech": ["React", "Firebase (Auth & Firestore)", "Bootstrap", "PapaParse"],
    accent: "#22C55E",
    accentLight: "rgba(34,197,94,0.08)",
    codeLink: "https://github.com/DetectiveConanMindset/CsCoach-Admin",
    uiLink: "#",
    logo: "/images/CscoachAdmin/6.png",
    gallery: [
      "/images/CscoachAdmin/1.png",
      "/images/CscoachAdmin/2.png",
      "/images/CscoachAdmin/3.png",
      "/images/CscoachAdmin/4.png",
      "/images/CscoachAdmin/5.png",
    ],
  },
  {
    title: "DMSF LRC PC Kiosk Admin System",
    description:
      "A web-based PC kiosk monitoring and virtual library admin system for DMSF LRC that allows administrators to manage student users, monitor computer status, track online/offline PCs, send messages to active computers, view usage logs, and generate reports.",
    tech: ["PHP", "MySQL", "XAMPP", "JavaScript", "Chart.js"],
    accent: "#F59E0B",
    accentLight: "rgba(245,158,11,0.08)",
    codeLink: "https://github.com/DetectiveConanMindset/DMSF-LRC-Virtual-Library-Admin",
    uiLink: "#",
    logo: "/images/LrcAdmin/7.png",
    gallery: [
      "/images/LrcAdmin/1.png",
      "/images/LrcAdmin/2.png",
      "/images/LrcAdmin/3.png",
      "/images/LrcAdmin/4.png",
      "/images/LrcAdmin/5.png",
      "/images/LrcAdmin/6.png",
    ],
  },
{
    title: "DMSF LRC PC Kiosk Desktop",
    description:
      "A VB.NET desktop kiosk application for DMSF LRC that allows students to log in on assigned PCs, sends heartbeat signals to track active computer sessions, updates online/offline status in real time, receives admin messages from the web panel, records login/logout activity, and synchronizes usage data with the PHP and MySQL admin system.",
    tech: ["VB.NET", "MySQL", "PHP API", "XAMPP", "Windows Forms"],
    accent: "#F59E0B",
    accentLight: "rgba(245,158,11,0.08)",
    codeLink: "https://github.com/DetectiveConanMindset/DMSFi-Library-Kiosk",
    uiLink: "#",
    logo: "/images/DmsfLrcDesktop/4.png",
    gallery: [
      "/images/DmsfLrcDesktop/1.png",
      "/images/DmsfLrcDesktop/2.png",
      "/images/DmsfLrcDesktop/3.png",
    ],
  },

  {
    title: "DMSFI Connect Admin",
    description:
      "A centralized communication and administration platform for DMSFI that enables Super Admins, Office Admins, Faculty, and Students to manage announcements, channels, user accounts, push notifications, and real-time messaging. The system includes role-based access control, year-level targeting, channel management, mobile app integration, and notification broadcasting.",
    tech: ["PHP",
    "MySQL",
    "XAMPP",
    "JavaScript",
    "Bootstrap 5"],
    accent: "#8B5CF6",
    accentLight: "rgba(139,92,246,0.08)",
    codeLink: "#",
    uiLink: "#",
    logo: "/images/DmsfiConnectAdmin/9.png",
    gallery: [
      "/images/DmsfiConnectAdmin/1.png",
      "/images/DmsfiConnectAdmin/2.png",
      "/images/DmsfiConnectAdmin/3.png",
      "/images/DmsfiConnectAdmin/4.png",
      "/images/DmsfiConnectAdmin/5.png",
      "/images/DmsfiConnectAdmin/6.png",
      "/images/DmsfiConnectAdmin/7.png",
      "/images/DmsfiConnectAdmin/8.png"
    ],
  },
  {
    title: "DMSFI Connect App",
    description:
      "A mobile campus communication application for DMSFI that allows students to receive official announcements, view assigned channels, access year-level updates, and get real-time push notifications from Super Admins and Office Admins. The app connects with a PHP and MySQL backend to deliver channel-based messages and targeted school broadcasts.",
    tech: ["React Native", "Expo", "PHP", "MySQL", "Expo Notifications"],
    accent: "#EF4444",
    accentLight: "rgba(239,68,68,0.08)",
    codeLink: "https://github.com/DetectiveConanMindset/DMSFi-Connect",
    uiLink: "#",
    logo: "/images/DmsfiConnectApp/6.png",
    gallery: [
      "/images/DmsfiConnectApp/1.png",
      "/images/DmsfiConnectApp/2.png",
      "/images/DmsfiConnectApp/3.png",
      "/images/DmsfiConnectApp/4.png",
      "/images/DmsfiConnectApp/5.png"
    ],
  },
];

function ProjectCard({ project, onViewUI }) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "var(--shadow-lg)",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Project Preview Image */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1.414/1",
          background: project.accentLight,
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={onViewUI}
      >
        <img 
          src={project.logo} 
          alt={`${project.title} preview`}
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = '<span style="font-size: 4rem">🚀</span>';
          }}
        />
        {/* Accent strip on top of image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: project.accent,
            zIndex: 1,
          }}
        />
      </div>

      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          flexGrow: 1,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.tech.slice(0, 2).map((t) => (
              <span
                key={t}
                style={{
                  padding: "0.25rem 0.625rem",
                  borderRadius: "6px",
                  background: project.accentLight,
                  color: project.accent,
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "0.9375rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            flexGrow: 1,
          }}
        >
          {project.description}
        </p>

        {/* Links */}
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
          {project.uiLink && (
            <button
              onClick={onViewUI}
              suppressHydrationWarning
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#fff",
                textDecoration: "none",
                padding: "0.625rem 1.25rem",
                borderRadius: "10px",
                background: project.accent,
                border: `1px solid ${project.accent}`,
                transition: "all 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
              View UI
            </button>
          )}
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            suppressHydrationWarning
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              textDecoration: "none",
              padding: "0.625rem 1.25rem",
              borderRadius: "10px",
              background: "transparent",
              border: "1px solid var(--border)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--border)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectGallery({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setImgIndex((prev) => (prev + 1) % project.gallery.length);
      if (e.key === "ArrowLeft") setImgIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project.gallery.length, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999, // Higher z-index to stay above everything
        background: "rgba(0,0,0,0.98)",
        backdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "7rem 2rem 2rem 2rem", // Increased top padding to push it down
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <div 
        style={{ 
          position: "relative", 
          width: "100%", 
          maxWidth: "1000px", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center",
          gap: "1.5rem",
          margin: "auto 0",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="gallery-close"
          style={{
            position: "absolute",
            top: "-3rem",
            right: 0,
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            padding: "8px",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Main Image */}
        <div 
          className="gallery-image-container"
          style={{ 
            position: "relative", 
            width: "100%", 
            aspectRatio: "16/9", 
            background: "#111", 
            borderRadius: "16px", 
            overflow: "hidden", 
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" 
          }}
        >
          <img
            src={project.gallery[imgIndex]}
            alt={`${project.title} screenshot ${imgIndex + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
          
          {/* Navigation Arrows */}
          {project.gallery.length > 1 && (
            <>
              <button
                onClick={() => setImgIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)}
                className="gallery-nav-btn"
                style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", padding: "12px", borderRadius: "50%", cursor: "pointer", backdropFilter: "blur(4px)" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button
                onClick={() => setImgIndex((prev) => (prev + 1) % project.gallery.length)}
                className="gallery-nav-btn"
                style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", padding: "12px", borderRadius: "50%", cursor: "pointer", backdropFilter: "blur(4px)" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </>
          )}
        </div>

        {/* Info & Thumbnails */}
        <div style={{ textAlign: "center", color: "#fff" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>{project.title}</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9375rem", marginBottom: "1.5rem" }}>
            Viewing Image {imgIndex + 1} of {project.gallery.length}
          </p>
          
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
            {project.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setImgIndex(idx)}
                style={{
                  width: "60px",
                  height: "40px",
                  borderRadius: "6px",
                  overflow: "hidden",
                  border: `2px solid ${idx === imgIndex ? "var(--primary)" : "transparent"}`,
                  padding: 0,
                  cursor: "pointer",
                  opacity: idx === imgIndex ? 1 : 0.5,
                  transition: "0.2s",
                }}
              >
                <img src={img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" style={{ maxWidth: "1100px", margin: "0 auto" }}>
      <SectionHeader tag="projects" title="Things I've Built" />
      
      {/* Gallery Modal */}
      {selectedProject && (
        <ProjectGallery 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
      
      <div 
        style={{ 
          marginTop: "3.5rem",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Carousel Container */}
        <div 
          style={{
            width: "100%",
            maxWidth: "600px",
            position: "relative",
            overflow: "hidden",
            borderRadius: "24px",
          }}
        >
          <div 
            style={{
              display: "flex",
              transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {projects.map((project, idx) => (
              <div key={idx} style={{ width: "100%", flexShrink: 0 }}>
                <ProjectCard 
                  project={project} 
                  onViewUI={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <button 
          onClick={prevSlide}
          suppressHydrationWarning
          style={{
            position: "absolute",
            left: "-1.25rem",
            top: "40%",
            transform: "translateY(-50%)",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "var(--bg)",
            border: "1px solid var(--border)",
            color: "var(--text-primary)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            boxShadow: "var(--shadow-md)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--primary)";
            e.currentTarget.style.color = "var(--primary)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.color = "var(--text-primary)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          }}
          aria-label="Previous project"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <button 
          onClick={nextSlide}
          suppressHydrationWarning
          style={{
            position: "absolute",
            right: "-1.25rem",
            top: "40%",
            transform: "translateY(-50%)",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "var(--bg)",
            border: "1px solid var(--border)",
            color: "var(--text-primary)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            boxShadow: "var(--shadow-md)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--primary)";
            e.currentTarget.style.color = "var(--primary)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.color = "var(--text-primary)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          }}
          aria-label="Next project"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

        {/* Dots */}
        <div style={{ display: "flex", gap: "0.875rem", marginTop: "2.5rem" }}>
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              suppressHydrationWarning
              style={{
                width: currentIndex === idx ? "32px" : "10px",
                height: "10px",
                borderRadius: "5px",
                background: currentIndex === idx ? "var(--primary)" : "var(--border)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: 0,
              }}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .gallery-image-container {
            aspect-ratio: 4/3 !important;
          }
          .gallery-close {
            top: -3.5rem !important;
            right: -0.5rem !important;
          }
          .gallery-nav-btn {
            padding: 8px !important;
          }
          .gallery-nav-btn svg {
            width: 20px !important;
            height: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
