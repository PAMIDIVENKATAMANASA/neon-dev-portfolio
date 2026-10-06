import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Developer & Security Testing Intern',
    organization: 'Hitloop',
    location: 'Hyderabad',
    duration: 'May 2026 – Present',
    tags: ['FastAPI', 'Python', 'React', 'OWASP ZAP', 'Semgrep', 'Trivy', 'Nuclei', 'Docker'],
    points: [
      'Developing and maintaining full stack and backend features for AI-driven healthcare applications, following secure coding practices.',
      'Performing vulnerability assessments and security testing of web applications to identify and report security risks.',
      'Using OWASP ZAP, Semgrep, Trivy, and Nuclei to detect vulnerabilities in application code, dependencies, and infrastructure.',
      'Collaborating with the development team to remediate identified security issues and improve overall application quality.',
    ],
  },
  {
    role: 'Web Development Intern',
    organization: 'Eldopas LLC',
    location: 'Remote',
    duration: 'May – Jul 2025',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'SEO', 'Security Best Practices'],
    points: [
      'Designed and developed mobile-friendly, responsive web layouts using HTML, CSS, and JavaScript.',
      'Improved website performance, SEO, and basic security practices, resulting in a faster and more secure site.',
      'Participated in daily code reviews and team stand-ups while collaborating with an agile remote team.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title">Work Experience</h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.role + exp.organization}
              className="glass-card p-5 sm:p-7 space-y-4 sm:space-y-5 opacity-0 animate-fade-in-up hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="space-y-3">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-base sm:text-lg font-semibold text-gradient">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-primary text-sm font-medium mt-0.5">
                      <span>{exp.organization}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground flex items-center gap-1 text-xs">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-neon-cyan font-medium">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.duration}</span>
                </div>

                <ul className="space-y-2.5 pt-1">
                  {exp.points.map((point, pointIndex) => (
                    <li 
                      key={pointIndex}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-md bg-secondary/80 text-foreground/80 border border-border text-[11px]"
                  >
                    {tag}
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

export default ExperienceSection;
