import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pamidi Venkata Manasa | Python Developer & AI Agent Builder</title>
        <meta 
          name="description" 
          content="Pamidi Venkata Manasa - Python Developer and AI Agent Builder experienced in multi-agent pipelines, LLM reasoning, graph-backed memory, FastAPI, React, and security testing." 
        />
        <meta name="keywords" content="Pamidi Venkata Manasa, Python Developer, AI Agent Builder, Multi-Agent Systems, LLM Orchestration, FalkorDB, FastAPI, React, Security Testing" />
        <meta name="author" content="Pamidi Venkata Manasa" />
        <link rel="canonical" href="https://manasa-portfolio.com" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
