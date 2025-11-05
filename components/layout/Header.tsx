// components/layout/Header.tsx
'use client';
import { useState } from 'react';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import Logo from '../ui/Logo'; // اگر .tsx هست

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigation = [
    { name: 'خانه', href: '/' },
    { name: 'دخترانه', href: '/collections/girls' },
    { name: 'پسرانه', href: '/collections/boys' },
    { name: 'نوزاد', href: '/collections/baby' },
    { name: 'برندها', href: '/brands' },
    { name: 'مجله', href: '/blog' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-primary-500 text-white py-2 px-4 text-center text-sm">
        🎁 حمل و نقل رایگان برای خریدهای بالای ۲۰۰ هزار تومان
      </div>

      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="large" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 space-x-reverse">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-600 hover:text-primary-500 transition-colors"
            >
              <Search size={20} />
            </button>
            
            <button className="p-2 text-gray-600 hover:text-primary-500 transition-colors relative">
              <Heart size={20} />
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                2
              </span>
            </button>
            
            <button className="p-2 text-gray-600 hover:text-primary-500 transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                3
              </span>
            </button>
            
            <button className="p-2 text-gray-600 hover:text-primary-500 transition-colors">
              <User size={20} />
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-500 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
              <Logo size="default" />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="جستجو در محصولات... (مثلاً: پیراهن پسرانه)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                autoFocus
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;