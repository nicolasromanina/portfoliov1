import React, { useState, useEffect } from 'react';
import { Code, Cpu, Radio, Layers, Target, TrendingUp, Clock, Award, Star, Zap, Brain, Users, ChevronRight } from 'lucide-react';
import { skillCategories, skillLevels } from '../data/skills';

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

const getSkillLevel = (level: number) => {
  return skillLevels.find(l => level >= l.min && level <= l.max) || skillLevels[2];
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateBars(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const iconComponents: { [key: string]: React.ComponentType<any> } = {
    Code, Cpu, Radio, Layers
  };

  const filteredCategories = activeCategory 
    ? skillCategories.filter(cat => cat.id === activeCategory)
    : skillCategories;

  const overallStats = [
    { label: 'Années de Formation', value: '3+', icon: Clock, color: 'blue' },
    { label: 'Projets Académiques', value: '20+', icon: Target, color: 'purple' },
    { label: 'Technologies Explorées', value: '25+', icon: Layers, color: 'green' },
    { label: 'Compétences Techniques', value: '15+', icon: Award, color: 'orange' },
  ];

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <Layers className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
              Compétences Techniques
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Expertises
            </span>
            <br />
            <span className="text-3xl md:text-4xl font-light text-gray-400">
              Acquises en Formation
            </span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {overallStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-600/10 border border-${stat.color}-500/30`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-400`} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredCategories.map((category) => {
            const colors = colorClasses[category.color];
            const Icon = iconComponents[category.icon];
            const averageLevel = Math.round(
              category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length
            );

            return (
              <div key={category.id} className="group">
                <div className="relative h-full rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.light} opacity-20`} />
                  
                  <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-800 p-8 hover:border-gray-700 transition-all duration-500">
                    {/* Header */}
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
                          {averageLevel}%
                        </div>
                        <div className="text-xs text-gray-500">Niveau moyen</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-8">
                      {category.description}
                    </p>

                    {/* Skills List */}
                    <div className="space-y-5 mb-8">
                      {category.skills.map((skill, idx) => {
                        const levelInfo = getSkillLevel(skill.level);
                        return (
                          <div key={idx} className="group/skill">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <span className="text-gray-300 font-medium">{skill.name}</span>
                                <div className={`text-xs ${levelInfo.color}`}>
                                  {levelInfo.label}
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className={`text-sm ${colors.text}`}>
                                  {skill.level}%
                                </span>
                                <span className="text-xs text-gray-500">
                                  {skill.years} an{skill.years > 1 ? 's' : ''}
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
                            </div>
                            
                            <div className="flex justify-between mt-1">
                              <span className="text-xs text-gray-500">
                                {skill.projects} projet{skill.projects > 1 ? 's' : ''}
                              </span>
                              {skill.description && (
                                <span className="text-xs text-gray-500 truncate max-w-[60%]">
                                  {skill.description}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
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
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                Échelle de compétence
              </h4>
              <div className="space-y-3">
                {skillLevels.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color} mt-1.5`} />
                    <div>
                      <div className="text-white text-sm font-medium">{item.label}</div>
                      <div className="text-gray-500 text-xs">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" />
                Contexte d'acquisition
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5" />
                  <span>Projets académiques et travaux dirigés</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5" />
                  <span>Auto-formation et projets personnels</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5" />
                  <span>Compétitions et challenges techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5" />
                  <span>Veille technologique continue</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-green-400" />
                Perspectives d'évolution
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Ces compétences sont en constante évolution à travers des projets complexes, 
                des certifications ciblées et une pratique régulière.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">En progression continue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;