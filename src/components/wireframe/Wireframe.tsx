import type { ReactNode, RefObject } from "react";

/* ═════════════════ primitives ═════════════════ */
type W = number | string;
const px = (w?: W) => (w === undefined ? undefined : typeof w === "number" ? `${w}px` : w);

const Bar = ({ w = 120, h = 8, soft = false }: { w?: W; h?: number; soft?: boolean }) => (
  <span className={soft ? "wf-bar2" : "wf-bar"} style={{ width: px(w), height: h }} />
);

const Lines = ({ n = 3, w = [100, 92, 70], h = 7 }: { n?: number; w?: number[]; h?: number }) => (
  <span className="block space-y-1.5">
    {Array.from({ length: n }).map((_, i) => (
      <Bar key={i} w={`${w[i % w.length]}%`} h={h} soft={i === n - 1} />
    ))}
  </span>
);

/** image / media placeholder with X */
const ImgBox = ({ h, label = "تصویر", className = "" }: { h: number; label?: string; className?: string }) => (
  <div className={`wf-dash relative grid place-items-center ${className}`} style={{ height: h }}>
    <svg className="absolute inset-0 w-full h-full text-[#c3c8cd]" preserveAspectRatio="none">
      <path d="M0 0 L100% 0" />
    </svg>
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
      <line x1="0" y1="0" x2="100" y2="40" stroke="#c9ced3" strokeWidth="0.4" />
      <line x1="100" y1="0" x2="0" y2="40" stroke="#c9ced3" strokeWidth="0.4" />
    </svg>
    <span className="relative wf-note bg-white/80 px-2 py-0.5 rounded">{label}</span>
  </div>
);

const IconBox = ({ s = 20 }: { s?: number }) => (
  <span className="wf-icon" style={{ width: s, height: s }}>
    <svg viewBox="0 0 12 12" style={{ width: s * 0.5, height: s * 0.5 }} stroke="currentColor" strokeWidth="1" fill="none">
      <circle cx="6" cy="6" r="4.5" />
    </svg>
  </span>
);

const Btn = ({ label, w, h = 36, tone = 3, s = 11 }: { label?: string; w: W; h?: number; tone?: 1 | 2 | 3; s?: number }) => (
  <span
    className={`inline-flex items-center justify-center rounded ${tone === 1 ? "wf-btn" : tone === 2 ? "wf-btn2" : "wf-btn3"}`}
    style={{ width: px(w), height: h, fontSize: s, fontWeight: 700, paddingInline: 12 }}
  >
    {label}
  </span>
);

const Pill = ({ w, h = 22, tone = 0, label }: { w?: W; h?: number; tone?: 0 | 1 | 2; label?: string }) => (
  <span
    className={`inline-flex items-center justify-center rounded-full ${tone === 0 ? "wf-box" : tone === 1 ? "wf-btn2" : "wf-field"}`}
    style={{ width: label ? undefined : px(w), height: h, fontSize: 10, fontWeight: 700, paddingInline: label ? 10 : 0, color: tone === 1 ? "#fff" : "#6b7076" }}
  >
    {label ?? ""}
  </span>
);

const Dot = ({ tone = "ok" }: { tone?: "ok" | "warn" | "sec" }) => (
  <span
    className="inline-block w-2 h-2 rounded-full"
    style={{ background: tone === "ok" ? "#2F7654" : tone === "warn" ? "#B88732" : "#8B9096" }}
  />
);

/** form field with floating label bar */
const Field = ({ label, h = 40, w = "100%", ph = false }: { label?: string; h?: number; w?: W; ph?: boolean }) => (
  <span className="block" style={{ width: px(w) }}>
    {label && <span className="wf-bar2 block mb-1.5" style={{ width: 64, height: 7 }} />}
    <span className="wf-field flex items-center px-3 gap-2" style={{ height: h }}>
      {ph && <IconBox s={14} />}
      <span className="wf-bar2" style={{ width: "45%", height: 7 }} />
    </span>
  </span>
);

const Trend = ({ dir }: { dir: "up" | "down" | "flat" }) => (
  <span className="inline-flex items-center gap-1.5">
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke={dir === "up" ? "#A62D36" : dir === "down" ? "#2F7654" : "#8B9096"} strokeWidth="1.6" strokeLinecap="round">
      {dir === "up" && <path d="M2 9.5 6 5.5l2 2 2-2.5M8 5h2.5v2.5" />}
      {dir === "down" && <path d="M2 2.5 6 6.5l2-2 2 2.5M8 7H10.5V4.5" />}
      {dir === "flat" && <path d="M2.5 6h7" />}
    </svg>
    <span className="wf-bar" style={{ width: 34, height: 6 }} />
  </span>
);

/* ═════════════════ section shell ═════════════════ */
const Sec = ({
  n,
  title,
  note,
  children,
  tint = false,
  py = 52,
}: {
  n: string;
  title: string;
  note: string;
  children: ReactNode;
  tint?: boolean;
  py?: number;
}) => (
  <section className={`wf-sec relative ${tint ? "wf-body" : ""}`}>
    <div className="wf-head">
      <span className="wf-badge">{n}</span>
      <span className="wf-title">{title}</span>
      <span className="wf-note">— {note}</span>
      <span className="wf-note ms-auto hidden md:inline">مرکز نشاسته ایران • وایرفریم</span>
    </div>
    <div className="px-16" style={{ paddingTop: py, paddingBottom: py }}>
      {children}
    </div>
  </section>
);

