import { Github, Bot, BrainCircuit, Shield, Radio, CheckCircle2, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise Multi-Agent Automation & HITL Reasoning Engine',
    featured: true,
    badge: 'Flagship AI Project',
    icon: Bot,
    category: 'Agentic AI & Healthcare',
    duration: 'Autonomous Multi-Agent System',
    description: 'Engineered autonomous multi-agent pipelines (Intake, Medical Coding, and Supervisor agents) executing complex multi-step reasoning over unstructured medical notes and structured healthcare records.',
    highlights: [
      'Autonomous multi-agent pipelines executing complex multi-step reasoning across clinical documents.',
      'Graph-backed memory persistence (FalkorDB) for stateful long-horizon multi-turn interactions, reducing context loss.',
      'Human-in-the-loop (HITL) review interfaces with automated discrepancy detection for enterprise oversight.',
      'Low-latency streaming agents combining LiveKit WebRTC & Cerebras fast-inference LLMs for real-time intake.',
    ],
    techStack: [
      'Multi-Agent Systems',
      'FastAPI',
      'FalkorDB (Graph Memory)',
      'LiveKit WebRTC',
      'Cerebras',
      'Human-in-the-Loop',
      'Langfuse',
      'spaCy',
      'Qdrant',
      'Docker',
    ],
    repoUrl: 'https://github.com/PAMIDIVENKATAMANASA',
  },
  {
    title: 'Real-Time Voice & Intake Agent (LiveKit + Cerebras)',
    featured: false,
    badge: 'Realtime Voice AI',
    icon: Radio,
    category: 'Realtime & WebRTC',
    duration: 'Low-Latency Streaming',
    description: 'Ultra-low latency conversational voice agent pipeline for automated intake workflows, streaming audio bi-directionally using LiveKit WebRTC and fast-inference LLM backends.',
    highlights: [
      'Sub-second voice turnarounds via WebSockets and LiveKit WebRTC.',
      'Fast token streaming with Cerebras inference & prompt cache.',
      'Stateful session handoff and structured note synthesis.',
    ],
    techStack: ['LiveKit', 'WebRTC', 'Cerebras', 'WebSockets', 'FastAPI', 'Python'],
    repoUrl: 'https://github.com/PAMIDIVENKATAMANASA',
  },
  {
    title: 'Automated Security & Vulnerability Assessment Suite',
    featured: false,
    badge: 'Security & CI/CD',
    icon: Shield,
    category: 'Application Security',
    duration: 'Automated Security Pipeline',
    description: 'Automated security analysis and vulnerability assessment suite for web apps and APIs, identifying risks in application code, dependencies, and container infrastructure.',
    highlights: [
      'Automated scanning integrating OWASP ZAP, Semgrep, Trivy, and Nuclei.',
      'Static code analysis, dynamic API testing, and container vulnerability scanning.',
      'Actionable remediation reporting and security policy enforcement.',
    ],
    techStack: ['OWASP ZAP', 'Semgrep', 'Trivy', 'Nuclei', 'Docker', 'API Testing', 'Python'],
    repoUrl: 'https://github.com/PAMIDIVENKATAMANASA',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title">Featured Projects</h2>

        <div className="space-y-8 max-w-6xl mx-auto">
          {/* Featured Large Card */}
          {projects.filter(p => p.featured).map((project) => (
            <div
              key={project.title}
              className="glass-card p-6 sm:p-8 lg:p-10 relative overflow-hidden border-primary/40 hover:border-primary transition-all duration-500 opacity-0 animate-fade-in-up"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/40">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30 uppercase tracking-wider">
                        {project.badge}
                      </span>
                      <span className="ml-2 text-xs text-muted-foreground">{project.category}</span>
                    </div>
                  </div>

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold neon-button text-white"
                  >
                    <Github className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">GitHub Code</span>
                    <ArrowUpRight className="w-4 h-4 relative z-10" />
                  </a>
                </div>

                <div className="space-y-2">
                  <h3 className="font-orbitron text-xl sm:text-2xl md:text-3xl font-bold text-gradient">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-4xl">
                    {project.description}
                  </p>
                </div>

                {/* Key Bullet Points from Resume */}
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {project.highlights.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 bg-secondary/40 p-3 rounded-lg border border-border/60">
                      <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Technologies Used:</span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Secondary Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div
                key={project.title}
                className="glass-card p-6 space-y-4 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 0.15}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                        <project.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">
                        {project.badge}
                      </span>
                    </div>

                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors p-1"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>

                  <div>
                    <h3 className="font-orbitron text-lg font-semibold text-gradient">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    {project.highlights.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-md bg-secondary text-foreground/80 border border-border text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
