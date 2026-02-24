import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, Megaphone } from 'lucide-react';
import { publications, leadership } from '../../data/mock';

const Research = () => {
  return (
    <section id="research" className="py-32 relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-500/[0.02] rounded-full blur-[120px]" />

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
              05.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Research & Leadership</h2>
            <div className="h-px flex-1 bg-white/[0.06] ml-4" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-violet-500/10">
                <BookOpen className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Publications</h3>
            </div>

            {publications.map((pub, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/15 transition-all duration-300 mb-4"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Award className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-base font-medium text-white leading-snug">{pub.title}</h4>
                    <p className="text-sm text-violet-400/80 mt-1">{pub.venue}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed ml-8">{pub.description}</p>
                <div className="ml-8 mt-3">
                  <span className="px-2 py-0.5 text-[10px] rounded bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    {pub.status}
                  </span>
                </div>
              </div>
            ))}

            {/* Ongoing research */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-dashed border-white/[0.08]">
              <p className="text-sm text-slate-500 leading-relaxed">
                <span className="text-indigo-400 font-medium">Ongoing: </span>
                Expanding research into Directed Acyclic Graph (DAG) task models, cooperative
                multi-edge environments, and energy/CO₂ reduction using Transformers, PPO, and RNNs.
              </p>
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Leadership & Community</h3>
            </div>

            {leadership.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/15 transition-all duration-300 mb-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-base font-medium text-white">{item.role}</h4>
                    <p className="text-sm text-emerald-400/80">{item.organization}</p>
                  </div>
                  <span className="text-xs text-slate-500 whitespace-nowrap">{item.dates}</span>
                </div>
                <p className="text-sm text-slate-400 mb-3">{item.description}</p>
                <ul className="space-y-1.5">
                  {item.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Megaphone className="w-3.5 h-3.5 text-emerald-500/60 mt-0.5 shrink-0" />
                      <span className="text-xs text-slate-500">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Research;
