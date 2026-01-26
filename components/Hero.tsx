
import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../constants';
import { Language } from '../types';

interface HeroProps {
    onNavigate: (view: 'home' | 'store') => void;
    language: Language;
    translations: any;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, language, translations }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (HERO_SLIDES.length > 1) {
        const timer = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 6000);
        return () => clearInterval(timer);
    }
  }, []);

  const isVideo = (url: string) => url.endsWith('.mp4');
  
  const displayFont = language === 'ar' ? 'font-amiri font-bold' : 'font-display font-medium';

  return (
    <div className="relative w-full bg-white flex flex-col items-center pt-8 md:pt-16 overflow-visible" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`w-full flex flex-col items-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 hidden'
          }`}
        >
          {/* Header Text */}
          <div className="text-center px-6 mb-12 relative z-20">
            <h2 className={`text-4xl md:text-7xl ${displayFont} tracking-tight mb-4 text-black`}>
              {translations.hero_title}
            </h2>
          </div>

          {/* Phone Render */}
          <div className="w-[85%] max-w-[450px] md:max-w-[550px] relative z-20 animate-float">
             <img 
                src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_grey_rectoverso-transparent.png" 
                alt="S3Ts Pro 3.0"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
          </div>

          {/* Liquid Metaball */}
          <div className="w-full max-w-[1400px] h-[300px] md:h-[500px] relative z-10 flex flex-col items-center px-4 overflow-visible">
             {isVideo(slide.image) ? (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none">
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-auto object-contain opacity-100 brightness-110 saturate-105 scale-[1.8] md:scale-[3.2] transform translate-y-[20%] md:translate-y-[25%]"
                    >
                        <source src={slide.image} type="video/mp4" />
                    </video>
                </div>
             ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
