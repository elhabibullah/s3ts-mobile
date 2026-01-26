
import React from 'react';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, CreditCard } from 'lucide-react';
import { CartItem, Language } from '../types';

interface CartPageProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onContinueShopping: () => void;
  language: Language;
  translations: any;
}

const CartPage: React.FC<CartPageProps> = ({ items, onUpdateQuantity, onRemove, onContinueShopping, language, translations: t }) => {
  const isAr = language === 'ar';
  const displayFont = isAr ? 'font-amiri font-bold' : 'font-display font-medium';
  const textFont = isAr ? 'font-tajawal' : 'font-sans font-light';

  const calculateTotal = () => {
    return items.reduce((acc, item) => {
      // Extraire le nombre du string "SAR 6,375.00"
      const price = parseFloat(item.price?.replace(/[^0-9.]/g, '') || '0');
      return acc + (price * item.quantity);
    }, 0);
  };

  if (items.length === 0) {
    return (
      <div className={`min-h-[70vh] flex flex-col items-center justify-center bg-white ${textFont}`} dir={isAr ? 'rtl' : 'ltr'}>
        <div className="p-8 bg-gray-50 rounded-full mb-8 text-gray-300">
            <ShoppingBag size={64} strokeWidth={1} />
        </div>
        <h2 className={`text-3xl mb-4 ${displayFont}`}>Your bag is empty</h2>
        <p className="text-gray-400 mb-12 uppercase tracking-widest text-[10px]">Explore the future of tech.</p>
        <button 
            onClick={onContinueShopping}
            className="px-12 py-5 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all"
        >
            Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className={`pt-12 pb-32 bg-white min-h-screen ${textFont}`} dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="flex justify-between items-end mb-16 pb-8 border-b border-gray-100">
            <div>
                <h1 className={`text-4xl md:text-6xl mb-4 ${displayFont}`}>Shopping Bag</h1>
                <p className="text-gray-400 uppercase tracking-widest text-[10px]">Review your order details</p>
            </div>
            <button 
                onClick={onContinueShopping}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-600 hover:text-black transition-colors pb-1 border-b border-teal-600 hover:border-black"
            >
                <ArrowLeft size={14} className={isAr ? 'rotate-180' : ''} />
                Continue Shopping
            </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
            {/* Items List */}
            <div className="flex-1 space-y-8">
                {items.map((item) => (
                    <div key={item.id} className="flex flex-col md:flex-row gap-8 p-8 border border-gray-100 rounded-[40px] hover:shadow-lg transition-all duration-500 bg-white items-center">
                        <div className="w-40 h-40 bg-gray-50 rounded-3xl p-6 shrink-0 flex items-center justify-center overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-auto object-contain hover:scale-110 transition-transform duration-700" />
                        </div>
                        
                        <div className="flex-1 text-center md:text-left">
                            <h3 className={`text-2xl mb-1 ${displayFont}`}>{item.name}</h3>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">{item.tagline}</p>
                            <div className="text-lg font-bold text-black">{item.price}</div>
                        </div>

                        <div className="flex items-center gap-6 p-2 bg-gray-50 rounded-full border border-gray-100">
                            <button 
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:shadow-sm transition-all text-gray-500"
                            >
                                <Minus size={16} />
                            </button>
                            <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                            <button 
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:shadow-sm transition-all text-gray-500"
                            >
                                <Plus size={16} />
                            </button>
                        </div>

                        <button 
                            onClick={() => onRemove(item.id)}
                            className="p-4 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                        >
                            <Trash2 size={20} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Summary Card */}
            <div className="w-full lg:w-[400px]">
                <div className="bg-zinc-950 text-white p-10 rounded-[40px] shadow-2xl sticky top-32">
                    <h3 className={`text-2xl mb-8 ${displayFont}`}>Order Summary</h3>
                    
                    <div className="space-y-6 mb-10 pb-10 border-b border-white/10">
                        <div className="flex justify-between text-xs uppercase tracking-widest text-gray-500">
                            <span>Subtotal</span>
                            <span className="text-white">SAR {calculateTotal().toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-xs uppercase tracking-widest text-gray-500">
                            <span>Express Shipping</span>
                            <span className="text-teal-400">FREE</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-12">
                        <span className="text-sm font-bold uppercase tracking-widest">Estimated Total</span>
                        <span className="text-3xl font-bold">SAR {calculateTotal().toLocaleString()}</span>
                    </div>

                    <button className="w-full py-6 bg-white text-black rounded-3xl text-xs font-bold uppercase tracking-[0.3em] hover:bg-teal-400 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3">
                        <CreditCard size={18} /> Checkout
                    </button>

                    <div className="mt-8 text-center">
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
                            Secured by S3Ts Quantum Encryption. <br/> VAT included in all prices.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
