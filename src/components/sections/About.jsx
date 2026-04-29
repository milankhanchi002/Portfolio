import { motion } from 'framer-motion';
import { Code, Database, BrainCircuit, Target, Briefcase, Zap, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 glass-card p-8 md:p-10 border border-white/10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium mb-6">
              <Terminal size={16} /> Software Engineer in Training
            </div>
            
            <h3 className="text-3xl font-bold mb-6 text-white">
              Building Scalable Backend Systems & Beautiful UIs
            </h3>
            
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                Hello! I am Milan Khanchi, a 3rd-year Computer Science and Engineering student at <strong className="text-white font-semibold">Chitkara University</strong>. 
                My journey into tech started with a profound curiosity for how large-scale applications function behind the scenes, and it has evolved into a dedicated pursuit of <strong className="text-white font-semibold">Full Stack Development</strong>.
              </p>
              
              <p>
                My true passion lies in <strong className="text-primary-light">Backend Engineering</strong>. I specialize in designing robust architectures using <strong className="text-white font-semibold">Java, Spring Boot</strong>, and the <strong className="text-white font-semibold">MERN Stack</strong>. I thrive on creating efficient RESTful APIs, optimizing complex database queries, and ensuring seamless data flow between the server and the client.
              </p>
              
              <div className="p-5 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border-l-4 border-accent relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h4 className="text-white font-semibold text-xl mb-2 flex items-center gap-2">
                  <BrainCircuit size={20} className="text-accent" /> DSA & Problem Solving
                </h4>
                <p className="text-base m-0">
                  I possess a strong Data Structures & Algorithms problem-solving mindset. I believe that writing code is only half the battle; writing <em>optimized, clean, and scalable</em> code is what distinguishes great engineering.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Goals, Strengths & Internship */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Internship Seeking Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 border border-white/10 bg-gradient-to-br from-darker to-darker shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden group hover:border-primary/40 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Briefcase size={80} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-3 flex items-center gap-2 relative z-10">
                Looking for Opportunities <Zap size={24} className="text-yellow-400 fill-yellow-400" />
              </h4>
              <p className="text-text-muted leading-relaxed relative z-10">
                I am actively seeking <strong className="text-white">Software Engineering Internship</strong> roles where I can apply my skills to real-world production environments, collaborate with experienced engineers, and contribute to impactful products.
              </p>
            </motion.div>

            {/* Career Goals */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6 border border-white/10"
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Target size={20} className="text-accent" /> Career Goals
              </h4>
              <ul className="space-y-3 text-text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  To become a leading Backend Architect specializing in microservices and distributed systems.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                  To master cloud infrastructure and scalable deployments.
                </li>
              </ul>
            </motion.div>

            {/* Strengths */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6 border border-white/10"
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Code size={20} className="text-primary-light" /> Personal Strengths
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Analytical Thinking", "Rapid Learner", "Adaptability", "Team Collaboration", "Attention to Detail"].map((strength, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-white/80">
                    {strength}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