/* ═════════════════ 01 header ═════════════════ */
const WfHeader = () => (
  <Sec n="۰۱" title="هدر" note="نوار اطلاعات تماس • ناوبری ۷ آیتمی • جستجو • تماس کارشناس • CTA استعلام" py={0}>
    {/* utility strip */}
    <div className="wf-box flex items-center justify-between px-4" style={{ height: 34 }}>
      <span className="flex items-center gap-6">
        <span className="flex items-center gap-2"><IconBox s={13} /><Bar w={80} h={6} soft /></span>
        <span className="flex items-center gap-2"><IconBox s={13} /><Bar w={110} h={6} soft /></span>
      </span>
      <span className="flex items-center gap-6">
        <Bar w={150} h={6} soft />
        <Bar w={190} h={6} soft />
      </span>
    </div>
    {/* main bar */}
    <div className="flex items-center justify-between py-5">
      <span className="flex items-center gap-3">
        <span className="wf-btn2 grid place-items-center rounded" style={{ width: 44, height: 44 }}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="1.2">
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="3" fill="#fff" stroke="none" />
          </svg>
        </span>
        <span className="block">
          <Bar w={132} h={11} />
          <span className="block mt-2"><Bar w={104} h={6} soft /></span>
        </span>
      </span>
      <span className="flex items-center gap-5">
        {["محصولات", "قیمت روز", "صنایع و کاربردها", "منابع فنی", "مقالات و بازار", "درباره ما", "تماس با ما"].map((t) => (
          <span key={t} className="wf-note" style={{ fontSize: 11.5, color: "#6b7076" }}>{t}</span>
        ))}
      </span>
      <span className="flex items-center gap-2.5">
        <span className="wf-field grid place-items-center" style={{ width: 38, height: 38 }}><IconBox s={15} /></span>
        <Btn label="تماس با کارشناسان" w={150} h={38} />
        <Btn label="استعلام قیمت" w={126} h={38} tone={2} />
      </span>
    </div>
    <div className="wf-note border-t border-[#e5e7ea] py-2" style={{ fontSize: 10 }}>
      بدون ورود / ثبت‌نام • بدون پرداخت آنلاین — چسبان (sticky) با تغییر سایه هنگام اسکرول
    </div>
  </Sec>
);

/* ═════════════════ 02 hero ═════════════════ */
const WfHero = () => (
  <Sec n="۰۲" title="هیرو + ماژول جستجو" note="تیتر اصلی • دو CTA • جستجوی زنده با پیشنهادها • تصویر ماکرو + کارت‌های شناور • نوار کدهای فنی" tint>
    <div className="grid grid-cols-12 gap-10">
      {/* copy */}
      <div className="col-span-7">
        <span className="flex items-center gap-2.5 mb-6">
          <span className="w-2 h-2 rounded-full" style={{ background: "#A62D36" }} />
          <Bar w={230} h={7} soft />
          <Pill label="B2B" h={20} tone={1} />
        </span>
        <span className="block space-y-3 mb-6">
          <Bar w="88%" h={26} />
          <Bar w="72%" h={26} />
        </span>
        <Lines n={3} w={[96, 88, 62]} h={8} />
        <span className="flex items-center gap-4 mt-8">
          <Btn label="استعلام قیمت عمده" w={186} h={46} tone={2} s={12.5} />
          <Btn label="مشاهده محصولات" w={166} h={46} />
        </span>
        {/* search module */}
        <div className="mt-10">
          <Bar w={210} h={8} />
          <div className="wf-field flex items-center gap-3 mt-3 p-1.5" style={{ height: 58 }}>
            <span className="px-2"><IconBox s={18} /></span>
            <span className="wf-bar2" style={{ width: "48%", height: 9 }} />
            <span className="wf-btn ms-auto rounded flex items-center justify-center" style={{ width: 96, height: 46, fontSize: 12, fontWeight: 700 }}>
              جستجو
            </span>
          </div>
          {/* suggestion dropdown */}
          <div className="wf-field border-t-0 mt-0" style={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6 }}>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-2.5 border-b border-[#eceef0] last:border-0">
                <span className="flex items-center gap-2">
                  <Bar w={110 - i * 14} h={7} />
                  <Pill label={["E1442", "USP", "E1422"][i]} h={18} />
                </span>
                <Bar w={44} h={6} soft />
              </div>
            ))}
          </div>
          <span className="flex items-center gap-2 mt-4">
            <Bar w={98} h={6} soft />
            {Array.from({ length: 4 }).map((_, i) => <Pill key={i} w={74} h={26} />)}
          </span>
        </div>
      </div>
      {/* visual */}
      <div className="col-span-5 relative">
        <ImgBox h={430} label="تصویر ماکرو پودر نشاسته (گرید تیره)" />
        <div className="absolute -top-5 -start-6 wf-field p-3" style={{ width: 214 }}>
          <Bar w={90} h={6} soft />
          <div className="flex items-center justify-between mt-3">
            <Bar w={78} h={8} />
            <Pill label="افزایشی" h={20} tone={1} />
          </div>
          <Bar w={120} h={5} soft />
        </div>
        <div className="absolute -bottom-5 -end-5 wf-field p-3 flex items-center gap-3" style={{ width: 236 }}>
          <IconBox s={38} />
          <span className="block">
            <Bar w={40} h={6} />
            <span className="block mt-2"><Bar w={150} h={7} /></span>
          </span>
        </div>
      </div>
    </div>
    {/* ticker */}
    <div className="wf-box flex items-center gap-8 mt-12 px-4" style={{ height: 42 }}>
      <span className="wf-note" style={{ fontSize: 10 }}>نوار متحرک کدهای فنی:</span>
      {["E1400", "E1412", "E1414", "E1422", "E1442", "E1450", "BP", "USP", "OSA"].map((c) => (
        <span key={c} className="wf-note" style={{ fontSize: 11, color: "#7b8086" }}>{c}</span>
      ))}
      <span className="wf-note ms-auto" style={{ fontSize: 10 }}>→ حرکت افقی بی‌پایان</span>
    </div>
  </Sec>
);

