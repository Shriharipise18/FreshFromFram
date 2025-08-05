import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import ContactModal from './components/ContactModal';
import OrderModal from './components/OrderModal';
import FarmerDashboard from './components/FarmerDashboard';
import { Product, ContactInfo, OrderDetails } from './types';
import { sampleProducts } from './data/products';

function App() {
  const [currentView, setCurrentView] = useState<'marketplace' | 'dashboard'>('marketplace');
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const handleContactFarmer = (product: Product) => {
    setSelectedProduct(product);
    setShowContactModal(true);
  };

  const handlePlaceOrder = (product: Product) => {
    setSelectedProduct(product);
    setShowOrderModal(true);
  };

  const handleSendMessage = (contactInfo: ContactInfo) => {
    console.log('Message sent:', contactInfo);
    alert('Message sent successfully! The farmer will contact you soon.');
    setShowContactModal(false);
  };

  const handleSubmitOrder = (orderDetails: OrderDetails) => {
    console.log('Order placed:', orderDetails);
    alert('Order placed successfully! The farmer will confirm your order soon.');
    setShowOrderModal(false);
  };

  const handleAddProduct = (product: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...product,
      id: Date.now().toString(),
    };
    setProducts([...products, newProduct]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentView={currentView} 
        onViewChange={setCurrentView} 
      />
      
      {currentView === 'marketplace' ? (
        <>
          <Hero />
          <ProductCatalog 
            products={products}
            onContactFarmer={handleContactFarmer}
            onPlaceOrder={handlePlaceOrder}
          />
        </>
      ) : (
        <FarmerDashboard 
          products={products}
          onAddProduct={handleAddProduct}
        />
      )}

      {showContactModal && selectedProduct && (
        <ContactModal
          product={selectedProduct}
          onClose={() => setShowContactModal(false)}
          onSendMessage={handleSendMessage}
        />
      )}

      {showOrderModal && selectedProduct && (
        <OrderModal
          product={selectedProduct}
          onClose={() => setShowOrderModal(false)}
          onSubmitOrder={handleSubmitOrder}
        />
      )}
    </div>
  );
}

export default App;