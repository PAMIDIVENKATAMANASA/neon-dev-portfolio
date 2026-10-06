import { Download, Linkedin, Github, Mail, Phone, Bot, ArrowRight } from 'lucide-react';
import manasaImage from '@/assets/manasa-new.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 sm:pt-20 relative overflow-hidden bg-grid">
      {/* Ambient light effects */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-[80px] sm:blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-neon-pink/20 rounded-full blur-[80px] sm:blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1 space-y-4 sm:space-y-6 text-center lg:text-left opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wide">
              <Bot className="w-4 h-4 text-neon-cyan animate-pulse" />
              <span>AI Agent Builder & Full Stack Python Developer</span>
            </div>

            <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient neon-text">Pamidi Venkata Manasa</span>
            </h1>

            <h2 className="font-orbitron text-lg sm:text-xl md:text-2xl text-primary font-semibold neon-text-pink">
              Python Developer & AI Agent Builder
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0">
              Building multi-agent pipelines, LLM reasoning engines, graph-backed memory, and human-in-the-loop enterprise systems with robust full-stack & security foundations.
            </p>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {['Multi-Agent Systems', 'FalkorDB Graph Memory', 'FastAPI', 'LiveKit WebRTC', 'Security Testing'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-md bg-secondary text-foreground/80 border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="https://drive.google.com/file/d/10uci1XG7Pt6MAuvfV89kN99aAiH5Q2OI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button flex items-center gap-2 text-white font-semibold relative z-10"
              >
                <Download className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full border border-primary/40 hover:border-primary text-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 text-sm font-medium"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="https://linkedin.com/in/manasa-pamidi"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/PAMIDIVENKATAMANASA/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:pamidivenkatamanasa@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:6302540412"
                className="social-icon"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right content - Profile image with floating icons */}
          <div className="order-1 lg:order-2 flex justify-center relative opacity-0 animate-fade-in-up animation-delay-200">
            <div className="relative">
              {/* Profile image with neon ring */}
              <div className="profile-ring w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
                <img
                  src={manasaImage}
                  alt="Pamidi Venkata Manasa - Python Developer and AI Agent Builder"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating tech icons */}
              <div className="tech-icon -top-4 -right-4" style={{ animationDelay: '0s' }} title="Agentic AI">
                <span className="text-neon-cyan">🤖</span>
              </div>
              <div className="tech-icon -bottom-4 -left-4" style={{ animationDelay: '1s' }} title="Python & FastAPI">
                <span className="text-primary">🐍</span>
              </div>
              <div className="tech-icon top-1/2 -right-8" style={{ animationDelay: '2s' }} title="Security & Testing">
                <span className="text-neon-pink">🛡️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
