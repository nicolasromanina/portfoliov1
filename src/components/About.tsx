import { Heart, Laptop, Zap, Sparkles, Target, Globe, BookOpen, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Background effects */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400 tracking-wide">MON PARCOURS</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              À Propos
            </span>
            <span className="block text-2xl md:text-3xl font-light text-gray-400 mt-4">
              Passion • Expertise • Innovation
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto rounded-full" />
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Text content */}
          <div className="space-y-8">
            {/* Main bio */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 hover:border-blue-500/30 transition-all duration-500">
              <div className="absolute top-4 right-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Ingénieur Passionné</h3>
                  <p className="text-gray-400 text-sm">Master 2 en Systèmes Électroniques et Informatiques</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Passionné par l'ingénierie électronique et informatique, je suis actuellement étudiant en Master 2 à l'Université d'Antananarivo. Mon parcours m'a permis de développer une expertise solide en développement logiciel, systèmes embarqués et traitement des signaux.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Avec une expérience pratique acquise lors de mes stages au Ministère de la Jeunesse et des Sports et chez Madagascar 3M, j'ai eu l'opportunité de travailler sur des projets concrets alliant théorie académique et applications réelles.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Mon objectif est de contribuer à des projets innovants qui repoussent les limites de la technologie, particulièrement dans les domaines des systèmes embarqués et de l'intelligence artificielle.
              </p>
            </div>

            {/* Experience highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 hover:border-blue-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Globe className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold">Expérience Pratique</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Stages au Ministère de la Jeunesse et des Sports & Madagascar 3M
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 hover:border-purple-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                  </div>
                  <h4 className="text-white font-semibold">Formation Académique</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Université d'Antananarivo - Spécialisation systèmes électroniques
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Cards */}
          <div className="space-y-8">
            {/* Card 1 */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 hover:border-blue-500/40 transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-md group-hover:blur-xl transition-all duration-500" />
                  <div className="relative p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30">
                    <Laptop className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Développement Fullstack</h3>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div key={star} className="w-2 h-2 rounded-full bg-blue-500" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    Maîtrise du développement fullstack avec JavaScript, Python, et des frameworks modernes pour créer des applications web performantes et évolutives.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'Python', 'MongoDB', 'Docker'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 hover:border-purple-500/40 transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-xl blur-md group-hover:blur-xl transition-all duration-500" />
                  <div className="relative p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30">
                    <Cpu className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Systèmes Embarqués</h3>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div key={star} className="w-2 h-2 rounded-full bg-purple-500" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    Expertise en conception et programmation de systèmes embarqués avec Arduino, FPGA, et technologies IoT pour des solutions innovantes.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Arduino', 'FPGA', 'IoT', 'RTOS', 'C/C++'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 hover:border-green-500/40 transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500/20 rounded-xl blur-md group-hover:blur-xl transition-all duration-500" />
                  <div className="relative p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30">
                    <Heart className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Apprentissage Continu</h3>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div key={star} className="w-2 h-2 rounded-full bg-green-500" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    Toujours à la recherche de nouvelles technologies et méthodologies pour améliorer mes compétences et contribuer efficacement à des projets innovants.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['AI/ML', 'Cloud', 'DevOps', 'Cybersécurité', 'UX/UI'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm rounded-full bg-green-500/10 text-green-400 border border-green-500/20"
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

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Projets Réalisés", value: "15+", color: "text-blue-400" },
            { label: "Années d'Études", value: "5", color: "text-purple-400" },
            { label: "Technologies Maîtrisées", value: "15+", color: "text-green-400" },
            { label: "Stages Professionnels", value: "2", color: "text-yellow-400" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/30 to-gray-800/20 border border-gray-800 text-center hover:scale-105 transition-all duration-300"
            >
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}