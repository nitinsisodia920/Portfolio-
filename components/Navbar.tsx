
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Command, Activity, Layers, Terminal } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const NAV_ITEMS = [
  { id: 'home', label: '01 CORE', icon: Activity },
  { id: 'about', label: '02 BIO', icon: Terminal },
  { id: 'skills', label: '03 TECH', icon: Layers },
  { id: 'projects', label: '04 WORK', icon: Command },
  { id: 'services', label: '05 OPS', icon: Command },
  { id: 'contact', label: '06 LINK', icon: Command }
];

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Header */}
      <nav className={`fixed top-0 left-0 right-0 z-[60] py-6 px-8 transition-all duration-500 ${isScrolled ? (isDark ? 'bg-slate-950/80' : 'bg-white/80') + ' backdrop-blur-xl border-b border-black/5 dark:border-white/5' : ''}`}>
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveSection('home')}
          >
            <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500 shadow-[0_0_15px_rgba(190,242,100,0.5)]">
              <span className="text-slate-950 font-black -rotate-45 group-hover:rotate-0 transition-transform">N</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-heading text-sm font-bold tracking-[0.3em] ${isDark ? 'text-white' : 'text-slate-900'}`}>NITIN // OS</span>
              <span className="text-[10px] font-mono text-accent font-bold">SYSTEM_STATUS: ACTIVE</span>
            </div>
          </motion.div>

          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full glass-card flex items-center justify-center transition-colors ${isDark ? 'text-slate-400 hover:text-accent' : 'text-slate-500 hover:text-accent'}`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden w-10 h-10 glass-card flex items-center justify-center ${isDark ? 'text-white' : 'text-slate-950'}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Side HUD Nav (Desktop Only) */}
      <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-[60] flex-col gap-8">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className="group flex items-center gap-4 relative"
          >
            <div className={`w-1 h-8 rounded-full transition-all duration-500 ${activeSection === item.id ? 'bg-accent h-12 shadow-[0_0_15px_rgba(190,242,100,0.5)]' : (isDark ? 'bg-white/10 group-hover:bg-white/30' : 'bg-black/10 group-hover:bg-black/20')}`} />
            <span className={`font-mono text-[10px] tracking-[0.2em] transition-all duration-500 font-bold ${activeSection === item.id ? 'text-accent translate-x-2' : (isDark ? 'text-slate-500 group-hover:text-white' : 'text-slate-400 group-hover:text-slate-800')}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Mobile HUD Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className={`fixed inset-0 z-[70] ${isDark ? 'bg-slate-950/95' : 'bg-white/95'} backdrop-blur-2xl lg:hidden flex flex-col p-12 gap-8`}
          >
            <button onClick={() => setMobileMenuOpen(false)} className="self-end p-4 text-accent">
              <X size={40} strokeWidth={1} />
            </button>
            <div className="flex flex-col gap-10 mt-12">
              {NAV_ITEMS.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left font-heading text-4xl font-black tracking-tighter transition-all ${activeSection === item.id ? 'text-accent italic translate-x-4' : (isDark ? 'text-white/40' : 'text-slate-900/40')}`}
                >
                  {item.label.split(' ')[1]}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
