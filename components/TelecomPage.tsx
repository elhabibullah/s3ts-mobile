import React from 'react';
import { ArrowLeft, Globe, Zap, Users, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { Language } from '../types';

interface TelecomPageProps {
  onNavigate: (view: 'home' | 'store') => void;
  language?: Language;
}

const TelecomPage: React.FC<TelecomPageProps> = ({ onNavigate, language = 'en' }) => {
  const isAr = language === 'ar';
  const fontSans = isAr ? 'font-tajawal' : 'font-sans';
  const displayFont = isAr ? 'font-amiri font-bold' : 'font-display font-medium';

  return (
    <div className={`min-h-screen bg-black text-white ${fontSans} ${isAr ? 'text-right' : 'text-left'} overflow-x-hidden`} dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* --- BACKGROUND (Space Hub - Pure Black with Neon Strokes) --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
          {/* NO TEXTURE/GRID OVERLAY HERE - JUST PURE BLACK */}
          
          {/* Stroke 1: Turquoise Sweep - Very subtle */}
          <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[600px] bg-[#00D4C6] rounded-[100%] blur-[120px] opacity-15 rotate-[15deg] mix-blend-screen origin-top-left"></div>
          
          {/* Stroke 2: Mauve/Purple Sweep - Very subtle */}
          <div className="absolute top-[-20%] -right-[10%] w-[100vw] h-[800px] bg-[#B480FF] rounded-[100%] blur-[120px] opacity-20 rotate-[-25deg] mix-blend-screen origin-top-right animate-pulse-slow"></div>
      </div>

      {/* --- HEADER --- */}
      <header className="relative z-50 bg-black sticky top-0 border-b border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
              <div className="flex items-center gap-4 md:gap-8">
                   {/* Brand Logo - Luminous Effect */}
                   <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('home')}>
                       <div className="relative">
                            {/* The "Aurora Glow" Effect behind the logo - INTENSIFIED */}
                            <div className="absolute -inset-6 bg-gradient-to-r from-[#00D4C6] via-white to-[#B480FF] blur-2xl opacity-60 rounded-full animate-pulse group-hover:opacity-80 transition-opacity duration-700"></div>
                            
                            <img 
                                src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/SUM%C4%80MAH_3-colours.png" 
                                className="relative z-10 h-20 md:h-28 w-auto object-contain" 
                                alt="Sumāmah Telecom" 
                            />
                       </div>
                       {/* Name - ALWAYS VISIBLE */}
                       <span className={`text-lg md:text-xl font-bold text-white tracking-wide whitespace-nowrap ${displayFont}`}>
                           S3Ts Telecom
                       </span>
                   </div>
                   
                   {/* Desktop Menu */}
                   <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                       <a href="#" className="hover:text-[#00D4C6] transition-colors">{isAr ? 'شخصي' : 'Personal'}</a>
                       <a href="#" className="hover:text-[#00D4C6] transition-colors">{isAr ? 'أعمال' : 'Business'}</a>
                       <a href="#" className="hover:text-[#00D4C6] transition-colors">{isAr ? 'عائلتي' : 'Family Packs'}</a>
                   </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6">
                  <button onClick={() => onNavigate('home')} className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                      <ArrowLeft size={14} className={isAr ? 'rotate-180' : ''} />
                      {isAr ? 'العودة' : 'Back'}
                  </button>
                  <button className="bg-white text-black px-6 py-2.5 rounded-full font-medium text-xs hover:bg-[#00D4C6] hover:text-white transition-all">
                      MyS3Ts
                  </button>
              </div>
          </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] w-full flex items-center pt-10 pb-20 overflow-hidden">
           
           {/* Phone Top Right (Antenna) - Corrected Visibility */}
           <div className="absolute top-4 right-0 w-32 md:w-64 z-30 opacity-90 pointer-events-none animate-float">
                <img 
                    src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_solo_frontal-diagonal.png" 
                    alt="S3Ts Antenna" 
                    className="w-full h-auto object-contain"
                />
           </div>

           <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col md:flex-row items-center">
               
               {/* Left: Text Content */}
               <div className="flex-1 max-w-xl z-20 mb-12 md:mb-0">
                   <div className="inline-flex items-center gap-2 text-[#00D4C6] text-[10px] font-bold tracking-widest uppercase mb-6">
                       <Zap size={12} className="fill-current" />
                       {isAr ? 'شبكة المستقبل' : 'The Network of the Future'}
                   </div>
                   
                   {/* REDUCED TEXT SIZE AS REQUESTED & Luxury Font */}
                   <h1 className={`text-4xl md:text-6xl mb-8 leading-tight text-white tracking-tight ${displayFont}`}>
                       {isAr ? 'اتصال بلا' : 'Live without'} <br/>
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4C6] to-[#B480FF]">
                           {isAr ? 'حدود.' : 'boundaries.'}
                       </span>
                   </h1>
                   
                   <p className="text-lg text-gray-400 font-light mb-10 leading-relaxed max-w-md">
                       {isAr 
                         ? 'اكتشف حرية التنقل مع شريحتين إلكترونيتين ورابط كمي. العالم كله منزلك.'
                         : 'Experience the freedom of Dual eSIM and Quantum-Link™. The whole world is your home.'}
                   </p>
                   
                   <div className="flex flex-col sm:flex-row items-start gap-6">
                       <button className="bg-[#B480FF] text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-[#a060ff] transition-all flex items-center gap-2">
                           {isAr ? 'انضم إلينا' : 'Join the Vision'} <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
                       </button>
                       <button className="text-white font-bold text-sm flex items-center gap-2 hover:text-[#00D4C6] transition-colors py-4">
                           {isAr ? 'تعرف على التغطية' : 'Check Coverage'}
                       </button>
                   </div>
               </div>

               {/* Right: Artistic Composition */}
               <div className="flex-1 relative w-full flex justify-center items-center">
                   
                   {/* Lifestyle Image (Caravan/Family) */}
                   <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl rotate-[-2deg] border border-white/20 group">
                       <img 
                            src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Family_beach.jpg" 
                            alt="Freedom" 
                            className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000 grayscale-[30%] group-hover:grayscale-0"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                       <div className="absolute bottom-8 left-8 text-white">
                           <p className={`text-lg ${displayFont}`}>{isAr ? 'عائلة واحدة' : 'One Family'}</p>
                           <p className="text-xs text-[#00D4C6]">{isAr ? 'تواصل دون قيود' : 'Universal Connection'}</p>
                       </div>
                   </div>

                   {/* Floating Phone (Frontal) - Next to Image */}
                   <div className="absolute top-12 -right-4 md:-right-12 w-32 md:w-48 z-40 animate-float">
                        <img 
                            src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_solo_frontal.png" 
                            alt="S3Ts Phone Frontal" 
                            className="w-full h-auto drop-shadow-2xl"
                        />
                   </div>

               </div>
           </div>
      </section>

      {/* --- FEATURES (NO GRID, NO CARDS) --- */}
      <section className="relative z-10 py-24 bg-black border-t border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
              
              {/* Organic Flow Layout */}
              <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-8">
                  
                  {/* Feature 1 */}
                  <div className="flex-1 flex flex-col items-start">
                      <div className="mb-6 p-4 rounded-full bg-[#00D4C6]/10 text-[#00D4C6]">
                          <Users size={32} />
                      </div>
                      <h3 className={`text-2xl mb-4 text-white ${displayFont}`}>{isAr ? 'شريحة ذكية مزدوجة' : 'Dual Intelligent eSIM'}</h3>
                      <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                          {isAr ? 'رقمك المحلي ورقم S3Ts العالمي يعملان معاً.' : 'Your local number and S3Ts Global number working in harmony.'}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-bold text-white">
                          <Check size={16} className="text-[#00D4C6]" /> {isAr ? 'تفعيل فوري' : 'Instant Activation'}
                      </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex-1 flex flex-col items-start border-l border-white/10 pl-8 md:pl-12">
                      <div className="mb-6 p-4 rounded-full bg-white/10 text-white">
                          <Globe size={32} />
                      </div>
                      <h3 className={`text-2xl mb-4 text-white ${displayFont}`}>Quantum-Link™</h3>
                      <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                          {isAr ? 'إنترنت فضائي مدمج. لا رسوم تجوال.' : 'Built-in satellite internet. No roaming fees. No dead zones.'}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-bold text-white">
                          <Check size={16} className="text-[#00D4C6]" /> {isAr ? 'تغطية 100%' : '100% Coverage'}
                      </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex-1 flex flex-col items-start border-l border-white/10 pl-8 md:pl-12">
                      <div className="mb-6 p-4 rounded-full bg-[#B480FF]/10 text-[#B480FF]">
                          <ShieldCheck size={32} />
                      </div>
                      <h3 className={`text-2xl mb-4 text-white ${displayFont}`}>{isAr ? 'درع العائلة' : 'Family Shield'}</h3>
                      <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                          {isAr ? 'حماية من المحتوى الضار وتتبع آمن للأحباء.' : 'Protection from harmful content and secure tracking for loved ones.'}
                      </p>
                      <button className="text-sm font-bold text-[#B480FF] hover:text-white transition-colors flex items-center gap-2">
                          {isAr ? 'اكتشف المزيد' : 'Learn More'} <ArrowRight size={14} />
                      </button>
                  </div>

              </div>
          </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-black border-t border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
              <span className="text-xs font-bold text-white/50 uppercase tracking-widest">S3Ts Telecom Vision™</span>
              <div className="flex gap-6">
                  <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy</a>
                  <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms</a>
              </div>
          </div>
      </footer>

    </div>
  );
};

export default TelecomPage;