
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b border-white/5' : 'py-8'}`}>
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg font-bold tracking-tighter"
        >
          LAGL<span className="text-accent">.</span>
        </motion.a>
        
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-medium uppercase tracking-widest text-zinc-500 hover:text-accent dark:hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-accent transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1,16,0ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80ZM128,216a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,216ZM128,192a8,8,0,0,1-8,8v24a8,8,0,0,1,16,0V200A8,8,0,0,1,128,192ZM216,120H192a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16ZM64,128a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H56A8,8,0,0,1,64,128ZM184.49,184.49a8,8,0,0,1,0,11.31l16.97,17a8,8,0,1,1-11.31-11.32l-16.97-16.97a8,8,0,0,1,11.31-11.31ZM54.51,54.51a8,8,0,0,1,0,11.31L37.54,82.79A8,8,0,1,1,26.23,71.48l17-16.97a8,8,0,0,1,11.31,0ZM184.49,71.48a8,8,0,0,1,11.32-11.31l16.97,17a8,8,0,0,1-11.31,11.31L184.49,71.48ZM54.51,201.49a8,8,0,0,1-11.31,11.31l-16.97-17a8,8,0,1,1,11.31-11.31l16.97,16.97A8,8,0,0,1,54.51,201.49Z"></path></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.11,104.11,0,1,0,129.8,129.8,8,8,0,0,0-2-8Z"></path></svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
