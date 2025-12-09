
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import ChatSupport from './components/ChatSupport';
import StorePage from './components/StorePage';
import InvestorsPage from './components/InvestorsPage';
import AboutPage from './components/AboutPage';
import S3TsChatWeb from './components/S3TsChatWeb';
import { PRODUCTS, TRANSLATIONS } from './constants';
import { Language } from './types';
import { Check, Box, Mic, Globe, ShieldCheck, X, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'store' | 'investors' | 'about' | 'chat-web'>('home');
  const [cartCount, setCartCount] = useState(0);
  const [activeInfoModal, setActiveInfoModal] = useState<'chat' | 'quantum' | null>(null);
  
  // Language State
  const [language, setLanguage] = useState<Language>('en');
  const t = TRANSLATIONS[language]; // Current translation object

  const handleNavigate = (view: 'home' | 'store' | 'investors' | 'about' | 'chat-web') => {
    setCurrentView(view);
    if (view !== 'chat-web') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
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
  }, [currentView, language]); 

  // Dynamic Fonts
  const displayFont = language === 'ar' ? 'font-amiri font-bold' : 'font-display font-medium';
  const textFont = language === 'ar' ? 'font-tajawal' : 'font-sans font-light';

  // If we are in the Chat Web Interface, render full screen without standard layout
  if (currentView === 'chat-web') {
      return <S3TsChatWeb onNavigate={() => setCurrentView('home')} />;
  }

  return (
    <div className={`min-h-screen bg-white text-gray-900 selection:bg-black selection:text-white ${language === 'ar' ? 'font-tajawal' : 'font-sans'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar onNavigate={handleNavigate} cartCount={cartCount} currentView={currentView as any} language={language} translations={t} />
      
      {/* Main content with top padding to account for fixed navbar */}
      <main className="pt-16 md:pt-24">
        {currentView === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} language={language} translations={t} />
            
            {/* Introduction Section */}
            <section className="pt-0 pb-12 md:pb-16 bg-white text-center px-6 reveal -mt-12 md:-mt-20 relative z-20">
                <div className="max-w-2xl mx-auto">
                    <span className={`block text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-6 ${textFont}`}>{t.intro_revolution}</span>
                    <h2 className={`text-2xl md:text-3xl font-normal mb-8 text-gray-900 leading-snug ${displayFont}`}>
                        {t.intro_title_1} <br/> {t.intro_title_2}
                    </h2>
                    <p className={`text-sm text-gray-500 leading-loose tracking-wide ${textFont}`}>
                        {t.intro_desc}
                        <br /><br />
                        <strong>{t.intro_internet}</strong>
                    </p>
                </div>
            </section>

            {/* Neural/Biometrics Section */}
            <section id="ai" className="py-10 md:py-12 bg-black text-white reveal overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                   <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                       {/* Content */}
                       <div className={`flex-1 text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'} order-2 md:order-1`}>
                          <span className={`block text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 animate-pulse ${textFont}`}>
                              {t.bio_tag}
                          </span>
                          <h2 className={`text-3xl md:text-5xl mb-6 ${displayFont}`}>{t.bio_title}</h2>
                          <p className={`text-gray-400 text-sm leading-relaxed tracking-wide max-w-md mx-auto ${language === 'ar' ? 'md:mr-0' : 'md:ml-0'} ${textFont}`}>
                              {t.bio_desc}
                          </p>
                       </div>

                       {/* Image */}
                       <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
                           <div className={`relative w-full flex justify-center ${language === 'ar' ? 'md:justify-start' : 'md:justify-end'}`}>
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

             {/* Energy Section */}
             <section id="energy" className="min-h-[80vh] flex flex-col md:flex-row bg-white reveal">
                <div className="flex-1 relative min-h-[400px]">
                    <img 
                        src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts+_nolithium.jpg" 
                        alt="Nano-Optic Solar" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 flex flex-col justify-center p-12 md:p-24 bg-zinc-50">
                    <span className={`block text-amber-600 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 ${textFont}`}>{t.energy_tag}</span>
                    <h2 className={`text-3xl md:text-5xl text-gray-900 mb-8 ${displayFont}`}>{t.energy_title}</h2>
                    <p className={`text-sm text-gray-600 leading-loose tracking-wide mb-8 ${textFont}`}>
                        {t.energy_desc}
                    </p>
                    <div className="flex gap-8">
                        <div>
                            <span className={`block text-3xl text-gray-900 ${displayFont}`}>∞</span>
                            <span className={`text-[10px] uppercase tracking-widest text-gray-500 ${textFont}`}>{t.energy_lifespan}</span>
                        </div>
                        <div>
                            <span className={`block text-3xl text-gray-900 ${displayFont}`}>72h</span>
                            <span className={`text-[10px] uppercase tracking-widest text-gray-500 ${textFont}`}>{t.energy_reserve}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* High Tech Specs */}
            <section className="py-24 bg-black text-white reveal">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                     <div className="text-center mb-20">
                        <h2 className={`text-3xl md:text-4xl mb-4 ${displayFont}`}>{t.tech_title}</h2>
                        <p className={`text-gray-500 text-xs tracking-[0.2em] uppercase ${textFont}`}>{t.tech_subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {/* Card 1: Neural Core */}
                        <div className="border border-white/10 p-8 hover:border-white/30 transition-colors group">
                            <div className="mb-6 h-12 flex items-center">
                                <img 
                                    src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Neural-Core_transparent.png" 
                                    alt="Neural Core" 
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                            <h3 className={`text-lg mb-2 ${displayFont}`}>{t.tech_core}</h3>
                            <p className={`text-gray-500 text-xs leading-relaxed ${textFont}`}>
                                {t.tech_core_desc}
                            </p>
                        </div>
                         
                         {/* Card 2: Quantum Link */}
                        <div 
                            className="border border-white/10 p-8 hover:border-white/30 transition-colors group cursor-pointer relative"
                            onClick={() => setActiveInfoModal('quantum')}
                        >
                            <span className={`absolute top-4 ${language === 'ar' ? 'left-4' : 'right-4'} text-[10px] text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest ${textFont}`}>
                                {t.click_info}
                            </span>
                             <div className="mb-6 h-12 flex items-center">
                                <img 
                                    src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/quantum_link_transparent.png" 
                                    alt="Quantum Link" 
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                            <h3 className={`text-lg mb-2 ${displayFont}`}>{t.tech_quantum}</h3>
                            <p className={`text-gray-500 text-xs leading-relaxed ${textFont}`}>
                                {t.tech_quantum_desc}
                            </p>
                        </div>

                         {/* Card 3: Holographic */}
                        <div className="border border-white/10 p-8 hover:border-white/30 transition-colors group">
                             <div className="mb-6 h-12 flex items-center">
                                <img 
                                    src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Holobeam_3D.png" 
                                    alt="HOLO-Beam" 
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                            <h3 className={`text-lg mb-2 ${displayFont}`}>{t.tech_holo}</h3>
                            <p className={`text-gray-500 text-xs leading-relaxed ${textFont}`}>
                                {t.tech_holo_desc}
                            </p>
                        </div>

                        {/* Card 4: S3Ts Chat */}
                        <div 
                            className="border border-white/10 p-8 hover:border-white/30 transition-colors group cursor-pointer relative"
                            onClick={() => setActiveInfoModal('chat')}
                        >
                            <span className={`absolute top-4 ${language === 'ar' ? 'left-4' : 'right-4'} text-[10px] text-green-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest ${textFont}`}>
                                {t.click_info}
                            </span>
                            <div className="mb-6 w-8 h-8 rounded-full overflow-hidden bg-black border border-gray-700 group-hover:border-green-400/50 transition-colors">
                                <img 
                                    src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_chat_logo.jpg" 
                                    alt="S3Ts Chat"
                                    className="w-full h-full object-cover transition-all duration-500"
                                />
                            </div>
                            <h3 className={`text-lg mb-2 ${displayFont}`}>{t.tech_chat}</h3>
                            <p className={`text-gray-500 text-xs leading-relaxed ${textFont}`}>
                                {t.tech_chat_desc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

          </>
        )}

        {currentView === 'store' && <StorePage onAddToCart={handleAddToCart} language={language} translations={t} />}
        {currentView === 'investors' && <InvestorsPage />}
        {currentView === 'about' && <AboutPage onNavigate={handleNavigate} language={language} translations={t} />}

        {/* --- MODALS --- */}

        {/* 1. S3Ts Chat Modal */}
        {activeInfoModal === 'chat' && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setActiveInfoModal(null)}></div>
                <div className="bg-zinc-900 border border-white/10 w-full max-w-lg max-h-[90vh] overflow-y-auto relative shadow-2xl animate-fade-in-up text-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                    <div className={`sticky top-0 z-10 flex ${language === 'ar' ? 'justify-start' : 'justify-end'} p-4 bg-zinc-900/90 backdrop-blur-sm`}>
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
                            <h2 className={`text-2xl mb-2 ${displayFont}`}>{t.tech_chat}</h2>
                            <p className={`text-green-400 text-xs uppercase tracking-widest ${textFont}`}>{language === 'ar' ? 'مستقبل الاتصالات' : 'The Future of Communication'}</p>
                            
                            {/* Launch Button */}
                            <button 
                                onClick={() => { setActiveInfoModal(null); setCurrentView('chat-web'); }}
                                className="mt-6 flex items-center gap-2 bg-teal-600 text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-teal-500 transition-all shadow-lg shadow-teal-900/50"
                            >
                                {language === 'ar' ? 'تشغيل واجهة الويب' : 'Launch Web Interface'} <ExternalLink size={14} />
                            </button>
                        </div>

                        <div className={`space-y-8 text-sm font-light text-gray-300 leading-relaxed ${textFont}`}>
                            <p className="italic text-center text-gray-400 border-b border-white/10 pb-6">
                                {language === 'ar' ? '"أسرع من iMessage. أكثر حرية من WhatsApp. أكثر أماناً من Signal."' : '"Faster than iMessage. Freer than WhatsApp. More secure than Signal."'}
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <Box className="text-white shrink-0" size={20} />
                                    <div>
                                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">{language === 'ar' ? 'رسائل هولو' : 'HOLO-Messages'}</h4>
                                        <p>{language === 'ar' ? 'أرسل رسائل ثلاثية الأبعاد حقيقية تُعرض كهولوغرام فوق الجهاز.' : 'Send real 3D messages that project as holograms above the device.'}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Mic className="text-white shrink-0" size={20} />
                                    <div>
                                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">{language === 'ar' ? 'التحكم الصوتي الفائق' : 'Voice Control Supreme'}</h4>
                                        <p>{language === 'ar' ? 'أرسل الرسائل، وافتح التطبيقات، أو اكتب على واتساب بصوتك فقط.' : 'Send messages, open apps, or write on WhatsApp purely with your voice.'}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Globe className="text-white shrink-0" size={20} />
                                    <div>
                                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">{language === 'ar' ? 'الجسر العالمي' : 'Universal Bridge'}</h4>
                                        <p>{language === 'ar' ? 'تواصل مع واتساب، SMS، RCS، وأي رقم دون تثبيت تطبيقات خارجية.' : 'Communicate with WhatsApp, SMS, RCS, and any number without installing external apps.'}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <ShieldCheck className="text-white shrink-0" size={20} />
                                    <div>
                                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">{language === 'ar' ? 'الأمان المطلق' : 'Ultimate Security'}</h4>
                                        <p>{language === 'ar' ? 'تشفير محلي، حذف تلقائي آمن، وذكاء اصطناعي مضاد لتصوير الشاشة.' : 'Local encryption, secure auto-delete, and anti-screenshot AI.'}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                <p className="text-xs text-gray-500 uppercase tracking-widest">{language === 'ar' ? 'متاح فقط على S3Ts Pro 3.0' : 'Available only on S3Ts Pro 3.0'}</p>
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
                <div className="bg-zinc-900 border border-white/10 w-full max-w-lg max-h-[90vh] overflow-y-auto relative shadow-2xl animate-fade-in-up text-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                    <div className={`sticky top-0 z-10 flex ${language === 'ar' ? 'justify-start' : 'justify-end'} p-4 bg-zinc-900/90 backdrop-blur-sm`}>
                        <button 
                            onClick={() => setActiveInfoModal(null)}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X size={20} className="text-white" />
                        </button>
                    </div>

                    <div className="p-8 pt-0">
                        <div className="flex flex-col items-center mb-10 text-center">
                             <div className="mb-6 h-20 flex items-center justify-center">
                                <img 
                                    src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/quantum_link_transparent.png" 
                                    alt="Quantum Link" 
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                            <h2 className={`text-2xl mb-2 ${displayFont}`}>{t.tech_quantum}</h2>
                            <p className={`text-blue-400 text-xs uppercase tracking-widest ${textFont}`}>{language === 'ar' ? 'اتصال فضائي عالمي' : 'Global Satellite Connectivity'}</p>
                        </div>

                        <div className={`space-y-6 text-sm font-light text-gray-300 leading-relaxed text-center ${textFont}`}>
                            <p>
                                {language === 'ar' ? 'يدمج S3Ts Pro 3.0 نظام Quantum-Link™، وهو نظام اتصال هجين بين الجوال والأقمار الصناعية مشمول مدى الحياة.' : 'The S3Ts Pro 3.0 integrates Quantum-Link™, a hybrid mobile-satellite connectivity system included for life.'}
                            </p>
                            <div className="bg-blue-900/20 border border-blue-500/20 p-6 rounded-lg my-6">
                                <ul className={`space-y-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                                    <li className="flex items-center gap-3">
                                        <Check size={16} className="text-blue-400" />
                                        <span>{language === 'ar' ? 'لا حاجة لشريحة SIM.' : 'No SIM card required.'}</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check size={16} className="text-blue-400" />
                                        <span>{language === 'ar' ? 'بدون اشتراك.' : 'No subscription.'}</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check size={16} className="text-blue-400" />
                                        <span>{language === 'ar' ? 'لا رسوم مستقبلية.' : 'No future fees.'}</span>
                                    </li>
                                </ul>
                            </div>
                            <p>
                                {language === 'ar' ? 'هاتفك متصل في أي مكان على الأرض بمجرد تشغيله. المحيطات، الصحاري، أو الجبال - لن تكون أبداً خارج التغطية.' : 'Your phone is connected anywhere on Earth the moment you turn it on. Oceans, deserts, or mountains—you are never offline.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )}

      </main>

      {currentView === 'home' && <Footer onNavigate={handleNavigate} language={language} onToggleLanguage={toggleLanguage} translations={t} />}
      
      <ChatSupport language={language} />
    </div>
  );
};

export default App;
