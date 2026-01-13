// Geographic data structure for all Egyptian governorates, cities, and neighborhoods
// This data powers the dynamic page generation for local SEO

export interface GeoLocation {
  id: string
  name: string
  nameAr: string
  type: "governorate" | "city" | "neighborhood"
  governorate?: string
  coordinates?: {
    lat: number
    lng: number
  }
}

export interface Service {
  id: string
  name: string
  nameAr: string
  slug: string
  description: string
  descriptionAr: string
  keywords: string[]
  keywordsAr: string[]
}

export interface ServiceContent {
  titleTemplate: string
  metaDescriptionTemplate: string
  keywordsAr: string[]
  mainContent: string
  servicesList: string[]
  whyChooseUs: string[]
}

export const SERVICE_CONTENT_TEMPLATES: Record<string, ServiceContent> = {
  "graphic-design": {
    titleTemplate: "مصمم جرافيك في [المنطقة] | EhabGM",
    metaDescriptionTemplate:
      "هل تبحث عن مصمم جرافيك محترف في [المنطقة]؟ وكالة EhabGM تقدم أفضل خدمات التصميم الجرافيكي الاحترافية بأسعار تنافسية وجودة مضمونة.",
    keywordsAr: [
      "مصمم جرافيك",
      "تصميم جرافيك",
      "خدمات تصميم",
      "مصمم شعار",
      "تصميم إعلانات",
      "تصميم هوية بصرية",
      "مصمم جرافيك [المنطقة]",
      "مصمم جرافيك في [المحافظة]",
    ],
    mainContent: `مرحبًا بك في EhabGM – أفضل وكالة تصميم جرافيك في [المنطقة]. نقدم خدمات تصميم احترافية تشمل تصميم الشعارات، الهوية البصرية، البروشورات، البانرات الإعلانية، والمحتوى الإبداعي للسوشيال ميديا. فريقنا من المصممين المعتمدين في مصر يمتلك خبرة تتجاوز 10 سنوات في مجال التصميم الجرافيكي، مما يجعلنا الخيار الأول لأصحاب المشاريع والشركات في [المنطقة].

نحرص على تقديم تصميمات عصرية ومخصصة تعكس هوية مشروعك وتجعلك متميزًا عن منافسيك. سواء كنت في [المحافظة] أو [المنطقة] أو حتى في المدن الجديدة مثل التجمع الخامس والشيخ زايد و6 أكتوبر، فإن خدماتنا متاحة لك أينما كنت.`,
    servicesList: [
      "تصميم الشعارات الاحترافية (Logo Design)",
      "تصميم الهوية البصرية الكاملة (Brand Identity)",
      "تصميم منشورات السوشيال ميديا",
      "تصميم بروشورات وفلايرات مطبوعة",
      "تصميم بانرات ولوحات إعلانية",
      "تصميم الموشن جرافيك والفيديوهات التعريفية",
    ],
    whyChooseUs: [
      "فريق متخصص في التصميم الجرافيكي",
      "جودة عالية وتسليم سريع",
      "أسعار مرنة تناسب جميع الفئات",
      "دعم فني مستمر واستشارات مجانية",
    ],
  },
  "web-design": {
    titleTemplate: "مصمم مواقع في [المنطقة] | EhabGM",
    metaDescriptionTemplate:
      "احصل على موقع إلكتروني احترافي يناسب نشاطك التجاري في [المنطقة] مع وكالة EhabGM، الرائدة في تصميم وتطوير المواقع في مصر.",
    keywordsAr: [
      "تصميم مواقع",
      "مطور مواقع",
      "إنشاء موقع إلكتروني",
      "مصمم مواقع [المنطقة]",
      "شركة تصميم مواقع [المحافظة]",
      "تصميم متجر إلكتروني",
      "تطوير مواقع",
    ],
    mainContent: `تبحث عن مصمم مواقع إلكترونية في [المنطقة]؟ مع EhabGM، نقدم حلول متكاملة لتصميم المواقع الاحترافية التي تضمن لك حضورًا رقميًا قويًا ومؤثرًا. نعمل على تصميم مواقع سريعة، متجاوبة، وآمنة تلبي احتياجات الشركات والمتاجر الإلكترونية في [المنطقة] وجميع محافظات مصر.`,
    servicesList: [
      "تصميم مواقع الشركات والمؤسسات",
      "إنشاء المتاجر الإلكترونية المتكاملة",
      "تطوير مواقع مخصصة حسب الطلب",
      "تحسين المواقع لمحركات البحث (SEO Optimization)",
      "صيانة وتحديث المواقع",
    ],
    whyChooseUs: ["فريق متخصص في تطوير المواقع", "مواقع سريعة وآمنة", "دعم فني متواصل", "أسعار تنافسية"],
  },
  "digital-marketing": {
    titleTemplate: "تسويق إلكتروني في [المنطقة] | EhabGM",
    metaDescriptionTemplate:
      "هل تحتاج إلى حملة تسويق إلكتروني فعالة في [المنطقة]؟ EhabGM توفر حلول تسويقية شاملة تشمل الإعلانات الممولة وإدارة السوشيال ميديا.",
    keywordsAr: [
      "تسويق إلكتروني",
      "إعلانات ممولة",
      "إدارة سوشيال ميديا",
      "تسويق فيسبوك",
      "Google Ads",
      "وكالة تسويق رقمي",
      "تسويق إلكتروني [المنطقة]",
    ],
    mainContent: `EhabGM هي وكالة تسويق إلكتروني رائدة تقدم خدماتها في [المنطقة] لمساعدة الشركات على تحقيق نتائج ملموسة. نُدير حملات إعلانية مدروسة على فيسبوك، إنستجرام، وجوجل، ونقدّم خدمات SEO لتصدر نتائج البحث. فريقنا يعمل بخطط استراتيجية لتحقيق أفضل عائد من الاستثمار.`,
    servicesList: [
      "إدارة الحملات الإعلانية (فيسبوك – إنستجرام – جوجل)",
      "إدارة صفحات السوشيال ميديا",
      "تحسين محركات البحث SEO",
      "كتابة المحتوى التسويقي",
      "تصميم الإعلانات والبنرات الإبداعية",
    ],
    whyChooseUs: ["فريق متخصص في التسويق الرقمي", "نتائج مثبتة وقابلة للقياس", "استراتيجيات مخصصة", "دعم فني متواصل"],
  },
  "digital-solutions": {
    titleTemplate: "حلول رقمية في [المنطقة] | EhabGM",
    metaDescriptionTemplate:
      "اكتشف أحدث الأدوات الرقمية في [المنطقة] من EhabGM – أدوات الذكاء الاصطناعي، مولدات QR، اختصارات الروابط، والمزيد.",
    keywordsAr: [
      "حلول رقمية",
      "أدوات ذكاء اصطناعي",
      "منشئ مواقع",
      "أدوات مجانية",
      "أدوات تسويق رقمي",
      "أدوات [المنطقة]",
    ],
    mainContent: `EhabGM تقدم مجموعة من الحلول الرقمية المصممة لتسهيل أعمالك في [المنطقة]، تشمل مولد المواقع بالذكاء الاصطناعي، اختصار الروابط، مولد رموز QR، إنشاء الفواتير، والمزيد. جميع الأدوات متاحة مجانًا عبر موقعنا لتساعدك على تطوير مشروعك بكفاءة.`,
    servicesList: [
      "مولد المواقع بالذكاء الاصطناعي",
      "اختصار الروابط",
      "مولد رموز QR",
      "إنشاء الفواتير",
      "أدوات تسويق رقمية",
    ],
    whyChooseUs: ["أدوات حديثة وسهلة الاستخدام", "متاحة مجانًا", "دعم فني متواصل", "تحديثات مستمرة"],
  },
  "brand-identity": {
    titleTemplate: "مصمم هوية بصرية في [المنطقة] | EhabGM",
    metaDescriptionTemplate:
      "صمم هوية بصرية تعبر عن مشروعك وتجعلك مميزًا في السوق. مصمم الهوية البصرية في [المنطقة] من EhabGM يقدم حلولًا إبداعية ومتكاملة.",
    keywordsAr: [
      "تصميم هوية بصرية",
      "مصمم هوية",
      "Brand Identity",
      "تصميم شعار",
      "تصميم بروفايل شركة",
      "مصمم هوية بصرية [المنطقة]",
    ],
    mainContent: `نُصمم هويتك البصرية بأسلوب احترافي يعبّر عن قيمك التجارية ويجعل عملاءك يتذكرونك. سواء في [المنطقة] أو أي محافظة أخرى، نوفر لك تصميم متكامل يبدأ من الشعار إلى جميع تطبيقات الهوية (الكروت، الخطابات، ملفات الشركة، والعروض التقديمية).`,
    servicesList: [
      "تصميم الشعار",
      "تصميم الكروت الشخصية",
      "تصميم الخطابات الرسمية",
      "تصميم ملفات الشركة",
      "تصميم العروض التقديمية",
    ],
    whyChooseUs: ["تصاميم احترافية وفريدة", "تعبر عن هويتك التجارية", "متكاملة وشاملة", "دعم فني متواصل"],
  },
  "scientific-research": {
    titleTemplate: "إنشاء أبحاث علمية في [المنطقة] | EhabGM",
    metaDescriptionTemplate:
      "هل تحتاج مساعدة في إعداد بحث علمي أو مشروع تخرج في [المنطقة]؟ EhabGM توفر لك خدمة إنشاء الأبحاث الأكاديمية باحترافية عالية.",
    keywordsAr: [
      "أبحاث علمية",
      "كتابة بحث جامعي",
      "مشروع تخرج",
      "إنشاء أبحاث",
      "كتابة علمية",
      "أبحاث جامعية [المنطقة]",
    ],
    mainContent: `نساعد الطلاب والباحثين في [المنطقة] على إعداد أبحاث علمية عالية الجودة، تشمل البحث، التحليل، التوثيق، والإخراج النهائي. جميع الأبحاث يتم إعدادها بمعايير أكاديمية دقيقة مع ضمان خلوها من النسخ والسرقة العلمية.`,
    servicesList: [
      "كتابة الأبحاث العلمية",
      "إعداد مشاريع التخرج",
      "البحث والتحليل",
      "التوثيق الأكاديمي",
      "الإخراج النهائي",
    ],
    whyChooseUs: ["معايير أكاديمية دقيقة", "خلو من النسخ والسرقة العلمية", "فريق متخصص", "دعم فني متواصل"],
  },
  printing: {
    titleTemplate: "خدمات طباعة ودعاية وإعلان في [المنطقة] | EhabGM",
    metaDescriptionTemplate:
      "EhabGM تقدم خدمات الطباعة والدعاية والإعلان في [المنطقة] – من البانرات إلى الكروت الشخصية بجودة طباعة عالية وأسعار منافسة.",
    keywordsAr: ["طباعة", "دعاية وإعلان", "مطبعة", "بانرات", "كروت شخصية", "فلاير", "خدمات طباعة [المنطقة]"],
    mainContent: `نوفر خدمات الطباعة الكاملة لجميع احتياجاتك في [المنطقة]، سواء لطباعة الإعلانات أو المواد التسويقية. فريقنا يتولى التصميم، التنفيذ، والتوصيل بأعلى معايير الجودة. تشمل خدماتنا تصميم وطباعة الكروت، البانرات، الفلايرات، واليافطات.`,
    servicesList: [
      "طباعة الكروت الشخصية",
      "طباعة البانرات والاليافطات",
      "طباعة الفلايرات والبروشورات",
      "طباعة المواد الإعلانية",
      "خدمات التصميم والطباعة المتكاملة",
    ],
    whyChooseUs: ["جودة طباعة عالية", "أسعار منافسة", "تسليم سريع", "دعم فني متواصل"],
  },
  "paid-ads": {
    titleTemplate: "إعلانات ممولة في [المنطقة] | EhabGM",
    metaDescriptionTemplate:
      "احصل على حملات إعلانية ممولة فعالة في [المنطقة] مع EhabGM – Google Ads، Facebook Ads، وإنستجرام بأفضل عائد استثمار.",
    keywordsAr: [
      "إعلانات ممولة",
      "Google Ads",
      "Facebook Ads",
      "إعلانات إنستجرام",
      "حملات إعلانية",
      "إعلانات [المنطقة]",
    ],
    mainContent: `نقدم خدمات الإعلانات الممولة المتخصصة في [المنطقة] لتحقيق أفضل نتائج لمشروعك. نعمل على إدارة حملات احترافية على جوجل وفيسبوك وإنستجرام بأسلوب استراتيجي يضمن أفضل عائد من الاستثمار. فريقنا يتابع الحملات بشكل مستمر ويحسنها لتحقيق أهدافك التسويقية.`,
    servicesList: [
      "إدارة حملات Google Ads",
      "إدارة حملات Facebook Ads",
      "إدارة حملات إنستجرام",
      "تحسين الحملات الإعلانية",
      "تقارير وتحليلات مفصلة",
    ],
    whyChooseUs: [
      "فريق متخصص في الإعلانات الممولة",
      "نتائج مثبتة وقابلة للقياس",
      "استراتيجيات مخصصة",
      "دعم فني متواصل",
    ],
  },
}

