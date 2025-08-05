import { Product } from '../types';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Tomatoes',
    category: 'Vegetables',
    season: 'Summer',
    price: 45,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Rajesh Kumar',
      location: 'Punjab, India',
      phone: '+91-9876543210',
      email: 'rajesh.farm@gmail.com'
    },
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Fresh organic tomatoes grown without pesticides. Perfect for cooking and salads.',
    inStock: true,
    harvestDate: '2024-06-15'
  },
  {
    id: '2',
    name: 'Fresh Mangoes',
    category: 'Fruits',
    season: 'Summer',
    price: 120,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Priya Sharma',
      location: 'Maharashtra, India',
      phone: '+91-9123456789',
      email: 'priya.mangofarm@gmail.com'
    },
    image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Sweet and juicy Alphonso mangoes directly from our orchard.',
    inStock: true,
    harvestDate: '2024-05-20'
  },
  {
    id: '3',
    name: 'Wheat Grains',
    category: 'Grains',
    season: 'Winter',
    price: 25,
    unit: 'kg',
    minOrder: 10,
    farmer: {
      name: 'Suresh Patel',
      location: 'Gujarat, India',
      phone: '+91-9345678901',
      email: 'suresh.grains@gmail.com'
    },
    image: 'https://www.pexels.com/photo/selective-focus-photography-of-wheat-field-265216/',
    description: 'High-quality wheat grains perfect for making flour and bread.',
    inStock: true,
    harvestDate: '2024-03-10'
  },
  {
    id: '4',
    name: 'Fresh Spinach',
    category: 'Vegetables',
    season: 'Winter',
    price: 30,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Meera Devi',
      location: 'Haryana, India',
      phone: '+91-9567890123',
      email: 'meera.greens@gmail.com'
    },
    image: 'https://images.pexels.com/photos/2255925/pexels-photo-2255925.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Nutrient-rich fresh spinach leaves, perfect for healthy meals.',
    inStock: true,
    harvestDate: '2024-01-25'
  },
  {
    id: '5',
    name: 'Basmati Rice',
    category: 'Grains',
    season: 'All Season',
    price: 85,
    unit: 'kg',
    minOrder: 10,
    farmer: {
      name: 'Anil Singh',
      location: 'Punjab, India',
      phone: '+91-9789012345',
      email: 'anil.rice@gmail.com'
    },
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Premium quality Basmati rice with long grains and aromatic fragrance.',
    inStock: true,
    harvestDate: '2024-04-05'
  },
  {
    id: '6',
    name: 'Fresh Apples',
    category: 'Fruits',
    season: 'Winter',
    price: 150,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Kamal Thakur',
      location: 'Himachal Pradesh, India',
      phone: '+91-9901234567',
      email: 'kamal.apples@gmail.com'
    },
    image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Crisp and sweet apples from the hills of Himachal Pradesh.',
    inStock: true,
    harvestDate: '2024-02-12'
  },
  {
    id: '7',
    name: 'Fresh Carrots',
    category: 'Vegetables',
    season: 'Winter',
    price: 35,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Ramesh Yadav',
      location: 'Uttar Pradesh, India',
      phone: '+91-9234567890',
      email: 'ramesh.vegetables@gmail.com'
    },
    image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Fresh orange carrots rich in vitamins and perfect for cooking.',
    inStock: true,
    harvestDate: '2024-01-30'
  },
  {
    id: '8',
    name: 'Organic Potatoes',
    category: 'Vegetables',
    season: 'All Season',
    price: 20,
    unit: 'kg',
    minOrder: 10,
    farmer: {
      name: 'Sunita Kumari',
      location: 'Bihar, India',
      phone: '+91-9456789012',
      email: 'sunita.potatoes@gmail.com'
    },
    image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Organic potatoes grown without chemicals, perfect for all cooking needs.',
    inStock: true,
    harvestDate: '2024-02-20'
  },
  {
    id: '9',
    name: 'Fresh Bananas',
    category: 'Fruits',
    season: 'All Season',
    price: 40,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Lakshmi Nair',
      location: 'Kerala, India',
      phone: '+91-9678901234',
      email: 'lakshmi.bananas@gmail.com'
    },
    image: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Sweet and ripe bananas rich in potassium and natural sugars.',
    inStock: true,
    harvestDate: '2024-06-01'
  },
  {
    id: '10',
    name: 'Fresh Onions',
    category: 'Vegetables',
    season: 'All Season',
    price: 25,
    unit: 'kg',
    minOrder: 10,
    farmer: {
      name: 'Vijay Patil',
      location: 'Maharashtra, India',
      phone: '+91-9890123456',
      email: 'vijay.onions@gmail.com'
    },
    image: 'https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Fresh red onions essential for Indian cooking and daily meals.',
    inStock: true,
    harvestDate: '2024-03-15'
  },
  {
    id: '11',
    name: 'Green Peas',
    category: 'Vegetables',
    season: 'Winter',
    price: 60,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Deepak Sharma',
      location: 'Rajasthan, India',
      phone: '+91-9012345678',
      email: 'deepak.peas@gmail.com'
    },
    image: 'https://images.pexels.com/photos/1359326/pexels-photo-1359326.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Fresh green peas perfect for curries and healthy meals.',
    inStock: true,
    harvestDate: '2024-01-15'
  },
  {
    id: '12',
    name: 'Fresh Oranges',
    category: 'Fruits',
    season: 'Winter',
    price: 80,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Ravi Kumar',
      location: 'Andhra Pradesh, India',
      phone: '+91-9123450987',
      email: 'ravi.oranges@gmail.com'
    },
    image: 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Juicy and vitamin C rich oranges perfect for fresh juice.',
    inStock: true,
    harvestDate: '2024-02-05'
  },
  {
    id: '13',
    name: 'Fresh Cauliflower',
    category: 'Vegetables',
    season: 'Winter',
    price: 40,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Geeta Devi',
      location: 'Punjab, India',
      phone: '+91-9345612789',
      email: 'geeta.cauliflower@gmail.com'
    },
    image: 'https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Fresh white cauliflower perfect for curries and healthy cooking.',
    inStock: true,
    harvestDate: '2024-01-20'
  },
  {
    id: '14',
    name: 'Fresh Lemons',
    category: 'Fruits',
    season: 'All Season',
    price: 50,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Mohan Reddy',
      location: 'Tamil Nadu, India',
      phone: '+91-9567812345',
      email: 'mohan.lemons@gmail.com'
    },
    image: 'https://images.pexels.com/photos/1414130/pexels-photo-1414130.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Fresh lemons rich in vitamin C, perfect for cooking and drinks.',
    inStock: true,
    harvestDate: '2024-05-10'
  },
  {
    id: '15',
    name: 'Fresh Cabbage',
    category: 'Vegetables',
    season: 'Winter',
    price: 20,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Sita Sharma',
      location: 'Himachal Pradesh, India',
      phone: '+91-9789456123',
      email: 'sita.cabbage@gmail.com'
    },
    image: 'https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Fresh green cabbage perfect for salads and cooking.',
    inStock: true,
    harvestDate: '2024-02-01'
  },
  {
    id: '16',
    name: 'Fresh Corn',
    category: 'Vegetables',
    season: 'Monsoon',
    price: 30,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Arjun Singh',
      location: 'Madhya Pradesh, India',
      phone: '+91-9012678345',
      email: 'arjun.corn@gmail.com'
    },
    image: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Sweet fresh corn perfect for roasting and cooking.',
    inStock: true,
    harvestDate: '2024-07-15'
  },
  {
    id: '17',
    name: 'Fresh Grapes',
    category: 'Fruits',
    season: 'Summer',
    price: 100,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Kiran Patil',
      location: 'Maharashtra, India',
      phone: '+91-9234561890',
      email: 'kiran.grapes@gmail.com'
    },
    image: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Sweet and juicy grapes perfect for eating fresh or making juice.',
    inStock: true,
    harvestDate: '2024-06-20'
  },
  {
    id: '18',
    name: 'Fresh Ginger',
    category: 'Vegetables',
    season: 'All Season',
    price: 80,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Radha Krishnan',
      location: 'Kerala, India',
      phone: '+91-9456123789',
      email: 'radha.ginger@gmail.com'
    },
    image: 'https://images.pexels.com/photos/161556/ginger-plant-asia-rhizome-161556.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Fresh ginger root perfect for cooking and health benefits.',
    inStock: true,
    harvestDate: '2024-04-25'
  },
  {
    id: '19',
    name: 'Fresh Garlic',
    category: 'Vegetables',
    season: 'All Season',
    price: 120,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Sunil Gupta',
      location: 'Gujarat, India',
      phone: '+91-9678345612',
      email: 'sunil.garlic@gmail.com'
    },
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Fresh garlic bulbs essential for Indian cooking and health.',
    inStock: true,
    harvestDate: '2024-03-20'
  },
  {
    id: '20',
    name: 'Fresh Watermelon',
    category: 'Fruits',
    season: 'Summer',
    price: 15,
    unit: 'kg',
    minOrder: 10,
    farmer: {
      name: 'Prakash Jain',
      location: 'Rajasthan, India',
      phone: '+91-9890567234',
      email: 'prakash.watermelon@gmail.com'
    },
    image: 'https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Sweet and refreshing watermelons perfect for summer.',
    inStock: true,
    harvestDate: '2024-06-10'
  },
  {
    id: '21',
    name: 'Fresh Brinjal',
    category: 'Vegetables',
    season: 'All Season',
    price: 35,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Kamala Devi',
      location: 'Karnataka, India',
      phone: '+91-9012789456',
      email: 'kamala.brinjal@gmail.com'
    },
    image: 'https://images.pexels.com/photos/321551/pexels-photo-321551.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Fresh purple brinjal perfect for curries and traditional dishes.',
    inStock: true,
    harvestDate: '2024-05-15'
  },
  {
    id: '22',
    name: 'Fresh Papaya',
    category: 'Fruits',
    season: 'All Season',
    price: 30,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Raman Nair',
      location: 'Kerala, India',
      phone: '+91-9234567123',
      email: 'raman.papaya@gmail.com'
    },
    image: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Sweet and nutritious papaya rich in vitamins and enzymes.',
    inStock: true,
    harvestDate: '2024-05-25'
  },
  {
    id: '23',
    name: 'Fresh Cucumber',
    category: 'Vegetables',
    season: 'Summer',
    price: 25,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Shanti Devi',
      location: 'Haryana, India',
      phone: '+91-9456789234',
      email: 'shanti.cucumber@gmail.com'
    },
    image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Fresh green cucumbers perfect for salads and cooling dishes.',
    inStock: true,
    harvestDate: '2024-06-05'
  },
  {
    id: '24',
    name: 'Fresh Pomegranate',
    category: 'Fruits',
    season: 'Winter',
    price: 180,
    unit: 'kg',
    minOrder: 5,
    farmer: {
      name: 'Ashok Kumar',
      location: 'Maharashtra, India',
      phone: '+91-9678912345',
      email: 'ashok.pomegranate@gmail.com'
    },
    image: 'https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-65256.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Fresh pomegranates rich in antioxidants and natural sweetness.',
    inStock: true,
    harvestDate: '2024-02-15'
  }
];
