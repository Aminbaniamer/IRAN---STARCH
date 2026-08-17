import type { ReactNode } from "react";
import PdfWireframe from "./PdfWireframe";
import PreviewHero from "./PreviewHero";
import PreviewMarket from "./PreviewMarket";
import PreviewForm from "./PreviewForm";

/* ═════════════════ primitives ═════════════════ */
const Sheet = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="sheet-print bg-white" style={{ width: 820, padding: "36px 44px 30px" }}>
    <header
      className="flex items-center justify-between pb-3 mb-6"
      style={{ borderBottom: "1px solid #E3E1DD" }}
    >
      <span className="flex items-center gap-2">
        <span
          className="text-white rounded px-2 py-0.5"
          style={{ background: "#7A2028", fontSize: 10, fontWeight: 700 }}
        >
          {title}
        </span>
      </span>
      <span style={{ fontSize: 10, color: "#A3A19C" }}>
        مرکز نشاسته ایران — گزارش UX، وایرفریم و رابط کاربری
      </span>
    </header>
    {children}
    <footer
      className="flex items-center justify-between pt-3 mt-7"
      style={{ borderTop: "1px solid #E3E1DD", fontSize: 9.5, color: "#A3A19C" }}
    >
      <span>سند ارائه — نسخهٔ ۱٫۰</span>
      <span>محرمانه</span>
    </footer>
  </section>
);

const H1 = ({ children }: { children: ReactNode }) => (
  <h1 className="mb-4" style={{ fontSize: 21, fontWeight: 900, color: "#17191C", lineHeight: 1.55 }}>
    {children}
  </h1>
);
const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="mb-2.5" style={{ fontSize: 14.5, fontWeight: 800, color: "#17191C" }}>
    {children}
  </h2>
);
const P = ({ children }: { children: ReactNode }) => (
  <p className="mb-3" style={{ fontSize: 11.5, lineHeight: 2.1, color: "#4A4E54" }}>
    {children}
  </p>
);
const UL = ({ items }: { items: ReactNode[] }) => (
  <ul className="mb-4 space-y-1.5">
    {items.map((t, i) => (
      <li key={i} className="flex gap-2.5" style={{ fontSize: 11, lineHeight: 1.9, color: "#4A4E54" }}>
        <span style={{ width: 5, height: 5, borderRadius: 99, background: "#7A2028", marginTop: 7, flexShrink: 0 }} />
        <span>{t}</span>
      </li>
    ))}
  </ul>
);

const Flow = () => (
  <div
    className="flex items-center justify-between rounded px-4 py-3 mb-5"
    style={{ background: "#F7F5F1", border: "1px solid #E3E1DD" }}
  >
    {["فهم", "کشف", "اعتبارسنجی", "اعتماد", "تبدیل (RFQ)"].map((s, i) => (
      <span key={s} className="flex items-center gap-2" style={{ fontSize: 11, fontWeight: 700, color: "#62666B" }}>
        {i > 0 && (
          <span style={{ color: "#C5C2BD", marginInlineStart: 8 }}>
            <svg width="14" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </span>
        )}
        <span>{s}</span>
      </span>
    ))}
  </div>
);

const Sev = ({ k }: { k: string }) => (
  <span
    className="rounded"
    style={{
      background: k === "S1" ? "#7A2028" : k === "S2" ? "#B88732" : "#EDEEF0",
      color: k === "S3" ? "#62666B" : "#fff",
      fontSize: 9,
      fontWeight: 700,
      padding: "1px 6px",
    }}
  >
    {k}
  </span>
);

