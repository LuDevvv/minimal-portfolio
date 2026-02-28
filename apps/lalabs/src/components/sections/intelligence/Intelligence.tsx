import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Zap, Globe, Layers, Sparkles } from 'lucide-react';
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

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const Intelligence = ({ currentLang }: { currentLang: 'en' | 'es' }) => {
    const t = ui[currentLang].intelligence;
    const icons = [<Zap size={22} />, <Globe size={22} />, <Layers size={22} />, <Sparkles size={22} />];
    const { ref, isVisible } = useIntersectionObserver();

    return (
        <section id="approach" ref={ref} className="py-24 md:py-32 px-6 max-w-6xl mx-auto overflow-hidden">
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="max-w-4xl mb-16 md:mb-24 text-center md:text-left"
            >
                <span className="text-brand font-bold text-xs tracking-[0.4em] uppercase mb-6 block">{t.eyebrow}</span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-ink leading-tight tracking-tight text-balance">
                    {t.title1}<br />
                    <span className="text-brand opacity-80">{t.title2}</span>
                </h2>
                <p className="text-muted text-base md:text-lg leading-relaxed font-medium mx-auto md:mx-0 max-w-2xl">{t.subtitle}</p>
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14"
            >
                {t.items.slice(0, 4).map((item, i: number) => (
                    <motion.div key={i} variants={fadeUp} className="group relative border-b border-border/50 pb-10 md:pb-14 flex flex-col md:flex-row gap-6 md:gap-10 items-start transition-all duration-300 hover:border-brand">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-white border border-border/50 text-brand rounded-xl flex items-center justify-center shrink-0 group-hover:bg-ink group-hover:text-white transition-all duration-300 shadow-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">{icons[i]}</div>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-display font-bold mb-3 text-ink tracking-tight">{item.title}</h3>
                            <p className="text-muted text-sm md:text-lg leading-relaxed max-w-md font-medium">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
