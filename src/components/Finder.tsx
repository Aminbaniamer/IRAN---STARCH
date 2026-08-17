import { useEffect, useMemo, useState } from "react";
import { products, categories, industries, funcs, type Product } from "../data";
import { Reveal } from "../hooks";
import { SearchIcon, FilterIcon, XIcon, ArrowLeftIcon } from "./Icons";

const sources = ["ذرت", "گندم", "سیب‌زمینی", "برنج", "تاپیوکا"];
const grades = ["خوراکی", "دارویی", "صنعتی"];
const availabilities = ["موجود", "محدود", "سفارشی"];

const availStyle: Record<string, string> = {
  "موجود": "bg-ok/10 text-ok border-ok/25",
  "محدود": "bg-warn/10 text-warn border-warn/30",
  "سفارشی": "bg-ink2/6 text-sec border-line",
};

export type FinderPreset = { kind: "category" | "industry"; value: string; ts: number } | null;

export default function Finder({
  query,
  preset,
  onInquire,
}: {
  query: string;
  preset: FinderPreset;
  onInquire: (id: string) => void;
}) {
  const [q, setQ] = useState(query);
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const [grade, setGrade] = useState("");
  const [industry, setIndustry] = useState("");
  const [func, setFunc] = useState("");
  const [avail, setAvail] = useState("");

  useEffect(() => {
    setQ(query);
  }, [query]);

  useEffect(() => {
    if (!preset) return;
    setQ("");
    setSource("");
    setGrade("");
    setFunc("");
    setAvail("");
    if (preset.kind === "category") {
      setCategory(preset.value);
      setIndustry("");
    } else {
      setIndustry(preset.value);
      setCategory("");
    }
  }, [preset]);

  const result = useMemo(() => {
    const t = q.trim().toLowerCase();
    return products.filter((p) => {
      if (t && !`${p.name} ${p.code ?? ""} ${p.source} ${p.applications.join(" ")} ${p.blurb}`.toLowerCase().includes(t)) return false;
      if (category && p.category !== category) return false;
      if (source && p.source !== source) return false;
      if (grade && p.grade !== grade) return false;
      if (industry && !p.industries.includes(industry)) return false;
      if (func && !p.funcs.includes(func)) return false;
      if (avail && p.availability !== avail) return false;
      return true;
    });
  }, [q, category, source, grade, industry, func, avail]);

  const chips: { label: string; clear: () => void }[] = [];
  if (q.trim()) chips.push({ label: `جستجو: ${q}`, clear: () => setQ("") });
  if (category) chips.push({ label: categories.find((c) => c.id === category)?.name ?? "", clear: () => setCategory("") });
  if (source) chips.push({ label: `منبع: ${source}`, clear: () => setSource("") });
  if (grade) chips.push({ label: `گرید: ${grade}`, clear: () => setGrade("") });
  if (industry) chips.push({ label: industries.find((i) => i.id === industry)?.name ?? "", clear: () => setIndustry("") });
  if (func) chips.push({ label: func, clear: () => setFunc("") });
  if (avail) chips.push({ label: `موجودی: ${avail}`, clear: () => setAvail("") });

  const resetAll = () => {
    setQ(""); setCategory(""); setSource(""); setGrade(""); setIndustry(""); setFunc(""); setAvail("");
  };

  return (
    <section id="finder" className="bg-surface py-16 md:py-24 border-b border-line">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-9">
            <div>
              <p className="flex items-center gap-3 text-brand font-bold text-[13px] mb-3">
                <span className="w-8 h-[2px] bg-brand" />
                کشف سریع محصول
              </p>
              <h2 className="font-black text-3xl md:text-[40px] text-charcoal leading-tight">
                محصول موردنیازتان را پیدا کنید
              </h2>
            </div>
            <p className="text-[13px] text-sec flex items-center gap-2">
              <FilterIcon className="w-4 h-4 text-brand" />
              <b className="text-charcoal text-[15px]">{result.length.toLocaleString("fa-IR")}</b>
              محصول مطابق جستجوی شما
            </p>
          </div>
        </Reveal>

        {/* filter bar */}
        <Reveal delay={100}>
          <div className="bg-paper border border-line rounded-xl p-5 md:p-6 shadow-sm">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              <div className="relative md:col-span-2">
                <span className="absolute inset-y-0 start-4 grid place-items-center text-sec/60 pointer-events-none">
                  <SearchIcon className="w-4.5 h-4.5" />
                </span>
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="نام محصول یا کد فنی (مثلاً E1442)…"
                  className="field ps-11"
                />
              </div>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="field">
                <option value="">نوع محصول — همه</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
              <select value={source} onChange={(e) => setSource(e.target.value)} className="field">
                <option value="">منبع — همه</option>
                {sources.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <select value={grade} onChange={(e) => setGrade(e.target.value)} className="field">
                <option value="">گرید — همه</option>
                {grades.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
              <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="field">
                <option value="">صنعت — همه</option>
                {industries.map((i) => (
                  <option key={i.id} value={i.id}>{i.name}</option>
                ))}
              </select>
              <select value={func} onChange={(e) => setFunc(e.target.value)} className="field">
                <option value="">کاربرد — همه</option>
                {funcs.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
              <select value={avail} onChange={(e) => setAvail(e.target.value)} className="field">
                <option value="">وضعیت موجودی — همه</option>
                {availabilities.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>

            {chips.length > 0 && (
              <div className="fade-up mt-4 pt-4 border-t border-line flex flex-wrap items-center gap-2">
                <span className="text-[11.5px] font-bold text-sec">فیلترهای فعال:</span>
                {chips.map((c) => (
                  <button
                    key={c.label}
                    onClick={c.clear}
                    className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-brand bg-brand/8 border border-brand/25 rounded-full px-3 py-1.5 hover:bg-brand hover:text-white transition-colors"
                  >
                    {c.label}
                    <XIcon className="w-3 h-3" />
                  </button>
                ))}
                <button onClick={resetAll} className="text-[11.5px] font-bold text-sec underline underline-offset-4 hover:text-brand transition-colors ms-1">
                  حذف همه
                </button>
              </div>
            )}
          </div>
        </Reveal>

        {/* results */}
        {result.length === 0 ? (
          <div className="mt-8 border border-dashed border-line rounded-xl py-16 text-center">
            <SearchIcon className="w-8 h-8 text-sec/40 mx-auto mb-4" />
            <p className="font-bold text-charcoal mb-1">محصولی مطابق فیلترهای شما پیدا نشد</p>
            <p className="text-[13px] text-sec mb-5">فیلترها را تغییر دهید یا محصول خود را مستقیماً استعلام کنید.</p>
            <div className="flex items-center justify-center gap-3">
              <button onClick={resetAll} className="text-[13px] font-bold border border-line rounded-lg px-5 py-2.5 text-charcoal hover:border-brand hover:text-brand transition-colors">
                پاک‌کردن فیلترها
              </button>
              <a href="#rfq" className="text-[13px] font-bold bg-brand text-white rounded-lg px-5 py-2.5 hover:bg-brand2 transition-colors">
                استعلام محصول خاص
              </a>
            </div>
          </div>
        ) : (
          <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {result.map((p: Product, i) => (
              <Reveal key={p.id} delay={(i % 6) * 60}>
                <div className="group h-full bg-surface border border-line rounded-xl p-5 flex flex-col transition-all duration-300 hover:border-brand/40 hover:shadow-[0_14px_40px_rgba(23,25,28,0.08)] hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="min-w-0">
                      <h3 className="font-bold text-[15.5px] text-charcoal leading-6 flex items-center gap-2 flex-wrap">
                        {p.name}
                        {p.code && (
                          <span className="latin text-[10.5px] font-semibold text-brand bg-brand/8 border border-brand/20 rounded px-1.5 py-0.5">
                            {p.code}
                          </span>
                        )}
                      </h3>
                      <p className="text-[11.5px] text-sec mt-1">
                        منبع: {p.source} • گرید: {p.grade}
                      </p>
                    </div>
                    <span className={`shrink-0 text-[10.5px] font-bold border rounded-full px-2.5 py-1 ${availStyle[p.availability]}`}>
                      {p.availability}
                    </span>
                  </div>

                  <p className="text-[12.5px] text-sec leading-6 mb-4 line-clamp-2">{p.blurb}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.applications.slice(0, 3).map((a) => (
                      <span key={a} className="text-[10.5px] font-medium bg-paper border border-line rounded-full px-2.5 py-1 text-sec">
                        {a}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-line/70">
                    <span className="text-[10.5px] text-sec/80 truncate">{p.packaging}</span>
                    <button
                      onClick={() => onInquire(p.id)}
                      className="shrink-0 inline-flex items-center gap-1.5 text-[12px] font-bold text-brand hover:text-white hover:bg-brand rounded-md px-3.5 py-2 border border-brand/30 hover:border-brand transition-all duration-200"
                    >
                      استعلام قیمت
                      <ArrowLeftIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
