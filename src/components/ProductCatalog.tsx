import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductCatalogProps {
  products: Product[];
  onContactFarmer: (product: Product) => void;
  onPlaceOrder: (product: Product) => void;
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  onContactFarmer,
  onPlaceOrder
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSeason, setSelectedSeason] = useState('All');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  const seasons = ['All', ...Array.from(new Set(products.map(p => p.season)))];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.farmer.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSeason = selectedSeason === 'All' || product.season === selectedSeason;
      
      return matchesSearch && matchesCategory && matchesSeason && product.inStock;
    });
  }, [products, searchTerm, selectedCategory, selectedSeason]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Fresh Products Available</h2>
          
          {/* Search and Filters */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products, farmers, locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'All' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {seasons.map(season => (
                  <option key={season} value={season}>
                    {season === 'All' ? 'All Seasons' : season}
                  </option>
                ))}
              </select>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <Filter className="h-5 w-5" />
                <span className="text-sm">
                  {filteredProducts.length} products found
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onContactFarmer={onContactFarmer}
              onPlaceOrder={onPlaceOrder}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;