
import React, { useState } from 'react';
import { Check, Shield, Zap, X, ChevronRight, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Language, Product } from '../types';
import { PRODUCTS } from '../constants';

interface StorePageProps {
  onAddToCart: (product: Product) => void;
  language?: Language;
  translations?: any;
  selectedProductId?: string;
  onProductSelect: (id?: string) => void;
}

const VARIANTS = [
    { id: 'grey', name: 'Titanium Grey', color: 'bg-gray-300', image: 'https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_grey_rectoverso-transparent.png' },
    { id: 'black', name: 'Midnight Black', color: 'bg-zinc-900', image: 'https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_black_rectoverso-transparent.png' },
    { id: 'blue', name: 'Sapphire Blue', color: 'bg-blue-900', image: 'https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_blue_rectoverso-transparent.png' },
];

const StorePage: React.FC<StorePageProps> = ({ onAddToCart, language = 'en', translations, selectedProductId, onProductSelect }) => {
  const t = translations || {};
  const currentProduct = selectedProductId ? PRODUCTS.find(p => p.id === selectedProductId) : null;
  const [selectedVariant, setSelectedVariant] = useState(VARIANTS[0]);
  const [showSpecs, setShowSpecs] = useState(false);

  const displayFont = language === 'ar' ? 'font-amiri font-bold' : 'font-display font-medium';
  const textFont = language === 'ar' ? 'font-tajawal' : 'font-sans font-light';

  if (!currentProduct) {
    return (
      <div className={`pt-28 md:pt-40 pb-32 bg-white min-h-screen ${textFont} animate-fade-in`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="text-center mb-6">
                <h1 className={`text-4xl md:text-6xl mb-4 ${displayFont}`}>{t.store_crumb}</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {PRODUCTS.map((product) => (
                    <div 
                        key={product.id} 
                        onClick={() => onProductSelect(product.id)}
                        className="group cursor-pointer border border-gray-100 p-8 rounded-[40px] hover:shadow-xl transition-all duration-500 bg-white flex flex-col items-center"
                    >
                        <div className="aspect-square w-full mb-8 flex items-center justify-center">
                            <img src={product.image} alt={product.name} className="w-[85%] h-auto object-contain transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <h3 className={`text-2xl mb-6 ${displayFont}`}>{product.name}</h3>
                        <div className="text-xl font-bold text-black mb-6">{product.price}</div>
                        <button className="px-10 py-4 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest transition-colors">
                            Configure
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`pb-20 bg-white min-h-screen animate-fade-in ${textFont} relative`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Bouton de fermeture X repositionné pour être visible sous le header fixe */}
      <button 
          onClick={() => onProductSelect(undefined)}
          className="absolute top-28 md:top-36 right-8 md:right-12 p-3 hover:bg-gray-100 rounded-full transition-all z-10"
          aria-label="Close"
      >
          <X size={28} className="text-gray-900" />
      </button>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-4">
        <button 
            onClick={() => onProductSelect(undefined)}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
        >
            <ArrowLeft size={16} className={language === 'ar' ? 'rotate-180' : ''} />
            {language === 'ar' ? 'العودة للمتجر' : 'Back to Store'}
        </button>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="flex-1">
                <div className="w-full relative flex items-center justify-center bg-gray-50 rounded-[40px] aspect-[4/5] overflow-hidden">
                    <img 
                        src={currentProduct.id === 'pro3' ? selectedVariant.image : currentProduct.image} 
                        alt={currentProduct.name} 
                        className="w-[85%] h-auto object-contain drop-shadow-2xl animate-float"
                    />
                </div>
            </div>

            <div className="flex-1">
                <div className="border-b border-gray-100 pb-8 mb-8">
                    <h1 className={`text-4xl md:text-6xl text-gray-900 mb-8 ${displayFont}`}>{currentProduct.name}</h1>
                    <div className="text-4xl font-bold text-black">{currentProduct.price}</div>
                    <div className="flex items-center gap-2 text-green-600 text-xs font-bold mt-6 uppercase tracking-widest">
                        <Check size={14} /> {t.store_stock}
                    </div>
                </div>

                {currentProduct.id === 'pro3' && (
                  <div className="mb-12">
                      <label className="block text-xs font-bold uppercase tracking-widest mb-4">Color: <span className="text-gray-900">{selectedVariant.name}</span></label>
                      <div className="flex gap-4">
                          {VARIANTS.map((v) => (
                              <button 
                                  key={v.id}
                                  onClick={() => setSelectedVariant(v)}
                                  className={`w-12 h-12 rounded-full border-2 ${v.color} ${selectedVariant.id === v.id ? 'ring-2 ring-offset-2 ring-black' : 'border-transparent'}`}
                              />
                          ))}
                      </div>
                  </div>
                )}

                <div className="flex flex-col gap-4 mb-10">
                    <button 
                        onClick={() => onAddToCart(currentProduct)}
                        className="w-full py-6 bg-black text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-center gap-3"
                    >
                        <ShoppingBag size={16} /> {t.store_add}
                    </button>
                    <button 
                        onClick={() => setShowSpecs(true)}
                        className="w-full border border-gray-200 py-6 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                    >
                        {t.store_view_specs} <ChevronRight size={16} className={language === 'ar' ? 'rotate-180' : ''} />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
