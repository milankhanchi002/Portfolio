import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ loading: false, error: null, success: true });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus({ loading: false, error: error.message, success: false });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-text-muted max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="glass-card p-6 flex items-start gap-4 border border-white/10 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                <a href="mailto:milankhanchi@gmail.com" className="text-text-muted hover:text-primary transition-colors text-sm break-all">
                  milankhanchi@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4 border border-white/10 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                <a href="tel:+91XXXXXXXXXX" className="text-text-muted hover:text-primary transition-colors text-sm">
                  +91 XXXXX XXXXX
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4 border border-white/10 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                <p className="text-text-muted text-sm">
                  Chandigarh, India
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3 glass-card p-8 md:p-10 border border-white/10 relative"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-darker/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-darker/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-white/80">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship Opportunity"
                  className="w-full bg-darker/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                <textarea 
                  id="message" 
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Milan, I would like to talk about..."
                  className="w-full bg-darker/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                ></textarea>
              </div>

              {status.error && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                  <AlertCircle size={18} />
                  <span className="text-sm">{status.error}</span>
                </div>
              )}

              {status.success && (
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg border border-green-400/20">
                  <CheckCircle size={18} />
                  <span className="text-sm">Message sent successfully! I will get back to you soon.</span>
                </div>
              )}

              <button 
                type="submit"
                disabled={status.loading}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? (
                  <>Sending... <Loader2 size={18} className="animate-spin" /></>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
