
import { Project, SkillCategory, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Proyectos', href: '#projects' },
  { label: 'Stack', href: '#skills' },
  { label: 'Experiencia', href: '#about' },
  { label: 'Contacto', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AdrenalinaRD',
    description: 'Plataforma de rifas premium con procesamiento de pagos en tiempo real, gestión avanzada de roles y dashboards de métricas automatizados.',
    image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=800',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'SaaS Analytics Engine',
    description: 'Motor de análisis predictivo para retención de usuarios. Visualización de datos de infraestructura y logs críticos.',
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&q=80&w=800',
    stack: ['React', 'D3.js', 'NestJS', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '3',
    title: 'Inventory Smart Hub',
    description: 'Sistema de gestión de inventario inteligente para e-commerce multicanal con sincronización de stock en la nube.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    stack: ['.NET Core', 'C#', 'AWS S3', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '4',
    title: 'HealthTrack Pro',
    description: 'Aplicación de monitoreo de salud para pacientes crónicos con integración de dispositivos IoT y alertas automáticas.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    stack: ['React Native', 'Node.js', 'Redis', 'WebSockets'],
    liveUrl: '#',
    githubUrl: '#',
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'Layout',
    skills: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: ['Node.js', 'NestJS', 'C#', '.NET', 'ASP.NET', 'GraphQL'],
  },
  {
    title: 'Database & Cloud',
    icon: 'Cloud',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS (S3)', 'DigitalOcean', 'Cloudflare'],
  },
];
