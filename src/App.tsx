import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AIAssistant from './components/AIAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import './styles/globals.css';

// Composant Portfolio (page principale)
const Portfolio: React.FC = () => {
  // Effet pour le smooth scroll des ancres (uniquement sur la page portfolio)
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Effet pour les animations au scroll (uniquement sur la page portfolio)
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observer les sections pour les animations
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <AIAssistant />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

// Layout pour les pages légales (Privacy, Terms)
const LegalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <Routes>
          {/* Page portfolio principale */}
          <Route path="/" element={<Portfolio />} />
          
          {/* Pages légales */}
          <Route 
            path="/privacy" 
            element={
              <LegalLayout>
                <Privacy />
              </LegalLayout>
            } 
          />
          <Route 
            path="/terms" 
            element={
              <LegalLayout>
                <Terms />
              </LegalLayout>
            } 
          />
        </Routes>
        
        {/* Styles globaux inline pour les animations */}
        <style jsx global>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
          
          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          
          .animate-bounce {
            animation: bounce 1s infinite;
          }
          
          @keyframes bounce {
            0%, 100% {
              transform: translateY(-25%);
              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% {
              transform: translateY(0);
              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
          }
          
          .delay-100 {
            animation-delay: 100ms;
          }
          
          .delay-200 {
            animation-delay: 200ms;
          }
          
          .delay-300 {
            animation-delay: 300ms;
          }
          
          .delay-400 {
            animation-delay: 400ms;
          }
          
          .delay-500 {
            animation-delay: 500ms;
          }
          
          .delay-700 {
            animation-delay: 700ms;
          }
          
          /* Smooth scrolling pour toute la page */
          html {
            scroll-behavior: smooth;
          }
          
          /* Personnalisation de la scrollbar */
          ::-webkit-scrollbar {
            width: 10px;
          }
          
          ::-webkit-scrollbar-track {
            background: #1f2937;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #3b82f6;
            border-radius: 5px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #2563eb;
          }
          
          /* Styles pour les sélections de texte */
          ::selection {
            background-color: rgba(59, 130, 246, 0.3);
            color: white;
          }
          
          /* Styles pour les images floues en arrière-plan */
          .bg-grid {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.02)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
          }
          
          /* Amélioration des transitions */
          * {
            transition: background-color 0.3s ease, border-color 0.3s ease;
          }
          
          /* Support pour les appareils mobiles */
          @media (max-width: 768px) {
            .animate-slide-up {
              animation: fade-in 0.6s ease-out forwards;
            }
          }
        `}</style>
      </div>
    </Router>
  );
};

export default App;