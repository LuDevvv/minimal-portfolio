import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
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
            className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-accent hover:bg-accent/10 transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-accent" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-600" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
