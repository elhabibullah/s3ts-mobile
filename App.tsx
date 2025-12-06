import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import ChatSupport from './components/ChatSupport';
import StorePage from './components/StorePage';
import InvestorsPage from './components/InvestorsPage';
import { PRODUCTS } from './constants';
import { Cpu, Sun, Smartphone, Wifi, ScanFace, Award, MessageSquare, Box, Mic, Globe, ShieldCheck, X, Satellite, Radio, MapPin } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'store' | 'investors'>('home');
  const [cartCount, setCartCount] = useState(0);
  const [activeInfoModal, setActiveInfoModal] = useState<'chat' | 'quantum' | null>(null);

  const handleNavigate = (view: 'home' | 'store' | 'investors') => {
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
            <section className="py-24 bg-white text-center px-6 reveal">
                <div className="max-w-2xl mx-auto">
                    <span className="block text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">The Revolution</span>
                    <h2 className="text-2xl md:text-3xl font-display font-normal mb-8 text-gray-900 leading-snug">
                        The Impossible, <br/> Now Possible.
                    </h2>
                    <p className="text-sm text-gray-500 leading-loose font-light tracking-wide">
                        S3Ts Pro 3.0 represents the pinnacle of post-silicon engineering. 
                        Forged from aerospace titanium and powered by light itself. 
                        <br className="hidden md:block" />
                        No battery cycles. No bezels. <strong className="text-gray-900 font-medium">Free unlimited global internet connection.</strong> Just pure, holographic innovation.
                    </p>
                </div>
            </section>

            {/* Feature Grid - High Tech */}
            <div className="reveal">
              <ProductGrid 
                title="High Tech" 
                subtitle="Engineering beyond limits" 
                products={PRODUCTS} 
                onNavigate={handleNavigate}
              />
            </div>

            {/* Feature Highlight: Facial Recognition - Split Layout */}
            <section id="biometrics" className="py-24 bg-black border-y border-gray-900 reveal">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center">
                    
                    {/* Image Section */}
                    <div className="flex-1 w-full flex justify-center">
                        <div className="relative w-full max-w-lg">
                            <img 
                                src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts+_facial_recognition.jpg"
                                alt="Neural Face ID" 
                                className="w-full h-auto object-contain rounded-sm shadow-2xl shadow-zinc-900/20"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-6">
                            <ScanFace className="text-white" size={32} strokeWidth={1} />
                        </div>
                        <span className="text-gray-500 font-bold tracking-[0.3em] uppercase mb-4 block text-[10px]">Biometric Security</span>
                        <h2 className="text-3xl md:text-4xl font-display text-white mb-6 leading-tight">Neural Face ID</h2>
                        <p className="text-sm text-gray-400 mb-8 font-light tracking-wide leading-relaxed max-w-md mx-auto md:mx-0">
                            3D facial reading technology mapped by the A2X Core. Unlock your world with a glance, even in absolute darkness. 
                            The invisible sensor array adapts to your changing environment instantly.
                        </p>
                        <button 
                            onClick={() => handleNavigate('store')}
                            className="border border-white text-white px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-500"
                        >
                            View Specs
                        </button>
                    </div>

                </div>
            </section>

            {/* Feature Highlight: Solar - Clean White */}
            <section id="energy" className="py-32 bg-white reveal">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-20 items-center">
                    <div className="flex-1 order-2 md:order-1">
                        <div className="inline-block p-4 border border-black rounded-full mb-8">
                            <Sun className="text-black" size={24} strokeWidth={1} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-8 leading-tight">0% Lithium.<br/>100% Infinite.</h2>
                        <p className="text-sm md:text-base text-gray-600 mb-8 font-light leading-relaxed">
                            The S3Ts Pro 3.0 requires no cables. Nano-optic solar cells cover the entire back and frame, harvesting energy from ambient light even while in use.
                        </p>
                        <ul className="space-y-6 mb-10">
                            <li className="flex items-center gap-4 text-gray-800 text-[10px] tracking-[0.2em] uppercase font-bold">
                                <span className="w-8 h-[1px] bg-black"></span>
                                Quantum Capacitor Reserve
                            </li>
                            <li className="flex items-center gap-4 text-gray-800 text-[10px] tracking-[0.2em] uppercase font-bold">
                                <span className="w-8 h-[1px] bg-black"></span>
                                Near-infinite lifespan
                            </li>
                            <li className="flex items-center gap-4 text-gray-800 text-[10px] tracking-[0.2em] uppercase font-bold">
                                <span className="w-8 h-[1px] bg-black"></span>
                                Eco-friendly Structure
                            </li>
                        </ul>
                        <button 
                            onClick={() => handleNavigate('store')}
                            className="text-[10px] font-bold tracking-widest uppercase border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all"
                        >
                            Explore Energy Specs
                        </button>
                    </div>
                    <div className="flex-1 order-1 md:order-2 flex justify-center">
                        <div className="w-full max-w-lg overflow-hidden relative">
                            <img 
                                src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts+_nolithium.jpg" 
                                alt="Solar Technology" 
                                className="w-full h-auto object-contain hover:scale-105 transition-all duration-1000"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Specs & AI - Technical Black */}
            <section id="ai" className="py-32 bg-zinc-900 text-white reveal">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-display mb-6">Neural Core A2X</h2>
                        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base font-light leading-loose">
                            The world's first fully voice-operated device. 48 AI cores process your intent before you even finish speaking.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800">
                        <div className="bg-zinc-900 p-10 hover:bg-zinc-800/50 transition-colors group text-center md:text-left">
                            <Cpu className="text-gray-500 group-hover:text-white mb-8 mx-auto md:mx-0 transition-colors" size={32} strokeWidth={1} />
                            <h3 className="text-base font-bold mb-2 tracking-wide uppercase">48 AI Cores</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">14nm Quantum Neural Threads for instant on-device computation.</p>
                        </div>
                        
                        {/* Clickable S3Ts Chat Block */}
                        <div 
                            onClick={() => setActiveInfoModal('chat')}
                            className="bg-zinc-900 p-10 hover:bg-zinc-800 cursor-pointer transition-colors group text-center md:text-left relative"
                        >
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-widest text-gray-500">
                                Click Info
                            </div>
                            <img 
                                src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_chat_logo.jpg" 
                                alt="S3Ts Chat"
                                className="w-10 h-10 mb-8 mx-auto md:mx-0 rounded-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 shadow-lg"
                            />
                            <h3 className="text-base font-bold mb-2 tracking-wide uppercase group-hover:underline decoration-1 underline-offset-4">S3Ts Chat</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">Encrypted internal messaging with WhatsApp AI Bridge capability.</p>
                        </div>

                        {/* Quantum-Link / Satellite Internet - Clickable */}
                        <div 
                            onClick={() => setActiveInfoModal('quantum')}
                            className="bg-zinc-900 p-10 hover:bg-zinc-800 cursor-pointer transition-colors group text-center md:text-left relative"
                        >
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-widest text-gray-500">
                                Click Info
                            </div>
                            <Satellite className="text-gray-500 group-hover:text-white mb-8 mx-auto md:mx-0 transition-colors" size={32} strokeWidth={1} />
                            <h3 className="text-base font-bold mb-2 tracking-wide uppercase group-hover:underline decoration-1 underline-offset-4">Quantum-Link</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                Unlimited Satellite Connectivity. Included for life. No SIM. No Fees.
                            </p>
                        </div>

                        <div className="bg-zinc-900 p-10 hover:bg-zinc-800/50 transition-colors group text-center md:text-left">
                            <div className="text-3xl font-display text-white mb-8 group-hover:scale-110 transition-transform origin-left">300MP</div>
                            <h3 className="text-base font-bold mb-2 tracking-wide uppercase">HOLO-Lens</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">Quantum Sensor with Night Vision IR Mode.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Founder / Manifesto Section */}
            <section className="py-24 bg-gray-50 reveal">
                <div className="max-w-[1000px] mx-auto px-6 text-center">
                     <div className="mb-6 flex justify-center">
                        <Award className="text-gray-400" size={32} strokeWidth={1} />
                     </div>
                     <h2 className="text-2xl font-display text-gray-900 mb-8 tracking-wide">The Vision & Origin</h2>
                     <p className="text-sm md:text-base text-gray-600 font-light leading-loose tracking-wide mb-8">
                        The S3Ts Pro 3.0 is a product of the collective brilliance and dedication of our world-class engineers, scientists, and designers at <strong>S3Ts Tech</strong>. 
                        As a premium Saudi Arabian technology corporation, we pride ourselves on pushing the boundaries of innovation. 
                     </p>
                     <p className="text-sm md:text-base text-gray-600 font-light leading-loose tracking-wide mb-8">
                        This wonder is not the work of a single individual, but rather a testament to the collaborative spirit and cutting-edge expertise that defines <strong>Saudi Innovation</strong> on the global stage. 
                        It is the culmination of years of research and development by a team committed to revolutionizing personal technology.
                     </p>
                     <div className="border-t border-gray-200 w-24 mx-auto mb-8"></div>
                     <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-900">
                        Invented & Founded by<br/>
                        <span className="text-base font-display normal-case mt-2 block">Abdelwahid Habibullah Adam Banu Hashim</span>
                     </p>
                </div>
            </section>

            {/* Pre-order Banner - Minimalist */}
            <section className="py-32 bg-white text-center border-t border-gray-100 reveal">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-display mb-8 text-gray-900">Own the Future.</h2>
                    <p className="text-sm md:text-base mb-12 text-gray-500 font-light tracking-wide">Pre-orders for S3Ts Pro 3.0 are now open.<br/>Limited titanium production run.</p>
                    <button 
                        onClick={() => handleNavigate('store')}
                        className="bg-black text-white px-12 py-5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors shadow-2xl"
                    >
                        Pre-Order Now
                    </button>
                </div>
            </section>
          </>
        )}

        {currentView === 'store' && (
          <StorePage onAddToCart={handleAddToCart} />
        )}

        {currentView === 'investors' && (
          <InvestorsPage />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
      <ChatSupport />

      {/* Info Modals */}
      {activeInfoModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={() => setActiveInfoModal(null)}
            ></div>
            <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl animate-fade-in-up">
                <button 
                    onClick={() => setActiveInfoModal(null)}
                    className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                >
                    <X size={24} />
                </button>
                
                {/* S3Ts Chat Content */}
                {activeInfoModal === 'chat' && (
                    <div className="p-8 md:p-16">
                        <div className="text-center mb-12">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden shadow-xl border border-gray-100">
                                <img 
                                    src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_chat_logo.jpg" 
                                    alt="S3Ts Chat Logo" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4">S3Ts Chat</h2>
                            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">The Future of Communication</p>
                        </div>

                        <div className="max-w-3xl mx-auto text-center mb-16">
                             <p className="text-base md:text-lg text-gray-800 font-light leading-loose mb-8">
                                Faster than iMessage. Freer than WhatsApp. More secure than Signal.
                                <br/>
                                S3Ts Chat is the first holographic communication platform in the world, developed exclusively for the S3Ts Pro 3.0.
                            </p>
                            <p className="text-sm text-gray-500 font-light leading-relaxed">
                                Thanks to the integrated AI engine and our ultra-fast S3Ts-to-S3Ts protocol, messages, calls, and holograms are transmitted in under 50 milliseconds.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
                            <div className="p-6 border border-gray-100 hover:border-black transition-colors duration-300">
                                 <Box className="mb-4 text-black" size={24} strokeWidth={1} />
                                 <h3 className="text-base font-display font-medium mb-2">HOLO-Messages</h3>
                                 <p className="text-xs text-gray-500 leading-relaxed font-light">
                                    Send genuine 3D messages that project as floating holograms above the device.
                                 </p>
                            </div>
                            <div className="p-6 border border-gray-100 hover:border-black transition-colors duration-300">
                                 <Mic className="mb-4 text-black" size={24} strokeWidth={1} />
                                 <h3 className="text-base font-display font-medium mb-2">Voice Control Supreme</h3>
                                 <p className="text-xs text-gray-500 leading-relaxed font-light">
                                    Dictate messages, launch apps, call contacts, or write on WhatsApp simply with your voice.
                                 </p>
                            </div>
                            <div className="p-6 border border-gray-100 hover:border-black transition-colors duration-300">
                                 <Globe className="mb-4 text-black" size={24} strokeWidth={1} />
                                 <h3 className="text-base font-display font-medium mb-2">Universal Bridge</h3>
                                 <p className="text-xs text-gray-500 leading-relaxed font-light">
                                    S3Ts Chat can communicate with WhatsApp, SMS, RCS, and any number — even without installing external apps.
                                 </p>
                            </div>
                            <div className="p-6 border border-gray-100 hover:border-black transition-colors duration-300">
                                 <ShieldCheck className="mb-4 text-black" size={24} strokeWidth={1} />
                                 <h3 className="text-base font-display font-medium mb-2">Advanced Security</h3>
                                 <p className="text-xs text-gray-500 leading-relaxed font-light">
                                    Local encryption, secure auto-delete, and AI anti-screenshot protection for every conversation.
                                 </p>
                            </div>
                        </div>

                        <div className="text-center border-t border-gray-100 pt-12">
                            <p className="text-sm font-medium tracking-widest uppercase text-gray-900 mb-2">
                                S3Ts Chat is not an app.
                            </p>
                            <p className="text-sm font-light tracking-wide text-gray-500">
                                It is a new dimension of communication.
                            </p>
                        </div>
                    </div>
                )}

                {/* Quantum-Link Content */}
                {activeInfoModal === 'quantum' && (
                    <div className="p-8 md:p-16">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center p-4 border border-black rounded-full mb-6">
                                <Satellite className="text-black" size={32} strokeWidth={1} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4">Quantum-Link™</h2>
                            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Universal Connectivity</p>
                        </div>

                        <div className="max-w-3xl mx-auto text-center mb-16">
                             <p className="text-lg md:text-xl text-gray-900 font-light leading-relaxed mb-10">
                                The S3Ts Pro 3.0 integrates <span className="font-medium">Quantum-Link™</span>, a hybrid mobile-satellite connectivity system included for life.
                            </p>
                            
                            <div className="flex flex-col md:flex-row justify-center gap-8 mb-10">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-1 bg-black"></div>
                                    <p className="text-sm font-bold uppercase tracking-widest">No SIM Card</p>
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-1 bg-black"></div>
                                    <p className="text-sm font-bold uppercase tracking-widest">No Subscription</p>
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-1 bg-black"></div>
                                    <p className="text-sm font-bold uppercase tracking-widest">No Future Fees</p>
                                </div>
                            </div>

                            <p className="text-base text-gray-500 font-light leading-loose">
                                Your phone is connected anywhere on Earth the moment you turn it on. 
                                Whether you are in the middle of the ocean, the Sahara desert, or the highest peaks, 
                                Quantum-Link guarantees you high-speed 6G internet access.
                            </p>
                        </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
                            <div className="p-6 bg-gray-50 border border-transparent hover:border-gray-200 transition-colors">
                                 <Radio className="mb-4 text-black" size={24} strokeWidth={1} />
                                 <h3 className="text-base font-display font-medium mb-2">Hybrid Network</h3>
                                 <p className="text-xs text-gray-500 leading-relaxed font-light">
                                    Seamlessly switches between local towers and Low Earth Orbit satellites without interruption.
                                 </p>
                            </div>
                            <div className="p-6 bg-gray-50 border border-transparent hover:border-gray-200 transition-colors">
                                 <MapPin className="mb-4 text-black" size={24} strokeWidth={1} />
                                 <h3 className="text-base font-display font-medium mb-2">100% Earth Coverage</h3>
                                 <p className="text-xs text-gray-500 leading-relaxed font-light">
                                    True global roaming capability built directly into the titanium chassis.
                                 </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
      )}

    </div>
  );
};

export default App;