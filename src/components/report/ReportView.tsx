import { useCallback, useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import UxReport from "./UxReport";

const SCALES = [
  { label: "۷۵٪", v: 0.75 },
  { label: "۱۰۰٪", v: 1 },
  { label: "۱۲۵٪", v: 1.25 },
];

export default function ReportView({
  onExit,
  onWireframe,
}: {
  onExit: () => void;
  onWireframe: () => void;
}) {
  const docRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [docH, setDocH] = useState(0);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const el = docRef.current;
    if (!el) return;
    const update = () => setDocH(el.scrollHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* fit to viewport width on small screens */
  useEffect(() => {
    const fit = (window.innerWidth - 72) / 860;
    if (fit < 1) setScale(Math.max(0.45, Math.round(fit * 20) / 20));
  }, []);

  const downloadPng = useCallback(async () => {
    const node = docRef.current;
    if (!node) return;
    setBusy(true);
    try {
      const url = await toPng(node, {
        backgroundColor: "#FFFFFF",
        pixelRatio: 2,
        width: 860,
        height: node.scrollHeight,
        style: { transform: "none", transformOrigin: "top left" },
      });
      const a = document.createElement("a");
      a.href = url;
      a.download = "iran-starch-ux-report.pdf.png";
      a.click();
    } catch (e) {
      console.error(e);
      alert("خروجی تصویر ناموفق بود.");
    } finally {
      setBusy(false);
    }
  }, []);

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
          onClick={onWireframe}
          className="inline-flex items-center gap-2 text-[12.5px] font-bold text-white/70 border border-white/15 rounded-lg px-4 py-2.5 hover:text-white hover:border-white/40 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
            <path d="M3.5 9h17M9 9v11.5" />
          </svg>
          سند وایرفریم
        </button>

        <span className="hidden lg:flex items-center gap-2 text-[12px] text-white/45">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulsedot" />
          گزارش UX — ۸ صفحه • بازبینی هیوریستیک (بدون مصاحبه و تست کاربر)
        </span>

        <div className="flex items-center gap-1.5 ms-auto">
          <span className="hidden md:inline text-[11px] text-white/40 me-1">زوم:</span>
          {SCALES.map((s) => (
            <button
              key={s.v}
              onClick={() => setScale(s.v)}
              className={`text-[11.5px] font-bold rounded-md px-3 py-2 border transition-colors ${
                scale === s.v ? "bg-accent border-accent text-white" : "border-white/15 text-white/60 hover:text-white"
              }`}
            >
              {s.label}
            </button>
          ))}
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 text-[12.5px] font-bold bg-brand text-white rounded-lg px-5 py-2.5 hover:bg-accent transition-colors"
          >
            چاپ / ذخیره PDF
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 8V4h10v4M7 18H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2m-10 0h10v4H7z" />
            </svg>
          </button>
          <button
            onClick={downloadPng}
            disabled={busy}
            className="hidden md:inline-flex items-center gap-2 text-[12.5px] font-bold text-white/70 border border-white/15 rounded-lg px-4 py-2.5 hover:text-white hover:border-white/40 transition-colors disabled:opacity-60"
          >
            {busy ? "…" : "PNG"}
          </button>
        </div>
      </div>

      {/* stage */}
      <div className="overflow-x-auto py-8 px-6">
        <div style={{ width: 860 * scale, height: docH * scale || undefined }} className="mx-auto">
          <div style={{ width: 860, transform: `scale(${scale})`, transformOrigin: "top right" }}>
            <div ref={docRef}>
              <UxReport docRef={docRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
