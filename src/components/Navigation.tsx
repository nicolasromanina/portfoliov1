import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  GraduationCap, 
  Briefcase, 
  Code, 
  FolderGit2, 
  MessageSquare, 
  Mail,
  ChevronRight,
  Sparkles,
  Terminal,
  Cpu
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const location = useLocation();

  const navItems = [
    { 
      name: 'Accueil', 
      href: '#home',
      icon: Home,
      badge: null
    },
    { 
      name: 'À Propos', 
      href: '#about',
      icon: User,
      badge: null
    },
    { 
      name: 'Formation', 
      href: '#education',
      icon: GraduationCap,
      badge: 'M2'
    },
    { 
      name: 'Expérience', 
      href: '#experience',
      icon: Briefcase,
      badge: '2'
    },
    { 
      name: 'Compétences', 
      href: '#skills',
      icon: Code,
      badge: '15+'
    },
    { 
      name: 'Projets', 
      href: '#projects',
      icon: FolderGit2,
      badge: '6+'
    },
    { 
      name: 'IA Assistant', 
      href: '#ai',
      icon: MessageSquare,
      badge: '🤖'
    },
    { 
      name: 'Contact', 
      href: '#contact',
      icon: Mail,
      badge: null
    },
  ];

  // Détection du scroll et de la section active
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Détection de la section active
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Navigation pour pages légales
  if (location.pathname !== '/') {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="group flex items-center gap-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg blur-sm group-hover:blur-md transition-all duration-500" />
                <div className="relative w-10 h-10 rounded-lg bg-gray-900/80 border border-gray-800/50 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    NR
                  </span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-white">Nicolas ROMANINA</div>
                <div className="text-xs text-gray-400">Portfolio</div>
              </div>
            </Link>
            
            {/* Navigation légale */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-4">
                {location.pathname === '/privacy' && (
                  <Link 
                    to="/terms" 
                    className="group relative px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Conditions
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                )}
                {location.pathname === '/terms' && (
                  <Link 
                    to="/privacy" 
                    className="group relative px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Confidentialité
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                )}
              </div>
              
              <Link 
                to="/" 
                className="group px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-800/50 hover:border-gray-700/50 text-sm text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-0.5 transition-transform" />
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      {/* Navigation principale */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/30 py-3 shadow-lg shadow-black/10' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo avec effet glassmorphism */}
            <a 
              href="#home" 
              className="group flex items-center gap-3"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-md transition-all duration-500 ${
                  scrolled ? 'opacity-50' : 'opacity-70'
                }`} />
                <div className="relative w-12 h-12 rounded-xl bg-gray-900/60 border border-gray-800/50 flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      NR
                    </span>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                </div>
              </div>
              
              <div className={`transition-all duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-base font-semibold text-white">Nicolas ROMANINA</div>
                <div className="text-xs text-gray-400 flex items-center gap-2">
                  <Cpu className="w-3 h-3" />
                  <span>Ingénieur Systèmes</span>
                </div>
              </div>
            </a>

            {/* Navigation Desktop - Centrée */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 rounded-2xl bg-gray-900/40 border border-gray-800/30 p-1 backdrop-blur-sm">
                {navItems.slice(0, 4).map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.substring(1);
                  
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`group relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        isActive 
                          ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white border border-blue-500/20' 
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(item.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <Icon className={`w-4 h-4 transition-transform ${isActive ? 'scale-110' : ''}`} />
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                          isActive 
                            ? 'bg-blue-500/20 text-blue-300' 
                            : 'bg-gray-800/50 text-gray-400'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                      {isActive && (
                        <div className="absolute -bottom-1 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                      )}
                    </a>
                  );
                })}
                
                {/* Dropdown pour les autres items */}
                <div className="group relative">
                  <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/30 transition-all duration-300">
                    <span>Plus</span>
                    <ChevronRight className="w-3 h-3 group-hover:rotate-90 transition-transform" />
                  </button>
                  
                  <div className="absolute top-full right-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-xl p-2 shadow-2xl shadow-black/30">
                      {navItems.slice(4).map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.href.substring(1);
                        
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            className={`group/item flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                              isActive 
                                ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white' 
                                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              document.getElementById(item.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="w-4 h-4" />
                              <span>{item.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {item.badge && (
                                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                                  isActive 
                                    ? 'bg-blue-500/20 text-blue-300' 
                                    : 'bg-gray-800/50 text-gray-400'
                                }`}>
                                  {item.badge}
                                </span>
                              )}
                              <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                            </div>
                          </a>
                        );
                      })}
                      
                      {/* Séparateur */}
                      <div className="border-t border-gray-800/50 my-2" />
                      
                      {/* Liens légaux */}
                      <div className="px-3 py-2">
                        <div className="text-xs text-gray-500 mb-1">Légal</div>
                        <div className="flex gap-2">
                          <Link 
                            to="/privacy" 
                            className="text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-gray-800/50"
                          >
                            Confidentialité
                          </Link>
                          <Link 
                            to="/terms" 
                            className="text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-gray-800/50"
                          >
                            Conditions
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="#contact" 
                className="group relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail className="w-4 h-4" />
                <span>Me contacter</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
              </a>
              
              {/* Indicateur de section active */}
              <div className="text-xs text-gray-500 px-3 py-1.5 rounded-full bg-gray-900/50 border border-gray-800/50">
                <span className="text-gray-400">{activeSection}</span>
              </div>
            </div>

            {/* Bouton menu mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-12 h-12 rounded-xl bg-gray-900/60 border border-gray-800/50 backdrop-blur-sm text-gray-400 hover:text-white transition-colors group"
              aria-label="Menu"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {isOpen ? (
                  <X className="w-5 h-5 transition-transform duration-300" />
                ) : (
                  <Menu className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>

        {/* Indicateur de progression */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800/30">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
            style={{ 
              width: `${((navItems.findIndex(item => item.href.substring(1) === activeSection) + 1) / navItems.length) * 100}%` 
            }}
          />
        </div>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 pt-20">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="relative h-full overflow-y-auto">
            <div className="absolute top-0 right-0 w-full max-w-sm bg-gray-900/95 backdrop-blur-xl border-l border-gray-800/50 h-full shadow-2xl shadow-black/30">
              {/* Header mobile */}
              <div className="p-6 border-b border-gray-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-gray-800/50 flex items-center justify-center">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      NR
                    </span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">Nicolas ROMANINA</div>
                    <div className="text-sm text-gray-400">Ingénieur Systèmes</div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>En ligne • Disponible pour opportunités</span>
                </div>
              </div>
              
              {/* Items de navigation mobile */}
              <div className="p-4 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.substring(1);
                  
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white border border-blue-500/20' 
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        document.getElementById(item.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          isActive 
                            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20' 
                            : 'bg-gray-800/50'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {item.badge && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            isActive 
                              ? 'bg-blue-500/20 text-blue-300' 
                              : 'bg-gray-800/50 text-gray-400'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                        <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                    </a>
                  );
                })}
              </div>
              
              {/* Section contact mobile */}
              <div className="p-4 border-t border-gray-800/50">
                <a 
                  href="#contact" 
                  className="group flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Mail className="w-4 h-4" />
                  <span>Me contacter</span>
                  <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
              
              {/* Liens légaux mobile */}
              <div className="p-4 border-t border-gray-800/50">
                <div className="text-xs text-gray-500 mb-3">Informations légales</div>
                <div className="grid grid-cols-2 gap-2">
                  <Link 
                    to="/privacy" 
                    className="px-3 py-2.5 rounded-lg bg-gray-800/30 border border-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300 text-sm text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Confidentialité
                  </Link>
                  <Link 
                    to="/terms" 
                    className="px-3 py-2.5 rounded-lg bg-gray-800/30 border border-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300 text-sm text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Conditions
                  </Link>
                </div>
              </div>
              
              {/* Footer mobile */}
              <div className="p-6 border-t border-gray-800/50 mt-auto">
                <div className="text-center text-xs text-gray-500">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Terminal className="w-3 h-3" />
                    <span>Ingénieur en Systèmes Électroniques</span>
                  </div>
                  <p>© {new Date().getFullYear()} Nicolas ROMANINA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;