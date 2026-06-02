"use client";
import SectionHeader from "./SectionHeader";
import FadeInSection from "./FadeInSection";

const education = [
  {
    school: "Holy Cross of Davao College",
    degree: "Bachelor of Science in Information Technology",
    duration: "2021 - Present",
    location: "Davao City, Philippines",
    description: "Focusing on software engineering, database management, and network administration. Actively participating in capstone projects and technical workshops."
  },
  {
    school: "Mambago-B National High School SHS", // Pwede ra nimo ilisan ang ngalan sa school kung lahi imong SHS pre
    degree: "Senior High School – Technical-Vocational-Livelihood (TVL) - Computer Systems Servicing (CSS)",
    duration: "2020 - 2021",
    location: "Island Garden City of Samal, Philippines",
    description: "Focused on computer networking, hardware troubleshooting, system configuration, and network administration."
  }
];  

const experience = [
  {
  "role": "CSCoach Developer (Capstone Project)",
  "project": "CSCoach Development",
  "duration": "2025",
  "description": "Leading the development of CSCoach, a voice-interactive reviewer chatbot for the Civil Service Exam using Conversational AI. Built the mobile application using React Native Expo, integrated Firebase for the database, and developed the admin question bank system."
    
  },
  {
  "role": "Full-Stack Developer (Intern)",
  "project": "DMSF LRC & Connect Systems",
  "duration": "2026",
  "description": "Developed the DMSF LRC Kiosk for library PC usage along with its dedicated admin control panel. Co-developed the DMSF Connect App, a student-to-office communication platform, and engineered its admin management system for broadcasting and receiving network messages."
  }
];

export default function Education() {
  return (
    <section id="education" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeInSection>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <SectionHeader tag="timeline" title="Education & Experience" />
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px", margin: "0.5rem auto 0" }}>
              My academic journey and key project milestones.
            </p>
          </div>
        </FadeInSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem" }}>
          {/* Education Side */}
          <div>
            <FadeInSection direction="left">
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                Education
              </h2>
            </FadeInSection>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", position: "relative", paddingLeft: "1.5rem" }}>
              {/* Timeline Line */}
              <div style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "2px", background: "linear-gradient(to bottom, var(--primary), transparent)", opacity: 0.3 }} />
              
              {education.map((edu, idx) => (
                <FadeInSection key={idx} delay={idx * 100} direction="up">
                  <div style={{ position: "relative" }}>
                    {/* Timeline Dot */}
                    <div style={{ position: "absolute", left: "-1.5rem", top: "0.5rem", width: "12px", height: "12px", borderRadius: "50%", background: "var(--primary)", border: "3px solid var(--bg-card)", transform: "translateX(-50%)", zIndex: 1 }} />
                    
                    <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.5rem", boxShadow: "var(--shadow)" }}>
                      <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>{edu.degree}</h3>
                      <p style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.9375rem", marginBottom: "0.75rem" }}>{edu.school}</p>
                      
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                          {edu.duration}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                          {edu.location}
                        </span>
                      </div>
                      
                      <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{edu.description}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>

          {/* Academic Experience Side */}
          <div>
            <FadeInSection direction="right">
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>
                Experience
              </h2>
            </FadeInSection>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", position: "relative", paddingLeft: "1.5rem" }}>
              {/* Timeline Line */}
              <div style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "2px", background: "linear-gradient(to bottom, var(--primary), transparent)", opacity: 0.3 }} />

              {experience.map((exp, idx) => (
                <FadeInSection key={idx} delay={idx * 100} direction="up">
                  <div style={{ position: "relative" }}>
                    {/* Timeline Dot */}
                    <div style={{ position: "absolute", left: "-1.5rem", top: "0.5rem", width: "12px", height: "12px", borderRadius: "50%", background: "var(--primary)", border: "3px solid var(--bg-card)", transform: "translateX(-50%)", zIndex: 1 }} />

                    <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.5rem", boxShadow: "var(--shadow)" }}>
                      <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>{exp.role}</h3>
                      <p style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.9375rem", marginBottom: "0.75rem" }}>{exp.project}</p>
                      
                      <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        {exp.duration}
                      </div>
                      
                      <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{exp.description}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
