import React from 'react';
import { FileText, Scale, AlertTriangle, Copyright, ExternalLink, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 mb-6">
            <Scale className="w-8 h-8 text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Conditions d'Utilisation
          </h1>
          <p className="text-gray-400 text-lg">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Avertissement important */}
        <div className="mb-12 p-8 rounded-3xl bg-gradient-to-br from-yellow-500/10 to-amber-500/5 border border-yellow-500/30">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-yellow-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Avertissement important</h3>
              <p className="text-gray-300">
                En accédant et en utilisant ce site portfolio, vous acceptez les présentes conditions d'utilisation. 
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
              </p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/30">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">1. Acceptation des conditions</h2>
            </div>
            <div className="ml-14">
              <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
                <p className="text-gray-400 mb-4">
                  L'utilisation de ce site portfolio implique l'acceptation pleine et entière des conditions générales 
                  d'utilisation ci-après décrites. Ces conditions d'utilisation sont susceptibles d'être modifiées ou 
                  complétées à tout moment.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                    <span>Vous devez avoir au moins 16 ans pour utiliser ce site</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                    <span>Vous êtes responsable de la confidentialité de votre compte</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                    <span>Toute utilisation non autorisée peut entraîner la résiliation de votre accès</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/30">
                <Copyright className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">2. Propriété intellectuelle</h2>
            </div>
            <div className="ml-14">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800">
                  <h3 className="text-lg font-semibold text-white mb-3">Droits d'auteur</h3>
                  <p className="text-gray-400 text-sm">
                    Tous les éléments de ce site (textes, images, vidéos, code source) sont protégés par le droit d'auteur 
                    et sont la propriété de Nicolas ROMANINA, sauf mention contraire.
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800">
                  <h3 className="text-lg font-semibold text-white mb-3">Licence d'utilisation</h3>
                  <p className="text-gray-400 text-sm">
                    Vous pouvez visualiser et télécharger les documents à des fins personnelles et non commerciales, 
                    sous réserve de conserver toutes les mentions de copyright.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">Interdictions</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Copier, reproduire ou redistribuer le contenu sans autorisation</li>
                  <li>• Modifier ou altérer le contenu du site</li>
                  <li>• Utiliser le contenu à des fins commerciales sans autorisation</li>
                  <li>• Supprimer ou altérer les mentions de copyright</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">3. Responsabilités</h2>
            </div>
            <div className="ml-14">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800">
                  <h3 className="text-lg font-semibold text-white mb-3">Limitation de responsabilité</h3>
                  <p className="text-gray-400">
                    Ce site est fourni "tel quel" sans garantie d'aucune sorte. Nicolas ROMANINA ne garantit pas :
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-400">
                    <li>• L'exactitude ou l'exhaustivité des informations présentées</li>
                    <li>• La disponibilité continue et ininterrompue du site</li>
                    <li>• L'absence d'erreurs ou de bugs</li>
                    <li>• La sécurité totale contre les attaques informatiques</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/5 border border-red-500/20">
                  <h3 className="text-lg font-semibold text-white mb-3">Responsabilité de l'utilisateur</h3>
                  <p className="text-gray-400">
                    Vous êtes responsable de l'utilisation que vous faites du site et des informations que vous fournissez 
                    via le formulaire de contact.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-500/10 border border-yellow-500/30">
                <ExternalLink className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">4. Liens externes</h2>
            </div>
            <div className="ml-14">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800">
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Ce site peut contenir des liens vers des sites web tiers. Ces liens sont fournis uniquement 
                    pour votre commodité.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-700">
                    <h4 className="font-medium text-white mb-2">Important</h4>
                    <p className="text-gray-400 text-sm">
                      Nicolas ROMANINA n'exerce aucun contrôle sur le contenu de ces sites tiers et décline 
                      toute responsabilité concernant leur contenu, leur politique de confidentialité ou leurs pratiques.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <ExternalLink className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300 text-sm">
                      Il vous est recommandé de lire les conditions d'utilisation et politiques de confidentialité 
                      de tout site tiers que vous visitez.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/10 border border-orange-500/30">
                <AlertTriangle className="w-6 h-6 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">5. Utilisation interdite</h2>
            </div>
            <div className="ml-14">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800">
                <p className="text-gray-400 mb-4">
                  Vous vous engagez à ne pas utiliser ce site pour :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-gray-300 text-sm">Envoyer du spam ou des publicités non sollicitées</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-gray-300 text-sm">Diffuser des virus ou logiciels malveillants</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-gray-300 text-sm">Tenter d'accéder à des zones non autorisées</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-gray-300 text-sm">Collecter des données personnelles d'autres utilisateurs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-gray-300 text-sm">Imiter ou usurper l'identité d'autrui</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-gray-300 text-sm">Violer les droits de propriété intellectuelle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/10 border border-indigo-500/30">
                <Scale className="w-6 h-6 text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">6. Dispositions générales</h2>
            </div>
            <div className="ml-14">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800">
                    <h3 className="text-lg font-semibold text-white mb-3">Modifications</h3>
                    <p className="text-gray-400 text-sm">
                      Ces conditions peuvent être modifiées à tout moment. La version en vigueur est celle 
                      accessible sur le site à la date de votre visite.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800">
                    <h3 className="text-lg font-semibold text-white mb-3">Droit applicable</h3>
                    <p className="text-gray-400 text-sm">
                      Ces conditions sont régies par le droit français. Tout litige relève de la compétence 
                      exclusive des tribunaux de Paris.
                    </p>
                  </div>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800">
                  <h3 className="text-lg font-semibold text-white mb-3">Séparabilité</h3>
                  <p className="text-gray-400">
                    Si une disposition de ces conditions est jugée invalide ou inapplicable, les autres dispositions 
                    resteront pleinement en vigueur.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/30">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">7. Contact</h2>
            </div>
            <div className="ml-14">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">Questions ou préoccupations ?</h3>
                  <p className="text-gray-400 mb-6">
                    Si vous avez des questions concernant ces conditions d'utilisation, 
                    n'hésitez pas à nous contacter.
                  </p>
                  <a 
                    href="mailto:contact@nicolasromanina.com" 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold transition-all duration-300"
                  >
                    <span>Nous contacter</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Résumé des points clés */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Résumé des points clés</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-300">Accès libre et gratuit au contenu</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-300">Usage personnel autorisé</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-300">Respect de la propriété intellectuelle</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-gray-300">Usage commercial interdit sans autorisation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-gray-300">Modification du contenu interdite</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-gray-300">Respect des lois en vigueur</span>
              </div>
            </div>
          </div>
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
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de confidentialité
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

export default Terms;