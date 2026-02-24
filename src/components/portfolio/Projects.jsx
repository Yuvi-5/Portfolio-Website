import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Layers, Zap, Github, Star, Loader2 } from 'lucide-react';
import { projects } from '../../data/mock';

const categoryColors = {
  research: { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/20' },
  ai: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/20' },
  fullstack: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
  iot: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' },
};

const statusColors = {
  Published: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  Active: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  Completed: 'text-slate-400 bg-white/[0.05] border-white/10',
};

const langColors = {
  Java: 'bg-[#b07219]',
  Python: 'bg-[#3572A5]',
  ShaderLab: 'bg-[#222c37]',
  PHP: 'bg-[#4F5D95]',
  HTML: 'bg-[#e34c26]',
  JavaScript: 'bg-[#f1e05a]',
  TypeScript: 'bg-[#3178c6]',
  CSS: 'bg-[#563d7c]',
  Shell: 'bg-[#89e051]',
  C: 'bg-[#555555]',
  'C++': 'bg-[#f34b7d]',
  Jupyter: 'bg-[#DA5B0B]',
  'Jupyter Notebook': 'bg-[#DA5B0B]',
};

const ProjectCard = ({ project, index }) => {
  const colors = categoryColors[project.category] || categoryColors.ai;
  const statusColor = statusColors[project.status] || statusColors.Active;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/15 transition-all duration-300 overflow-hidden flex flex-col">
        <div className="p-6 flex-1">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${colors.bg}`}>
                {project.category === 'research' ? (
                  <Layers className={`w-4 h-4 ${colors.text}`} />
                ) : project.category === 'iot' ? (
                  <Zap className={`w-4 h-4 ${colors.text}`} />
                ) : (
                  <Code2 className={`w-4 h-4 ${colors.text}`} />
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500">{project.subtitle}</p>
              </div>
            </div>
            <span className={`px-2 py-0.5 text-[10px] font-medium rounded border ${statusColor}`}>
              {project.status}
            </span>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="space-y-2 mb-4">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-indigo-500" />
                <span className="text-xs text-slate-500">{h}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-[10px] rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {t}
              </span>
            ))}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-indigo-400/80 hover:text-indigo-400 transition-colors duration-200 underline underline-offset-2 decoration-indigo-500/30"
            >
              <Github className="w-3.5 h-3.5" />
              View on GitHub
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const GitHubRepoCard = ({ repo, index }) => {
  const langColor = langColors[repo.language] || 'bg-slate-500';

  return (
    <motion.a
      href={repo.html_url || repo.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group block p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/20 hover:bg-white/[0.04] transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <Github className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
          <h4 className="text-sm font-medium text-slate-300 group-hover:text-indigo-400 transition-colors truncate">
            {repo.name}
          </h4>
        </div>
        <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-indigo-400 transition-colors shrink-0" />
      </div>
      <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">
        {repo.description || 'No description available'}
      </p>
      <div className="flex items-center gap-3">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <div className={`w-2.5 h-2.5 rounded-full ${langColor}`} />
            <span className="text-xs text-slate-500">{repo.language}</span>
          </div>
        )}
        {(repo.stargazers_count > 0 || repo.stars > 0) && (
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400" />
            <span className="text-xs text-slate-500">{repo.stargazers_count || repo.stars}</span>
          </div>
        )}
      </div>
    </motion.a>
  );
};

const Projects = () => {
  const [githubRepos, setGithubRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://api.github.com/users/Yuvi-5/repos?sort=updated&per_page=30'
        );
        if (!response.ok) throw new Error('Failed to fetch repos');
        const data = await response.json();
        // Filter out forked repos and sort by stars then updated
        const filtered = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at));
        setGithubRepos(filtered);
      } catch (err) {
        console.error('GitHub API error:', err);
        setError('Could not load repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/[0.02] rounded-full blur-[150px]" />

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
              03.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
            <div className="h-px flex-1 bg-white/[0.06] ml-4" />
          </div>
          <p className="text-slate-500 max-w-xl">
            Production-grade systems spanning AI research, cloud architecture, and edge computing.
          </p>
        </motion.div>

        {/* Main projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub Repos Section — LIVE from API */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <Github className="w-5 h-5 text-slate-400" />
            <h3 className="text-xl font-semibold text-white">GitHub Repositories</h3>
            <span className="px-2 py-0.5 text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded">
              LIVE
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-6">
            Auto-updated from{' '}
            <a
              href="https://github.com/Yuvi-5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 underline underline-offset-2 decoration-indigo-500/30 hover:text-indigo-300"
            >
              github.com/Yuvi-5
              <ExternalLink className="w-3 h-3 inline ml-1 -mt-0.5" />
            </a>
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
            <span className="ml-3 text-sm text-slate-500">Loading repositories...</span>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-sm text-slate-500">{error}</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {githubRepos.map((repo, i) => (
              <GitHubRepoCard key={repo.id || repo.name} repo={repo} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
