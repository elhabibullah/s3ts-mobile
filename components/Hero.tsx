import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../constants';

interface HeroProps {
    onNavigate: (view: 'home' | 'store') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slider (only if multiple slides, otherwise keep static)
  useEffect(() => {
    if (HERO_SLIDES.length > 1) {
        const timer = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 6000);
        return () => clearInterval(timer);
    }
  }, []);

  const isVideo = (url: string) => url.endsWith('.mp4');

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center pt-12 md:pt-16 pb-0 bg-white">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`w-full flex flex-col items-center justify-start transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 hidden'
          }`}
        >
          
          {/* 1. Phone Image - Centered and Dominant */}
          <div className="relative z-20 w-[90%] max-w-[500px] md:w-[750px] flex-shrink-0 mb-0">
             <img 
                src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts-transparent-grey.png" 
                alt="S3Ts Pro 3.0"
                className="w-full h-auto drop-shadow-2xl object-contain"
              />
          </div>

          {/* 2. Bubble Container (Video Background + Text Foreground) */}
          {/* MOVED HIGHER: Changed mt-1 to -mt-10 md:-mt-20 to pull it up */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center -mt-10 md:-mt-20 mb-[-80px] md:mb-[-250px]">
              
              {/* The Bubble (Video) */}
              <div className="relative w-[250%] md:w-[2200px] flex items-center justify-center">
                 {isVideo(slide.image) ? (
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-auto object-contain brightness-110 saturate-110"
                    >
                        <source src={slide.image} type="video/mp4" />
                    </video>
                 ) : null}

                 {/* Text - Centered inside bubble */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center pt-24 md:pt-48">
                    <h2 className="text-4xl md:text-8xl font-display font-medium tracking-wide mb-8 text-black drop-shadow-sm text-center">
                      {slide.title}
                    </h2>
                    <p className="hidden md:block text-xl font-light tracking-wide text-gray-800 mb-10 max-w-2xl mx-auto text-center">
                      {slide.subtitle}
                    </p>
                    <div className="flex justify-center mt-4">
                        <button 
                            onClick={() => onNavigate('store')}
                            className="bg-black text-white px-10 py-4 md:px-14 md:py-6 text-xs md:text-sm font-bold tracking-[0.25em] uppercase hover:bg-zinc-800 transition-all duration-300 shadow-2xl relative z-30"
                        >
                            {slide.cta}
                        </button>
                    </div>
                 </div>
              </div>

          </div>

        </div>
      ))}
    </div>
  );
};

export default Hero;