
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Activity, ShieldCheck, Server, Database, Layers, Code, Bot, Headphones } from 'lucide-react';
import { SERVICES } from '../../constants';
import { Theme } from '../../types';

const Services: React.FC<{ theme: Theme }> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <div className="py-12 lg:pl-32 space-y-40">
      {/* Header */}
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 mb-6 font-mono text-[10px] tracking-[0.4em] text-accent font-bold">
            <Activity size={14} /> // SERVICE_MANIFEST_v2.0
          </div>
          <h2 className={`font-heading text-5xl lg:text-[6rem] font-black mb-6 tracking-tighter italic leading-[0.85] ${isDark ? 'text-white' : 'text-slate-900'}`}>
            ELITE <br /> <span className={`${isDark ? 'text-white/20' : 'text-slate-200'}`}>CAPABILITIES</span>
          </h2>
          <p className={`${isDark ? 'text-slate-500' : 'text-slate-600'} text-lg font-light leading-relaxed max-w-2xl italic`}>
            Engineered solutions for global scale. I provide the technical infrastructure 
            required for modern decentralized and autonomous business operations.
          </p>
        </motion.div>
      </div>

      {/* Service Cards */}
      <div className="grid lg:grid-cols-3 gap-8 pr-8">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative"
          >
            <div className={`glass-card p-12 h-full flex flex-col hover:border-accent/40 transition-all ${isDark ? 'bg-slate-900/20' : 'bg-white'}`}>
              <div className={`mb-12 p-4 ${isDark ? 'bg-slate-950 border-white/10' : 'bg-slate-50 border-slate-200'} border w-fit group-hover:border-accent transition-colors`}>
                {React.cloneElement(service.icon as React.ReactElement, { size: 30, className: 'text-accent' })}
              </div>
              <h3 className={`font-heading text-xl font-black mb-6 ${isDark ? 'text-white' : 'text-slate-900'} tracking-widest italic`}>{service.title}</h3>
              <p className={`${isDark ? 'text-slate-500' : 'text-slate-600'} mb-10 leading-relaxed font-mono text-[11px] uppercase tracking-tighter`}>
                [DESCRIPTION]: {service.description}
              </p>
              
              <div className="mt-auto space-y-4">
                <div className={`font-mono text-[9px] font-bold uppercase tracking-[0.4em] ${isDark ? 'text-slate-700' : 'text-slate-300'} border-b ${isDark ? 'border-white/5' : 'border-slate-100'} pb-3 italic`}>
                  // OPS_BENEFITS
                </div>
                {service.benefits.map(benefit => (
                  <div key={benefit} className={`flex items-start gap-4 text-[10px] font-mono ${isDark ? 'text-slate-500 group-hover:text-slate-300' : 'text-slate-500 group-hover:text-slate-700'} transition-colors uppercase tracking-widest`}>
                    <Check size={12} className="text-accent mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Execution Engine */}
      <section className={`glass-card p-12 lg:p-24 relative overflow-hidden border-x-0 ${isDark ? 'bg-accent/[0.02]' : 'bg-accent/[0.05]'}`}>
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <div className="font-mono text-[10px] text-accent mb-8 tracking-[0.5em] uppercase italic font-bold">
              // WORKFLOW_DIAGNOSTICS
            </div>
            <h3 className={`font-heading text-4xl lg:text-5xl font-black mb-8 tracking-tighter leading-none uppercase ${isDark ? 'text-white' : 'text-slate-900'}`}>THE EXECUTION <br /> <span className="text-accent">MATRIX</span></h3>
            <p className={`${isDark ? 'text-slate-500' : 'text-slate-600'} text-lg leading-relaxed font-light italic mb-12`}>
              Iterative, data-driven methodology designed to mitigate architectural 
              risk and maximize system longevity.
            </p>
            <div className="space-y-12">
              {[
                { step: '0x01', title: 'DISCOVERY_AUDIT', desc: 'Holistic deep-dive into business logic and technical bottlenecks.' },
                { step: '0x02', title: 'BLUEPRINT_GEN', desc: 'Architecting a modular, cloud-native system for infinite horizontal scale.' },
                { step: '0x03', title: 'AGILE_SYNC', desc: 'High-frequency development sprints with continuous feature validation.' },
                { step: '0x04', title: 'PROD_DEPLOY', desc: 'Edge-cached rollout with automated monitoring and self-healing hooks.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className={`font-mono text-2xl font-black ${isDark ? 'text-slate-800' : 'text-slate-300'} group-hover:text-accent transition-colors leading-none`}>{item.step}</div>
                  <div>
                    <h4 className={`font-heading text-sm font-black mb-2 ${isDark ? 'text-white' : 'text-slate-900'} italic tracking-widest`}>{item.title}</h4>
                    <p className={`font-mono text-[10px] ${isDark ? 'text-slate-600' : 'text-slate-500'} uppercase tracking-tighter leading-relaxed`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sticky top-32">
            <div className={`glass-card p-10 ${isDark ? 'bg-slate-950/50' : 'bg-white shadow-xl'} border ${isDark ? 'border-white/10' : 'border-slate-200'} space-y-10`}>
              <div className="flex items-center gap-4 text-accent">
                <Layers size={18} /> <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] italic">TECH_STACK_CORE</span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Code size={16} />, label: 'FRONTEND', sub: 'REACT_NEXT' },
                  { icon: <Server size={16} />, label: 'BACKEND', sub: 'RUST_GO_NODE' },
                  { icon: <Database size={16} />, label: 'DATA_OPS', sub: 'PG_REDIS_S3' },
                  { icon: <Layers size={16} />, label: 'INFRA', sub: 'AWS_K8S_IAC' },
                  { icon: <ShieldCheck size={16} />, label: 'SECURITY', sub: 'ZERO_TRUST' },
                  { icon: <Bot size={16} />, label: 'AI_LABS', sub: 'RAG_LLM_OPS' }
                ].map((stack, i) => (
                  <div key={i} className={`${isDark ? 'bg-slate-900 border-white/5' : 'bg-slate-50 border-slate-100'} p-6 border hover:border-accent/30 transition-all group/stack`}>
                    <div className={`${isDark ? 'text-slate-500' : 'text-slate-400'} group-hover/stack:text-accent transition-colors mb-3`}>{stack.icon}</div>
                    <div className={`font-heading text-[10px] ${isDark ? 'text-white' : 'text-slate-900'} mb-1 italic tracking-widest`}>{stack.label}</div>
                    <div className={`font-mono text-[8px] ${isDark ? 'text-slate-600' : 'text-slate-500'} uppercase tracking-tighter`}>{stack.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="text-center py-12 pr-8">
        <div className={`inline-flex items-center gap-3 px-6 py-3 ${isDark ? 'bg-slate-900 border-white/5' : 'bg-white border-slate-200'} border font-mono text-[9px] font-bold ${isDark ? 'text-slate-500' : 'text-slate-600'} mb-10 tracking-[0.3em] uppercase italic`}>
          <Headphones size={14} className="text-accent" /> 24/7_PRIORITY_FOR_ENTERPRISE_NODES
        </div>
        <h3 className={`font-heading text-3xl font-black mb-12 italic tracking-tighter ${isDark ? 'text-white/80' : 'text-slate-800'}`}>"CONVERTING COMPLEXITY INTO COMPETITIVE_EDGE."</h3>
        <button 
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          className="px-16 py-6 bg-accent text-slate-950 font-heading text-xs font-black shadow-[0_0_20px_rgba(190,242,100,0.3)] hover:shadow-[0_0_40px_rgba(190,242,100,0.5)] transition-all"
        >
          INITIATE_PROJECT_PROTOCOL
        </button>
      </section>
    </div>
  );
};

export default Services;
