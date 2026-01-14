
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Globe, Shield, Activity, Layers, ArrowUpRight, Cpu, Zap, Share2, Star, GitBranch, Server } from 'lucide-react';
import { Theme } from '../../types';
import { ACHIEVEMENTS, PROJECTS } from '../../constants';

interface HomeProps {
  theme: Theme;
  setActiveSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ theme, setActiveSection }) => {
  const featuredProject = PROJECTS[0];
  const isDark = theme === 'dark';

  return (
    <div className="min-h-screen flex flex-col pt-12 lg:pl-32 space-y-32">
      {/* 1. HERO - TYPOGRAPHY FOCUSED */}
      <section className="min-h-[85vh] flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8 font-mono text-[10px] tracking-[0.4em] text-accent font-bold">
                <Activity size={14} /> // INITIALIZING_ENGINE_V3.0
              </div>
              
              <h1 className={`font-heading text-6xl lg:text-[7.5rem] leading-[0.8] mb-12 font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                HYPER <br />
                <span className="text-accent text-glow italic">SCALED</span> <br />
                ENGINEERING
              </h1>

              <div className="max-w-2xl mb-12 relative">
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-transparent opacity-50" />
                <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-slate-600'} font-light leading-relaxed pl-6`}>
                  Nitin is a Senior Systems Architect orchestrating high-performance 
                  distributed networks and immersive digital neural interfaces. 
                  Merging the logic of back-end systems with the emotion of next-gen UI.
                </p>
              </div>

              <div className="flex flex-wrap gap-8">
                <button 
                  onClick={() => setActiveSection('projects')}
                  className="group relative px-12 py-5 bg-accent text-slate-950 font-heading text-xs font-black overflow-hidden shadow-[0_0_20px_rgba(190,242,100,0.3)] hover:shadow-[0_0_40px_rgba(190,242,100,0.6)] transition-all"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    DEPLOY_PORTFOLIO <ArrowRight size={18} />
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20" />
                </button>
                <button 
                  onClick={() => setActiveSection('contact')}
                  className={`px-12 py-5 glass-card font-heading text-xs font-black ${isDark ? 'text-white' : 'text-slate-900'} hover:border-accent transition-all flex items-center gap-3`}
                >
                  ESTABLISH_COMMS
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`w-full aspect-square rounded-full border border-dashed ${isDark ? 'border-accent/20' : 'border-accent/40'} flex items-center justify-center`}
              >
                <div className={`w-[80%] aspect-square rounded-full border border-dashed ${isDark ? 'border-accent-secondary/20' : 'border-accent-secondary/40'} flex items-center justify-center`}>
                  <div className={`w-[60%] aspect-square rounded-full border ${isDark ? 'border-accent/20' : 'border-accent/40'} shadow-[0_0_50px_rgba(190,242,100,0.2)]`} />
                </div>
              </motion.div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
                <span className={`font-heading text-4xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>2.5K</span>
                <span className="font-mono text-[8px] tracking-[0.5em] text-accent font-bold">AVG_TPS_LATENCY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BENTO STATS - DATA FOCUSED */}
      <section className="pr-8">
        <div className="grid md:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, borderColor: '#bef264' }}
              className="glass-card p-10 group transition-all"
            >
              <div className={`font-mono text-[9px] ${isDark ? 'text-slate-500' : 'text-slate-400'} mb-6 tracking-widest uppercase`}>
                // SEGMENT_0{idx + 1}
              </div>
              <div className={`text-5xl font-heading font-black ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-accent transition-colors mb-2`}>
                {stat.value}
              </div>
              <div className={`text-xs font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'} uppercase tracking-tighter`}>
                {stat.label}
              </div>
              <div className={`mt-8 h-1 w-full ${isDark ? 'bg-slate-800' : 'bg-slate-200'} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-accent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. NEURAL SYNTHESIS - AI WORKFLOW */}
      <section className="pr-8">
        <div className="glass-card p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Cpu size={300} className="text-accent" />
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="font-mono text-[10px] text-accent mb-6 tracking-[0.4em] uppercase font-bold">
                // COGNITIVE_INTEGRATION
              </div>
              <h2 className={`font-heading text-4xl lg:text-6xl font-black mb-8 italic leading-[0.9] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                NEURAL <br /> <span className="text-accent-secondary">SYNTHESIS</span>
              </h2>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-lg font-light leading-relaxed mb-10 italic`}>
                I integrate proprietary Large Language Models into enterprise workflows, 
                creating self-optimizing codebases and autonomous customer logic.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Zap size={16} />, label: 'DYNAMIC_PROMPT_ENGINEERING', desc: 'Real-time context injection for sub-50ms AI responses.' },
                  { icon: <Share2 size={16} />, label: 'RAG_ARCHITECTURE', desc: 'Retrieval Augmented Generation using vector-embedded data stores.' },
                  { icon: <Shield size={16} />, label: 'MODEL_ALIGNMENT', desc: 'Rigorous safety and performance constraints for production AI.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="mt-1 text-accent">{item.icon}</div>
                    <div>
                      <h4 className={`font-mono text-[10px] font-bold ${isDark ? 'text-white' : 'text-slate-800'} tracking-widest`}>{item.label}</h4>
                      <p className={`text-[10px] ${isDark ? 'text-slate-500' : 'text-slate-400'} font-mono uppercase tracking-tighter`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className={`${isDark ? 'bg-slate-950 border-white/5' : 'bg-white border-slate-200'} p-8 border space-y-4`}>
                <div className={`text-3xl font-heading font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>0.4s</div>
                <div className="font-mono text-[8px] text-accent tracking-widest uppercase font-bold">inference_speed</div>
              </div>
              <div className={`${isDark ? 'bg-slate-950 border-white/5' : 'bg-white border-slate-200'} p-8 border space-y-4`}>
                <div className={`text-3xl font-heading font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>99%</div>
                <div className="font-mono text-[8px] text-accent-secondary tracking-widest uppercase font-bold">accuracy_rate</div>
              </div>
              <div className={`${isDark ? 'bg-slate-950 border-white/5' : 'bg-white border-slate-200'} col-span-2 p-8 border`}>
                <div className="flex justify-between items-center mb-4">
                  <span className={`font-mono text-[9px] ${isDark ? 'text-slate-500' : 'text-slate-400'} uppercase`}>System_Load</span>
                  <span className="font-mono text-[9px] text-accent animate-pulse font-bold">OPTIMIZED</span>
                </div>
                <div className="flex gap-1 h-8">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-accent" 
                      style={{ height: `${20 + Math.random() * 80}%`, opacity: 0.3 + Math.random() * 0.7 }} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE DNA - NEO-BRUTALIST */}
      <section className="pr-8">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className={`font-heading text-4xl font-black mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>CORE <br /> <span className={`${isDark ? 'text-white/20' : 'text-slate-200'} italic`}>DIRECTIVES</span></h2>
            <p className={`${isDark ? 'text-slate-500' : 'text-slate-400'} font-mono text-xs leading-relaxed max-w-sm`}>
              MY ENGINEERING PHILOSOPHY IS BUILT ON RIGOROUS MATHEMATICAL LOGIC AND HUMAN EMOTION.
            </p>
          </div>
          <div className="lg:w-2/3 grid md:grid-cols-3 gap-6">
            {[
              { icon: <Shield />, title: 'HARDENED', desc: 'MILITARY-GRADE SECURITY AUDITS' },
              { icon: <Activity />, title: 'REACTIVE', desc: 'SUB-50MS RESPONSE TARGETS' },
              { icon: <Layers />, title: 'MODULAR', desc: 'CLEAN ARCHITECTURAL PATTERNS' }
            ].map((dna, i) => (
              <div key={i} className="glass-card p-8 group hover:bg-accent/5 transition-colors">
                <div className={`w-12 h-12 ${isDark ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'} border rounded-sm flex items-center justify-center mb-6 group-hover:border-accent transition-colors`}>
                  {React.cloneElement(dna.icon as React.ReactElement, { size: 20, className: `transition-colors ${isDark ? 'text-slate-400' : 'text-slate-500'} group-hover:text-accent` })}
                </div>
                <h3 className={`font-heading text-lg font-black mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{dna.title}</h3>
                <p className={`font-mono text-[9px] ${isDark ? 'text-slate-500' : 'text-slate-400'} leading-relaxed uppercase`}>{dna.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GLOBAL INFRASTRUCTURE */}
      <section className="pr-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className={`lg:col-span-2 glass-card p-12 ${isDark ? 'bg-slate-950/20' : 'bg-white/40'}`}>
            <div className="flex items-center gap-4 mb-10 font-mono text-[10px] tracking-[0.4em] text-accent font-bold">
              <Globe size={14} /> // GLOBAL_DISTRIBUTION_NET
            </div>
            <h3 className={`font-heading text-4xl font-black mb-12 italic ${isDark ? 'text-white' : 'text-slate-900'}`}>EDGE <br /> <span className={`${isDark ? 'text-white/20' : 'text-slate-200'} uppercase tracking-[0.2em]`}>STATIONS</span></h3>
            <div className="space-y-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { city: 'SILICON VALLEY', code: 'US-WEST-2', lat: '12ms' },
                  { city: 'LONDON', code: 'EU-WEST-1', lat: '34ms' },
                  { city: 'TOKYO', code: 'AP-NORTH-1', lat: '68ms' },
                  { city: 'SYDNEY', code: 'AP-SOUTHEAST-2', lat: '120ms' }
                ].map((node, i) => (
                  <div key={i} className="space-y-2 group">
                    <div className={`font-heading text-[9px] transition-colors ${isDark ? 'text-white group-hover:text-accent' : 'text-slate-900 group-hover:text-accent'}`}>{node.city}</div>
                    <div className={`font-mono text-[8px] ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>{node.code}</div>
                    <div className="font-mono text-[10px] text-accent text-glow font-bold">{node.lat}</div>
                  </div>
                ))}
              </div>
              <div className={`h-[2px] w-full ${isDark ? 'bg-slate-900' : 'bg-slate-200'} relative`}>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  className="absolute inset-0 bg-accent opacity-30 shadow-[0_0_10px_#bef264]"
                />
              </div>
            </div>
          </div>
          <div className="glass-card p-12 flex flex-col justify-center border-l-4 border-l-accent-secondary">
            <Server className="text-accent-secondary mb-8" size={32} />
            <h4 className={`font-heading text-xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>REDUNDANT <br /> ARCHITECTURE</h4>
            <p className={`text-xs font-mono uppercase leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Every system is mirrored across 3 availability zones with automatic 
              failover and 99.999% guaranteed integrity.
            </p>
          </div>
        </div>
      </section>

      {/* 6. RECENT LOGS */}
      <section className="pr-8">
        <div className="glass-card p-8 lg:p-12 border-l-4 border-l-accent">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div>
              <h2 className={`font-heading text-2xl font-black mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>SYSTEM_LOGS</h2>
              <span className={`font-mono text-[10px] ${isDark ? 'text-slate-500' : 'text-slate-400'} uppercase tracking-widest`}>LATEST_PROJECT_SPOTLIGHT</span>
            </div>
            <button className="flex items-center gap-3 font-mono text-[10px] text-accent hover:brightness-110 transition-all font-bold">
              VIEW_ALL_ENTRIES <ArrowUpRight size={14} />
            </button>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group overflow-hidden rounded-sm">
              <img src={featuredProject.image} className="w-full grayscale hover:grayscale-0 transition-all duration-700 brightness-50 group-hover:brightness-100" />
              <div className={`absolute inset-0 border transition-colors ${isDark ? 'border-white/10 group-hover:border-accent/50' : 'border-slate-200 group-hover:border-accent/50'} pointer-events-none`} />
            </div>
            <div className="space-y-6">
              <h3 className={`font-heading text-4xl font-black italic ${isDark ? 'text-white' : 'text-slate-900'}`}>{featuredProject.title}</h3>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-lg mb-10 leading-relaxed font-light italic`}>
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {featuredProject.technologies.slice(0, 5).map(tech => (
                  <span key={tech} className={`px-3 py-1 ${isDark ? 'bg-slate-900 border-white/5 text-slate-500' : 'bg-white border-slate-200 text-slate-600'} border font-mono text-[8px] uppercase font-bold`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OPEN SOURCE PULSE */}
      <section className="pr-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-12 border-b-4 border-b-accent">
            <GitBranch className="text-accent mb-8" />
            <h3 className={`font-heading text-2xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>OPEN SOURCE <br /> LEGACY</h3>
            <p className={`${isDark ? 'text-slate-500' : 'text-slate-400'} font-mono text-[10px] uppercase leading-relaxed mb-8`}>
              Active contributor to major Rust and React frameworks. Over 500+ merged 
              pull requests in the last 24 months.
            </p>
            <div className="flex gap-4">
              <div className={`${isDark ? 'bg-slate-900 border-white/5 text-white' : 'bg-white border-slate-200 text-slate-800'} px-6 py-2 border font-mono text-[9px]`}>RUST_ANALYZER</div>
              <div className={`${isDark ? 'bg-slate-900 border-white/5 text-white' : 'bg-white border-slate-200 text-slate-800'} px-6 py-2 border font-mono text-[9px]`}>NEXT_SWC</div>
            </div>
          </div>
          <div className="glass-card p-12 flex flex-col justify-center items-center text-center">
            <div className="text-5xl font-heading font-black text-accent mb-4">12K+</div>
            <div className={`font-mono text-[10px] ${isDark ? 'text-slate-500' : 'text-slate-400'} tracking-[0.4em] uppercase font-bold`}>GITHUB_STARS_ACCUMULATED</div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIAL HUD */}
      <section className="pr-8">
        <div className="glass-card p-16 lg:p-24 relative">
          <div className={`absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 ${isDark ? 'border-accent/20' : 'border-accent/40'}`} />
          <div className={`absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 ${isDark ? 'border-accent/20' : 'border-accent/40'}`} />
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-10">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-accent" fill="#bef264" />)}
            </div>
            <h3 className={`font-heading text-2xl lg:text-4xl italic font-black ${isDark ? 'text-white/90' : 'text-slate-800'} leading-tight mb-12 tracking-tighter uppercase`}>
              "Nitin's capacity to synthesize architectural rigor with world-class 
              UI aesthetics is unparalleled. He is the standard for modern full-stack engineering."
            </h3>
            <div className="space-y-2">
              <div className="font-heading text-sm font-black text-accent italic">ELARA VANCE</div>
              <div className={`font-mono text-[9px] ${isDark ? 'text-slate-600' : 'text-slate-500'} uppercase tracking-[0.4em] font-bold`}>VP OF ENGINEERING // AETHER_STACK</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER MARQUEE */}
      <div className={`py-24 overflow-hidden whitespace-nowrap border-y ${isDark ? 'border-white/5' : 'border-slate-200'} mb-24`}>
        <div className="flex animate-marquee">
          {['DEPLOY', 'SCALE', 'SECURE', 'OPTIMIZE', 'INNOVATE', 'ARCHITECT'].map(word => (
            <span key={word} className={`font-heading text-6xl lg:text-[10rem] font-black ${isDark ? 'text-white/5' : 'text-slate-200/40'} mx-12 hover:text-accent/10 transition-colors cursor-default select-none tracking-tighter`}>
              {word}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: fit-content;
        }
      `}</style>
    </div>
  );
};

export default Home;
