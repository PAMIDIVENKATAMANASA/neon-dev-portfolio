import { Bot, Server, Shield, BrainCircuit, Sparkles } from 'lucide-react';
import manasaImage from '@/assets/manasa-new.jpg';

const skillHighlights = [
  {
    icon: Bot,
    title: 'Multi-Agent Systems & LLM Reasoning',
    desc: 'Autonomous pipelines, prompt orchestration & human-in-the-loop oversight',
  },
  {
    icon: BrainCircuit,
    title: 'Graph-Backed Memory & Realtime',
    desc: 'FalkorDB stateful persistence, WebSockets & LiveKit WebRTC streaming',
  },
  {
    icon: Server,
    title: 'Full Stack & High-Performance Backend',
    desc: 'FastAPI, React, TypeScript, Docker, Redis, MongoDB & MySQL',
  },
  {
    icon: Shield,
    title: 'Security Testing & Vulnerability Assessment',
    desc: 'OWASP ZAP, Semgrep, Trivy, Nuclei & secure API practices',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title">About Me</h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="profile-ring w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96">
              <img 
                src={manasaImage} 
                alt="Pamidi Venkata Manasa" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-orbitron text-xl sm:text-2xl md:text-3xl font-bold text-gradient-pink text-center lg:text-left">
                Pamidi Venkata Manasa
              </h3>
              <p className="text-primary font-medium text-center lg:text-left flex items-center gap-2 justify-center lg:justify-start">
                <Sparkles className="w-4 h-4 text-neon-cyan" />
                <span>Python Developer & AI Agent Builder | Full Stack Engineer</span>
              </p>
            </div>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I am a Python developer and AI Agent builder with hands-on experience in <span className="text-foreground font-medium">multi-agent pipelines</span>, 
              <span className="text-foreground font-medium"> LLM-based reasoning</span>, <span className="text-foreground font-medium">graph-backed memory</span>, and <span className="text-foreground font-medium">human-in-the-loop systems</span> for enterprise healthcare workflows.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Alongside AI systems, I have robust experience in full stack development (<span className="text-primary font-medium">FastAPI, React, TypeScript, Docker</span>) and rigorous security testing of web applications and APIs using <span className="text-primary font-medium">OWASP ZAP, Semgrep, Trivy, and Nuclei</span>. I thrive on solving ambiguous problems, fast prototyping, and building production-grade enterprise AI solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {skillHighlights.map((skill, index) => (
                <div 
                  key={skill.title}
                  className="glass-card p-3.5 space-y-1 transition-all duration-300 hover:border-primary/50 hover:translate-y--1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <skill.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-semibold text-sm text-foreground">{skill.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-10.5">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

