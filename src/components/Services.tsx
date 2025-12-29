import { Globe, Smartphone, Monitor, Cloud, Shield, Wrench, Bot, Database } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Sites Web Professionnels',
      description: 'Sites vitrines, corporatifs et e-commerce modernes et responsive',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Brain,
      title: 'Web Applications',
      description: 'SaaS, plateformes métiers et solutions sur mesure',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Smartphone,
      title: 'Applications Mobiles',
      description: 'iOS et Android avec design moderne et performances optimales',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Monitor,
      title: 'Applications Desktop',
      description: 'Windows, Linux et macOS pour tous vos besoins métiers',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Bot,
      title: 'Automatisation & IA',
      description: 'Intelligence artificielle et automatisation de processus',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Cybersécurité',
      description: 'Audits, protection et sécurisation de vos systèmes',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Cloud,
      title: 'Hébergement Cloud',
      description: 'Solutions d\'hébergement local et cloud sécurisées',
      color: 'from-sky-500 to-sky-600'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Assistance technique et maintenance continue',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des solutions complètes pour transformer vos idées en réalité digitale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Brain({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}
