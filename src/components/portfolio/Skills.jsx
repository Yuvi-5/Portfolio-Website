import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/mock';
import { Brain, Code2, Shield } from 'lucide-react';

const categoryIcons = {
  'AI & Machine Learning': Brain,
  'Development & Cloud': Code2,
  'Cybersecurity & IoT': Shield,
};

const categoryAccent = {
  'AI & Machine Learning': { bar: 'from-indigo-500 to-indigo-400', bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'hover:border-indigo-500/20' },
  'Development & Cloud': { bar: 'from-emerald-500 to-emerald-400', bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'hover:border-emerald-500/20' },
  'Cybersecurity & IoT': { bar: 'from-amber-500 to-amber-400', bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'hover:border-amber-500/20' },
};

const Skills = () => {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs text-indigo-400 tracking-widest uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              04.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Expertise</h2>
            <div className="h-px flex-1 bg-white/[0.06] ml-4" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map(([category, skillList], catIdx) => {
            const Icon = categoryIcons[category] || Code2;
            const accent = categoryAccent[category] || categoryAccent['Development & Cloud'];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className={`p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] ${accent.border} transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-lg ${accent.bg}`}>
                    <Icon className={`w-5 h-5 ${accent.text}`} />
                  </div>
                  <h3 className="text-base font-semibold text-white">{category}</h3>
                </div>

                <div className="space-y-4">
                  {skillList.map((skill, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-slate-400">{skill.name}</span>
                        <span
                          className="text-xs text-slate-600"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.08, ease: 'easeOut' }}
                          className={`h-full bg-gradient-to-r ${accent.bar} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
