import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Globe } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  onNavigate: (view: any) => void;
  language: Language;
  onToggleLanguage: () => void;
  translations: any;
  onOpenChat?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, language, onToggleLanguage, translations, onOpenChat }) => {
  
  const handleLinkClick = (e: React.MouseEvent, linkName: string) => {
    e.preventDefault();
    
    // Check against English or Arabic keys
    if (linkName === 'Investors' || linkName === 'مستثمرون') {
      onNavigate('investors');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (linkName === 'Contact Us' || linkName === 'اتصل بنا') {
      window.location.href = "mailto:elhabibullah@gmail.com?subject=Inquiry%20regarding%20SUMĀMAH";
    } else if (linkName === 'Pro 3.0' || linkName === 'برو 3.0') {
      onNavigate('store');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (linkName === 'About Us' || linkName === 'عن الشركة') {
      onNavigate('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (linkName === 'The Founder' || linkName === 'المؤسس') {
      onNavigate('founder');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (linkName === 'Virtual Assistant' || linkName === 'مساعد افتراضي') {
      onOpenChat?.();
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
        language === 'ar' ? 'مساعد افتراضي' : 'Virtual Assistant', 
        language === 'ar' ? 'مراكز الخدمة' : 'Service Centers', 
        language === 'ar' ? 'اتصل بنا' : 'Contact Us', 
        language === 'ar' ? 'إعادة التدوير' : 'Recycling', 
        language === 'ar' ? 'المصادقة' : 'Authentication'
    ],
    [translations.footer_explore]: [
        language === 'ar' ? 'عن الشركة' : 'About Us', 
        language === 'ar' ? 'المؤسس' : 'The Founder',
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
    <footer className="bg-black text-white pt-24 pb-12 relative z-10" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Brand and Logo Section */}
        <div className="flex flex-col items-center mb-16">
            <img 
                src="https://raw.githubusercontent.com/elhabibullah/mon-stockage-media/refs/heads/main/Logo-sumamah-S-TRANSPARENT-bg.png" 
                alt="Sumāmah Logo" 
                className="h-20 md:h-28 w-auto mb-6 transition-transform hover:scale-110 duration-500"
            />
            <span className="text-2xl md:text-4xl font-orbitron font-extralight text-white tracking-[0.5em] uppercase select-none drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                SUMĀMAH
            </span>
            <p className={`mt-4 text-[10px] tracking-[0.5em] uppercase text-gray-500 font-medium ${fontClass}`}>
                {language === 'ar' ? 'مستقبل تكنولوجيا الهاتف المحمول' : 'The Future of Mobile Technology'}
            </p>
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
          <div className={`flex flex-col items-center md:items-start gap-2 text-[10px] text-gray-600 tracking-widest uppercase ${fontClass}`}>
             <span>SUMĀMAH is a trademark ™ of the Banu Hashim Enterprise Company (copyright) 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;