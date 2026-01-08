import React from 'react';
import { Heart, Laptop, Zap, Sparkles, Target, Globe, BookOpen, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400 tracking-wide">MON PROFIL</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              À Propos
            </span>
            <span className="block text-2xl md:text-3xl font-light text-gray-400 mt-4">
              Passion • Curiosité • Rigueur Scientifique
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 hover:border-blue-500/30 transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Étudiant Passionné</h3>
                  <p className="text-gray-400 text-sm">Master 2 en Systèmes Électroniques et Informatiques</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Passionné par les technologies électroniques et informatiques depuis mon plus jeune âge, 
                je suis actuellement en dernière année de master à l'Université d'Antananarivo. 
                Mon parcours académique m'a permis de développer une solide compréhension théorique 
                et une expérience pratique en développement logiciel, systèmes embarqués et traitement des signaux.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Ce qui me motive : comprendre comment les choses fonctionnent au niveau fondamental 
                et utiliser cette connaissance pour créer des solutions innovantes. 
                Je crois fermement que la meilleure technologie est celle qui résout des problèmes réels 
                de manière élégante et efficace.
              </p>
              
              <div className="mt-8 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-400" />
                  Ma philosophie d'apprentissage
                </h4>
                <p className="text-gray-400 text-sm">
                  "Apprendre en faisant" - Je privilégie l'expérimentation pratique et les projets concrets 
                  pour consolider mes connaissances théoriques. Chaque défi technique est une opportunité 
                  d'apprentissage et d'amélioration.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 hover:border-blue-500/40 transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-md group-hover:blur-xl transition-all duration-500" />
                  <div className="relative p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30">
                    <Laptop className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Approche Technique</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    Je combine une rigueur scientifique acquise en école d'ingénieur 
                    avec une approche pratique orientée résultats. Mes forces :
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-blue-500/20 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      </div>
                      <span className="text-gray-300">
                        <strong>Pensée systémique</strong> : Comprendre les interactions entre composants
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-blue-500/20 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      </div>
                      <span className="text-gray-300">
                        <strong>Apprentissage rapide</strong> : Capacité à maîtriser de nouvelles technologies
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-blue-500/20 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      </div>
                      <span className="text-gray-300">
                        <strong>Résolution de problèmes</strong> : Approche méthodique et analytique
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 hover:border-blue-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Globe className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold">Ouverture Internationale</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Intérêt pour les technologies globales et meilleures pratiques
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 hover:border-purple-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Heart className="w-5 h-5 text-purple-400" />
                  </div>
                  <h4 className="text-white font-semibold">Communauté Tech</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Participation active aux événements et partage de connaissances
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Career Goals */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/30">
              <Target className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Objectifs Professionnels</h3>
              <p className="text-gray-400">À court et moyen terme</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-white font-medium">Court terme (0-2 ans)</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="p-1 rounded-full bg-green-500/20 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>
                  <span>Intégrer une équipe technique innovante en tant qu'ingénieur junior</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="p-1 rounded-full bg-green-500/20 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>
                  <span>Contribuer à des projets concrets en systèmes embarqués ou IoT</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="p-1 rounded-full bg-green-500/20 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>
                  <span>Obtenir des certifications techniques ciblées</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-medium">Moyen terme (2-5 ans)</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="p-1 rounded-full bg-blue-500/20 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </div>
                  <span>Devenir expert technique dans un domaine spécifique (embarqué, IoT, DSP)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="p-1 rounded-full bg-blue-500/20 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </div>
                  <span>Contribuer à l'architecture de systèmes complexes</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="p-1 rounded-full bg-blue-500/20 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </div>
                  <span>Mentorer de nouveaux ingénieurs et partager mes connaissances</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;