// Egyptian Governorates with major cities and neighborhoods
export const GOVERNORATES: GeoLocation[] = [
  {
    id: "cairo",
    name: "Cairo",
    nameAr: "القاهرة",
    type: "governorate",
    coordinates: { lat: 30.0444, lng: 31.2357 },
  },
  {
    id: "giza",
    name: "Giza",
    nameAr: "الجيزة",
    type: "governorate",
    coordinates: { lat: 30.0131, lng: 31.2089 },
  },
  {
    id: "alexandria",
    name: "Alexandria",
    nameAr: "الإسكندرية",
    type: "governorate",
    coordinates: { lat: 31.2001, lng: 29.9187 },
  },
  {
    id: "qalyubia",
    name: "Qalyubia",
    nameAr: "القليوبية",
    type: "governorate",
    coordinates: { lat: 30.3667, lng: 31.1333 },
  },
  {
    id: "sharqia",
    name: "Sharqia",
    nameAr: "الشرقية",
    type: "governorate",
    coordinates: { lat: 30.5, lng: 31.5 },
  },
  {
    id: "gharbia",
    name: "Gharbia",
    nameAr: "الغربية",
    type: "governorate",
    coordinates: { lat: 30.7667, lng: 30.9333 },
  },
  {
    id: "monufia",
    name: "Monufia",
    nameAr: "المنوفية",
    type: "governorate",
    coordinates: { lat: 30.5, lng: 31.0 },
  },
  {
    id: "dakahlia",
    name: "Dakahlia",
    nameAr: "الدقهلية",
    type: "governorate",
    coordinates: { lat: 31.0, lng: 31.5 },
  },
  {
    id: "beheira",
    name: "Beheira",
    nameAr: "البحيرة",
    type: "governorate",
    coordinates: { lat: 31.0, lng: 30.5 },
  },
  {
    id: "kafr-el-sheikh",
    name: "Kafr El-Sheikh",
    nameAr: "كفر الشيخ",
    type: "governorate",
    coordinates: { lat: 31.1, lng: 30.9 },
  },
  {
    id: "damietta",
    name: "Damietta",
    nameAr: "دمياط",
    type: "governorate",
    coordinates: { lat: 31.4167, lng: 31.8167 },
  },
  {
    id: "port-said",
    name: "Port Said",
    nameAr: "بورسعيد",
    type: "governorate",
    coordinates: { lat: 31.2565, lng: 32.2841 },
  },
  {
    id: "ismailia",
    name: "Ismailia",
    nameAr: "الإسماعيلية",
    type: "governorate",
    coordinates: { lat: 30.5967, lng: 32.2744 },
  },
  {
    id: "suez",
    name: "Suez",
    nameAr: "السويس",
    type: "governorate",
    coordinates: { lat: 29.9668, lng: 32.5498 },
  },
  {
    id: "fayoum",
    name: "Fayoum",
    nameAr: "الفيوم",
    type: "governorate",
    coordinates: { lat: 29.3084, lng: 30.8428 },
  },
  {
    id: "beni-suef",
    name: "Beni Suef",
    nameAr: "بني سويف",
    type: "governorate",
    coordinates: { lat: 29.0667, lng: 31.3 },
  },
  {
    id: "minya",
    name: "Minya",
    nameAr: "المنيا",
    type: "governorate",
    coordinates: { lat: 28.1089, lng: 30.7503 },
  },
  {
    id: "assiut",
    name: "Assiut",
    nameAr: "أسيوط",
    type: "governorate",
    coordinates: { lat: 27.1817, lng: 31.1856 },
  },
  {
    id: "sohag",
    name: "Sohag",
    nameAr: "سوهاج",
    type: "governorate",
    coordinates: { lat: 26.5567, lng: 31.6948 },
  },
  {
    id: "qena",
    name: "Qena",
    nameAr: "قنا",
    type: "governorate",
    coordinates: { lat: 26.1667, lng: 33.6333 },
  },
  {
    id: "luxor",
    name: "Luxor",
    nameAr: "الأقصر",
    type: "governorate",
    coordinates: { lat: 25.6872, lng: 32.6396 },
  },
  {
    id: "aswan",
    name: "Aswan",
    nameAr: "أسوان",
    type: "governorate",
    coordinates: { lat: 24.0889, lng: 32.8998 },
  },
  {
    id: "red-sea",
    name: "Red Sea",
    nameAr: "البحر الأحمر",
    type: "governorate",
    coordinates: { lat: 26.1, lng: 33.8 },
  },
  {
    id: "matrouh",
    name: "Matrouh",
    nameAr: "مرسى مطروح",
    type: "governorate",
    coordinates: { lat: 31.3546, lng: 27.2401 },
  },
  {
    id: "north-sinai",
    name: "North Sinai",
    nameAr: "شمال سيناء",
    type: "governorate",
    coordinates: { lat: 31.1, lng: 33.5 },
  },
  {
    id: "south-sinai",
    name: "South Sinai",
    nameAr: "جنوب سيناء",
    type: "governorate",
    coordinates: { lat: 28.5, lng: 34.0 },
  },
]

