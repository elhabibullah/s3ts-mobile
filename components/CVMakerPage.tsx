import React from 'react';
import { ArrowLeft, FileText, User, Layout, Eye, Download, Sparkles, ShieldCheck, Cpu, Globe, Zap } from 'lucide-react';
import { Language, AppView } from '../types';

interface CVMakerPageProps {
  onNavigate: (view: AppView) => void;
  language?: Language;
}

const CVMakerPage: React.FC<CVMakerPageProps> = ({ onNavigate, language = 'en' }) => {
  const isAr = language === 'ar';
  const displayFont = isAr ? 'font-amiri font-bold' : 'font-display font-light';
  const textFont = isAr ? 'font-tajawal' : 'font-sans';

  return (
    <div className={`min-h-screen bg-white text-black ${textFont} ${isAr ? 'text-right' : 'text-left'} selection:bg-blue-600 selection:text-white`} dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* Navbar */}
      <nav className="h-16 md:h-20 border-b border-gray-100 flex items-center px-6 md:px-12 bg-black sticky top-0 z-50">
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center text-gray-400 hover:text-white transition-all group"
          aria-label="Back"
        >
            <div className="p-2 rounded-full border border-white/20 group-hover:border-white transition-colors bg-white/5">
              <ArrowLeft size={14} className={isAr ? 'rotate-180' : ''} />
            </div>
        </button>
        <div className={`flex-1 flex justify-center text-[10px] tracking-[0.4em] uppercase text-blue-400 font-bold`}>AI Pro CV Master</div>
        <div className="hidden md:flex items-center gap-6">
           <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
             <User size={14} className="text-gray-400" />
           </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="bg-black pt-20 pb-16 px-6 text-center">
          <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
                  <Sparkles size={12} /> S3Ts Neural Engine 3.0
              </div>
              <h1 className={`text-4xl md:text-5xl lg:text-7xl leading-tight tracking-tight text-white mb-6 ${displayFont}`}>
                {isAr ? 'مستقبلك المهني،' : 'Neural Precision.'} <br/>
                <span className="text-blue-400 font-normal">
                  {isAr ? 'بمعايير عالمية.' : 'Professional Mastery.'}
                </span>
              </h1>
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Experience the world's most advanced professional profiling system. Built directly into the S3Ts Pro 3.0 ecosystem to elevate your career.
              </p>
          </div>
      </section>

      {/* Main Feature Showcase */}
      <section className="bg-black flex items-center justify-center overflow-hidden pb-32">
          <div className="w-full max-w-[1440px] px-4 md:px-12">
              <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl border border-white/5 bg-zinc-950">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-contain"
                  >
                      <source src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Video_Happy_man-AI-CV.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              </div>
          </div>
      </section>

      {/* Engineering Excellence */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-24">
              <h2 className={`text-3xl md:text-6xl mb-8 leading-tight ${displayFont}`}>
                Industry <span className="text-gray-400">Master Standard.</span>
              </h2>
              <div className="w-20 h-0.5 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: Cpu, 
                title: isAr ? 'تكامل النواة العصبية A2X' : 'Neural Core A2X Integration', 
                desc: isAr ? 'يستخدم 100 تريليون عملية في الثانية لتحليل وإعادة هيكلة بياناتك المهنية.' : 'Uses 100 trillion operations per second to analyze and restructure your career data.' 
              },
              { 
                icon: ShieldCheck, 
                title: isAr ? 'هندسة متوافقة مع ATS' : 'ATS-Proof Architecture', 
                desc: isAr ? 'تم تصميمه ليكون مقروءًا بشكل مثالي من قبل جميع خوارزميات التوظيف الكبرى عالميًا.' : 'Engineered to be perfectly readable by every major recruitment algorithm globally.' 
              },
              { 
                icon: Layout, 
                title: isAr ? 'نظام تصميم ستوكهولم' : 'Stockholm Design System', 
                desc: isAr ? 'يتميز بتسلسلات هرمية نظيفة ومساحات بيضاء محسنة وخطوط احترافية.' : 'Features clean hierarchies, optimized whitespace, and professional typography.' 
              },
              { 
                icon: Eye, 
                title: isAr ? 'تحسين الخريطة الحرارية' : 'Heatmap Optimization', 
                desc: isAr ? 'يتم حساب التخطيطات بناءً على بيانات تتبع العين لتوجيه مسؤولي التوظيف.' : 'Layouts are calculated based on eye-tracking data to guide recruiters to your achievements.' 
              },
              { 
                icon: Download, 
                title: isAr ? 'تصدير PDF شعاعي' : 'Vector PDF Export', 
                desc: isAr ? 'ينشئ مستندات فائقة الدقة مع بيانات وصفية مدمجة للمسح الذكي.' : 'Generates ultra-high definition documents with embedded metadata for smart scanning.' 
              },
              { 
                icon: Globe, 
                title: isAr ? 'مزامنة متعددة اللغات' : 'Multilingual Sync', 
                desc: isAr ? 'يقوم تلقائياً بترجمة وتكييف ملفك المهني للأسواق الدولية.' : 'Automatically translates and adapts your professional profile for international markets.' 
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                      <feature.icon size={28} />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-4">{feature.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-32 text-center">
              <button 
                onClick={() => onNavigate('store')}
                className="px-16 py-6 bg-black text-white rounded-full font-bold uppercase text-xs tracking-[0.4em] hover:bg-zinc-800 shadow-2xl transition-all"
              >
                {isAr ? 'جرب S3Ts Pro 3.0' : 'Experience S3Ts Pro 3.0'}
              </button>
          </div>
        </div>
      </section>

      {/* Feature Strip */}
      <section className="py-24 bg-white border-b border-gray-50">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { icon: Layout, label: isAr ? 'شبكة ديناميكية' : 'Dynamic Grid', desc: isAr ? 'محاذاة البكسل' : 'Pixel alignment.' },
                { icon: Globe, label: isAr ? 'جاهز للعالمية' : 'Global Ready', desc: isAr ? 'معايير عالمية' : 'Universal standards.' },
                { icon: Eye, label: isAr ? 'تدفق بصري' : 'Visual Flow', desc: isAr ? 'تتبع العين' : 'Eye-tracking opt.' },
                { icon: Zap, label: isAr ? 'مدعوم بالذكاء الاصطناعي' : 'AI Powered', desc: isAr ? 'نتائج فورية' : 'Instant results.' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-blue-600 mb-6 border border-gray-100">
                        <item.icon size={20} />
                    </div>
                    <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-2 ${textFont}`}>{item.label}</h4>
                    <p className={`text-[10px] text-gray-400 font-light ${textFont}`}>{item.desc}</p>
                </div>
              ))}
          </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-16 bg-black flex flex-col items-center">
         <FileText size={20} className="text-blue-600 mb-6 opacity-40" />
         <p className="text-[10px] text-gray-500 uppercase tracking-[0.5em] font-medium">S3Ts Pro 3.0 • Neural CV Application</p>
         <div className="mt-6 flex gap-8">
             <span className="text-[8px] text-gray-700 uppercase tracking-widest">{isAr ? 'أداة مدمجة v4.2' : 'Built-in Utility v4.2'}</span>
             <span className="text-[8px] text-gray-700 uppercase tracking-widest">{isAr ? 'تخزين خاص مشفر' : 'Encrypted Private Storage'}</span>
         </div>
      </footer>
    </div>
  );
};

export default CVMakerPage;