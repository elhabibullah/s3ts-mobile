
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import ChatSupport from './components/ChatSupport';
import StorePage from './components/StorePage';
import CartPage from './components/CartPage';
import InvestorsPage from './components/InvestorsPage';
import AboutPage from './components/AboutPage';
import S3TsChatWeb from './components/S3TsChatWeb';
import TelecomPage from './components/TelecomPage';
import FintechPage from './components/FintechPage';
import FitnessPage from './components/FitnessPage';
import CVMakerPage from './components/CVMakerPage';
import NovaTaxPage from './components/NovaTaxPage';
import FoldablePage from './components/FoldablePage';
import NotebookPage from './components/NotebookPage';
import { PRODUCTS, TRANSLATIONS } from './constants';
import { Language, AppView, CartItem, Product } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>(undefined);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  const [language, setLanguage] = useState<Language>('en');
  const t = TRANSLATIONS[language];

  const handleNavigate = (view: AppView, productId?: string) => {
    setCurrentView(view);
    setSelectedProductId(productId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCurrentView('cart');
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    setTimeout(() => {
        const elements = document.querySelectorAll('.reveal');
        elements.forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [currentView, language]); 

  // Page spéciale Chat sans Navbar
  if (currentView === 'chat-web') return <S3TsChatWeb onNavigate={() => setCurrentView('home')} />;

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} language={language} translations={t} />
            <section id="ai" className="py-20 md:py-32 bg-black text-white reveal overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                   <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                       <div className={`flex-1 text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'} order-2 md:order-1`}>
                          <span className="block text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 animate-pulse">{t.bio_tag}</span>
                          <h2 className={`text-3xl md:text-5xl mb-6 font-display font-medium`}>{t.bio_title}</h2>
                          <p className="text-gray-400 text-sm leading-relaxed tracking-wide max-w-md mx-auto md:mx-0 font-sans font-light">{t.bio_desc}</p>
                       </div>
                       <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
                            <img src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_bg_removed_facial_recognition.png" alt="S3Ts Neural Face ID" className="h-64 md:h-96 w-auto object-contain drop-shadow-2xl opacity-90"/>
                       </div>
                   </div>
                </div>
            </section>
            <ProductGrid 
                title={t.tech_title} 
                subtitle={t.tech_subtitle}
                products={PRODUCTS}
                onNavigate={handleNavigate}
                language={language}
            />
          </>
        );
      case 'store':
        return <StorePage onAddToCart={handleAddToCart} language={language} translations={t} selectedProductId={selectedProductId} onProductSelect={(id) => setSelectedProductId(id)} />;
      case 'cart':
        return <CartPage items={cartItems} onUpdateQuantity={handleUpdateQuantity} onRemove={handleRemoveFromCart} onContinueShopping={() => handleNavigate('store')} language={language} translations={t} />;
      case 'telecom':
        return <TelecomPage onNavigate={handleNavigate} language={language} />;
      case 'fintech':
        return <FintechPage onNavigate={handleNavigate} language={language} />;
      case 'fitness':
        return <FitnessPage onNavigate={handleNavigate} language={language} />;
      case 'cv-maker':
        return <CVMakerPage onNavigate={handleNavigate} language={language} />;
      case 'nova-tax':
        return <NovaTaxPage onNavigate={handleNavigate} language={language} />;
      case 'foldable':
        return <FoldablePage onNavigate={handleNavigate} language={language} translations={t} />;
      case 'notebook':
        return <NotebookPage onNavigate={handleNavigate} language={language} translations={t} />;
      case 'investors':
        return <InvestorsPage />;
      case 'about':
        return <AboutPage onNavigate={() => handleNavigate('home')} language={language} translations={t} />;
      default:
        return <Hero onNavigate={handleNavigate} language={language} translations={t} />;
    }
  };

  return (
    <div className={`min-h-screen bg-white text-gray-900 selection:bg-black selection:text-white ${language === 'ar' ? 'font-tajawal' : 'font-sans'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar 
        onNavigate={handleNavigate} 
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
        currentView={currentView} 
        language={language} 
        translations={t} 
      />
      
      <main className="pt-0">
        {renderView()}
      </main>

      <Footer onNavigate={handleNavigate} language={language} onToggleLanguage={toggleLanguage} translations={t} />
      <ChatSupport language={language} />
    </div>
  );
};

export default App;
