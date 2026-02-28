import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { ui } from '../../../constants/translations';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any
    }
};

const floatingNode: Variants = {
    initial: { opacity: 0, scale: 0 },
    animate: (i: number) => ({
        opacity: [0.2, 0.4, 0.2],
        scale: [0.8, 1.1, 0.8],
        x: [0, Math.sin(i) * 20, 0],
        y: [0, Math.cos(i) * 20, 0],
        transition: {
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    })
};

export const Hero = ({ currentLang }: { currentLang: 'en' | 'es' }) => {
    const t = ui[currentLang].hero;
    return (
        <section className="relative pt-24 pb-16 md:pt-40 md:pb-32 px-6 overflow-hidden min-h-screen flex items-center justify-center bg-ink">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-60"
                >
                    <source src="/hero-video-dark-background.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-ink/40 bg-linear-to-b from-ink/60 via-transparent to-ink/60" />
            </div>

            {/* Dynamic Background Accents */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 dot-pattern opacity-10" />
                <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full" />

                {/* Floating Data Nodes */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={floatingNode}
                        initial="initial"
                        animate="animate"
                        className="absolute w-1.5 h-1.5 rounded-full bg-white/20 blur-[1px]"
                        style={{
                            top: `${Math.random() * 80 + 10}%`,
                            left: `${Math.random() * 80 + 10}%`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto text-center relative z-10 pt-12 md:pt-20">

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] } as any}
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-tight mb-8 text-white tracking-tight text-balance"
                >
                    {t.title1}<br /><span className="text-brand opacity-90">{t.title2}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] } as any}
                    className="text-white/80 text-lg md:text-2xl max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed font-medium"
                >
                    {t.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] } as any}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-20 md:mb-24"
                >
                    <button className="w-full sm:w-auto bg-brand text-white px-10 py-4.5 rounded-2xl font-bold hover:bg-white hover:text-brand transition-all duration-300 shadow-2xl shadow-brand/20 flex items-center justify-center gap-3 group cursor-pointer text-base">
                        {t.btn1} <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                    </button>
                    <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4.5 rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 text-white shadow-sm cursor-pointer text-base">
                        {t.btn2}
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] } as any}
                    className="relative max-w-4xl mx-auto rounded-4xl md:rounded-[3rem] border border-white/20 bg-white/5 backdrop-blur-sm shadow-2xl shadow-ink/50 overflow-hidden aspect-video group"
                >
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <button className="w-16 h-16 md:w-24 md:h-24 bg-white/20 backdrop-blur-2xl text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-brand transition-all duration-500 cursor-pointer border border-white/30">
                            <Play size={24} className="md:w-8 md:h-8 ml-1" fill="currentColor" />
                        </button>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-br from-brand/20 via-transparent to-indigo-500/20 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-center grayscale opacity-10" />
                        <div className="w-full h-full opacity-30 blur-3xl bg-brand/30 rounded-full" />
                        <div className="absolute inset-6 md:inset-10 rounded-2xl md:rounded-[2.5rem] border border-dashed border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                            <span className="text-white font-display font-black text-2xl md:text-5xl px-8 md:px-16 text-center leading-tight opacity-20 select-none tracking-tighter">REVEAL<br />SHOWREEL</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
