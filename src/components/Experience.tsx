import { motion } from 'motion/react';
import { Briefcase, ArrowRight } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-24 relative bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20" />
          <div className="absolute inset-0 bg-[#0B0B0B]/80 backdrop-blur-sm" />
          
          <div className="relative p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 border border-white/10 rounded-3xl">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white mb-6">
                <Briefcase size={16} className="text-primary" />
                <span className="text-sm font-medium tracking-wide uppercase">Experience Status</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                Ready to make an <span className="text-gradient">Impact</span>
              </h2>
              
              <p className="text-xl text-text-light leading-relaxed mb-8">
                "Currently seeking my first opportunity to apply my skills in a professional environment. I am eager to learn, adapt, and contribute to a team's success."
              </p>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
              >
                Let's Talk <ArrowRight size={18} />
              </a>
            </div>
            
            <div className="relative w-full md:w-auto flex justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center relative animate-[spin_20s_linear_infinite]">
                <div className="absolute inset-2 rounded-full border border-white/10" />
                <div className="absolute inset-4 rounded-full border border-white/5" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="block text-4xl font-bold text-white mb-1">0</span>
                <span className="text-sm text-text-light uppercase tracking-widest">Years</span>
                <span className="block text-primary font-medium mt-2">Fresher</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
