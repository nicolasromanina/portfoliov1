import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    period: 'Mars - Juillet 2022',
    title: 'Stagiaire Réseau et Système',
    company: 'Ministère de la Jeunesse et des Sports (MJS)',
    location: 'Antananarivo, Madagascar',
    icon: 'Network',
    color: 'purple',
    status: 'Terminé',
    impact: 4,
    duration: '5 mois',
    team: 'Équipe de 4 techniciens',
    context: 'Migration de l\'infrastructure réseau vieillissante vers une solution moderne et sécurisée pour 200+ utilisateurs',
    missions: [
      'Configuration et administration de serveurs Windows Server et Linux',
      'Gestion d\'Active Directory : création et gestion de 150+ comptes utilisateurs',
      'Installation et configuration d\'équipements réseau (switches, routeurs)',
      'Mise en place de VLANs pour la segmentation et la sécurité du réseau',
      'Dépannage et maintenance des postes de travail et périphériques',
      'Documentation technique des configurations réseau',
      'Support technique aux utilisateurs et formation aux outils',
    ],
    technologies: ['Windows Server', 'Linux Ubuntu', 'Active Directory', 'Cisco', 'TCP/IP', 'VMware', 'Wireshark'],
    achievements: [
      'Optimisation du temps de réponse réseau de 40%',
      'Mise en place d\'un système de sauvegarde automatisé réduisant les risques de perte de données',
      'Formation de 5 membres du personnel aux procédures de base',
    ],
    results: [
      'Réduction de 30% des tickets de support réseau',
      'Amélioration de la sécurité réseau avec segmentation VLAN',
      'Documentation complète pour la maintenance future',
    ],
  },
  {
    period: 'Juillet - Décembre 2025',
    title: 'Stagiaire Développeur Fullstack',
    company: 'Madagascar 3M',
    location: 'Madagascar 3M',
    icon: 'Code2',
    color: 'blue',
    status: 'Terminé',
    impact: 4,
    duration: '6 mois',
    team: 'Équipe de 3 développeurs',
    context: 'Développement d\'une plateforme de gestion de stock de 3M Publishing pour améliorer l\'efficacité des opérations d\'impression et de distribution.',
    missions: [
      'Conception et développement d\'une API RESTful avec Node.js/Express',
      'Implémentation d\'une interface frontend avec React et TypeScript',
      'Gestion de base de données PostgreSQL avec migrations',
      'Mise en place d\'authentification JWT et autorisations',
      'Tests unitaires et d\'intégration',
      'Documentation technique et utilisateur',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'JWT', 'Jest', 'Docker'],
    achievements: [
      'Développement complet d\'une application fullstack',
      'Code source documenté et maintenable',
    ],
    results: [
      'Application fonctionnelle avec toutes les fonctionnalités requises',
      'Rapport technique de 50 pages',
    ],
  },
];

export const softSkills = [
  {
    category: 'Travail d\'équipe',
    skills: ['Collaboration efficace', 'Communication technique', 'Révision de code', 'Partage de connaissances'],
    description: 'Expérience de travail en équipe sur des projets universitaires et compétitions',
  },
  {
    category: 'Résolution de problèmes',
    skills: ['Analyse technique', 'Débogage systématique', 'Recherche documentaire', 'Pensée algorithmique'],
    description: 'Capacité à aborder des problèmes complexes méthodiquement',
  },
  {
    category: 'Apprentissage continu',
    skills: 'Auto-formation, veille technologique, adaptation rapide, curiosité intellectuelle',
    description: 'Passionné par l\'apprentissage de nouvelles technologies et méthodologies',
  },
];