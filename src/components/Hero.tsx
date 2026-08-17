import { useEffect, useMemo, useState } from "react";
import { products, categories, tickerCodes } from "../data";
import { Reveal } from "../hooks";
import { SearchIcon, ArrowLeftIcon } from "./Icons";

const popular = ["نشاسته ذرت", "E1442", "گلوکز مایع", "نشاسته دارویی USP"];

/* slides pulled strictly from the existing product catalog */
const slideIds = ["corn", "wheat", "potato", "rice", "e1442", "tapioca", "usp", "cationic"];
const slideImg: Record<string, string> = {
  corn: "/images/powder-dark.jpg",
  wheat: "/images/grains.jpg",
  potato: "/images/powder-dark.jpg",
  rice: "/images/powder-dark.jpg",
  tapioca: "/images/powder-dark.jpg",
  e1442: "/images/plant.jpg",
  usp: "/images/lab.jpg",
  cationic: "/images/warehouse.jpg",
};

export default function Hero({ onSearch }: { onSearch: (q: string) => void }) {
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);

  const suggestions = useMemo(() => {
    const t = q.trim();
    if (t.length < 1) return [];
    return products
      .filter((p) => `${p.name} ${p.code ?? ""} ${p.source} ${p.applications.join(" ")}`.toLowerCase().includes(t.toLowerCase()))
      .slice(0, 6);
  }, [q]);

  const go = (term: string) => {
    setQ("");
    onSearch(term);
  };

  return (
    <section id="home" className="relative bg-charcoal text-paper overflow-hidden">
      {/* ambient */}
      <div className="absolute inset-0 grid-lines" />
      <div className="absolute -top-32 right-1/3 w-[620px] h-[620px] rounded-full bg-brand/20 blur-[150px]" />
      <div className="absolute bottom-0 -left-20 w-[420px] h-[420px] rounded-full bg-accent/10 blur-[130px]" />
      <span aria-hidden className="latin hidden xl:block absolute -bottom-24 left-4 font-bold text-[13rem] leading-none text-white/[0.02] select-none pointer-events-none tracking-tight">
        STARCH
      </span>

      <div className="relative max-w-[1440px] mx-auto px-5 lg:px-8 pt-14 md:pt-20 pb-16 md:pb-20 grid lg:grid-cols-12 gap-14 items-center">
        {/* copy + search */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulsedot" />
              <p className="text-[12px] font-bold text-paper/50 tracking-wide">
                مرجع تخصصی تأمین عمدهٔ نشاسته و مشتقات برای صنایع
              </p>
              <span className="latin text-[9.5px] font-semibold tracking-[0.3em] text-accent border border-accent/40 rounded px-2 py-0.5">
                B2B
              </span>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="font-black text-[34px] leading-[1.45] md:text-[52px] md:leading-[1.35] text-paper">
              تأمین تخصصی{" "}
              <span className="relative inline-block text-white">
                نشاسته
                <svg viewBox="0 0 120 10" className="absolute -bottom-1.5 right-0 w-full h-2.5 text-accent" preserveAspectRatio="none">
                  <path d="M2 7.5C28 2.5 82 2 118 6" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>{" "}
              و مشتقات
              <br />
              برای صنایع ایران
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 text-paper/55 leading-8 max-w-xl text-[14.5px]">
              مرجع تخصصی تأمین عمدهٔ نشاسته، مشتقات و مواد اولیهٔ موردنیاز صنایع؛ با تنوع محصول، اطلاعات
              تخصصی و مسیر سریع استعلام قیمت و دریافت پیش‌فاکتور.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#rfq"
                className="inline-flex items-center gap-2.5 bg-accent text-charcoal font-bold text-[14px] rounded-lg px-7 py-3.5 hover:bg-accent2 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-black/30"
              >
                استعلام قیمت عمده
                <ArrowLeftIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 border border-paper/25 text-paper/80 font-bold text-[14px] rounded-lg px-7 py-3.5 hover:border-paper hover:text-paper transition-colors"
              >
                مشاهدهٔ محصولات
              </a>
            </div>
          </Reveal>

          {/* search module */}
          <Reveal delay={340}>
            <div className="mt-11 max-w-2xl">
              <p className="text-[13px] font-bold text-paper/70 mb-3">محصول موردنظر خود را جستجو کنید</p>
              <div className="relative">
                <div className="flex items-stretch bg-graphite border border-white/12 rounded-xl overflow-hidden focus-within:border-accent/70 transition-colors shadow-2xl shadow-black/30">
                  <span className="grid place-items-center ps-4 text-paper/40">
                    <SearchIcon className="w-5 h-5" />
                  </span>
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setTimeout(() => setFocused(false), 180)}
                    onKeyDown={(e) => e.key === "Enter" && q.trim() && go(q)}
                    placeholder="نام محصول، گرید یا کاربرد را جستجو کنید"
                    className="flex-1 bg-transparent px-3.5 py-4 text-[14px] text-paper placeholder:text-paper/30 outline-none min-w-0"
                  />
                  <button
                    onClick={() => go(q || popular[0])}
                    className="m-1.5 inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-charcoal font-bold text-[13px] rounded-lg px-5 transition-colors shrink-0"
                  >
                    جستجو
                  </button>
                </div>

                {/* suggestions */}
                {focused && suggestions.length > 0 && (
                  <div className="fade-up absolute top-full inset-x-0 mt-2 bg-graphite border border-white/12 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-30">
                    {suggestions.map((p) => (
                      <button
                        key={p.id}
                        onMouseDown={() => go(p.name)}
                        className="w-full flex items-center justify-between gap-4 px-5 py-3 text-right hover:bg-white/5 transition-colors border-b border-white/6 last:border-0"
                      >
                        <span className="text-[13.5px] font-medium text-paper">
                          {p.name}
                          {p.code && <span className="latin text-[11px] text-accent font-semibold ms-2">{p.code}</span>}
                        </span>
                        <span className="text-[11px] text-paper/40 shrink-0">{p.grade}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-[11.5px] text-paper/40">جستجوهای پرتکرار:</span>
                {popular.map((t) => (
                  <button
                    key={t}
                    onClick={() => go(t)}
                    className="text-[11.5px] font-medium text-paper/60 border border-white/12 rounded-full px-3.5 py-1.5 hover:border-accent/60 hover:text-paper transition-colors"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* visual — product slider */}
        <Reveal delay={220} className="lg:col-span-5">
          <ProductSlider onInquire={onSearch} />
        </Reveal>
      </div>

      {/* technical codes ticker */}
      <div className="relative border-t border-white/10 bg-graphite/60 py-3 overflow-hidden pause-hover" dir="ltr">
        <div className="marquee-track flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
              {tickerCodes.map((c) => (
                <span key={c} className="flex items-center whitespace-nowrap px-6">
                  <span className="latin text-[12px] font-semibold tracking-[0.2em] text-paper/45">{c}</span>
                  <svg viewBox="0 0 8 8" className="w-1.5 h-1.5 ms-6 fill-accent/70">
                    <rect x="1" y="1" width="6" height="6" transform="rotate(45 4 4)" />
                  </svg>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————— premium editorial product slider (replaces the single hero image) ————— */
function ProductSlider({ onInquire }: { onInquire: (q: string) => void }) {
  const slides = useMemo(
    () =>
      slideIds
        .map((id) => products.find((p) => p.id === id))
        .filter((p): p is NonNullable<typeof p> => Boolean(p))
        .map((p) => {
          const cat = categories.find((c) => c.id === p.category);
          return { ...p, img: slideImg[p.id], catName: cat?.name ?? p.grade };
        }),
    []
  );
  const [index, setIndex] = useState(0);

  const go = (next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  };
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5200);
    return () => clearInterval(t);
  }, [slides.length]);

  const active = slides[index];

  return (
    <div className="relative max-w-md mx-auto">
      {/* frame */}
      <div className="absolute -inset-3 border border-white/12 rounded-xl rotate-2 pointer-events-none" />
      <div className="relative rounded-xl overflow-hidden border border-white/12 shadow-2xl shadow-black/60 bg-graphite">
        {/* fader stack */}
        <div className="relative h-[430px] md:h-[520px]">
          {slides.map((s, i) => {
            const isActive = i === index;
            const isPrev = i === (index - 1 + slides.length) % slides.length;
            return (
              <div
                key={s.id}
                aria-hidden={!isActive}
                className={`absolute inset-0 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive
                    ? "z-10 opacity-100 translate-x-0"
                    : isPrev
                      ? "z-0 opacity-0 translate-x-6"
                      : "z-0 opacity-0 -translate-x-6"
                }`}
                style={{ pointerEvents: isActive ? "auto" : "none" }}
              >
                <img
                  src={s.img}
                  alt={s.name}
                  className="img-grade w-full h-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/95 via-charcoal/55 to-transparent p-6 pt-24">
                  <p className="text-[10px] font-bold text-white/45 tracking-wide mb-2 flex items-center gap-2">
                    <span className="w-5 h-px bg-accent/70" />
                    {s.catName}
                    {s.code && <span className="latin text-[9px] font-semibold text-accent tracking-widest">{s.code}</span>}
                  </p>
                  <h3 className="font-black text-[22px] leading-9 text-white">{s.name}</h3>
                  <p className="mt-1.5 text-[11.5px] leading-6 text-white/60 max-w-[17rem] line-clamp-2">{s.blurb}</p>
                  <button
                    onClick={() => onInquire(s.name)}
                    className="mt-4 inline-flex items-center gap-1.5 text-[11.5px] font-bold text-white border border-white/35 rounded-md px-3.5 py-2 hover:bg-accent hover:border-accent hover:text-charcoal transition-colors"
                  >
                    استعلام قیمت
                    <ArrowLeftIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* controls */}
        <button
          onClick={prev}
          aria-label="محصول قبلی"
          className="absolute top-1/2 -translate-y-1/2 right-3 z-20 w-9 h-9 grid place-items-center rounded-full bg-charcoal/45 border border-white/15 text-white opacity-80 hover:opacity-100 hover:bg-charcoal/70 backdrop-blur transition-all"
        >
          <ArrowLeftIcon className="w-4 h-4 rotate-0" />
        </button>
        <button
          onClick={next}
          aria-label="محصول بعدی"
          className="absolute top-1/2 -translate-y-1/2 left-3 z-20 w-9 h-9 grid place-items-center rounded-full bg-charcoal/45 border border-white/15 text-white opacity-80 hover:opacity-100 hover:bg-charcoal/70 backdrop-blur transition-all"
        >
          <ArrowLeftIcon className="w-4 h-4 rotate-180" />
        </button>

        {/* pagination */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              aria-label={`نمایش ${s.name}`}
              className={`rounded-full transition-all duration-300 ${
                i === index ? "w-6 h-1.5 bg-accent" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="pointer-events-none" aria-hidden>
        <div className="sr-only">اسلایدر؛ {index + 1} از {slides.length} — {active?.name}</div>
      </div>
    </div>
  );
}
