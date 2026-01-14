
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import AIAssistant from './components/AIAssistant';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'dark';
  });
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const body = document.body;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      body.classList.add('dark');
      body.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      body.classList.add('light');
      body.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home key="home" theme={theme} setActiveSection={setActiveSection} />;
      case 'about': return <About key="about" theme={theme} />;
      case 'skills': return <Skills key="skills" theme={theme} />;
      case 'projects': return <Projects key="projects" theme={theme} />;
      case 'services': return <Services key="services" theme={theme} />;
      case 'blog': return <Blog key="blog" theme={theme} />;
      case 'contact': return <Contact key="contact" theme={theme} />;
      default: return <Home theme={theme} setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <ThreeBackground theme={theme} />
      
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      <AIAssistant theme={theme} />

      <main className="relative z-10 pt-24 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className={`relative z-10 py-16 text-center border-t ${theme === 'dark' ? 'border-slate-800/50' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-12">
          <div>
            <div className="font-bold text-xl mb-4">NITIN<span className="text-accent">.</span>DEV</div>
            <p className={`${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'} text-sm leading-relaxed`}>
              Crafting elite digital solutions for the next generation of business. 
              Based in Silicon Valley, delivering globally.
            </p>
          </div>
          <div>
            <h4 className={`font-bold mb-4 uppercase text-xs tracking-widest ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Navigation</h4>
            <ul className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'} space-y-2`}>
              <li className="hover:text-accent cursor-pointer transition-colors" onClick={() => setActiveSection('home')}>Home</li>
              <li className="hover:text-accent cursor-pointer transition-colors" onClick={() => setActiveSection('projects')}>Work</li>
              <li className="hover:text-accent cursor-pointer transition-colors" onClick={() => setActiveSection('services')}>Services</li>
            </ul>
          </div>
          <div>
            <h4 className={`font-bold mb-4 uppercase text-xs tracking-widest ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Newsletter</h4>
            <div className="flex gap-2">
              <input type="text" placeholder="Email Address" className={`${theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'} border rounded-lg px-4 py-2 text-xs w-full focus:outline-none focus:border-accent transition-all`} />
              <button className="bg-accent text-slate-950 px-4 py-2 rounded-lg text-xs font-bold hover:brightness-110 transition-all">Join</button>
            </div>
          </div>
        </div>
        <p className={`${theme === 'dark' ? 'text-slate-600' : 'text-slate-400'} text-[10px] uppercase tracking-widest`}>© 2024 Nitin. Integrated with Gemini Intelligence.</p>
      </footer>
    </div>
  );
};

export default App;
