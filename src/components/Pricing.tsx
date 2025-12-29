import { Check } from 'lucide-react';

interface PricingProps {
  onQuoteClick: () => void;
}

export default function Pricing({ onQuoteClick }: PricingProps) {
  const pricingCategories = [
    {
      category: 'Sites Web',
      items: [
        {
          name: 'Site Vitrine',
          price: '150 $ - 300 $',
          features: [
            '5 à 7 pages',
            'Design moderne & responsive',
            'Formulaire de contact',
            'Hébergement + domaine (1 an)',
            'Sécurité basique (HTTPS)'
          ]
        },
        {
          name: 'Site Professionnel',
          price: '350 $ - 700 $',
          features: [
            'Pages illimitées',
            'Admin dashboard',
            'SEO de base',
            'Sécurité renforcée',
            'Multilingue',
            'Maintenance 1 mois'
          ],
          popular: true
        },
        {
          name: 'Web Application',
          price: '800 $ - 3 000 $+',
          features: [
            'Authentification utilisateurs',
            'Rôles & permissions',
            'Base de données',
            'API',
            'Sécurité avancée',
            'Hébergement cloud'
          ]
        }
      ]
    },
    {
      category: 'Applications Mobiles',
      items: [
        {
          name: 'App Simple',
          price: '600 $ - 1 200 $',
          features: [
            '1 plateforme (Android ou iOS)',
            'UI moderne',
            'Connexion API',
            'Notifications'
          ]
        },
        {
          name: 'App Complète',
          price: '1 500 $ - 3 500 $',
          features: [
            'Android + iOS',
            'Backend sécurisé',
            'Paiements intégrés',
            'Notifications push',
            'Hébergement serveur'
          ],
          popular: true
        },
        {
          name: 'App Avancée',
          price: '4 000 $ - 10 000 $+',
          features: [
            'IA intégrée',
            'Géolocalisation',
            'Paiement en ligne',
            'Sécurité bancaire',
            'Dashboard admin'
          ]
        }
      ]
    },
    {
      category: 'Applications Desktop',
      items: [
        {
          name: 'App Simple',
          price: '500 $ - 1 000 $',
          features: [
            'Windows / Linux',
            'Gestion locale des données',
            'Interface moderne'
          ]
        },
        {
          name: 'App Professionnelle',
          price: '1 500 $ - 4 000 $',
          features: [
            'Multi-OS',
            'Base de données',
            'Sécurité avancée',
            'Synchronisation cloud'
          ],
          popular: true
        }
      ]
    },
    {
      category: 'Solutions Entreprises',
      items: [
        {
          name: 'Petite Entreprise',
          price: '1 000 $ - 3 000 $',
          features: [
            'Site + application',
            'Sécurité standard',
            'Support 3 mois'
          ]
        },
        {
          name: 'Moyenne Entreprise',
          price: '3 000 $ - 7 000 $',
          features: [
            'Web + Mobile',
            'Sécurité avancée',
            'Maintenance 6 mois',
            'Automatisation'
          ],
          popular: true
        },
        {
          name: 'Grande Entreprise',
          price: '8 000 $ - 25 000 $+',
          features: [
            'IA & automatisation',
            'Cloud & DevOps',
            'Cybersécurité élevée',
            'Support 12 mois'
          ]
        }
      ]
    }
  ];

  const additionalServices = [
    { name: 'Audit de sécurité', price: '200 $ - 600 $' },
    { name: 'Protection contre attaques', price: '300 $ - 1 500 $' },
    { name: 'Maintenance basique', price: '50 $ / mois' },
    { name: 'Maintenance standard', price: '100 $ / mois' },
    { name: 'Maintenance premium', price: '250 $ / mois' },
    { name: 'Support ponctuel', price: '30 $ / heure' }
  ];

  return (
    <section id="tarifs" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Tarifs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Prix indicatifs et flexibles selon votre projet
          </p>
        </div>

        {pricingCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">{category.category}</h3>
            <div className={`grid grid-cols-1 ${category.items.length === 2 ? 'md:grid-cols-2 max-w-5xl mx-auto' : 'md:grid-cols-3'} gap-8`}>
              {category.items.map((item, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border ${
                    item.popular ? 'border-blue-500 shadow-2xl shadow-blue-500/20' : 'border-gray-700'
                  } hover:border-blue-500/50 transition-all duration-300`}
                >
                  {item.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-1 rounded-full text-sm font-semibold">
                      Populaire
                    </div>
                  )}
                  <h4 className="text-2xl font-bold text-white mb-2">{item.name}</h4>
                  <div className="text-3xl font-bold text-blue-400 mb-6">{item.price}</div>
                  <ul className="space-y-3 mb-8">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start space-x-3">
                        <Check className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Services Additionnels</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex justify-between items-center bg-black/30 rounded-lg p-4">
                <span className="text-gray-300">{service.name}</span>
                <span className="text-blue-400 font-semibold">{service.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Le prix final est calculé selon vos besoins spécifiques</p>
          <button
            onClick={onQuoteClick}
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg px-12 py-4 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all shadow-2xl shadow-blue-500/50 hover:scale-105 transform duration-300"
          >
            OBTENIR UN DEVIS PERSONNALISÉ
          </button>
        </div>
      </div>
    </section>
  );
}
