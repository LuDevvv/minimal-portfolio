import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Link, RefreshCcw, Zap, Share2 } from 'lucide-react';
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

export const Integrations = ({ currentLang }: { currentLang: 'en' | 'es' }) => {
    const t = ui[currentLang].integrations;
    const { ref, isVisible } = useIntersectionObserver();

    return (
        <section id="pricing" ref={ref} className="py-24 md:py-36 px-6 bg-slate-50/20 overflow-hidden relative">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    className="flex-1 text-center lg:text-left"
                >
                    <span className="text-brand font-bold text-xs tracking-[0.4em] uppercase mb-6 block">{t.eyebrow}</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-ink leading-tight tracking-tighter text-balance">
                        {t.title1}<br />
                        <span className="text-brand opacity-80">{t.title2}</span>
                    </h2>
                    <p className="text-muted text-base md:text-lg mb-10 md:mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                        {t.subtitle}
                    </p>
                    <button className="bg-ink text-white px-10 py-4.5 rounded-xl font-bold hover:bg-brand transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-ink/10 cursor-pointer mx-auto lg:mx-0 border-b-2 border-black/20 text-sm group">
                        {t.learnMore} <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    animate={isVisible ? { opacity: 1, scale: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] } as any}
                    className="flex-1 w-full relative"
                >
                    <div className="absolute inset-0 bg-brand/5 blur-[100px] rounded-full scale-125 -z-10" />

                    <div className="grid grid-cols-2 gap-4 md:gap-6 p-4 relative">
                        {[
                            { title: 'API Sync', icon: <Link size={24} />, color: 'bg-indigo-500' },
                            { title: 'Webhooks', icon: <Zap size={24} />, color: 'bg-brand' },
                            { title: 'Automation', icon: <RefreshCcw size={24} />, color: 'bg-blue-600' },
                            { title: 'Data Flow', icon: <Share2 size={24} />, color: 'bg-slate-900' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-white p-6 md:p-10 rounded-3xl md:rounded-4xl shadow-lg border border-border/40 flex flex-col items-center justify-center text-center group cursor-default transition-all duration-500"
                            >
                                <div className={`w-12 h-12 md:w-16 md:h-16 ${item.color} text-white rounded-[18px] md:rounded-[20px] flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500 overflow-hidden relative`}>
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative z-10">{item.icon}</div>
                                </div>
                                <span className="font-display font-bold text-lg md:text-xl text-ink tracking-tight">{item.title}</span>
                            </motion.div>
                        ))}

                        {/* Central Hub */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl z-20 border-2 border-brand/5">
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-brand/10 rounded-full flex items-center justify-center text-brand animate-[spin_6s_linear_infinite]">
                                <RefreshCcw size={24} />
                            </div>
                            {/* Connecting pulses */}
                            <div className="absolute inset-0 rounded-full border border-brand/20 animate-ping opacity-20" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
