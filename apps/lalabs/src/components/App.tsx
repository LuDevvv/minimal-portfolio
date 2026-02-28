import React, { useState } from 'react';
import {
    ChevronDown,
    ArrowRight,
    Search,
    LayoutDashboard,
    Layers,
    CreditCard,
    Users,
    Zap,
    Shield,
    FileText,
    Bell,
    Mail,
    Instagram,
    Youtube,
    Twitter,
    Plus,
    Minus,
    Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const defaultLang = 'en';

export const ui = {
    en: {
        nav: {
            product: 'Platforms',
            pricing: 'Pricing',
            solutions: 'Solutions',
            resources: 'Resources',
            signin: 'Sign in'
        },
        hero: {
            title1: 'Scale without software friction that adapts to your ',
            title2: 'Business',
            subtitle: 'Grow your organization without operational headaches. L.A. Labs centralizes workflows and aligns teams to keep processes smooth.',
            btn1: 'Get started now',
            btn2: 'Explore our platforms',
            loading: 'Loading...'
        },
        features: {
            eyebrow: '• Operational',
            title1: 'Where teams',
            title2: 'get aligned',
            subtitle: "Enterprises don't fail because of talent — they fail because information lives everywhere. L.A. Labs brings structure to collaboration so departments operate as one, not in silos.",
            items: [
                { title: "Process Mapping", desc: "Visualize how work flows across departments" },
                { title: "Role Logic", desc: "Responsibilities stay crystal-clear as teams scale" },
                { title: "Auto Docs", desc: "Processes update themselves as changes happen" },
                { title: "Context Handoff", desc: "Every handover comes with full history & clarity" },
                { title: "Execution Rules", desc: "Ensure tasks follow the same structure every time" },
                { title: "Team Signals", desc: "Notify the right teams at the right moment" },
                { title: "Enforcement", desc: "Ensure every process follows the same company standard" },
                { title: "Enterprise Level", desc: "Built to handle complexity across multiple departments" }
            ]
        },
        execution: {
            eyebrow: '• Execution layer',
            title1: 'Work moves fast and stays',
            title2: 'under control',
            subtitle: 'With connected workflows, trusted data, and built-in safeguards, organizations scale without chaos or guesswork.',
            tabs: ['Azteli', 'FiniquitoRD', 'TikexRD', 'Vora AI'],
            tabContent: {
                'Azteli': 'L.A. Labs connects directly to your restaurant data sources, eliminating exports, duplicated menus, and outdated stock, giving every venue one live, trusted truth to work from.',
                'FiniquitoRD': 'Automate complex labor calculations across your entire HR department. Reduce calculation time by 98% while ensuring 100% compliance with local workforce laws.',
                'TikexRD': 'Event management and high-volume ticket sales built for extreme load. Never let a system crash stop your next big launch.',
                'Vora AI': 'Intelligent agents and advanced AI model integrations designed to automate customer service and empower data parsing.'
            }
        },
        intelligence: {
            eyebrow: '• Workflow Intelligence',
            title1: 'Every customer',
            title2: 'interaction gets smarter',
            subtitle: 'Unify customer signals across every channel and transform them into actionable insights for sales, support, and success.',
            items: [
                { title: 'Unified Inbox', desc: 'All messages from every channel email, chat, social, and tickets flow into one seamless workspace, without switching tools.' },
                { title: 'Handoff to human', desc: 'Automated triage routes conversations to the right teammate instantly, ensuring experts step in precisely when needed.' },
                { title: 'Smart search', desc: 'Get answers instantly from docs, tickets, playbooks, and knowledge base.' },
                { title: 'Context memory', desc: 'Customer history and preferences remain no repeated questions.' },
                { title: 'Resolution Insight', desc: "See what's working, what's slowing teams, and where to optimize." }
            ]
        },
        integrations: {
            eyebrow: '• Smart integrations',
            title1: 'Connect your',
            title2: 'business tools.',
            subtitle: 'L.A. Labs integrates with your platforms, enabling data flow and collaboration in one place.',
            learnMore: 'Learn more'
        },
        testimonials: {
            eyebrow: '• Testimonials',
            title1: 'The results speak for',
            title2: 'themselves',
            subtitle: 'Our multi-tenant architecture and edge-native performance have consistently delivered top results for our partners.',
            t1: "\"Execution became predictable. Everyone knows what's happening, who's responsible, and what comes next no surprises, no gaps, and no last-minute scrambling. Teams can focus on progress.\"",
            t2: "\"It removed the guesswork from collaboration — decisions are now made based on live data, not assumptions\"",
            t3: "\"We stopped firefighting and started planning again. L.A. Labs clarified operations, clear expectations, transparent ownership, and smooth workflows without troubleshooting.\"",
            t4: "\"The transparency and control are unmatched fast execution without losing governance.\""
        },
        faq: {
            eyebrow: "• FAQ's",
            title1: "We're here to make",
            title2: "things clear",
            subtitle: "Find quick answers about how L.A. Labs works and how we help your team operate more efficiently.",
            items: [
                { q: "What makes L.A. Labs different from other B2B SaaS platforms?", a: "We build custom, edge-native micro-SaaS and complete ecosystems instead of just loose apps, ensuring real scalability and zero friction." },
                { q: "How does the platform integrate with the tools my team already uses?", a: "We offer native integrations using industry standards, plus a robust API for custom connections." },
                { q: "Is there a limit to the number of users, projects, or data we can manage?", a: "Our enterprise plans are built for unlimited scale, ensuring your performance never dips as you grow." },
                { q: "How secure is L.A. Labs and what compliance standards does it support?", a: "We use edge platforms like Cloudflare and follow top-tier security standards, keeping our client data strictly isolated and secure." },
                { q: "Can we customize features or workflows to match our business needs?", a: "Absolutely. We are a software foundry, meaning we build the exact custom systems your business requires." },
                { q: "Does L.A. Labs offer onboarding, training, and customer support for teams?", a: "Every enterprise customer gets a dedicated success manager and priority support directly from our engineering team." }
            ]
        },
        footer: {
            tagline: 'Helping teams work as one, not in silos.',
            rights: '© 2024 L.A. Labs. All rights reserved.',
            contact: 'hello@lalabs.com',
            disclaimer: 'L.A. Labs is a software innovation studio located in the Dominican Republic.'
        }
    },
    es: {
        nav: {
            product: 'Plataformas',
            pricing: 'Precios',
            solutions: 'Soluciones',
            resources: 'Recursos',
            signin: 'Ingresar'
        },
        hero: {
            title1: 'Escala sin fricción con software adaptado a tu ',
            title2: 'Negocio',
            subtitle: 'Haz crecer tu organización sin dolores de cabeza operativos. L.A. Labs centraliza flujos de trabajo de manera eficiente.',
            btn1: 'Empieza ahora',
            btn2: 'Explora plataformas',
            loading: 'Cargando...'
        },
        features: {
            eyebrow: '• Operacional',
            title1: 'Donde los equipos',
            title2: 'se alinean',
            subtitle: "Las empresas fallan porque la información está en todas partes. L.A. Labs aporta estructura para que operemos como uno solo.",
            items: [
                { title: "Mapeo de Procesos", desc: "Visualiza cómo fluye el trabajo entre departamentos" },
                { title: "Lógica de Roles", desc: "Responsabilidades claras mientras los equipos escalan" },
                { title: "Documentación Auto", desc: "Los procesos se actualizan al instante" },
                { title: "Traspaso de Contexto", desc: "Cada entrega viene con historial completo" },
                { title: "Reglas de Ejecución", desc: "Asegura que las tareas sigan la misma estructura" },
                { title: "Señales de Equipo", desc: "Notifica a los equipos correctos en el momento preciso" },
                { title: "Cumplimiento", desc: "Garantiza el cumplimiento de los estándares empresariales" },
                { title: "Nivel Enterprise", desc: "Creado para manejar la complejidad departamental" }
            ]
        },
        execution: {
            eyebrow: '• Capa de Ejecución',
            title1: 'El trabajo se mueve rápido y',
            title2: 'bajo control',
            subtitle: 'Con flujos de trabajo conectados y datos confiables, las organizaciones escalan sin caos ni conjeturas.',
            tabs: ['Azteli', 'FiniquitoRD', 'TikexRD', 'Vora AI'],
            tabContent: {
                'Azteli': 'L.A. Labs se conecta directamente a los datos de tu restaurante, eliminando exportaciones y menús desactualizados.',
                'FiniquitoRD': 'Automatiza cálculos laborales complejos. Reduce tiempo en un 98% asegurando cumplimiento total con las leyes locales.',
                'TikexRD': 'Venta de boletos de alto volumen diseñada para carga extrema. Que ningún fallo detenga tu próximo gran evento.',
                'Vora AI': 'Agentes inteligentes e integraciones de modelos IA diseñados para automatizar servicio al cliente.'
            }
        },
        intelligence: {
            eyebrow: '• Inteligencia de Flujos',
            title1: 'Cada interacción',
            title2: 'se vuelve más inteligente',
            subtitle: 'Unifica las señales de los clientes y transórmalas en información útil para soporte y éxito.',
            items: [
                { title: 'Bandeja Unificada', desc: 'Soporte y tickets fluyen en un solo espacio, sin cambiar de pestañas.' },
                { title: 'Traspaso a Humanos', desc: 'Rutas automatizadas para asegurar que los expertos intervengan cuando se requiere.' },
                { title: 'Búsqueda Inteligente', desc: 'Respuestas al instante desde documentos, playbooks y bases de conocimiento.' },
                { title: 'Memoria de Contexto', desc: 'El historial del cliente se mantiene vivo, sin preguntas repetidas.' },
                { title: 'Perspectiva de Resolución', desc: "Mira qué funciona, qué atrasa y dónde podemos optimizar mejor." }
            ]
        },
        integrations: {
            eyebrow: '• Integraciones Inteligentes',
            title1: 'Conecta tus',
            title2: 'herramientas de negocio.',
            subtitle: 'L.A. Labs se integra con tus plataformas, permitiendo fluidez de datos en un solo lugar seguro.',
            learnMore: 'Aprender más'
        },
        testimonials: {
            eyebrow: '• Testimonios',
            title1: 'Los resultados',
            title2: 'hablan por sí mismos',
            subtitle: 'Nuestra arquitectura multi-tenant de alto rendimiento ya ha mostrado grandes resultados para clientes.',
            t1: "\"La ejecución se volvió predecible. Todos saben qué pasa y de quién es la responsabilidad, sin sorpresas ni espacios vacíos.\"",
            t2: "\"Eliminó las suposiciones en nuestra colaboración — las decisiones se toman basadas en datos, no asunciones.\"",
            t3: "\"Paramos de apagar fuegos. L.A. Labs aclaró nuestra operativa y las expectativas empresariales fluyeron naturalmente.\"",
            t4: "\"La transparencia y el control son inigualables. Ejecución rápida sin perder nunca la gobernanza interna.\""
        },
        faq: {
            eyebrow: "• Preguntas Frecuentes",
            title1: "Estamos aquí para",
            title2: "hacerlo claro",
            subtitle: "Respuestas rápidas sobre cómo L.A. Labs trabaja y cómo podemos ayudar a tu equipo a operar mejor.",
            items: [
                { q: "¿En qué se diferencia L.A. Labs de otras agencias/SaaS?", a: "Construimos ecosistemas customizados, Edge-native, super seguros y con las menores fricciones operativas posibles." },
                { q: "¿Cómo se integra la plataforma con otras herramientas?", a: "Ofrecemos integraciones nativas y un backend propio completamente adaptado vía APIs potentes al entorno de tu negocio." },
                { q: "¿Existen límites de usuarios o proyectos manejables?", a: "Nuestros planes Enterprise están creados para escalabilidad ilimitada, garantizando cero decaídas de rendimiento." },
                { q: "¿Qué tan seguro es el sistema entregado?", a: "Construimos bajo infraestructuras como Cloudflare que nos permiten tener los mejores niveles de seguridad modernos." },
                { q: "¿Podemos añadir características nuevas al pasar el tiempo?", a: "Teniendo claro que somos un 'software foundry', iteramos el producto exacto que necesite tu empresa sobre la marcha." },
                { q: "¿Recibimos soporte continuo?", a: "Ofrecemos contratos directos y soporte prioritario desde nuestro propio nivel de ingeniería para tu paz mental." }
            ]
        },
        footer: {
            tagline: 'Ayudando equipos a trabajar juntos, de manera fluida.',
            rights: '© 2024 L.A. Labs. Todos los derechos reservados.',
            contact: 'hola@lalabs.com',
            disclaimer: 'L.A. Labs es un estudio de desarrollo de software innovador ubicado en la República Dominicana.'
        }
    }
};

const Navbar = ({ t, currentLang }: any) => (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <a href={`/${currentLang === 'en' ? '' : 'es'}`} className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-bold">LA</div>
                    <span className="text-xl font-bold tracking-tight">L.A. Labs</span>
                </a>

                <div className="hidden md:flex items-center gap-6">
                    <button className="flex items-center gap-1 text-sm font-medium hover:text-brand transition-colors">
                        {t.nav.product} <ChevronDown size={14} />
                    </button>
                    <button className="text-sm font-medium hover:text-brand transition-colors">{t.nav.pricing}</button>
                    <button className="text-sm font-medium hover:text-brand transition-colors">{t.nav.solutions}</button>
                    <button className="flex items-center gap-1 text-sm font-medium hover:text-brand transition-colors">
                        {t.nav.resources} <ChevronDown size={14} />
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex bg-gray-100 rounded-full p-1 mr-2 text-xs font-semibold">
                    <a href="/" className={`px-2 py-1 rounded-full ${currentLang === 'en' ? 'bg-white shadow text-brand' : 'text-muted hover:text-ink'}`}>EN</a>
                    <a href="/es" className={`px-2 py-1 rounded-full ${currentLang === 'es' ? 'bg-white shadow text-brand' : 'text-muted hover:text-ink'}`}>ES</a>
                </div>
                <button className="flex items-center gap-1 text-sm font-medium hover:text-brand transition-colors">
                    {t.nav.signin} <ArrowRight size={14} />
                </button>
            </div>
        </div>
    </nav>
);

const Hero = ({ t }: any) => (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern -z-10" />
        <div className="max-w-4xl mx-auto text-center">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8"
            >
                {t.hero.title1}<span className="text-brand">{t.hero.title2}</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
                {t.hero.subtitle}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
            >
                <button className="bg-brand text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand/90 transition-all shadow-lg shadow-brand/20">
                    {t.hero.btn1}
                </button>
                <button className="bg-white border border-border px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                    {t.hero.btn2}
                </button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative max-w-5xl mx-auto rounded-2xl border border-border bg-white shadow-2xl overflow-hidden"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-ink text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl">
                        <span className="text-sm font-medium">{t.hero.loading}</span>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                </div>

                <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                    alt="Dashboard Preview"
                    className="w-full h-auto opacity-40 blur-[2px]"
                    referrerPolicy="no-referrer"
                />
            </motion.div>
        </div>
    </section>
);

const FeaturesGrid = ({ t }: any) => {
    const icons = [
        <Zap size={20} />, <Users size={20} />, <FileText size={20} />, <Layers size={20} />,
        <CreditCard size={20} />, <Bell size={20} />, <Shield size={20} />, <LayoutDashboard size={20} />
    ];

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="mb-16">
                <span className="text-brand font-semibold text-sm tracking-wider uppercase mb-4 block">{t.features.eyebrow}</span>
                <h2 className="text-4xl md:text-5xl font-serif mb-6">{t.features.title1}<br />{t.features.title2}</h2>
                <p className="text-muted max-w-xl">{t.features.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {t.features.items.map((f: any, i: number) => (
                    <div key={i} className="group p-6 rounded-2xl border border-transparent hover:border-border hover:bg-gray-50 transition-all">
                        <div className="w-10 h-10 bg-brand-light text-brand rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            {icons[i] || <Zap size={20} />}
                        </div>
                        <h3 className="font-semibold mb-2">{f.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const ExecutionLayer = ({ t }: any) => {
    const [activeTab, setActiveTab] = useState(t.execution.tabs[0]);

    return (
        <section className="py-24 px-6 bg-gray-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-brand font-semibold text-sm tracking-wider uppercase mb-4 block">{t.execution.eyebrow}</span>
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">{t.execution.title1}<br />{t.execution.title2}</h2>
                    <p className="text-muted max-w-2xl mx-auto">{t.execution.subtitle}</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="w-full lg:w-48 flex flex-col gap-2">
                        {t.execution.tabs.map((tab: string) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === tab
                                    ? 'bg-white text-brand shadow-sm border border-border'
                                    : 'text-muted hover:text-ink'
                                    }`}
                            >
                                {activeTab === tab && <span className="mr-2">•</span>}
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex-1 bg-white rounded-3xl border border-border p-8 md:p-12 shadow-xl w-full">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-8 bg-brand-light rounded-lg flex items-center justify-center">
                                <Zap size={18} className="text-brand" />
                            </div>
                            <h3 className="text-2xl font-serif">{activeTab}</h3>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 border border-border mb-8 overflow-hidden h-64 flex items-center justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                                alt={activeTab}
                                className="w-full h-auto rounded-xl shadow-sm object-cover"
                                referrerPolicy="no-referrer"
                            />
                        </div>

                        <p className="text-muted leading-relaxed max-w-2xl">
                            {t.execution.tabContent[activeTab]}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const WorkflowIntelligence = ({ t }: any) => (
    <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <span className="text-brand font-semibold text-sm tracking-wider uppercase mb-4 block">{t.intelligence.eyebrow}</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">{t.intelligence.title1}<br />{t.intelligence.title2}</h2>
            <p className="text-muted max-w-2xl mx-auto">{t.intelligence.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Unified Inbox */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-border p-8 hover:shadow-lg transition-all">
                <div className="h-48 bg-gray-50 rounded-2xl mb-6 overflow-hidden flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600" alt="Inbox" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.intelligence.items[0].title}</h3>
                <p className="text-muted text-sm">{t.intelligence.items[0].desc}</p>
            </div>

            {/* Handoff to human */}
            <div className="bg-white rounded-3xl border border-border p-8 hover:shadow-lg transition-all">
                <div className="h-48 bg-gray-50 rounded-2xl mb-6 overflow-hidden flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" alt="Handoff" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.intelligence.items[1].title}</h3>
                <p className="text-muted text-sm">{t.intelligence.items[1].desc}</p>
            </div>

            {/* Smart Search */}
            <div className="bg-white rounded-3xl border border-border p-8 hover:shadow-lg transition-all">
                <div className="h-48 bg-gray-50 rounded-2xl mb-6 overflow-hidden flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <Search size={48} className="text-brand/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 border-2 border-brand rounded-full animate-pulse" />
                        </div>
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{t.intelligence.items[2].title}</h3>
                <p className="text-muted text-sm">{t.intelligence.items[2].desc}</p>
            </div>

            {/* Context memory */}
            <div className="bg-white rounded-3xl border border-border p-8 hover:shadow-lg transition-all">
                <div className="h-48 bg-gray-50 rounded-2xl mb-6 overflow-hidden flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=400" alt="Memory" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.intelligence.items[3].title}</h3>
                <p className="text-muted text-sm">{t.intelligence.items[3].desc}</p>
            </div>

            {/* Resolution Insight */}
            <div className="bg-white rounded-3xl border border-border p-8 hover:shadow-lg transition-all">
                <div className="h-48 bg-gray-50 rounded-2xl mb-6 overflow-hidden flex items-center justify-center">
                    <div className="flex gap-1 items-end h-[100px]">
                        {[1, 2, 3, 4, 3].map((i, idx) => <div key={idx} className="w-8 bg-brand rounded-t-lg" style={{ height: `${i * 20}px` }} />)}
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{t.intelligence.items[4].title}</h3>
                <p className="text-muted text-sm">{t.intelligence.items[4].desc}</p>
            </div>
        </div>
    </section>
);

const Integrations = ({ t }: any) => (
    <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
                <span className="text-brand font-semibold text-sm tracking-wider uppercase mb-4 block">{t.integrations.eyebrow}</span>
                <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">{t.integrations.title1}<br />{t.integrations.title2}</h2>
                <p className="text-muted text-lg mb-8 max-w-md">{t.integrations.subtitle}</p>
                <button className="flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all">
                    {t.integrations.learnMore} <ArrowRight size={18} />
                </button>
            </div>

            <div className="flex-1 w-full">
                <div className="bg-white rounded-3xl border border-border p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-3xl rounded-full" />
                    <div className="space-y-4 relative z-10">
                        {[
                            { name: 'OpenAI / Anthropic', desc: 'Secure AI Compute', icon: <Zap size={16} /> },
                            { name: 'Cloudflare', desc: 'Edge Performance', icon: <Search size={16} />, active: true },
                            { name: 'Lemon Squeezy', desc: 'Global Merchant of Record', icon: <CreditCard size={16} /> },
                            { name: 'Neon / Turso', desc: 'Serverless Databases', icon: <FileText size={16} /> }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${item.active ? 'border-brand bg-brand-light shadow-sm' : 'border-border bg-white'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.active ? 'bg-brand text-white' : 'bg-gray-100 text-muted'}`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm">{item.name}</h4>
                                        <p className="text-xs text-muted">{item.desc}</p>
                                    </div>
                                </div>
                                {item.active && <div className="bg-white px-2 py-1 rounded-md text-[10px] font-bold border border-brand/20 uppercase tracking-widest text-brand">Native</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Testimonials = ({ t }: any) => (
    <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
            <span className="text-brand font-semibold text-sm tracking-wider uppercase mb-4 block">{t.testimonials.eyebrow}</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">{t.testimonials.title1}<br />{t.testimonials.title2}</h2>
            <p className="text-muted max-w-xl">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-ink text-white p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 dot-pattern opacity-5" />
                <Quote size={48} className="text-brand mb-8" />
                <p className="text-xl md:text-2xl leading-relaxed mb-12 relative z-10">{t.testimonials.t1}</p>
                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full border-2 border-brand bg-gray-500 flex items-center justify-center font-bold text-white">AS</div>
                    <div>
                        <h4 className="font-bold">Andri Shevchenko</h4>
                        <p className="text-sm text-white/60">Operations Manager</p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-white border border-border p-8 rounded-3xl">
                    <p className="text-muted mb-8 italic">{t.testimonials.t2}</p>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">RR</div>
                        <div>
                            <h4 className="font-bold text-sm">Ronda Roussey</h4>
                            <p className="text-xs text-muted">Azteli Customer</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-border p-8 rounded-3xl">
                    <p className="text-muted mb-8 italic">{t.testimonials.t3}</p>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">MM</div>
                        <div>
                            <h4 className="font-bold text-sm">Marc Marquez</h4>
                            <p className="text-xs text-muted">Director - FiniquitoRD</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:col-span-2 bg-white border border-border p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
                <p className="text-lg font-medium">{t.testimonials.t4}</p>
                <div className="flex items-center gap-4 shrink-0">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">JK</div>
                    <div>
                        <h4 className="font-bold">Jin Kazama</h4>
                        <p className="text-sm text-muted">Software Architect</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const FAQ = ({ t }: any) => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 dot-pattern -z-10 rotate-12 opacity-20" />
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-brand font-semibold text-sm tracking-wider uppercase mb-4 block">{t.faq.eyebrow}</span>
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">{t.faq.title1}<br />{t.faq.title2}</h2>
                    <p className="text-muted">{t.faq.subtitle}</p>
                </div>

                <div className="space-y-4">
                    {t.faq.items.map((faq: any, i: number) => (
                        <div key={i} className="border border-border rounded-2xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                className="w-full flex items-center justify-between p-6 text-left font-semibold hover:bg-gray-50 transition-all font-sans"
                            >
                                {faq.q}
                                {openIndex === i ? <Minus size={18} className="text-brand shrink-0 ml-2" /> : <Plus size={18} className="text-muted shrink-0 ml-2" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-muted text-sm leading-relaxed font-sans">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer = ({ t }: any) => (
    <footer className="bg-white border-t border-border pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                <div className="max-w-xs">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-bold">LA</div>
                        <span className="text-xl font-bold tracking-tight">L.A. Labs</span>
                    </div>
                    <p className="text-muted text-sm mb-8">{t.footer.tagline}</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-muted hover:text-brand transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-muted hover:text-brand transition-colors"><Youtube size={20} /></a>
                        <a href="#" className="text-muted hover:text-brand transition-colors"><Instagram size={20} /></a>
                        <a href="mailto:ludevgarcialouis@gmail.com" className="text-muted hover:text-brand transition-colors"><Mail size={20} /></a>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                    <div>
                        <h4 className="font-bold text-sm mb-6">Solutions</h4>
                        <ul className="space-y-4 text-sm text-muted">
                            <li><a href="#" className="hover:text-brand transition-colors">Azteli</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">FiniquitoRD</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">TikexRD</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">Vora AI</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm text-muted">
                            <li><a href="#" className="hover:text-brand transition-colors">Customers</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-muted">
                            <li><a href="#" className="hover:text-brand transition-colors">Features</a></li>
                            <li><a href="/terms" className="hover:text-brand transition-colors">Term of services</a></li>
                            <li><a href="/privacy" className="hover:text-brand transition-colors">Privacy policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-border">
                <p className="text-xs text-muted">{t.footer.rights}</p>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-border">
                    <Mail size={14} className="text-muted" />
                    <span className="text-xs font-medium">ludevgarcialouis@gmail.com</span>
                    <ArrowRight size={14} className="text-muted" />
                </div>
            </div>

            <p className="text-[10px] text-muted text-center mt-12 max-w-3xl mx-auto leading-relaxed opacity-60">
                {t.footer.disclaimer}
            </p>
        </div>
    </footer>
);

export default function LALabsApp({ lang = 'en' }: { lang?: 'en' | 'es' }) {
    const t = ui[lang] || ui.en;

    return (
        <div className="min-h-screen bg-white text-[#0F172A] font-sans">
            <Navbar t={t} currentLang={lang} />
            <main>
                <Hero t={t} />
                <FeaturesGrid t={t} />
                <ExecutionLayer t={t} />
                <WorkflowIntelligence t={t} />
                <Integrations t={t} />
                <Testimonials t={t} />
                <FAQ t={t} />
            </main>
            <Footer t={t} />
        </div>
    );
}
