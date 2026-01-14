
// Add React import to use React.ReactNode type
import React from 'react';

export type Theme = 'light' | 'dark';

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  role: string;
  outcome: string;
  image: string;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number; description: string }[];
}

export interface Service {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}