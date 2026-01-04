import { Briefcase, Network, Code2, Calendar, MapPin, Target, Rocket, Users, Award, Zap, TrendingUp, Star } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      period: 'Juillet - Décembre 2025',
      title: 'Stagiaire Développeur Fullstack',
      company: 'Madagascar 3M',
      location: 'Madagascar',
      icon: Code2,
      color: 'blue',
      status: 'Terminé',
      impact: 4,
      missions: [
        'Développement d\'applications web responsives avec React, Vue.js et Angular',
        'Création et optimisation d\'APIs RESTful avec Node.js/Express et Python/Django',
        'Gestion de bases de données relationnelles (PostgreSQL, MySQL) et NoSQL (MongoDB)',
        'Implémentation de systèmes d\'authentification et de gestion des utilisateurs',
        'Intégration de services tiers et APIs externes (paiement, géolocalisation)',
        'Utilisation de Git, Docker et pratiques CI/CD pour déploiement automatisé',
        'Tests unitaires et d\'intégration pour assurer la qualité du code',
        'Collaboration en équipe agile avec sprints et revues de code',
      ],
      technologies: ['JavaScript', 'Python', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'Git'],
      achievements: [
        'Création de 3 applications web complètes',
        'Réduction de 40% du temps de déploiement',
        'Mise en place de tests automatisés'
      ]
    },
    {
      period: 'Mars - Juillet 2022',
      title: 'Stagiaire Réseau et Système',
      company: 'Ministère de la Jeunesse et des Sports (MJS)',
      location: 'Madagascar',
      icon: Network,
      color: 'purple',
      status: 'Terminé',
      impact: 5,
      missions: [
        'Configuration et administration de serveurs Windows Server et Linux (Ubuntu, CentOS)',
        'Gestion d\'Active Directory : création, modification de comptes utilisateurs et groupes',
        'Installation et configuration de switches, routeurs et équipements réseau',
        'Mise en place de VLANs et segmentation réseau pour sécurité optimale',
        'Dépannage et maintenance des postes de travail et périphériques',
        'Sauvegarde et restauration de données critiques',
        'Documentation technique des configurations réseau et procédures',
        'Support technique aux utilisateurs et formation aux outils informatiques',
        'Surveillance de la sécurité réseau et mise à jour des systèmes',
      ],
      technologies: ['Windows Server', 'Linux', 'Active Directory', 'Cisco', 'TCP/IP', 'VMware'],
      achievements: [
        'Optimisation réseau pour 200+ utilisateurs',
        'Mise en place système de sauvegarde automatisé',
        'Formation d\'une équipe de 5 techniciens'
      ]
    },
  ];

  const colorClasses = {
    blue: {
      gradient: 'from-blue-500 to-cyan-500',
      light: 'from-blue-500/20 to-cyan-500/20',
      text: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      hover: 'hover:border-blue-400/50',
      badge: 'bg-blue-500/20 text-blue-300',
    },
    purple: {
      gradient: 'from-purple-500 to-pink-500',
      light: 'from-purple-500/20 to-pink-500/20',
      text: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      hover: 'hover:border-purple-400/50',
      badge: 'bg-purple-500/20 text-purple-300',
    },
  };

  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Background elements */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900/50 via-black/50 to-gray-900/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with animated elements */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <Briefcase className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
              Parcours Professionnel
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Expériences
            </span>
            <br />
            <span className="text-3xl md:text-4xl font-light text-gray-400">
              Professionnelles
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent" />
          
          {/* Experience cards */}
          <div className="space-y-20">
            {experiences.map((exp, index) => {
              const colors = colorClasses[exp.color as keyof typeof colorClasses];
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`group relative flex flex-col lg:flex-row items-start gap-8 lg:gap-16 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot with animation */}
                  <div className="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 z-20">
                    <div className={`relative w-6 h-6 rounded-full bg-gradient-to-r ${colors.gradient} shadow-lg shadow-${exp.color}-500/30`}>
                      <div className="absolute inset-0 animate-ping rounded-full bg-gradient-to-r opacity-20" />
                      <Icon className="w-3 h-3 text-white absolute inset-0 m-auto" />
                    </div>
                  </div>

                  {/* Timeline date */}
                  <div className={`relative ml-14 lg:ml-0 lg:w-1/3 ${isEven ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300 font-medium">{exp.period}</span>
                      <span className={`px-2 py-0.5 text-xs rounded-full ${colors.badge}`}>
                        {exp.status}
                      </span>
                    </div>
                  </div>

                  {/* Experience card */}
                  <div className={`relative flex-1 ml-14 lg:ml-0 ${isEven ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                    <div className={`group-hover:scale-[1.02] transition-all duration-500 p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border ${colors.border} ${colors.hover} shadow-2xl shadow-black/30`}>
                      {/* Card header */}
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                        <div className="flex items-start gap-4">
                          <div className="relative">
                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colors.light} blur-md group-hover:blur-xl transition-all duration-500`} />
                            <div className={`relative p-4 rounded-xl bg-gradient-to-br ${colors.light} border ${colors.border}`}>
                              <Icon className={`w-8 h-8 ${colors.text}`} />
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                                  {exp.title}
                                </h3>
                                <div className="flex items-center gap-2 text-lg text-gray-300">
                                  <Briefcase className="w-5 h-5 text-gray-500" />
                                  {exp.company}
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 mt-1">
                                  <MapPin className="w-4 h-4" />
                                  {exp.location}
                                </div>
                              </div>
                              
                              {/* Impact stars */}
                              <div className="flex flex-col items-end">
                                <div className="flex items-center gap-1 mb-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < exp.impact
                                          ? 'fill-yellow-500 text-yellow-500'
                                          : 'fill-gray-800 text-gray-700'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500">Impact</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Achievements highlight */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                          <Award className="w-5 h-5 text-yellow-400" />
                          <h4 className="text-lg font-semibold text-white">Principales Réalisations</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {exp.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className="group/achievement flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-800/20 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                            >
                              <div className={`p-2 rounded-lg ${colors.bg} ${colors.border} border flex-shrink-0`}>
                                <TrendingUp className={`w-4 h-4 ${colors.text}`} />
                              </div>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {achievement}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Missions section */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                          <Target className="w-5 h-5 text-gray-400" />
                          <h4 className="text-lg font-semibold text-white">Missions et Responsabilités</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {exp.missions.map((mission, idx) => (
                            <div
                              key={idx}
                              className="group/mission flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-gray-900/20 to-gray-800/10 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
                            >
                              <div className={`p-2 rounded-lg ${colors.bg} ${colors.border} border flex-shrink-0 mt-0.5`}>
                                <Zap className={`w-4 h-4 ${colors.text}`} />
                              </div>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {mission}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies stack */}
                      <div className="pt-6 border-t border-gray-800">
                        <div className="flex items-center gap-2 mb-4">
                          <Rocket className="w-5 h-5 text-gray-400" />
                          <h4 className="text-lg font-semibold text-white">Stack Technologique</h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {exp.technologies.map((tech, idx) => (
                            <div
                              key={idx}
                              className={`group/tech relative px-4 py-2.5 rounded-full ${colors.bg} border ${colors.border} hover:scale-105 transition-all duration-300 cursor-pointer`}
                            >
                              <span className={`${colors.text} text-sm font-medium`}>
                                {tech}
                              </span>
                              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${colors.gradient} opacity-0 group-hover/tech:opacity-10 transition-opacity duration-300`} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills summary */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/30">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Collaboration & Agilité</h3>
                <p className="text-gray-400 text-sm">Travail d'équipe et méthodologies modernes</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Agile/Scrum', 'Git Workflow', 'Code Reviews', 'CI/CD', 'Documentation'].map((skill) => (
                <span key={skill} className="px-3 py-1.5 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/30">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">8+</div>
                <div className="text-gray-400">Projets</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">Réalisés pendant les stages</p>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30">
                <Award className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-gray-400">Technologies</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">Maîtrisées en environnement pro</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <span className="text-gray-400">En recherche de nouvelles opportunités</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}