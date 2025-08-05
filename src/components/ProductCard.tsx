import React from 'react';
import { MapPin, Phone, Mail, Calendar, Package } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onContactFarmer: (product: Product) => void;
  onPlaceOrder: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onContactFarmer,
  onPlaceOrder
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {product.season}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Package className="h-4 w-4 mr-2" />
            <span>₹{product.price}/{product.unit} • Min: {product.minOrder} {product.unit}</span>
          </div>
          
          {product.harvestDate && (
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Harvested: {new Date(product.harvestDate).toLocaleDateString()}</span>
            </div>
          )}
        </div>
        
        <div className="border-t pt-4 mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Farmer Details</h4>
          <div className="space-y-1 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="font-medium">{product.farmer.name}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{product.farmer.location}</span>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={() => onContactFarmer(product)}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
          >
            Contact Farmer
          </button>
          <button
            onClick={() => onPlaceOrder(product)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;