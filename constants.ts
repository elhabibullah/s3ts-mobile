import { NavItem, Product } from './types';

export const TRANSLATIONS = {
  en: {
    nav_pro3: 'S3Ts Pro 3.0',
    nav_telecom: 'Telecom',
    nav_holo: 'HOLO-Beam',
    nav_neural: 'Neural OS',
    nav_solar: 'Solar Tech',
    nav_support: 'Support',
    nav_community: 'Community',
    nav_store: 'Store',
    nav_account: 'Account',
    nav_search: 'Search',
    
    hero_title: 'S3Ts Pro 3.0',
    hero_subtitle: 'The Holographic Revolution. Unbreakable. Infinite.',
    hero_cta: 'Pre-Order Now',
    
    intro_revolution: 'The Revolution',
    intro_title_1: 'The Impossible,',
    intro_title_2: 'Is Now Possible.',
    intro_desc: "S3Ts Pro 3.0 represents the pinnacle of post-silicon engineering. By eliminating the chemical battery and integrating the world's first Neural Quantum Processor, we have created a device that is not just smart, but alive.",
    intro_internet: 'Free unlimited global internet connection.',
    
    bio_tag: 'Biometric Security',
    bio_title: 'Neural Recognition',
    bio_desc: 'Advanced 3D facial mapping combined with voice-print analysis creates an impenetrable security layer. Unlock your world with a glance or a whisper.',
    
    energy_tag: 'Infinite Energy',
    energy_title: '0% Lithium. 100% Light.',
    energy_desc: 'The first smartphone powered entirely by light. Our nano-optic solar skin harvests energy from any source—sunlight or indoor lamps—storing it in a non-degradable quantum capacitor. No cables. No charging bricks. Just pure, infinite energy.',
    energy_lifespan: 'Lifespan',
    energy_reserve: 'Reserve',
    
    tech_title: 'High Tech',
    tech_subtitle: 'Engineering Masterpieces',
    tech_core: 'Neural Core A2X',
    tech_core_desc: '48-Core AI processor capable of 100 trillion operations per second.',
    tech_quantum: 'Quantum-Link™',
    tech_quantum_desc: 'Free unlimited global satellite internet. No SIM. No fees.',
    tech_holo: 'HOLO-Beam 3D',
    tech_holo_desc: '180° Projective display engine for glasses-free holographic AR.',
    tech_chat: 'S3Ts Chat',
    tech_chat_desc: 'The future of communication. Holographic. Encrypted. Universal.',
    
    footer_products: 'S3Ts Products',
    footer_support: 'Support',
    footer_explore: 'Explore',
    footer_legal: 'Legal',
    footer_lang: 'Saudi Arabia (EN)',
    
    click_info: 'Click Info',

    // Store Page
    store_crumb: 'Store / Smartphones / S3Ts Pro 3.0',
    store_tagline: 'Titanium Edition • 1TB Quantum Storage',
    store_price: 'SAR 6,375.00',
    store_stock: 'In Stock - Ready for Global Shipping',
    store_finish: 'Finish',
    store_core: 'Neural Core',
    store_core_name: 'A2X Pro (48 Cores)',
    store_included: 'Included',
    store_add: 'Add to Bag',
    store_finance: 'Finance with Tabby',
    store_view_specs: 'View Full Technical Specifications',
    store_warranty_title: 'Lifetime Warranty',
    store_warranty_desc: 'Guaranteed against screen breakage and water damage.',
    store_solar_title: 'Infinite Energy',
    store_solar_desc: 'Solar charging backplate included standard.',
    store_vip_title: 'VIP Concierge',
    store_vip_desc: '24/7 Access to S3Ts Support Network.',

    // Specs Modal
    specs_title: 'Technical Specifications',
    specs_subtitle: 'S3Ts Pro 3.0 / Reference Data',
    spec_cat_build: 'Structure & Build',
    spec_chassis: 'Chassis', spec_chassis_val: 'Aerospace-grade Alpha Titanium Alloy',
    spec_glass: 'Display Glass', spec_glass_val: 'Diamond-Glass 9H+ (Unbreakable)',
    spec_rating: 'Rating', spec_rating_val: 'IP79X (Submersion + Dust Proof)',
    spec_dim: 'Dimensions', spec_dim_val: '161mm x 74mm x 7.2mm',
    spec_weight: 'Weight', spec_weight_val: '191g',
    
    spec_cat_display: 'Display & Visuals',
    spec_holo: 'Holographic Engine', spec_holo_val: 'S3Ts HOLO-Beam 3D (180° Projection)',
    spec_ar: 'AR/VR', spec_ar_val: 'Glasses-free spatial computing',
    spec_bright: 'Brightness', spec_bright_val: 'Auto-boost (Direct Sunlight Readable)',
    
    spec_cat_conn: 'Connectivity & Network',
    spec_sat: 'SIM Config', spec_sat_val: 'Dual Active eSIM (S3Ts Mobile™ + eSIM+)',
    spec_cov: 'Satellite', spec_cov_val: 'Quantum-Link™ (Global Coverage)',
    spec_cost: 'Cost', spec_cost_val: 'Free Unlimited Lifetime Data',
    spec_speed: 'Speed', spec_speed_val: '6G Quantum Standard',
    spec_type: 'Type', spec_type_val: 'Hybrid Mobile-Satellite',

    spec_cat_perf: 'Performance',
    spec_proc: 'Processor', spec_proc_val: 'Neural Core A2X (48 AI Cores)',
    spec_arch: 'Architecture', spec_arch_val: '14nm Quantum Neural Threads',
    spec_cool: 'Cooling', spec_cool_val: 'Aero-Flow X (Micro-ventilation)',

    spec_cat_energy: 'Energy',
    spec_tech: 'Technology', spec_tech_val: '0% Lithium / Nano-optic Solar Cells',
    spec_charge: 'Charging', spec_charge_val: 'Continuous Solar Harvesting (On or Off State) - Always Full',
    spec_res: 'Reserve', spec_res_val: '72h Quantum Capacitor Reserve (Darkness)',

    // About Page
    about_back: 'Back to Home',
    about_title: 'About S3Ts Tech',
    about_subtitle: 'The Future of Ethical Innovation',
    about_p1: 'The S3Ts Pro 3.0 is a product of the collective brilliance and dedication of our world-class engineers, scientists, and designers at S3Ts Tech. Our name, derived from "Sumāmah" (Loftiness), embodies our pursuit of the highest peaks of innovation. As a premium technology corporation rooted in Saudi Arabia, we pride ourselves on pushing the boundaries of what was previously thought impossible.',
    about_founder_role: 'Founder & Inventor',
    about_founder_name: 'Abdelwahid Habibullah Adam Banu Hashim',
    about_founder_title: 'Belgian Inventor, Entrepreneur, and Founder',
    about_vision_title: 'A Vision for Humanity',
    about_vision_p1: 'S3Ts Tech is driven by a mission to propel Saudi Arabia to the zenith of global leadership—not just economically, but humanly. We are building a diverse local workforce that champions human rights and dignity.',
    about_vision_strong: 'This technology stands against exploitation.',
    about_vision_p2: 'Unlike traditional tech giants, our supply chain is strictly ethical. We guarantee zero contribution to child labor or human exploitation, specifically avoiding conflict zones such as the Congo. S3Ts Pro 3.0 is not just a technological marvel; it is a victory for human dignity.',
    about_vision_end: 'From the drawing board to the final titanium chassis, every element of the S3Ts Pro 3.0 has been crafted with one goal in mind: To liberate the user from the constraints of traditional technology. No wires. No borders. No limits.',
  },
  ar: {
    nav_pro3: 'S3Ts Pro 3.0',
    nav_telecom: 'تيليكوم',
    nav_holo: 'شعاع هولو',
    nav_neural: 'نظام عصبي',
    nav_solar: 'تقنية شمسية',
    nav_support: 'الدعم',
    nav_community: 'المجتمع',
    nav_store: 'المتجر',
    nav_account: 'حسابي',
    nav_search: 'بحث',
    
    hero_title: 'S3Ts Pro 3.0',
    hero_subtitle: 'ثورة الهولوغرام. غير قابل للكسر. لا نهائي.',
    hero_cta: 'اطلب مسبقاً الآن',
    
    intro_revolution: 'الثورة',
    intro_title_1: 'المستحيل،',
    intro_title_2: 'أصبح الآن ممكناً.',
    intro_desc: "يمثل S3Ts Pro 3.0 قمة الهندسة لما بعد عصر السيليكون. من خلال القضاء على البطارية الكيميائية ودمج أول معالج كمي عصبي في العالم، قمنا بإنشاء جهاز ليس ذكياً فحسب، بل هو كائن حي.",
    intro_internet: 'اتصال إنترنت عالمي مجاني غير محدود.',
    
    bio_tag: 'أمان بيومتري',
    bio_title: 'التعرف العصبي',
    bio_desc: 'رسم خرائط الوجه ثلاثي الأبعاد المتقدم مع تحليل بصمة الصوت يخلق طبقة أمان لا يمكن اختراقها. افتح عالمك بنظرة أو همسة.',
    
    energy_tag: 'طاقة لا نهائية',
    energy_title: '0% ليثيوم. 100% ضوء.',
    energy_desc: 'أول هاتف ذكي يعمل بالكامل بالضوء. تحصد بشرتنا الشمسية النانو-بصرية الطاقة من أي مصدر - ضوء الشمس أو المصابيح الداخلية - وتخزنها في مكثف كمي غير قابل للتدهور. لا كابلات. لا شواحن. فقط طاقة نقية لا نهائية.',
    energy_lifespan: 'العمر الافتراضي',
    energy_reserve: 'الاحتياطي',
    
    tech_title: 'تكنولوجيا فائقة',
    tech_subtitle: 'روائع هندسية',
    tech_core: 'النواة العصبية A2X',
    tech_core_desc: 'معالج ذكاء اصطناعي بـ 48 نواة قادر على 100 تريليون عملية في الثانية.',
    tech_quantum: 'رابط الكم™',
    tech_quantum_desc: 'إنترنت فضائي عالمي مجاني غير محدود. بلا شريحة. بلا رسوم.',
    tech_holo: 'شعاع هولو ثلاثي الأبعاد',
    tech_holo_desc: 'محرك عرض إسقاطي 180 درجة للواقع المعزز الهولوغرافي بدون نظارات.',
    tech_chat: 'S3Ts شات',
    tech_chat_desc: 'مستقبل الاتصالات. هولوغرافي. مشفر. عالمي.',
    
    footer_products: 'منتجات S3Ts',
    footer_support: 'الدعم',
    footer_explore: 'اكتشف',
    footer_legal: 'قانوني',
    footer_lang: 'المملكة العربية السعودية (AR)',
    
    click_info: 'اضغط للتفاصيل',

    // Store Page
    store_crumb: 'المتجر / الهواتف الذكية / S3Ts Pro 3.0',
    store_tagline: 'إصدار التيتانيوم • تخزين كمي 1 تيرابايت',
    store_price: '6,375.00 ريال سعودي',
    store_stock: 'متوفر - جاهز للشحن العالمي',
    store_finish: 'اللمسة النهائية',
    store_core: 'النواة العصبية',
    store_core_name: 'A2X Pro (48 نواة)',
    store_included: 'مضمن',
    store_add: 'أضف إلى الحقيبة',
    store_finance: 'قسّطها مع تابي',
    store_view_specs: 'عرض المواصفات الفنية الكاملة',
    store_warranty_title: 'ضمان مدى الحياة',
    store_warranty_desc: 'مضمون ضد كسر الشاشة وأضرار المياه.',
    store_solar_title: 'طاقة لا نهائية',
    store_solar_desc: 'لوحة شحن شمسية خلفية مضمنة قياسياً.',
    store_vip_title: 'خدمة VIP',
    store_vip_desc: 'وصول 24/7 لشبكة دعم S3Ts.',

    // Specs Modal
    specs_title: 'المواصفات الفنية',
    specs_subtitle: 'S3Ts Pro 3.0 / البيانات المرجعية',
    spec_cat_build: 'الهيكل والبناء',
    spec_chassis: 'الشاسيه', spec_chassis_val: 'سبيكة تيتانيوم ألفا من الدرجة الفضائية',
    spec_glass: 'زجاج الشاشة', spec_glass_val: 'زجاج الماس 9H+ (غير قابل للكسر)',
    spec_rating: 'التصنيف', spec_rating_val: 'IP79X (مقاوم للغمر والغبار)',
    spec_dim: 'الأبعاد', spec_dim_val: '161 مم × 74 مم × 7.2 مم',
    spec_weight: 'الوزن', spec_weight_val: '191 جم',
    
    spec_cat_display: 'الشاشة والمرئيات',
    spec_holo: 'محرك الهولوغرام', spec_holo_val: 'S3Ts HOLO-Beam 3D (إسقاط 180 درجة)',
    spec_ar: 'الواقع المعزز/الافتراضي', spec_ar_val: 'حوسبة مكانية بدون نظارات',
    spec_bright: 'السطوع', spec_bright_val: 'تعزيز تلقائي (قابل للقراءة تحت ضوء الشمس المباشر)',
    
    spec_cat_conn: 'الاتصال والشبكة',
    spec_sat: 'تكوين الشريحة', spec_sat_val: 'شريحة إلكترونية مزدوجة (S3Ts Mobile™ + eSIM+)',
    spec_cov: 'الأقمار الصناعية', spec_cov_val: 'S3Ts Quantum-Link™ (تغطية عالمية)',
    spec_cost: 'التكلفة', spec_cost_val: 'بيانات مجانية غير محدودة مدى الحياة',
    spec_speed: 'السرعة', spec_speed_val: 'معيار الكم 6G',
    spec_type: 'النوع', spec_type_val: 'هجين جوال-أقمار صناعية',

    spec_cat_perf: 'الأداء',
    spec_proc: 'المعالج', spec_proc_val: 'النواة العصبية A2X (48 نواة ذكاء اصطناعي)',
    spec_arch: 'البنية', spec_arch_val: 'خيوط عصبية كمية 14 نانومتر',
    spec_cool: 'التبريد', spec_cool_val: 'Aero-Flow X (تهوية دقيقة)',

    spec_cat_energy: 'الطاقة',
    spec_tech: 'التكنولوجيا', spec_tech_val: '0% ليثيوم / خلايا شمسية نانو-بصرية',
    spec_charge: 'الشحن', spec_charge_val: 'حصاد شمسي مستمر (في حالة التشغيل أو الإيقاف) - ممتلئ دائماً',
    spec_res: 'الاحتياطي', spec_res_val: 'احتياطي مكثف كمي 72 ساعة (في الظلام)',

    // About Page
    about_back: 'العودة للرئيسية',
    about_title: 'عن S3Ts Tech',
    about_subtitle: 'مستقبل الابتكار الأخلاقي',
    about_p1: 'إن S3Ts Pro 3.0 هو نتاج التألق الجماعي وتفاني مهندسينا وعلمائنا ومصممينا العالميين في S3Ts Tech. مشتق من "السمامة" (الرفعة)، يجسد اسمنا سعينا الدؤوب نحو أعلى قمم الابتكار. بصفتنا شركة تقنية متميزة متجذرة في المملكة العربية السعودية، فإننا نفخر بدفع حدود ما كان يعتقد سابقاً أنه مستحيل.',
    about_founder_role: 'المؤسس والمخترع',
    about_founder_name: 'عبد الواحد حبيب الله آدم بنو هاشم',
    about_founder_title: 'مخترع ورائد أعمال ومؤسس بلجيكي',
    about_vision_title: 'رؤية للإنسانية',
    about_vision_p1: 'تدفع S3Ts Tech مهمة لدفع المملكة العربية السعودية إلى ذروة القيادة العالمية - ليس فقط اقتصادياً، بل إنسانياً. نحن نبني قوة عاملة محلية متنوعة تناصر حقوق الإنسان والكرامة.',
    about_vision_strong: 'هذه التكنولوجيا تقف ضد الاستغلال.',
    about_vision_p2: 'على عكس عمالقة التكنولوجيا التقليديين، فإن سلسلة التوريد لدينا أخلاقية بصرامة. نحن نضمن عدم المساهمة في عمالة الأطفال أو الاستغلال البشري، وتجنب مناطق النزاع مثل الكونغو على وجه التحديد. S3Ts Pro 3.0 ليس مجرد أعجوبة تكنولوجية؛ إنه انتصار للكرامة الإنسانية.',
    about_vision_end: 'من لوحة الرسم إلى هيكل التيتانيوم النهائي، تم صياغة كل عنصر من عناصر S3Ts Pro 3.0 لهدف واحد: تحرير المستخدم من قيود التكنولوجيا التقليدية. لا أسلاك. لا حدود. لا قيود.',
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'nav_pro3', href: '#pro3', hasDropdown: true },
  { label: 'nav_telecom', href: '#telecom' },
  { label: 'nav_holo', href: '#holographic' },
  { label: 'nav_neural', href: '#ai' },
  { label: 'nav_solar', href: '#energy' },
  { label: 'nav_support', href: '#support' },
  { label: 'nav_community', href: '#community' },
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: "S3Ts Pro 3.0",
    subtitle: "The Holographic Revolution. Unbreakable. Infinite.",
    image: "https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Metaball_liquid_wt_bg.mp4",
    cta: "Pre-Order Now",
    theme: "light"
  }
];

// Reusing Product interface to display features/editions
export const PRODUCTS: Product[] = [
  {
    id: 'titanium',
    name: 'Aerospace Titanium',
    tagline: 'Alpha Alloy Chassis',
    series: 'X',
    image: 'https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3TS_hightech.png',
    isNew: true,
  },
  {
    id: 'holo',
    name: 'HOLO-Lens 300MP',
    tagline: 'Quantum Sensor Camera',
    series: 'X',
    image: 'https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3TS_hightech.png',
    isNew: true,
  },
  {
    id: 'ai',
    name: 'Neural Core A2X',
    tagline: '48 AI Cores',
    series: 'X',
    image: 'https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3TS_hightech.png',
    isNew: true,
  }
];

export const VIVO_BLUE = '#111111'; // Luxury Black