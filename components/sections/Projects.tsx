
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Target, Activity } from 'lucide-react';
import { PROJECTS } from '../../constants';
import { Theme } from '../../types';

const Projects: React.FC<{ theme: Theme }> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <div className="py-12 lg:pl-32">
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-6 font-mono text-[10px] tracking-[0.4em] text-accent font-bold">
          <Activity size={14} /> // REGISTRY_SCAN_COMPLETE
        </div>
        <h2 className={`font-heading text-5xl lg:text-7xl font-black mb-4 tracking-tighter uppercase italic ${isDark ? 'text-white' : 'text-slate-900'}`}>
          SYSTEM_ <span className={`${isDark ? 'text-white/20' : 'text-slate-200'}`}>LOGS</span>
        </h2>
        <p className={`${isDark ? 'text-slate-500' : 'text-slate-600'} font-light max-w-xl`}>
          A catalogue of validated technical solutions and high-frequency architectural builds.
        </p>
      </div>

      <div className="space-y-40 pr-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row gap-20 items-center ${
              idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-1 bg-accent/20 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div className={`relative glass-card ${isDark ? 'border-white/10' : 'border-slate-200'} group-hover:border-accent/50 transition-colors`}>
                <div className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`w-full h-[500px] object-cover ${isDark ? 'grayscale brightness-50' : 'brightness-90'} group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100`}
                  />
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-2 h-2 bg-accent shadow-[0_0_10px_#bef264]" />
                  <div className={`w-2 h-2 ${isDark ? 'bg-white/20' : 'bg-black/10'}`} />
                </div>
                <div className={`absolute bottom-0 left-0 right-0 p-8 ${isDark ? 'bg-gradient-to-t from-slate-950' : 'bg-gradient-to-t from-white/90'} to-transparent`}>
                  <div className="flex gap-4">
                    <a href="#" className={`p-4 ${isDark ? 'bg-slate-950/80 border-white/10' : 'bg-white border-slate-200'} border hover:border-accent transition-all ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      <Github size={18} />
                    </a>
                    <a href="#" className={`p-4 bg-accent border border-accent text-slate-950 hover:bg-white transition-all`}>
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="w-full lg:w-1/2">
              <div className="font-mono text-[10px] text-accent mb-4 tracking-[0.5em] uppercase italic font-bold">
                // DATA_SET_0{idx + 1}
              </div>
              <h3 className={`font-heading text-4xl font-black mb-8 ${isDark ? 'text-white' : 'text-slate-900'} italic tracking-tighter`}>{project.title}</h3>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-lg mb-10 leading-relaxed font-light italic`}>
                "{project.description}"
              </p>

              <div className="grid grid-cols-2 gap-10 mb-12">
                <div>
                  <h4 className={`font-mono text-[9px] font-bold ${isDark ? 'text-slate-500' : 'text-slate-400'} uppercase tracking-[0.3em] mb-6 flex items-center gap-2`}>
                    <Activity size={10} className="text-accent" /> CORE_FEATURES
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map(f => (
                      <li key={f} className={`font-mono text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-600'} flex items-start gap-3 uppercase`}>
                        <span className="w-1 h-1 bg-accent mt-1.5" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className={`font-mono text-[9px] font-bold ${isDark ? 'text-slate-500' : 'text-slate-400'} uppercase tracking-[0.3em] mb-6 flex items-center gap-2`}>
                    <Target size={10} className="text-accent-secondary" /> IMPACT_STATS
                  </h4>
                  <p className={`font-mono text-[10px] ${isDark ? 'text-slate-500' : 'text-slate-600'} leading-relaxed uppercase italic`}>
                    {project.outcome}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map(tech => (
                  <span key={tech} className={`px-4 py-1.5 glass-card font-mono text-[9px] ${isDark ? 'text-slate-400' : 'text-slate-600'} uppercase tracking-widest hover:text-accent transition-colors`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
