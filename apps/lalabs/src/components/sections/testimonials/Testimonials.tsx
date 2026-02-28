import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
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

export const Testimonials = ({ currentLang }: { currentLang: 'en' | 'es' }) => {
    const t = ui[currentLang].testimonials;
    const { ref, isVisible } = useIntersectionObserver();
    const avatars = [
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80",
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80"
    ];

    return (
        <section ref={ref} className="py-24 md:py-32 px-6 max-w-6xl mx-auto overflow-hidden">
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
            >
                <div className="flex justify-center mb-6">
                    <span className="bg-brand/10 text-brand px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                        <Sparkles size={12} /> {t.eyebrow}
                    </span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-ink leading-tight tracking-tight text-balance">
                    {t.title1}<br />
                    <span className="text-brand opacity-80">{t.title2}</span>
                </h2>
                <p className="text-muted text-base md:text-lg font-medium tracking-tight opacity-70">{t.subtitle}</p>
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
                {[t.t1, t.t2, t.t3, t.t4].map((text, i) => (
                    <motion.div key={i} variants={fadeUp} className="group bg-white border border-border/50 p-8 md:p-10 rounded-2xl transition-all duration-300 hover:shadow-premium flex flex-col justify-between">
                        <div className="mb-8">
                            <Quote size={32} className="text-brand/10 mb-4 group-hover:text-brand transition-all duration-300" />
                            <p className="text-base md:text-lg leading-relaxed text-ink/90 font-medium tracking-tight">{text}</p>
                        </div>
                        <div className="flex items-center gap-4 border-t border-border/50 pt-6 mt-auto">
                            <img src={avatars[i]} alt="Partner" className="w-10 h-10 rounded-lg object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                            <div>
                                <h4 className="font-bold text-base text-ink leading-tight">
                                    {['Julian G.', 'Sophia R.', 'Markus L.', 'Elena V.'][i]}
                                </h4>
                                <span className="text-[9px] font-bold text-muted uppercase tracking-widest opacity-60">Strategy & Vision</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export const TestimonialsSimple = Testimonials;
