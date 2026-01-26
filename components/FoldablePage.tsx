
import React from 'react';
import { ArrowLeft, Layout, Globe, Keyboard, Zap, Shield } from 'lucide-react';
import { Language, AppView } from '../types';

interface FoldablePageProps {
  onNavigate: (view: AppView) => void;
  language?: Language;
  translations: any;
}

const FoldablePage: React.FC<FoldablePageProps> = ({ onNavigate, language = 'en', translations: t }) => {
  const isAr = language === 'ar';
  const displayFont = isAr ? 'font-amiri font-bold' : 'font-display font-medium';
  const textFont = isAr ? 'font-tajawal' : 'font-sans';

  return (
    <div className={`min-h-screen bg-white text-black ${textFont} ${isAr ? 'text-right' : 'text-left'} selection:bg-teal-500 selection:text-white`} dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* Back Button */}
      <div className={`fixed top-6 ${isAr ? 'right-6' : 'left-6'} z-50`}>
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md border border-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-900 shadow-sm hover:shadow-md hover:bg-white transition-all active:scale-95 group"
          >
            <ArrowLeft size={14} className={`${isAr ? 'rotate-180' : ''} group-hover:-translate-x-1 transition-transform`} />
            {t.about_back}
          </button>
      </div>

      <section className="relative pt-24 pb-12 w-full flex flex-col items-center justify-center overflow-hidden bg-white">
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto reveal active">
              <h1 className={`text-5xl md:text-[80px] leading-none mb-12 tracking-tight text-black ${displayFont}`}>{t.foldable_title}</h1>
              <div className="w-full max-w-[750px] mx-auto flex justify-center mb-16">
                  <img 
                    src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Sumamah-F_folder.jpg" 
                    alt="Sumāmah F" 
                    className="w-full h-auto object-contain drop-shadow-2xl rounded-[40px] shadow-2xl transition-transform duration-700 hover:scale-105"
                  />
              </div>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-10">
                    {t.foldable_intro}
                </p>
              </div>
          </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-gray-50 reveal">
          <div className="max-w-[1440px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                  {/* Feature 1 */}
                  <div className="flex gap-6 items-start">
                    <div className="p-4 bg-white rounded-3xl shadow-sm text-teal-600">
                      <Keyboard size={32} />
                    </div>
                    <div>
                      <h3 className={`text-2xl mb-4 ${displayFont}`}>{t.foldable_f1_t}</h3>
                      <p className="text-gray-500 leading-relaxed font-light">{t.foldable_f1_d}</p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-6 items-start">
                    <div className="p-4 bg-white rounded-3xl shadow-sm text-teal-600">
                      <Zap size={32} />
                    </div>
                    <div>
                      <h3 className={`text-2xl mb-4 ${displayFont}`}>{t.foldable_f2_t}</h3>
                      <p className="text-gray-500 leading-relaxed font-light">{t.foldable_f2_d}</p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-6 items-start">
                    <div className="p-4 bg-white rounded-3xl shadow-sm text-teal-600">
                      <Globe size={32} />
                    </div>
                    <div>
                      <h3 className={`text-2xl mb-4 ${displayFont}`}>{t.foldable_f3_t}</h3>
                      <p className="text-gray-500 leading-relaxed font-light">{t.foldable_f3_d}</p>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex gap-6 items-start">
                    <div className="p-4 bg-white rounded-3xl shadow-sm text-teal-600">
                      <Shield size={32} />
                    </div>
                    <div>
                      <h3 className={`text-2xl mb-4 ${displayFont}`}>{t.foldable_f4_t}</h3>
                      <p className="text-gray-500 leading-relaxed font-light">{t.foldable_f4_d}</p>
                    </div>
                  </div>
              </div>
          </div>
      </section>

      <div className="py-24 text-center bg-white">
          <button 
             onClick={() => onNavigate('store')}
             className="px-16 py-6 bg-black text-white rounded-full font-bold uppercase text-xs tracking-[0.4em] hover:bg-zinc-800 transition-all shadow-xl"
          >
              Configure {t.foldable_title}
          </button>
      </div>
    </div>
  );
};

export default FoldablePage;
