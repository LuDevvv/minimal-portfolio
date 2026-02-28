import React from 'react';
import { Navbar, Footer } from './layout/Layout';
import { SmoothScroll } from './layout/SmoothScroll';
import {
    Hero,
    Features,
    Execution,
    Intelligence,
    Integrations,
    Testimonials,
    FAQ
} from './sections/Sections';

interface AppProps {
    lang?: 'en' | 'es';
}

export default function LALabsApp({ lang = 'en' }: AppProps) {
    return (
        <SmoothScroll>
            <div className="min-h-screen w-full overflow-x-hidden bg-white text-ink font-sans selection:bg-brand selection:text-white flex flex-col">
                <Navbar currentLang={lang} />
                <main className="grow">
                    <Hero currentLang={lang} />
                    <Features currentLang={lang} />
                    <Execution currentLang={lang} />
                    <Intelligence currentLang={lang} />
                    <Integrations currentLang={lang} />
                    <Testimonials currentLang={lang} />
                    <FAQ currentLang={lang} />
                </main>
                <Footer currentLang={lang} />
            </div>
        </SmoothScroll>
    );
}
