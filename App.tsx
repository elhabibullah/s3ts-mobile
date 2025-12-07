import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import ChatSupport from './components/ChatSupport';
import StorePage from './components/StorePage';
import InvestorsPage from './components/InvestorsPage';
import AboutPage from './components/AboutPage';
import { PRODUCTS } from './constants';
import { Cpu, Sun, Smartphone, Wifi, ScanFace, Award, MessageSquare, Box, Mic, Globe, ShieldCheck, X, Satellite, Radio, MapPin, Check } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'store' | 'investors' | 'about'>('home');
  const [cartCount, setCartCount] = useState(0);
  const [activeInfoModal, setActiveInfoModal] = useState<'chat' | 'quantum' | null>(null);

  const handleNavigate = (view: 'home' | 'store' | 'investors' | 'about') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  // Scroll Reveal Observer
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

    // Short timeout to ensure elements are rendered before observing
    setTimeout(() => {
        const elements = document.querySelectorAll('.reveal');
        elements.forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [currentView]); // Re-run when view changes to capture new elements

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-black selection:text-white">
      <Navbar onNavigate={handleNavigate} cartCount={cartCount} currentView={currentView} />
      
      {/* Main content with top padding to account for fixed navbar */}
      <main className="pt-16 md:pt-24">
        {currentView === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            
            {/* Introduction Section - Luxury White (Mysterious/Premium) */}
            {/* Adjusted negative margin to meet bubble without cutting it */}
            <section className="pt-0 pb-12 md:pb-16 bg-white text-center px-6 reveal -mt-4 md:-mt-10 relative z-20">
                <div className="max-w-2xl mx-auto">
                    <span className="block text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">The Revolution</span>
                    <h2 className="text-2xl md:text-3xl font-display font-normal mb-8 text-gray-900 leading-snug">
                        The Impossible, <br/> Is Now Possible.
                    </h2>
                    <p className="text-sm text-gray-500 leading-loose font-light tracking-wide">
                        S3Ts Pro 3.0 represents the pinnacle of post-silicon engineering. 
                        By eliminating the chemical battery and integrating the world's first 
                        Neural Quantum Processor, we have created a device that is not just smart, 
                        but alive.
                        <br /><br />
                        <strong>Free unlimited global internet connection.</strong>
                    </p>
                </div>
            </section>

            {/* Neural/Biometrics Section - Luxury Black */}
            <section id="ai" className="py-10 md:py-12 bg-black text-white reveal overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                   <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                       {/* Left: Content */}
                       <div className="flex-1 text-center md:text-left order-2 md:order-1">
                          <span className="block text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 animate-pulse">
                              Biometric Security
                          </span>
                          <h2 className="text-3xl md:text-5xl font-display mb-6">Neural Recognition</h2>
                          <p className="text-gray-400 text-sm leading-relaxed font-light tracking-wide max-w-md mx-auto md:mx-0">
                              Advanced 3D facial mapping combined with voice-print analysis creates an impenetrable security layer. 
                              Unlock your world with a glance or a whisper.
                          </p>
                       </div>

                       {/* Right: Image */}
                       <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
                           <div className="relative w-full flex justify-center md:justify-end">
                                <img 
                                    src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_bg_removed_facial_recognition.png" 
                                    alt="S3Ts Neural Face ID" 
                                    className="h-64 md:h-96 w-auto object-contain drop-shadow-2xl opacity-90"
                                />
                           </div>
                       </div>
                   </div>
                </div>
            </section>

             {/* Energy Section - Split Layout */}
             <section id="energy" className="min-h-[80vh] flex flex-col md:flex-row bg-white reveal">
                <div className="flex-1 relative min-h-[400px]">
                    <img 
                        src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts+_nolithium.jpg" 
                        alt="Nano-Optic Solar" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 flex flex-col justify-center p-12 md:p-24 bg-zinc-50">
                    <span className="block text-amber-600 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Infinite Energy</span>
                    <h2 className="text-3xl md:text-5xl font-display text-gray-900 mb-8">0% Lithium.<br/>100% Light.</h2>
                    <p className="text-sm text-gray-600 leading-loose font-light tracking-wide mb-8">
                        The first smartphone powered entirely by light. Our nano-optic solar skin harvests energy 
                        from any source—sunlight or indoor lamps—storing it in a non-degradable quantum capacitor. 
                        No cables. No charging bricks. Just pure, infinite energy.
                    </p>
                    <div className="flex gap-8">
                        <div>
                            <span className="block text-3xl font-display text-gray-900">∞</span>
                            <span className="text-[10px] uppercase tracking-widest text-gray-500">Lifespan</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-display text-gray-900">72h</span>
                            <span className="text-[10px] uppercase tracking-widest text-gray-500">Reserve</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* High Tech Specs - Black Grid */}
            <section className="py-24 bg-black text-white reveal">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                     <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-display mb-4">High Tech</h2>
                        <p className="text-gray-500 text-xs tracking-[0.2em] uppercase">Engineering Masterpieces</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {/* Card 1: Titanium */}
                        <div className="border border-white/10 p-8 hover:border-white/30 transition-colors group">
                            <Cpu className="text-gray-400 mb-6 group-hover:text-white transition-colors" size={32} strokeWidth={1} />
                            <h3 className="text-lg font-display mb-2">Neural Core A2X</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                48-Core AI processor capable of 100 trillion operations per second.
                            </p>
                        </div>
                         
                         {/* Card 2: Quantum Link (Clickable) */}
                        <div 
                            className="border border-white/10 p-8 hover:border-white/30 transition-colors group cursor-pointer relative"
                            onClick={() => setActiveInfoModal('quantum')}
                        >
                            <span className="absolute top-4 right-4 text-[10px] text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                                Click Info
                            </span>
                            <Satellite className="text-gray-400 mb-6 group-hover:text-blue-400 transition-colors" size={32} strokeWidth={1} />
                            <h3 className="text-lg font-display mb-2">Quantum-Link™</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                Free unlimited global satellite internet. No SIM. No fees.
                            </p>
                        </div>

                         {/* Card 3: Holographic */}
                        <div className="border border-white/10 p-8 hover:border-white/30 transition-colors group">
                            <ScanFace className="text-gray-400 mb-6 group-hover:text-white transition-colors" size={32} strokeWidth={1} />
                            <h3 className="text-lg font-display mb-2">HOLO-Beam 3D</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                180° Projective display engine for glasses-free holographic AR.
                            </p>
                        </div>

                        {/* Card 4: S3Ts Chat (Clickable) */}
                        <div 
                            className="border border-white/10 p-8 hover:border-white/30 transition-colors group cursor-pointer relative"
                            onClick={() => setActiveInfoModal('chat')}
                        >
                            <span className="absolute top-4 right-4 text-[10px] text-green-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                                Click Info
                            </span>
                            {/* S3Ts Chat Logo */}
                            <div className="mb-6 w-8 h-8 rounded-full overflow-hidden bg-black border border-gray-700 group-hover:border-green-400/50 transition-colors">
                                <img 
                                    src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_chat_logo.jpg" 
                                    alt="S3Ts Chat"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <h3 className="text-lg font-display mb-2">S3Ts Chat</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                The future of communication. Holographic. Encrypted. Universal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

          </>
        )}

        {currentView === 'store' && <StorePage onAddToCart={handleAddToCart} />}
        {currentView === 'investors' && <InvestorsPage />}
        {currentView === 'about' && <AboutPage onNavigate={handleNavigate} />}

        {/* --- MODALS --- */}

        {/* 1. S3Ts Chat Modal */}
        {activeInfoModal === 'chat' && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setActiveInfoModal(null)}></div>
                <div className="bg-zinc-900 border border-white/10 w-full max-w-lg max-h-[90vh] overflow-y-auto relative shadow-2xl animate-fade-in-up text-white">
                    <div className="sticky top-0 right-0 z-10 flex justify-end p-4 bg-zinc-900/90 backdrop-blur-sm">
                        <button 
                            onClick={() => setActiveInfoModal(null)}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X size={20} className="text-white" />
                        </button>
                    </div>

                    <div className="p-8 pt-0">
                        <div className="flex flex-col items-center mb-10 text-center">
                            <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6 shadow-lg shadow-green-900/20">
                                 <img 
                                    src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_chat_logo.jpg" 
                                    alt="S3Ts Chat"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-display mb-2">S3Ts Chat</h2>
                            <p className="text-green-400 text-xs uppercase tracking-widest">The Future of Communication</p>
                        </div>

                        <div className="space-y-8 text-sm font-light text-gray-300 leading-relaxed">
                            <p className="italic text-center text-gray-400 border-b border-white/10 pb-6">
                                "Faster than iMessage. Freer than WhatsApp. More secure than Signal."
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <Box className="text-white shrink-0" size={20} />
                                    <div>
                                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">HOLO-Messages</h4>
                                        <p>Send real 3D messages that project as holograms above the device.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Mic className="text-white shrink-0" size={20} />
                                    <div>
                                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">Voice Control Supreme</h4>
                                        <p>Send messages, open apps, or write on WhatsApp purely with your voice.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Globe className="text-white shrink-0" size={20} />
                                    <div>
                                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">Universal Bridge</h4>
                                        <p>Communicate with WhatsApp, SMS, RCS, and any number without installing external apps.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <ShieldCheck className="text-white shrink-0" size={20} />
                                    <div>
                                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">Ultimate Security</h4>
                                        <p>Local encryption, secure auto-delete, and anti-screenshot AI.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                <p className="text-xs text-gray-500 uppercase tracking-widest">Available only on S3Ts Pro 3.0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* 2. Quantum-Link Modal */}
        {activeInfoModal === 'quantum' && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setActiveInfoModal(null)}></div>
                <div className="bg-zinc-900 border border-white/10 w-full max-w-lg max-h-[90vh] overflow-y-auto relative shadow-2xl animate-fade-in-up text-white">
                    <div className="sticky top-0 right-0 z-10 flex justify-end p-4 bg-zinc-900/90 backdrop-blur-sm">
                        <button 
                            onClick={() => setActiveInfoModal(null)}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X size={20} className="text-white" />
                        </button>
                    </div>

                    <div className="p-8 pt-0">
                        <div className="flex flex-col items-center mb-10 text-center">
                            <Satellite size={48} className="text-blue-400 mb-6" strokeWidth={1} />
                            <h2 className="text-2xl font-display mb-2">Quantum-Link™</h2>
                            <p className="text-blue-400 text-xs uppercase tracking-widest">Global Satellite Connectivity</p>
                        </div>

                        <div className="space-y-6 text-sm font-light text-gray-300 leading-relaxed text-center">
                            <p>
                                The S3Ts Pro 3.0 integrates <strong>Quantum-Link™</strong>, a hybrid mobile-satellite connectivity system included for life.
                            </p>
                            <div className="bg-blue-900/20 border border-blue-500/20 p-6 rounded-lg my-6">
                                <ul className="space-y-4 text-left">
                                    <li className="flex items-center gap-3">
                                        <Check size={16} className="text-blue-400" />
                                        <span>No SIM card required.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check size={16} className="text-blue-400" />
                                        <span>No subscription.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check size={16} className="text-blue-400" />
                                        <span>No future fees.</span>
                                    </li>
                                </ul>
                            </div>
                            <p>
                                Your phone is connected anywhere on Earth the moment you turn it on. Oceans, deserts, or mountains—you are never offline.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )}

      </main>

      {currentView === 'home' && <Footer onNavigate={handleNavigate} />}
      
      <ChatSupport />
    </div>
  );
};

export default App;