import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, MapPin, Calendar, Building2, ExternalLink } from 'lucide-react';
import { experiences } from '../../data/mock';

const Experience = () => {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const activeExp = experiences.find(e => e.id === activeId);

  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/[0.02] rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
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
              02.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
            <div className="h-px flex-1 bg-white/[0.06] ml-4" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left - Tabs: show role as primary, company as secondary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <div className="lg:max-h-[560px] lg:overflow-y-auto lg:pr-2 space-y-1" style={{ scrollbarWidth: 'thin', scrollbarColor: '#2d3548 transparent' }}>
              {experiences.map((exp, idx) => {
                const accentDots = [
                  'bg-indigo-400',
                  'bg-emerald-400',
                  'bg-sky-400',
                  'bg-amber-400',
                  'bg-rose-400',
                  'bg-violet-400',
                  'bg-teal-400',
                  'bg-pink-400',
                  'bg-orange-400',
                ];
                return (
                  <button
                    key={exp.id}
                    onClick={() => setActiveId(exp.id)}
                    className={`w-full text-left px-4 py-3.5 rounded-lg transition-all duration-200 group ${
                      activeId === exp.id
                        ? 'bg-indigo-500/10 border border-indigo-500/20'
                        : 'hover:bg-white/[0.03] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full transition-colors duration-200 shrink-0 ${
                          activeId === exp.id ? accentDots[idx % accentDots.length] : 'bg-slate-600 group-hover:bg-slate-400'
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        {/* Role as PRIMARY text */}
                        <p
                          className={`text-sm font-medium truncate transition-colors duration-200 ${
                            activeId === exp.id ? 'text-indigo-400' : 'text-slate-300 group-hover:text-white'
                          }`}
                        >
                          {exp.role}
                        </p>
                        {/* Company as SECONDARY text */}
                        <p className="text-xs text-slate-500 truncate">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="px-1.5 py-0.5 text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded shrink-0">
                          NOW
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <AnimatePresence mode="wait">
              {activeExp && (
                <motion.div
                  key={activeExp.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 md:p-8 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-1.5">{activeExp.role}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5" />
                        {activeExp.company}
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="text-indigo-400/80 text-xs bg-indigo-500/[0.07] px-2 py-0.5 rounded">{activeExp.type}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-2.5 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {activeExp.dates}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {activeExp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 mb-6 italic border-l-2 border-indigo-500/20 pl-3">{activeExp.description}</p>

                  <ul className="space-y-4 mb-6">
                    {activeExp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-300 leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {activeExp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs rounded-md bg-indigo-500/[0.07] text-indigo-400/80 border border-indigo-500/10"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
