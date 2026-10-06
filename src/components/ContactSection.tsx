import { useState } from 'react';
import { Send, Linkedin, Github, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_fdup23f',
        'template_j18u5dm',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Pamidi Venkata Manasa',
        },
        'G_kVIdjxmhnpeIrTj'
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto items-start">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6 space-y-6">
              <h3 className="font-orbitron text-xl font-bold text-gradient">
                Let's Connect
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Open to discussions around AI Agent development, LLM architectures, full-stack projects, and security assessments. Feel free to reach out directly!
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="mailto:pamidivenkatamanasa@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0 group-hover:border-primary">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div className="truncate">
                    <span className="text-xs text-muted-foreground block">Email</span>
                    <span className="text-foreground text-xs sm:text-sm font-medium">pamidivenkatamanasa@gmail.com</span>
                  </div>
                </a>

                <a
                  href="tel:6302540412"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0 group-hover:border-primary">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Phone</span>
                    <span className="text-foreground text-sm font-medium">+91 6302540412</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Location</span>
                    <span className="text-foreground text-sm font-medium">Andhra Pradesh, India</span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-border/60">
                <span className="text-xs text-muted-foreground block mb-3 font-semibold uppercase tracking-wider">Social Channels</span>
                <div className="flex gap-3">
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
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-neon-cyan" />
                <h3 className="font-orbitron text-lg font-semibold text-foreground">
                  Send a Message
                </h3>
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-glow"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-glow"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="input-glow resize-none"
                  placeholder="Tell me about your project, idea, or role..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="neon-button w-full flex items-center justify-center gap-2 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{isLoading ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
