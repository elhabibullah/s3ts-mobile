import React from 'react';
import { ArrowLeft, FileText, User, Layout, Eye, Download, Sparkles, ShieldCheck, Cpu, Globe, Zap } from 'lucide-react';
import { Language, AppView } from '../types';

interface CVMakerPageProps {
  onNavigate: (view: AppView) => void;
  language?: Language;
  onToggleLanguage: () => void;
}

const CVMakerPage: React.FC<CVMakerPageProps> = ({ onNavigate, language = 'en', onToggleLanguage }) => {
  const isAr = language === 'ar';
  const displayFont = isAr ? 'font-amiri font-bold' : 'font-display font-light';
  const textFont = isAr ? 'font-tajawal' : 'font-sans';

  return (
    <div className={`bg-white text-black ${textFont} ${isAr ? 'text-right' : 'text-left'} selection:bg-blue-600 selection:text-white overflow-x-hidden`} dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* Navbar */}
      <nav className="h-16 md:h-20 border-b border-gray-100 flex items-center px-6 md:px-12 bg-black sticky top-0 z-50">
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center text-gray-400 hover:text-white transition-all group"
          aria-label="Back"
        >
            <div className="p-2 rounded-full border border-white/20 group-hover:border-white transition-colors bg-white/5">
              <ArrowLeft size={14} className={isAr ? 'rotate-180' : ''} />
            </div>
        </button>
        <div className={`flex-1 flex justify-center text-[10px] tracking-[0.4em] uppercase text-blue-400 font-bold`}>AI Pro CV Master</div>
        <div className="hidden md:flex items-center gap-6">
           <button 
             onClick={onToggleLanguage}
             className="flex items-center gap-2 text-gray-400 hover:text-white transition-all group"
             title={isAr ? 'English' : 'العربية'}
           >
             <Globe size={16} strokeWidth={1.5} />
             <span className="text-[10px] font-bold tracking-widest uppercase">
               {isAr ? 'EN' : 'AR'}
             </span>
           </button>
           <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
             <User size={14} className="text-gray-400" />
           </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="bg-black pt-12 md:pt-16 pb-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto -mt-8 md:-mt-12 mb-4 flex items-center justify-center animate-float">
                  <img 
                    src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/CVMsaster-logo-transparent-bg.png" 
                    alt="CV Master Logo" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
              </div>
              <h1 className={`text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-white mb-6 ${displayFont}`}>
                AI Pro CV Master
              </h1>
              <h2 className={`text-2xl md:text-4xl text-blue-400 mb-8 font-light tracking-tight`}>
                Build a Resume That Truly Stands Out
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Creating a professional resume should not be complicated or boring.
              </p>
          </div>
      </section>

      {/* Main Feature Showcase (Video) */}
      <section className="bg-black flex items-center justify-center overflow-hidden pb-24">
          <div className="w-full max-w-[1440px] px-4 md:px-12">
              <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl border border-white/5 bg-zinc-950">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-contain"
                  >
                      <source src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Video_Happy_man-AI-CV.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              </div>
          </div>
      </section>

      {/* Detailed Content */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          <div className="mb-24">
              <p className="text-xl md:text-2xl leading-relaxed mb-8 font-light">
                AI Pro CV Master helps you design modern, powerful, and fully customizable CVs that reflect your real value and professionalism.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                With our platform, you can create visually impressive resumes using beautifully designed templates, intelligent tools, and complete editing freedom.
              </p>
          </div>

          <div className="space-y-32">
            {/* Professional Templates */}
            <div className="group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Layout size={24} />
                </div>
                <h3 className={`text-3xl md:text-4xl ${displayFont}`}>Professional Templates That Make an Impact</h3>
              </div>
              <p className="text-lg text-gray-600 mb-10 font-light">Choose from a collection of modern and elegant CV templates designed to present your experience clearly and attract attention.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-10 md:p-16 rounded-[40px]">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-blue-600">Each template includes:</h4>
                  <ul className="space-y-4">
                    {['professional layouts', 'structured sections', 'visual elements and icons', 'realistic examples to guide you'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-end">
                  <p className="text-sm text-gray-400 italic leading-relaxed">
                    "Your resume will look polished, balanced, and presentation-ready."
                  </p>
                </div>
              </div>
            </div>

            {/* Fully Customizable */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-white">
                  <Sparkles size={24} />
                </div>
                <h3 className={`text-3xl md:text-4xl ${displayFont}`}>Fully Customizable</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 font-light">Your CV should reflect your personality and career.</p>
              <p className="text-lg text-gray-600 mb-12 font-light">With AI Pro CV Master, you control every detail.</p>
              
              <div className="bg-zinc-900 text-white p-10 md:p-16 rounded-[40px] shadow-2xl">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-blue-400">You can easily customize:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                  {['colors', 'fonts', 'sections', 'layouts', 'backgrounds', 'icons and visual elements'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Zap size={14} className="text-blue-400" />
                      <span className="text-sm font-light tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-12 text-center text-gray-500 font-light">Create a CV that is both professional and unique.</p>
            </div>

            {/* Smart Tools */}
            <div className="border-l-2 border-blue-100 pl-8 md:pl-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                  <Cpu size={24} />
                </div>
                <h3 className={`text-3xl md:text-4xl ${displayFont}`}>Smart Tools for Faster Resume Creation</h3>
              </div>
              <p className="text-lg text-gray-600 mb-12 font-light">Our platform helps you build your CV quickly while maintaining high professional standards.</p>
              
              <div className="space-y-6 mb-12">
                {[
                  'edit every section',
                  'organize your experience clearly',
                  'highlight your skills effectively',
                  'create multiple CV versions for different opportunities'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 bg-white border border-gray-100 rounded-2xl hover:border-blue-200 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    <span className="text-gray-700 font-light">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <ShieldCheck size={16} />
                <span>Everything is saved securely in your personal account.</span>
              </div>
            </div>

            {/* Create Multiple CVs */}
            <div className="bg-blue-600 rounded-[40px] p-12 md:p-20 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="relative z-10">
                <h3 className={`text-3xl md:text-5xl mb-8 ${displayFont}`}>Create Multiple CVs</h3>
                <p className="text-xl opacity-90 mb-6 font-light">Your career evolves, and your resume should too.</p>
                <p className="text-lg opacity-80 mb-10 font-light max-w-2xl mx-auto">
                  With AI Pro CV Master, you can create and manage multiple CV versions, each tailored for different roles, industries, or opportunities.
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">
                  <Globe size={14} /> All your work remains accessible whenever you log in
                </div>
              </div>
            </div>

            {/* Final Section */}
            <div className="text-center pt-20">
              <h3 className={`text-4xl md:text-6xl mb-10 ${displayFont}`}>Simple, Powerful, Professional</h3>
              <p className="text-xl text-gray-500 mb-16 font-light max-w-2xl mx-auto">
                AI Pro CV Master was created to provide a modern and reliable resume creation experience.
              </p>
              
              <div className="space-y-4 text-gray-400 uppercase text-[10px] tracking-[0.4em] font-bold">
                <p>No complicated tools</p>
                <p>No empty templates</p>
                <p>Just beautiful resumes designed to help you succeed</p>
              </div>

              <div className="mt-20">
                <button 
                  onClick={() => onNavigate('store')}
                  className="px-12 py-5 bg-black text-white rounded-full font-bold uppercase text-xs tracking-[0.4em] hover:bg-zinc-800 shadow-2xl transition-all"
                >
                  Start Building Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CVMakerPage;