/* ═════════════════ 03 finder ═════════════════ */
const WfFinder = () => (
  <Sec n="۰۳" title="کشف سریع محصول" note="جستجو + ۶ فیلتر (نوع، منبع، گرید، صنعت، کاربرد، موجودی) • چیپ فیلتر فعال • شبکهٔ نتایج">
    <div className="flex items-end justify-between mb-8">
      <span className="block">
        <Bar w={190} h={8} />
        <span className="block mt-4"><Bar w={380} h={22} /></span>
      </span>
      <span className="flex items-center gap-2"><Bar w={70} h={8} /><Bar w={110} h={7} soft /></span>
    </div>
    {/* filters */}
    <div className="wf-line bg-[#f7f7f8] p-5">
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-2"><Field ph h={42} /></div>
        {["نوع محصول", "منبع", "گرید", "صنعت", "کاربرد", "وضعیت موجودی"].map((f) => (
          <div key={f}>
            <span className="wf-bar2 block mb-1.5" style={{ width: 58, height: 7 }} />
            <span className="wf-field flex items-center justify-between px-3" style={{ height: 42 }}>
              <span className="wf-note" style={{ fontSize: 10.5 }}>{f} — همه</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#8B9096" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#e5e7ea]">
        <Bar w={78} h={7} soft />
        {Array.from({ length: 4 }).map((_, i) => <Pill key={i} label={`فیلتر ${i + 1}`} h={24} />)}
        <span className="wf-note ms-1 underline" style={{ fontSize: 10.5 }}>حذف همه</span>
      </div>
    </div>
    {/* results */}
    <div className="grid grid-cols-3 gap-4 mt-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="wf-field p-5">
          <div className="flex items-start justify-between mb-3">
            <span className="block">
              <Bar w={130 - i * 8} h={10} />
              <span className="block mt-2"><Bar w={104} h={6} soft /></span>
            </span>
            <Pill w={54} h={22} />
          </div>
          <Lines n={2} w={[100, 78]} h={6} />
          <span className="flex gap-1.5 my-4">
            {Array.from({ length: 3 }).map((__, j) => <Pill key={j} w={62} h={20} />)}
          </span>
          <div className="flex items-center justify-between pt-3 border-t border-[#eceef0]">
            <span className="flex items-center gap-1.5"><Dot tone={i % 3 === 1 ? "warn" : i % 3 === 2 ? "sec" : "ok"} /><Bar w={54} h={6} soft /></span>
            <Btn label="استعلام قیمت" w={104} h={30} tone={3} s={10} />
          </div>
        </div>
      ))}
    </div>
    <div className="wf-note text-center mt-6" style={{ fontSize: 10.5 }}>
      حالت خالی: «محصولی مطابق فیلترهای شما پیدا نشد» + دکمهٔ پاک‌کردن فیلترها و استعلام محصول خاص
    </div>
  </Sec>
);

/* ═════════════════ 04 market ═════════════════ */
const WfMarket = () => (
  <Sec n="۰۴" title="قیمت روز بازار" note="داشبورد کالایی: محصول • واحد • وضعیت بازار • تغییر • بروزرسانی • استعلام — بدون نمایش قیمت عددی" tint>
    <div className="flex items-end justify-between mb-7">
      <span className="block">
        <span className="flex items-center gap-3"><Bar w={92} h={8} /><Pill label="بروزرسانی زنده" h={22} /></span>
        <span className="block mt-4"><Bar w={300} h={22} /></span>
      </span>
      <span className="flex items-center gap-2"><IconBox s={14} /><Bar w={130} h={7} soft /></span>
    </div>
    {/* table */}
    <div className="wf-field overflow-hidden">
      <div className="wf-table-h grid px-5" style={{ gridTemplateColumns: "2fr 1.4fr 1.2fr 0.9fr 1.2fr 1.7fr", paddingBlock: 11 }}>
        <span>محصول</span><span>واحد</span><span>وضعیت بازار</span><span>تغییر</span><span>آخرین بروزرسانی</span><span className="text-left">استعلام</span>
      </div>
      {["نشاسته ذرت", "نشاسته گندم", "نشاسته سیب‌زمینی", "گلوکز مایع", "مالتودکسترین", "نشاسته اصلاح‌شده"].map((p, i) => (
        <div key={p} className="wf-trow grid items-center px-5" style={{ gridTemplateColumns: "2fr 1.4fr 1.2fr 0.9fr 1.2fr 1.7fr", paddingBlock: 13 }}>
          <span className="wf-note" style={{ fontSize: 12, color: "#4a4e54", fontWeight: 700 }}>{p}</span>
          <Bar w={82} h={6} soft />
          <Trend dir={i % 3 === 0 ? "up" : i % 3 === 1 ? "flat" : "down"} />
          <Bar w={38} h={7} />
          <Bar w={74} h={6} soft />
          <span className="flex justify-end"><Btn label="برای قیمت روز استعلام کنید" w={196} h={30} s={10} /></span>
        </div>
      ))}
    </div>
    <div className="flex items-center justify-between mt-6">
      <span style={{ maxWidth: 560 }}><Lines n={2} w={[100, 84]} h={6} /></span>
      <Btn label="استعلام قیمت روز" w={172} h={42} tone={2} s={12} />
    </div>
    <div className="wf-note mt-4" style={{ fontSize: 10 }}>
      در موبایل: هر ردیف به یک کارت عمودی تبدیل می‌شود (نام + وضعیت + واحد/تغییر/زمان + دکمهٔ استعلام تمام‌عرض)
    </div>
  </Sec>
);

