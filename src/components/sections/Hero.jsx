import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Mail, Code2, Download, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/SocialIcons';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-4 px-4 py-2 rounded-full glass border border-white/10 text-sm font-medium text-primary-light"
          >
            👋 Welcome to my portfolio
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Milan Khanchi</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-text-muted mb-6 font-medium">
            Full Stack Developer & Java Enthusiast
          </h2>
          <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            I build scalable web applications and robust backend systems. Passionate about problem-solving, 
            Data Structures & Algorithms, and crafting premium user experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12">
            <Link to="contact" smooth={true} duration={500}>
              <button className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 cursor-pointer">
                Contact Me <ArrowRight size={20} />
              </button>
            </Link>
            <a href="/resume.pdf" download>
              <button className="flex items-center gap-2 px-8 py-4 rounded-xl glass hover:bg-white/10 transition-colors font-semibold text-text border border-white/10 cursor-pointer">
                <Download size={20} /> Download Resume
              </button>
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6">
            <SocialLink href="https://www.linkedin.com/in/milankhanchi11" icon={<LinkedinIcon size={24} />} />
            <SocialLink href="https://github.com/milankhanchi002" icon={<GithubIcon size={24} />} />
            <SocialLink href="https://leetcode.com/u/milan-khanchi/" icon={<Code2 size={24} />} />
            <SocialLink href="mailto:milankhanchi@gmail.com" icon={<Mail size={24} />} />
          </div>
        </motion.div>

        {/* Image / Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl rotate-6 opacity-50 blur-lg animate-pulse"></div>
            <div className="absolute inset-0 glass-card rounded-3xl border border-white/20 overflow-hidden z-10 flex items-center justify-center bg-dark/50">
               {/* Replace with actual image later */}
               <img 
                 src="/developer_profile.png" 
                 alt="Milan Khanchi" 
                 className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500" 
               />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full glass hover:bg-white/10 hover:text-primary transition-all hover:scale-110 border border-white/10 text-text-muted"
  >
    {icon}
  </a>
);

export default Hero;
