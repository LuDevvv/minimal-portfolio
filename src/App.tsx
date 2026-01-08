import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import { useTheme } from './hooks/useTheme';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative overflow-x-hidden selection:bg-accent selection:text-dark">
      {/* Premium Progress Bar */}
      <ScrollProgress />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <Contact />

      {/* Background ambient detail */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 dark:bg-accent/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-accent/10 dark:bg-accent/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default App;