/* ═════════════════ 05 categories ═════════════════ */
const WfCategories = () => (
  <Sec n="۰۵" title="دسته‌بندی محصولات" note="۶ گروه با تصویر ماکرو، کد فنی، شمارش محصول و لینک فیلترشده به فایندر">
    <div className="flex items-end justify-between mb-8">
      <Bar w={330} h={22} />
      <span style={{ maxWidth: 300 }}><Lines n={2} w={[100, 88]} h={6} /></span>
    </div>
    <div className="grid grid-cols-3 gap-5">
      {["NATIVE", "E1400–E1452", "BP / USP", "INDUSTRIAL", "DERIVATIVES", "SPECIALTY"].map((code, i) => (
        <div key={code} className="wf-field overflow-hidden">
          <div className="relative">
            <ImgBox h={158} label={`تصویر / ماکرو ${i + 1}`} />
            <span className="absolute top-3 start-3 wf-field px-2 py-0.5" style={{ fontSize: 9.5, color: "#7b8086" }}>{code}</span>
            <span className="absolute bottom-3 start-3 wf-field px-2 py-0.5" style={{ fontSize: 9.5, color: "#7b8086" }}>N محصول</span>
          </div>
          <div className="p-5">
            <Bar w={150} h={11} />
            <span className="block mt-3 mb-4"><Lines n={2} w={[100, 74]} h={6} /></span>
            <span className="flex gap-1.5 mb-4">{Array.from({ length: 3 }).map((_, j) => <Pill key={j} w={54} h={20} />)}</span>
            <span className="flex items-center gap-2"><Bar w={150} h={7} /><IconBox s={12} /></span>
          </div>
        </div>
      ))}
    </div>
  </Sec>
);

/* ═════════════════ 06 featured products ═════════════════ */
const WfFeatured = () => (
  <Sec n="۰۶" title="محصولات منتخب" note="۸ کارت محصول: دسته • نشان موجودی • نام + کد فنی • منبع/گرید • کاربردها • بسته‌بندی • دو اکشن" tint>
    <div className="flex items-end justify-between mb-8">
      <Bar w={280} h={22} />
      <Btn label="مشاهدهٔ همهٔ محصولات" w={176} h={38} />
    </div>
    <div className="grid grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="wf-field p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <Pill w={78} h={20} />
            <span className="flex items-center gap-1.5"><Dot tone={i % 4 === 1 ? "warn" : i % 4 === 3 ? "sec" : "ok"} /><Bar w={40} h={6} soft /></span>
          </div>
          <span className="flex items-center gap-2 mb-2">
            <Bar w={110 - (i % 3) * 12} h={10} />
            {i % 2 === 0 && <Pill label="E1442" h={18} />}
          </span>
          <Bar w={92} h={6} soft />
          <span className="block my-4"><Lines n={2} w={[100, 80]} h={6} /></span>
          <span className="flex gap-1.5 mb-4">{Array.from({ length: 2 }).map((__, j) => <Pill key={j} w={58} h={19} />)}</span>
          <Bar w="70%" h={6} soft />
          <span className="flex gap-2 mt-4 pt-4 border-t border-[#eceef0]">
            <Btn label="مشاهدهٔ محصول" w="50%" h={34} s={10} />
            <Btn label="استعلام قیمت" w="50%" h={34} tone={2} s={10} />
          </span>
        </div>
      ))}
    </div>
    <div className="wf-note mt-5" style={{ fontSize: 10 }}>
      «مشاهدهٔ محصول» → مودال Quick View: مشخصات (منبع، گرید، بسته‌بندی، موجودی) + کاربردها + عملکرد فنی + صنایع مرتبط + CTA استعلام
    </div>
  </Sec>
);

/* ═════════════════ 07 industries ═════════════════ */
const WfIndustries = () => (
  <Sec n="۰۷" title="صنایع و کاربردها" note="اکسپلورر تعاملی: فهرست ۱۰ صنعت (راست) + پنل جزئیات با محصولات مرتبط و دو CTA">
    <div className="flex items-end justify-between mb-8">
      <Bar w={300} h={22} />
      <span style={{ maxWidth: 320 }}><Lines n={2} w={[100, 90]} h={6} /></span>
    </div>
    <div className="grid grid-cols-12 gap-6">
      {/* selector */}
      <div className="col-span-4 grid grid-cols-2 gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className={`flex items-center gap-2.5 rounded px-3.5 ${i === 0 ? "wf-btn" : "wf-field"}`} style={{ height: 46 }}>
            <IconBox s={17} />
            <Bar w={i === 0 ? 74 : 62} h={7} soft={i !== 0} />
          </div>
        ))}
      </div>
      {/* panel */}
      <div className="col-span-8 wf-field p-8 relative">
        <div className="flex items-center gap-4 mb-6">
          <span className="wf-btn grid place-items-center rounded" style={{ width: 52, height: 52 }}><IconBox s={24} /></span>
          <span className="block">
            <Bar w={150} h={13} />
            <span className="block mt-2.5"><Bar w={110} h={6} soft /></span>
          </span>
        </div>
        <span className="block mb-6"><Lines n={3} w={[100, 96, 64]} h={7} /></span>
        <Bar w={150} h={7} />
        <span className="flex flex-wrap gap-2 my-4">
          {Array.from({ length: 5 }).map((_, i) => <Pill key={i} label={["نشاسته ذرت", "E1442", "E1414", "گلوکز مایع", "کاتیونیک"][i]} h={28} />)}
        </span>
        <span className="flex gap-3 mt-6">
          <Btn label="مشاهدهٔ راهکارها" w={150} h={40} tone={2} s={11.5} />
          <Btn label="مشاورهٔ تخصصی این صنعت" w={186} h={40} s={11.5} />
        </span>
      </div>
    </div>
  </Sec>
);

