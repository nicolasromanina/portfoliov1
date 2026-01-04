import { useState } from 'react';
import { ExternalLink, Github, Cpu, Radio, Globe, Zap, Sparkles, Target, Code, Terminal, Server, Brain, Eye, ArrowUpRight, Star, FolderGit2, Play, Layers, Clock, Users, TrendingUp } from 'lucide-react';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Système de Traitement du Signal Audio en Temps Réel',
      description: 'Conception et implémentation d\'un système DSP sophistiqué pour l\'analyse et le traitement de signaux audio avec filtrage adaptatif et réduction de bruit intelligent.',
      icon: Radio,
      color: 'blue',
      category: 'dsp',
      status: 'completed',
      impact: 4,
      duration: '3 mois',
      team: 'Solo',
      technologies: ['MATLAB', 'Python', 'NumPy', 'SciPy', 'DSP', 'Signal Processing', 'FFT'],
      features: [
        'Filtres FIR/IIR avancés pour élimination du bruit',
        'Analyse spectrale par transformée de Fourier',
        'Égaliseur graphique 10 bandes paramétrique',
        'Interface GUI pour visualisation temps réel',
        'Algorithmes de réduction de bruit adaptatifs',
      ],
      github: '#',
      demo: '#',
      preview: '/api/placeholder/400/300',
    },
    {
      id: 2,
      title: 'Plateforme IoT de Monitoring Environnemental',
      description: 'Système embarqué complet pour la collecte, transmission et visualisation de données environnementales avec alertes intelligentes et historique.',
      icon: Cpu,
      color: 'purple',
      category: 'iot',
      status: 'completed',
      impact: 5,
      duration: '4 mois',
      team: '3 personnes',
      technologies: ['Arduino', 'ESP32', 'MQTT', 'Node.js', 'React', 'InfluxDB', 'Grafana'],
      features: [
        'Réseau de capteurs sans fil avec ESP32',
        'Communication MQTT sécurisée',
        'Dashboard web temps réel avec graphiques',
        'Alertes automatiques sur seuils critiques',
        'Historique et export de données',
      ],
      github: '#',
      demo: '#',
      preview: '/api/placeholder/400/300',
    },
    {
      id: 3,
      title: 'Application Web de Gestion de Projet Agile',
      description: 'Plateforme fullstack complète pour la gestion de projets avec méthodologie Scrum, collaboration en temps réel et analytiques avancées.',
      icon: Globe,
      color: 'green',
      category: 'web',
      status: 'completed',
      impact: 5,
      duration: '5 mois',
      team: '4 personnes',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Docker', 'Redis', 'JWT'],
      features: [
        'Tableaux Kanban drag-and-drop intuitifs',
        'Gestion des sprints et backlogs détaillée',
        'Notifications temps réel avec WebSockets',
        'Statistiques et rapports de performance',
        'Intégration continue/déploiement continu',
      ],
      github: '#',
      demo: '#',
      preview: '/api/placeholder/400/300',
    },
    {
      id: 4,
      title: 'Robot Suiveur de Ligne Autonome',
      description: 'Conception et programmation d\'un robot mobile autonome avec régulation PID avancée et évitement d\'obstacles intelligent.',
      icon: Zap,
      color: 'orange',
      category: 'robotics',
      status: 'completed',
      impact: 4,
      duration: '2 mois',
      team: '2 personnes',
      technologies: ['Arduino', 'C++', 'Capteurs IR', 'Moteurs DC', 'PID', 'Ultrason'],
      features: [
        'Régulation PID pour trajectoire précise',
        'Détection d\'obstacles par ultrasons',
        'Calibration automatique des capteurs',
        'Mode manuel/automatique avec transition',
        'Batterie LiPo avec monitoring',
      ],
      github: '#',
      demo: '#',
      preview: '/api/placeholder/400/300',
    },
    {
      id: 5,
      title: 'Analyseur de Spectre FFT sur FPGA',
      description: 'Implémentation matérielle optimisée d\'un analyseur de spectre utilisant la transformée de Fourier rapide sur FPGA pour traitement haute vitesse.',
      icon: Radio,
      color: 'red',
      category: 'fpga',
      status: 'in-progress',
      impact: 5,
      duration: '6 mois',
      team: 'Solo',
      technologies: ['VHDL', 'FPGA', 'Vivado', 'FFT', 'ADC', 'VGA', 'Pipeline'],
      features: [
        'FFT pipeline optimisé sur 1024 points',
        'Acquisition ADC haute fréquence (100MHz)',
        'Affichage VGA du spectre en temps réel',
        'Optimisation pour latence minimale',
        'Interface de configuration SPI',
      ],
      github: '#',
      demo: '#',
      preview: '/api/placeholder/400/300',
    },
    {
      id: 6,
      title: 'API REST de Reconnaissance d\'Images par IA',
      description: 'Service web scalé utilisant l\'apprentissage profond pour classification d\'images avec API REST sécurisée et déploiement conteneurisé.',
      icon: Brain,
      color: 'cyan',
      category: 'ai',
      status: 'completed',
      impact: 4,
      duration: '4 mois',
      team: '2 personnes',
      technologies: ['Python', 'TensorFlow', 'Flask', 'Docker', 'CNN', 'Kubernetes', 'Redis'],
      features: [
        'Modèle CNN entraîné sur ImageNet',
        'API REST avec authentification JWT',
        'Traitement batch d\'images asynchrone',
        'Déploiement conteneurisé scalable',
        'Monitoring et logging avancé',
      ],
      github: '#',
      demo: '#',
      preview: '/api/placeholder/400/300',
    },
  ];

  const colorClasses = {
    blue: {
      gradient: 'from-blue-500 to-cyan-500',
      light: 'from-blue-500/20 to-cyan-500/20',
      text: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      badge: 'bg-blue-500/20 text-blue-300',
    },
    purple: {
      gradient: 'from-purple-500 to-pink-500',
      light: 'from-purple-500/20 to-pink-500/20',
      text: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      badge: 'bg-purple-500/20 text-purple-300',
    },
    green: {
      gradient: 'from-green-500 to-emerald-500',
      light: 'from-green-500/20 to-emerald-500/20',
      text: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      badge: 'bg-green-500/20 text-green-300',
    },
    orange: {
      gradient: 'from-orange-500 to-amber-500',
      light: 'from-orange-500/20 to-amber-500/20',
      text: 'text-orange-400',
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/30',
      badge: 'bg-orange-500/20 text-orange-300',
    },
    red: {
      gradient: 'from-red-500 to-rose-500',
      light: 'from-red-500/20 to-rose-500/20',
      text: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'border-red-500/30',
      badge: 'bg-red-500/20 text-red-300',
    },
    cyan: {
      gradient: 'from-cyan-500 to-teal-500',
      light: 'from-cyan-500/20 to-teal-500/20',
      text: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      badge: 'bg-cyan-500/20 text-cyan-300',
    },
  };

  const filters = [
    { id: 'all', label: 'Tous les projets', icon: Layers },
    { id: 'web', label: 'Développement Web', icon: Globe },
    { id: 'iot', label: 'IoT & Embarqué', icon: Cpu },
    { id: 'ai', label: 'IA & Machine Learning', icon: Brain },
    { id: 'dsp', label: 'Traitement Signal', icon: Radio },
    { id: 'fpga', label: 'FPGA & VHDL', icon: Server },
    { id: 'robotics', label: 'Robotique', icon: Zap },
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Background effects */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-purple-500/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
              Portfolio de Projets
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Projets
            </span>
            <br />
            <span className="text-3xl md:text-4xl font-light text-gray-400">
              Réalisations & Innovations
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Projets Complets', value: '6+', icon: FolderGit2, color: 'blue' },
            { label: 'Mois de Développement', value: '24+', icon: Clock, color: 'purple' },
            { label: 'Technologies Maîtrisées', value: '30+', icon: Code, color: 'green' },
            { label: 'Collaborateurs', value: '12+', icon: Users, color: 'orange' },
          ].map((stat, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-600/10 border border-${stat.color}-500/30`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-white">Filtrer par catégorie</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => {
              const Icon = filter.icon;
              const isActive = selectedFilter === filter.id;
              
              return (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`group flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-300 border border-gray-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{filter.label}</span>
                  {isActive && (
                    <div className="w-2 h-2 rounded-full bg-white ml-1" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const colors = colorClasses[project.color as keyof typeof colorClasses];
            const Icon = project.icon;
            const isHovered = hoveredProject === project.id;

            return (
              <div
                key={project.id}
                className="group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                  isHovered ? 'transform scale-[1.02]' : ''
                }`}>
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.light} opacity-20`} />
                  
                  {/* Project card */}
                  <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-800 p-8 hover:border-gray-700 transition-all duration-500">
                    {/* Status badge */}
                    <div className="absolute top-6 right-6">
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.badge} border ${colors.border}`}>
                        {project.status === 'in-progress' ? (
                          <>
                            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                            <span className="text-xs font-medium">En cours</span>
                          </>
                        ) : (
                          <>
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-xs font-medium">Terminé</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-6">
                      <div className="relative inline-block">
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colors.gradient} opacity-20 blur-md group-hover:blur-xl transition-all duration-500`} />
                        <div className={`relative p-4 rounded-xl bg-gradient-to-br ${colors.light} border ${colors.border}`}>
                          <Icon className={`w-8 h-8 ${colors.text}`} />
                        </div>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Project metadata */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {project.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="w-4 h-4" />
                        {project.team}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Star className="w-4 h-4" />
                        Impact: {project.impact}/5
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-gray-400" />
                        Fonctionnalités clés
                      </h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className={`p-0.5 rounded-full ${colors.bg} ${colors.border} border mt-1 flex-shrink-0`}>
                              <div className="w-1.5 h-1.5 rounded-full bg-current" />
                            </div>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4 text-gray-400" />
                        Stack technique
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1.5 text-xs rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className={`px-3 py-1.5 text-xs rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          className={`group/btn relative px-4 py-2 rounded-lg ${colors.bg} ${colors.border} border hover:scale-105 transition-all duration-300`}
                        >
                          <div className="flex items-center gap-2">
                            <Github className="w-4 h-4" />
                            <span className="text-sm font-medium">Code</span>
                          </div>
                          <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${colors.gradient} opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300`} />
                        </a>
                        <a
                          href={project.demo}
                          className={`group/btn relative px-4 py-2 rounded-lg bg-gradient-to-r ${colors.gradient} hover:opacity-90 transition-all duration-300 flex items-center gap-2`}
                        >
                          <Play className="w-4 h-4 text-white" />
                          <span className="text-sm font-medium text-white">Démo</span>
                          <ArrowUpRight className="w-3 h-3 text-white/50 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                      
                      <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                        <Eye className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">En constante évolution avec de nouveaux projets</span>
            </div>
            <p className="text-gray-400 max-w-2xl">
              Chaque projet représente une opportunité d'apprentissage et d'innovation. 
              Je suis toujours ouvert à de nouvelles collaborations et défis techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}