/* ————— tiny wireframe thumbnails used in the report ————— */
/* ═════════════════ full document ═════════════════ */
export default function PdfReport() {
  return (
    <div style={{ color: "#181818", fontFamily: "Vazirmatn, Tahoma, sans-serif" }}>
      {/* ═══ 1 — cover ═══ */}
      <Sheet title="جلد">
        <div style={{ borderRadius: 12, background: "#17191C", padding: "40px 34px", marginBottom: 26 }}>
          <p style={{ fontSize: 9.5, letterSpacing: "0.3em", color: "#A62D36", fontWeight: 700 }}>
            UX & UI — PRESENTATION FOR IRAN STARCH CENTER
          </p>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: "#F7F5F1", lineHeight: 1.7, marginTop: 14 }}>
            مرکز نشاسته ایران
            <br />
            گزارش تجربهٔ کاربر، وایرفریم و رابط کاربری
          </h1>
          <p style={{ fontSize: 11, color: "rgba(247,245,241,0.6)", lineHeight: 2.1, marginTop: 14 }}>
            بازبینی کارشناسی صفحهٔ اصلی • طراحی وایرفریم • اجرای UI نهایی
          </p>
        </div>

        <H2>فهرست سند</H2>
        <ul style={{ fontSize: 11.5, lineHeight: 2.6 }}>
          <li>۰۱ — گزارش تجربهٔ کاربر (مختصر، بدون مصاحبهٔ کاربر)</li>
          <li>۰۲ — وایرفریم صفحهٔ اصلی (۱۴ بخش + رفتار موبایل)</li>
          <li>۰۳ — رابط کاربری نهایی و رعایت الزامات</li>
        </ul>

        <H2>روش‌شناسی</H2>
        <P>
          این گزارش <b>بدون مصاحبهٔ کاربر و بدون تست کاربردپذیری</b> و صرفاً بر پایهٔ بازبینی هیوریستیک
          (اصول ۱۰گانهٔ نیلسن)، راه‌رفت شناختی مسیر «استعلام و پیش‌فاکتور» و کنترل دسترس‌پذیری تهیه شده
          است. یافته‌ها، «فرضیه‌های قابل آزمون» هستند و پیش از نتیجه‌گیری نهایی به دادهٔ تحلیلی نیاز
          دارند.
        </P>
        <P>
          مسیر اصلی تبدیل، کشف محصول → ارزشیابی وضعیت بازار → اعتبارسنجی تأمین‌کننده → ثبت درخواست
          استعلام (RFQ) است:
        </P>
        <Flow />

        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ flex: 1, background: "#FBF4F5", border: "1px solid #EBD3D6", borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 10.5, fontWeight: 800, color: "#7A2028", marginBottom: 5 }}>امتیاز کلی هیوریستیک</p>
            <p style={{ fontSize: 22, fontWeight: 900, color: "#17191C" }}>3.9 / 5</p>
            <P>ثبات، شفافیت بصری و پیشگیری از خطا، نقاط قوت اصلی هستند.</P>
          </div>
          <div style={{ flex: 1, background: "#FBF4F5", border: "1px solid #EBD3D6", borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 10.5, fontWeight: 800, color: "#7A2028", marginBottom: 5 }}>یافته‌ها</p>
            <p style={{ fontSize: 22, fontWeight: 900, color: "#17191C" }}>۱۰</p>
            <P>۰ بحرانی • ۳ بالا • ۵ متوسط • ۲ جزئی</P>
          </div>
        </div>

        <div style={{ marginTop: 20, padding: "12px 14px", borderRadius: 8, background: "#F7F5F1", border: "1px solid #E3E1DD" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#17191C", marginBottom: 4 }}>سه اقدام با بیشترین اثر بر تبدیل</p>
          <UL
            items={[
              "سبد استعلام چندمحصولی در فرم RFQ (F2) — خرید صنعتی معمولاً چند گرید را هم‌زمان مقایسه می‌کند.",
              "حفظ وضعیت جستجو/فیلتر در URL برای اشتراک‌گذاری نتیجه با همکاران (F6).",
              "وقفهٔ تابلوی قیمت روز با «بازهٔ تقریبی» در آزمون A/B (F4).",
            ]}
          />
        </div>
      </Sheet>

      {/* ═══ 2 — users + journey ═══ */}
      <Sheet title="گزارش UX — کاربران و سفر خرید">
        <H1>۱. کاربران هدف و سفر خرید</H1>
        <P>
          چهار نقش اصلی خرید صنعتی را پوشش می‌دهیم. این دسته‌بندی بر پایهٔ ساختار رایج خرید مواد اولیه
          نوشته شده و در فاز پژوهش با مصاحبه تأیید خواهد شد.
        </P>
        <div
          className="grid grid-cols-4 gap-2.5"
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 18 }}
        >
          {[
            { t: "مدیر خرید", d: "تأمین منظم، بدون توقف خط؛ نگران پایداری تأمین‌کننده.", s: "قیمت، ظرفیت، زمان تحویل" },
            { t: "مدیر فنی / R&D", d: "انتخاب گرید درست برای فرمولاسیون؛ نیازمند مدرک فنی.", s: "TDS، COA، نمونه" },
            { t: "بازرگانی", d: "مقایسهٔ سریع چند گرید و چند منبع.", s: "وضعیت بازار، موجودی" },
            { t: "تولیدکنندهٔ کوچک", d: "خرید پراکنده و فوری؛ واژگان فنی مانع می‌شود.", s: "حداقل سفارش، ارسال" },
          ].map((u) => (
            <div key={u.t} style={{ border: "1px solid #E3E1DD", borderRadius: 8, padding: 11 }}>
              <p style={{ fontSize: 11.5, fontWeight: 800, color: "#17191C", marginBottom: 4 }}>{u.t}</p>
              <p style={{ fontSize: 10, lineHeight: 1.8, color: "#4A4E54", marginBottom: 6 }}>{u.d}</p>
              <p style={{ fontSize: 9.5, color: "#7A2028", fontWeight: 700 }}>نیاز: {u.s}</p>
            </div>
          ))}
        </div>

        <H2>معماری اطلاعات</H2>
        <P>
          چیدمان با منطق «محصول به‌مثابه واحد اصلی» و «صنعت به‌مثابه سناریوی کاربرد» ساخته شده است؛ هر
          دو محور به یک مسیر استعلام ختم می‌شوند تا سردرگمی ایجاد نشود.
        </P>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8, marginBottom: 16 }}>
          {[
            { t: "هدر", sub: "ناوبری ۷ موردی + CTA" },
            { t: "هیرو + جستجو", sub: "جستجوی زنده و پیشنهادها" },
            { t: "فایندر محصول", sub: "۶ فیلتر ترکیبی" },
            { t: "قیمت روز", sub: "داشبورد کالایی" },
            { t: "کاتالوگ و صنایع", sub: "گرید + کاربرد" },
          ].map((b) => (
            <div key={b.t} style={{ border: "1px solid #E3E1DD", borderTop: "3px solid #7A2028", borderRadius: 6, padding: 9 }}>
              <p style={{ fontSize: 10.5, fontWeight: 800, color: "#17191C" }}>{b.t}</p>
              <p style={{ fontSize: 9.5, color: "#8B9096", marginTop: 3 }}>{b.sub}</p>
            </div>
          ))}
        </div>

        <H2>تابلوی قیمت روز</H2>
        <P>
          قیمت واحد به‌صورت عمومی نمایش داده نمی‌شود؛ فقط «وضعیت بازار» (افزایشی / کاهشی / ثابت) و
          زمان بروزرسانی اعلام می‌گردد و عدد نهایی از مسیر استعلام داده می‌شود. این رویه‌ی تجاری آگاهانه
          است، اما از منظر UX نیاز به همراهی دارد.
        </P>
        <UL
          items={[
            "خلاصهٔ وضعیت بازار در بالای تابلو پیشنهاد می‌شود (مثلاً «۵ افزایش، ۱ کاهش، ۲ ثابت»).",
            "در نسخهٔ بعدی، «بازهٔ تقریبی» به‌صورت تست A/B بررسی می‌شود.",
            "اشتراک‌گذاری تابلو با URL ثابت، اعتماد تیم خرید را بالا می‌برد.",
          ]}
        />
      </Sheet>

      {/* ═══ 3 — findings ═══ */}
      <Sheet title="گزارش UX — یافته‌های اولویت‌بندی‌شده">
        <H1>۲. یافته‌های اصلی و توصیه</H1>
        <P>
          یافته‌ها بر اساس شدت اثر بر مسیر «استعلام و پیش‌فاکتور» اولویت‌بندی شده‌اند. شدت: S1 بالا،
          S2 متوسط، S3 جزئی.
        </P>

        <div style={{ border: "1px solid #E3E1DD", borderRadius: 8, overflow: "hidden", marginBottom: 16 }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#F7F5F1" }}>
                {["کد", "شدت", "بخش", "یافته", "توصیه"].map((h) => (
                  <th key={h} style={{ fontSize: 9.5, fontWeight: 700, color: "#62666B", textAlign: "right", padding: "7px 9px" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["F1", "S1", "قیمت روز", "نبود عدد قیمت، ساخت بودجهٔ اولیه را برای خریدار دشوار می‌کند.", "تست «بازهٔ تقریبی» + وعدهٔ پاسخ در ۲ ساعت."],
                ["F2", "S1", "فرم RFQ", "فرم تک‌انتخابی؛ خرید صنعتی چند گرید را هم‌زمان می‌خواهد.", "سبد استعلام چندمحصولی + ویرایش فهرست."],
                ["F3", "S1", "بعد از ارسال", "مسیر پس از ثبت درخواست خاموش می‌شود.", "صفحهٔ تأیید با محصولات مرتبط و COA."],
                ["F4", "S2", "فایندر", "وضعیت فیلتر در URL نیست؛ Refresh نتیجه را پاک می‌کند.", "سینک query-string + دکمهٔ کپی لینک."],
                ["F5", "S2", "اعتماد", "بخش «درباره ما» سابقه و مستندات واقعی شرکت را نشان نمی‌دهد.", "بلوک اعتبار با تصویر واقعی انبار و آزمایشگاه."],
                ["F6", "S2", "Quick View", "کشیدن URL مستقل در محصول کار نمی‌کند.", "URL پایدار برای هر محصول و اشتراک."],
                ["F7", "S2", "دسترس‌پذیری", "کنتراست متن ثانویه روی زمینهٔ تیره پایین است.", "افزایش شفافیت متن ثانویه به ۷۰٪."],
                ["F8", "S2", "بارگذاری", "نبود Skeleton؛ در اینترنت ضعیف، صفحه بی‌پاسخ است.", "Skeleton برای جستجو و جدول قیمت."],
                ["F9", "S3", "کارت محصول", "برچسب «سفارشی» بدون توضیح زمان تأمین است.", "Tooltip با مدت تأمین و حداقل سفارش."],
                ["F10", "S3", "واژگان", "کدهای E برای واکنش عاطفی کاربر بی‌معناست.", "توضیح یک‌خطی فارسی کنار هر کد فنی."],
              ].map((r) => (
                <tr key={r[0]} style={{ background: "#fff", borderBottom: "1px solid #EDEBE7" }}>
                  <td style={{ fontSize: 10, fontWeight: 700, color: "#17191C", padding: "7px 9px" }}>{r[0]}</td>
                  <td style={{ padding: "7px 9px" }}><Sev k={r[1]} /></td>
                  <td style={{ fontSize: 10, color: "#4A4E54", padding: "7px 9px" }}>{r[2]}</td>
                  <td style={{ fontSize: 10, color: "#4A4E54", padding: "7px 9px" }}>{r[3]}</td>
                  <td style={{ fontSize: 9.5, color: "#7A2028", padding: "7px 9px" }}>{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>نقشهٔ راه پیشنهادی</H2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
          {[
            { t: "اسپرینت ۱ — بهبود سریع", items: ["کوتاه‌کردن فرم RFQ", "میکروکپی وعدهٔ پاسخ", "Skeleton و اصلاح کنتراست", "صفحهٔ تأیید با محصولات مرتبط"], f: "F3 F5 F7 F8" },
            { t: "اسپرینت ۲ — ساختار", items: ["سینک URL فیلترها", "URL مستقل محصول", "بلوک اعتبار دربارهٔ ما", "خلاصهٔ تابلوی قیمت"], f: "F4 F5 F6" },
            { t: "اسپرینت ۳ — رشد", items: ["سبد استعلام چندمحصولی", "آزمون بازهٔ قیمت", "درخواست نمونه", "قابل مقایسه بودن گریدها"], f: "F1 F2" },
          ].map((s) => (
            <div key={s.t} style={{ border: "1px solid #E3E1DD", borderRadius: 8, padding: 12 }}>
              <p style={{ fontSize: 11.5, fontWeight: 800, color: "#17191C", marginBottom: 6 }}>{s.t}</p>
              <ul style={{ fontSize: 9.5, color: "#4A4E54", lineHeight: 1.9, listStyle: "none", padding: 0, margin: 0 }}>
                {s.items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
              <p style={{ fontSize: 9, color: "#7A2028", fontWeight: 700, marginTop: 8 }}>{s.f}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 16,
            background: "#17191C",
            borderRadius: 8,
            padding: "12px 14px",
            color: "rgba(247,245,241,0.78)",
            fontSize: 11,
            lineHeight: 2,
          }}
        >
          <b style={{ color: "#A62D36" }}>جمع‌بندی:</b> بنیان UX قوی است (ثبات، شفافیت، پیشگیری از خطا).
          اصلی‌ترین موانع تبدیل به مدل تک‌انتخابی استعلام و نبود وضعیت پایدار در URL برمی‌گردد که با دو
          اقدام معماری قابل رفع است؛ بدون تغییر هویت بصری.
        </div>
      </Sheet>

      {/* ═══ 4 — wireframe sheet ═══ */}
      <Sheet title="وایرفریم صفحهٔ اصلی">
        <H1>۳. وایرفریم صفحهٔ اصلی (۱۴ بخش)</H1>
        <P>
          پس از گزارش، وایرفریم بر اساس همان ساختار تهیه شد؛ بخش‌ها با شمارهٔ یک‌تاچهارده مشخص شده‌اند و
          رفتار موبایل نیز در بلوک فوتر لحاظ شده است. این وایرفریم مبنا برای رابط کاربری نهایی همان
          صفحه‌ی سایت شماست و بدون تغییر بازسازی شده است.
        </P>
        {PdfWireframe()}
      </Sheet>

      {/* ═══ 5 — site sheet ═══ */}
      <Sheet title="رابط کاربری نهایی">
        <H1>۴. رابط کاربری نهایی (همان سایتِ پیاده‌سازی‌شده)</H1>
        <P>
          UI نهایی همان سایت «مرکز نشاسته ایران» است که هم‌اکنون برای شما ساخته شده و تغییری نکرده؛ با
          همان معماری وایرفریم و هویت بصری زرشکی-زغالی، عکاسی صنعتی گریدشده، تایپ‌وگرافی Vazirmatn و
          ماژول‌های تعاملی جستجو، تابلوی قیمت و Quick View.
        </P>
        <H2>رعایت الزامات گزارش UX در UI نهایی</H2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10, marginBottom: 16 }}>
          {[
            { y: "F4", t: "سینک فیلتر در URL", s: "فایندر فیلترها را از آدرس می‌خواند و به‌روز می‌کند." },
            { y: "F6", t: "سیستم همه‌جا به فرم استعلام", s: "استعلام از هر کارت، مودال و ردیف قیمت به فرم RFQ منتقل می‌شود." },
            { y: "F8", t: "Skeleton و بازخورد", s: "حالت‌های بارگذاری، صحت‌سنجی فرم و صفحهٔ موفقیت پیاده شده است." },
            { y: "F7", t: "دسترس‌پذیری", s: "حلقهٔ فوکوس، بازدهی با کیبورد و Close با Esc در مودال." },
            { y: "F2", t: "وجه B2B و عدم فروش مستقیم", s: "هیچ چک‌اout یا پرداخت آنلاین وجود ندارد؛ فقط استعلام و پیش‌فاکتور." },
            { y: "F9", t: "وضعیت موجودی", s: "نشان وضعیت «موجود / محدود / سفارشی» با رنگ معنادار." },
          ].map((c) => (
            <div key={c.t} style={{ border: "1px solid #E3E1DD", borderTop: "3px solid #7A2028", borderRadius: 7, padding: 10 }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: "#7A2028" }}>{c.y} — {c.t}</p>
              <p style={{ fontSize: 10, color: "#4A4E54", lineHeight: 1.8, marginTop: 4 }}>{c.s}</p>
            </div>
          ))}
        </div>

        <H2>رندر واقعی بخش‌های اصلی صفحهٔ نهایی</H2>
        <P>
          بخش‌های زیر دقیقاً همان کامپوننت‌های زنده‌ی صفحه‌ی پیاده‌سازی‌شده هستند و محتوای واقعی
          (۰۳ و ۰۴ و ۱۳) را نمایش می‌دهند. نسخه‌ی آنلاین کامل و تعاملی است.
        </P>
        <PreviewHero />
        <div style={{ height: 12 }} />
        <PreviewMarket />
        <div style={{ height: 12 }} />
        <PreviewForm />

        <H2>سنجه‌های پیشنهادی برای فاز بعد</H2>
        <UL
          items={[
            "search_query و filter_applied — واژگان واقعی کاربر و فیلترهای مفید.",
            "rfq_started و rfq_submitted — نرخ ورود و تکمیل فرم پیش‌فاکتور.",
            "market_inquiry_click — اثر تابلوی قیمت بر ورود به قیف.",
            "product_quick_view و doc_download — نیت فنی و گریدهای پرتقاضا.",
          ]}
        />
        <P>
          با نصب‌نشدن ابزار تحلیلی در این نسخه، این سنجه‌ها پیشنهاد «کیفیت قیف» برای اندازه‌گیری اثر
          اصلاحات پیشنهادی در مرحلهٔ بعد است.
        </P>
      </Sheet>
    </div>
  );
}