/* ═════════════════ 08 why us ═════════════════ */
const WfWhy = () => (
  <Sec n="۰۸" title="چرا مرکز نشاسته ایران" note="ستون چسبان (معرفی + تصویر انبار) + ۸ ردیف مزیت با آیکون و توضیح — بدون ادعای بی‌پشتوانه">
    <div className="grid grid-cols-12 gap-12">
      <div className="col-span-5">
        <Bar w={70} h={8} />
        <span className="block mt-4 mb-5"><Bar w={250} h={22} /></span>
        <span className="block mb-7"><Lines n={4} w={[100, 96, 90, 66]} h={7} /></span>
        <ImgBox h={230} label="تصویر انبار / لجستیک" />
      </div>
      <div className="col-span-7">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex items-start gap-5 py-5 border-b border-[#e5e7ea] last:border-0">
            <span className="wf-note" style={{ fontSize: 11, width: 22, paddingTop: 4 }}>{`۰${i + 1}`}</span>
            <IconBox s={44} />
            <span className="block flex-1 pt-1">
              <Bar w={150 + (i % 3) * 22} h={10} />
              <span className="block mt-2.5"><Lines n={2} w={[96, 70]} h={6} /></span>
            </span>
          </div>
        ))}
      </div>
    </div>
  </Sec>
);

