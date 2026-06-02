"use client";
import { useState } from "react";
import FadeInSection from "./FadeInSection";
import SectionHeader from "./SectionHeader";

const certificates = [
  {
    title: "Introduction to Cip",
    issuer: "ICIP - Introduction to Critical Infrastructure Protection",
    summary:
      "Certified in Critical Infrastructure Protection (ICIP) by OPSWAT Academy. Trained in safeguarding vital industries (energy, water, transport) and securing Operational Technology (OT/ICS) networks against advanced cyber threats.",
    tag: "Cybersecurity",
    image: "/images/introduction to cip.png",
    link: "https://drive.google.com/file/d/1oi2WIds1THy5JNzK2llrT_dRbJeg4Usg/view?usp=sharing", // User will replace with GDrive link
  },
  {
    title: "Introduction to IoT",
    issuer: "DICT",
    summary:
      "Completed the Introduction to IoT and Digital Transformation course by DICT and Cisco Networking Academy. Gained foundational knowledge on how the Internet of Things IoT connects data, processes, and people, and how these technologies drive modern digital transformation in business and society.",
    tag: "IoT",
    image: "/images/Introduction to IoT certificate.jpg",
    link: "https://drive.google.com/file/d/1F3McvyM_OemhofB0HN5Apre34P42BpLe/view?usp=sharing", // User will replace with GDrive link
  },
  {
    title: "Networking Devices and Initial Configuration",
    issuer: "GCisco Networking Academy",
    summary:
      "Completed the Networking Devices and Initial Configuration course through the Cisco Networking Academy program. Gained foundational hands-on skills in identifying vital network hardware components and performing initial basic configurations on devices like routers and switches.",
    tag: "Networking",
    image: "/images/Networking Devices and Initial Configuration.jpg",
    link: "https://drive.google.com/file/d/1qujtYd7V2Ir-3QeQ1vmK1pdhTTQas3Wx/view?usp=sharing", // User will replace with GDrive link
  },
  {
    title: "Networking Devices and Basic ConfigUpdate",
    issuer: "OCisco Networking Academy",
    summary:
      "Earned a student-level credential for completing the Networking Devices and Basic Configuration course from Cisco Networking Academy. Demonstrated proficiency in hierarchical network design, IPv4 subnetting, and configuring Cisco devices using Cisco IOS. Skilled in network protocols including Ethernet, ARP, DNS, DHCP, and transport layer operations to build and support end-to-end computer networks.",
    tag: "Networking",
    image: "/images/NetworkingDevicesandBasicConfigUpdate.jpg",
    link: "https://drive.google.com/file/d/1nJEEyO99qQ98XB6SvV0276GXBH9azIx3/view?usp=sharing",
  },
  {
    title: "DMSFi Connect application and the DMSFi Connect Admin Portal",
    issuer: "Davao Medical School Fundation Inc.",
    summary:
      "for the successful development and implementation of the DMSFi Connect application and the DMSFi Connect Admin Portal. These integrated campus communication platforms have successfully bridged students, school offices, and administrators at the Davao Medical School Foundation, Inc. (DMSFI)",
    tag: "System Development",
    image: "/images/SystemDeveloping.png",
    link: "https://drive.google.com/file/d/1aberq-hGzSoqnXhvPwnZCA8vouNNNsxj/view?usp=sharing",
  },  
  {
    title: "DMSFi Connect application and the DMSFi Connect Admin Portal",
    issuer: "Davao Medical School Fundation Inc.",
    summary:
      "Recognition of your dedication, technical expertise, and commitment during the successful development and implementation of the DMSF LRC Student Desktop Access and Monitoring System.",
    tag: "System Development",
    image: "/images/DMSF Lrc Certificate.png",
    link: "https://drive.google.com/file/d/10pmeyiG_GVap0jsjbdIOOh0WcrlAkTCx/view?usp=sharing",
  },  
];

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section
      id="certificates"
      style={{
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeInSection>
          <SectionHeader tag="certificates" title="Certificates" />
        </FadeInSection>

        <div 
          style={{ 
            marginTop: "3rem",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Main Carousel Container */}
          <div 
            style={{
              width: "100%",
              maxWidth: "600px",
              position: "relative",
              overflow: "hidden",
              borderRadius: "20px",
              boxShadow: "var(--shadow-lg)",
              background: "var(--bg)",
              border: "1px solid var(--border)",
            }}
          >
            <div 
              style={{
                display: "flex",
                transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {certificates.map((certificate, index) => (
                <article
                  key={`${certificate.title}-${index}`}
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Clickable Image */}
                  <a 
                    href={certificate.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: "block",
                      width: "100%",
                      aspectRatio: "1.414/1",
                      background: "var(--bg-card)",
                      overflow: "hidden",
                      borderBottom: "1px solid var(--border)",
                      position: "relative",
                    }}
                  >
                    <img 
                      src={certificate.image} 
                      alt={`${certificate.title} certificate`}
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 1rem; color: var(--text-muted);">
                            <span style="font-size: 4rem;">📜</span>
                            <span style="font-size: 1rem; font-weight: 500;">Click to view certificate</span>
                          </div>
                        `;
                      }}
                    />
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.3)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                    >
                      <div style={{
                        background: "rgba(255,255,255,0.2)",
                        backdropFilter: "blur(4px)",
                        padding: "0.75rem 1.25rem",
                        borderRadius: "99px",
                        color: "#fff",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        border: "1px solid rgba(255,255,255,0.3)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem"
                      }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        View Full Screen
                      </div>
                    </div>
                  </a>

                  {/* Info Section */}
                  <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ 
                        color: "var(--primary)", 
                        fontSize: "0.8rem", 
                        fontWeight: 700, 
                        textTransform: "uppercase",
                        letterSpacing: "0.1em"
                      }}>
                        {certificate.tag}
                      </span>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                        {certificate.issuer}
                      </span>
                    </div>
                    <h3 style={{ color: "var(--text-primary)", fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.3 }}>
                      {certificate.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7 }}>
                      {certificate.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            suppressHydrationWarning
            style={{
              position: "absolute",
              left: "-1rem",
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
              transition: "all 0.2s ease",
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
            aria-label="Previous certificate"
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
              right: "-1rem",
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
              transition: "all 0.2s ease",
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
            aria-label="Next certificate"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>

          {/* Dots Indicator */}
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem" }}>
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                suppressHydrationWarning
                style={{
                  width: currentIndex === index ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: currentIndex === index ? "var(--primary)" : "var(--border)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
