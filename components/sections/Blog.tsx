
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowUpRight, Activity } from 'lucide-react';
import { BLOG_POSTS } from '../../constants';
import { Theme } from '../../types';

const Blog: React.FC<{ theme: Theme }> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <div className="py-12 lg:pl-32">
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-6 font-mono text-[10px] tracking-[0.4em] text-accent font-bold">
          <Activity size={14} /> // TRANSMISSION_LOGS_ACTIVE
        </div>
        <h2 className={`font-heading text-5xl lg:text-7xl font-black mb-4 tracking-tighter uppercase italic ${isDark ? 'text-white' : 'text-slate-900'}`}>
          KNOWLEDGE <span className={`${isDark ? 'text-white/20' : 'text-slate-200'}`}>DATASET</span>
        </h2>
        <p className={`${isDark ? 'text-slate-500' : 'text-slate-600'} font-light max-w-xl italic leading-relaxed`}>
          Technical deep-dives into the algorithms, philosophies, and architectural 
          patterns defining the next decade of software engineering.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl pr-8">
        {BLOG_POSTS.map((post, idx) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className={`group glass-card p-10 ${isDark ? 'border-white/10 bg-slate-900/10' : 'border-slate-200 bg-white'} hover:border-accent/30 transition-all cursor-pointer`}
          >
            <div className={`flex items-center gap-6 mb-8 font-mono text-[9px] ${isDark ? 'text-slate-600' : 'text-slate-400'} uppercase tracking-widest italic font-bold`}>
              <div className="flex items-center gap-2"><Calendar size={12} className="text-accent" /> {post.date}</div>
              <div className="flex items-center gap-2"><Clock size={12} className="text-accent-secondary" /> {post.readTime}</div>
            </div>
            <h3 className={`font-heading text-2xl font-black mb-6 ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-accent transition-colors leading-tight italic tracking-tighter`}>
              {post.title}
            </h3>
            <p className={`${isDark ? 'text-slate-500' : 'text-slate-600'} mb-10 leading-relaxed font-light text-sm`}>
              {post.excerpt}
            </p>
            <div className="flex items-center gap-3 font-mono text-[10px] text-accent font-bold uppercase tracking-[0.3em] group-hover:gap-6 transition-all">
              EXTRACT_DATA <ArrowUpRight size={16} />
            </div>
          </motion.article>
        ))}
      </div>

      {/* Featured Testimonial */}
      <div className="mt-32 max-w-4xl mx-auto text-center pr-8 relative">
        <div className={`font-mono text-[10px] ${isDark ? 'text-accent/30' : 'text-slate-300'} mb-8 tracking-[1em] uppercase italic font-bold`}>
          // CLIENT_VALIDATION
        </div>
        <blockquote className={`font-heading text-2xl lg:text-3xl italic font-black ${isDark ? 'text-white/80' : 'text-slate-800'} leading-tight mb-12 tracking-tighter`}>
          "NITIN'S CAPACITY TO DECONSTRUCT COMPLEX ARCHITECTURAL BOTTLENECKS WHILE MAINTAINING HIGH-FIDELITY INTERFACES IS A RARE COMPETENCY. AN ESSENTIAL OPERATIVE FOR ELITE TEAMS."
        </blockquote>
        <div className={`font-heading text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'} tracking-widest italic`}>SARAH JENKINS</div>
        <div className={`font-mono text-[9px] ${isDark ? 'text-slate-600' : 'text-slate-400'} uppercase tracking-[0.4em] mt-3 italic font-bold`}>CTO // NEXTECH_SYSTEMS</div>
        
        {/* Aesthetic HUD brackets */}
        <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${isDark ? 'border-accent/20' : 'border-slate-200'}`} />
        <div className={`absolute bottom-0 right-8 w-8 h-8 border-b-2 border-r-2 ${isDark ? 'border-accent/20' : 'border-slate-200'}`} />
      </div>
    </div>
  );
};

export default Blog;
