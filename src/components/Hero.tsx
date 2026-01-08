import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="flex items-center space-x-4">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Luis"
            alt="Luis Angel Garcia Louis"
            className="w-16 h-16 rounded-full border-2 border-accent p-0.5 bg-zinc-100 dark:bg-zinc-800"
          />
          <div className="px-3 py-1 bg-accent/10 glass text-accent rounded-full text-[10px] font-bold uppercase tracking-widest border border-accent/20">
            Disponible para proyectos
          </div>
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9]">
          Luis Angel <br />
          <span className="text-zinc-400 dark:text-zinc-600">Garcia Louis</span>
        </h1>

        <div className="max-w-2xl">
          <p className="text-lg md:text-2xl font-medium text-zinc-500 dark:text-zinc-400 leading-tight">
            Fullstack Web Developer.
            <span className="block text-zinc-800 dark:text-zinc-200">
              Construyo aplicaciones modernas, escalables y orientadas a producto.
            </span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-accent text-dark font-bold rounded-full hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 group"
          >
            Ver proyectos
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all text-center"
          >
            Contactar
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
