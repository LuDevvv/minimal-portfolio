
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 max-w-5xl mx-auto px-6">
      <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Trayectoria</h2>
          <div className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
            Con <span className="text-zinc-900 dark:text-white">+4 años de experiencia</span>, he liderado el desarrollo de SaaS y sistemas complejos desde la concepción hasta el despliegue.
          </div>
        </motion.div>

        <div className="hidden md:block w-px h-32 bg-zinc-200 dark:bg-zinc-800"></div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-zinc-500"
        >
          <p>
            Mi enfoque combina la mentalidad de negocio con la excelencia técnica. Me especializo en transformar requerimientos complejos en aplicaciones web fluidas, con especial atención en la seguridad y la experiencia del usuario final.
          </p>
          <p className="font-bold text-zinc-900 dark:text-zinc-200">
            Freelance & In-house product development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
