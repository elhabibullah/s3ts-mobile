import React from 'react';
import { ArrowLeft, Globe, Zap, Users, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { Language, AppView } from '../types';

interface TelecomPageProps {
  onNavigate: (view: 'home' | 'store') => void;
  language?: Language;
}

const TelecomPage: React.FC<TelecomPageProps> = ({ onNavigate, language = 'en' }) => {
  const isAr = language === 'ar';
  const fontSans = isAr ? 'font-tajawal' : 'font-sans';
  const displayFont = isAr ? 'font-amiri font-bold' : 'font-display font-medium';

  // Logo URL constant
  const LOGO_URL = "https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Sum%C4%81mah-Telecom.jpg";

  return (
    <div className={`min-h-screen bg-black text-white ${fontSans} ${isAr ? 'text-right' : 'text-left'} overflow-x-hidden selection:bg-[#00D4C6] selection:text-black`} dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* --- SVG FILTERS (THE "SMOKE" ENGINE) --- */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <filter id="edge-smoke" x="-50%" y="-50%" width="200%" height="200%">
            <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thickened" />
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.04" numOctaves="3" seed="0" result="noise" />
            <feDisplacementMap in="thickened" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" result="distorted" />
            {/* Fix: use stdDeviation instead of stdDev for React SVG compatibility */}
            <feGaussianBlur in="distorted" stdDeviation="2" result="softSmoke" />
            <feComposite in="softSmoke" in2="SourceAlpha" operator="out" />
          </filter>
        </defs>
      </svg>

      {/* --- BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-black"></div>

      {/* --- HEADER --- */}
      <header className="relative z-50 bg-black/90 backdrop-blur-sm sticky top-0 border-b border-white/5">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
              <div className="flex items-center gap-4 md:gap-8">
                   
                   {/* LOGO COMPOSITION */}
                   <div className="flex items-center gap-4 cursor-pointer group" onClick={() => onNavigate('home')}>
                       <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
                            
                            {/* LAYER 1: SMOKE EFFECT */}
                            <img 
                                src={LOGO_URL} 
                                className="absolute inset-0 w-full h-full object-contain z-0 mix-blend-screen opacity-90 transition-opacity duration-500 group-hover:opacity-100" 
                                alt=""
                                style={{
                                    filter: 'brightness(0) drop-shadow(0 -4px 6px #00D4C6) drop-shadow(0 4px 6px #B480FF) url(#edge-smoke)'
                                }}
                            />
                            
                            {/* LAYER 2: CORE LOGO */}
                            <img 
                                src={LOGO_URL} 
                                className="relative z-10 w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,1)]" 
                                alt="Sumāmah Telecom" 
                            />
                       </div>
                       
                       {/* Brand Name */}
                       <div className="flex flex-col justify-center">
                           <span className={`text-xl md:text-2xl font-bold text-white tracking-wide leading-none ${displayFont} group-hover:text-gray-200 transition-colors`}>
                               S3Ts Telecom
                           </span>
                           <span className="text-[10px] tracking-[0.3em] text-[#00D4C6] uppercase mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                               Vision Network
                           </span>
                       </div>
                   </div>
                   
                   {/* Desktop Menu */}
                   <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60 ml-8">
                       <a href="#" className="hover:text-white transition-colors">{isAr ? 'شخصي' : 'Personal'}</a>
                       <a href="#" className="hover:text-white transition-colors">{isAr ? 'أعمال' : 'Business'}</a>
                       <a href="#" className="hover:text-white transition-colors">{isAr ? 'عائلتي' : 'Family Packs'}</a>
                   </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6">
                  <button onClick={() => onNavigate('home')} className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                      <ArrowLeft size={14} className={isAr ? 'rotate-180' : ''} />
                      {isAr ? 'العودة' : 'Back'}
                  </button>
                  <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-xs hover:bg-[#00D4C6] hover:text-white transition-all tracking-wider shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,212,198,0.6)]">
                      MyS3Ts
                  </button>
              </div>
          </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[85vh] w-full flex items-center pt-10 pb-20 overflow-hidden">
           
           {/* Phone Top Right (Antenna) - Background Element */}
           {/* RESIZED: w-40 md:w-64. MOVED: top-20 (to avoid text) */}
           <div className="absolute top-20 right-0 w-40 md:w-64 z-20 opacity-90 pointer-events-none mix-blend-lighten animate-float">
                <img 
                    src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_solo_frontal-diagonal.png" 
                    alt="S3Ts Antenna" 
                    className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,212,198,0.2)]"
                />
           </div>

           <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col md:flex-row items-center">
               
               {/* Left: Text Content */}
               <div className="flex-1 max-w-xl z-20 mb-12 md:mb-0">
                   <div className="inline-flex items-center gap-3 text-[#00D4C6] text-[10px] font-bold tracking-[0.3em] uppercase mb-8 border border-[#00D4C6]/30 px-4 py-2 rounded-full bg-[#00D4C6]/5">
                       <Zap size={12} className="fill-current" />
                       {isAr ? 'شبكة المستقبل' : 'The Network of the Future'}
                   </div>
                   
                   <h1 className={`text-4xl md:text-6xl mb-6 leading-[1.1] text-white tracking-tight ${displayFont}`}>
                       {isAr ? 'اتصال بلا' : 'Live without'} <br/>
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4C6] via-[#B480FF] to-white animate-pulse-slow">
                           {isAr ? 'حدود.' : 'boundaries.'}
                       </span>
                   </h1>
                   
                   <p className="text-lg text-gray-400 font-light mb-10 leading-relaxed max-w-md">
                       {isAr 
                         ? 'اكتشف حرية التنقل مع شريحتين إلكترونيتين ورابط كمي. العالم كله منزلك.'
                         : 'Experience the freedom of Dual eSIM and Quantum-Link™. The whole world is your home. 100% Coverage. 0% Roaming Fees.'}
                   </p>
                   
                   <div className="flex flex-col sm:flex-row items-start gap-6">
                       <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-sm hover:bg-[#00D4C6] hover:text-white transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                           {isAr ? 'انضم إلينا' : 'Join the Vision'} <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
                       </button>
                       <button className="text-white border border-white/20 px-10 py-4 rounded-full font-bold text-sm hover:border-[#B480FF] hover:text-[#B480FF] transition-colors">
                           {isAr ? 'تعرف على التغطية' : 'Coverage Map'}
                       </button>
                   </div>
               </div>

               {/* Right: Artistic Composition */}
               <div className="flex-1 relative w-full flex justify-center items-center">
                   
                   {/* Lifestyle Image with "Portal" Effect */}
                   <div className="relative w-[320px] h-[450px] md:w-[480px] md:h-[640px] rounded-[40px] overflow-hidden shadow-2xl rotate-[-2deg] border border-white/10 group bg-zinc-900">
                       <div className="absolute inset-0 bg-gradient-to-br from-[#00D4C6]/20 to-[#B480FF]/20 z-0"></div>
                       <img 
                            src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Family_beach.jpg" 
                            alt="Freedom" 
                            className="relative z-10 w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
                       />
                       
                       {/* Overlay Text inside image */}
                       <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
                           <p className={`text-2xl text-white mb-1 ${displayFont}`}>{isAr ? 'عائلة واحدة' : 'One Family'}</p>
                           <p className="text-xs text-[#00D4C6] uppercase tracking-widest">{isAr ? 'تواصل دون قيود' : 'Universal Connection'}</p>
                       </div>
                   </div>

                   {/* Floating Phone (Frontal) - MOVED TO TOP RIGHT CORNER */}
                   {/* RESIZED: Reduced to w-44 md:w-72 (from w-52 md:w-80). Repositioned to -top-16 */}
                   <div className="absolute -top-16 -right-6 md:-right-12 w-44 md:w-72 z-30 animate-float" style={{ animationDelay: '1s' }}>
                        <img 
                            src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_solo_frontal.png" 
                            alt="S3Ts Phone Frontal" 
                            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                        />
                   </div>

               </div>
           </div>
      </section>

      {/* --- FEATURES STRIP --- */}
      <section className="relative z-10 py-24 bg-zinc-950 border-t border-white/5">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                  
                  {/* Feature 1 */}
                  <div className="flex flex-col items-start group">
                      <div className="mb-8 p-4 rounded-2xl bg-[#00D4C6]/5 border border-[#00D4C6]/20 text-[#00D4C6] group-hover:bg-[#00D4C6] group-hover:text-black transition-colors duration-500">
                          <Users size={28} />
                      </div>
                      <h3 className={`text-2xl mb-4 text-white ${displayFont}`}>{isAr ? 'شريحة ذكية مزدوجة' : 'Dual Intelligent eSIM'}</h3>
                      <p className="text-gray-500 leading-relaxed mb-6 text-sm max-w-xs">
                          {isAr ? 'رقمك المحلي ورقم S3Ts العالمي يعملان معاً.' : 'Your local number and S3Ts Global number working in harmony. Switch intelligently based on signal strength.'}
                      </p>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex flex-col items-start group relative">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>
                      <div className="md:pl-10">
                        <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/20 text-white group-hover:bg-white group-hover:text-black transition-colors duration-500">
                            <Globe size={28} />
                        </div>
                        <h3 className={`text-2xl mb-4 text-white ${displayFont}`}>Quantum-Link™</h3>
                        <p className="text-gray-500 leading-relaxed mb-6 text-sm max-w-xs">
                            {isAr ? 'إنترنت فضائي مدمج. لا رسوم تجوال.' : 'Built-in satellite internet. No roaming fees. No dead zones. Connect from the middle of the ocean.'}
                        </p>
                      </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex flex-col items-start group relative">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>
                      <div className="md:pl-10">
                        <div className="mb-8 p-4 rounded-2xl bg-[#B480FF]/5 border border-[#B480FF]/20 text-[#B480FF] group-hover:bg-[#B480FF] group-hover:text-white transition-colors duration-500">
                            <ShieldCheck size={28} />
                        </div>
                        <h3 className={`text-2xl mb-4 text-white ${displayFont}`}>{isAr ? 'درع العائلة' : 'Family Shield'}</h3>
                        <p className="text-gray-500 leading-relaxed mb-6 text-sm max-w-xs">
                            {isAr ? 'حماية من المحتوى الضار وتتبع آمن للأحباء.' : 'AI-driven protection from harmful content and real-time secure tracking for your loved ones.'}
                        </p>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-black border-t border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">S3Ts Telecom Vision™</span>
              <div className="flex gap-8">
                  <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors">Terms of Service</a>
              </div>
          </div>
      </footer>

    </div>
  );
};

export default TelecomPage;