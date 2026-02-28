import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Globe, Shield, Layers, Zap } from 'lucide-react';
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

export const Features = ({ currentLang }: { currentLang: 'en' | 'es' }) => {
    const t = ui[currentLang].features;
    const icons = [<Globe size={22} />, < Zap size={22} />, <Layers size={22} />, <Shield size={22} />];
    const { ref, isVisible } = useIntersectionObserver();

    return (
        <section id="services" ref={ref} className="py-24 md:py-32 px-6 max-w-6xl mx-auto overflow-hidden">
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="grid lg:grid-cols-2 gap-10 md:gap-16 items-end mb-16 md:mb-20"
            >
                <div>
                    <span className="text-brand font-bold text-xs tracking-[0.4em] uppercase mb-6 block">{t.eyebrow}</span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 md:mb-0 text-ink leading-tight tracking-tight text-balance">
                        {t.title1}<br />
                        <span className="text-brand opacity-80">{t.title2}</span>
                    </h2>
                </div>
                <p className="text-muted text-base md:text-lg leading-relaxed max-w-lg lg:ml-auto font-medium">
                    {t.subtitle}
                </p>
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
                {t.items.map((f, i) => (
                    <motion.div key={i} variants={fadeUp} className="group relative bg-white border border-border/50 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-premium hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-brand/10 transition-colors duration-500" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-ink text-white rounded-xl flex items-center justify-center mb-8 group-hover:bg-brand transition-all duration-300 shadow-lg shadow-ink/10 group-hover:rotate-6">
                                {icons[i]}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-ink tracking-tight">{f.title}</h3>
                            <p className="text-muted text-base md:text-lg leading-relaxed font-medium max-w-xs">{f.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
