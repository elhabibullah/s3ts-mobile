
import React from 'react';
import { ArrowLeft, Zap, Shield, Laptop, Sun, Globe, Cpu, Wind } from 'lucide-react';
import { Language, AppView } from '../types';

interface NotebookPageProps {
  onNavigate: (view: AppView) => void;
  language?: Language;
  translations: any;
}

const NotebookPage: React.FC<NotebookPageProps> = ({ onNavigate, language = 'en', translations: t }) => {
  const isAr = language === 'ar';
  const displayFont = isAr ? 'font-amiri font-bold' : 'font-display font-medium';
  const textFont = isAr ? 'font-tajawal' : 'font-sans';

  return (
    <div className={`min-h-screen bg-black text-white ${textFont} ${isAr ? 'text-right' : 'text-left'} selection:bg-blue-400 selection:text-black`} dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* Back Button */}
      <div className={`fixed top-6 ${isAr ? 'right-6' : 'left-6'} z-50`}>
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900/80 backdrop-blur-md border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-xl hover:bg-zinc-800 transition-all active:scale-95 group"
          >
            <ArrowLeft size={14} className={`${isAr ? 'rotate-180' : ''} group-hover:-translate-x-1 transition-transform`} />
            {t.about_back}
          </button>
      </div>

      <section className="relative pt-24 pb-12 w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto reveal active">
              <h1 className={`text-5xl md:text-[80px] leading-none mb-12 tracking-tight text-white drop-shadow-2xl ${displayFont}`}>{t.notebook_title}</h1>
              <div className="w-full max-w-[850px] mx-auto mb-16 overflow-hidden rounded-[30px] shadow-2xl border border-white/10">
                  <img 
                    src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Sumamah-aura_recto-text.jpg" 
                    alt="Sumāmah Aura Hero" 
                    className="w-full h-auto object-contain transition-transform duration-1000 hover:scale-105"
                  />
              </div>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12">
                    {t.notebook_intro}
                </p>
              </div>
          </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="py-24 px-6 md:px-12 bg-zinc-950 reveal">
          <div className="max-w-[1440px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                  {/* Pillar 1 */}
                  <div className="flex gap-6 items-start">
                    <div className="p-4 bg-zinc-900 rounded-3xl shadow-lg text-blue-400 border border-white/5">
                      <Sun size={32} />
                    </div>
                    <div>
                      <h3 className={`text-2xl mb-4 text-white ${displayFont}`}>{t.notebook_f1_t}</h3>
                      <p className="text-gray-500 leading-relaxed font-light">{t.notebook_f1_d}</p>
                    </div>
                  </div>

                  {/* Pillar 2 */}
                  <div className="flex gap-6 items-start">
                    <div className="p-4 bg-zinc-900 rounded-3xl shadow-lg text-blue-400 border border-white/5">
                      <Globe size={32} />
                    </div>
                    <div>
                      <h3 className={`text-2xl mb-4 text-white ${displayFont}`}>{t.notebook_f2_t}</h3>
                      <p className="text-gray-500 leading-relaxed font-light">{t.notebook_f2_d}</p>
                    </div>
                  </div>

                  {/* Pillar 3 */}
                  <div className="flex gap-6 items-start">
                    <div className="p-4 bg-zinc-900 rounded-3xl shadow-lg text-blue-400 border border-white/5">
                      <Wind size={32} />
                    </div>
                    <div>
                      <h3 className={`text-2xl mb-4 text-white ${displayFont}`}>{t.notebook_f3_t}</h3>
                      <p className="text-gray-500 leading-relaxed font-light">{t.notebook_f3_d}</p>
                    </div>
                  </div>

                  {/* Pillar 4 */}
                  <div className="flex gap-6 items-start">
                    <div className="p-4 bg-zinc-900 rounded-3xl shadow-lg text-blue-400 border border-white/5">
                      <Cpu size={32} />
                    </div>
                    <div>
                      <h3 className={`text-2xl mb-4 text-white ${displayFont}`}>{t.notebook_f4_t}</h3>
                      <p className="text-gray-500 leading-relaxed font-light">{t.notebook_f4_d}</p>
                    </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="py-24 bg-white text-black reveal">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="flex-1">
                      <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-6 px-4 py-2 bg-blue-50 rounded-full">
                          <Shield size={12} /> Pure Chrome Aluminum
                      </div>
                      <h2 className={`text-3xl md:text-5xl mb-6 ${displayFont}`}>Never <span className="text-gray-300">Black.</span></h2>
                      <p className="text-lg text-gray-500 font-light leading-relaxed mb-10">
                          {t.notebook_desc}
                      </p>
                  </div>
                  <div className="flex-1 w-full aspect-video bg-zinc-100 rounded-[40px] shadow-2xl flex items-center justify-center p-8 overflow-hidden">
                       <img 
                         src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Sumamah-aura_recto.jpg" 
                         alt="Sumāmah Aura" 
                         className="w-full h-auto object-contain rounded-2xl"
                       />
                  </div>
              </div>
          </div>
      </section>

      <div className="py-24 bg-black text-center border-t border-white/5">
          <button 
             onClick={() => onNavigate('store')}
             className="px-16 py-6 bg-white text-black rounded-full font-bold uppercase text-xs tracking-[0.4em] hover:bg-blue-400 hover:text-white transition-all shadow-2xl"
          >
              Acquire {t.notebook_title}
          </button>
      </div>
    </div>
  );
};

export default NotebookPage;
