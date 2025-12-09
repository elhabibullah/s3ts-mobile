import React from 'react';
import { ArrowLeft, HeartHandshake } from 'lucide-react';
import { Language } from '../types';

interface AboutPageProps {
  onNavigate: (view: 'home') => void;
  language?: Language;
  translations?: any;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, language = 'en', translations }) => {
  // Fallback
  const t = translations || {};
  
  const displayFont = language === 'ar' ? 'font-amiri font-bold' : 'font-display font-medium';
  const textFont = language === 'ar' ? 'font-tajawal' : 'font-sans font-light';

  return (
    <div className={`pt-4 pb-24 bg-white min-h-screen animate-fade-in px-6 ${language === 'ar' ? 'text-right' : 'text-center'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto">
        
        {/* Back Button */}
        <div className={`flex ${language === 'ar' ? 'justify-end' : 'justify-start'} mb-8 md:mb-12`}>
            <button 
                onClick={() => onNavigate('home')}
                className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors ${textFont} ${language === 'ar' ? 'flex-row-reverse' : ''}`}
            >
                <ArrowLeft size={16} className={language === 'ar' ? 'rotate-180' : ''} /> {t.about_back}
            </button>
        </div>

        {/* Custom Gold/Blue Medal Icon */}
        <div className="mx-auto mb-8 flex justify-center">
            <svg 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Ribbon (Under) - Blue */}
                <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" className="fill-blue-600 stroke-blue-600" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Main Circle - Black Outline, White Fill */}
                <circle cx="12" cy="8" r="7" className="stroke-black fill-white" strokeWidth="1" />
                {/* Middle Circle - Gold */}
                <circle cx="12" cy="8" r="3.5" className="fill-yellow-500 stroke-none" />
            </svg>
        </div>
        
        <h1 className={`text-3xl md:text-5xl mb-6 text-gray-900 text-center ${displayFont}`}>{t.about_title}</h1>
        <p className={`text-gray-500 text-xs uppercase tracking-[0.2em] mb-12 text-center ${textFont}`}>{t.about_subtitle}</p>

        <div className={`space-y-12 text-sm text-gray-600 leading-loose tracking-wide ${language === 'ar' ? 'text-justify' : 'text-justify md:text-center'} ${textFont}`}>
            <p>
                {t.about_p1}
            </p>
            
            <div className="border-t border-b border-gray-100 py-12 my-12 text-center">
                <h3 className={`text-xl mb-4 text-black ${displayFont}`}>{t.about_founder_role}</h3>
                <p className="text-lg font-light text-gray-800">
                    {t.about_founder_name}
                </p>
                <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">
                    {t.about_founder_title}
                </p>
            </div>

            <div className="bg-gray-50 p-8 md:p-12 border border-gray-100">
                <div className="flex justify-center"><HeartHandshake size={40} className="mb-6 text-red-500" strokeWidth={1} /></div>
                <h3 className={`text-lg mb-6 text-black text-center ${displayFont}`}>{t.about_vision_title}</h3>
                <p className="mb-6">
                    {t.about_vision_p1}
                </p>
                <p className="font-medium text-gray-900 text-center">
                    {t.about_vision_strong}
                </p>
                <p className="mt-4">
                    {t.about_vision_p2}
                </p>
            </div>

            <p>
                {t.about_vision_end}
            </p>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;