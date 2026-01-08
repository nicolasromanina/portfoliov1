import React from 'react';
import { Briefcase, Calendar, MapPin, Target, Award, Zap, Star, Users } from 'lucide-react';
import { experiences, softSkills } from '../data/experience';

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
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <Briefcase className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
              Expérience & Compétences Transversales
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Expériences
            </span>
            <br />
            <span className="text-3xl md:text-4xl font-light text-gray-400">
              Professionnelles & Académiques
            </span>
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12 mb-20">
          {experiences.map((exp, index) => {
            const colors = colorClasses[exp.color];
            const IconComponent = exp.icon === 'Network' ? Users : Briefcase;

            return (
              <div key={index} className="group relative">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                  {/* Left Column - Meta */}
                  <div className="mb-6 lg:mb-0">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300 font-medium">{exp.period}</span>
                      <span className={`px-2 py-0.5 text-xs rounded-full ${colors.badge}`}>
                        {exp.status}
                      </span>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Users className="w-4 h-4" />
                        {exp.team}
                      </div>
                      <div className="flex items-center gap-2">
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
                        <span className="text-sm text-gray-500">Impact</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="lg:col-span-2">
                    <div className={`p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border ${colors.border} hover:scale-[1.02] transition-all duration-500`}>
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${colors.light} border ${colors.border}`}>
                          <IconComponent className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                          <p className="text-lg text-gray-300">{exp.company}</p>
                        </div>
                      </div>

                      {/* Context */}
                      {exp.context && (
                        <div className="mb-6">
                          <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                            <Target className="w-5 h-5 text-gray-400" />
                            Contexte
                          </h4>
                          <p className="text-gray-400">{exp.context}</p>
                        </div>
                      )}

                      {/* Missions */}
                      <div className="mb-6">
                        <h4 className="text-white font-medium mb-3">Responsabilités principales</h4>
                        <ul className="space-y-2">
                          {exp.missions.map((mission, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-400">
                              <div className="p-1 rounded-full bg-blue-500/20 mt-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                              </div>
                              <span>{mission}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      {exp.results && (
                        <div className="mb-6">
                          <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                            <Award className="w-5 h-5 text-yellow-400" />
                            Résultats
                          </h4>
                          <ul className="space-y-2">
                            {exp.results.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-400">
                                <div className="p-1 rounded-full bg-green-500/20 mt-1">
                                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                </div>
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      <div>
                        <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-gray-400" />
                          Technologies utilisées
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1.5 text-sm rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Compétences Transversales
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {softSkills.map((category, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/30">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{category.category}</h4>
                </div>
                
                <p className="text-gray-400 mb-6">{category.description}</p>
                
                <div className="space-y-3">
                  {Array.isArray(category.skills) ? (
                    category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-gray-300 text-sm">{skill}</span>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-gray-300 text-sm">{category.skills}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;