import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Web Development Internship',
    issuer: 'Eldopas LLC',
    year: '2025',
  },
  {
    title: 'TCS iON Career Edge',
    issuer: 'Young Professional',
    year: '',
  },
  {
    title: 'Web Development Bootcamp',
    issuer: 'Udemy',
    year: '',
  },
  {
    title: 'Hackathon Participant',
    issuer: 'Aadhya, R.K. Valley',
    year: '',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title">Certifications</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className="glass-card p-4 sm:p-6 text-center space-y-3 sm:space-y-4 group hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto group-hover:bg-primary/30 transition-colors">
                <Award className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
              </div>

              <div>
                <h3 className="font-orbitron text-xs sm:text-base font-semibold text-gradient">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {cert.issuer}
                  {cert.year && ` (${cert.year})`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
