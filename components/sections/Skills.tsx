
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../constants';
import { Theme } from '../../types';
import { Activity, Layers } from 'lucide-react';

const Skills: React.FC<{ theme: Theme }> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <div className="py-12 lg:pl-32">
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-6 font-mono text-[10px] tracking-[0.4em] text-accent font-bold">
          <Activity size={14} /> // SYSTEM_DIAGNOSTICS_v4.2
        </div>
        <h2 className={`font-heading text-5xl lg:text-7xl font-black mb-4 tracking-tighter uppercase italic ${isDark ? 'text-white' : 'text-slate-900'}`}>
          TECH <span className={`${isDark ? 'text-white/20' : 'text-slate-200'}`}>ARSENAL</span>
        </h2>
        <p className={`${isDark ? 'text-slate-500' : 'text-slate-600'} font-light max-w-xl`}>
          Leveraging a high-frequency technology stack designed for enterprise-grade 
          resilience and sub-millisecond responsiveness.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 pr-8">
        {SKILL_CATEGORIES.map((category, catIdx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIdx * 0.1 }}
            className={`glass-card p-10 flex flex-col h-full group hover:border-accent/20 transition-all`}
          >
            <div className={`flex items-center justify-between mb-10 border-b ${isDark ? 'border-white/5' : 'border-slate-200'} pb-6`}>
              <h3 className={`font-heading text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'} tracking-widest italic`}>{category.name}</h3>
              <Layers size={16} className="text-accent opacity-50" />
            </div>
            
            <div className="space-y-10 flex-grow">
              {category.skills.map((skill, skillIdx) => (
                <div key={skill.name} className="group/skill">
                  <div className="flex justify-between items-end mb-3">
                    <span className={`font-mono text-[10px] font-bold ${isDark ? 'text-white' : 'text-slate-800'} tracking-widest`}>{skill.name.toUpperCase()}</span>
                    <span className="font-mono text-[10px] text-accent text-glow font-bold">{skill.level}%</span>
                  </div>
                  <div className={`h-1.5 w-full ${isDark ? 'bg-slate-900' : 'bg-slate-200'} rounded-full overflow-hidden relative`}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: catIdx * 0.1 + skillIdx * 0.1 }}
                      className="h-full bg-gradient-to-r from-accent to-accent-secondary relative z-10"
                    />
                  </div>
                  <p className={`mt-4 font-mono text-[9px] ${isDark ? 'text-slate-500' : 'text-slate-500'} leading-relaxed uppercase opacity-0 group-hover/skill:opacity-100 transition-opacity`}>
                    [INFO]: {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className={`mt-20 glass-card p-12 border-x-0 flex flex-wrap justify-center gap-12 items-center opacity-60 hover:opacity-100 transition-opacity pr-8`}>
        {['REACT_JS', 'NEXT_ENGINE', 'PG_SQL', 'DOCKER_CORE', 'K8S_ARCH', 'AWS_CLOUD', 'RUST_LANG', 'TS_SYSTEM'].map(tag => (
          <span key={tag} className={`font-heading text-xl font-black ${isDark ? 'text-white/50' : 'text-slate-300'} select-none hover:text-accent transition-colors cursor-default tracking-tighter italic`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
