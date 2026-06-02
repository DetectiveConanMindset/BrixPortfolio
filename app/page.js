import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import FadeInSection from "@/components/FadeInSection";
import SkewOnScroll from "@/components/SkewOnScroll";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <FadeInSection direction="down" delay={200}>
          <Hero />
        </FadeInSection>
        
        <SkewOnScroll>
          <FadeInSection direction="up">
            <About />
          </FadeInSection>
        </SkewOnScroll>

        <SkewOnScroll>
          <FadeInSection direction="right">
            <Skills />
          </FadeInSection>
        </SkewOnScroll>

        <SkewOnScroll>
          <FadeInSection direction="up">
            <Education />
          </FadeInSection>
        </SkewOnScroll>

        <SkewOnScroll>
          <FadeInSection direction="left">
            <Projects />
          </FadeInSection>
        </SkewOnScroll>

        <SkewOnScroll>
          <FadeInSection direction="scale">
            <Certifications />
          </FadeInSection>
        </SkewOnScroll>

        <SkewOnScroll>
          <FadeInSection direction="up">
            <Contact />
          </FadeInSection>
        </SkewOnScroll>
      </main>
      <Footer />
    </>
  );
}
