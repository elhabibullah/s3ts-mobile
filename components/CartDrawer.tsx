
import React from 'react';
import { X, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Product, Language } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemove: (index: number) => void;
  language: Language;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, language }) => {
  const isAr = language === 'ar';
  
  return (
    <div className={`fixed inset-0 z-[100] pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
        <div 
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
            onClick={onClose}
        />
        <div className={`absolute top-0 ${isAr ? 'left-0' : 'right-0'} h-full w-full md:w-[450px] bg-white shadow-2xl transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${isOpen ? 'translate-x-0' : (isAr ? '-translate-x-full' : 'translate-x-full')}`}>
            
            <div className="p-8 border-b border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <ShoppingBag size={20} />
                    <h3 className="text-xl font-display font-medium uppercase tracking-widest">Your Bag</h3>
                </div>
                <button onClick={onClose} className="p-3 hover:bg-gray-100 rounded-full transition-colors"><X size={24} /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                {items.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-4">
                        <ShoppingBag size={48} strokeWidth={1} />
                        <p className="text-[10px] uppercase tracking-widest">Your bag is empty</p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {items.map((item, idx) => (
                            <div key={idx} className="flex gap-6 items-center group">
                                <div className="w-24 h-24 bg-gray-50 rounded-3xl p-4 shrink-0 overflow-hidden">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold uppercase tracking-widest">{item.name}</h4>
                                    <p className="text-[10px] text-gray-400 mt-1 uppercase">{item.tagline}</p>
                                    <p className="text-sm font-bold mt-2">{item.price}</p>
                                </div>
                                <button onClick={() => onRemove(idx)} className="p-2 text-gray-300 hover:text-red-500 transition-colors">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {items.length > 0 && (
                <div className="p-8 border-t border-gray-100 bg-gray-50/50">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Total Est.</span>
                        <span className="text-2xl font-bold tracking-tight">SAR {(items.length * 6375).toLocaleString()}</span>
                    </div>
                    <button className="w-full py-6 bg-black text-white rounded-3xl text-[10px] font-bold uppercase tracking-[0.4em] shadow-xl hover:bg-teal-600 transition-colors flex items-center justify-center gap-3">
                        Checkout <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
                    </button>
                    <p className="text-center text-[8px] text-gray-400 mt-6 uppercase tracking-widest">Free Express Shipping on all S3Ts Masterpieces</p>
                </div>
            )}
        </div>
    </div>
  );
};

export default CartDrawer;
