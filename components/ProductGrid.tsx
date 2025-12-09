import React from 'react';
import { Product, Language } from '../types';

interface ProductGridProps {
  title: string;
  subtitle?: string;
  products: Product[];
  bgColor?: string;
  onNavigate: (view: 'home' | 'store') => void;
  language?: Language;
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, subtitle, products, bgColor = "bg-white", onNavigate, language = 'en' }) => {
  const displayFont = language === 'ar' ? 'font-amiri font-bold' : 'font-display font-medium';
  
  return (
    <section className={`py-20 md:py-32 ${bgColor} reveal`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
            <h2 className={`text-3xl md:text-4xl text-gray-900 mb-4 tracking-wide ${displayFont}`}>{title}</h2>
            {subtitle && <p className="text-gray-500 font-light text-sm md:text-base tracking-wide uppercase">{subtitle}</p>}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {products.map((product) => (
                <div 
                    key={product.id} 
                    className="group relative cursor-pointer"
                    onClick={() => onNavigate('store')}
                >
                    {/* Badge */}
                    {product.isNew && (
                        <span className={`absolute top-4 ${language === 'ar' ? 'right-4' : 'left-4'} bg-black text-white text-[10px] font-bold px-3 py-1 tracking-widest z-10`}>
                            NEW
                        </span>
                    )}

                    {/* Image */}
                    <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100 mb-6 relative">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                        />
                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                        <h3 className={`text-xl ${displayFont} text-gray-900 mb-2`}>{product.name}</h3>
                        <p className="text-gray-500 text-xs tracking-widest uppercase mb-6">{product.tagline}</p>
                        
                        <div className="flex justify-center">
                             <button className="text-xs font-bold tracking-widest uppercase border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all">
                                Discover
                             </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;