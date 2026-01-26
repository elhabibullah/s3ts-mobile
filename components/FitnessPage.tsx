import React, { useEffect, useRef } from 'react';
import { ArrowLeft, User, CheckCircle2, Zap, Play } from 'lucide-react';
import { Language, AppView } from '../types';

interface FitnessPageProps {
  onNavigate: (view: AppView) => void;
  language?: Language;
}

const FitnessPage: React.FC<FitnessPageProps> = ({ onNavigate, language = 'en' }) => {
  const isAr = language === 'ar';
  const displayFont = isAr ? 'font-amiri' : 'font-display';
  const textFont = isAr ? 'font-tajawal' : 'font-sans';

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = containerRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 'spinning',
      title: isAr ? 'مدرب الدوران الذكي' : 'AI Spinning Coach',
      desc: isAr 
        ? 'مدربك الشخصي المتاح على مدار الساعة. ركوب الدراجات التفاعلي الذي يتكيف مع مستوى جهدك في الوقت الفعلي.' 
        : 'Your 24/7 personal training revolution. Interactive cycling sessions that adapt to your effort levels in real-time using biometric feedback.',
      video: 'https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Spinny_coach_no_wm.mp4',
    },
    {
      id: 'martial-arts',
      title: isAr ? 'إتقان الفنون القتالية' : 'Master the Form',
      desc: isAr 
        ? 'تعلم تقنيات القتال بدقة متناهية. تتبع حركي متقدم يصحح وضعيتك لضمان الأداء المثالي.' 
        : 'Learn combat techniques with absolute precision. Advanced motion tracking corrects your form to ensure peak performance and safety.',
      video: 'https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Android_Demonstrates_Shadow_Clinch_Form.mp4',
    },
    {
      id: 'yoga',
      title: isAr ? 'يوغا في الفراغ' : 'Yoga in the Void',
      desc: isAr 
        ? 'ابحث عن توازنك الداخلي. جلسات تأمل وتدفق مصممة لصفاء ذهنك وصحة جسدك.' 
        : 'Find your inner balance. Personalized meditation and flow sessions designed for mental clarity and physical flexibility in a distraction-free environment.',
      video: 'https://fit-4rce-x.s3.eu-north-1.amazonaws.com/android-performs-sun-pose-in-void.mp4',
    },
    {
      id: 'nutrition-1',
      title: isAr ? 'تغذية تكيفية ذكية' : 'Intelligent Adaptive Nutrition',
      desc: isAr 
        ? 'يقوم النظام بإنشاء خطط ذكية بناءً على عاداتك الغذائية وملفك الأيضي وأهدافك. قم بإعداد روتينك في دقائق، ثم حافظ على التوازن مع برامج التغذية التكيفية والصيام المتقطع — أو قم بتخصيص خطتك الخاصة بالكامل مع تحكم شامل.' 
        : 'The system creates intelligent plans based on your eating habits, metabolic profile, and goals. Set up your routine in minutes, then maintain balance with adaptive nutrition and intermittent fasting programs — or fully customize your own plan with complete control.',
      image: 'https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Fit-4rce-X_nutrition2.jpg',
    },
    {
      id: 'nutrition-2',
      title: isAr ? 'خطط تغذية مخصصة' : 'Personalized Nutrition Plans',
      desc: isAr 
        ? 'خطط تغذية مخصصة مصممة حولك. ابدأ فوراً مع التغذية المدعومة بالذكاء الاصطناعي، وتتبع السعرات الحرارية، وتحليل مؤشر كتلة الجسم المصمم خصيصاً لجسمك وأسلوب حياتك.' 
        : 'Personalized Nutrition Plans built around you. Get started instantly with AI-driven nutrition, calorie tracking, and BMI analysis tailored to your body and lifestyle.',
      image: 'https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Fit-4rce-X_nutrition_mealplan.jpg',
    }
  ];

  return (
    <div ref={containerRef} className={`min-h-screen bg-white text-zinc-900 ${textFont} ${isAr ? 'text-right' : 'text-left'} selection:bg-purple-100 selection:text-purple-600`} dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* NAVBAR */}
      <nav className="h-16 md:h-20 border-b border-gray-100 flex items-center px-6 md:px-12 bg-black sticky top-0 z-50">
        <button onClick={() => onNavigate('home')} className="p-2 rounded-full border border-white/20 hover:border-white transition-colors bg-white/5">
          <ArrowLeft size={16} className={`text-white ${isAr ? 'rotate-180' : ''}`} />
        </button>
        <div className="flex-1 flex justify-center">
          <img src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Fit-4rce-X_App_logo.jpg" alt="Logo" className="h-10 md:h-12 w-auto object-contain" />
        </div>
        <div className="hidden md:block w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <User size={16} className="text-white/50" />
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-white pt-12 pb-16">
        <div className="text-center px-6 mb-8 reveal">
          <h1 className={`text-3xl md:text-6xl mb-4 tracking-tight ${displayFont} font-light`}>
            <span className="text-[#4c1d95]" style={{ textShadow: '0 0 1px #fff, 0 0 8px #581c87, 0 0 16px rgba(88, 28, 135, 0.3)' }}>
              {isAr ? 'مرحباً بكم في Fit-4rce-X' : 'Welcome to Fit-4rce-X'}
            </span> <br/>
            <span className="text-black block mt-4 font-light">{isAr ? 'عصر جديد من الرياضة واللياقة' : 'A new era of Sport and fitness'}</span>
          </h1>
        </div>

        <div className="w-full h-[400px] md:h-[650px] flex items-center justify-center overflow-hidden bg-white reveal">
          <video autoPlay loop muted playsInline className="w-full h-full object-contain scale-[1.6] md:scale-[2.2] brightness-125 contrast-110">
            <source src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Android_Barbell_Overhead_Press_Loop.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center mt-6 reveal">
          <p className="text-lg md:text-2xl text-zinc-500 font-light leading-relaxed">
            {isAr 
              ? "منصة لياقة وتغذية مبتكرة متكاملة مع مدربي ذكاء اصطناعي، تضم 14 تخصصاً تدريبياً، متاحة على مدار الساعة طوال أيام الأسبوع بـ 8 لغات."
              : "An innovative all-in-one fitness & nutrition platform with AI coaches, featuring 14 training disciplines, available 24/7 in 8 languages."}
          </p>
        </div>
      </section>

      {/* VERTICAL STACKED FEATURES */}
      <section className="space-y-32 md:space-y-56 py-20 bg-white">
        {features.map((feature) => (
          <div key={feature.id} className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
            <div className="reveal mb-12 scale-110 md:scale-125">
              <div className="w-[260px] h-[540px] md:w-[320px] md:h-[680px] bg-black rounded-[2.8rem] border-[10px] border-zinc-900 shadow-2xl overflow-hidden ring-1 ring-black/5">
                {feature.video ? (
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-110">
                    <source src={feature.video} type="video/mp4" />
                  </video>
                ) : (
                  <img src={feature.image} className="w-full h-full object-cover" alt={feature.title} />
                )}
              </div>
            </div>
            <div className="max-w-2xl text-center reveal">
              <h2 className={`text-3xl md:text-5xl mb-6 font-light ${displayFont}`}>{feature.title}</h2>
              <p className="text-zinc-500 text-base md:text-xl font-light leading-relaxed">{feature.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* PLANS SECTION */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className={`text-3xl md:text-5xl mb-6 font-light ${displayFont}`}>{isAr ? 'اختر خطتك' : 'Choose Your Plan'}</h2>
            <div className="inline-flex items-center bg-purple-50 border border-purple-100 px-6 py-2 rounded-full text-purple-600 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
              {isAr ? 'حصري لحاملي هواتف S3Ts' : 'Exclusive for S3Ts phone Holders'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* SILVER */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-zinc-200 shadow-xl reveal">
              <h3 className={`text-2xl mb-4 ${displayFont}`}>Silver Plan</h3>
              <ul className="space-y-4 mb-10">
                {['AI workout generation', '3D exercise models', 'F4X Nutrition Store'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-600"><CheckCircle2 size={18} className="text-green-500" /> {item}</li>
                ))}
              </ul>
              <div className="pt-6 border-t border-zinc-100 text-[10px] text-zinc-400 uppercase tracking-widest leading-relaxed">
                Premium World-Class Personal Trainers Available — additional fees apply
              </div>
            </div>

            {/* PREMIUM */}
            <div className="bg-zinc-950 p-10 rounded-[2.5rem] text-white shadow-2xl reveal">
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-2xl ${displayFont}`}>Premium Plan</h3>
                <Zap size={20} className="text-purple-400" fill="currentColor" />
              </div>
              <ul className="space-y-4 mb-10">
                {['Everything in Silver Plan', 'Advanced AI nutrition & fasting', 'Holographic Cycling & Running', 'Full self-defense library'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-300"><CheckCircle2 size={18} className="text-purple-400" /> {item}</li>
                ))}
              </ul>
              <div className="pt-6 border-t border-zinc-800 text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">
                Premium World-Class Personal Trainers Available — additional fees apply
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section className="py-32 flex flex-col items-center bg-white reveal">
        <h2 className={`text-3xl md:text-5xl mb-12 font-light ${displayFont}`}>{isAr ? 'ابدأ اليوم' : 'Get Started Today'}</h2>
        
        {/* DOWNLOAD APP BUTTON - PURPLE COLOR */}
        <button className="bg-[#4c1d95] text-white px-12 py-5 rounded-2xl flex items-center gap-4 hover:bg-[#5b21b6] transition-all shadow-[0_20px_50px_rgba(76,29,149,0.3)] active:scale-95 group">
          <Play size={20} fill="white" className="text-white" />
          <span className="text-xl font-bold tracking-tight uppercase">{isAr ? 'تحميل التطبيق' : 'Download App'}</span>
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-black flex flex-col items-center border-t border-white/5">
        <img src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Fit-4rce-X_App_logo.jpg" alt="Logo" className="h-20 md:h-32 w-auto mb-8 opacity-70 object-contain" />
        <p className="text-[10px] text-zinc-500 uppercase tracking-[0.5em]">S3Ts Sports & Performance Vision™</p>
      </footer>
    </div>
  );
};

export default FitnessPage;