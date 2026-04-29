import { motion } from 'framer-motion';
import { BookOpen, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10 border border-white/10 hover:border-accent/40 transition-all relative overflow-hidden group"
          >
            {/* Background Decor */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center shrink-0 border border-white/10 bg-gradient-to-br from-white/5 to-white/10">
                <BookOpen size={40} className="text-accent" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  B.Tech in Computer Science and Engineering
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-text-muted mb-6">
                  <span className="flex items-center gap-2 font-medium text-primary-light">
                    <MapPin size={16} /> Chitkara University
                  </span>
                  <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20"></span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} /> 2023 - 2027
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-sm text-text-muted leading-relaxed">
                    Currently in my 3rd year, focusing on Full Stack Development, Data Structures, Algorithms, and Software Engineering principles. 
                    Actively participating in coding clubs and hackathons to hone practical skills.
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Data Structures", "Algorithms", "Database Management Systems", "Operating Systems", "Computer Networks", "Object-Oriented Programming"].map((course, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full glass border border-white/5 text-white/70">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
