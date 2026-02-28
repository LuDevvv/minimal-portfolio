import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowRight, Share2, Terminal, Code2, Cpu } from 'lucide-react';
import { ui } from '../../../constants/translations';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any
    }
};

export const Execution = ({ currentLang }: { currentLang: 'en' | 'es' }) => {
    const t = ui[currentLang].execution;
    const [activeTab, setActiveTab] = useState(t.tabs[0]);
    const { ref, isVisible } = useIntersectionObserver();

    // Mapping icons to projects for better visual metaphor
    const projectIcons: Record<string, React.ReactNode> = {
        'Azteli': <Code2 size={40} />,
        'Finiquito': <Terminal size={40} />,
        'Tickets': <Cpu size={40} />,
        'Vora': <Share2 size={40} />,
        'HornyVerse': <Code2 size={40} />
    };

    return (
        <section id="work" ref={ref} className="py-24 md:py-36 px-6 bg-white overflow-hidden relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="text-brand font-bold text-xs tracking-[0.4em] uppercase mb-6 block">{t.eyebrow}</span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-ink leading-tight tracking-tighter text-balance">
                        {t.title1}<br />
                        <span className="text-brand opacity-80">{t.title2}</span>
                    </h2>
                    <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">{t.subtitle}</p>
                </motion.div>

                <div className="flex flex-col gap-10 md:gap-14">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex flex-wrap justify-center gap-2 md:gap-4 relative z-10"
                    >
                        {t.tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 md:px-10 py-3 md:py-4 rounded-xl text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 border-2 cursor-pointer ${activeTab === tab
                                    ? 'bg-ink text-white border-ink shadow-lg scale-105'
                                    : 'bg-white text-muted border-border/50 hover:border-brand/40 hover:text-ink'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] } as any}
                        className="bg-zinc-950 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 shadow-2xl w-full relative overflow-hidden group border border-white/5"
                    >
                        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-brand/10 blur-[120px] md:blur-[200px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center relative z-10">
                            <div className="lg:col-span-2 order-2 lg:order-1">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] } as any}
                                    >
                                        <h3 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white tracking-tighter">{activeTab}</h3>
                                        <p className="text-zinc-400 leading-relaxed text-base md:text-xl mb-10 font-medium">
                                            {t.tabContent[activeTab as keyof typeof t.tabContent]}
                                        </p>
                                        <button className="flex items-center gap-3 text-white font-bold hover:gap-5 transition-all border-b-2 border-brand pb-2 text-base md:text-lg cursor-pointer group/btn">
                                            Explore Case Study <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="lg:col-span-3 order-1 lg:order-2 bg-linear-to-br from-white/10 to-white/5 rounded-3xl md:rounded-[3rem] border border-white/10 aspect-square md:aspect-[1.6] flex items-center justify-center relative shadow-inner overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 1.1, rotate: 3 }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] } as any}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="absolute inset-0 bg-linear-to-tr from-brand/10 to-transparent opacity-30" />
                                        <div className="text-brand opacity-15 scale-[1.5] md:scale-[2] blur-sm animate-pulse">
                                            {projectIcons[activeTab]}
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-white/5 font-display font-black text-7xl md:text-[14rem] uppercase tracking-tighter select-none">{activeTab[0]}</span>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
