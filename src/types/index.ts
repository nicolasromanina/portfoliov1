export interface Skill {
  name: string;
  level: number; // 0-100
  years: number;
  projects: number;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'cyan';
  description: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  experience: string;
  skills: Skill[];
  technologies: string[];
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  location: string;
  icon: string;
  color: 'blue' | 'purple';
  status: 'Terminé' | 'En cours';
  impact: number; // 1-5
  duration: string;
  team: string;
  missions: string[];
  technologies: string[];
  achievements: string[];
  context?: string; // Problème/situation initiale
  results?: string[]; // Résultats quantifiés
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  location: string;
  icon: string;
  color: 'blue' | 'purple' | 'green';
  level: string;
  progress: number;
  details: string[];
  gpa?: string;
  honors?: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'cyan';
  category: 'web' | 'iot' | 'ai' | 'dsp' | 'fpga' | 'robotics' | 'academic';
  status: 'completed' | 'in-progress';
  impact: number;
  duration: string;
  team: string;
  technologies: string[];
  features: string[];
  github: string;
  demo?: string;
  problem?: string; // Problème initial
  solution?: string; // Solution apportée
  results?: string[]; // Résultats obtenus
  challenges?: string[]; // Défis techniques
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
}

export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link?: string;
  color: string;
  bg: string;
  border: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
  color: string;
  bg: string;
  border: string;
}