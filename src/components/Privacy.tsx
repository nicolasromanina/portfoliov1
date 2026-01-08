import React from 'react';
import { Shield, Lock, Eye, Database, Mail, Cookie, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation simplifiée */}
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold">NR</span>
              </div>
              <span>Nicolas ROMANINA</span>
            </Link>
            <Link 
              to="/" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              ← Retour au portfolio
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-6">
            <Shield className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Politique de Confidentialité
          </h1>
          <p className="text-gray-400 text-lg">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800">
          <p className="text-gray-300 leading-relaxed">
            Cette politique de confidentialité décrit comment Nicolas ROMANINA collecte, utilise et protège 
            les informations que vous fournissez lors de l'utilisation de ce portfolio en ligne. 
            Votre vie privée est importante pour nous.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">1. Informations collectées</h2>
            </div>
            <div className="ml-14 space-y-4">
              <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">Informations fournies volontairement</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                    <span>Nom et prénom via le formulaire de contact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                    <span>Adresse email pour répondre à vos messages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                    <span>Contenu de vos messages et demandes</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">Informations collectées automatiquement</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                    <span>Adresse IP et informations du navigateur</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                    <span>Pages visitées et durée de visite</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                    <span>Données de performance du site</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/30">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">2. Utilisation des informations</h2>
            </div>
            <div className="ml-14">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800">
                  <h3 className="text-lg font-semibold text-white mb-3">Communication</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Répondre à vos messages et demandes</li>
                    <li>• Vous contacter concernant des opportunités</li>
                    <li>• Envoyer des mises à jour importantes</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800">
                  <h3 className="text-lg font-semibold text-white mb-3">Amélioration du site</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Analyser l'usage pour améliorer l'expérience</li>
                    <li>• Détecter et résoudre les problèmes techniques</li>
                    <li>• Optimiser les performances</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30">
                <Lock className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">3. Protection des données</h2>
            </div>
            <div className="ml-14">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-green-500/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Mesures de sécurité</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-gray-300">Chiffrement HTTPS</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-gray-300">Accès restreint aux données</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-gray-300">Protection contre les attaques</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Durée de conservation</h3>
                    <p className="text-gray-400">
                      Vos données personnelles sont conservées pendant une durée maximale de 2 ans 
                      après notre dernier contact, sauf obligation légale contraire.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-500/10 border border-yellow-500/30">
                <Cookie className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">4. Cookies et traceurs</h2>
            </div>
            <div className="ml-14">
              <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
                <p className="text-gray-400 mb-4">
                  Ce site utilise des cookies essentiels au fonctionnement et des cookies analytiques 
                  pour comprendre l'usage du site.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-white mb-2">Cookies essentiels</h4>
                    <p className="text-gray-400 text-sm">
                      Nécessaires au bon fonctionnement du site. Ils ne peuvent pas être désactivés.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Cookies analytiques</h4>
                    <p className="text-gray-400 text-sm">
                      Optionnels. Ils nous aident à comprendre comment le site est utilisé.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/30">
                <UserCheck className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">5. Vos droits</h2>
            </div>
            <div className="ml-14">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20">
                  <h3 className="text-lg font-semibold text-white mb-3">Accès et rectification</h3>
                  <p className="text-gray-400 text-sm">
                    Vous avez le droit d'accéder à vos données personnelles et de demander leur rectification.
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20">
                  <h3 className="text-lg font-semibold text-white mb-3">Suppression</h3>
                  <p className="text-gray-400 text-sm">
                    Vous pouvez demander la suppression de vos données personnelles dans certaines conditions.
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20">
                  <h3 className="text-lg font-semibold text-white mb-3">Opposition</h3>
                  <p className="text-gray-400 text-sm">
                    Vous pouvez vous opposer au traitement de vos données pour des raisons légitimes.
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-amber-500/5 border border-yellow-500/20">
                  <h3 className="text-lg font-semibold text-white mb-3">Portabilité</h3>
                  <p className="text-gray-400 text-sm">
                    Vous pouvez demander la transmission de vos données à un autre responsable.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
                <p className="text-gray-400">
                  Pour exercer vos droits ou pour toute question concernant cette politique de confidentialité, 
                  contactez-nous à :{' '}
                  <a 
                    href="mailto:contact@nicolasromanina.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    contact@nicolasromanina.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-red-500/20 to-rose-500/10 border border-red-500/30">
                <Eye className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">6. Transparence</h2>
            </div>
            <div className="ml-14">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Modifications de la politique</h3>
                    <p className="text-gray-400">
                      Cette politique de confidentialité peut être mise à jour périodiquement. 
                      La date de la dernière mise à jour sera indiquée en haut de cette page.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Liens externes</h3>
                    <p className="text-gray-400">
                      Ce site peut contenir des liens vers d'autres sites. Nous ne sommes pas responsables 
                      des pratiques de confidentialité de ces sites tiers.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Conformité RGPD</h3>
                    <p className="text-gray-400">
                      Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD) 
                      et aux lois françaises et européennes applicables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer de la page */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Nicolas ROMANINA. Tous droits réservés.
              </p>
            </div>
            
            <div className="flex gap-6">
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Conditions d'utilisation
              </Link>
              <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                Retour au portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;