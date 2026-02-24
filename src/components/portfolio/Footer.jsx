import React from 'react';
import { Sparkles, ArrowUp, Mail, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <p className="text-sm text-slate-400">{personalInfo.name}</p>
              <p className="text-xs text-slate-600">
                {personalInfo.motto}
              </p>
            </div>
          </div>

          {/* Center - Links */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-slate-500 hover:text-indigo-400 hover:border-indigo-500/20 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-slate-500 hover:text-white hover:border-white/20 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-slate-500 hover:text-indigo-400 hover:border-indigo-500/20 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-600">
              © {currentYear} Yuvraj Singh Palh
            </p>
            <a
              href="#"
              className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-slate-500 hover:text-indigo-400 hover:border-indigo-500/20 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
