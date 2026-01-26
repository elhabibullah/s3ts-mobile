import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, ChevronDown } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  onNavigate: (view: 'home' | 'store' | 'investors' | 'about') => void;
  language: Language;
  onToggleLanguage: () => void;
  translations: any;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, language, onToggleLanguage, translations }) => {
  
  const handleLinkClick = (e: React.MouseEvent, linkName: string) => {
    e.preventDefault();
    
    // Check against English or Arabic keys
    if (linkName === 'Investors' || linkName === 'مستثمرون') {
      onNavigate('investors');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (linkName === 'Contact Us' || linkName === 'اتصل بنا') {
      window.location.href = "mailto:elhabibullah@gmail.com?subject=Inquiry%20regarding%20S3Ts%20Pro%203.0";
    } else if (linkName === 'Pro 3.0' || linkName === 'برو 3.0') {
      onNavigate('store');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (linkName === 'About Us' || linkName === 'عن الشركة') {
      onNavigate('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const footerLinks = {
    [translations.footer_products]: [
        language === 'ar' ? 'برو 3.0' : 'Pro 3.0', 
        language === 'ar' ? 'برو 3.0 شفاف' : 'Pro 3.0 Transparent', 
        language === 'ar' ? 'سماعة هولو' : 'Holo-Headset', 
        language === 'ar' ? 'حافظة شمسية' : 'Solar Case'
    ],
    [translations.footer_support]: [
        language === 'ar' ? 'كونسيرج' : 'Concierge', 
        language === 'ar' ? 'مراكز الخدمة' : 'Service Centers', 
        language === 'ar' ? 'اتصل بنا' : 'Contact Us', 
        language === 'ar' ? 'إعادة التدوير' : 'Recycling', 
        language === 'ar' ? 'المصادقة' : 'Authentication'
    ],
    [translations.footer_explore]: [
        language === 'ar' ? 'عن الشركة' : 'About Us', 
        language === 'ar' ? 'نظام عصبي' : 'Neural OS', 
        language === 'ar' ? 'البيان' : 'Manifesto', 
        language === 'ar' ? 'الاستدامة' : 'Sustainability', 
        language === 'ar' ? 'مستثمرون' : 'Investors', 
        language === 'ar' ? 'صحافة' : 'Press'
    ],
    [translations.footer_legal]: [
        language === 'ar' ? 'الخصوصية' : 'Privacy', 
        language === 'ar' ? 'الشروط' : 'Terms', 
        language === 'ar' ? 'الضمان' : 'Warranty'
    ]
  };

  const fontClass = language === 'ar' ? 'font-tajawal' : 'font-sans';
  const displayFont = language === 'ar' ? 'font-amiri font-bold' : 'font-display font-medium';

  return (
    <footer className="bg-black text-white pt-24 pb-12" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Brand */}
        <div className="mb-16 flex items-center gap-6">
            <img 
                src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_logo_transparent_bg.png" 
                alt="S3Ts Logo" 
                className="h-24 w-auto"
            />
            <span className={`text-xl md:text-2xl ${displayFont} text-white tracking-wide`}>
                S3Ts Pro 3.0
            </span>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-t border-gray-900 pt-16">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className={`text-xs font-bold tracking-widest uppercase mb-8 text-white ${fontClass}`}>{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      onClick={(e) => handleLinkClick(e, link)}
                      className={`text-xs tracking-wide text-gray-500 hover:text-white transition-colors ${fontClass}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-gray-900 pt-12">
          
          <div className="flex gap-6">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" onClick={(e) => e.preventDefault()} className="text-gray-500 hover:text-white transition-colors">
                    <Icon size={18} strokeWidth={1.5} />
                  </a>
              ))}
          </div>

          <div className={`flex items-center gap-2 text-[10px] text-gray-600 tracking-widest uppercase ${fontClass}`}>
             <span>© 2025 S3Ts</span>
             <img 
                src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_logo_transparent_bg.png" 
                alt="Logo" 
                className="h-5 w-auto"
            />
          </div>

          <button 
            onClick={onToggleLanguage}
            className="flex items-center gap-3 text-gray-500 hover:text-white cursor-pointer transition-colors group"
          >
              <div className="flex items-center gap-2">
                {language === 'ar' ? (
                   <span className="text-lg">🇸🇦</span>
                ) : (
                   <span className="text-lg">🇬🇧</span>
                )}
                <span className={`text-xs tracking-wide ${fontClass}`}>{translations.footer_lang}</span>
              </div>
              <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;