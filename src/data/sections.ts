import { Briefcase, Gamepad2, Globe, Mail, UserRound } from 'lucide-react';
import type { SectionItem } from '../types/section';

export const sections: SectionItem[] = [
  {
    id: 'career',
    storeName: 'TECH LAB',
    title: 'Career',
    subtitle: 'Product-minded frontend and full-stack engineering.',
    description:
      'I build React interfaces, TypeScript systems, and Java/Spring APIs with a focus on polished flows and maintainable delivery.',
    icon: Briefcase,
  },
  {
    id: 'bio',
    storeName: 'NIGHT ROOM',
    title: 'About Chamfrado',
    subtitle: 'Lohran Cintra: developer, engineer, teacher, and lifelong learner.',
    description:
      'I build software with curiosity, versatility, and a practical mindset shaped by games, teaching, full-stack systems, and real business problems.',
    icon: UserRound,
  },
  {
    id: 'projects',
    storeName: 'PIXEL ARCADE',
    title: 'Projects',
    subtitle: 'Selected builds, experiments, and interactive systems.',
    description:
      'A focused showcase for web products, backend labs, teaching material, and experiments that explain the decisions behind the code.',
    icon: Gamepad2,
  },
  {
    id: 'links',
    storeName: 'LINK CAFE',
    title: 'Websites & Socials',
    subtitle: 'Profiles, repositories, and public channels.',
    description:
      'A compact hub for GitHub, LinkedIn, the main site, and the places where Chamfrado shares work online.',
    icon: Globe,
  },
  {
    id: 'contact',
    storeName: 'HOTLINE',
    title: 'Contact',
    subtitle: 'A direct way to start a conversation.',
    description:
      'This stop is for project ideas, freelance work, product prototypes, technical help, and collaboration requests.',
    icon: Mail,
  },
];