/* ═════════════════ 09 stats ═════════════════ */
const WfStats = () => (
  <Sec n="۰۹" title="مقیاس و اعتماد" note="۴ ستون (کیفیت، تأمین، مشاوره، لجستیک) + سند COA + آمار با پلیس‌هولدر «+XX» تأییدنشده" tint>
    <div className="grid grid-cols-12 gap-12 items-start">
      <div className="col-span-5">
        <Bar w={92} h={8} />
        <span className="block mt-4 mb-5"><Bar w={230} h={22} /><span className="block mt-2.5"><Bar w={180} h={22} /></span></span>
        <span className="block mb-6"><Lines n={3} w={[100, 94, 62]} h={7} /></span>
        <span className="flex flex-wrap gap-2.5 mb-8">
          {["کیفیت", "تأمین", "مشاوره", "لجستیک"].map((t) => (
            <span key={t} className="wf-field flex items-center gap-2 px-3.5 py-2" style={{ fontSize: 11, fontWeight: 700, color: "#6b7076" }}>
              <IconBox s={14} />{t}
            </span>
          ))}
        </span>
        {/* COA doc */}
        <div className="wf-field p-4" style={{ maxWidth: 260 }}>
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#eceef0]">
            <Bar w={62} h={8} />
            <span className="wf-icon" style={{ width: 26, height: 26, borderRadius: 99 }} />
          </div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between py-1.5">
              <Bar w={44} h={6} soft />
              <span className="wf-bar2" style={{ width: 84, height: 6, borderRadius: 99 }} />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-7 grid grid-cols-2 gap-5">
        {["۶", "۳۰", "XX", "XX"].map((v, i) => (
          <div key={i} className="wf-field p-8">
            <span className="flex items-center gap-1.5">
              {i > 1 && <span className="wf-btn2 grid place-items-center rounded" style={{ width: 20, height: 20, fontSize: 12 }}>+</span>}
              <span className="wf-bar" style={{ width: 62, height: 34, borderRadius: 3 }} />
            </span>
            <div className="flex items-center gap-2 mt-5">
              <Bar w={130} h={7} />
              {v === "XX" && <Pill label="عدد نهایی در حال تأیید" h={20} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  </Sec>
);

/* ═════════════════ 10 steps ═════════════════ */
const WfSteps = () => (
  <Sec n="۱۰" title="فرایند تأمین" note="۵ مرحله با خط اتصال نقطه‌چین: انتخاب محصول → ثبت درخواست → بررسی کارشناس → پیش‌فاکتور → تأمین و ارسال">
    <Bar w={300} h={22} />
    <div className="relative mt-10">
      <div className="absolute top-8 start-16 end-16 border-t-2 border-dashed border-[#c9cdd2]" />
      <div className="grid grid-cols-5 gap-5">
        {["۰۱", "۰۲", "۰۳", "۰۴", "۰۵"].map((n) => (
          <div key={n} className="wf-field p-5 relative">
            <span className="wf-btn grid place-items-center rounded relative z-10" style={{ width: 62, height: 62, fontSize: 17, fontWeight: 800 }}>{n}</span>
            <span className="block mt-5 mb-2.5"><Bar w={92} h={9} /></span>
            <Lines n={3} w={[100, 92, 70]} h={6} />
          </div>
        ))}
      </div>
    </div>
  </Sec>
);

/* ═════════════════ 11 resources ═════════════════ */
const WfResources = () => (
  <Sec n="۱۱" title="منابع فنی" note="۵ کارت مستندات: COA • کاتالوگ • TDS • نمونه محصول • راهنمای انتخاب — با برچسب نوع فایل" tint>
    <div className="flex items-end justify-between mb-8">
      <Bar w={380} h={22} />
      <Btn label="درخواست مستندات و نمونه" w={196} h={40} tone={2} s={11.5} />
    </div>
    <div className="grid grid-cols-5 gap-4">
      {["PDF", "PDF", "TDS", "FORM", "PDF"].map((t) => (
        <div key={t} className="wf-field p-5">
          <div className="flex items-center justify-between mb-5">
            <IconBox s={42} />
            <span className="wf-field px-2 py-0.5" style={{ fontSize: 9, color: "#7b8086" }}>{t}</span>
          </div>
          <Bar w={110} h={9} />
          <span className="block my-3"><Lines n={3} w={[100, 94, 76]} h={6} /></span>
          <span className="flex items-center gap-1.5"><Bar w={34} h={7} /><IconBox s={11} /></span>
        </div>
      ))}
    </div>
  </Sec>
);

/* ═════════════════ 12 knowledge ═════════════════ */
const WfKnowledge = () => (
  <Sec n="۱۲" title="مرکز دانش و بازار" note="چیپ دسته‌بندی محتوا + ۴ کارت مقالهٔ ادیتوریال (دسته، تیتر، تاریخ، زمان مطالعه)">
    <div className="flex items-end justify-between mb-8">
      <Bar w={280} h={22} />
      <span className="flex flex-wrap gap-2">{Array.from({ length: 5 }).map((_, i) => <Pill key={i} w={92} h={26} />)}</span>
    </div>
    <div className="grid grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="wf-field p-5 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <Pill w={98} h={20} />
            <span className="wf-note" style={{ fontSize: 11 }}>۰{i + 1}</span>
          </div>
          <span className="flex-1 space-y-2">
            <Bar w="100%" h={9} />
            <Bar w="92%" h={9} />
            <Bar w="64%" h={9} />
          </span>
          <div className="flex items-center justify-between pt-4 mt-6 border-t border-[#eceef0]">
            <Bar w={54} h={6} soft />
            <Bar w={62} h={6} soft />
          </div>
        </div>
      ))}
    </div>
  </Sec>
);

/* ═════════════════ 13 rfq ═════════════════ */
const WfRfq = () => (
  <Sec n="۱۳" title="CTA نهایی — درخواست پیش‌فاکتور (تبدیل اصلی)" note="بخش تیره با تصویر پس‌زمینهٔ محو • مزیت‌ها • فرم RFQ با اعتبارسنجی و حالت موفقیت">
    <div className="grid grid-cols-12 gap-12 items-start">
      <div className="col-span-5">
        <Bar w={150} h={8} />
        <span className="block mt-4 mb-6"><Bar w="94%" h={24} /><span className="block mt-2.5"><Bar w="70%" h={24} /></span></span>
        <span className="block mb-8"><Lines n={4} w={[100, 96, 88, 60]} h={7} /></span>
        <span className="block space-y-3 mb-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="wf-icon" style={{ width: 22, height: 22, borderRadius: 99, border: "1px solid #2F7654", background: "#EAF2EE", color: "#2F7654" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m5 13 4 4 10-11" /></svg>
              </span>
              <Bar w={190 - i * 24} h={7} />
            </span>
          ))}
        </span>
        <span className="flex gap-3">
          <Btn label="۰۲۱-۹۱۳۰۴۰۰۰" w={150} h={40} />
          <Btn label="sales@…​" w={150} h={40} />
        </span>
      </div>
      {/* form */}
      <div className="col-span-7 wf-field p-8">
        <div className="flex items-start justify-between pb-5 mb-6 border-b border-[#eceef0]">
          <span className="block">
            <Bar w={150} h={12} />
            <span className="block mt-2.5"><Bar w={220} h={7} soft /></span>
          </span>
          <Pill label="RFQ" h={22} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="نام" />
          <Field label="شرکت" />
          <Field label="شمارهٔ تماس *" />
          <Field label="محصول موردنظر *" />
        </div>
        <div className="mt-5">
          <span className="wf-bar2 block mb-2" style={{ width: 120, height: 7 }} />
          <span className="flex flex-wrap gap-2">
            {["زیر ۱ تن", "۱ تا ۵ تن", "۵ تا ۲۰ تن", "بیش از ۲۰ تن", "نامشخص"].map((v, i) => (
              <Pill key={v} label={v} h={30} tone={i === 1 ? 1 : 2} />
            ))}
          </span>
        </div>
        <div className="mt-5">
          <span className="wf-bar2 block mb-2" style={{ width: 92, height: 7 }} />
          <span className="wf-field block" style={{ height: 84 }} />
        </div>
        <div className="flex items-center justify-between mt-6">
          <Btn label="درخواست پیش‌فاکتور" w={190} h={44} tone={2} s={12.5} />
          <span className="flex items-center gap-2"><Bar w={44} h={7} soft /><span className="wf-bar2 block" style={{ width: 1, height: 14 }} /><Bar w={110} h={7} soft /></span>
        </div>
      </div>
    </div>
    {/* success state */}
    <div className="wf-dash mt-6 p-6 flex items-center gap-5">
      <span className="wf-icon" style={{ width: 54, height: 54, borderRadius: 99, border: "1.5px solid #2F7654", background: "#EAF2EE", color: "#2F7654" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="m5 13 4 4 10-11" /></svg>
      </span>
      <span className="block">
        <Bar w={150} h={11} />
        <span className="block mt-2.5"><Lines n={2} w={[100, 72]} h={6} /></span>
      </span>
      <span className="wf-note ms-auto" style={{ fontSize: 10 }}>حالت موفقیت پس از ارسال فرم (تیک متحرک + CTA ثبت درخواست جدید)</span>
    </div>
  </Sec>
);

/* ═════════════════ 14 footer ═════════════════ */
const WfFooter = () => (
  <Sec n="۱۴" title="فوتر" note="برند + ۶ ستون (محصولات، صنایع، منابع، بازار، درباره، تماس) • شبکه‌های اجتماعی • نوار پایانی" tint>
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-4">
        <span className="flex items-center gap-3 mb-5">
          <span className="wf-btn2 grid place-items-center rounded" style={{ width: 42, height: 42 }} />
          <span className="block"><Bar w={126} h={10} /><span className="block mt-2"><Bar w={100} h={6} soft /></span></span>
        </span>
        <Lines n={3} w={[100, 92, 68]} h={6} />
        <span className="flex gap-2 mt-5">{Array.from({ length: 4 }).map((_, i) => <span key={i} className="wf-field" style={{ width: 34, height: 34 }} />)}</span>
      </div>
      {[
        "col-span-2",
        "col-span-2",
        "col-span-2",
      ].map((span, col) => (
        <div key={col} className={span}>
          <Bar w={90} h={9} />
          <span className="block mt-4 space-y-2.5">
            {Array.from({ length: 6 }).map((_, i) => <Bar key={i} w={100 - i * 10} h={6} soft />)}
          </span>
        </div>
      ))}
      <div className="col-span-3">
        <Bar w={80} h={9} />
        <span className="block mt-4 space-y-3">
          <span className="flex items-center gap-2"><IconBox s={13} /><Bar w={130} h={6} soft /></span>
          <span className="flex items-center gap-2"><IconBox s={13} /><Bar w={90} h={6} soft /></span>
          <span className="flex items-center gap-2"><IconBox s={13} /><Bar w={110} h={6} soft /></span>
          <span className="flex items-center gap-2"><IconBox s={13} /><Bar w={100} h={6} soft /></span>
        </span>
      </div>
    </div>
    <div className="flex items-center justify-between border-t border-[#d8dbde] mt-10 pt-5">
      <Bar w={200} h={6} soft />
      <Bar w={300} h={6} soft />
    </div>
  </Sec>
);

/* ═════════════════ mobile strip ═════════════════ */
const Phone = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="shrink-0" style={{ width: 250 }}>
    <p className="wf-note mb-2 text-center" style={{ fontSize: 10.5 }}>{title}</p>
    <div className="wf-line bg-white mx-auto overflow-hidden" style={{ width: 218, height: 420, borderRadius: 18, borderWidth: 1.5 }}>
      {children}
    </div>
  </div>
);

