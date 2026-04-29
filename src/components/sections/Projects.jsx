import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '../icons/SocialIcons';

const projectsData = [
  {
    title: "TalentIQ",
    description: "AI-powered mock interview platform featuring role-based interview preparation, secure authentication, resume-based evaluation, and real-time feedback generation.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "AI APIs", "Tailwind CSS"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "Meeting Summarizer",
    description: "An automated system that transcribes and converts Google Meet/Zoom conversations into summarized PDF reports, automatically emailing them to all participants.",
    tech: ["Python", "Flask", "NLP", "Speech Recognition", "Email API", "React"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "The Reserve at Ochoco",
    description: "Modern real estate property platform with an elegant UI, premium property showcasing, advanced search filtering, and seamless user experience.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Node.js"],
    github: "#",
    live: "#",
    featured: false
  },
  {
    title: "Product Sales Analysis System",
    description: "A robust Java-based system designed to analyze sales trends, track product wastage, and generate monthly high/low sales insights for retail stores.",
    tech: ["Java", "Spring Boot", "MySQL", "Hibernate"],
    github: "#",
    live: "#",
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass-card overflow-hidden group border ${project.featured ? 'border-primary/30' : 'border-white/10'} hover:border-primary/50 transition-all duration-300`}
            >
              {/* Optional: Add image placeholders here if you want visuals */}
              <div className="h-48 bg-darker/50 border-b border-white/5 relative overflow-hidden flex items-center justify-center group-hover:bg-darker/40 transition-colors">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <FolderGit2 size={48} className="text-white/20 group-hover:text-primary/50 transition-colors group-hover:scale-110 duration-300" />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary-light transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-text-muted hover:text-white transition-colors" target="_blank" rel="noreferrer">
                      <GithubIcon size={20} />
                    </a>
                    <a href={project.live} className="text-text-muted hover:text-white transition-colors" target="_blank" rel="noreferrer">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-text-muted text-sm leading-relaxed mb-6 min-h-[80px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-primary-light bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
