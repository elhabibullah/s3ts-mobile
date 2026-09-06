
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Language } from '../types';

interface FounderPageProps {
  onNavigate: (view: 'home') => void;
  language?: Language;
  translations?: any;
}

const FounderPage: React.FC<FounderPageProps> = ({ onNavigate, language = 'en', translations }) => {
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

        {/* Founder Title Section */}
        <div className="max-w-2xl mx-auto mt-8 md:mt-12">
            <div className="mb-10 flex justify-center">
                <img 
                    src="https://raw.githubusercontent.com/elhabibullah/mon-stockage-media/refs/heads/main/Habibullah-Forbes.jpg" 
                    alt="Abdelwahid Habibullah Adam Banu Hashim" 
                    className="w-72 md:w-80 h-auto rounded-lg shadow-md border border-gray-100 object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                        // Fallback if the S3 URL is private or incorrect
                        (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/founder/800/1000';
                    }}
                />
            </div>
            <h1 className={`text-2xl md:text-4xl mb-2 text-gray-900 ${displayFont}`}>{t.founder_name}</h1>
            <p className={`text-gray-500 text-[10px] uppercase tracking-[0.3em] mb-12 ${textFont}`}>{t.founder_role}</p>

            <div className={`space-y-8 text-base text-gray-700 leading-relaxed font-light ${textFont}`}>
                <p>
                    {t.founder_bio}
                </p>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-100">
                <p className={`text-[10px] text-gray-400 uppercase tracking-[0.4em] ${textFont}`}>
                    Banu Hashim Enterprise
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FounderPage;
