import { Bot, CheckCircle2 } from 'lucide-react';

const project = {
  title: 'Enterprise Multi-Agent Automation & HITL Reasoning Engine',
  badge: 'Enterprise AI & Multi-Agent Architecture',
  icon: Bot,
  category: 'Healthcare & Reasoning Systems',
  description: 'Engineered autonomous multi-agent pipelines (Intake, Medical Coding, and Supervisor agents) executing complex multi-step reasoning over unstructured medical notes and structured healthcare records.',
  highlights: [
    'Engineered autonomous multi-agent pipelines (Intake, Medical Coding, and Supervisor agents) executing complex multi-step reasoning over unstructured medical notes and structured healthcare records.',
    'Implemented graph-backed memory persistence (FalkorDB) for stateful, long-horizon multi-turn interactions, reducing context loss and redundant LLM queries across sessions.',
    'Created human-in-the-loop review interfaces with automated discrepancy detection, enabling seamless human oversight for high-stakes enterprise decisions.',
    'Developed low-latency streaming agents combining LiveKit WebRTC and fast-inference LLMs (Cerebras) for real-time automated phone and intake workflows.',
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
    'Sentence-Transformers',
    'Qdrant',
    'Docker',
  ],
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title">Project</h2>

        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-6 sm:p-8 lg:p-10 relative overflow-hidden border-primary/40 hover:border-primary transition-all duration-500 opacity-0 animate-fade-in-up">
            {/* Ambient gradients */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/40 shrink-0">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30 uppercase tracking-wider">
                      {project.badge}
                    </span>
                    <span className="ml-2 text-xs text-muted-foreground">{project.category}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-orbitron text-xl sm:text-2xl md:text-3xl font-bold text-gradient">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bullet Points from Resume */}
              <div className="space-y-3 pt-2">
                {project.highlights.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90 bg-secondary/40 p-3.5 rounded-xl border border-border/60">
                    <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Technologies & Frameworks:</span>
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
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
