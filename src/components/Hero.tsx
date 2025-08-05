import React from 'react';
import { Leaf, Users, ShoppingCart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Farm to Table, Direct Connection
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Connect directly with local farmers and get the freshest produce at the best prices. 
            Support sustainable farming while enjoying farm-fresh quality.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Leaf className="h-12 w-12 mx-auto mb-4 text-green-200" />
              <h3 className="text-xl font-semibold mb-2">Fresh & Organic</h3>
              <p className="text-green-100">Direct from farms with no middlemen</p>
            </div>
            
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-green-200" />
              <h3 className="text-xl font-semibold mb-2">Direct Contact</h3>
              <p className="text-green-100">Connect directly with farmers</p>
            </div>
            
            <div className="text-center">
              <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-green-200" />
              <h3 className="text-xl font-semibold mb-2">Bulk Orders</h3>
              <p className="text-green-100">Minimum 5 units for better prices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;