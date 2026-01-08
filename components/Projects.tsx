
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 max-w-5xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4">Portafolio</h2>
        <h3 className="text-4xl font-black tracking-tight">Proyectos Destacados</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`group space-y-6 ${idx === 0 ? 'md:col-span-2' : ''}`}
          >
            <div className="relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/50">
              <div className={`aspect-video overflow-hidden ${idx === 0 ? 'md:aspect-[21/9]' : 'aspect-video'}`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div className="flex gap-4">
                  <a href={project.liveUrl} className="px-5 py-2.5 bg-accent text-dark text-sm font-bold rounded-full">Live Demo</a>
                  <a href={project.githubUrl} className="px-5 py-2.5 bg-white/10 backdrop-blur-md text-white text-sm font-bold rounded-full border border-white/20">GitHub</a>
                </div>
              </div>
            </div>
            
            <div className="px-2">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-2xl font-black tracking-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                {idx === 0 && <span className="px-2 py-0.5 bg-accent/10 text-accent border border-accent/20 rounded text-[10px] font-bold uppercase">Destacado</span>}
              </div>
              <p className="text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed text-sm md:text-base max-w-2xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.stack.map(tech => (
                  <span key={tech} className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
