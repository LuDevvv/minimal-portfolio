import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Cloud } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Cloud: Cloud,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 border-y border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4">Ecosistema</h2>
          <h3 className="text-4xl font-black tracking-tight">Stack Tecnológico</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700/50 text-accent transition-transform group-hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 uppercase tracking-widest transition-colors">
                    {cat.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/50 rounded-md text-xs font-bold text-zinc-600 dark:text-zinc-300 hover:border-accent hover:text-accent transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
