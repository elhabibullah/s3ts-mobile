import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Language } from '../types';

interface NavbarProps {
  onNavigate: (view: 'home' | 'store' | 'investors' | 'about' | 'telecom') => void;
  cartCount?: number;
  currentView: 'home' | 'store' | 'investors' | 'about' | 'telecom';
  language: Language;
  translations: any;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, cartCount = 0, currentView, language, translations }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    if (href === '#store') {
        onNavigate('store');
    } else if (href === '#telecom') {
        onNavigate('telecom');
    } else {
        onNavigate('home');
        // If it's a hash link, scroll to it after rendering home
        if (href.startsWith('#') && href !== '#telecom') {
             setTimeout(() => {
                const element = document.querySelector(href);
                element?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
    setMobileMenuOpen(false);
  };
  
  // Font logic
  const fontClass = language === 'ar' ? 'font-tajawal font-bold' : 'font-sans font-medium';

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 bg-white shadow-sm text-gray-900 transition-all duration-300 h-16 md:h-24 flex items-center"
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative flex items-center justify-between w-full h-full">
          
          {/* Desktop Nav (Left/Start) */}
          <div className="hidden lg:flex items-center gap-8 flex-1">
            {NAV_ITEMS.slice(0, 3).map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`text-xs tracking-widest uppercase hover:text-gray-500 transition-colors relative group ${fontClass}`}
              >
                {translations[item.label]}
                <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${language === 'ar' ? 'origin-right' : 'origin-left'}`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-black flex-1 flex justify-start z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Center Logo */}
          <div className="flex-0 flex justify-center absolute left-1/2 transform -translate-x-1/2 z-50">
            <button onClick={() => onNavigate('home')} className="flex flex-col items-center group">
               <img 
                  src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/SUM%C4%80MAH_whitelogo_white_bg.jpg" 
                  alt="Sumāmah Logo" 
                  className="h-14 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
               />
            </button>
          </div>

          {/* Desktop Nav (Right/End) */}
          <div className="hidden lg:flex items-center justify-end gap-8 flex-1">
             {NAV_ITEMS.slice(3).map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`text-xs tracking-widest uppercase hover:text-gray-500 transition-colors relative group ${fontClass}`}
              >
                {translations[item.label]}
                <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${language === 'ar' ? 'origin-right' : 'origin-left'}`}></span>
              </button>
            ))}
            <div className={`flex items-center gap-6 ${language === 'ar' ? 'border-r pr-6' : 'border-l pl-6'} border-gray-300/30`}>
                <button className="hover:opacity-60 transition-opacity">
                  <Search size={18} strokeWidth={1} />
                </button>
                <button onClick={() => onNavigate('store')} className="hover:opacity-60 transition-opacity relative">
                  <ShoppingBag size={18} strokeWidth={1} />
                  {cartCount > 0 && <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>}
                </button>
                <button className="hover:opacity-60 transition-opacity">
                  <User size={18} strokeWidth={1} />
                </button>
            </div>
          </div>

          {/* Mobile Right Icons */}
           <div className="flex lg:hidden items-center justify-end gap-4 flex-1 z-50">
               <button onClick={() => onNavigate('store')} className="hover:opacity-60">
                  <ShoppingBag size={20} strokeWidth={1} />
                </button>
           </div>

        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-40 lg:hidden pointer-events-none`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {/* Backdrop */}
        <div 
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`} 
            onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* White Drawer Panel */}
        <div 
            className={`absolute top-0 ${language === 'ar' ? 'right-0 border-l' : 'left-0 border-r'} h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-500 ease-out flex flex-col pt-24 px-8 pointer-events-auto border-gray-100 ${mobileMenuOpen ? 'translate-x-0' : (language === 'ar' ? 'translate-x-full' : '-translate-x-full')}`}
        >
          {/* Menu Items */}
          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-xs tracking-[0.25em] uppercase text-gray-900 text-left hover:text-gray-500 transition-colors ${fontClass}`}
                >
                  {translations[item.label]}
                </button>
            ))}
          </div>

          {/* Mobile Footer Links */}
          <div className="mt-auto mb-10 border-t border-gray-100 pt-8 flex flex-col gap-6">
             <button className="flex items-center gap-4 text-gray-500 hover:text-gray-900">
                <Search size={18} strokeWidth={1} />
                <span className={`text-[10px] tracking-widest uppercase ${fontClass}`}>{translations.nav_search}</span>
             </button>
             <button onClick={() => {onNavigate('store'); setMobileMenuOpen(false)}} className="flex items-center gap-4 text-gray-500 hover:text-gray-900">
                <ShoppingBag size={18} strokeWidth={1} />
                <span className={`text-[10px] tracking-widest uppercase ${fontClass}`}>{translations.nav_store}</span>
             </button>
             <button className="flex items-center gap-4 text-gray-500 hover:text-gray-900">
                <User size={18} strokeWidth={1} />
                <span className={`text-[10px] tracking-widest uppercase ${fontClass}`}>{translations.nav_account}</span>
             </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;