const WfMobile = () => (
  <Sec n="۱۵" title="رفتار موبایل" note="هدر فشرده • نوار چسبان استعلام • کارت‌بندی نتایج و قیمت • فرم تک‌ستونه">
    <div className="flex gap-6 overflow-x-auto pb-4">
      <Phone title="هیرو + جستجو">
        <div className="p-3">
          <div className="flex items-center justify-between mb-4">
            <span className="wf-btn2" style={{ width: 28, height: 28 }} />
            <span className="wf-bar2" style={{ width: 40, height: 6 }} />
            <span className="wf-bar" style={{ width: 20, height: 12 }} />
          </div>
          <span className="block space-y-2 mb-3"><Bar w="90%" h={13} /><Bar w="64%" h={13} /></span>
          <Lines n={3} w={[100, 92, 60]} h={6} />
          <span className="wf-field flex items-center gap-2 mt-4 px-2" style={{ height: 40 }}><IconBox s={13} /><span className="wf-bar2" style={{ width: "50%", height: 7 }} /></span>
          <span className="flex gap-2 mt-3"><Btn label="استعلام" w="48%" h={36} tone={2} s={10} /><Btn label="محصولات" w="48%" h={36} s={10} /></span>
          <ImgBox h={140} label="تصویر" />
        </div>
        <div className="wf-btn flex items-center justify-between px-3 mt-2" style={{ height: 46 }}>
          <span className="wf-field" style={{ width: 32, height: 32 }} />
          <span style={{ fontSize: 10, fontWeight: 700 }}>استعلام قیمت و پیش‌فاکتور</span>
        </div>
      </Phone>
      <Phone title="فیلتر + کارت محصول">
        <div className="p-3">
          <div className="wf-field flex items-center justify-between px-2 mb-2.5" style={{ height: 34 }}>
            <span className="wf-note" style={{ fontSize: 9.5 }}>فیلترها</span>
            <IconBox s={12} />
          </div>
          <div className="flex gap-1.5 mb-3">{Array.from({ length: 3 }).map((_, i) => <Pill key={i} w={54} h={22} />)}</div>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="wf-field p-2.5 mb-2">
              <div className="flex items-center justify-between mb-2"><Bar w={92} h={8} /><Pill w={42} h={18} /></div>
              <Lines n={2} w={[100, 66]} h={5} />
              <span className="flex gap-2 mt-2.5"><Btn label="مشاهده" w="48%" h={26} s={9} /><Btn label="استعلام" w="48%" h={26} tone={2} s={9} /></span>
            </div>
          ))}
        </div>
      </Phone>
      <Phone title="تابلوی قیمت (کارت)">
        <div className="p-3">
          <Bar w={120} h={10} />
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="wf-field p-3 mb-2">
              <div className="flex items-center justify-between mb-2">
                <Bar w={88} h={8} />
                <span className="flex items-center gap-1.5"><Trend dir={i % 2 ? "flat" : "up"} /></span>
              </div>
              <div className="flex items-center justify-between"><Bar w={60} h={5} soft /><Bar w={48} h={5} soft /></div>
              <Btn label="استعلام قیمت روز" w="100%" h={28} s={9.5} />
            </div>
          ))}
        </div>
      </Phone>
      <Phone title="فرم پیش‌فاکتور">
        <div className="p-3">
          <Bar w={110} h={11} />
          <span className="block mt-3 mb-3"><Lines n={3} w={[100, 90, 62]} h={6} /></span>
          <div className="space-y-2.5">
            <Field h={36} /><Field h={36} /><Field h={36} />
          </div>
          <span className="flex flex-wrap gap-1.5 mt-3">{Array.from({ length: 3 }).map((_, i) => <Pill key={i} w={56} h={24} />)}</span>
          <span className="wf-field block mt-3" style={{ height: 62 }} />
          <Btn label="درخواست پیش‌فاکتور" w="100%" h={40} tone={2} s={11} />
        </div>
      </Phone>
    </div>
  </Sec>
);

