import { Code, Cpu, Radio, ChevronRight, Sparkles, Terminal, Cpu as Chip } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 animate-float delay-300">
        <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30" />
      </div>
      <div className="absolute bottom-32 right-20 animate-float delay-700">
        <div className="w-4 h-4 rounded-full bg-purple-500/20 border border-purple-500/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Animated avatar with glow effect */}
          <div className="mb-10 animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-70 animate-pulse" />
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border-4 border-gray-800 flex items-center justify-center mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
                <div className="relative flex items-center justify-center w-full h-full">
                  <span className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    NR
                  </span>
                </div>
                <div className="absolute bottom-2 right-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-ping" />
                </div>
              </div>
            </div>
          </div>

          {/* Main title with gradient */}
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold mb-4 animate-slide-up">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              NICOLAS
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              ROMANINA
            </span>
          </h1>

          {/* Subtitle with animated underline */}
          <div className="relative inline-block mb-8 animate-slide-up delay-100">
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              Ingénieur en Systèmes Électroniques et Informatiques
            </p>
            <div className="absolute -bottom-2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </div>

          {/* Skills tags with hover effects */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-slide-up delay-200 max-w-3xl mx-auto">
            {[
              { icon: <Terminal className="w-5 h-5" />, label: "Développement Fullstack", color: "text-blue-400", bg: "from-blue-500/10 to-blue-600/10", border: "border-blue-500/20" },
              { icon: <Chip className="w-5 h-5" />, label: "Systèmes Embarqués", color: "text-purple-400", bg: "from-purple-500/10 to-purple-600/10", border: "border-purple-500/20" },
              { icon: <Radio className="w-5 h-5" />, label: "Traitement des Signaux", color: "text-green-400", bg: "from-green-500/10 to-green-600/10", border: "border-green-500/20" },
            ].map((skill, index) => (
              <div
                key={index}
                className="group relative flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.bg} ${skill.border} border`}>
                  <div className={skill.color}>{skill.icon}</div>
                </div>
                <span className="text-gray-300 group-hover:text-white font-medium">
                  {skill.label}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>

          {/* CTA Buttons with modern design */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up delay-300">
            <a
              href="#about"
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center gap-3"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
              <span className="text-white font-semibold text-lg">Découvrir mon parcours</span>
              <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#ai"
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 border border-gray-800 hover:border-gray-700 flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-gray-300 group-hover:text-white font-semibold text-lg">
                Parler avec mon IA
              </span>
            </a>
          </div>

          {/* Personal info with animated dots */}
          <div className="inline-flex items-center gap-6 text-gray-400 animate-slide-up delay-400 px-6 py-4 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>26 ans</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-600" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Célibataire</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-600" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Antananarivo, Madagascar</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Add these styles for the animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .bg-grid {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
}