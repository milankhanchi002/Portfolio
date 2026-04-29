import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs"]
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Docker", "VS Code"]
  },
  {
    category: "Core Subjects",
    items: ["Data Structures & Algorithms", "Object Oriented Programming", "DBMS", "Operating Systems", "Computer Networks"]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Technical Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((skillGroup, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card p-8 border border-white/10 hover:border-primary/40 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white/90 border-b border-white/10 pb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 text-sm font-medium rounded-full bg-white/5 border border-white/10 text-text-muted hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