/* ═════════════════ legend + cover ═════════════════ */
const WfLegend = () => (
  <section className="wf-sec px-16 py-10">
    <div className="flex items-center gap-3 mb-6">
      <span className="wf-badge">راهنما</span>
      <span className="wf-title">علائم وایرفریم</span>
    </div>
    <div className="grid grid-cols-4 gap-6">
      {[
        { el: <span className="wf-bar" style={{ width: 70, height: 9 }} />, t: "متن / تیتر (Skeleton)" },
        { el: <span className="wf-dash" style={{ width: 70, height: 34 }} />, t: "جایگاه تصویر / عکس صنعتی" },
        { el: <span className="wf-icon" style={{ width: 30, height: 30 }} />, t: "آیکون (SVG خطی)" },
        { el: <Btn label="CTA" w={70} h={30} tone={2} s={10} />, t: "دکمهٔ اصلی / تبدیل" },
        { el: <span className="flex items-center gap-1.5"><Dot /><Dot tone="warn" /><Dot tone="sec" /></span>, t: "وضعیت موجودی: موجود / محدود / سفارشی" },
        { el: <Trend dir="up" />, t: "شاخص بازار: افزایشی / کاهشی / ثابت" },
        { el: <span className="wf-dash" style={{ width: 70, height: 26, background: "#EAF2EE", borderColor: "#2F7654" }} />, t: "بخش تأیید / حالت موفقیت" },
        { el: <span className="wf-badge">۰۱</span>, t: "شمارهٔ بخش برای مرجع‌دهی در جلسه" },
      ].map((l, i) => (
        <div key={i} className="flex items-center gap-3">
          {l.el}
          <span className="wf-note" style={{ fontSize: 10.5 }}>{l.t}</span>
        </div>
      ))}
    </div>
  </section>
);

const Cover = () => (
  <div className="wf-cover px-16 py-12 flex items-end justify-between">
    <div>
      <p style={{ fontSize: 10, letterSpacing: "0.35em", color: "#A62D36", fontWeight: 700 }}>WIREFRAME — V1.0</p>
      <h1 className="mt-3" style={{ fontSize: 30, fontWeight: 900, color: "#F7F5F1", lineHeight: 1.5 }}>
        وایرفریم صفحهٔ اصلی — مرکز نشاسته ایران
      </h1>
      <p className="mt-3" style={{ fontSize: 12.5, color: "rgba(247,245,241,0.55)", lineHeight: 2 }}>
        ساختار ۱۴ بخشی + رفتار موبایل • جریان تبدیل: کشف محصول → قیمت روز → اعتبارسنجی تأمین‌کننده → استعلام و پیش‌فاکتور
      </p>
    </div>
    <div className="text-left shrink-0" style={{ fontSize: 11, color: "rgba(247,245,241,0.5)", lineHeight: 2.2 }} dir="ltr">
      <p>Desktop 1440px • RTL</p>
      <p>Vazirmatn / Persian UI</p>
      <p>No login • No checkout</p>
    </div>
  </div>
);

/* ═════════════════ sheet ═════════════════ */
export default function WireframeSheet({ sheetRef }: { sheetRef: RefObject<HTMLDivElement | null> }) {
  return (
    <div ref={sheetRef} className="wf-sheet" style={{ width: 1440 }}>
      <Cover />
      <WfHeader />
      <WfHero />
      <WfFinder />
      <WfMarket />
      <WfCategories />
      <WfFeatured />
      <WfIndustries />
      <WfWhy />
      <WfStats />
      <WfSteps />
      <WfResources />
      <WfKnowledge />
      <WfRfq />
      <WfFooter />
      <WfMobile />
      <WfLegend />
      <div className="px-16 py-6 flex items-center justify-between" style={{ background: "#FAFAFB" }}>
        <span className="wf-note" style={{ fontSize: 10.5 }}>
          © مرکز نشاسته ایران — سند وایرفریم برای ارائهٔ آژانسی • اعداد «+XX» نیازمند تأیید نهایی مشتری
        </span>
        <span className="wf-note" style={{ fontSize: 10.5 }}>پایان سند</span>
      </div>
    </div>
  );
}
