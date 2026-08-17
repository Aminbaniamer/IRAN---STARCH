/* ————————————————— دسته‌بندی‌ها ————————————————— */
export type Category = {
  id: string;
  name: string;
  code: string;
  img: string;
  desc: string;
  tags: string[];
};

export const categories: Category[] = [
  {
    id: "base",
    name: "نشاسته‌های پایه",
    code: "NATIVE",
    img: "/images/grains.jpg",
    desc: "نشاسته‌های طبیعی با خلوص بالا از منابع مختلف گیاهی، مناسب کاربردهای عمومی صنایع.",
    tags: ["ذرت", "گندم", "سیب‌زمینی", "برنج", "تاپیوکا"],
  },
  {
    id: "modified",
    name: "نشاسته‌های اصلاح‌شده",
    code: "E1400–E1452",
    img: "/images/plant.jpg",
    desc: "مجموعهٔ کامل گریدهای اصلاح‌شده خوراکی مطابق استانداردهای E1400 تا E1452.",
    tags: ["E1412", "E1414", "E1422", "E1442", "E1450"],
  },
  {
    id: "pharma",
    name: "نشاسته‌های دارویی",
    code: "BP / USP",
    img: "/images/lab.jpg",
    desc: "گریدهای دارویی مطابق فارماکوپه بریتانیا و آمریکا برای صنایع دارویی و بهداشتی.",
    tags: ["BP", "USP", "مستندسازی کامل"],
  },
  {
    id: "industrial",
    name: "نشاسته‌های صنعتی",
    code: "INDUSTRIAL",
    img: "/images/warehouse.jpg",
    desc: "گریدهای تخصصی برای کاغذسازی، چسب، حفاری و کاربردهای فرآیندی سنگین.",
    tags: ["کاتیونیک", "حفاری", "فرآیندی"],
  },
  {
    id: "syrup",
    name: "شربت‌ها و مشتقات",
    code: "DERIVATIVES",
    img: "/images/powder-dark.jpg",
    desc: "مشتقات هیدرولیز نشاسته شامل گلوکز مایع، مالتودکسترین و دکسترین.",
    tags: ["گلوکز مایع", "مالتودکسترین", "دکسترین"],
  },
  {
    id: "special",
    name: "محصولات تخصصی",
    code: "SPECIALTY",
    img: "/images/powder-dark.jpg",
    desc: "گریدهای خاص برای کاربردهای ویژه؛ قابل تأمین بر اساس مشخصات فنی مشتری.",
    tags: ["پیش‌ژلاتینه", "اکسیده"],
  },
];

/* ————————————————— توابع کاربردی (فیلتر کاربرد) ————————————————— */
export const funcs = [
  "غلظت‌دهی و بافت‌سازی",
  "ژلاسیون و پایدارسازی",
  "پایداری حرارتی و انجمادی",
  "چسبندگی",
  "حامل و حجم‌دهنده",
  "آهار و پوشش",
  "ضد تبلور",
  "امولسیفایر (OSA)",
];

/* ————————————————— محصولات ————————————————— */
export type Availability = "موجود" | "محدود" | "سفارشی";

export type Product = {
  id: string;
  name: string;
  code?: string;
  category: string;
  source: string;
  grade: "خوراکی" | "دارویی" | "صنعتی";
  applications: string[];
  packaging: string;
  availability: Availability;
  industries: string[];
  funcs: string[];
  blurb: string;
};

