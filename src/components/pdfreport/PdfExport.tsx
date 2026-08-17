import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import PdfReport from "./PdfReport";

export default function PdfExport({ onExit, onSite }: { onExit: () => void; onSite: () => void }) {
  const printRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "iran-starch-ux-wireframe-ui",
    pageStyle: "@page { size: A4 portrait; margin: 10mm; }",
  });

  return (
    <div className="min-h-screen bg-[#2b2e33]">
      {/* toolbar */}
      <div className="no-print sticky top-0 z-50 bg-charcoal border-b border-white/12 px-4 lg:px-6 py-3 flex flex-wrap items-center gap-3">
        <button
          onClick={onExit}
          className="inline-flex items-center gap-2 text-[12.5px] font-bold text-white/70 border border-white/15 rounded-lg px-4 py-2.5 hover:text-white hover:border-white/40 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
          بازگشت به UI نهایی
        </button>
        <button
          onClick={onSite}
          className="inline-flex items-center gap-2 text-[12.5px] font-bold text-white/70 border border-white/15 rounded-lg px-4 py-2.5 hover:text-white hover:border-white/40 transition-colors"
        >
          مشاهدهٔ سایت
        </button>

        <span className="hidden md:flex items-center gap-2 text-[12px] text-white/45">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulsedot" />
          سند PDF: گزارش UX ← وایرفریم ← UI نهایی
        </span>

        <div className="ms-auto flex items-center gap-2.5">
          <span className="hidden lg:inline text-[11.5px] text-white/40">
            نسخهٔ ۱٫۰ • ۵ صفحهٔ A4
          </span>
          <button
            onClick={() => {
              setBusy(true);
              window.setTimeout(() => {
                handlePrint();
                setBusy(false);
              }, 300);
            }}
            disabled={busy}
            className="inline-flex items-center gap-2.5 bg-brand text-white font-bold text-[13.5px] rounded-lg px-6 py-2.5 hover:bg-accent transition-colors disabled:opacity-60"
          >
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 8V4h10v4M7 18H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2m-10 0h10v4H7z" />
            </svg>
            {busy ? "در حال آماده‌سازی…" : "دستور چاپ → ذخیره PDF"}
          </button>
        </div>
      </div>

      {/* on-screen preview (scaled for comfort) */}
      <div className="overflow-x-auto py-10 px-6">
        <div style={{ transform: `scale(${Math.min(1, (window.innerWidth - 64) / 820)})`, transformOrigin: "top right" }} className="mx-auto w-min">
          <div ref={printRef}>
            <PdfReport />
          </div>
        </div>
      </div>

      <p className="no-print text-center text-[11px] text-white/35 pb-8 px-6">
        در کادر چاپ مرورگر: مقصد را <b className="text-white/60">Save as PDF</b> انتخاب کنید — اندازهٔ کاغذ Automatic / A4 portrait.
      </p>
    </div>
  );
}
