import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/SocialIcons';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-darker py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 inline-block"
            >
              Milan Khanchi
            </Link>
            <p className="text-text-muted text-sm">
              Full Stack Developer | Java Enthusiast
            </p>
          </div>

          <div className="flex gap-4">
            <SocialIcon href="https://www.linkedin.com/in/milankhanchi11" icon={<LinkedinIcon size={20} />} />
            <SocialIcon href="https://github.com/milankhanchi002" icon={<GithubIcon size={20} />} />
            <SocialIcon href="mailto:milankhanchi@gmail.com" icon={<Mail size={20} />} />
          </div>

        </div>

        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
          <p>© {currentYear} Milan Khanchi. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-primary/20 hover:text-primary transition-all hover:border-primary/50 text-text-muted border border-white/5"
  >
    {icon}
  </a>
);

export default Footer;
