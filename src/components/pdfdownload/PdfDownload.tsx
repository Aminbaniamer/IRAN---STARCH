import { useMemo, useRef, useState, type ReactNode } from "react";
import { exportNodesToPdf } from "../../lib/pdf.export";
import PdfWireframe from "../pdfreport/PdfWireframe";
import PreviewHero from "../pdfreport/PreviewHero";
import PreviewMarket from "../pdfreport/PreviewMarket";
import PreviewForm from "../pdfreport/PreviewForm";

/* re-usable little typography primitives (same look as the print report) */
const H1 = ({ children }: { children: ReactNode }) => <h1 className="mb-3" style={{ fontSize: 19, fontWeight: 900, color: "#17191C", lineHeight: 1.6 }}>{children}</h1>;
const H2 = ({ children }: { children: ReactNode }) => <h2 className="mb-2" style={{ fontSize: 13.5, fontWeight: 800, color: "#17191C" }}>{children}</h2>;
const P = ({ children }: { children: ReactNode }) => <p className="mb-3" style={{ fontSize: 11, lineHeight: 2.05, color: "#4A4E54" }}>{children}</p>;
const UL = ({ items }: { items: ReactNode[] }) => (
  <ul className="mb-4" style={{ margin: 0, padding: 0, listStyle: "none" }}>
    {items.map((t, i) => (
      <li key={i} className="flex gap-2.5 mb-1" style={{ fontSize: 10.5, lineHeight: 1.9, color: "#4A4E54" }}>
        <span style={{ width: 5, height: 5, borderRadius: 99, background: "#7A2028", marginTop: 6, flexShrink: 0 }} />
        <span>{t}</span>
      </li>
    ))}
  </ul>
);
const Sev = ({ k }: { k: string }) => (
  <span style={{ background: k === "S1" ? "#7A2028" : k === "S2" ? "#B88732" : "#EDEEF0", color: k === "S3" ? "#62666B" : "#fff", fontSize: 8.5, fontWeight: 700, padding: "1px 6px", borderRadius: 3 }}>{k}</span>
);

const Sheet = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="pdfpage" style={{ width: 794, minHeight: 1123, padding: "42px 46px", background: "#fff", boxSizing: "border-box", position: "relative" }}>
    <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #E3E1DD", paddingBottom: 10, marginBottom: 20 }}>
      <span style={{ background: "#7A2028", color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 3 }}>{title}</span>
      <span style={{ fontSize: 9.5, color: "#A09D97" }}>مرکز نشاسته ایران — سند جدا</span>
    </header>
    {children}
  </section>
);

