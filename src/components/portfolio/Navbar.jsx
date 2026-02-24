import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Github } from 'lucide-react';
import { personalInfo } from '../../data/mock';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/25 transition-colors duration-300">
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </div>
            <span
              className="text-sm font-bold text-slate-200 tracking-wide"
            >
              Yuvraj<span className="text-indigo-400">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-200 rounded-md hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              title="GitHub"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 px-4 py-1.5 text-sm text-indigo-400 border border-indigo-500/30 rounded-lg hover:bg-indigo-500/10 transition-all duration-200"
            >
              LinkedIn
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/5">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm text-slate-400 hover:text-indigo-400 hover:bg-white/5 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-white rounded-md hover:bg-white/5"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
