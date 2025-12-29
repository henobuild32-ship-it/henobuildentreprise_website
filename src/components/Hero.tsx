import { Code2, Smartphone, Monitor, Brain } from 'lucide-react';

interface HeroProps {
  onQuoteClick: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="mb-8 flex justify-center">
          <img src="/image.png" alt="HenoBuild" className="h-24 sm:h-32 w-auto animate-fade-in" />
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Technologiques</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up delay-200">
          Web, Mobile, Logiciels, Automatisation & Intelligence Artificielle
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20">
            <Code2 className="text-blue-400" size={20} />
            <span className="text-gray-200">Sites Web</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20">
            <Smartphone className="text-blue-400" size={20} />
            <span className="text-gray-200">Apps Mobiles</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20">
            <Monitor className="text-blue-400" size={20} />
            <span className="text-gray-200">Applications Desktop</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20">
            <Brain className="text-blue-400" size={20} />
            <span className="text-gray-200">IA & Automatisation</span>
          </div>
        </div>

        <button
          onClick={onQuoteClick}
          className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg px-12 py-4 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all shadow-2xl shadow-blue-500/50 hover:scale-105 transform duration-300"
        >
          DEMANDER UN DEVIS
        </button>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
            <div className="text-gray-400">Projets Réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-gray-400">Clients Satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-400">Support Technique</div>
          </div>
        </div>
      </div>
    </section>
  );
}
