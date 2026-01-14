
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Terminal, Activity } from 'lucide-react';
import { Theme } from '../../types';

const About: React.FC<{ theme: Theme }> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <div className="py-20 lg:pl-32">
      <div className="max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-16 mb-32">
          <div className="lg:col-span-2">
            <div className="sticky top-32">
              <div className="font-mono text-[10px] text-accent mb-4 tracking-[0.4em] font-bold">// IDENTITY_SCAN</div>
              <h2 className={`font-heading text-5xl font-black mb-8 leading-[0.9] tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                THE <span className={`${isDark ? 'text-white/20' : 'text-slate-200'} italic`}>ARCHITECT</span> <br /> 
                BEHIND THE <br />
                <span className="text-accent text-glow">TERMINAL</span>
              </h2>
              <p className={`${isDark ? 'text-slate-500' : 'text-slate-600'} text-lg mb-10 leading-relaxed font-light italic border-l-2 border-accent/30 pl-6`}>
                "Code is the medium through which I manipulate the architecture of reality."
              </p>
              <div className="space-y-4">
                <div className={`flex items-center gap-4 p-5 glass-card group hover:border-accent/30 transition-all`}>
                  <Award className="text-accent" size={20} />
                  <span className={`font-mono text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>CERTIFIED_CLOUD_STRATEGIST</span>
                </div>
                <div className={`flex items-center gap-4 p-5 glass-card group hover:border-accent/30 transition-all`}>
                  <Terminal className="text-accent-secondary" size={20} />
                  <span className={`font-mono text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>LOGIC_DRIVEN_ECOSYSTEMS</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-24">
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-1px bg-accent/30" />
                <h3 className={`font-heading text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} flex items-center gap-4 italic`}>
                  ORIGIN_STORY
                </h3>
              </div>
              <div className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-lg leading-relaxed space-y-8 font-light`}>
                <p>
                  My journey initiated at the intersection of pure mathematics and structural engineering. 
                  Over 8 years ago, I recognized that software was the ultimate engineering frontier—a 
                  space where complexity could be scaled without physical constraint.
                </p>
                <p>
                  Today, I lead technical initiatives that bridge the gap between heavy-duty distributed 
                  systems and high-fidelity user interactions. My methodology is rooted in the 
                  CS fundamentals but evolved through years of handling high-traffic neural networks 
                  for global enterprises.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-1px bg-accent-secondary/30" />
                <h3 className={`font-heading text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} flex items-center gap-4 italic`}>
                  EVOLUTION_PATH
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card p-10 group hover:bg-accent/5 transition-all">
                  <div className={`font-mono text-[9px] text-accent mb-4 tracking-widest font-bold`}>// ACADEMIC_BASE</div>
                  <h4 className={`font-heading text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'} mb-4`}>B.S. COMPUTER SCIENCE</h4>
                  <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'} leading-relaxed font-mono uppercase`}>
                    Specialized in Distributed Algorithms & Quantum Computing logic.
                  </p>
                </div>
                <div className="glass-card p-10 group hover:bg-accent/5 transition-all">
                  <div className={`font-mono text-[9px] text-accent-secondary mb-4 tracking-widest font-bold`}>// CURRENT_VECTOR</div>
                  <h4 className={`font-heading text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'} mb-4`}>AI_INTEGRATION</h4>
                  <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'} leading-relaxed font-mono uppercase`}>
                    Engineering autonomous RAG pipelines and low-latency streaming patterns.
                  </p>
                </div>
              </div>
            </section>

            <section className={`border-t ${isDark ? 'border-white/5' : 'border-slate-200'} pt-16`}>
              <div className={`font-mono text-[10px] text-accent mb-12 tracking-[0.5em] text-center uppercase italic font-bold`}>
                // ENGINEERING_DIRECTIVES
              </div>
              <div className="space-y-12">
                {[
                  { title: 'LATENCY_ZERO', desc: 'Any interaction exceeding 100ms is a failure in structural integrity.' },
                  { title: 'SEMANTIC_LOGIC', desc: 'Codebases must read like precise documentation. Clarity over cleverness.' },
                  { title: 'RUTHLESS_MINIMALISM', desc: 'Complexity is a debt. I architect for the absolute minimum viable logic.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className={`font-heading text-4xl font-black ${isDark ? 'text-white/5' : 'text-slate-200'} group-hover:text-accent/20 transition-colors`}>
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className={`font-heading text-lg font-black mb-3 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                      <p className={`${isDark ? 'text-slate-500' : 'text-slate-600'} leading-relaxed font-light`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <section className="py-24 glass-card rounded-sm px-12 text-center relative overflow-hidden border-x-0">
          <div className="relative z-10">
            <h3 className={`font-heading text-2xl font-black mb-6 italic tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>BEYOND_THE_CODE</h3>
            <p className={`${isDark ? 'text-slate-500' : 'text-slate-600'} max-w-2xl mx-auto leading-relaxed mb-12 font-light`}>
              When the terminal closes, I synchronize with physical reality through high-altitude 
              mountaineering, experimental music synthesis, and contributing to the open-source 
              Rust ecosystem. Diversified input results in optimized output.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['RUST_OSS', 'PEAK_ASCENT', 'SYNTH_MODULAR', 'MACRO_PHOTOGRAPHY'].map(tag => (
                <span key={tag} className={`px-6 py-2 ${isDark ? 'bg-slate-900 border-white/5 text-slate-400' : 'bg-white border-slate-200 text-slate-600'} border font-mono text-[9px] font-bold tracking-widest uppercase`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={`absolute top-0 right-0 w-64 h-64 ${isDark ? 'bg-accent/5' : 'bg-accent/10'} blur-[100px]`} />
          <div className={`absolute bottom-0 left-0 w-64 h-64 ${isDark ? 'bg-accent-secondary/5' : 'bg-accent-secondary/10'} blur-[100px]`} />
        </section>
      </div>
    </div>
  );
};

export default About;
