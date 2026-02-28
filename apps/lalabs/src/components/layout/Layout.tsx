import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ui } from '../../constants/translations';
import { useNavbarScroll } from '../../hooks/useNavbarScroll';
import { useScrollTo } from '../../hooks/useScrollTo';

export const Navbar = ({ currentLang }: { currentLang: 'en' | 'es' }) => {
    const t = ui[currentLang].nav;
    const { scrollPosition } = useNavbarScroll();
    const { scrollToSection } = useScrollTo();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    const navItems = ['services', 'pricing', 'work', 'about'] as const;

    const isScrolled = scrollPosition > 20;

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-60 transition-all duration-500 ${isMenuOpen ? 'h-20 bg-transparent' : (isScrolled ? 'h-16 glass border-b border-border/10 shadow-sm' : 'h-20 bg-transparent')
                }`}>
                <div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center justify-between">
                    <button
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setIsMenuOpen(false);
                        }}
                        className="flex items-center gap-3 group cursor-pointer"
                    >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm transition-all duration-300 shadow-lg ${isMenuOpen ? 'bg-white text-ink' : (isScrolled ? 'bg-ink text-white' : 'bg-white text-ink group-hover:bg-brand group-hover:text-white')
                            }`}>LA</div>
                    </button>

                    <div className="hidden md:flex items-center gap-10 lg:gap-14">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`text-[14px] lg:text-[15px] font-bold transition-all tracking-wide cursor-pointer relative group ${isScrolled ? 'text-ink' : 'text-white hover:text-brand'
                                    }`}
                            >
                                {t[item]}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <div className={`hidden md:flex rounded-full p-1.5 text-[12px] font-bold border ${isScrolled ? 'bg-gray-100 border-border/50' : 'bg-white/10 border-white/20'
                            }`}>
                            <a href="/" className={`px-5 py-2 rounded-full transition-all duration-300 ${currentLang === 'en'
                                ? (isScrolled ? 'bg-white shadow-sm text-brand' : 'bg-white shadow-lg text-brand')
                                : (isScrolled ? 'text-muted hover:text-ink' : 'text-white/70 hover:text-white')
                                }`}>EN</a>
                            <a href="/es" className={`px-5 py-2 rounded-full transition-all duration-300 ${currentLang === 'es'
                                ? (isScrolled ? 'bg-white shadow-sm text-brand' : 'bg-white shadow-lg text-brand')
                                : (isScrolled ? 'text-muted hover:text-ink' : 'text-white/70 hover:text-white')
                                }`}>ES</a>
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`w-12 h-12 md:hidden flex items-center justify-center cursor-pointer rounded-full transition-colors ${isMenuOpen ? 'text-white' : (isScrolled ? 'text-ink hover:bg-gray-100' : 'text-white hover:bg-white/10')
                                }`}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 bg-ink md:hidden"
                    >
                        <div className="absolute inset-0 dot-pattern opacity-10" />
                        <div className="h-full flex flex-col px-8 pt-32 pb-12 relative z-10">
                            <div className="flex flex-col gap-8 mb-auto">
                                {navItems.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => {
                                            scrollToSection(item);
                                            setIsMenuOpen(false);
                                        }}
                                        className="text-4xl font-display font-bold text-white text-left"
                                    >
                                        {t[item]}
                                    </button>
                                ))}
                            </div>

                            <div className="flex flex-col gap-8">
                                <div className="flex bg-white/5 rounded-2xl p-2 text-[14px] font-bold border border-white/10">
                                    <a href="/" className={`flex-1 py-4 rounded-xl text-center transition-all duration-300 ${currentLang === 'en' ? 'bg-white shadow-lg text-brand' : 'text-white/60'}`}>ENGLISH</a>
                                    <a href="/es" className={`flex-1 py-4 rounded-xl text-center transition-all duration-300 ${currentLang === 'es' ? 'bg-white shadow-lg text-brand' : 'text-white/60'}`}>ESPAÑOL</a>
                                </div>

                                <button className="bg-brand text-white py-5 rounded-2xl font-bold w-full shadow-2xl flex items-center justify-center gap-3">
                                    {currentLang === 'en' ? 'Start Project' : 'Iniciar Proyecto'} <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export const Footer = ({ currentLang }: { currentLang: 'en' | 'es' }) => {
    const t = ui[currentLang].footer;
    return (
        <footer className="bg-white border-t border-border/20 py-24 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand/20 to-transparent" />
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20 lg:mb-24">
                    <div className="lg:col-span-2">
                        <div className="w-12 h-12 bg-ink text-white rounded-xl flex items-center justify-center font-black text-base mb-8 shadow-lg">LA</div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-ink max-w-sm leading-tight">{t.tagline}</h3>
                        <p className="text-muted text-lg font-medium opacity-60">L.A. Labs • Engineering & Innovation Studio</p>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black text-ink uppercase tracking-[0.4em] mb-8">Work</h4>
                        <ul className="space-y-4">
                            {['Azteli', 'Finiquito', 'Tickets', 'Vora', 'HornyVerse'].map((p) => (
                                <li key={p}>
                                    <a href="#work" className="text-sm font-bold text-muted hover:text-brand transition-all">{p}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black text-ink uppercase tracking-[0.4em] mb-8">Connect</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:hello@lalabs.com" className="text-sm font-bold text-muted hover:text-brand transition-all">hello@lalabs.com</a>
                            </li>
                            <li>
                                <div className="text-sm font-bold text-muted">Dominican Republic • Global Edge</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-[11px] font-bold text-muted/40 uppercase tracking-[0.4em]">
                        {t.rights}
                    </p>
                    <div className="flex gap-10">
                        <a href="/terms" className="text-[11px] font-bold text-muted/40 hover:text-brand uppercase transition-colors">Terms</a>
                        <a href="/privacy" className="text-[11px] font-bold text-muted/40 hover:text-brand uppercase transition-colors">Privacy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
