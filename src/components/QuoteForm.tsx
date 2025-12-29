import { useState, useEffect } from 'react';
import { 
  X, 
  Calculator, 
  Send, 
  Smartphone, 
  Globe, 
  Monitor, 
  Cpu, 
  Shield, 
  Cloud, 
  DollarSign,
  User,
  CheckCircle,
  TrendingUp,
  Zap,
  Server,
  Package,
  MessageCircle,
  BarChart,
  Eye,
  Lock,
  Sparkles,
  Home,
  Settings,
  FileText,
  MessageSquare
} from 'lucide-react';

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  projectType: string[];
  platforms: string[];
  features: string[];
  securityLevel: string;
  hosting: string[];
  budget: string;
  description: string;
  timeline: string;
}

interface PriceItem {
  id: string;
  label: string;
  price: number;
  category: string;
  icon?: React.ReactNode;
  description?: string;
  popular?: boolean;
}

interface ProjectCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  projects: {
    id: string;
    label: string;
    price: number;
    description: string;
    timeline: string;
    bestFor: string[];
    icon: string;
  }[];
}

export default function QuoteForm({ isOpen, onClose }: QuoteFormProps) {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    projectType: [],
    platforms: [],
    features: [],
    securityLevel: 'standard',
    hosting: [],
    budget: '',
    description: '',
    timeline: '1-3 mois'
  });

  const [activeTab, setActiveTab] = useState<'info' | 'project' | 'features' | 'budget'>('info');
  const [priceBreakdown, setPriceBreakdown] = useState<{
    projects: PriceItem[];
    platforms: PriceItem[];
    features: PriceItem[];
    security: PriceItem[];
    hosting: PriceItem[];
    total: number;
    discount?: number;
  }>({
    projects: [],
    platforms: [],
    features: [],
    security: [],
    hosting: [],
    total: 0,
    discount: 0
  });

  const [selectedFeaturesCount, setSelectedFeaturesCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Configuration des catégories de projets
  const projectCategories: ProjectCategory[] = [
    {
      id: 'web',
      title: 'Sites Web',
      icon: <Globe className="w-5 h-5" />,
      color: 'text-blue-500',
      gradient: 'from-blue-500 to-cyan-500',
      projects: [
        { 
          id: 'site-vitrine', 
          label: 'Site Vitrine', 
          price: 2250, 
          description: 'Site élégant pour présenter votre marque',
          timeline: '2-4 semaines',
          bestFor: ['Startups', 'Artisans', 'Freelancers'],
          icon: '🎯'
        },
        { 
          id: 'site-pro', 
          label: 'Site Professionnel', 
          price: 5250, 
          description: 'Site complet avec système de gestion',
          timeline: '4-8 semaines',
          bestFor: ['PME', 'Entreprises', 'Associations'],
          icon: '🏢'
        },
        { 
          id: 'ecommerce', 
          label: 'Boutique E-commerce', 
          price: 12000, 
          description: 'Plateforme de vente complète',
          timeline: '8-12 semaines',
          bestFor: ['Commerçants', 'Boutiques', 'Revendeurs'],
          icon: '🛒'
        },
        { 
          id: 'web-app', 
          label: 'Application Web', 
          price: 19000, 
          description: 'Application web interactive moderne',
          timeline: '12-16 semaines',
          bestFor: ['SaaS', 'Applications métier'],
          icon: '🚀'
        }
      ]
    },
    {
      id: 'mobile',
      title: 'Applications Mobile',
      icon: <Smartphone className="w-5 h-5" />,
      color: 'text-purple-500',
      gradient: 'from-purple-500 to-pink-500',
      projects: [
        { 
          id: 'mobile-simple', 
          label: 'App Mobile Simple', 
          price: 9000, 
          description: 'Application native sur une plateforme',
          timeline: '6-10 semaines',
          bestFor: ['Services locaux', 'MVP', 'Startups'],
          icon: '📱'
        },
        { 
          id: 'mobile-complete', 
          label: 'App Mobile Complète', 
          price: 25000, 
          description: 'Application native Android + iOS',
          timeline: '12-20 semaines',
          bestFor: ['Startups tech', 'Services B2C'],
          icon: '📲'
        },
        { 
          id: 'mobile-avancee', 
          label: 'App Mobile Avancée', 
          price: 70000, 
          description: 'Application complexe avec API',
          timeline: '20-32 semaines',
          bestFor: ['Grandes entreprises', 'Fintech'],
          icon: '⚡'
        }
      ]
    },
    {
      id: 'desktop',
      title: 'Applications Desktop',
      icon: <Monitor className="w-5 h-5" />,
      color: 'text-emerald-500',
      gradient: 'from-emerald-500 to-green-500',
      projects: [
        { 
          id: 'desktop-simple', 
          label: 'App Desktop Simple', 
          price: 7500, 
          description: 'Application de bureau pour usage interne',
          timeline: '4-8 semaines',
          bestFor: ['Gestion interne', 'Outils métier'],
          icon: '💻'
        },
        { 
          id: 'desktop-pro', 
          label: 'App Desktop Pro', 
          price: 27500, 
          description: 'Application professionnelle avancée',
          timeline: '12-20 semaines',
          bestFor: ['Entreprises', 'Logiciels pros'],
          icon: '🏭'
        }
      ]
    }
  ];

  // Plateformes
  const platformOptions = [
    { id: 'android', label: 'Android', price: 5000, icon: '🤖', marketShare: '72%', popular: true },
    { id: 'ios', label: 'iOS', price: 5000, icon: '🍎', marketShare: '27%', popular: true },
    { id: 'web', label: 'Web', price: 3000, icon: '🌐', marketShare: '100%', popular: true },
    { id: 'windows', label: 'Windows', price: 4000, icon: '🪟', marketShare: '75%', popular: true },
    { id: 'macos', label: 'macOS', price: 4000, icon: '🍏', marketShare: '15%', popular: true }
  ];

  // Catégories de fonctionnalités
  const featureCategories = [
    {
      id: 'core',
      title: 'Fonctionnalités de Base',
      icon: <Package className="w-4 h-4" />,
      color: 'text-blue-500',
      features: [
        { id: 'auth', label: 'Authentification', price: 2000, icon: '🔐', description: 'Connexion utilisateur sécurisée' },
        { id: 'admin', label: 'Dashboard admin', price: 4000, icon: '👨‍💼', description: 'Interface de gestion complète' },
        { id: 'multilang', label: 'Multilingue', price: 2000, icon: '🌍', description: 'Interface en plusieurs langues' },
        { id: 'seo', label: 'SEO avancé', price: 2500, icon: '🔍', description: 'Optimisation moteurs de recherche' }
      ]
    },
    {
      id: 'commerce',
      title: 'E-commerce',
      icon: <DollarSign className="w-4 h-4" />,
      color: 'text-green-500',
      features: [
        { id: 'payment', label: 'Paiement en ligne', price: 5000, icon: '💳', description: 'Stripe, PayPal, etc.' },
        { id: 'catalogue', label: 'Gestion catalogue', price: 3000, icon: '📦', description: 'Produits et stocks' },
        { id: 'panier', label: 'Panier intelligent', price: 4000, icon: '🛒', description: 'Expérience shopping' },
        { id: 'livraison', label: 'Tracking livraison', price: 3500, icon: '🚚', description: 'Suivi en temps réel' }
      ]
    },
    {
      id: 'communication',
      title: 'Communication',
      icon: <MessageCircle className="w-4 h-4" />,
      color: 'text-purple-500',
      features: [
        { id: 'notifications', label: 'Notifications', price: 1500, icon: '🔔', description: 'Notifications en temps réel' },
        { id: 'chat', label: 'Chat en direct', price: 6000, icon: '💬', description: 'Messagerie instantanée' },
        { id: 'newsletter', label: 'Email marketing', price: 2500, icon: '📧', description: 'Campagnes automatisées' }
      ]
    },
    {
      id: 'advanced',
      title: 'Fonctionnalités Avancées',
      icon: <Zap className="w-4 h-4" />,
      color: 'text-orange-500',
      features: [
        { id: 'geolocation', label: 'Géolocalisation', price: 2500, icon: '📍', description: 'Services par localisation' },
        { id: 'ai', label: 'Intelligence Artificielle', price: 15000, icon: '🧠', description: 'IA et machine learning' },
        { id: 'analytics', label: 'Analytics', price: 4500, icon: '📊', description: 'Tableaux de bord analytiques' },
        { id: 'api', label: 'API REST', price: 3000, icon: '🔌', description: 'API pour intégrations' }
      ]
    }
  ];

  const securityLevels = [
    { id: 'basic', label: 'Standard', price: 0, icon: <Shield className="w-4 h-4" />, description: 'Protection HTTPS' },
    { id: 'advanced', label: 'Avancée', price: 6000, icon: <Lock className="w-4 h-4" />, description: 'Cryptage renforcé' },
    { id: 'enterprise', label: 'Entreprise', price: 12000, icon: <Server className="w-4 h-4" />, description: 'Sécurité bancaire' }
  ];

  const hostingOptions = [
    { id: 'cloud', label: 'Cloud Premium', price: 2000, icon: <Cloud className="w-4 h-4" />, description: 'Cloud haute disponibilité', popular: true },
    { id: 'dedicated', label: 'Serveur Dédié', price: 5000, icon: <Server className="w-4 h-4" />, description: 'Serveur physique dédié' }
  ];

  const timelineOptions = [
    { id: 'urgent', label: 'Urgent (1-2 mois)', value: '1-2 mois' },
    { id: 'standard', label: 'Standard (2-4 mois)', value: '2-4 mois' },
    { id: 'flexible', label: 'Flexible (4-6 mois)', value: '4-6 mois' }
  ];

  useEffect(() => {
    calculatePrice();
    setSelectedFeaturesCount(formData.features.length);
  }, [formData]);

  const calculatePrice = () => {
    const breakdown = {
      projects: [] as PriceItem[],
      platforms: [] as PriceItem[],
      features: [] as PriceItem[],
      security: [] as PriceItem[],
      hosting: [] as PriceItem[],
      total: 0,
      discount: 0
    };

    // Calcul des projets
    formData.projectType.forEach(type => {
      projectCategories.forEach(category => {
        const project = category.projects.find(p => p.id === type);
        if (project) {
          breakdown.projects.push({
            ...project,
            category: category.title
          });
          breakdown.total += project.price;
        }
      });
    });

    // Calcul des plateformes
    formData.platforms.forEach(platform => {
      const plat = platformOptions.find(p => p.id === platform);
      if (plat) {
        breakdown.platforms.push({
          ...plat,
          category: 'Plateformes'
        });
        breakdown.total += plat.price;
      }
    });

    // Calcul des fonctionnalités
    formData.features.forEach(feature => {
      featureCategories.forEach(category => {
        const feat = category.features.find(f => f.id === feature);
        if (feat) {
          breakdown.features.push({
            ...feat,
            category: category.title
          });
          breakdown.total += feat.price;
        }
      });
    });

    // Calcul sécurité
    const security = securityLevels.find(s => s.id === formData.securityLevel);
    if (security) {
      breakdown.security.push({
        ...security,
        category: 'Sécurité'
      });
      breakdown.total += security.price;
    }

    // Calcul hébergement
    formData.hosting.forEach(host => {
      const hosting = hostingOptions.find(h => h.id === host);
      if (hosting) {
        breakdown.hosting.push({
          ...hosting,
          category: 'Hébergement'
        });
        breakdown.total += hosting.price;
      }
    });

    // Application de remise pour projets multiples
    if (formData.projectType.length > 1) {
      breakdown.discount = Math.round(breakdown.total * 0.1); // 10% de remise
      breakdown.total -= breakdown.discount;
    }

    setPriceBreakdown(breakdown);
  };

  const handleCheckboxChange = (field: 'projectType' | 'platforms' | 'features' | 'hosting', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedProjects = priceBreakdown.projects.map(p => p.label).join(', ');
    const selectedPlatforms = priceBreakdown.platforms.map(p => p.label).join(', ');
    const selectedFeatures = priceBreakdown.features.map(f => f.label).join(', ');
    const selectedHosting = priceBreakdown.hosting.map(h => h.label).join(', ');
    const securityLabel = priceBreakdown.security[0]?.label || 'Standard';

    const message = `🚀 *NOUVELLE DEMANDE DE DEVIS - HenoBuild*

👤 *INFORMATIONS CLIENT*
Nom : ${formData.nom} ${formData.prenom}
Téléphone : ${formData.telephone}
Email : ${formData.email}

💼 *DÉTAILS DU PROJET*
Types : ${selectedProjects || 'Non spécifié'}
Plateformes : ${selectedPlatforms || 'Non spécifié'}
Délai souhaité : ${formData.timeline}

⚡ *FONCTIONNALITÉS*
${selectedFeatures || 'Aucune sélection'}

🔒 *SÉCURITÉ & HÉBERGEMENT*
Sécurité : ${securityLabel}
Hébergement : ${selectedHosting || 'Non spécifié'}

💰 *ESTIMATION FINANCIÈRE*
Budget client : ${formData.budget || 'Non spécifié'}
Estimation HenoBuild : ${priceBreakdown.total.toLocaleString()} €
${priceBreakdown.discount ? `Remise : ${priceBreakdown.discount.toLocaleString()} €` : ''}

📝 *DESCRIPTION*
${formData.description || 'Aucune description'}

━━━━━━━━━━━━━━━━━━━━
✅ Prêt à démarrer votre projet ?`;

    const whatsappUrl = `https://wa.me/243990601417?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl sm:rounded-3xl w-full max-w-7xl my-2 sm:my-8 shadow-2xl max-h-[95vh] flex flex-col">
        {/* Header avec navigation au-dessus */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700 rounded-t-2xl sm:rounded-t-3xl">
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 sm:p-3 rounded-xl sm:rounded-2xl">
                  <Calculator className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Générateur de Devis</h1>
                  <p className="text-gray-300 text-xs sm:text-sm">Obtenez une estimation précise en 4 étapes</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg sm:rounded-xl p-2 transition-all"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Navigation principale - Responsive */}
            <div className="flex flex-wrap gap-1 sm:gap-2">
              <button
                onClick={() => setActiveTab('info')}
                className={`flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base flex-1 sm:flex-none min-w-0 ${
                  activeTab === 'info'
                    ? 'bg-white text-gray-900'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <User className="w-4 h-4" />
                <span className="truncate">Informations</span>
              </button>
              <button
                onClick={() => setActiveTab('project')}
                className={`flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base flex-1 sm:flex-none min-w-0 ${
                  activeTab === 'project'
                    ? 'bg-white text-gray-900'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Package className="w-4 h-4" />
                <span className="truncate">Projet</span>
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base flex-1 sm:flex-none min-w-0 ${
                  activeTab === 'features'
                    ? 'bg-white text-gray-900'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Zap className="w-4 h-4" />
                <span className="truncate">Fonctionnalités</span>
              </button>
              <button
                onClick={() => setActiveTab('budget')}
                className={`flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base flex-1 sm:flex-none min-w-0 ${
                  activeTab === 'budget'
                    ? 'bg-white text-gray-900'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <DollarSign className="w-4 h-4" />
                <span className="truncate">Budget</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contenu principal avec scrolling */}
        <div className="flex-1 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 p-3 sm:p-4 md:p-6">
            {/* Zone principale du formulaire */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6 md:space-y-8">
              {activeTab === 'info' && (
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                      <User className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-400" />
                      Vos Coordonnées
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-gray-300 mb-2 sm:mb-3 font-medium">Nom</label>
                        <input
                          type="text"
                          required
                          value={formData.nom}
                          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                          className="w-full bg-gray-900 border border-gray-700 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-white focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2 sm:mb-3 font-medium">Prénom</label>
                        <input
                          type="text"
                          required
                          value={formData.prenom}
                          onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                          className="w-full bg-gray-900 border border-gray-700 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-white focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                          placeholder="Votre prénom"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                      <div>
                        <label className="block text-gray-300 mb-2 sm:mb-3 font-medium">📱 Téléphone</label>
                        <input
                          type="tel"
                          required
                          value={formData.telephone}
                          onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                          className="w-full bg-gray-900 border border-gray-700 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-white focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                          placeholder="+243 XX XXX XXX"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2 sm:mb-3 font-medium">📧 Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-gray-900 border border-gray-700 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-white focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                          placeholder="contact@entreprise.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5" />
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white mb-2">Prochaines étapes</h3>
                        <p className="text-gray-300 text-sm sm:text-base">
                          Complétez vos informations pour passer à la sélection de votre projet.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'project' && (
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">Type de Projet</h2>
                    
                    <div className="space-y-4 sm:space-y-6 md:space-y-8">
                      {projectCategories.map(category => (
                        <div key={category.id} className="space-y-3 sm:space-y-4">
                          <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                            <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${category.gradient}`}>
                              {category.icon}
                            </div>
                            <div>
                              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{category.title}</h3>
                              <p className="text-gray-400 text-xs sm:text-sm">Sélectionnez le type correspondant</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {category.projects.map(project => (
                              <label
                                key={project.id}
                                className={`border rounded-lg sm:rounded-xl p-3 sm:p-4 cursor-pointer transition-all duration-300 ${
                                  formData.projectType.includes(project.id)
                                    ? 'border-blue-500 bg-blue-500/10'
                                    : 'border-gray-700 bg-gray-900 hover:border-gray-600'
                                }`}
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex items-start space-x-2 sm:space-x-3">
                                    <span className="text-xl sm:text-2xl">{project.icon}</span>
                                    <div className="flex-1">
                                      <div className="flex items-center justify-between">
                                        <h4 className="text-sm sm:text-base font-bold text-white">{project.label}</h4>
                                        {formData.projectType.includes(project.id) && (
                                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                                        )}
                                      </div>
                                      <p className="text-gray-400 text-xs sm:text-sm mt-1">{project.description}</p>
                                      <div className="flex flex-wrap gap-1 mt-2">
                                        {project.bestFor.map(item => (
                                          <span key={item} className="text-xs bg-gray-800 px-1.5 sm:px-2 py-0.5 rounded">
                                            {item}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-700/50">
                                  <div>
                                    <div className="text-lg sm:text-xl font-bold text-blue-400">{project.price.toLocaleString()} €</div>
                                    <div className="text-xs sm:text-sm text-gray-400">{project.timeline}</div>
                                  </div>
                                  <input
                                    type="checkbox"
                                    checked={formData.projectType.includes(project.id)}
                                    onChange={() => handleCheckboxChange('projectType', project.id)}
                                    className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 rounded"
                                  />
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">Plateformes Ciblées</h2>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                      {platformOptions.map(platform => (
                        <label
                          key={platform.id}
                          className={`flex flex-col items-center p-2 sm:p-3 md:p-4 border rounded-lg sm:rounded-xl cursor-pointer transition-all relative ${
                            formData.platforms.includes(platform.id)
                              ? 'border-blue-500 bg-blue-500/10 scale-105'
                              : 'border-gray-700 bg-gray-900 hover:border-gray-600'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.platforms.includes(platform.id)}
                            onChange={() => handleCheckboxChange('platforms', platform.id)}
                            className="sr-only"
                          />
                          
                          <span className="text-2xl sm:text-3xl mb-2">{platform.icon}</span>
                          <span className="text-white font-medium text-center text-xs sm:text-sm">{platform.label}</span>
                          <span className="text-blue-400 font-bold text-sm sm:text-base md:text-lg mt-1">+{platform.price.toLocaleString()} €</span>
                          <div className="text-xs text-gray-400 mt-1">{platform.marketShare}</div>
                          
                          {platform.popular && (
                            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-yellow-500 text-black text-xs px-1.5 sm:px-2 py-0.5 rounded-full">
                              Pop
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">Délai de Réalisation</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      {timelineOptions.map(option => (
                        <label
                          key={option.id}
                          className={`flex items-center justify-between p-3 sm:p-4 border rounded-lg sm:rounded-xl cursor-pointer transition-all ${
                            formData.timeline === option.value
                              ? 'border-blue-500 bg-blue-500/10'
                              : 'border-gray-700 bg-gray-900 hover:border-gray-600'
                          }`}
                        >
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <input
                              type="radio"
                              name="timeline"
                              checked={formData.timeline === option.value}
                              onChange={() => setFormData({ ...formData, timeline: option.value })}
                              className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500"
                            />
                            <span className="text-white font-medium text-sm sm:text-base">{option.label}</span>
                          </div>
                          {formData.timeline === option.value && (
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 md:mb-8 gap-3">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Fonctionnalités</h2>
                      <div className="bg-blue-500/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                        <span className="text-blue-400 font-bold text-sm sm:text-base">{selectedFeaturesCount} sélectionnées</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6 md:space-y-8">
                      {featureCategories.map(category => (
                        <div key={category.id} className="space-y-3 sm:space-y-4">
                          <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                            <div className={`p-1.5 sm:p-2 rounded ${category.color} bg-opacity-20`}>
                              {category.icon}
                            </div>
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{category.title}</h3>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {category.features.map(feature => (
                              <label
                                key={feature.id}
                                className={`border rounded-lg sm:rounded-xl p-3 sm:p-4 cursor-pointer transition-all ${
                                  formData.features.includes(feature.id)
                                    ? 'border-blue-500 bg-blue-500/10'
                                    : 'border-gray-700 bg-gray-900 hover:border-gray-600'
                                }`}
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex items-start space-x-2 sm:space-x-3 flex-1">
                                    <span className="text-xl sm:text-2xl mt-0.5">{feature.icon}</span>
                                    <div className="flex-1">
                                      <div className="flex items-center justify-between">
                                        <h4 className="font-bold text-white text-sm sm:text-base">{feature.label}</h4>
                                        <input
                                          type="checkbox"
                                          checked={formData.features.includes(feature.id)}
                                          onChange={() => handleCheckboxChange('features', feature.id)}
                                          className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 rounded ml-2"
                                        />
                                      </div>
                                      <p className="text-gray-400 text-xs sm:text-sm mt-1">{feature.description}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-700/50">
                                  <span className="text-blue-400 font-bold text-sm sm:text-base">+{feature.price.toLocaleString()} €</span>
                                  {formData.features.includes(feature.id) && (
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                                  )}
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-400" />
                        Niveau de Sécurité
                      </h3>
                      
                      <div className="space-y-2 sm:space-y-3">
                        {securityLevels.map(level => (
                          <label
                            key={level.id}
                            className={`flex items-center justify-between p-3 sm:p-4 border rounded-lg sm:rounded-xl cursor-pointer transition-all ${
                              formData.securityLevel === level.id
                                ? 'border-blue-500 bg-blue-500/10'
                                : 'border-gray-700 bg-gray-900 hover:border-gray-600'
                            }`}
                          >
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <input
                                type="radio"
                                name="securityLevel"
                                checked={formData.securityLevel === level.id}
                                onChange={() => setFormData({ ...formData, securityLevel: level.id })}
                                className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500"
                              />
                              <div>
                                <div className="flex items-center space-x-2">
                                  {level.icon}
                                  <span className="text-white font-medium text-sm sm:text-base">{level.label}</span>
                                </div>
                                <p className="text-gray-400 text-xs sm:text-sm mt-1">{level.description}</p>
                              </div>
                            </div>
                            <span className="text-blue-400 font-bold text-sm sm:text-base">+{level.price.toLocaleString()} €</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                        <Cloud className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-400" />
                        Solution d'Hébergement
                      </h3>
                      
                      <div className="space-y-2 sm:space-y-3">
                        {hostingOptions.map(option => (
                          <label
                            key={option.id}
                            className={`flex items-center justify-between p-3 sm:p-4 border rounded-lg sm:rounded-xl cursor-pointer transition-all relative ${
                              formData.hosting.includes(option.id)
                                ? 'border-blue-500 bg-blue-500/10'
                                : 'border-gray-700 bg-gray-900 hover:border-gray-600'
                            }`}
                          >
                            {option.popular && (
                              <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                                Recommandé
                              </div>
                            )}
                            
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <input
                                type="checkbox"
                                checked={formData.hosting.includes(option.id)}
                                onChange={() => handleCheckboxChange('hosting', option.id)}
                                className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 rounded"
                              />
                              <div>
                                <div className="flex items-center space-x-2">
                                  {option.icon}
                                  <span className="text-white font-medium text-sm sm:text-base">{option.label}</span>
                                </div>
                                <p className="text-gray-400 text-xs sm:text-sm mt-1">{option.description}</p>
                              </div>
                            </div>
                            <span className="text-blue-400 font-bold text-sm sm:text-base">+{option.price.toLocaleString()} €</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'budget' && (
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">Budget & Description</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <label className="block text-gray-300 mb-2 sm:mb-3 font-medium">Budget estimé</label>
                          <input
                            type="text"
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full bg-gray-900 border border-gray-700 rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-lg sm:text-xl text-white font-bold text-center focus:border-blue-500 focus:outline-none"
                            placeholder="25 000 €"
                          />
                          <p className="text-gray-400 text-xs sm:text-sm mt-2 text-center">
                            Indiquez votre budget approximatif
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg sm:rounded-xl p-4 sm:p-6">
                          <h4 className="text-white font-bold mb-2 sm:mb-3 text-sm sm:text-base">Analyse de Budget</h4>
                          <div className="space-y-1.5 sm:space-y-2">
                            <div className="flex justify-between text-gray-300 text-xs sm:text-sm">
                              <span>Budget client</span>
                              <span className="font-bold">{formData.budget || 'Non spécifié'}</span>
                            </div>
                            <div className="flex justify-between text-gray-300 text-xs sm:text-sm">
                              <span>Estimation HenoBuild</span>
                              <span className="text-blue-400 font-bold">{priceBreakdown.total.toLocaleString()} €</span>
                            </div>
                            {priceBreakdown.discount > 0 && (
                              <div className="flex justify-between text-green-400 text-xs sm:text-sm">
                                <span>Remise (-10%)</span>
                                <span className="font-bold">-{priceBreakdown.discount.toLocaleString()} €</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-300 mb-2 sm:mb-3 font-medium">Description du projet</label>
                        <textarea
                          required
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          rows={isMobile ? 6 : 8}
                          className="w-full bg-gray-900 border border-gray-700 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 text-white focus:border-blue-500 focus:outline-none resize-none text-sm sm:text-base"
                          placeholder="Décrivez votre projet..."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mt-0.5" />
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white mb-2">Votre devis est prêt !</h3>
                        <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                          Cliquez pour recevoir votre proposition détaillée sur WhatsApp.
                        </p>
                        <button
                          onClick={handleSubmit}
                          className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:from-green-700 hover:to-emerald-600 transition-all flex items-center space-x-2 w-full sm:w-auto justify-center"
                        >
                          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="text-sm sm:text-base">Envoyer sur WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Panneau de prix - Toujours visible */}
            <div className="space-y-4 sm:space-y-6">
              <div className="sticky top-4 sm:top-6">
                <div className="bg-gray-800 border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg sm:rounded-xl md:rounded-2xl mb-3">
                      <Calculator className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Estimation</h3>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mt-2">
                      {priceBreakdown.total.toLocaleString()} €
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">Prix calculé en temps réel</p>
                  </div>

                  <div className="space-y-3 max-h-64 sm:max-h-72 overflow-y-auto pr-1">
                    {priceBreakdown.projects.length > 0 && (
                      <div>
                        <h4 className="text-white font-semibold mb-1.5 text-sm sm:text-base">Projets</h4>
                        <div className="space-y-1.5">
                          {priceBreakdown.projects.map((project, index) => (
                            <div key={index} className="flex justify-between text-xs sm:text-sm">
                              <span className="text-gray-300 truncate pr-2">{project.label}</span>
                              <span className="text-blue-400 font-medium whitespace-nowrap">{project.price.toLocaleString()} €</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {priceBreakdown.platforms.length > 0 && (
                      <div>
                        <h4 className="text-white font-semibold mb-1.5 text-sm sm:text-base">Plateformes</h4>
                        <div className="space-y-1.5">
                          {priceBreakdown.platforms.map((platform, index) => (
                            <div key={index} className="flex justify-between text-xs sm:text-sm">
                              <span className="text-gray-300 truncate pr-2">{platform.label}</span>
                              <span className="text-green-400 font-medium whitespace-nowrap">+{platform.price.toLocaleString()} €</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {priceBreakdown.features.length > 0 && (
                      <div>
                        <h4 className="text-white font-semibold mb-1.5 text-sm sm:text-base">Fonctionnalités</h4>
                        <div className="space-y-1.5">
                          {priceBreakdown.features.map((feature, index) => (
                            <div key={index} className="flex justify-between text-xs sm:text-sm">
                              <span className="text-gray-300 truncate pr-2">{feature.label}</span>
                              <span className="text-yellow-400 font-medium whitespace-nowrap">+{feature.price.toLocaleString()} €</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {priceBreakdown.security.length > 0 && (
                      <div>
                        <h4 className="text-white font-semibold mb-1.5 text-sm sm:text-base">Sécurité</h4>
                        <div className="space-y-1.5">
                          {priceBreakdown.security.map((security, index) => (
                            <div key={index} className="flex justify-between text-xs sm:text-sm">
                              <span className="text-gray-300 truncate pr-2">{security.label}</span>
                              <span className="text-red-400 font-medium whitespace-nowrap">+{security.price.toLocaleString()} €</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {priceBreakdown.hosting.length > 0 && (
                      <div>
                        <h4 className="text-white font-semibold mb-1.5 text-sm sm:text-base">Hébergement</h4>
                        <div className="space-y-1.5">
                          {priceBreakdown.hosting.map((hosting, index) => (
                            <div key={index} className="flex justify-between text-xs sm:text-sm">
                              <span className="text-gray-300 truncate pr-2">{hosting.label}</span>
                              <span className="text-cyan-400 font-medium whitespace-nowrap">+{hosting.price.toLocaleString()} €</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {priceBreakdown.discount > 0 && (
                      <div className="border-t border-gray-700 pt-3">
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-300">Remise projets multiples</span>
                          <span className="text-green-400 font-medium">-{priceBreakdown.discount.toLocaleString()} €</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-700 pt-3 sm:pt-4 mt-3 sm:mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold text-sm sm:text-base md:text-lg">Total estimé</span>
                      <span className="text-blue-400 font-bold text-xl sm:text-2xl md:text-3xl">
                        {priceBreakdown.total.toLocaleString()} €
                      </span>
                    </div>
                  </div>
                </div>

                {/* Navigation rapide - visible sur mobile */}
                {isMobile && (
                  <div className="mt-4 bg-gray-800 border border-gray-700 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 text-sm">Navigation</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setActiveTab('info')}
                        className={`p-2 rounded-lg text-xs transition-colors ${
                          activeTab === 'info' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        <div className="flex items-center justify-center">
                          <User className="w-3 h-3 mr-1" />
                          <span>Infos</span>
                        </div>
                      </button>
                      <button
                        onClick={() => setActiveTab('project')}
                        className={`p-2 rounded-lg text-xs transition-colors ${
                          activeTab === 'project' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        <div className="flex items-center justify-center">
                          <Package className="w-3 h-3 mr-1" />
                          <span>Projet</span>
                        </div>
                      </button>
                      <button
                        onClick={() => setActiveTab('features')}
                        className={`p-2 rounded-lg text-xs transition-colors ${
                          activeTab === 'features' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        <div className="flex items-center justify-center">
                          <Zap className="w-3 h-3 mr-1" />
                          <span>Fonctions</span>
                        </div>
                      </button>
                      <button
                        onClick={() => setActiveTab('budget')}
                        className={`p-2 rounded-lg text-xs transition-colors ${
                          activeTab === 'budget' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        <div className="flex items-center justify-center">
                          <DollarSign className="w-3 h-3 mr-1" />
                          <span>Budget</span>
                        </div>
                      </button>
                    </div>
                  </div>
                )}

                {/* Statistiques - toujours visible */}
                <div className="mt-4 bg-gray-800 border border-gray-700 rounded-xl p-4">
                  <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Récapitulatif</h4>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="text-center p-2 bg-blue-500/10 rounded-lg">
                      <div className="text-lg sm:text-xl font-bold text-blue-400">{formData.projectType.length}</div>
                      <div className="text-xs text-gray-400">Projets</div>
                    </div>
                    <div className="text-center p-2 bg-green-500/10 rounded-lg">
                      <div className="text-lg sm:text-xl font-bold text-green-400">{formData.platforms.length}</div>
                      <div className="text-xs text-gray-400">Platforms</div>
                    </div>
                    <div className="text-center p-2 bg-yellow-500/10 rounded-lg">
                      <div className="text-lg sm:text-xl font-bold text-yellow-400">{formData.features.length}</div>
                      <div className="text-xs text-gray-400">Fonctions</div>
                    </div>
                    <div className="text-center p-2 bg-purple-500/10 rounded-lg">
                      <div className="text-lg sm:text-xl font-bold text-purple-400">{formData.hosting.length}</div>
                      <div className="text-xs text-gray-400">Hosting</div>
                    </div>
                  </div>
                  
                  {formData.budget && (
                    <div className="mt-3 p-2 bg-emerald-500/10 rounded-lg">
                      <div className="text-xs text-gray-400">Budget client</div>
                      <div className="text-sm sm:text-base font-bold text-emerald-400 truncate">{formData.budget}</div>
                    </div>
                  )}

                  {formData.timeline && (
                    <div className="mt-2 p-2 bg-blue-500/10 rounded-lg">
                      <div className="text-xs text-gray-400">Délai estimé</div>
                      <div className="text-sm sm:text-base font-bold text-blue-400 truncate">{formData.timeline}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 