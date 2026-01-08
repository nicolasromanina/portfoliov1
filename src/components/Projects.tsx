import React, { useState } from 'react';
import { ExternalLink, Github, Globe, Zap, Target, Code, Star, Clock, Users, FolderGit2, Play, Eye, TrendingUp } from 'lucide-react';
import { projects } from '../data/projects';

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
};

const categoryIcons: { [key: string]: React.ComponentType<any> } = {
  dsp: Globe,
  iot: Zap,
  web: Globe,
  ai: Globe,
  fpga: Zap,
  robotics: Zap,
  academic: FolderGit2,
};

const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const categoryCounts = projects.reduce((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <FolderGit2 className="w-5 h-5 text-blue-400" />
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
              Académiques & Personnels
            </span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-white">Filtrer par catégorie</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 ${
                selectedFilter === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-300 border border-gray-800'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium text-sm">Tous ({projects.length})</span>
            </button>
            
            {Object.entries(categoryCounts).map(([category, count]) => {
              const Icon = categoryIcons[category];
              const isActive = selectedFilter === category;
              
              return (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-300 border border-gray-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium text-sm">
                    {category === 'dsp' ? 'Traitement Signal' : 
                     category === 'iot' ? 'IoT' : 
                     category === 'web' ? 'Web' :
                     category === 'academic' ? 'Académique' : category} ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const colors = colorClasses[project.color];
            const Icon = categoryIcons[project.category];

            return (
              <div key={project.id} className="group">
                <div className="relative h-full rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.light} opacity-20`} />
                  
                  <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-800 p-8 hover:border-gray-700 transition-all duration-500">
                    {/* Status Badge */}
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
                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Metadata */}
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

                    {/* Problem/Solution */}
                    {project.problem && (
                      <div className="mb-6">
                        <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4 text-gray-400" />
                          Défi
                        </h4>
                        <p className="text-gray-300 text-sm">{project.problem}</p>
                      </div>
                    )}

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3">Fonctionnalités</h4>
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

                    {/* Results */}
                    {project.results && (
                      <div className="mb-6">
                        <h4 className="text-white font-medium mb-2">Résultats</h4>
                        <ul className="space-y-1">
                          {project.results.slice(0, 2).map((result, idx) => (
                            <li key={idx} className="text-sm text-gray-400">
                              • {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4 text-gray-400" />
                        Technologies
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
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group/btn relative px-4 py-2 rounded-lg ${colors.bg} ${colors.border} border hover:scale-105 transition-all duration-300`}
                        >
                          <div className="flex items-center gap-2">
                            <Github className="w-4 h-4" />
                            <span className="text-sm font-medium">Code</span>
                          </div>
                          <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${colors.gradient} opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300`} />
                        </a>
                        {project.demo && project.demo !== '#' && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group/btn relative px-4 py-2 rounded-lg bg-gradient-to-r ${colors.gradient} hover:opacity-90 transition-all duration-300 flex items-center gap-2`}
                          >
                            <Play className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">Démo</span>
                            <ExternalLink className="w-3 h-3 text-white/50 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">Nouveaux projets en développement</span>
            </div>
            <p className="text-gray-400 max-w-2xl">
              Chaque projet est une opportunité d'appliquer des concepts théoriques 
              et de développer des solutions innovantes. Je suis ouvert aux collaborations 
              sur des projets techniques ambitieux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;