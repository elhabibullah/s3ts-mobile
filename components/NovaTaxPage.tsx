
import React from 'react';
import { ArrowLeft, Calculator, ShieldCheck, BarChart3, Globe, Zap, Bitcoin, Search, TrendingUp, Languages, User, ChevronRight } from 'lucide-react';
import { Language, AppView } from '../types';

interface NovaTaxPageProps {
  onNavigate: (view: AppView) => void;
  language?: Language;
  onToggleLanguage: () => void;
}

const NovaTaxPage: React.FC<NovaTaxPageProps> = ({ onNavigate, language = 'en', onToggleLanguage }) => {
  const isAr = language === 'ar';
  const displayFont = isAr ? 'font-amiri font-bold' : 'font-display font-medium';
  const textFont = isAr ? 'font-tajawal' : 'font-sans';

  const sections = [
    {
      icon: <Globe size={32} className="text-blue-400" />,
      title: isAr ? 'ذكاء عالمي، امتثال محلي' : 'Global Intelligence, Local Compliance',
      content: [
        isAr 
          ? 'يكتشف نوفاتاكس AI تلقائيًا موقع المستخدم ويطبق القواعد الضريبية الصحيحة، ولوائح ضريبة القيمة المضافة، وتنسيقات التقارير، ومتطلبات الامتثال.'
          : 'NovaTax AI automatically detects the user’s location and applies the correct tax rules, VAT regulations, reporting formats, and compliance requirements.',
        isAr
          ? 'سواء كان المستخدم يعمل في أوروبا أو الشرق الأوسط أو آسيا أو أفريقيا أو الأمريكتين، فإن النظام يتكيف ديناميكيًا مع القوانين المحلية ومتطلبات تقديم التقارير.'
          : 'Whether the user operates in Europe, the Middle East, Asia, Africa, or the Americas, the system dynamically adjusts to local laws and filing requirements.',
        isAr
          ? 'يضمن ذلك بقاء المستخدمين ممتثلين للوائحهم الوطنية مع تبسيط العمليات المالية المعقدة.'
          : 'This ensures that users remain compliant with their national regulations while simplifying complex financial processes.'
      ]
    },
    {
      icon: <Zap size={32} className="text-blue-400" />,
      title: isAr ? 'إدارة مالية مؤتمتة بالكامل' : 'Fully Automated Financial Management',
      content: [
        isAr
          ? 'يتصل نوفاتاكس AI بمصادر مالية متعددة لإدارة المعاملات في الوقت الفعلي:'
          : 'NovaTax AI connects with multiple financial sources to manage transactions in real time:',
        {
          type: 'list',
          items: isAr 
            ? ['أنظمة نقاط البيع (POS)', 'الحسابات البنكية', 'أنظمة الدفع اللاسلكية و NFC', 'محافظ العملات المشفرة', 'رفع الفواتير يدويًا']
            : ['POS systems', 'Bank accounts', 'NFC and wireless payment systems', 'Crypto wallets', 'Manual invoice uploads']
        },
        isAr
          ? 'يقوم الذكاء الاصطناعي تلقائيًا بتصنيف المعاملات، وتطبيق القواعد الضريبية الصحيحة، وحساب الالتزامات مثل ضريبة الدخل، أو ضريبة القيمة المضافة، أو المساهمات الاجتماعية، أو الرسوم الأخرى المعمول بها.'
          : 'The AI automatically categorizes transactions, applies the correct tax rules, and calculates obligations such as income tax, VAT, social contributions, or other applicable duties.'
      ]
    },
    {
      icon: <Bitcoin size={32} className="text-blue-400" />,
      title: isAr ? 'تكامل محاسبة العملات المشفرة' : 'Crypto Accounting Integration',
      content: [
        isAr
          ? 'مع تزايد شيوع الأصول الرقمية، يدمج نوفاتاكس AI تتبع العملات المشفرة والتقارير الضريبية.'
          : 'As digital assets become increasingly common, NovaTax AI integrates cryptocurrency tracking and tax reporting.',
        isAr
          ? 'تتزامن المنصة مع شبكات البلوكشين والمحافظ، وتحسب الأرباح والخسائر، وتحول قيم العملات المشفرة إلى العملة المحلية لتقديم تقارير ضريبية دقيقة.'
          : 'The platform synchronizes with blockchain networks and wallets, calculates gains and losses, and converts crypto values into local fiat currency for accurate tax reporting.'
      ]
    },
    {
      icon: <Search size={32} className="text-blue-400" />,
      title: isAr ? 'التدقيق المالي الذكي' : 'Intelligent Financial Auditing',
      content: [
        isAr
          ? 'يحلل نوفاتاكس AI البيانات المالية باستمرار لاكتشاف الشذوذ ومخاطر الامتثال وأخطاء التقارير المحتملة.'
          : 'NovaTax AI continuously analyzes financial data to detect anomalies, compliance risks, and potential reporting errors.',
        isAr
          ? 'يقوم الذكاء الاصطناعي بعمليات تدقيق مؤتمتة وينشئ تنبيهات قابلة للتنفيذ، مما يسمح للمستخدمين بتصحيح المشكلات قبل تقديم التقارير المالية.'
          : 'The AI performs automated audits and generates actionable alerts, allowing users to correct issues before submitting financial reports.'
      ]
    },
    {
      icon: <TrendingUp size={32} className="text-blue-400" />,
      title: isAr ? 'التخطيط والرؤى المالية' : 'Financial Planning and Insights',
      content: [
        isAr
          ? 'بعيدًا عن الامتثال، يقدم نوفاتاكس AI إرشادات مالية ذكية.'
          : 'Beyond compliance, NovaTax AI provides intelligent financial guidance.',
        isAr
          ? 'من خلال تحليل أنماط الدخل وسلوك الإنفاق والالتزامات المالية، يقدم النظام توصيات لتحسين الاستقرار المالي وتحسين الضرائب والتخطيط للاستثمارات المستقبلية.'
          : 'By analyzing income patterns, spending behavior, and financial obligations, the system delivers recommendations to improve financial stability, optimize taxes, and plan future investments.'
      ]
    },
    {
      icon: <Languages size={32} className="text-blue-400" />,
      title: isAr ? 'مصمم للاقتصاد العالمي' : 'Designed for a Global Economy',
      content: [
        isAr
          ? 'يدعم نوفاتاكس AI لغات وعملات متعددة، مما يجعله متاحًا للمستخدمين في جميع أنحاء العالم.'
          : 'NovaTax AI supports multiple languages and currencies, making it accessible to users around the world.',
        isAr
          ? 'يتم إنشاء التقارير والتنبيهات والرؤى تلقائيًا بلغة المستخدم المفضلة، مما يضمن الوضوح وسهولة الاستخدام بغض النظر عن الموقع.'
          : 'Reports, alerts, and insights are automatically generated in the user’s preferred language, ensuring clarity and usability regardless of location.'
      ]
    },
    {
      icon: <Calculator size={32} className="text-blue-400" />,
      title: isAr ? 'جيل جديد من المحاسبة' : 'A New Generation of Accounting',
      content: [
        isAr
          ? 'يمثل نوفاتاكس AI تحولاً من المحاسبة التقليدية إلى الاستقلال المالي المدفوع بالذكاء الاصطناعي.'
          : 'NovaTax AI represents a shift from traditional accounting to AI-driven financial autonomy.',
        isAr
          ? 'من خلال الجمع بين الاستخبارات الضريبية العالمية والتدقيق المؤتمت والتحليل المالي في الوقت الفعلي، توفر المنصة حلاً قويًا للإدارة المالية الحديثة.'
          : 'By combining global tax intelligence, automated auditing, and real-time financial analysis, the platform provides a powerful solution for modern financial management.'
      ]
    }
  ];

  return (
    <div className={`bg-zinc-950 text-white ${textFont} ${isAr ? 'text-right' : 'text-left'} selection:bg-blue-400 selection:text-black overflow-x-hidden`} dir={isAr ? 'rtl' : 'ltr'}>
      {/* Premium Standalone Navbar */}
      <nav className="h-20 border-b border-white/5 flex items-center px-6 md:px-12 bg-black/95 backdrop-blur-md sticky top-0 z-50">
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center text-gray-500 hover:text-white transition-all group"
          aria-label="Back"
        >
            <div className="p-2.5 rounded-full border border-gray-800 group-hover:border-white transition-colors bg-zinc-900/50">
              <ArrowLeft size={16} className={isAr ? 'rotate-180' : ''} />
            </div>
        </button>
        <div className={`flex-1 flex justify-center text-xl tracking-widest text-blue-400 ${displayFont}`}>AI NovaTax</div>
        <div className="hidden md:flex items-center gap-6">
           <button 
             onClick={onToggleLanguage}
             className="flex items-center gap-2 text-gray-400 hover:text-white transition-all group"
             title={isAr ? 'English' : 'العربية'}
           >
             <Globe size={18} strokeWidth={1.5} />
             <span className="text-[10px] font-bold tracking-widest uppercase">
               {isAr ? 'EN' : 'AR'}
             </span>
           </button>
           <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
             <User size={18} className="text-gray-400" />
           </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] pt-0 pb-12 md:pb-20 flex flex-col items-center justify-start text-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/20"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
              <div className="w-72 h-72 md:w-[500px] md:h-[500px] mx-auto -mt-8 md:-mt-12 mb-0 md:mb-2 flex items-center justify-center animate-float">
                  <img 
                    src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/NovaTax__logo-invisible-background.png" 
                    alt="NovaTax Logo" 
                    className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    referrerPolicy="no-referrer"
                  />
              </div>
              
              <h1 className={`text-4xl md:text-[80px] mb-6 md:mb-8 leading-[1.1] ${displayFont}`}>
                {isAr ? 'نوفاتاكس AI' : 'NovaTax AI'} <br/> 
                <span className="text-blue-400 text-2xl md:text-5xl block mt-2 md:mt-4">
                  {isAr ? 'المحاسب العالمي المستقل بالذكاء الاصطناعي' : 'The Autonomous Global AI Accountant'}
                </span>
              </h1>
              
              <div className="text-gray-400 text-base md:text-xl font-light max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed space-y-4 md:space-y-6">
                <p>
                  {isAr 
                    ? 'نوفاتاكس AI هي منصة متقدمة للذكاء الاصطناعي مصممة لأتمتة المحاسبة والضرائب والامتثال المالي للأفراد والشركات في جميع أنحاء العالم.'
                    : 'NovaTax AI is an advanced artificial intelligence platform designed to automate accounting, taxation, and financial compliance for individuals and businesses worldwide.'}
                </p>
                <p>
                  {isAr
                    ? 'تم تصميم نوفاتاكس AI للتخلص من تعقيد الأنظمة المحاسبية التقليدية، وهي تتكيف تلقائيًا مع بلد المستخدم ولغته وعملته ووضعه المالي. يدمج النظام اللوائح الضريبية العالمية، ومحاسبة العملات المشفرة، والتحليل المالي في نظام ذكي واحد.'
                    : 'Built to eliminate the complexity of traditional accounting systems, NovaTax AI automatically adapts to the user’s country, language, currency, and financial situation. The platform integrates global tax regulations, crypto accounting, and financial analysis into one intelligent system.'}
                </p>
                <p>
                  {isAr
                    ? 'تعمل نوفاتاكس AI كمحاسب رقمي مؤتمت بالكامل، قادر على حساب الضرائب، واكتشاف الشذوذ المالي، وإنشاء التقارير، وتقديم رؤى مالية استراتيجية دون الحاجة إلى مسك الدفاتر يدويًا.'
                    : 'NovaTax AI acts as a fully automated digital accountant, capable of calculating taxes, detecting financial anomalies, generating reports, and providing strategic financial insights without the need for manual bookkeeping.'}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-blue-500 text-black px-12 py-5 rounded-full font-bold uppercase text-xs tracking-[0.3em] hover:bg-blue-400 transition-all shadow-xl active:scale-95">
                  {isAr ? 'لوحة البيانات' : 'Access Dashboard'}
                </button>
                <button className="text-white border border-white/20 px-12 py-5 rounded-full font-bold uppercase text-xs tracking-[0.3em] hover:bg-white/10 transition-all">
                  {isAr ? 'الامتثال العالمي' : 'Global Compliance'}
                </button>
              </div>
          </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-[1200px] mx-auto space-y-16 md:space-y-24">
        {sections.map((section, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row gap-8 md:gap-12 items-start ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/3">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4 md:mb-6">
                {section.icon}
              </div>
              <h2 className={`text-2xl md:text-4xl mb-4 md:mb-6 ${displayFont}`}>{section.title}</h2>
            </div>
            <div className="md:w-2/3 space-y-4 md:space-y-6 text-gray-400 text-base md:text-lg font-light leading-relaxed">
              {section.content.map((item, i) => (
                typeof item === 'string' ? (
                  <p key={i}>{item}</p>
                ) : (
                  <ul key={i} className="space-y-3 mt-4">
                    {item.items.map((listItem, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                )
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Final Tagline Section */}
      <section className="py-20 md:py-32 bg-black flex flex-col items-center text-center px-6 border-t border-white/5">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-500/10 flex items-center justify-center mb-8 md:mb-12">
          <Zap size={32} className="text-blue-400 animate-pulse" />
        </div>
        <h2 className={`text-2xl md:text-5xl mb-8 md:mb-12 max-w-4xl leading-tight ${displayFont}`}>
          {isAr 
            ? 'نوفاتاكس AI — محاسبة ذكية لعالم متصل.'
            : 'NovaTax AI — Intelligent Accounting for a Connected World.'}
        </h2>
        <button className="bg-white text-black px-12 py-5 rounded-full font-bold uppercase text-xs tracking-[0.3em] hover:bg-blue-400 transition-all flex items-center gap-2">
          {isAr ? 'ابدأ رحلتك المالية' : 'Start Your Financial Journey'} <ChevronRight size={16} />
        </button>
      </section>
    </div>
  );
};

export default NovaTaxPage;
