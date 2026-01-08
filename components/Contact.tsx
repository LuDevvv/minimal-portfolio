
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-32 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-dark">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">¿Tienes un <br /><span className="text-accent">proyecto?</span></h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-sm mb-8">
              Disponible para nuevas oportunidades y colaboraciones técnicas de alto impacto.
            </p>
            <a 
              href="mailto:hola@luisgarcia.dev" 
              className="text-xl md:text-2xl font-bold border-b-2 border-accent pb-1 hover:text-accent transition-all"
            >
              hola@luisgarcia.dev
            </a>
          </motion.div>

          <div className="flex md:justify-end space-x-8">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-accent transition-colors">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-accent transition-colors">GitHub</a>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-200 dark:border-zinc-800 flex justify-center text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
          <p className="text-center">© {new Date().getFullYear()} Luis Angel Garcia Louis</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
