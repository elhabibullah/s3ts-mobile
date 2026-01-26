
import React from 'react';
import { ArrowLeft, Calculator, ShieldCheck, BarChart3, Clock, User, ChevronRight, Check } from 'lucide-react';
import { Language, AppView } from '../types';

interface NovaTaxPageProps {
  onNavigate: (view: AppView) => void;
  language?: Language;
}

const NovaTaxPage: React.FC<NovaTaxPageProps> = ({ onNavigate, language = 'en' }) => {
  const isAr = language === 'ar';
  const displayFont = isAr ? 'font-amiri font-bold' : 'font-display font-medium';
  const textFont = isAr ? 'font-tajawal' : 'font-sans';

  return (
    <div className={`min-h-screen bg-zinc-950 text-white ${textFont} ${isAr ? 'text-right' : 'text-left'} selection:bg-blue-400 selection:text-black`} dir={isAr ? 'rtl' : 'ltr'}>
      {/* Premium Standalone Navbar */}
      <nav className="h-20 border-b border-white/5 flex items-center px-6 md:px-12 bg-black/95 backdrop-blur-md sticky top-0 z-50">
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center text-gray-500 hover:text-white transition-all group"
          aria-label="Back"
        >
            <div className="p-2.5 rounded-full border border-gray-800 group-hover:border-white transition-colors bg-zinc-900/50">
              <ArrowLeft size={16} className={isAr ? 'rotate-180' : ''} />
            </div>
        </button>
        <div className={`flex-1 flex justify-center text-xl tracking-widest text-blue-400 ${displayFont}`}>AI NovaTax</div>
        <div className="hidden md:flex items-center gap-6">
           <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
             <User size={18} className="text-gray-400" />
           </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[85vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20 scale-110">
              <source src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Metaball_liquid_wt_bg.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/20"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
              <div className="w-24 h-24 mx-auto mb-12 p-6 rounded-[32px] bg-gradient-to-br from-blue-400 to-blue-600 shadow-[0_20px_60px_rgba(59,130,246,0.3)] flex items-center justify-center animate-float">
                  <Calculator size={48} className="text-black" />
              </div>
              
              <h1 className={`text-5xl md:text-[80px] mb-8 leading-[1.1] ${displayFont}`}>Financial Clarity, <br/> <span className="text-blue-400">Built-in</span>.</h1>
              
              <p className="text-gray-400 text-lg md:text-2xl font-light max-w-3xl mx-auto mb-16 leading-relaxed">
                {isAr 
                  ? 'محاسبة آلية وتنبؤ ضريبي في الوقت الفعلي لرواد الأعمال السعوديين.'
                  : 'Automated accounting, real-time tax forecasting, and ZATCA compliance for Saudi entrepreneurs. Powered by S3Ts Neural Core.'}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-blue-500 text-black px-12 py-5 rounded-full font-bold uppercase text-xs tracking-[0.3em] hover:bg-blue-400 transition-all shadow-xl active:scale-95">
                  {isAr ? 'لوحة البيانات' : 'Access Dashboard'}
                </button>
                <button className="text-white border border-white/20 px-12 py-5 rounded-full font-bold uppercase text-xs tracking-[0.3em] hover:bg-white/10 transition-all">
                  {isAr ? 'الامتثال لهيئة الزكاة' : 'ZATCA Compliance'}
                </button>
              </div>
          </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-16 bg-white text-black rounded-[60px] flex flex-col justify-between group hover:shadow-2xl transition-all duration-700">
              <div>
                  <ShieldCheck size={48} className="text-blue-600 mb-8" />
                  <h3 className={`text-4xl mb-6 ${displayFont}`}>ZATCA Ready</h3>
                  <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                    {isAr ? 'متوافق تماماً مع الأنظمة الضريبية السعودية. الربط المباشر مع بوابة هيئة الزكاة والضريبة والجمارك.' : 'Fully compliant with Saudi tax regulations. Automated e-invoicing and direct secure integration with ZATCA Phase 2.'}
                  </p>
                  <ul className="space-y-4 text-sm text-gray-500">
                    <li className="flex items-center gap-3"><Check size={16} className="text-blue-600" /> Automatic VAT calculation</li>
                    <li className="flex items-center gap-3"><Check size={16} className="text-blue-600" /> Secure digital archiving</li>
                  </ul>
              </div>
          </div>
          
          <div className="p-16 bg-zinc-900 border border-white/5 rounded-[60px] flex flex-col justify-between group hover:border-blue-500/30 transition-all duration-700">
              <div>
                  <BarChart3 size={48} className="text-blue-400 mb-8" />
                  <h3 className={`text-4xl mb-6 ${displayFont}`}>Live P&L</h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-light mb-8">
                    {isAr ? 'شاهد أرباحك وخسائرك في الوقت الفعلي بينما يقوم نظام S3Ts بتصنيف كل معاملة تلقائياً.' : 'See your profit and loss in real-time. The Neural Core categorizes every transaction automatically as it happens over S3Ts Telecom.'}
                  </p>
                  <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex items-center gap-3"><Check size={16} className="text-blue-400" /> Instant financial reports</li>
                    <li className="flex items-center gap-3"><Check size={16} className="text-blue-400" /> AI Spending insights</li>
                  </ul>
              </div>
          </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-40 bg-black flex flex-col items-center text-center px-6 border-t border-white/5">
        <Clock size={48} className="text-blue-400 mb-8 animate-pulse" />
        <h2 className={`text-4xl md:text-6xl mb-12 ${displayFont}`}>{isAr ? 'وفر ساعات من العمل الورقي' : 'Save 10+ hours of <br/> paperwork every week.'}</h2>
        <button className="bg-white text-black px-12 py-5 rounded-full font-bold uppercase text-xs tracking-[0.3em] hover:bg-blue-400 transition-all flex items-center gap-2">
          {isAr ? 'بدء الاستخدام' : 'Launch AI NovaTax Admin'} <ChevronRight size={16} />
        </button>
      </section>

      {/* Footer Branding */}
      <footer className="py-20 bg-black border-t border-white/5 flex flex-col items-center">
         <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 grayscale opacity-30">
           <Calculator size={24} className="text-blue-400" />
         </div>
         <p className="text-[10px] text-gray-700 uppercase tracking-[0.6em]">AI NovaTax Vision™ • Powered by S3Ts</p>
      </footer>
    </div>
  );
};

export default NovaTaxPage;
