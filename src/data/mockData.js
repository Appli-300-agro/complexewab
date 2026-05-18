// Catalogue de 100 produits pour complexewab
// Images sélectionnées pour leur haute qualité et leur pertinence

const CATEGORY_IMAGES = {
  'Restaurant & Buffet': ['https://images.unsplash.com/photo-1504674900247-0877df9cc836','https://images.unsplash.com/photo-1555939594-58d7cb561ad1','https://images.unsplash.com/photo-1604329760661-e71dc83f8f26'],
  'Hébergement': ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267','https://images.unsplash.com/photo-1502672260266-1c1ef2d93688','https://images.unsplash.com/photo-1493809842364-78817add7ffb'],
  'Événementiel': ['https://images.unsplash.com/photo-1519167758481-83f550bb49b3','https://images.unsplash.com/photo-1511795409834-ef04bbd61622','https://images.unsplash.com/photo-1469334031218-e382a71b716b'],
  'Bar & Lounge': ['https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b','https://images.unsplash.com/photo-1470337458703-46ad1756a187','https://images.unsplash.com/photo-1536935338213-d2c1238b91c6'],
  'Sport & Bien-être': ['https://images.unsplash.com/photo-1534438327276-14e5300c3a48','https://images.unsplash.com/photo-1540497077202-7c8a3999166f','https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b']
};

const SERVICE_NAMES = {
  'Restaurant & Buffet': ['Buffet à Volonté (12h-17h)', 'Menu Prestige', 'Dégustation Africaine', 'Petit-déjeuner Continental'],
  'Hébergement': ['Studio Meublé Standing', 'Appartement 2 Chambres', 'Suite Junior', 'Appartement de Luxe'],
  'Événementiel': ['Grande Salle de Banquets', 'Salle de Conférence', 'Espace Réception Mariage', 'Salle de Séminaire'],
  'Bar & Lounge': ['Cocktail Signature WAB', 'Sélection Cave à Vins', 'Snack & Fast Food', 'Lounge VIP'],
  'Sport & Bien-être': ['Abonnement Salle de Sport', 'Coaching Personnalisé', 'Espace Cardio-Training', 'Séance Remise en Forme']
};
const sectorKeys = Object.keys(SERVICE_NAMES);

const generateProducts = () => {
  const products = [];
  for (let i = 1; i <= 20; i++) {
    const sector = sectorKeys[i % sectorKeys.length];
    const names = SERVICE_NAMES[sector];
    const images = CATEGORY_IMAGES[sector];
    const serviceBaseName = names[i % names.length];
    const imageUrl = images[i % images.length];
    const productName = `${serviceBaseName}`.trim();

    products.push({
      id: `service-${i}`,
      name: productName,
      description: `Profitez de notre service ${serviceBaseName} au Complexe WAB. Excellence et confort garantis à Douala, Bonamoussadi.`,
      price: 5000 + (Math.floor(Math.random() * 20) * 5000),
      category: sector,
      imageUrl: `${imageUrl}?auto=format&fit=crop&q=80&w=800`,
      stock: Math.floor(Math.random() * 5) + 1,
      featured: i % 4 === 0
    });
  }
  return products;
};

export const MOCK_PRODUCTS = generateProducts();
export const CATEGORIES = sectorKeys;

export const MOCK_DELIVERERS = [
  { id: 'dev-1', name: 'Abdoulaye', phone: '+237 670 00 00 01', zone: 'Douala (Akwa/Deido)' },
  { id: 'dev-2', name: 'Samuel', phone: '+237 690 00 00 02', zone: 'Yaoundé (Bastos/Mvan)' },
  { id: 'dev-3', name: 'Christian', phone: '+237 650 00 00 03', zone: 'Douala (Bonapriso/Logbessou)' }
];

export const MOCK_USERS_LIST = [
  { id: 'u1', name: 'Jean Dupont', email: 'jean.dupont@email.com', role: 'user', status: 'Actif', joinDate: '12/01/2026' },
  { id: 'u2', name: 'Marie Sissoko', email: 'marie.s@email.com', role: 'user', status: 'Actif', joinDate: '15/01/2026' },
  { id: 'u3', name: 'Aubry Admin', email: 'admin@assequip.cm', role: 'admin', status: 'Actif', joinDate: '01/01/2026' },
  { id: 'u4', name: 'Alain Kotto', email: 'alain.k@email.com', role: 'user', status: 'Inactif', joinDate: '20/01/2026' },
  { id: 'u5', name: 'Inès Kamga', email: 'ines.k@email.com', role: 'user', status: 'Actif', joinDate: '02/02/2026' },
];

export const MOCK_ORDERS = [
  {
    id: 'ORD-2026-001',
    customer: 'Jean Dupont',
    date: '2026-02-04',
    total: 450000,
    status: 'En préparation',
    items: [{ name: 'Prestation Traiteur Prestige', quantity: 1, price: 450000 }]
  },
  {
    id: 'ORD-2026-002',
    customer: 'Marie Sissoko',
    date: '2026-02-03',
    total: 125000,
    status: 'Livré',
    items: [{ name: 'Menu Dégustation Signature', quantity: 1, price: 125000 }]
  }
];
