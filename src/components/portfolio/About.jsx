import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Briefcase, Cpu, FlaskConical } from 'lucide-react';
import { personalInfo, education } from '../../data/mock';

const About = () => {
  return (
    <section id="about" className="py-32 relative">
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
              01.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <div className="h-px flex-1 bg-white/[0.06] ml-4" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-14">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-slate-400 leading-relaxed text-base">
              {personalInfo.summary}
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              Proven architect of secure, production-grade software systems spanning AWS cloud
              infrastructure, real-time anomaly detection pipelines, and IoT sensor integration.
              Committed to delivering robust, margin-focused technology that ensures output is
              consistently <span className="text-indigo-400 font-medium">Correct</span>,{' '}
              <span className="text-amber-400 font-medium">Complete</span>, and{' '}
              <span className="text-emerald-400 font-medium">On-Time</span>.
            </p>

            {/* Quick highlights - now 6 items with RA and IoT */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: FlaskConical, label: 'Research Assistant', detail: 'Edge-Cloud Computing & DRL', accent: 'bg-sky-500/10', iconColor: 'text-sky-400' },
                { icon: Award, label: 'IEEE Published Author', detail: 'MVDA 2025 Workshop', accent: 'bg-violet-500/10', iconColor: 'text-violet-400' },
                { icon: Briefcase, label: 'Fintech Co-Founder', detail: 'Ordino — AWS Architecture', accent: 'bg-emerald-500/10', iconColor: 'text-emerald-400' },
                { icon: BookOpen, label: 'Mitacs Researcher', detail: 'Raventrack — AI Systems', accent: 'bg-indigo-500/10', iconColor: 'text-indigo-400' },
                { icon: Cpu, label: 'IoT & Raspberry Pi Specialist', detail: 'Edge AI & Local LLM Deployment', accent: 'bg-amber-500/10', iconColor: 'text-amber-400' },
                { icon: GraduationCap, label: 'Teaching Assistant', detail: "Cybersecurity, DSA, Graphics", accent: 'bg-rose-500/10', iconColor: 'text-rose-400' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-indigo-500/15 transition-all duration-300"
                >
                  <div className={`p-2 rounded-md ${item.accent}`}>
                    <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-300">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] gradient-border">
              <div className="flex items-center gap-3 mb-5">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-semibold text-white">Education</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-white font-medium text-sm">{education.degree}</p>
                  <p className="text-indigo-400 text-sm">{education.specialization}</p>
                  <p className="text-slate-500 text-sm">{education.minor}</p>
                </div>

                <div>
                  <p className="text-slate-300 text-sm">{education.institution}</p>
                  <p className="text-slate-500 text-xs">{education.location} · {education.dates}</p>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">GPA</span>
                    <span
                      className="text-lg font-bold text-indigo-400"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {education.gpa}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>

                <div className="pt-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Coursework</p>
                  <div className="flex flex-wrap gap-1.5">
                    {education.coursework.map((course, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs text-slate-400 bg-white/[0.03] border border-white/[0.06] rounded"
                      >
                        {course}
                      </span>
                    ))}
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

export default About;
