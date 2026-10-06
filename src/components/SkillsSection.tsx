import { Bot, Server, Shield, Wrench, Sparkles, Radio } from 'lucide-react';

const skillCategories = [
  {
    icon: Bot,
    title: 'Agentic AI & LLMs',
    color: 'from-primary to-neon-pink',
    skills: [
      'Multi-Agent Systems',
      'LLM Orchestration',
      'Human-in-the-Loop',
      'Stateful Agent Memory',
      'Cerebras Fast Inference',
      'OpenAI APIs',
      'spaCy',
      'Sentence-Transformers',
      'MCP (Model Context Protocol)',
      'Langfuse Observability',
      'scikit-learn',
    ],
  },
  {
    icon: Server,
    title: 'Backend & Graph Memory',
    color: 'from-neon-cyan to-primary',
    skills: [
      'FastAPI',
      'Python',
      'REST APIs',
      'FalkorDB (Graph Memory)',
      'Qdrant (Vector DB)',
      'Redis',
      'MongoDB',
      'MySQL',
      'SQL',
    ],
  },
  {
    icon: Radio,
    title: 'Realtime & Frontend',
    color: 'from-neon-pink to-neon-purple',
    skills: [
      'LiveKit (WebRTC)',
      'WebSockets',
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML / CSS',
    ],
  },
  {
    icon: Shield,
    title: 'Security & Testing',
    color: 'from-primary to-neon-cyan',
    skills: [
      'OWASP ZAP',
      'Semgrep',
      'Trivy',
      'Nuclei',
      'API Security Testing',
      'Vulnerability Assessment',
      'Secure Coding Practices',
    ],
  },
  {
    icon: Wrench,
    title: 'DevOps & Observability',
    color: 'from-neon-cyan to-neon-pink',
    skills: [
      'Docker',
      'Prometheus',
      'Grafana',
      'Git & GitHub',
      'Postman',
      'VS Code',
      'CI/CD Workflows',
    ],
  },
  {
    icon: Sparkles,
    title: 'Core & Professional Skills',
    color: 'from-neon-pink to-primary',
    skills: [
      'Requirement Analysis',
      'Technical Documentation',
      'Research & Evaluation',
      'Problem Solving',
      'Fast Prototyping',
      'High Ownership',
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title">Technical Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="glass-card p-5 sm:p-6 space-y-4 sm:space-y-5 opacity-0 animate-fade-in-up hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-orbitron text-base sm:text-lg font-semibold text-gradient">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs sm:text-sm rounded-lg bg-secondary/80 text-foreground/90 border border-border/80 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
