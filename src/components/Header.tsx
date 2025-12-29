import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onQuoteClick: () => void;
}

export default function Header({ onQuoteClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img src="/image.png" alt="HenoBuild Logo" className="h-12 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('accueil')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('tarifs')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Tarifs
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Contact
            </button>
            <button
              onClick={onQuoteClick}
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg shadow-blue-500/50"
            >
              DEMANDER UN DEVIS
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-blue-400"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/98 border-t border-blue-500/20">
          <div className="px-4 py-6 space-y-4">
            <button onClick={() => scrollToSection('accueil')} className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors py-2">
              Accueil
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors py-2">
              Services
            </button>
            <button onClick={() => scrollToSection('tarifs')} className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors py-2">
              Tarifs
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors py-2">
              Contact
            </button>
            <button
              onClick={() => {
                onQuoteClick();
                setIsMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg shadow-blue-500/50"
            >
              DEMANDER UN DEVIS
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
