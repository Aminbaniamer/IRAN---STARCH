import { useCallback, useEffect, useRef, useState } from "react";
import { toPng, toSvg } from "html-to-image";
import WireframeSheet from "./Wireframe";

const SCALES = [
  { label: "۵۰٪", v: 0.5 },
  { label: "۷۵٪", v: 0.75 },
  { label: "۱۰۰٪", v: 1 },
];

export default function WireframeView({ onExit }: { onExit: () => void }) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.75);
  const [sheetH, setSheetH] = useState(0);
  const [busy, setBusy] = useState<"png" | "svg" | null>(null);

  /* measure sheet height so the scaled stage keeps its real box */
  useEffect(() => {
    const el = sheetRef.current;
    if (!el) return;
    const update = () => setSheetH(el.scrollHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  /* auto-fit scale to viewport on first paint */
  useEffect(() => {
    const fit = (window.innerWidth - 80) / 1440;
    setScale(Math.min(1, Math.max(0.35, Math.round(fit * 20) / 20)));
  }, []);

  const download = useCallback(async (fmt: "png" | "svg") => {
    const node = sheetRef.current;
    if (!node) return;
    setBusy(fmt);
    try {
      const opts = {
        backgroundColor: "#FFFFFF",
        pixelRatio: 2,
        width: 1440,
        height: node.scrollHeight,
        style: { transform: "none", transformOrigin: "top left" },
      } as const;
      const url = fmt === "png" ? await toPng(node, opts) : await toSvg(node, opts);
      const a = document.createElement("a");
      a.href = url;
      a.download = `iran-starch-wireframe-home.${fmt}`;
      a.click();
    } catch (e) {
      console.error(e);
      alert("خروجی تصویر ناموفق بود. لطفاً دوباره تلاش کنید.");
    } finally {
      setBusy(null);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#2b2e33]">
      {/* toolbar */}
      <div className="sticky top-0 z-50 bg-charcoal border-b border-white/12 px-4 lg:px-6 py-3 flex flex-wrap items-center gap-3">
        <button
          onClick={onExit}
          className="inline-flex items-center gap-2 text-[12.5px] font-bold text-white/70 border border-white/15 rounded-lg px-4 py-2.5 hover:text-white hover:border-white/40 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
          بازگشت به UI نهایی
        </button>

        <span className="hidden sm:flex items-center gap-2 text-[12px] text-white/45">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulsedot" />
          حالت وایرفریم — سند ۱۵ بخشی + موبایل
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
            onClick={() => download("png")}
            disabled={busy !== null}
            className="inline-flex items-center gap-2 text-[12.5px] font-bold bg-brand text-white rounded-lg px-5 py-2.5 hover:bg-accent transition-colors disabled:opacity-60"
          >
            {busy === "png" ? "در حال ساخت…" : "دانلود تصویر PNG"}
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4v11m0 0 4-4m-4 4-4-4M4 19h16" />
            </svg>
          </button>
          <button
            onClick={() => download("svg")}
            disabled={busy !== null}
            className="hidden md:inline-flex items-center gap-2 text-[12.5px] font-bold text-white/70 border border-white/15 rounded-lg px-4 py-2.5 hover:text-white hover:border-white/40 transition-colors disabled:opacity-60"
          >
            {busy === "svg" ? "…" : "SVG"}
          </button>
        </div>
      </div>

      {/* stage */}
      <div ref={stageRef} className="overflow-x-auto py-8 px-6">
        <div className="mx-auto" style={{ width: 1440 * scale, height: sheetH * scale || undefined }}>
          <div
            style={{ width: 1440, transform: `scale(${scale})`, transformOrigin: "top right" }}
            className="shadow-[0_30px_90px_rgba(0,0,0,0.5)] bg-white"
          >
            <WireframeSheet sheetRef={sheetRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
