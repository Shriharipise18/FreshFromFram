import React from 'react';
import { Sprout, User, Store } from 'lucide-react';

interface HeaderProps {
  currentView: 'marketplace' | 'dashboard';
  onViewChange: (view: 'marketplace' | 'dashboard') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-800">Fresh From Farm</span>
          </div>
          
          <nav className="flex items-center space-x-6">
            <button
              onClick={() => onViewChange('marketplace')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                currentView === 'marketplace'
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <Store className="h-5 w-5" />
              <span>Marketplace</span>
            </button>
            
            <button
              onClick={() => onViewChange('dashboard')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                currentView === 'dashboard'
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <User className="h-5 w-5" />
              <span>Farmer Dashboard</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
