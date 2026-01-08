import React from 'react';
import { Heart, Code, GraduationCap, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom'; // Changement ici

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Formation', href: '#education' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Assistant IA', href: '#ai' },
  ];

  const technologies = [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Python',
    'MATLAB',
    'Arduino',
    'FPGA',
  ];

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold">NR</span>
              </div>
              <span className="text-xl font-bold text-white">Nicolas ROMANINA</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Ingénieur en systèmes électroniques et informatiques passionné par l'innovation 
              technologique et la résolution de problèmes complexes.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <GraduationCap className="w-4 h-4" />
              <span>Master 2 - Université d'Antananarivo</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-white font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info & Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informations</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@nicolasromanina.com"
                className="text-gray-400 hover:text-white text-sm block transition-colors"
              >
                contact@nicolasromanina.com
              </a>
              <p className="text-gray-400 text-sm">
                Antananarivo, Madagascar
              </p>
              
              {/* Liens légaux */}
              <div className="pt-4 border-t border-gray-800">
                <h4 className="text-gray-300 font-medium mb-2 text-sm">Légal</h4>
                <div className="space-y-1">
                  <Link 
                    to="/privacy" 
                    className="text-gray-400 hover:text-white text-xs block transition-colors"
                  >
                    Politique de confidentialité
                  </Link>
                  <Link 
                    to="/terms" 
                    className="text-gray-400 hover:text-white text-xs block transition-colors"
                  >
                    Conditions d'utilisation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start gap-2">
              © {new Date().getFullYear()} Nicolas ROMANINA. 
              <span className="hidden md:inline">Tous droits réservés.</span>
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Conçu et développé avec <Heart className="w-3 h-3 inline text-red-500" /> et <Code className="w-3 h-3 inline text-blue-500" />
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Haut de page</span>
            </button>
          </div>
        </div>

        {/* Status */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-gray-300 text-sm">
              Statut : En recherche active de stage de fin d'études
            </span>
          </div>
          <p className="text-gray-500 text-xs mt-2">
            Disponible à partir de Juin 2026 • Stage de 6 mois • Alternance possible
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;