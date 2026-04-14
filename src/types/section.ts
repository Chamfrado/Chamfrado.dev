import type { LucideIcon } from 'lucide-react';

export type SectionId =
  | 'career'
  | 'bio'
  | 'projects'
  | 'links'
  | 'contact';

export type SectionItem = {
  id: SectionId;
  storeName: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
};