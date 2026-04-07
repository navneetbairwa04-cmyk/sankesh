import { motion } from 'motion/react';
import { Monitor, Wrench, MessageSquare, Clock, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function Skills() {
  const technicalSkills = [
    { name: "Basic Computer Knowledge", icon: <Monitor size={20} /> },
    { name: "ITI Certified", icon: <Wrench size={20} /> },
  ];

  const softSkills = [
    { name: "Customer Service", icon: <HeartHandshake size={20} /> },
    { name: "Communication", icon: <MessageSquare size={20} /> },
    { name: "Time Management", icon: <Clock size={20} /> },
  ];

  const certifications = [
    "ITI (NCBT Jodhpur)",
    "Customer Service Course",
    "Time Management Training"
  ];

  return (
    <section id="skills" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Skills & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full glow-primary" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-heading font-semibold text-white mb-6 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-primary/20 text-primary"><Monitor size={20} /></span>
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                    <span className="text-primary">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-heading font-semibold text-white mb-6 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-accent/20 text-accent"><HeartHandshake size={20} /></span>
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                    <span className="text-accent">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-heading font-semibold text-white mb-8 flex items-center gap-3">
              <span className="p-2 rounded-lg bg-purple-500/20 text-purple-500"><ShieldCheck size={20} /></span>
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-4 pb-6 border-b border-white/10 last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">{cert}</h4>
                    <p className="text-sm text-text-light mt-1">Completed successfully</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
