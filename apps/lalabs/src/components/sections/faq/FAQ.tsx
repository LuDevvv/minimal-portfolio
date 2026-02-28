import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Plus } from 'lucide-react';
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
            delayChildren: 0.1
        }
    }
};

export const FAQ = ({ currentLang }: { currentLang: 'en' | 'es' }) => {
    const t = ui[currentLang].faq;
    const [openIndex, setOpenIndex] = useState(0);
    const { ref, isVisible } = useIntersectionObserver();

    return (
        <section ref={ref} id="faq" className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        className="lg:w-1/3 shrink-0 lg:sticky lg:top-32 text-center lg:text-left mx-auto lg:mx-0"
                    >
                        <span className="text-brand font-bold text-xs tracking-[0.4em] uppercase mb-6 block">{t.eyebrow}</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-ink leading-tight tracking-tight">{t.title1}<br /><span className="text-brand opacity-80">{t.title2}</span></h2>
                        <p className="text-muted leading-relaxed text-base md:text-lg font-medium">{t.subtitle}</p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        className="lg:w-2/3 space-y-2 w-full"
                    >
                        {t.items.map((faq, i) => (
                            <motion.div key={i} variants={fadeUp} className={`border-b border-border/40 transition-all duration-300 ${openIndex === i ? 'pb-6 pt-2' : 'py-6'}`}>
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                    className="w-full flex items-center justify-between text-left font-display font-bold text-lg md:text-xl hover:text-brand transition-all duration-300 group cursor-pointer"
                                >
                                    <span className="pr-10 tracking-tight leading-snug">{faq.q}</span>
                                    <div className={`w-8 h-8 rounded-full border border-border/40 flex items-center justify-center shrink-0 group-hover:border-brand group-hover:bg-brand group-hover:text-white transition-all duration-300 ${openIndex === i ? 'bg-brand text-white border-brand rotate-135' : 'text-muted'}`}>
                                        <Plus size={16} />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] } as any}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 text-muted text-sm md:text-lg leading-relaxed font-medium max-w-2xl">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
