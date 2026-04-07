import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      degree: "B.A (Final Year)",
      institution: "Rajasthan University",
      year: "2025",
      icon: <GraduationCap size={24} className="text-primary" />,
      status: "Ongoing"
    },
    {
      degree: "12th Standard",
      institution: "RBSE",
      year: "2022",
      icon: <BookOpen size={24} className="text-accent" />
    },
    {
      degree: "10th Standard",
      institution: "RBSE",
      year: "Completed",
      score: "86.3%",
      icon: <Award size={24} className="text-purple-500" />
    }
  ];

  return (
    <section id="education" className="py-24 relative bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Education Journey</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full glow-primary" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
              
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
              <p className="text-text-light font-medium mb-4">{item.institution}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                <span className="text-sm text-text-light/70">{item.year}</span>
                {item.score && (
                  <span className="px-3 py-1 rounded-full bg-white/5 text-sm font-medium text-white border border-white/10">
                    {item.score}
                  </span>
                )}
                {item.status && (
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-sm font-medium text-primary border border-primary/30">
                    {item.status}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
