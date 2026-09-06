
import React from 'react';
import { ArrowLeft, ShieldCheck, Zap, Globe, Wind, Users } from 'lucide-react';
import { Language } from '../types';

interface AboutPageProps {
  onNavigate: (view: 'home') => void;
  language?: Language;
  translations?: any;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, language = 'en', translations }) => {
  const t = translations || {};
  
  const displayFont = language === 'ar' ? 'font-amiri font-bold' : 'font-display font-medium';
  const textFont = language === 'ar' ? 'font-tajawal' : 'font-sans font-light';

  return (
    <div className={`pt-4 pb-24 bg-white min-h-screen animate-fade-in px-6 ${language === 'ar' ? 'text-right' : 'text-center'} overflow-x-hidden`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <div className={`flex ${language === 'ar' ? 'justify-end' : 'justify-start'} mb-8 md:mb-12`}>
            <button 
                onClick={() => onNavigate('home')}
                className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors ${textFont} ${language === 'ar' ? 'flex-row-reverse' : ''}`}
            >
                <ArrowLeft size={16} className={language === 'ar' ? 'rotate-180' : ''} /> {t.about_back}
            </button>
        </div>

        {/* Brand Icon */}
        <div className="mx-auto mb-8 flex justify-center">
            <img 
                src="https://raw.githubusercontent.com/elhabibullah/mon-stockage-media/refs/heads/main/Logo-sumamah-S-TRANSPARENT-bg.png" 
                alt="Sumāmah Logo" 
                className="h-16 md:h-20 w-auto"
            />
        </div>
        
        <h1 className={`text-2xl md:text-4xl mb-6 text-gray-900 text-center ${displayFont}`}>{t.about_title}</h1>
        <p className={`text-[10px] uppercase tracking-[0.2em] mb-12 text-center text-gray-500 ${textFont}`}>{t.about_subtitle}</p>

        <div className={`space-y-12 text-sm text-gray-600 leading-loose tracking-wide ${textFont}`}>
            <div className="text-center max-w-2xl mx-auto">
                <h2 className={`text-lg md:text-xl mb-4 text-black ${displayFont}`}>{t.about_heading1}</h2>
                <p className="text-base md:text-lg text-gray-800 font-light leading-relaxed">
                    {t.about_p1}
                </p>
            </div>
            
            {/* 3 Zeros Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-gray-100">
                <div className="flex flex-col items-center text-center p-6">
                    <Zap className="text-yellow-500 mb-4" size={32} />
                    <h3 className={`text-xl mb-2 text-black ${displayFont}`}>{t.about_zero1}</h3>
                    <p className="text-xs text-gray-500">{t.about_zero1_desc}</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-[40px]">
                    <Wind className="text-blue-400 mb-4" size={32} />
                    <h3 className={`text-xl mb-2 text-black ${displayFont}`}>{t.about_zero2}</h3>
                    <p className="text-xs text-gray-500">{t.about_zero2_desc}</p>
                </div>
                <div className="flex flex-col items-center text-center p-6">
                    <Users className="text-emerald-500 mb-4" size={32} />
                    <h3 className={`text-xl mb-2 text-black ${displayFont}`}>{t.about_zero3}</h3>
                    <p className="text-xs text-gray-500">{t.about_zero3_desc}</p>
                </div>
            </div>

            {/* Vision Section */}
            <div className="py-12 text-center max-w-2xl mx-auto">
                <div className="mt-8 text-center text-gray-500">
                    <p className="mb-6">{t.about_vision_p2}</p>
                    <p className="font-medium text-gray-900 uppercase tracking-widest">{t.about_vision_strong}</p>
                    <p className="mt-6">{t.about_vision_end}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
