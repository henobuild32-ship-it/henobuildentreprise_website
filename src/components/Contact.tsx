import { Phone, Mail, Clock, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contactez-<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">nous</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nous sommes disponibles pour discuter de votre projet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a
            href="tel:0990601417"
            className="group bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Téléphone</h3>
            <p className="text-blue-400 font-semibold">0990601417</p>
          </a>

          <a
            href="https://wa.me/243990601417"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-green-400 font-semibold">0990601417</p>
          </a>

          <a
            href="mailto:henobuildentreprise@gmail.com"
            className="group bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-blue-400 font-semibold break-all">henobuildentreprise@gmail.com</p>
          </a>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mx-auto mb-4">
              <Clock className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 text-center">Horaires</h3>
            <p className="text-gray-400 text-center">Lundi - Samedi</p>
            <p className="text-blue-400 font-semibold text-center">08h00 - 19h00</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mx-auto mb-4">
            <MapPin className="text-white" size={28} />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-2">Localisation</h3>
          <p className="text-gray-400 text-lg">Kinshasa, République Démocratique du Congo</p>
        </div>
      </div>
    </section>
  );
}
