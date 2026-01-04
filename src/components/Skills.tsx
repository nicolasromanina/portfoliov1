import { useState } from 'react';
import { Code, Cpu, Radio, Network, Database, Layers, Sparkles, Target, TrendingUp, Zap, Brain, Star, Award, Clock, Users, ChevronRight } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [animateBars, setAnimateBars] = useState(false);

  // Trigger animation on component mount
  useState(() => {
    setTimeout(() => setAnimateBars(true), 300);
  });

  const skillCategories = [
    {
      id: 'development',
      title: 'Développement Logiciel',
      icon: Code,
      color: 'blue',
      description: 'Maîtrise des langages et frameworks modernes pour le développement fullstack et mobile',
      level: 'Expert',
      experience: '5+ années',
      skills: [
        { name: 'Python', level: 90, years: 4, projects: 12 },
        { name: 'JavaScript/TypeScript', level: 85, years: 4, projects: 15 },
        { name: 'C/C++', level: 80, years: 3, projects: 8 },
        { name: 'Java', level: 75, years: 3, projects: 6 },
        { name: 'React/Vue.js', level: 85, years: 3, projects: 10 },
        { name: 'Node.js/Express', level: 80, years: 3, projects: 9 },
      ],
      technologies: ['Django', 'FastAPI', 'Next.js', 'Vite', 'Webpack', 'Jest'],
    },
    {
      id: 'embedded',
      title: 'Systèmes Embarqués',
      icon: Cpu,
      color: 'purple',
      description: 'Conception et programmation de systèmes embarqués et IoT',
      level: 'Avancé',
      experience: '3+ années',
      skills: [
        { name: 'Arduino', level: 85, years: 3, projects: 7 },
        { name: 'FPGA/VHDL', level: 75, years: 2, projects: 4 },
        { name: 'Raspberry Pi', level: 80, years: 3, projects: 6 },
        { name: 'IoT/Protocols', level: 75, years: 2, projects: 5 },
        { name: 'Microcontrôleurs', level: 85, years: 3, projects: 8 },
        { name: 'Circuit Design', level: 70, years: 2, projects: 4 },
      ],
      technologies: ['ESP32', 'STM32', 'FreeRTOS', 'MQTT', 'SPI/I2C', 'KiCad'],
    },
    {
      id: 'signal',
      title: 'Traitement des Signaux',
      icon: Radio,
      color: 'green',
      description: 'Analyse et traitement numérique des signaux avec outils scientifiques',
      level: 'Avancé',
      experience: '3+ années',
      skills: [
        { name: 'MATLAB/Simulink', level: 85, years: 3, projects: 6 },
        { name: 'DSP', level: 80, years: 3, projects: 5 },
        { name: 'Analyse Spectrale', level: 85, years: 3, projects: 7 },
        { name: 'Filtrage Numérique', level: 80, years: 3, projects: 6 },
        { name: 'Transformées', level: 85, years: 3, projects: 5 },
        { name: 'Acquisition de données', level: 75, years: 2, projects: 4 },
      ],
      technologies: ['NumPy', 'SciPy', 'OpenCV', 'LabVIEW', 'FFT', 'FIR/IIR'],
    },
    {
      id: 'networks',
      title: 'Réseaux et Systèmes',
      icon: Network,
      color: 'orange',
      description: 'Administration et sécurisation des infrastructures réseau et serveurs',
      level: 'Intermédiaire',
      experience: '2+ années',
      skills: [
        { name: 'TCP/IP', level: 80, years: 2, projects: 4 },
        { name: 'Linux/Windows Server', level: 85, years: 2, projects: 5 },
        { name: 'Active Directory', level: 75, years: 1, projects: 3 },
        { name: 'Cisco/Routing', level: 70, years: 1, projects: 2 },
        { name: 'VLANs', level: 75, years: 2, projects: 3 },
        { name: 'VMware', level: 70, years: 1, projects: 2 },
      ],
      technologies: ['DNS', 'DHCP', 'Firewalls', 'VPN', 'Wireshark', 'Nginx'],
    },
    {
      id: 'databases',
      title: 'Bases de Données',
      icon: Database,
      color: 'red',
      description: 'Conception et optimisation de bases de données relationnelles et NoSQL',
      level: 'Avancé',
      experience: '3+ années',
      skills: [
        { name: 'PostgreSQL', level: 85, years: 3, projects: 8 },
        { name: 'MySQL', level: 80, years: 3, projects: 7 },
        { name: 'MongoDB', level: 75, years: 2, projects: 5 },
        { name: 'SQL', level: 90, years: 4, projects: 10 },
        { name: 'Redis', level: 70, years: 1, projects: 3 },
      ],
      technologies: ['Indexing', 'Query Optimization', 'ACID', 'CAP', 'ORM', 'Migrations'],
    },
    {
      id: 'tools',
      title: 'Outils et Méthodologies',
      icon: Layers,
      color: 'cyan',
      description: 'Méthodologies de développement et outils de productivité',
      level: 'Expert',
      experience: '4+ années',
      skills: [
        { name: 'Git/GitHub', level: 90, years: 4, projects: 20 },
        { name: 'Docker', level: 80, years: 2, projects: 8 },
        { name: 'CI/CD', level: 75, years: 2, projects: 6 },
        { name: 'Agile/Scrum', level: 80, years: 3, projects: 10 },
        { name: 'Testing', level: 75, years: 2, projects: 7 },
      ],
      technologies: ['Jenkins', 'GitLab CI', 'Jira', 'Confluence', 'Postman', 'VS Code'],
    },
  ];

  const colorClasses = {
    blue: {
      gradient: 'from-blue-500 to-cyan-500',
      light: 'from-blue-500/20 to-cyan-500/20',
      text: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      bar: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      badge: 'bg-blue-500/20 text-blue-300',
    },
    purple: {
      gradient: 'from-purple-500 to-pink-500',
      light: 'from-purple-500/20 to-pink-500/20',
      text: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      bar: 'bg-gradient-to-r from-purple-500 to-pink-500',
      badge: 'bg-purple-500/20 text-purple-300',
    },
    green: {
      gradient: 'from-green-500 to-emerald-500',
      light: 'from-green-500/20 to-emerald-500/20',
      text: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      bar: 'bg-gradient-to-r from-green-500 to-emerald-500',
      badge: 'bg-green-500/20 text-green-300',
    },
    orange: {
      gradient: 'from-orange-500 to-amber-500',
      light: 'from-orange-500/20 to-amber-500/20',
      text: 'text-orange-400',
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/30',
      bar: 'bg-gradient-to-r from-orange-500 to-amber-500',
      badge: 'bg-orange-500/20 text-orange-300',
    },
    red: {
      gradient: 'from-red-500 to-rose-500',
      light: 'from-red-500/20 to-rose-500/20',
      text: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'border-red-500/30',
      bar: 'bg-gradient-to-r from-red-500 to-rose-500',
      badge: 'bg-red-500/20 text-red-300',
    },
    cyan: {
      gradient: 'from-cyan-500 to-teal-500',
      light: 'from-cyan-500/20 to-teal-500/20',
      text: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      bar: 'bg-gradient-to-r from-cyan-500 to-teal-500',
      badge: 'bg-cyan-500/20 text-cyan-300',
    },
  };

  const filters = [
    { id: null, label: 'Toutes les compétences', icon: Layers },
    { id: 'development', label: 'Développement', icon: Code },
    { id: 'embedded', label: 'Embarqué', icon: Cpu },
    { id: 'signal', label: 'Traitement Signal', icon: Radio },
    { id: 'networks', label: 'Réseaux', icon: Network },
    { id: 'databases', label: 'Bases de données', icon: Database },
  ];

  const filteredCategories = activeCategory 
    ? skillCategories.filter(cat => cat.id === activeCategory)
    : skillCategories;

  const overallStats = [
    { label: 'Années d\'Expérience', value: '5+', icon: Clock, color: 'blue' },
    { label: 'Projets Réalisés', value: '40+', icon: Target, color: 'purple' },
    { label: 'Technologies Maîtrisées', value: '50+', icon: Layers, color: 'green' },
    { label: 'Certifications', value: '8+', icon: Award, color: 'orange' },
  ];

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Background effects */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-purple-500/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
              Expertise Technique
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Compétences
            </span>
            <br />
            <span className="text-3xl md:text-4xl font-light text-gray-400">
              & Domaines d'Expertise
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {overallStats.map((stat, index) => (
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
            <h3 className="text-lg font-semibold text-white">Filtrer par domaine</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeCategory === filter.id;
              
              return (
                <button
                  key={filter.id || 'all'}
                  onClick={() => setActiveCategory(filter.id)}
                  className={`group flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-300 border border-gray-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{filter.label}</span>
                  {isActive && (
                    <ChevronRight className="w-4 h-4 transform rotate-90" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredCategories.map((category) => {
            const colors = colorClasses[category.color as keyof typeof colorClasses];
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="group"
              >
                <div className="relative h-full rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.light} opacity-20`} />
                  
                  {/* Skill card */}
                  <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-800 p-8 hover:border-gray-700 transition-all duration-500">
                    {/* Card header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colors.gradient} opacity-20 blur-md group-hover:blur-xl transition-all duration-500`} />
                          <div className={`relative p-3 rounded-xl bg-gradient-to-br ${colors.light} border ${colors.border}`}>
                            <Icon className={`w-6 h-6 ${colors.text}`} />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{category.title}</h3>
                          <div className="flex items-center gap-3">
                            <span className={`px-2 py-1 text-xs rounded-full ${colors.badge}`}>
                              {category.level}
                            </span>
                            <span className="text-sm text-gray-400 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {category.experience}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${colors.text}`}>
                          {Math.round(category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length)}%
                        </div>
                        <div className="text-xs text-gray-500">Moyenne</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-8">
                      {category.description}
                    </p>

                    {/* Skills list */}
                    <div className="space-y-5 mb-8">
                      {category.skills.map((skill, idx) => (
                        <div key={idx} className="group/skill">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <span className="text-gray-300 font-medium">{skill.name}</span>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-3 h-3 ${
                                      i < Math.floor(skill.level / 20)
                                        ? 'fill-yellow-500 text-yellow-500'
                                        : 'fill-gray-800 text-gray-700'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className={`text-sm ${colors.text}`}>
                                {skill.level}%
                              </span>
                              <span className="text-xs text-gray-500">
                                {skill.years} ans
                              </span>
                            </div>
                          </div>
                          
                          <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div 
                              className={`absolute top-0 left-0 h-full rounded-full ${colors.bar} transition-all duration-1000 ease-out ${
                                animateBars ? 'opacity-100' : 'opacity-0'
                              }`}
                              style={{ 
                                width: animateBars ? `${skill.level}%` : '0%',
                                transitionDelay: `${idx * 100}ms`
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                          </div>
                          
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-gray-500">
                              {skill.projects} projets
                            </span>
                            <span className="text-xs text-gray-500">
                              {skill.years > 1 ? `${skill.years} années` : `${skill.years} année`}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="pt-6 border-t border-gray-800">
                      <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-gray-400" />
                        Technologies associées
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1.5 text-xs rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Legend */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                Échelle de compétence
              </h4>
              <div className="space-y-3">
                {[
                  { level: 'Expert (90-100%)', description: 'Maîtrise complète, capacité à former d\'autres', color: 'text-green-400' },
                  { level: 'Avancé (75-89%)', description: 'Mise en production, résolution de problèmes complexes', color: 'text-blue-400' },
                  { level: 'Intermédiaire (60-74%)', description: 'Projets autonomes, compréhension approfondie', color: 'text-yellow-400' },
                  { level: 'Débutant (40-59%)', description: 'Concepts compris, premiers projets', color: 'text-orange-400' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color} mt-1.5`} />
                    <div>
                      <div className="text-white text-sm font-medium">{item.level}</div>
                      <div className="text-gray-500 text-xs">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" />
                Méthodologie d'évaluation
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5" />
                  <span>Expérience pratique en projets réels</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5" />
                  <span>Complexité des tâches accomplies</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5" />
                  <span>Durée d'utilisation continue</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5" />
                  <span>Capacité à résoudre des problèmes complexes</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-green-400" />
                Développement continu
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Ces compétences sont constamment mises à jour et améliorées à travers des projets personnels, 
                des formations et des contributions open-source.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">Apprentissage continu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}