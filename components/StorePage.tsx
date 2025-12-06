import React, { useState } from 'react';
import { Check, Star, Shield, Zap, X, ChevronRight } from 'lucide-react';

interface StorePageProps {
  onAddToCart: () => void;
}

const StorePage: React.FC<StorePageProps> = ({ onAddToCart }) => {
  const [showSpecs, setShowSpecs] = useState(false);

  return (
    <div className="pb-20 bg-white min-h-screen animate-fade-in relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 reveal active pt-8">
        
        {/* Header - Simple Breadcrumbs */}
        <div className="flex flex-col items-center mb-16">
            <div className="text-[10px] uppercase tracking-widest text-gray-400">
                Store / Smartphones / S3Ts Pro 3.0
            </div>
            {/* Logo removed from here as requested previously */}
             {/* Branding Logo */}
             <div className="mt-6">
                <img 
                    src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_logo_transparent_bg.png" 
                    alt="S3Ts Logo" 
                    className="h-20 w-auto"
                />
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-16">
            
            {/* Left: Gallery */}
            <div className="flex-1">
                <div className="bg-gray-50 aspect-[4/5] w-full mb-4 relative overflow-hidden">
                    <img 
                        src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_recto_verso.jpg" 
                        alt="S3Ts Pro 3.0 Titanium" 
                        className="w-full h-full object-contain p-8 hover:scale-105 transition-transform duration-700"
                    />
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 aspect-square cursor-pointer border border-black"><img src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3TS_hightech.png" className="w-full h-full object-cover" /></div>
                    <div className="bg-gray-50 aspect-square cursor-pointer border border-transparent hover:border-gray-300"><img src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts+_facial_recognition.jpg" className="w-full h-full object-cover" /></div>
                    <div className="bg-gray-50 aspect-square cursor-pointer border border-transparent hover:border-gray-300"><img src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts+_nolithium.jpg" className="w-full h-full object-cover" /></div>
                </div>
            </div>

            {/* Right: Details */}
            <div className="flex-1 pt-4">
                <div className="border-b border-gray-100 pb-8 mb-8">
                    <h1 className="text-3xl md:text-5xl font-display text-gray-900 mb-2">S3Ts Pro 3.0</h1>
                    <p className="text-sm text-gray-500 font-light tracking-wide mb-6">Titanium Edition • 1TB Quantum Storage</p>
                    <div className="text-2xl font-light text-gray-900">SAR 6,999.00</div>
                    <p className="text-xs text-green-600 mt-2 flex items-center gap-2">
                        <Check size={12} /> In Stock - Ready for Global Shipping
                    </p>
                </div>

                {/* Configuration */}
                <div className="mb-10">
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-4">Finish</label>
                    <div className="flex gap-4">
                        <button className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-zinc-800 ring-2 ring-offset-2 ring-black"></button>
                        <button className="w-12 h-12 rounded-full bg-gray-300 border-2 border-transparent hover:border-gray-400"></button>
                    </div>
                </div>

                <div className="mb-10">
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-4">Neural Core</label>
                    <div className="flex flex-col gap-3">
                        <div className="border border-black p-4 flex justify-between items-center cursor-pointer bg-black text-white">
                            <span className="text-xs font-bold uppercase">A2X Pro (48 Cores)</span>
                            <span className="text-xs">Included</span>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-4 mb-8">
                    <button 
                        onClick={onAddToCart}
                        className="w-full bg-black text-white py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors active:scale-95 duration-200"
                    >
                        Add to Bag
                    </button>
                    <button className="w-full bg-white text-black border border-gray-200 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-50 transition-colors">
                        Finance with Tabby
                    </button>
                </div>
                
                <button 
                    onClick={() => setShowSpecs(true)}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors mb-12"
                >
                    View Full Technical Specifications <ChevronRight size={14} />
                </button>

                {/* Specs Summary */}
                <div className="space-y-6 text-xs text-gray-600 font-light leading-relaxed border-t border-gray-100 pt-8">
                    <div className="flex items-start gap-4">
                        <Shield size={18} className="text-black shrink-0" />
                        <div>
                            <strong className="block text-black uppercase tracking-wider mb-1">Lifetime Warranty</strong>
                            Guaranteed against screen breakage and water damage.
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Zap size={18} className="text-black shrink-0" />
                        <div>
                            <strong className="block text-black uppercase tracking-wider mb-1">Infinite Energy</strong>
                            Solar charging backplate included standard.
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Star size={18} className="text-black shrink-0" />
                        <div>
                            <strong className="block text-black uppercase tracking-wider mb-1">VIP Concierge</strong>
                            24/7 Access to S3Ts Support Network.
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
              <div className="bg-white w-full max-w-2xl max-h-[85vh] overflow-y-auto relative shadow-2xl animate-fade-in-up">
                  <button 
                    onClick={() => setShowSpecs(false)}
                    className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors sticky z-10"
                  >
                      <X size={24} />
                  </button>
                  
                  <div className="p-10 md:p-14">
                      <h2 className="text-3xl font-display mb-2">Technical Specifications</h2>
                      <p className="text-gray-500 text-xs uppercase tracking-widest mb-10">S3Ts Pro 3.0 / Reference Data</p>

                      <div className="space-y-8">
                          <div>
                              <h3 className="text-sm font-bold uppercase tracking-widest border-b border-black pb-2 mb-4">Structure & Build</h3>
                              <div className="grid grid-cols-2 gap-y-2 text-sm font-light text-gray-600">
                                  <div className="text-gray-900 font-medium">Chassis</div><div>Aerospace-grade Alpha Titanium Alloy</div>
                                  <div className="text-gray-900 font-medium">Display Glass</div><div>Diamond-Glass 9H+ (Unbreakable)</div>
                                  <div className="text-gray-900 font-medium">Rating</div><div>IP79X (Submersion + Dust Proof)</div>
                                  <div className="text-gray-900 font-medium">Dimensions</div><div>161mm x 74mm x 7.2mm</div>
                                  <div className="text-gray-900 font-medium">Weight</div><div>191g</div>
                              </div>
                          </div>

                          <div>
                              <h3 className="text-sm font-bold uppercase tracking-widest border-b border-black pb-2 mb-4">Display & Visuals</h3>
                              <div className="grid grid-cols-2 gap-y-2 text-sm font-light text-gray-600">
                                  <div className="text-gray-900 font-medium">Holographic Engine</div><div>S3Ts HOLO-Beam 3D (180° Projection)</div>
                                  <div className="text-gray-900 font-medium">AR/VR</div><div>Glasses-free spatial computing</div>
                                  <div className="text-gray-900 font-medium">Brightness</div><div>Auto-boost (Direct Sunlight Readable)</div>
                              </div>
                          </div>

                          <div>
                              <h3 className="text-sm font-bold uppercase tracking-widest border-b border-black pb-2 mb-4">Connectivity & Network</h3>
                              <div className="grid grid-cols-2 gap-y-2 text-sm font-light text-gray-600">
                                  <div className="text-gray-900 font-medium">Satellite Internet</div><div>S3Ts Quantum-Link™ (Built-in)</div>
                                  <div className="text-gray-900 font-medium">Coverage</div><div>Global (100% Earth Surface)</div>
                                  <div className="text-gray-900 font-medium">Cost</div><div>Free Unlimited Lifetime Data</div>
                                  <div className="text-gray-900 font-medium">Speed</div><div>6G Quantum Standard</div>
                                  <div className="text-gray-900 font-medium">Type</div><div>Hybrid Mobile-Satellite</div>
                              </div>
                          </div>

                          <div>
                              <h3 className="text-sm font-bold uppercase tracking-widest border-b border-black pb-2 mb-4">Performance</h3>
                              <div className="grid grid-cols-2 gap-y-2 text-sm font-light text-gray-600">
                                  <div className="text-gray-900 font-medium">Processor</div><div>Neural Core A2X (48 AI Cores)</div>
                                  <div className="text-gray-900 font-medium">Architecture</div><div>14nm Quantum Neural Threads</div>
                                  <div className="text-gray-900 font-medium">Cooling</div><div>Aero-Flow X (Micro-ventilation)</div>
                              </div>
                          </div>

                          <div>
                              <h3 className="text-sm font-bold uppercase tracking-widest border-b border-black pb-2 mb-4">Energy</h3>
                              <div className="grid grid-cols-2 gap-y-2 text-sm font-light text-gray-600">
                                  <div className="text-gray-900 font-medium">Technology</div><div>0% Lithium / Nano-optic Solar Cells</div>
                                  <div className="text-gray-900 font-medium">Charging</div><div>Continuous Solar Harvesting (On or Off State) - Always Full</div>
                                  <div className="text-gray-900 font-medium">Reserve</div><div>72h Quantum Capacitor Reserve (Darkness)</div>
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