export const products: Product[] = [
  // — پایه —
  { id: "corn", name: "نشاسته ذرت", category: "base", source: "ذرت", grade: "خوراکی", applications: ["سس و چاشنی", "شیرینی‌پزی", "فرآورده‌های گوشتی"], packaging: "کیسهٔ ۲۵ کیلویی / جامبوبگ", availability: "موجود", industries: ["food", "bakery", "feed", "textile"], funcs: ["غلظت‌دهی و بافت‌سازی", "ژلاسیون و پایدارسازی", "حامل و حجم‌دهنده"], blurb: "پرمصرف‌ترین نشاستهٔ پایه با ژلاسیون مناسب و قیمت رقابتی برای خطوط غذایی و صنعتی." } as Product,
  { id: "wheat", name: "نشاسته گندم", category: "base", source: "گندم", grade: "خوراکی", applications: ["رشته و نودل", "نان صنعتی", "چسب کاغذ"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "موجود", industries: ["bakery", "adhesive", "food"], funcs: ["غلظت‌دهی و بافت‌سازی", "چسبندگی"], blurb: "نشاستهٔ گندم با پروتئین پایین؛ مناسب محصولات بدون گلوتن و چسب‌های پایهٔ نشاسته." } as Product,
  { id: "potato", name: "نشاسته سیب‌زمینی", category: "base", source: "سیب‌زمینی", grade: "خوراکی", applications: ["سوپ و غذای آماده", "سس", "فرآورده‌های گوشتی"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "محدود", industries: ["food"], funcs: ["غلظت‌دهی و بافت‌سازی", "ژلاسیون و پایدارسازی"], blurb: "ویسکوزیته و شفافیت بالا؛ گزینهٔ برتر برای سس‌ها و محصولات با بافت شفاف." } as Product,
  { id: "rice", name: "نشاسته برنج", category: "base", source: "برنج", grade: "خوراکی", applications: ["غذای کودک", "دسر", "آرایشی و بهداشتی"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "سفارشی", industries: ["food", "pharma"], funcs: ["غلظت‌دهی و بافت‌سازی", "حامل و حجم‌دهنده"], blurb: "دانه‌بندی بسیار ریز و بافت نرم؛ مناسب فرمولاسیون‌های حساس و محصولات رژیمی." } as Product,
  { id: "tapioca", name: "نشاسته تاپیوکا", category: "base", source: "تاپیوکا", grade: "خوراکی", applications: ["شیرینی و شکلات", "نوشیدنی", "بافت‌دهی"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "محدود", industries: ["food", "bakery"], funcs: ["غلظت‌دهی و بافت‌سازی", "ضد تبلور"], blurb: "طعم خنثی و بافت کشسان؛ وارداتی با تأمین پایدار و مدارک کامل مبدأ." } as Product,

  // — اصلاح‌شده —
  { id: "e1400", name: "دکسترین", code: "E1400", category: "modified", source: "ذرت", grade: "خوراکی", applications: ["پوشش و تردکنندگی", "چسب خوراکی", "حامل طعم"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "موجود", industries: ["food", "adhesive"], funcs: ["چسبندگی", "حامل و حجم‌دهنده"], blurb: "نشاستهٔ تیمار حرارتی‌شده با حلالیت بالا؛ مناسب پوشش‌ها و حامل‌های خوراکی." } as Product,
  { id: "e1401", name: "نشاسته اسیدی", code: "E1401", category: "modified", source: "ذرت", grade: "خوراکی", applications: ["ژله و پاستیل", "آبنبات", "روکش شکلات"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "موجود", industries: ["food", "process"], funcs: ["ژلاسیون و پایدارسازی", "چسبندگی"], blurb: "نشاستهٔ رقیق‌شده با اسید؛ قدرت ژل‌سازی بالا برای شیرینی‌های ژله‌ای." } as Product,
  { id: "e1402", name: "نشاسته قلیایی", code: "E1402", category: "modified", source: "ذرت", grade: "خوراکی", applications: ["بافت‌دهی", "غلظت‌دهی"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "سفارشی", industries: ["food"], funcs: ["غلظت‌دهی و بافت‌سازی"], blurb: "گرید اصلاح قلیایی برای تنظیم ویسکوزیته در فرمولاسیون‌های خاص." } as Product,
  { id: "e1403", name: "نشاسته سفیدشده", code: "E1403", category: "modified", source: "ذرت", grade: "خوراکی", applications: ["آهار نساجی", "اندود کاغذ", "بافت‌دهی"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "موجود", industries: ["textile", "paper"], funcs: ["آهار و پوشش"], blurb: "روشنایی و خلوص بالا؛ پرکاربرد در آهار نساجی و پوشش‌دهی سطحی." } as Product,
  { id: "e1410", name: "مونو نشاسته فسفات", code: "E1410", category: "modified", source: "ذرت", grade: "خوراکی", applications: ["سس و سوپ", "غذای منجمد"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "سفارشی", industries: ["food"], funcs: ["پایداری حرارتی و انجمادی", "ژلاسیون و پایدارسازی"], blurb: "پایداری خوب در چرخه‌های حرارتی برای محصولات آماده و نیمه‌آماده." } as Product,
  { id: "e1412", name: "دی‌نشاسته فسفات", code: "E1412", category: "modified", source: "ذرت", grade: "خوراکی", applications: ["سس مایونز", "کچاپ", "غذای منجمد"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "موجود", industries: ["food"], funcs: ["پایداری حرارتی و انجمادی", "ژلاسیون و پایدارسازی"], blurb: "کراس‌لینک ملایم؛ مقاوم در برابر حرارت و هم‌زدن، بدون آب‌اندازی." } as Product,
  { id: "e1413", name: "دی‌نشاسته فسفاتِ فسفاته", code: "E1413", category: "modified", source: "ذرت", grade: "خوراکی", applications: ["غذای منجمد", "کنسرو"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "سفارشی", industries: ["food"], funcs: ["پایداری حرارتی و انجمادی"], blurb: "کراس‌لینک دوگانه برای پایداری حداکثری در فرایندهای شدید حرارتی." } as Product,
  { id: "e1414", name: "دی‌نشاسته فسفات استیله", code: "E1414", category: "modified", source: "ذرت", grade: "خوراکی", applications: ["سس حرارت‌دیده", "غذای منجمد", "بستنی"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "موجود", industries: ["food", "dairy"], funcs: ["پایداری حرارتی و انجمادی", "ژلاسیون و پایدارسازی"], blurb: "پرکاربردترین گرید برای سس‌های استریل و محصولات انجمادی." } as Product,
  { id: "e1420", name: "نشاسته استیله", code: "E1420", category: "modified", source: "تاپیوکا", grade: "خوراکی", applications: ["سس و چاشنی", "ماست", "دسر"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "موجود", industries: ["food", "dairy"], funcs: ["پایداری حرارتی و انجمادی", "غلظت‌دهی و بافت‌سازی"], blurb: "شفافیت و پایداری عالی در دمای پایین؛ مناسب لبنیات و سس‌های سرد." } as Product,
  { id: "e1422", name: "دی‌نشاسته آدیپات استیله", code: "E1422", category: "modified", source: "ذرت", grade: "خوراکی", applications: ["سس گوجه", "کنسرو", "غذای کودک"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "موجود", industries: ["food", "dairy"], funcs: ["پایداری حرارتی و انجمادی", "غلظت‌دهی و بافت‌سازی"], blurb: "مقاوم در برابر اسید و حرارت؛ استاندارد صنایع کنسرو و سس." } as Product,
  { id: "e1440", name: "نشاسته هیدروکسی‌پروپیل", code: "E1440", category: "modified", source: "ذرت", grade: "خوراکی", applications: ["بستنی", "دسر منجمد", "سس"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "موجود", industries: ["food", "dairy"], funcs: ["پایداری حرارتی و انجمادی", "ژلاسیون و پایدارسازی"], blurb: "جلوگیری از سینرسیس در چرخه‌های انجماد-ذوب؛ بافت کِرِمی پایدار." } as Product,
  { id: "e1442", name: "دی‌نشاسته فسفات هیدروکسی‌پروپیل", code: "E1442", category: "modified", source: "ذرت", grade: "خوراکی", applications: ["سس و مایونز", "غذای آماده", "لبنیات حرارت‌دیده"], packaging: "کیسهٔ ۲۵ کیلویی / جامبوبگ", availability: "موجود", industries: ["food", "dairy"], funcs: ["پایداری حرارتی و انجمادی", "غلظت‌دهی و بافت‌سازی"], blurb: "محبوب‌ترین گرید چندمنظورهٔ خطوط سس و غذای آماده در ایران." } as Product,
  { id: "e1450", name: "استارچ سدیم اکتینیل سوکسینات", code: "E1450", category: "modified", source: "ذرت", grade: "خوراکی", applications: ["امولسیون نوشیدنی", "اسانس و طعم‌دهنده", "پودرهای فوری"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "موجود", industries: ["food"], funcs: ["امولسیفایر (OSA)"], blurb: "خاصیت امولسیفایری برای امولسیون‌های پایدار و انکپسولاسیون طعم." } as Product,
  { id: "e1451", name: "نشاسته اکسیده استیله", code: "E1451", category: "modified", source: "ذرت", grade: "خوراکی", applications: ["اندود کاغذ", "چسب", "پوشش خوراکی"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "سفارشی", industries: ["paper", "adhesive"], funcs: ["چسبندگی", "غلظت‌دهی و بافت‌سازی"], blurb: "ویسکوزیتهٔ پایین و فیلم‌سازی مناسب برای اندود و پوشش." } as Product,
  { id: "e1452", name: "استارچ آلومینیوم اکتینیل سوکسینات", code: "E1452", category: "modified", source: "ذرت", grade: "خوراکی", applications: ["امولسیون", "انکپسولاسیون", "نوشیدنی"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "سفارشی", industries: ["food"], funcs: ["امولسیفایر (OSA)"], blurb: "گرید OSA برای سیستم‌های امولسیون حساس و پودرهای میکروکپسوله." } as Product,

  // — دارویی —
  { id: "bp", name: "نشاسته دارویی", code: "BP", category: "pharma", source: "ذرت", grade: "دارویی", applications: ["قرص و کپسول", "بازکننده", "حامل دارو"], packaging: "کیسهٔ ۲۵ کیلویی با مستندسازی", availability: "موجود", industries: ["pharma"], funcs: ["حامل و حجم‌دهنده"], blurb: "مطابق فارماکوپه بریتانیا؛ همراه با COA کامل و مدارک اصالت." } as Product,
  { id: "usp", name: "نشاسته دارویی", code: "USP", category: "pharma", source: "ذرت", grade: "دارویی", applications: ["قرص و کپسول", "بایندر", "فرمولاسیون دارویی"], packaging: "کیسهٔ ۲۵ کیلویی با مستندسازی", availability: "موجود", industries: ["pharma"], funcs: ["حامل و حجم‌دهنده"], blurb: "مطابق فارماکوپه آمریکا؛ مناسب خطوط تولید دارو و مکمل." } as Product,

  // — صنعتی —
  { id: "cationic", name: "نشاسته کاتیونیک", category: "industrial", source: "ذرت", grade: "صنعتی", applications: ["کاغذسازی", "نگهداری الیاف", "تصفیه"], packaging: "کیسهٔ ۲۵ کیلویی / جامبوبگ", availability: "موجود", industries: ["paper"], funcs: ["چسبندگی", "آهار و پوشش"], blurb: "بار مثبت برای افزایش ماندگاری الیاف و بهبود استحکام کاغذ." } as Product,
  { id: "drilling", name: "نشاسته حفاری", category: "industrial", source: "ذرت", grade: "صنعتی", applications: ["گل حفاری", "کنترل هرزروی", "ویسکوزیته"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "محدود", industries: ["oil"], funcs: ["غلظت‌دهی و بافت‌سازی"], blurb: "گرید پیش‌ژلاتینهٔ مقاوم به شوری برای سیالات حفاری چاه." } as Product,
  { id: "process", name: "نشاسته فرآیندی", category: "industrial", source: "ذرت", grade: "صنعتی", applications: ["چسب کارتن", "کورگیت", "بریکت‌سازی"], packaging: "جامبوبگ ۹۰۰ کیلویی", availability: "موجود", industries: ["adhesive", "process", "textile"], funcs: ["چسبندگی", "آهار و پوشش"], blurb: "گرید اقتصادی صنعتی برای چسب‌های کارتن و کاربردهای حجیم." } as Product,

  // — شربت‌ها و مشتقات —
  { id: "glucose", name: "گلوکز مایع", category: "syrup", source: "ذرت", grade: "خوراکی", applications: ["شیرینی و شکلات", "نوشیدنی", "بستنی"], packaging: "گالن / بشکه ۳۰۰ کیلویی / تانکر", availability: "موجود", industries: ["food", "bakery"], funcs: ["ضد تبلور", "حامل و حجم‌دهنده"], blurb: "شربت گلوکز DE42/62 حاصل از هیدرولیز کنترل‌شدهٔ نشاستهٔ ذرت." } as Product,
  { id: "maltodextrin", name: "مالتودکسترین", category: "syrup", source: "ذرت", grade: "خوراکی", applications: ["نوشیدنی ورزشی", "پودر فوری", "مکمل"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "موجود", industries: ["food", "pharma"], funcs: ["حامل و حجم‌دهنده"], blurb: "پودر سفید با DE پایین؛ حامل و حجم‌دهندهٔ خنثی برای پودرهای فوری." } as Product,
  { id: "dextrin", name: "دکسترین صنعتی", category: "syrup", source: "ذرت", grade: "صنعتی", applications: ["چسب کارتن", "لیبل", "ریخته‌گری"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "موجود", industries: ["adhesive", "process"], funcs: ["چسبندگی"], blurb: "دکسترین سفید و زرد با حلالیت بالا در آب سرد برای صنایع چسب." } as Product,

  // — تخصصی —
  { id: "pregel", name: "نشاسته پیش‌ژلاتینه", category: "special", source: "ذرت", grade: "خوراکی", applications: ["بافت فوری", "پودرهای آماده", "دارو"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "موجود", industries: ["food", "pharma", "process"], funcs: ["غلظت‌دهی و بافت‌سازی", "ژلاسیون و پایدارسازی"], blurb: "حل‌شونده در آب سرد؛ ژلاسیون فوری بدون نیاز به حرارت." } as Product,
  { id: "oxidized", name: "نشاسته اکسیده", category: "special", source: "ذرت", grade: "صنعتی", applications: ["اندود کاغذ", "آهار نساجی", "گچ‌بری"], packaging: "کیسهٔ ۲۵ کیلویی", availability: "موجود", industries: ["paper", "textile"], funcs: ["آهار و پوشش", "چسبندگی"], blurb: "ویسکوزیتهٔ پایین و سفیدی بالا؛ گزینهٔ اصلی اندود سطحی کاغذ." } as Product,
];

/* ————————————————— تابلوی قیمت روز ————————————————— */
export type MarketRow = {
  product: string;
  unit: string;
  status: "up" | "down" | "flat";
  change: string;
  updated: string;
};

export const marketRows: MarketRow[] = [
  { product: "نشاسته ذرت", unit: "کیسهٔ ۲۵ کیلویی", status: "up", change: "+۲٫۴٪", updated: "امروز ۱۱:۳۰" },
  { product: "نشاسته گندم", unit: "کیسهٔ ۲۵ کیلویی", status: "flat", change: "—", updated: "امروز ۱۱:۳۰" },
  { product: "نشاسته سیب‌زمینی", unit: "کیسهٔ ۲۵ کیلویی", status: "up", change: "+۱٫۸٪", updated: "امروز ۱۰:۴۵" },
  { product: "نشاسته تاپیوکا", unit: "تن", status: "up", change: "+۳٫۱٪", updated: "امروز ۱۰:۴۵" },
  { product: "گلوکز مایع", unit: "تن (تانکر)", status: "down", change: "−۱٫۲٪", updated: "امروز ۰۹:۲۰" },
  { product: "مالتودکسترین", unit: "کیسهٔ ۲۵ کیلویی", status: "flat", change: "—", updated: "دیروز ۱۶:۱۰" },
  { product: "نشاسته اصلاح‌شده", unit: "کیسهٔ ۲۵ کیلویی", status: "up", change: "+۰٫۹٪", updated: "امروز ۱۱:۳۰" },
  { product: "نشاسته کاتیونیک", unit: "تن", status: "flat", change: "—", updated: "دیروز ۱۶:۱۰" },
];

/* ————————————————— صنایع ————————————————— */
export type Industry = {
  id: string;
  name: string;
  icon: string;
  desc: string;
  related: string[];
};

export const industries: Industry[] = [
  { id: "food", name: "صنایع غذایی", icon: "bowl", desc: "غلظت‌دهی، بافت‌سازی و پایداری در سس‌ها، سوپ‌ها و غذاهای آماده با گریدهای خوراکی مستند.", related: ["corn", "e1414", "e1422", "e1442", "glucose"] },
  { id: "dairy", name: "لبنیات", icon: "milk", desc: "بافت کِرِمی پایدار در ماست، بستنی و دسرها؛ مقاوم در برابر چرخه‌های انجماد و حرارت.", related: ["e1414", "e1422", "e1442", "e1440"] },
  { id: "bakery", name: "نانوایی و شیرینی", icon: "bread", desc: "بهبود بافت، نرمی و ماندگاری در نان، کیک، بیسکویت و شیرینی‌های صنعتی.", related: ["wheat", "corn", "glucose", "maltodextrin"] },
  { id: "paper", name: "کاغذ و کارتن", icon: "paper", desc: "نشاسته‌های کاتیونیک و اکسیده برای آهار، اندود سطحی و افزایش استحکام کاغذ.", related: ["cationic", "oxidized", "e1451", "dextrin"] },
  { id: "adhesive", name: "چسب و چسب‌سازی", icon: "glue", desc: "دکسترین و گریدهای فرآیندی با چسبندگی و حلالیت تنظیم‌شده برای چسب‌های صنعتی.", related: ["dextrin", "e1400", "process", "wheat"] },
  { id: "pharma", name: "داروسازی", icon: "pill", desc: "گریدهای BP و USP با مستندسازی کامل برای قرص، کپسول و فرمولاسیون‌های دارویی.", related: ["bp", "usp", "pregel"] },
  { id: "textile", name: "نساجی", icon: "shirt", desc: "آهار نخ و پارچه با نشاسته‌های اصلاح‌شده و اکسیده؛ یکنواختی و مقاومت در بافندگی.", related: ["e1403", "process", "oxidized"] },
  { id: "oil", name: "نفت و حفاری", icon: "oil", desc: "نشاستهٔ حفاری مقاوم به شوری برای کنترل هرزروی و تنظیم رئولوژی گل حفاری.", related: ["drilling"] },
  { id: "feed", name: "خوراک دام و طیور", icon: "feed", desc: "منبع انرژی پایدار و چسبندگی پلت در جیرهٔ دام، طیور و آبزیان.", related: ["corn", "wheat", "glucose"] },
  { id: "process", name: "صنایع فرآیندی", icon: "gear", desc: "گریدهای اقتصادی و حجیم برای خطوط فرآیندی پیوسته با نیاز به تأمین پایدار.", related: ["process", "e1401", "pregel", "dextrin"] },
];

/* ————————————————— مزیت‌ها ————————————————— */
export const benefits = [
  { icon: "scale", title: "تأمین عمده و پایدار", desc: "قراردادهای بلندمدت تأمین با تولیدکنندگان داخلی و منابع وارداتی مطمئن؛ بدون وقفه در خط تولید شما." },
  { icon: "layers", title: "تنوع بالای محصولات", desc: "از نشاسته‌های پایه تا ۱۵ گرید اصلاح‌شده، گریدهای دارویی و صنعتی؛ همه در یک مرجع." },
  { icon: "chart", title: "قیمت‌گذاری شفاف و به‌روز", desc: "پایش مستمر بازار و اعلام قیمت روز بر اساس حجم، گرید و شرایط پرداخت." },
  { icon: "chat", title: "مشاوره تخصصی خرید", desc: "کارشناسان فنی ما گرید مناسب کاربرد شما را پیشنهاد می‌دهند، نه صرفاً محصول." },
  { icon: "shield", title: "کنترل و مستندسازی کیفیت", desc: "برگهٔ آنالیز (COA) برای هر محموله و مستندسازی کامل مطابق استانداردهای صنعتی." },
  { icon: "target", title: "تأمین متناسب با نیاز صنایع", desc: "امکان تأمین بر اساس مشخصات فنی اختصاصی مشتری و نمونه‌گیری پیش از سفارش." },
  { icon: "building", title: "پشتیبانی فروش سازمانی", desc: "کارشناس اختصاصی برای مشتریان صنعتی و پیگیری سفارش از ثبت تا تحویل." },
  { icon: "truck", title: "لجستیک و ارسال سراسری", desc: "ارسال از کیسه تا تانکر به سراسر کشور با ناوگان هماهنگ و زمان‌بندی قابل اتکا." },
];

/* ————————————————— آمار (اعداد نهایی در حال تأیید) ————————————————— */
export const stats = [
  { value: "۶", prefix: "", suffix: "", label: "گروه محصول تخصصی", placeholder: false },
  { value: "۳۰", prefix: "+", suffix: "", label: "قلم محصول فعال", placeholder: false },
  { value: "XX", prefix: "+", suffix: "", label: "مشتری صنعتی", placeholder: true },
  { value: "XX", prefix: "+", suffix: "", label: "تن ظرفیت تأمین سالانه", placeholder: true },
];

/* ————————————————— مراحل خرید ————————————————— */
export const steps = [
  { n: "۰۱", title: "انتخاب محصول", desc: "محصول و گرید موردنیاز را از میان دسته‌بندی‌ها پیدا کنید." },
  { n: "۰۲", title: "ثبت درخواست", desc: "حجم، گرید و اطلاعات تماس را در فرم استعلام ثبت کنید." },
  { n: "۰۳", title: "بررسی توسط کارشناس", desc: "کارشناس فروش، موجودی و شرایط تأمین را بررسی و اعلام می‌کند." },
  { n: "۰۴", title: "دریافت پیش‌فاکتور", desc: "پیش‌فاکتور رسمی به‌همراه برگهٔ آنالیز برای شما ارسال می‌شود." },
  { n: "۰۵", title: "تأمین و ارسال", desc: "پس از تأیید، سفارش با زمان‌بندی توافق‌شده ارسال می‌شود." },
];

/* ————————————————— منابع فنی ————————————————— */
export const resources = [
  { icon: "doc", type: "PDF", title: "آنالیز / COA", desc: "برگهٔ آنالیز هر محموله شامل خلوص، رطوبت، pH و بار میکروبی." },
  { icon: "catalog", type: "PDF", title: "کاتالوگ محصولات", desc: "مرور کامل دسته‌بندی‌ها، گریدها و بسته‌بندی‌های قابل تأمین." },
  { icon: "sheet", type: "TDS", title: "مشخصات فنی", desc: "برگهٔ دادهٔ فنی هر محصول برای تیم فنی و تحقیق‌وتوسعهٔ شما." },
  { icon: "sample", type: "FORM", title: "نمونه محصول", desc: "درخواست نمونهٔ آزمایشگاهی به‌همراه COA پیش از ثبت سفارش." },
  { icon: "guide", type: "PDF", title: "راهنمای انتخاب محصول", desc: "چارت تصمیم برای انتخاب گرید مناسب بر اساس کاربرد صنعتی." },
];

/* ————————————————— مرکز دانش ————————————————— */
export const articles = [
  { cat: "راهنمای انتخاب محصول", title: "نشاسته ذرت یا گندم؛ کدام برای کاربرد شما مناسب‌تر است؟", time: "۸ دقیقه", date: "آذر ۱۴۰۴", img: "/images/grains.jpg", imgAlt: "مقایسهٔ نشاسته ذرت و گندم" },
  { cat: "مشخصات فنی", title: "نشاسته اصلاح‌شده چیست و چه کاربردی دارد؟", time: "۱۲ دقیقه", date: "آبان ۱۴۰۴", img: "/images/plant.jpg", imgAlt: "خط تولید نشاستهٔ اصلاح‌شده" },
  { cat: "کاربردهای صنعتی", title: "راهنمای انتخاب نشاسته برای صنایع کاغذ و کارتن", time: "۱۰ دقیقه", date: "آبان ۱۴۰۴", img: "/images/warehouse.jpg", imgAlt: "بسته‌بندی و انبار محصولات صنعتی" },
  { cat: "تحلیل بازار", title: "عوامل مؤثر بر قیمت نشاسته در بازار ایران", time: "۶ دقیقه", date: "مهر ۱۴۰۴", img: "/images/powder-dark.jpg", imgAlt: "پودر نشاسته خالص و تحلیل بازار" },
];

export const articleCats = ["تحلیل بازار", "راهنمای انتخاب محصول", "کاربردهای صنعتی", "مشخصات فنی", "قیمت و روند بازار"];

/* ————————————————— ناوبری و تماس ————————————————— */
export const navLinks = [
  { href: "#catalog", label: "محصولات" },
  { href: "#industries", label: "صنایع و کاربردها" },
  { href: "#resources", label: "منابع فنی" },
  { href: "#knowledge", label: "مقالات و بازار" },
  { href: "#about", label: "درباره ما" },
  { href: "#contact", label: "تماس با ما" },
];

export const contact = {
  phone: "۰۲۱-۹۱۳۰۴۰۰۰",
  mobile: "۰۹۱۲-۲۱۴۰۰۰۰",
  email: "sales@iranstarch.ir",
  address: "تهران، کیلومتر ۲۵ بزرگراه تهران–قم، شهرک صنعتی شمس‌آباد، بلوار صنعت، قطعهٔ ۱۱۴",
  hours: "شنبه تا چهارشنبه ۸ تا ۱۷ — پنجشنبه ۸ تا ۱۳",
};

export const tickerCodes = [
  "E1400", "E1401", "E1402", "E1403", "E1410", "E1412", "E1413", "E1414",
  "E1420", "E1422", "E1440", "E1442", "E1450", "E1451", "E1452", "BP", "USP", "OSA",
];
