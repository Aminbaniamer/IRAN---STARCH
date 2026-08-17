import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Finder, { type FinderPreset } from "./components/Finder";
import Catalog from "./components/Catalog";
import { IndustryExplorer, default as WhyUs } from "./components/Industries";
import { Stats, Steps, Resources, Knowledge } from "./components/Content";
import Rfq, { Footer, MobileBar } from "./components/Rfq";
import WireframeView from "./components/wireframe/WireframeView";
import ReportView from "./components/report/ReportView";
import PdfExport from "./components/pdfreport/PdfExport";
import PdfDownload from "./components/pdfdownload/PdfDownload";

type View = "site" | "wireframe" | "report" | "pdf" | "pdfdownload";

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="بازگشت به بالا"
      className={`fixed bottom-24 lg:bottom-8 left-6 z-40 w-11 h-11 grid place-items-center rounded-lg bg-charcoal text-white border border-white/15 shadow-xl transition-all duration-300 hover:bg-accent hover:text-charcoal ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5m-6 6 6-6 6 6" />
      </svg>
    </button>
  );
}

/** floating switcher between deliverables (demo tooling) */
function DeliverableSwitch({
  onWireframe,
  onReport,
  onPdf,
  onPdfDownload,
}: {
  onWireframe: () => void;
  onReport: () => void;
  onPdf: () => void;
  onPdfDownload: () => void;
}) {
  const [open, setOpen] = useState(false);
  const items = [
    {
      label: "دانلود PDF",
      hint: "گزارش UX + وایرفریم — فایل جدا",
      onClick: onPdfDownload,
      icon: (
        <>
          <path d="M12 4v11m0 0 4-4m-4 4-4-4M4 19h16" />
          <path d="M6 3h8l4 4v4H6z" />
        </>
      ),
    },
    {
      label: "دستور چاپ → PDF",
      hint: "گزارش UX + وایرفریم + UI — جدا",
      onClick: onPdf,
      icon: (
        <>
          <path d="M7 8V4h10v4M7 18H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
          <path d="M7 18h10v2H7z" />
        </>
      ),
    },
    {
      label: "سند وایرفریم",
      hint: "۱۵ بخش + موبایل — خروجی PNG",
      onClick: onWireframe,
      icon: (
        <>
          <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
          <path d="M3.5 9h17M9 9v11.5" />
        </>
      ),
    },
    {
      label: "گزارش UX",
      hint: "۸ صفحهٔ A4 — چاپ / PDF",
      onClick: onReport,
      icon: (
        <>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v4h4M9 12h6M9 15.5h4" />
        </>
      ),
    },
  ];

  return (
    <div className="fixed bottom-24 lg:bottom-8 right-6 z-40 flex flex-col items-end gap-2.5">
      {items.map((it) => (
        <button
          key={it.label}
          onClick={it.onClick}
          className={`inline-flex items-center gap-2.5 bg-charcoal text-white border border-white/15 rounded-lg px-4 py-3 shadow-xl transition-all duration-300 hover:bg-brand ${
            open ? "opacity-100 translate-y-0" : "opacity-100"
          }`}
        >
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            {it.icon}
          </svg>
          <span className="text-right leading-tight">
            <span className="block text-[12px] font-bold">{it.label}</span>
            <span className="block text-[9.5px] text-white/50 mt-0.5">{it.hint}</span>
          </span>
        </button>
      ))}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="اسناد پروژه"
        className="w-10 h-10 grid place-items-center rounded-full bg-brand text-white shadow-xl text-[11px] font-bold"
      >
        UX
      </button>
    </div>
  );
}

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function App() {
  const [view, setView] = useState<View>("site");
  const [finderQuery, setFinderQuery] = useState("");
  const [finderPreset, setFinderPreset] = useState<FinderPreset>(null);
  const [rfqProduct, setRfqProduct] = useState("corn");

  /* deep links: ?wf=1 • ?ux=1 • ?report=1 (print) • ?pdf=1 (download) */
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (p.get("pdf") === "1") setView("pdfdownload");
    else if (p.get("report") === "1") setView("pdf");
    else if (p.get("ux") === "1") setView("report");
    else if (p.get("wf") === "1") setView("wireframe");
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.delete("wf");
    url.searchParams.delete("ux");
    url.searchParams.delete("report");
    url.searchParams.delete("pdf");
    if (view === "wireframe") url.searchParams.set("wf", "1");
    if (view === "report") url.searchParams.set("ux", "1");
    if (view === "pdf") url.searchParams.set("report", "1");
    if (view === "pdfdownload") url.searchParams.set("pdf", "1");
    window.history.replaceState({}, "", url.toString());
  }, [view]);

  useEffect(() => {
    document.body.style.overflow = view === "site" ? "" : "auto";
  }, [view]);

  const handleSearch = (q: string) => {
    setFinderPreset(null);
    setFinderQuery(q);
    scrollTo("finder");
  };

  const handleBrowseCategory = (id: string) => {
    setFinderPreset({ kind: "category", value: id, ts: Date.now() });
    scrollTo("finder");
  };

  const handleBrowseIndustry = (id: string) => {
    setFinderPreset({ kind: "industry", value: id, ts: Date.now() });
    scrollTo("finder");
  };

  const handleInquire = (id: string) => {
    setRfqProduct(id);
    scrollTo("rfq");
  };

  if (view === "pdf") return <PdfExport onExit={() => setView("site")} onSite={() => setView("site")} />;
  if (view === "pdfdownload") return <PdfDownload onExit={() => setView("site")} onSite={() => setView("site")} />;
  if (view === "wireframe") return <WireframeView onExit={() => setView("site")} />;
  if (view === "report") return <ReportView onExit={() => setView("site")} onWireframe={() => setView("wireframe")} />;

  return (
    <div className="font-body bg-paper min-h-screen">
      <div className="noise-layer" aria-hidden />
      <Header />
      <main>
        <Hero onSearch={handleSearch} />
        <Finder query={finderQuery} preset={finderPreset} onInquire={handleInquire} />
        <Catalog onInquire={handleInquire} onBrowseCategory={handleBrowseCategory} />
        <IndustryExplorer onBrowseIndustry={handleBrowseIndustry} />
        <WhyUs />
        <Stats />
        <Steps />
        <Resources />
        <Knowledge />
        <Rfq productValue={rfqProduct} onProductChange={setRfqProduct} />
      </main>
      <Footer />
      <MobileBar />
      <BackToTop />
      <DeliverableSwitch
        onWireframe={() => setView("wireframe")}
        onReport={() => setView("report")}
        onPdf={() => setView("pdf")}
        onPdfDownload={() => setView("pdfdownload")}
      />
    </div>
  );
}
