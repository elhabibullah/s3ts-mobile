import React, { useState } from 'react';
import { Check, Star, Shield, Zap, X, ChevronRight } from 'lucide-react';
import { Language } from '../types';

interface StorePageProps {
  onAddToCart: () => void;
  language?: Language;
  translations?: any;
}

const StorePage: React.FC<StorePageProps> = ({ onAddToCart, language = 'en', translations }) => {
  const [showSpecs, setShowSpecs] = useState(false);
  
  // Fallback to avoid crash if translations undefined
  const t = translations || {};

  const displayFont = language === 'ar' ? 'font-amiri font-bold' : 'font-display font-medium';
  const textFont = language === 'ar' ? 'font-tajawal' : 'font-sans font-light';

  return (
    <div className={`pb-20 bg-white min-h-screen animate-fade-in relative ${language === 'ar' ? 'font-tajawal' : 'font-sans'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 reveal active pt-8">
        
        {/* Header - Simple Breadcrumbs */}
        <div className="flex flex-col items-center mb-16">
            <div className={`text-[10px] uppercase tracking-widest text-gray-400 ${textFont}`}>
                {t.store_crumb || 'Store / Smartphones / S3Ts Pro 3.0'}
            </div>
             {/* Branding Logo */}
             {/* Logo removed as requested in previous steps for Store Page */}
        </div>

        <div className="flex flex-col md:flex-row gap-16">
            
            {/* Left: Main Image Only (Gallery Removed) */}
            <div className="flex-1">
                <div className="bg-gray-50 aspect-[4/5] w-full mb-4 relative overflow-hidden flex items-center justify-center">
                    <img 
                        src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts-transparent-grey.png" 
                        alt="S3Ts Pro 3.0 Titanium" 
                        className="w-[85%] h-auto object-contain hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                    />
                </div>
            </div>

            {/* Right: Details */}
            <div className="flex-1 pt-4">
                <div className="border-b border-gray-100 pb-8 mb-8">
                    <h1 className={`text-3xl md:text-5xl text-gray-900 mb-2 ${displayFont}`}>S3Ts Pro 3.0</h1>
                    <p className={`text-sm text-gray-500 font-light tracking-wide mb-6 ${textFont}`}>{t.store_tagline}</p>
                    <div className={`text-2xl font-light text-gray-900 ${textFont}`}>{t.store_price}</div>
                    <p className={`text-xs text-green-600 mt-2 flex items-center gap-2 ${textFont}`}>
                        <Check size={12} /> {t.store_stock}
                    </p>
                </div>

                {/* Configuration */}
                <div className="mb-10">
                    <label className={`block text-[10px] font-bold uppercase tracking-widest mb-4 ${textFont}`}>{t.store_finish}</label>
                    <div className="flex gap-4">
                        <button className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-zinc-800 ring-2 ring-offset-2 ring-black"></button>
                        <button className="w-12 h-12 rounded-full bg-gray-300 border-2 border-transparent hover:border-gray-400"></button>
                    </div>
                </div>

                <div className="mb-10">
                    <label className={`block text-[10px] font-bold uppercase tracking-widest mb-4 ${textFont}`}>{t.store_core}</label>
                    <div className="flex flex-col gap-3">
                        <div className="border border-black p-4 flex justify-between items-center cursor-pointer bg-black text-white">
                            <span className={`text-xs font-bold uppercase ${textFont}`}>{t.store_core_name}</span>
                            <span className={`text-xs ${textFont}`}>{t.store_included}</span>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-4 mb-8">
                    <button 
                        onClick={onAddToCart}
                        className={`w-full bg-black text-white py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors active:scale-95 duration-200 ${textFont}`}
                    >
                        {t.store_add}
                    </button>
                    <button className={`w-full bg-white text-black border border-gray-200 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-50 transition-colors ${textFont}`}>
                        {t.store_finance}
                    </button>
                </div>
                
                <button 
                    onClick={() => setShowSpecs(true)}
                    className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors mb-12 ${textFont}`}
                >
                    {t.store_view_specs} <ChevronRight size={14} className={language === 'ar' ? 'rotate-180' : ''} />
                </button>

                {/* Specs Summary */}
                <div className="space-y-6 text-xs text-gray-600 font-light leading-relaxed border-t border-gray-100 pt-8">
                    <div className="flex items-start gap-4">
                        <Shield size={18} className="text-black shrink-0" />
                        <div>
                            <strong className={`block text-black uppercase tracking-wider mb-1 ${textFont}`}>{t.store_warranty_title}</strong>
                            <span className={textFont}>{t.store_warranty_desc}</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Zap size={18} className="text-black shrink-0" />
                        <div>
                            <strong className={`block text-black uppercase tracking-wider mb-1 ${textFont}`}>{t.store_solar_title}</strong>
                            <span className={textFont}>{t.store_solar_desc}</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Star size={18} className="text-black shrink-0" />
                        <div>
                            <strong className={`block text-black uppercase tracking-wider mb-1 ${textFont}`}>{t.store_vip_title}</strong>
                            <span className={textFont}>{t.store_vip_desc}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* Tech Specs Modal */}
      {showSpecs && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowSpecs(false)}></div>
              <div className="bg-white w-full max-w-2xl max-h-[85vh] overflow-y-auto relative shadow-2xl animate-fade-in-up" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  <button 
                    onClick={() => setShowSpecs(false)}
                    className={`absolute top-6 p-2 hover:bg-gray-100 rounded-full transition-colors sticky z-10 ${language === 'ar' ? 'left-6' : 'right-6'}`}
                  >
                      <X size={24} />
                  </button>
                  
                  <div className="p-10 md:p-14">
                      <h2 className={`text-3xl mb-2 ${displayFont}`}>{t.specs_title}</h2>
                      <p className={`text-gray-500 text-xs uppercase tracking-widest mb-10 ${textFont}`}>{t.specs_subtitle}</p>

                      <div className="space-y-8">
                          <div>
                              <h3 className={`text-sm font-bold uppercase tracking-widest border-b border-black pb-2 mb-4 ${textFont}`}>{t.spec_cat_build}</h3>
                              <div className="grid grid-cols-2 gap-y-2 text-sm font-light text-gray-600">
                                  <div className="text-gray-900 font-medium">{t.spec_chassis}</div><div>{t.spec_chassis_val}</div>
                                  <div className="text-gray-900 font-medium">{t.spec_glass}</div><div>{t.spec_glass_val}</div>
                                  <div className="text-gray-900 font-medium">{t.spec_rating}</div><div>{t.spec_rating_val}</div>
                                  <div className="text-gray-900 font-medium">{t.spec_dim}</div><div>{t.spec_dim_val}</div>
                                  <div className="text-gray-900 font-medium">{t.spec_weight}</div><div>{t.spec_weight_val}</div>
                              </div>
                          </div>

                          <div>
                              <h3 className={`text-sm font-bold uppercase tracking-widest border-b border-black pb-2 mb-4 ${textFont}`}>{t.spec_cat_display}</h3>
                              <div className="grid grid-cols-2 gap-y-2 text-sm font-light text-gray-600">
                                  <div className="text-gray-900 font-medium">{t.spec_holo}</div><div>{t.spec_holo_val}</div>
                                  <div className="text-gray-900 font-medium">{t.spec_ar}</div><div>{t.spec_ar_val}</div>
                                  <div className="text-gray-900 font-medium">{t.spec_bright}</div><div>{t.spec_bright_val}</div>
                              </div>
                          </div>

                          <div>
                              <h3 className={`text-sm font-bold uppercase tracking-widest border-b border-black pb-2 mb-4 ${textFont}`}>{t.spec_cat_conn}</h3>
                              <div className="grid grid-cols-2 gap-y-2 text-sm font-light text-gray-600">
                                  <div className="text-gray-900 font-medium">{t.spec_sat}</div><div>{t.spec_sat_val}</div>
                                  <div className="text-gray-900 font-medium">{t.spec_cov}</div><div>{t.spec_cov_val}</div>
                                  <div className="text-gray-900 font-medium">{t.spec_cost}</div><div>{t.spec_cost_val}</div>
                                  <div className="text-gray-900 font-medium">{t.spec_speed}</div><div>{t.spec_speed_val}</div>
                                  <div className="text-gray-900 font-medium">{t.spec_type}</div><div>{t.spec_type_val}</div>
                              </div>
                          </div>

                          <div>
                              <h3 className={`text-sm font-bold uppercase tracking-widest border-b border-black pb-2 mb-4 ${textFont}`}>{t.spec_cat_perf}</h3>
                              <div className="grid grid-cols-2 gap-y-2 text-sm font-light text-gray-600">
                                  <div className="text-gray-900 font-medium">{t.spec_proc}</div><div>{t.spec_proc_val}</div>
                                  <div className="text-gray-900 font-medium">{t.spec_arch}</div><div>{t.spec_arch_val}</div>
                                  <div className="text-gray-900 font-medium">{t.spec_cool}</div><div>{t.spec_cool_val}</div>
                              </div>
                          </div>

                          <div>
                              <h3 className={`text-sm font-bold uppercase tracking-widest border-b border-black pb-2 mb-4 ${textFont}`}>{t.spec_cat_energy}</h3>
                              <div className="grid grid-cols-2 gap-y-2 text-sm font-light text-gray-600">
                                  <div className="text-gray-900 font-medium">{t.spec_tech}</div><div>{t.spec_tech_val}</div>
                                  <div className="text-gray-900 font-medium">{t.spec_charge}</div><div>{t.spec_charge_val}</div>
                                  <div className="text-gray-900 font-medium">{t.spec_res}</div><div>{t.spec_res_val}</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default StorePage;