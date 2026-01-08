import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

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
              className="group flex items-center gap-3 text-xl md:text-2xl font-bold hover:text-accent transition-all"
            >
              <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent group-hover:text-dark transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <span className="border-b-2 border-accent/20 group-hover:border-accent transition-all">
                hola@luisgarcia.dev
              </span>
            </a>
          </motion.div>

          <div className="flex md:justify-end space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-full text-zinc-400 hover:border-accent hover:text-accent transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-full text-zinc-400 hover:border-accent hover:text-accent transition-all">
              <Github className="w-5 h-5" />
            </a>
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