/* ═══════════ UX report sheets (brief, no interviews) ═══════════ */
function UxSheet1() {
  return (
    <Sheet title="گزارش UX — خلاصه و جریان">
      <H1>گزارش تجربهٔ کاربر (مختصر، بدون مصاحبه)</H1>
      <P>
        این گزارش بدون مصاحبه‌ی کاربر و بدون تست کاربردپذیری و صرفاً بر پایه‌ی بازبینی هیوریستیک (اصول
        ۱۰گانهٔ نیلسن)، راه‌رفت شناختی مسیر «استعلام و پیش‌فاکتور» و کنترل دسترس‌پذیری تهیه شده است.
        یافته‌ها «فرضیه‌های قابل آزمون» هستند و پیش از نتیجه‌گیری نهایی به داده نیاز دارند.
      </P>
      <H2>جریان اصلی تبدیل</H2>
      <div style={{ display: "flex", justifyContent: "space-between", background: "#F7F5F1", border: "1px solid #E3E1DD", borderRadius: 8, padding: "10px 16px", marginBottom: 16 }}>
        {["فهم", "کشف", "اعتبارسنجی", "اعتماد", "تبدیل (RFQ)"].map((s, i) => (
          <span key={s} style={{ fontSize: 10.5, fontWeight: 800, color: "#62666B" }}>{i > 0 ? "— " : ""}{s}</span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <div style={{ flex: 1, background: "#FBF4F5", border: "1px solid #EBD3D6", borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 10, fontWeight: 800, color: "#7A2028" }}>امتیاز کلی هیوریستیک</p>
          <p style={{ fontSize: 24, fontWeight: 900, color: "#17191C" }}>3.9 / 5</p>
        </div>
        <div style={{ flex: 1, background: "#FBF4F5", border: "1px solid #EBD3D6", borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 10, fontWeight: 800, color: "#7A2028" }}>یافته‌ها</p>
          <p style={{ fontSize: 24, fontWeight: 900, color: "#17191C" }}>۱۰</p>
          <p style={{ fontSize: 10, color: "#62666B" }}>۰ بحرانی • ۳ بالا • ۵ متوسط • ۲ جزئی</p>
        </div>
      </div>
      <H2>کاربران هدف</H2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
        {[["مدیر خرید", "تأمین منظم، بدون توقف خط؛ نگران پایداری."], ["مدیر فنی / R&D", "انتخاب گرید درست؛ نیازمند مدرک فنی."], ["بازرگانی", "مقایسهٔ چند گرید و چند منبع."], ["تولیدکنندهٔ کوچک", "خرید پراکنده؛ واژگان فنی مانع می‌شود."]].map((c) => (
          <div key={c[0]} style={{ border: "1px solid #E3E1DD", borderRadius: 7, padding: 9 }}>
            <p style={{ fontSize: 10.5, fontWeight: 800, color: "#17191C", marginBottom: 3 }}>{c[0]}</p>
            <p style={{ fontSize: 9.5, color: "#4A4E54", lineHeight: 1.8 }}>{c[1]}</p>
          </div>
        ))}
      </div>
      <H2>سه اقدام با بیشترین اثر</H2>
      <UL items={["سبد استعلام چندمحصولی در فرم RFQ", "حفظ وضعیت فیلتر در URL برای اشتراک", "تست «بازهٔ تقریبی» در تابلوی قیمت"]} />
      <H2>جمع‌بندی</H2>
      <P>بنیان UX قوی است (ثبات، شفافیت، پیشگیری از خطا)؛ موانع اصلی به مدل تک‌انتخابی استعلام و نبود وضعیت پایدار در URL برمی‌گردد.</P>
    </Sheet>
  );
}

function UxSheet2() {
  const findings: [string, string, string, string][] = [
    ["F1", "S1", "قیمت روز", "نبود عدد قیمت، بودجه‌سازی اولیه را دشوار می‌کند."],
    ["F2", "S1", "فرم RFQ", "تک‌انتخابی است؛ خرید صنعتی چند گرید می‌خواهد."],
    ["F3", "S1", "بعد از ارسال", "مسیر پس از ثبت درخواست خاموش می‌شود."],
    ["F4", "S2", "فایندر", "وضعیت فیلتر در URL نیست؛ Refresh نتیجه را می‌رَبد."],
    ["F5", "S2", "اعتماد", "«درباره ما» سابقهٔ واقعی را نشان نمی‌دهد."],
    ["F6", "S2", "Quick View", "کشیدن URL مستقل برای محصول ممکن نیست."],
    ["F7", "S2", "دسترس‌پذیری", "کنتراست متن ثانویه روی تیره پایین است."],
    ["F8", "S2", "بارگذاری", "نبود Skeleton؛ در اینترنت ضعیف بی‌پاسخ به نظر می‌رسد."],
    ["F9", "S3", "کارت محصول", "برچسب «سفارشی» بدون توضیح زمان تأمین است."],
    ["F10", "S3", "واژگان", "کدهای E برای کاربر غیرفنی مبهم است."],
  ];
  return (
    <Sheet title="گزارش UX — یافته‌ها و نقشهٔ راه">
      <H1>یافته‌های اولویت‌بندی‌شده و نقشهٔ راه</H1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 16 }}>
        <thead>
          <tr style={{ background: "#F7F5F1" }}>
            {["کد", "شدت", "بخش", "یافته"].map((h) => (
              <th key={h} style={{ fontSize: 9, fontWeight: 700, color: "#62666B", textAlign: "right", padding: "6px 8px", border: "1px solid #EDEBE7" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {findings.map((r) => (
            <tr key={r[0]}>
              <td style={{ fontSize: 9.5, fontWeight: 700, padding: "6px 8px", border: "1px solid #EDEBE7" }}>{r[0]}</td>
              <td style={{ padding: "6px 8px", border: "1px solid #EDEBE7" }}><Sev k={r[1]} /></td>
              <td style={{ fontSize: 9.5, padding: "6px 8px", border: "1px solid #EDEBE7", color: "#4A4E54" }}>{r[2]}</td>
              <td style={{ fontSize: 9.5, padding: "6px 8px", border: "1px solid #EDEBE7", color: "#4A4E54" }}>{r[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <H2>نقشهٔ راه سه‌اسپرینتی</H2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
        {[["اسپرینت ۱ — بهبود سریع", "کوتاه‌کردن فرم، میکروکپی وعدهٔ پاسخ، Skeleton، اصلاح کنتراست، صفحهٔ تأیید"], ["اسپرینت ۲ — ساختار", "سینک URL فیلترها، URL مستقل محصول، بلوک اعتبار، خلاصهٔ تابلو"], ["اسپرینت ۳ — رشد", "سبد استعلام چندمحصولی، آزمون بازهٔ قیمت، قابلیت مقایسهٔ گریدها"]].map((s) => (
          <div key={s[0]} style={{ border: "1px solid #E3E1DD", borderRadius: 7, padding: 10 }}>
            <p style={{ fontSize: 10.5, fontWeight: 800, color: "#17191C", marginBottom: 4 }}>{s[0]}</p>
            <p style={{ fontSize: 9, color: "#4A4E54", lineHeight: 1.8 }}>{s[1]}</p>
          </div>
        ))}
      </div>
      <H2>سنجه‌های پیشنهادی برای فاز بعد</H2>
      <UL items={["search_query و filter_applied — واژگان واقعی کاربر", "rfq_started و rfq_submitted — نرخ ورود و تکمیل فرم", "market_inquiry_click — اثر تابلوی قیمت بر قیف"]} />
      <P>سنجه‌ها پس از نصب ابزار تحلیلی، کیفیت اصلاحات را اندازه می‌گیرند.</P>
    </Sheet>
  );
}

/* ═══════════ wireframe sheet ═══════════ */
function WireframeSheet() {
  return (
    <Sheet title="وایرفریم صفحهٔ اصلی">
      <H1>وایرفریم صفحهٔ اصلی مرکز نشاسته ایران</H1>
      <P>
        وایرفریم بر اساس گزارش UX و در ۱۴ بخش طراحی شده؛ مبنای رابط کاربی همان سایت تجدیدنگارش‌نشده است.
      </P>
      {PdfWireframe()}
      <div style={{ marginTop: 14 }}><H2>نکات</H2></div>
      <UL items={["بدون ورود/ثبت‌نام و بدون پرداخت آنلاین — فقط استعلام و پیش‌فاکتور", "هر بخش به یک مسیر RFQ ختم می‌شود", "تابلوی قیمت فقط وضعیت بازار را نشان می‌دهد، نه قیمت عددی"]} />
    </Sheet>
  );
}

/* ═══════════ UI sheet (same as the real site) ═══════════ */
function UiSheet() {
  return (
    <Sheet title="رابط کاربری نهایی">
      <H1>رندر بخش‌های زندهٔ همان سایتِ پیاده‌سازی‌شده</H1>
      <P>این‌ها دقیقاً کامپوننت‌های سایت هستند (تغییری نکرده‌اند) و در PDF به‌صورت تصویر ثبت می‌شوند.</P>
      <PreviewHero />
      <div style={{ height: 12 }} />
      <PreviewMarket />
      <div style={{ height: 12 }} />
      <PreviewForm />
    </Sheet>
  );
}

/* ═══════════ main component ═══════════ */
export default function PdfDownload({ onExit, onSite }: { onExit: () => void; onSite: () => void }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState<null | "ux" | "wf" | "all">(null);
  const [previewMode, setPreviewMode] = useState<"ux" | "wf" | "ui">("ux");

  const uxSheets = useMemo(
    () => [
      <UxSheet1 key="u1" />,
      <UxSheet2 key="u2" />,
    ],
    []
  );
  const wfSheets = useMemo(() => [<WireframeSheet key="w" />], []);
  const uiSheet = useMemo(() => [<UiSheet key="ui" />], []);

  const allSheets = previewMode === "ux" ? uxSheets : previewMode === "wf" ? wfSheets : uiSheet;

  async function collectAndDownload(mode: "ux" | "wf" | "all") {
    setBusy(mode);
    try {
      // render the chosen sheets offscreen at fixed size
      setPreviewMode(mode === "all" ? "ux" : mode);
      // wait for paint
      await new Promise((r) => setTimeout(r, 250));
      const nodes = Array.from(stageRef.current!.querySelectorAll(".pdfpage")) as HTMLElement[];
      const name = mode === "ux" ? "iran-starch-ux-report.pdf" : mode === "wf" ? "iran-starch-wireframe.pdf" : "iran-starch-ux-wireframe.pdf";
      await exportNodesToPdf(nodes, name);
    } catch (e) {
      console.error(e);
      alert("ساخت PDF ناموفق بود. لطفاً دوباره تلاش کنید.");
    } finally {
      setBusy(null);
    }
  }

  return (
    <div className="min-h-screen bg-[#2b2e33]">
      {/* toolbar */}
      <div className="no-print sticky top-0 z-50 bg-charcoal border-b border-white/12 px-4 lg:px-6 py-3 flex flex-wrap items-center gap-3">
        <button onClick={onExit} className="inline-flex items-center gap-2 text-[12.5px] font-bold text-white/70 border border-white/15 rounded-lg px-4 py-2.5 hover:text-white hover:border-white/40 transition-colors">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          بازگشت به UI
        </button>
        <button onClick={onSite} className="inline-flex items-center gap-2 text-[12.5px] font-bold text-white/70 border border-white/15 rounded-lg px-4 py-2.5 hover:text-white hover:border-white/40 transition-colors">
          مشاهدهٔ سایت
        </button>
        <span className="hidden lg:inline text-[11.5px] text-white/45">دانلود PDF جدا — گزارش UX / وایرفریم</span>

        <div className="ms-auto flex items-center gap-2.5 flex-wrap justify-end">
          <div className="flex items-center gap-1.5 border border-white/15 rounded-lg p-1">
            {(["ux", "wf", "ui"] as const).map((m) => (
              <button key={m} onClick={() => setPreviewMode(m)} className={`text-[11.5px] font-bold rounded-md px-3 py-2 transition-colors ${previewMode === m ? "bg-accent text-white" : "text-white/60 hover:text-white"}`}>
                {m === "ux" ? "گزارش UX" : m === "wf" ? "وایرفریم" : "رندر UI"}
              </button>
            ))}
          </div>
          <button
            onClick={() => collectAndDownload("ux")}
            disabled={busy !== null}
            className="inline-flex items-center gap-2 text-[12px] font-bold text-white/80 border border-white/20 rounded-lg px-4 py-2.5 hover:text-white hover:border-white/50 transition-colors disabled:opacity-50"
          >
            {busy === "ux" ? "…" : "دانلود گزارش UX"}
          </button>
          <button
            onClick={() => collectAndDownload("wf")}
            disabled={busy !== null}
            className="inline-flex items-center gap-2 text-[12px] font-bold text-white/80 border border-white/20 rounded-lg px-4 py-2.5 hover:text-white hover:border-white/50 transition-colors disabled:opacity-50"
          >
            {busy === "wf" ? "…" : "دانلود وایرفریم"}
          </button>
          <button
            onClick={() => collectAndDownload("all")}
            disabled={busy !== null}
            className="inline-flex items-center gap-2.5 bg-brand text-white font-bold text-[13px] rounded-lg px-5 py-2.5 hover:bg-accent transition-colors disabled:opacity-60"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v11m0 0 4-4m-4 4-4-4M4 19h16" /></svg>
            {busy === "all" ? "در حال ساخت…" : "دانلود PDF کامل (گزارش + وایرفریم)"}
          </button>
        </div>
      </div>

      {/* offscreen stage for capture */}
      <div ref={stageRef} style={{ position: "absolute", left: -20000, top: 0, background: "#fff" }}>
        {allSheets}
      </div>

      {/* visible on-screen preview */}
      <div className="overflow-x-auto py-8 px-6">
        <div style={{ width: 794, margin: "0 auto", background: "#fff", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
          {allSheets}
        </div>
      </div>
    </div>
  );
}
