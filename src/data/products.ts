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
    image: 'https://images.unsplash.com/photo-1605027990121-cbae9e0642df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbmdvfGVufDB8fDB8fHww',
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
    image: 'https://plus.unsplash.com/premium_photo-1670909649532-d1d68ee475cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hlYXR8ZW58MHx8MHx8fDA%3D',
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
    image: 'https://plus.unsplash.com/premium_photo-1705404738477-24fc4e77f836?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJhc21hdGklMjByaWNlfGVufDB8fDB8fHww',
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
    image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/09/green-peas-thumb.jpg',
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
    image: 'https://cdn.britannica.com/27/78227-050-28A68F87/cauliflower-Head-colour-White-brown-cultivars.jpg?w=300',
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
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6Bct2Mdz-6uMxUw_Xecv1LHYRTZlf3XVO_0WbbvSI5DFljzFGk6CXKqjk5xPt1VZhfMPVgrLWJPyNvtzKHhWPGovdKkaZU780dpri-DKs2Q',
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
    image: 'data:image/jpeg;base64,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',
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
    image: 'https://media.istockphoto.com/id/1310394235/photo/ripe-papaya-fruit-in-a-basket-holding-by-woman-hand.jpg?s=612x612&w=0&k=20&c=lUopZ1AD5BqJ4O1OT2UByQCEJ0trsBTaShsb16Aa2wc=',
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
    image: 'https://images.unsplash.com/photo-1700663654497-0eb7cdc152b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9tb2dyYW5hdGV8ZW58MHx8MHx8fDA%3D',
    description: 'Fresh pomegranates rich in antioxidants and natural sweetness.',
    inStock: true,
    harvestDate: '2024-02-15'
  }
];
