import { motion } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';

const experienceData = [
  {
    title: "Software Engineering Intern",
    company: "Company Name", // User can replace this later
    date: "June 2025 - Present",
    description: "Developing scalable backend systems using Spring Boot and Java. Collaborating with the frontend team to integrate RESTful APIs.",
    type: "work"
  },
  {
    title: "Hackathon Winner",
    company: "Chitkara University Tech Fest",
    date: "Oct 2024",
    description: "Built an AI-powered mock interview platform (TalentIQ) and won first place among 50+ participating teams.",
    type: "achievement"
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    date: "Jan 2024 - May 2024",
    description: "Designed and developed responsive websites for local businesses using React and Tailwind CSS.",
    type: "work"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience & Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-[19px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent"></div>

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full glass border-2 border-primary bg-darker flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  {item.type === 'work' ? <Briefcase size={16} className="text-primary" /> : <Award size={16} className="text-accent" />}
                </div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}
                >
                  <div className="glass-card p-6 border border-white/10 hover:border-primary/30 transition-colors relative group">
                    {/* Glowing Accent */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-l-xl"></div>
                    
                    <span className="text-sm font-semibold text-primary-light mb-2 block">{item.date}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <h4 className="text-md text-white/70 font-medium mb-4">{item.company}</h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
