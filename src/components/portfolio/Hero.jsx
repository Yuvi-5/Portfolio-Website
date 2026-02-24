import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, FileText, Linkedin, Github, ExternalLink } from 'lucide-react';
import { personalInfo, stats } from '../../data/mock';

const TypeWriter = ({ text, speed = 50, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span>
      {displayText}
      <span className="cursor-blink text-indigo-400">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(129, 140, 248, 0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-amber-500/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-indigo-500/[0.08] border border-indigo-500/15">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-slate-400">
                <TypeWriter text="Available for research & collaboration" speed={30} delay={500} />
              </span>
            </div>
          </motion.div>

          {/* Name - fully colorful */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-5"
          >
            <span className="text-indigo-400">Yuvraj</span>{' '}
            <span className="text-slate-200">Singh</span>{' '}
            <span className="shimmer-text">Palh</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 mb-8 font-medium"
          >
            {personalInfo.title}
          </motion.p>

          {/* Description - improved language */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-base md:text-lg text-slate-500 max-w-2xl mb-4 leading-relaxed"
          >
            {personalInfo.heroDescription}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center gap-3 mb-20"
          >
            <div className="flex items-center gap-2 text-slate-500 text-sm mr-2">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500/15 border border-indigo-500/25 text-indigo-400 rounded-lg hover:bg-indigo-500/25 transition-all duration-300 text-sm font-medium"
            >
              <FileText className="w-4 h-4" />
              View Projects
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] border border-white/10 text-slate-300 rounded-lg hover:bg-white/[0.08] hover:text-white transition-all duration-300 text-sm font-medium group"
            >
              <Github className="w-4 h-4" />
              GitHub
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] border border-white/10 text-slate-300 rounded-lg hover:bg-white/[0.08] hover:text-white transition-all duration-300 text-sm font-medium group"
            >
              <Linkedin className="w-4 h-4" />
              Connect
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {stats.map((stat, i) => {
              const colors = [
                'hover:border-indigo-500/25',
                'hover:border-amber-500/25',
                'hover:border-emerald-500/25',
                'hover:border-rose-500/25',
              ];
              const valueColors = ['text-indigo-400', 'text-amber-400', 'text-emerald-400', 'text-rose-400'];
              return (
                <div
                  key={i}
                  className={`group p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] ${colors[i]} transition-all duration-300`}
                >
                  <p className={`text-2xl md:text-3xl font-bold ${valueColors[i]}`}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-400 mt-1.5">{stat.label}</p>
                  <p className="text-xs text-slate-600 mt-0.5">{stat.description}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-slate-600 hover:text-indigo-400 transition-colors">
          <span className="text-xs">scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
