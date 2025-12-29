import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/image.png" alt="HenoBuild" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Solutions technologiques modernes pour entreprises africaines et internationales. Web, Mobile, IA et Automatisation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-600/20 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Facebook size={18} className="text-blue-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-600/20 hover:bg-blue-400 flex items-center justify-center transition-colors">
                <Twitter size={18} className="text-blue-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-600/20 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Linkedin size={18} className="text-blue-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-600/20 hover:bg-pink-600 flex items-center justify-center transition-colors">
                <Instagram size={18} className="text-blue-400 hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Sites Web</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Applications Mobiles</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Applications Desktop</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">IA & Automatisation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Cybersécurité</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Rapide</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-400" />
                <a href="tel:0990601417" className="text-gray-400 hover:text-blue-400 transition-colors">0990601417</a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                <a href="mailto:henobuildentreprise@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors break-all">henobuildentreprise@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {currentYear} HenoBuild. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Politique de confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Conditions d'utilisation</a>
            </div>
          </div>
          <p className="text-gray-500 text-xs text-center mt-4">
            Conçu par Henock Aduma Omokoko - Expert en Génie Logiciel, IA & Cybersécurité
          </p>
        </div>
      </div>
    </footer>
  );
}
