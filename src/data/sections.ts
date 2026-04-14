import { Briefcase, Gamepad2, Globe, Mail, UserRound } from 'lucide-react';
import type { SectionItem } from '../types/section';

export const sections: SectionItem[] = [
  {
    id: 'career',
    storeName: 'TECH LAB',
    title: 'Professional Career',
    subtitle: 'Experience, skills, and shipped products.',
    description:
      'A section to show your journey, technologies, case studies, and professional direction.',
    icon: Briefcase,
  },
  {
    id: 'bio',
    storeName: 'NIGHT ROOM',
    title: 'Bio',
    subtitle: 'Your story, style, and creative identity.',
    description:
      'A personal section to introduce who you are, what drives you, and how you think.',
    icon: UserRound,
  },
  {
    id: 'projects',
    storeName: 'PIXEL ARCADE',
    title: 'Projects',
    subtitle: 'Featured builds, experiments, and interactive work.',
    description:
      'A showcase of selected work with visuals, summaries, and direct links.',
    icon: Gamepad2,
  },
  {
    id: 'links',
    storeName: 'LINK CAFE',
    title: 'Websites & Socials',
    subtitle: 'Your platforms, communities, and online presence.',
    description:
      'A clean hub for GitHub, LinkedIn, social media, and anything worth visiting.',
    icon: Globe,
  },
  {
    id: 'contact',
    storeName: 'HOTLINE',
    title: 'Contact',
    subtitle: 'A direct way to start a conversation.',
    description:
      'A focused section for email, forms, work inquiries, and collaborations.',
    icon: Mail,
  },
];