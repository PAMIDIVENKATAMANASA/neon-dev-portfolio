import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Rajiv Gandhi University of Knowledge and Technology',
    duration: '2023 – Present',
    score: '92%',
  },
  {
    degree: 'Pre-University Course (MPC)',
    institution: 'Rajiv Gandhi University of Knowledge and Technology',
    duration: '2021 – 2023',
    score: 'CGPA: 9.9',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Gautham High School',
    duration: '2020 – 2021',
    score: 'CGPA: 10',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title">Education</h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="timeline-line ml-6" />

          {/* Education items */}
          <div className="space-y-8 sm:space-y-12 ml-6">
            {education.map((edu, index) => (
              <div 
                key={edu.degree}
                className="relative pl-10 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="timeline-dot top-1" />

                {/* Content card */}
                <div className="glass-card p-4 sm:p-6 space-y-3">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-orbitron text-sm sm:text-lg font-semibold text-gradient">
                        {edu.degree}
                      </h3>
                      <p className="text-primary text-sm font-medium mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{edu.duration}</span>
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
