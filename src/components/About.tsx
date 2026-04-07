import { motion } from 'motion/react';
import { Target, Clock, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Target className="text-primary" size={24} />,
      title: "Quick Learner",
      description: "Adaptable and eager to master new tools and processes efficiently."
    },
    {
      icon: <Clock className="text-accent" size={24} />,
      title: "Time Management",
      description: "Organized approach to handling tasks and meeting deadlines."
    },
    {
      icon: <Users className="text-purple-500" size={24} />,
      title: "Customer Handling",
      description: "Effective communication and problem-solving for client satisfaction."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full glow-primary" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-500" />
            <h3 className="text-2xl font-heading font-semibold text-white mb-6">Career Objective</h3>
            <p className="text-lg text-text-light leading-relaxed mb-6">
              "I aim to contribute to an organization with my best abilities while continuously learning and developing new skills."
            </p>
            <p className="text-text-light leading-relaxed">
              As a fresh graduate, I bring a strong foundation in computer knowledge coupled with a passion for delivering excellent customer service. I am highly motivated, adaptable, and ready to take on new challenges in a dynamic work environment.
            </p>
          </motion.div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-text-light">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
