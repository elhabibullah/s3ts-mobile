
import React from 'react';
import { ArrowLeft, User, Globe, Smartphone, UserCheck, ArrowRightLeft, Fingerprint, Bell, ShieldCheck, Wallet, Calculator, MessageSquare } from 'lucide-react';
import { Language, AppView } from '../types';

interface FintechPageProps {
  onNavigate: (view: AppView) => void;
  language?: Language;
  onToggleLanguage: () => void;
}

const FintechPage: React.FC<FintechPageProps> = ({ onNavigate, language = 'en', onToggleLanguage }) => {
  const isAr = language === 'ar';
  const textFont = isAr ? 'font-tajawal' : 'font-rajdhani';
  const displayFont = isAr ? 'font-tajawal font-bold' : 'font-rajdhani font-bold';
  const accentColor = 'text-green-500';

  return (
    <div className={`bg-black text-white ${textFont} ${isAr ? 'text-right' : 'text-left'} selection:bg-green-500 selection:text-black overflow-x-hidden`} dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* Premium Standalone Navbar */}
      <nav className="h-20 border-b border-white/5 flex items-center px-6 md:px-12 bg-black sticky top-0 z-50">
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center text-white/50 hover:text-white transition-all group"
          aria-label="Back"
        >
            <div className="p-2.5 rounded-full border border-white/10 group-hover:border-white transition-colors bg-white/5">
              <ArrowLeft size={16} className={isAr ? 'rotate-180' : ''} />
            </div>
        </button>
        <div className="flex-1 flex justify-center">
          <img 
            src="https://raw.githubusercontent.com/elhabibullah/mon-stockage-media/refs/heads/main/H3_logo.png" 
            alt="H3 Logo" 
            className="h-12 md:h-16 w-auto object-contain brightness-[10] contrast-200"
          />
        </div>
        <div className="hidden md:flex items-center gap-6">
           <button 
             onClick={onToggleLanguage}
             className="flex items-center gap-2 text-white/50 hover:text-white transition-all group"
             title={isAr ? 'English' : 'العربية'}
           >
             <Globe size={18} strokeWidth={1.5} />
             <span className="text-[10px] font-bold tracking-widest uppercase">
               {isAr ? 'EN' : 'AR'}
             </span>
           </button>
           <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
             <User size={18} className="text-white/50" />
           </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-12 px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="mb-12 max-w-4xl">
              <div className="mb-8">
                <img 
                  src="https://raw.githubusercontent.com/elhabibullah/mon-stockage-media/refs/heads/main/H3_logo.png" 
                  alt="H3 Fintech Logo" 
                  className="h-16 md:h-24 w-auto object-contain brightness-[10] contrast-200"
                />
              </div>
              <p className={`text-lg md:text-xl ${accentColor} mb-6 font-semibold uppercase tracking-widest`}>
                {isAr ? 'فينتيك / نيو بنك (محفظة رقمية حلال)' : 'Your Fintech / Neobank (Halal digital wallet)'}
              </p>
              <p className="text-white text-base md:text-lg font-light leading-relaxed">
                {isAr 
                  ? 'توفير تطبيق وموقع محفظة رقمية آمنة ومتوافقة مع الشريعة الإسلامية لإدارة الأموال والدفع والاستلام وتحويل الأموال.'
                  : 'Providing a secure, Islamic-compliant digital wallet app and website for managing money, paying, receiving, and transferring funds.'}
              </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
              {/* Left: Metaball Video (No Frame) */}
              <div className="flex-1 w-full flex justify-start">
                  <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-3xl">
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-full object-cover scale-110 brightness-150 contrast-125"
                      >
                          <source src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Metaball_siver_bl_bg.mp4" type="video/mp4" />
                      </video>
                  </div>
              </div>

              {/* Right: Bankcards Image (No Frame) */}
              <div className="flex-1 w-full flex justify-start">
                  <div className="relative w-full max-w-md group">
                      <img 
                        src="https://raw.githubusercontent.com/elhabibullah/mon-stockage-media/refs/heads/main/H3_bankcards-no_bg.png" 
                        alt="H3 Bankcards" 
                        className="w-full h-auto drop-shadow-[0_20px_60px_rgba(34,197,94,0.3)] transform rotate-[-2deg] group-hover:rotate-0 transition-transform duration-1000 brightness-125 contrast-125"
                      />
                  </div>
              </div>
          </div>
      </section>

      {/* Key Features Section - White Dots Only */}
      <section className="py-16 px-6 md:px-12 bg-black border-y border-white/5">
          <div className="max-w-[1440px] mx-auto">
              <h2 className={`text-xl md:text-2xl mb-12 uppercase tracking-[0.2em] ${displayFont}`}>
                {isAr ? 'الميزات الرئيسية' : 'Key Features'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                  {[
                      { 
                        text: isAr ? 'تطبيق جوال + منصة ويب' : 'Mobile app + web platform',
                        icon: <Smartphone className={accentColor} size={24} />
                      },
                      { 
                        text: isAr ? 'إنشاء حساب وتوثيق KYC (هوية + سيلفي)' : 'Account creation and KYC verification (ID + selfie)',
                        icon: <UserCheck className={accentColor} size={24} />
                      },
                      { 
                        text: isAr ? 'مدفوعات وتحويلات واستلام أموال' : 'Payments, transfers, and receiving money',
                        icon: <ArrowRightLeft className={accentColor} size={24} />
                      },
                      { 
                        text: isAr ? 'أمان بيومتري: وجه، صوت، بصمة' : 'Biometric security: face, voice, fingerprint',
                        icon: <Fingerprint className={accentColor} size={24} />
                      },
                      { 
                        text: isAr ? 'تاريخ معاملات وتنبيهات فورية' : 'Real-time transaction history and notifications',
                        icon: <Bell className={accentColor} size={24} />
                      },
                      { 
                        text: isAr ? 'امتثال حلال: لا فوائد، لا قروض محظورة' : 'Halal compliance: no interest, no prohibited credit',
                        icon: <ShieldCheck className={accentColor} size={24} />
                      },
                      { 
                        text: isAr ? 'محفظة قانونية منفصلة' : 'Separate lawful wallet',
                        icon: <Wallet className={accentColor} size={24} />
                      },
                      { 
                        text: isAr ? 'حساب آلي للزكاة' : 'Automatic zakat calculation',
                        icon: <Calculator className={accentColor} size={24} />
                      },
                      { 
                        text: isAr ? 'دردشة دعم وأسئلة شائعة' : 'Support chat and FAQ',
                        icon: <MessageSquare className={accentColor} size={24} />
                      },
                  ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all group">
                          <div className="p-3 rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                            {feature.icon}
                          </div>
                          <p className="text-white text-sm md:text-base font-medium tracking-wide leading-tight">{feature.text}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Cards Detail Section */}
      <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="space-y-32">
              
              {/* 1. H3 Titanium Prestige */}
              <div className="flex flex-col lg:flex-row items-start gap-16">
                  <div className="flex-1">
                      <span className={`inline-block px-4 py-1 rounded-full border border-green-500/30 text-[10px] font-bold uppercase tracking-[0.2em] ${accentColor} mb-6`}>
                          International Identity
                      </span>
                      <h2 className={`text-2xl md:text-4xl mb-6 uppercase tracking-wider ${displayFont}`}>1. The Chrome Metallic Card</h2>
                      <p className="text-sm font-bold text-white mb-2 tracking-widest uppercase">Name: H3 Titanium Prestige</p>
                      <p className="text-white/60 text-xs mb-8 tracking-widest uppercase">Target Audience: International travelers, business leaders, and investors.</p>
                      
                      <div className="mb-8 py-6 bg-white/5 border-l-2 border-green-500 pl-6 pr-4 italic font-medium text-white leading-relaxed text-base md:text-lg">
                          "Forged in chrome and finished with precision, the H3 Titanium Prestige is more than a payment method—it is a statement of power. Designed for the global citizen who demands seamless access and unmatched liquidity, this card opens doors from Brussels to Madinah and beyond."
                      </div>
                      
                      <div className="space-y-6">
                          <p className={`text-sm font-bold uppercase tracking-widest ${accentColor}`}>Key Benefits:</p>
                          <div className="grid grid-cols-1 gap-4">
                              {[
                                  { title: 'Global Lounge Access', desc: 'Unlimited entry to 1,000+ airport lounges worldwide.' },
                                  { title: 'Zero FX Fees', desc: 'No foreign transaction fees on international purchases.' },
                                  { title: 'Virtual Assistant Service', desc: '24/7 dedicated personal assistant.' },
                                  { title: 'High Liquidity', desc: 'Flexible spending limits tailored to your investment portfolio.' }
                              ].map((benefit, i) => (
                                  <div key={i} className="flex items-start gap-3">
                                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0"></div>
                                      <div>
                                          <p className="text-sm font-bold text-white uppercase tracking-wider">{benefit.title}</p>
                                          <p className="text-xs text-white/50">{benefit.desc}</p>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
                  <div className="flex-1 flex justify-start lg:justify-end">
                      <div className="relative group">
                          <img 
                            src="https://raw.githubusercontent.com/elhabibullah/mon-stockage-media/refs/heads/main/H3_bankcards-no_bg.png" 
                            className="w-full max-w-sm h-auto transform lg:rotate-[-5deg] group-hover:rotate-0 transition-transform duration-1000 grayscale group-hover:grayscale-0 contrast-125 brightness-125 drop-shadow-[0_20px_60px_rgba(255,255,255,0.15)]"
                            alt="Titanium Prestige Card"
                          />
                      </div>
                  </div>
              </div>

              {/* 2. H3 Watani */}
              <div className="flex flex-col lg:flex-row-reverse items-start gap-16">
                  <div className="flex-1">
                      <span className={`inline-block px-4 py-1 rounded-full border border-green-500/30 text-[10px] font-bold uppercase tracking-[0.2em] ${accentColor} mb-6`}>
                          National Identity
                      </span>
                      <h2 className={`text-2xl md:text-4xl mb-6 uppercase tracking-wider ${displayFont}`}>2. The Saudi Green Card</h2>
                      <p className="text-sm font-bold text-white mb-2 tracking-widest uppercase">Name: H3 Watani (The Identity Card)</p>
                      <p className="text-white/60 text-xs mb-8 tracking-widest uppercase">Target Audience: Saudi nationals and residents proud of their heritage.</p>
                      
                      <div className="mb-8 py-6 bg-white/5 border-l-2 border-green-500 pl-6 pr-4 italic font-medium text-white leading-relaxed text-base md:text-lg">
                          "Carry your identity with pride. The H3 Watani card celebrates the spirit of Saudi Arabia, combining the values of our heritage with the speed of modern fintech. Sharia-compliant and deeply rooted in the Kingdom, it connects you to the best of local culture and commerce."
                      </div>

                      <div className="space-y-6">
                          <p className={`text-sm font-bold uppercase tracking-widest ${accentColor}`}>Key Benefits:</p>
                          <div className="grid grid-cols-1 gap-4">
                              {[
                                  { title: 'Sharia-Compliant', desc: '100% ethical banking structure with zero riba.' },
                                  { title: 'Local Cashback', desc: 'Enhanced rewards (up to 5%) on local dining, coffee, and Saudi luxury brands.' },
                                  { title: 'National Day Perks', desc: 'Exclusive double-point offers during Saudi National Day and Founding Day.' },
                                  { title: 'Vision 2030 Partners', desc: 'Special discounts at entertainment and tourism sectors within KSA.' }
                              ].map((benefit, i) => (
                                  <div key={i} className="flex items-start gap-3">
                                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0"></div>
                                      <div>
                                          <p className="text-sm font-bold text-white uppercase tracking-wider">{benefit.title}</p>
                                          <p className="text-xs text-white/50">{benefit.desc}</p>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
                  <div className="flex-1 flex justify-start">
                      <div className="relative group">
                          <img 
                            src="https://raw.githubusercontent.com/elhabibullah/mon-stockage-media/refs/heads/main/H3_bankcards-no_bg.png" 
                            className="w-full max-w-sm h-auto transform lg:rotate-[5deg] group-hover:rotate-0 transition-transform duration-1000 hue-rotate-[100deg] contrast-125 brightness-125 drop-shadow-[0_20px_60px_rgba(34,197,94,0.3)]"
                            alt="Watani Card"
                          />
                      </div>
                  </div>
              </div>

          </div>
      </section>
    </div>
  );
};

export default FintechPage;
