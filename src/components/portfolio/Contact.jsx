import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../../data/mock';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = `Hi Yuvraj,%0D%0A%0D%0AMy name is ${encodeURIComponent(form.name)} (${encodeURIComponent(form.email)}).%0D%0A%0D%0A${encodeURIComponent(form.message)}%0D%0A%0D%0ABest regards,%0D%0A${encodeURIComponent(form.name)}`;
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${body}`;

    window.open(mailtoLink, '_blank');
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/[0.03] rounded-full blur-[150px]" />

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
              06.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
            <div className="h-px flex-1 bg-white/[0.06] ml-4" />
          </div>
          <p className="text-slate-500 max-w-xl">
            Open to research collaborations, technical consulting, and innovative opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/20 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/15 transition-colors">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 mb-0.5">Email</p>
                  <p className="text-sm text-indigo-400 underline underline-offset-2 decoration-indigo-500/30 truncate">{personalInfo.email}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/20 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/15 transition-colors">
                  <Phone className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 mb-0.5">Phone</p>
                  <p className="text-sm text-slate-300">{personalInfo.phone}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="p-3 rounded-lg bg-indigo-500/10">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Location</p>
                  <p className="text-sm text-slate-300">{personalInfo.location}</p>
                </div>
              </div>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/20 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/15 transition-colors">
                  <Linkedin className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 mb-0.5">LinkedIn</p>
                  <p className="text-sm text-indigo-400 underline underline-offset-2 decoration-indigo-500/30">linkedin.com/in/yuvraj-palh</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/20 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/15 transition-colors">
                  <Github className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 mb-0.5">GitHub</p>
                  <p className="text-sm text-indigo-400 underline underline-offset-2 decoration-indigo-500/30">github.com/Yuvi-5</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form — opens email client */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:border-indigo-500/30 focus:bg-white/[0.05] transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:border-indigo-500/30 focus:bg-white/[0.05] transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:border-indigo-500/30 focus:bg-white/[0.05] transition-all duration-200"
                  placeholder="Research collaboration, opportunity..."
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:border-indigo-500/30 focus:bg-white/[0.05] transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-500/15 border border-indigo-500/25 text-indigo-400 text-sm font-medium hover:bg-indigo-500/25 transition-all duration-300"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Client Opened!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {sent && (
                <p className="text-center text-xs text-emerald-400 mt-3">
                  Your email client should have opened with the message. Just hit send!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