// Major cities and neighborhoods within Cairo
export const CAIRO_AREAS: GeoLocation[] = [
  { id: "cairo-tagamoa", name: "El Tagamoa", nameAr: "التجمع الخامس", type: "neighborhood", governorate: "cairo" },
  { id: "cairo-new-cairo", name: "New Cairo", nameAr: "القاهرة الجديدة", type: "neighborhood", governorate: "cairo" },
  { id: "cairo-nasr-city", name: "Nasr City", nameAr: "مدينة نصر", type: "neighborhood", governorate: "cairo" },
  { id: "cairo-maadi", name: "Maadi", nameAr: "المعادي", type: "neighborhood", governorate: "cairo" },
  { id: "cairo-helwan", name: "Helwan", nameAr: "حلوان", type: "neighborhood", governorate: "cairo" },
  { id: "cairo-mohandessin", name: "Mohandessin", nameAr: "المهندسين", type: "neighborhood", governorate: "cairo" },
  { id: "cairo-zamalek", name: "Zamalek", nameAr: "الزمالك", type: "neighborhood", governorate: "cairo" },
  { id: "cairo-garden-city", name: "Garden City", nameAr: "جاردن سيتي", type: "neighborhood", governorate: "cairo" },
  { id: "cairo-badr", name: "Badr City", nameAr: "مدينة بدر", type: "neighborhood", governorate: "cairo" },
  { id: "cairo-sherouk", name: "Sherouk", nameAr: "الشروق", type: "neighborhood", governorate: "cairo" },
  { id: "cairo-obour", name: "Obour", nameAr: "العبور", type: "neighborhood", governorate: "cairo" },
  { id: "cairo-rehab", name: "Rehab", nameAr: "الرحاب", type: "neighborhood", governorate: "cairo" },
  {
    id: "cairo-new-admin",
    name: "New Administrative Capital",
    nameAr: "العاصمة الإدارية الجديدة",
    type: "neighborhood",
    governorate: "cairo",
  },
]

