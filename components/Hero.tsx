import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../constants';

interface HeroProps {
    onNavigate: (view: 'home' | 'store') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[75vh] overflow-hidden bg-black">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear transform scale-105"
            style={{ 
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? 'scale(1.0)' : 'scale(1.05)' 
            }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-[1440px] mx-auto w-full px-6">
              <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-wide mb-6 ${slide.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {slide.title}
                </h2>
                <p className={`text-base md:text-lg mb-10 font-light tracking-wide ${slide.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                  {slide.subtitle}
                </p>
                <div className="flex justify-center">
                    <button 
                        onClick={() => onNavigate('store')}
                        className={`
                            group flex items-center gap-3 px-10 py-4 font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 border
                            ${slide.theme === 'dark' 
                                ? 'border-white text-white hover:bg-white hover:text-black' 
                                : 'border-black text-black hover:bg-black hover:text-white'}
                        `}>
                        {slide.cta}
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 ${
              index === currentSlide ? 'w-8 bg-white h-[2px]' : 'w-2 bg-white/50 h-[2px] hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;