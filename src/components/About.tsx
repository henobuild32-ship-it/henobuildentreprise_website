import { Building2, User, MapPin, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            À propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">HenoBuild</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              HenoBuild est une entreprise de haute technologie basée à Kinshasa (RDC), spécialisée dans la création de sites web, applications mobiles, applications desktop, web applications, automatisation et intelligence artificielle.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Fondée en octobre 2025, HenoBuild est dirigée par son PDG, Henock Aduma Omokoko, expert en Génie Logiciel, Intelligence Artificielle et Cybersécurité.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Notre mission est de concevoir des solutions modernes, sécurisées, évolutives et adaptées aux réalités africaines et internationales.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
              <Building2 className="text-blue-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Entreprise</h3>
              <p className="text-gray-400 text-sm">Haute technologie</p>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
              <MapPin className="text-blue-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Localisation</h3>
              <p className="text-gray-400 text-sm">Kinshasa, RDC</p>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
              <User className="text-blue-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">PDG</h3>
              <p className="text-gray-400 text-sm">Henock Aduma Omokoko</p>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
              <Award className="text-blue-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Expertise</h3>
              <p className="text-gray-400 text-sm">IA & Cybersécurité</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
