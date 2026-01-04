import { GraduationCap, BookOpen, Award, Sparkles, TrendingUp, Rocket, Target, ChevronRight, Clock, MapPin, Users } from 'lucide-react';

export default function Education() {
  const education = [
    {
      period: '2025 - 2026',
      degree: 'Master 2 en Ingénierie des Systèmes Électroniques et Informatiques',
      institution: "Université d'Antananarivo (Ankatso)",
      location: 'Madagascar',
      icon: GraduationCap,
      color: 'blue',
      level: 'Master',
      progress: 85,
      details: [
        'Architecture des systèmes embarqués et conception de circuits FPGA',
        'Développement logiciel avancé (Python, C/C++, Java) et génie logiciel',
        'Traitement numérique des signaux avec MATLAB et implémentation temps réel',
        'Intelligence artificielle, machine learning et réseaux de neurones',
        'Systèmes de communication (réseaux sans fil, IoT, protocoles industriels)',
        'Projets de recherche en vision par ordinateur et robotique',
        'Simulation et modélisation de systèmes complexes',
      ],
    },
    {
      period: '2022 - 2023',
      degree: 'Licence en Ingénierie - Physique des Signaux et Systèmes',
      institution: "Université d'Antananarivo (Ankatso)",
      location: 'Madagascar',
      icon: BookOpen,
      color: 'purple',
      level: 'Licence',
      progress: 100,
      details: [
        'Théorie du signal : transformées de Fourier, Laplace, analyse spectrale',
        'Traitement analogique et numérique des signaux (filtrage, échantillonnage, quantification)',
        'Électronique analogique et numérique : amplificateurs, oscillateurs, circuits logiques',
        'Systèmes asservis et automatique : modélisation, stabilité, régulation PID',
        'Programmation scientifique : Python, MATLAB, Scilab pour simulation',
        'Physique des ondes et propagation électromagnétique',
        'Projets pratiques : conception de filtres, analyse de signaux biomédicaux',
        'Instrumentation et acquisition de données',
      ],
    },
    {
      period: '2017',
      degree: 'Baccalauréat Série C (Mathématiques et Sciences Physiques)',
      institution: 'Lycée Tanambe',
      location: 'Toamasina, Madagascar',
      icon: Award,
      color: 'green',
      level: 'Baccalauréat',
      progress: 100,
      details: [
        'Formation scientifique approfondie en mathématiques (algèbre, analyse, géométrie)',
        'Physique : mécanique, électricité, optique, thermodynamique',
        'Chimie : atomistique, chimie organique et minérale',
        'Sciences naturelles et biologie',
        'Développement de la rigueur scientifique et méthodologie expérimentale',
      ],
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
      progress: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    },
    purple: {
      gradient: 'from-purple-500 to-pink-500',
      light: 'from-purple-500/20 to-pink-500/20',
      text: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      hover: 'hover:border-purple-400/50',
      progress: 'bg-gradient-to-r from-purple-500 to-pink-500',
    },
    green: {
      gradient: 'from-green-500 to-emerald-500',
      light: 'from-green-500/20 to-emerald-500/20',
      text: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      hover: 'hover:border-green-400/50',
      progress: 'bg-gradient-to-r from-green-500 to-emerald-500',
    },
  };

  return (
    <section id="education" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Background elements */}
      <div className="absolute top-20 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400 tracking-wider">PARCOURS ACADÉMIQUE</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Formation
            </span>
            <br />
            <span className="text-3xl md:text-4xl font-light text-gray-400">
              & Expertise Académique
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Main timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-green-500/30" />
          
          {/* Education cards */}
          <div className="space-y-12">
            {education.map((edu, index) => {
              const colors = colorClasses[edu.color as keyof typeof colorClasses];
              const Icon = edu.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`group relative flex flex-col md:flex-row items-start gap-8 md:gap-16 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-20">
                    <div className={`relative w-5 h-5 rounded-full bg-gradient-to-r ${colors.gradient} shadow-lg shadow-${edu.color}-500/30`}>
                      <div className="absolute inset-0 animate-ping rounded-full bg-gradient-to-r opacity-20" />
                    </div>
                  </div>

                  {/* Date badge */}
                  <div className={`relative ml-14 md:ml-0 md:w-1/3 ${isEven ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300 font-medium">{edu.period}</span>
                    </div>
                    <div className={`absolute top-1/2 ${isEven ? 'right-0' : 'left-0'} transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r ${isEven ? 'from-gray-800 to-transparent' : 'from-transparent to-gray-800'}`} />
                  </div>

                  {/* Education card */}
                  <div className={`relative flex-1 ml-14 md:ml-0 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className={`group-hover:scale-[1.02] transition-all duration-500 p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border ${colors.border} ${colors.hover} shadow-xl shadow-black/20`}>
                      {/* Card header */}
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                        <div className="flex items-start gap-4">
                          <div className="relative">
                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colors.light} blur-md group-hover:blur-xl transition-all duration-500`} />
                            <div className={`relative p-4 rounded-xl bg-gradient-to-br ${colors.light} border ${colors.border}`}>
                              <Icon className={`w-8 h-8 ${colors.text}`} />
                            </div>
                          </div>
                          
                          <div>
                            <div className="inline-flex items-center gap-2 mb-3">
                              <span className={`px-3 py-1 text-sm font-semibold rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                                {edu.level}
                              </span>
                              <span className="text-sm text-gray-500 flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {edu.location}
                              </span>
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                              {edu.degree}
                            </h3>
                            
                            <div className="flex items-center gap-2 text-lg text-gray-300">
                              <GraduationCap className="w-5 h-5 text-gray-500" />
                              {edu.institution}
                            </div>
                          </div>
                        </div>
                        
                        {/* Progress indicator */}
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <div className={`text-2xl font-bold ${colors.text}`}>{edu.progress}%</div>
                            <div className="text-sm text-gray-500">Progression</div>
                          </div>
                          <div className="w-24">
                            <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${colors.progress} transition-all duration-1000`}
                                style={{ width: `${edu.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Details accordion */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Target className="w-5 h-5 text-gray-400" />
                            Compétences Acquises
                          </h4>
                          <span className="text-sm text-gray-500">
                            {edu.details.length} modules
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {edu.details.map((detail, idx) => (
                            <div
                              key={idx}
                              className="group/detail flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-800/20 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                            >
                              <div className={`p-2 rounded-lg ${colors.bg} ${colors.border} border flex-shrink-0`}>
                                <ChevronRight className={`w-4 h-4 ${colors.text} group-hover/detail:translate-x-1 transition-transform`} />
                              </div>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies tag cloud */}
                      {edu.level === 'Master' && (
                        <div className="mt-8 pt-6 border-t border-gray-800">
                          <div className="flex items-center gap-2 mb-4">
                            <Rocket className="w-5 h-5 text-gray-400" />
                            <span className="text-white font-medium">Domaines de Spécialisation</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {['FPGA', 'Embedded Systems', 'Machine Learning', 'Computer Vision', 'IoT', 'Real-time DSP', 'Robotics'].map((tech, idx) => (
                              <span
                                key={idx}
                                className={`px-3 py-1.5 text-sm rounded-full ${colors.bg} ${colors.text} border ${colors.border} hover:scale-105 transition-all duration-300 cursor-pointer`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats footer */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 hover:border-blue-500/30 transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">3</div>
                <div className="text-gray-400">Diplômes</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              Un parcours académique complet du Baccalauréat au Master
            </p>
          </div>

          <div className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 hover:border-purple-500/30 transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">2</div>
                <div className="text-gray-400">Établissements</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              Université d'Antananarivo et Lycée Tanambe
            </p>
          </div>

          <div className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 hover:border-green-500/30 transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30">
                <Sparkles className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">30+</div>
                <div className="text-gray-400">Compétences</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              Domaines techniques et scientifiques maîtrisés
            </p>
          </div>
        </div>
      </div>

      {/* Grid background style */}
      <style jsx>{`
        .bg-grid {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.02)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
}