// Major cities and neighborhoods within Giza
export const GIZA_AREAS: GeoLocation[] = [
  { id: "giza-dokki", name: "Dokki", nameAr: "الدقي", type: "neighborhood", governorate: "giza" },
  { id: "giza-mohandessin", name: "Mohandessin", nameAr: "المهندسين", type: "neighborhood", governorate: "giza" },
  { id: "giza-6-october", name: "6 October", nameAr: "6 أكتوبر", type: "neighborhood", governorate: "giza" },
  { id: "giza-sheikh-zayed", name: "Sheikh Zayed", nameAr: "الشيخ زايد", type: "neighborhood", governorate: "giza" },
  { id: "giza-haram", name: "Haram", nameAr: "الهرم", type: "neighborhood", governorate: "giza" },
  { id: "giza-faisal", name: "Faisal", nameAr: "فيصل", type: "neighborhood", governorate: "giza" },
  { id: "giza-bulaq", name: "Bulaq El Dakror", nameAr: "بولاق الدكرور", type: "neighborhood", governorate: "giza" },
  { id: "giza-embaba", name: "Embaba", nameAr: "إمبابة", type: "neighborhood", governorate: "giza" },
]

// Services offered
export const SERVICES: Service[] = [
  {
    id: "graphic-design",
    name: "Graphic Design",
    nameAr: "تصميم الجرافيك",
    slug: "graphic-design",
    description: "Professional graphic design services including logos, branding, and visual identity",
    descriptionAr: "خدمات تصميم جرافيك احترافية تشمل الشعارات والهوية البصرية والتصاميم الإبداعية",
    keywords: ["graphic designer", "logo design", "branding", "visual identity"],
    keywordsAr: ["مصمم جرافيك", "تصميم لوجو", "هوية بصرية", "تصميم شعار"],
  },
  {
    id: "web-design",
    name: "Web Design",
    nameAr: "تصميم المواقع",
    slug: "web-design",
    description: "Professional website design and development services",
    descriptionAr: "خدمات تصميم وتطوير المواقع الاحترافية والمتجاوبة",
    keywords: ["web designer", "website design", "web development", "e-commerce"],
    keywordsAr: ["مصمم مواقع", "تصميم موقع", "متجر إلكتروني", "تطوير مواقع"],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    nameAr: "التسويق الإلكتروني",
    slug: "digital-marketing",
    description: "Comprehensive digital marketing and SEO services",
    descriptionAr: "خدمات التسويق الإلكتروني وتحسين محركات البحث الشاملة",
    keywords: ["digital marketing", "SEO", "social media marketing", "content marketing"],
    keywordsAr: ["تسويق إلكتروني", "SEO", "تسويق سوشيال ميديا", "تسويق محتوى"],
  },
  {
    id: "paid-ads",
    name: "Paid Advertising",
    nameAr: "الإعلانات الممولة",
    slug: "paid-ads",
    description: "Paid advertising campaigns on Google, Facebook, and other platforms",
    descriptionAr: "حملات إعلانية ممولة على جوجل وفيسبوك والمنصات الأخرى",
    keywords: ["paid ads", "Google Ads", "Facebook Ads", "advertising campaigns"],
    keywordsAr: ["إعلانات ممولة", "جوجل أدز", "فيسبوك أدز", "حملات إعلانية"],
  },
  {
    id: "digital-solutions",
    name: "Digital Solutions",
    nameAr: "الحلول الرقمية",
    slug: "digital-solutions",
    description: "Comprehensive digital solutions and AI-powered tools",
    descriptionAr: "حلول رقمية متكاملة وأدوات مدعومة بالذكاء الاصطناعي",
    keywords: ["digital solutions", "AI tools", "business automation", "digital transformation"],
    keywordsAr: ["حلول رقمية", "أدوات ذكاء اصطناعي", "أتمتة الأعمال", "التحول الرقمي"],
  },
  {
    id: "scientific-research",
    name: "Scientific Research",
    nameAr: "الأبحاث العلمية",
    slug: "scientific-research",
    description: "Professional scientific research writing and academic support",
    descriptionAr: "كتابة الأبحاث العلمية والدعم الأكاديمي الاحترافي",
    keywords: ["research writing", "academic papers", "thesis writing", "research support"],
    keywordsAr: ["كتابة بحث", "أوراق أكاديمية", "كتابة رسالة", "دعم بحثي"],
  },
  {
    id: "printing",
    name: "Printing & Advertising",
    nameAr: "الطباعة والدعاية",
    slug: "printing",
    description: "Professional printing and advertising materials",
    descriptionAr: "خدمات الطباعة والمواد الإعلانية الاحترافية",
    keywords: ["printing", "advertising materials", "banners", "brochures"],
    keywordsAr: ["طباعة", "مواد إعلانية", "بنرات", "بروشورات"],
  },
  {
    id: "brand-identity",
    name: "Brand Identity",
    nameAr: "الهوية البصرية",
    slug: "brand-identity",
    description: "Complete brand identity and visual branding services",
    descriptionAr: "خدمات الهوية البصرية والعلامة التجارية الشاملة",
    keywords: ["brand identity", "branding", "logo design", "corporate identity"],
    keywordsAr: ["هوية بصرية", "علامة تجارية", "تصميم شعار", "هوية تجارية"],
  },
]

// Helper function to get all locations (governorates + cities)
export function getAllLocations(): GeoLocation[] {
  return [...GOVERNORATES, ...CAIRO_AREAS, ...GIZA_AREAS]
}

// Helper function to get location by ID
export function getLocationById(id: string): GeoLocation | undefined {
  return getAllLocations().find((loc) => loc.id === id)
}

// Helper function to get service by ID
export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((svc) => svc.id === id)
}

// Helper function to generate URL slug
export function generateSlug(service: Service, location: GeoLocation): string {
  return `/${service.slug}/${location.id}`
}
