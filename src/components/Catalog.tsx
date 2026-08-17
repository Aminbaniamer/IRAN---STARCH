import { useEffect, useState } from "react";
import { categories, products, industries, type Product } from "../data";
import { Reveal } from "../hooks";
import { ArrowLeftIcon, XIcon, CheckIcon } from "./Icons";

const featuredIds = ["corn", "wheat", "potato", "rice", "tapioca", "e1442", "cationic", "usp"];

const availDot: Record<string, string> = {
  "موجود": "bg-ok",
  "محدود": "bg-warn",
  "سفارشی": "bg-sec",
};

function QuickView({ product, onClose, onInquire }: { product: Product; onClose: () => void; onInquire: (id: string) => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const cat = categories.find((c) => c.id === product.category);
  const relIndustries = industries.filter((i) => product.industries.includes(i.id));

  return (
    <div
      className="fixed inset-0 z-[90] bg-charcoal/70 backdrop-blur-sm grid place-items-center p-4 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-in bg-surface rounded-xl max-w-2xl w-full border border-line shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* head */}
        <div className="flex items-start justify-between gap-4 p-7 pb-5 border-b border-line">
          <div>
            <p className="latin text-[10px] font-semibold tracking-[0.3em] text-brand mb-2">
              {cat?.code ?? "PRODUCT"}
            </p>
            <h3 className="font-black text-2xl text-charcoal flex items-center gap-3 flex-wrap">
              {product.name}
              {product.code && (
                <span className="latin text-[12px] font-semibold text-brand bg-brand/8 border border-brand/20 rounded px-2 py-1">
                  {product.code}
                </span>
              )}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="بستن"
            className="w-9 h-9 shrink-0 grid place-items-center rounded-lg border border-line text-sec hover:text-brand hover:border-brand transition-colors"
          >
            <XIcon className="w-4.5 h-4.5" />
          </button>
        </div>

        <div className="p-7 pt-5">
          <p className="text-[13.5px] text-sec leading-7 mb-6">{product.blurb}</p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-7">
            {[
              { k: "منبع", v: product.source },
              { k: "گرید", v: product.grade },
              { k: "بسته‌بندی", v: product.packaging },
              { k: "وضعیت موجودی", v: product.availability },
            ].map((row) => (
              <div key={row.k} className="flex items-center justify-between gap-4 py-2.5 border-b border-dashed border-line">
                <span className="text-[12px] text-sec">{row.k}</span>
                <span className="text-[12.5px] font-bold text-charcoal">{row.v}</span>
              </div>
            ))}
          </div>

          <div className="mb-5">
            <p className="text-[11.5px] font-bold text-sec mb-2.5">کاربردهای اصلی</p>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((a) => (
                <span key={a} className="text-[11.5px] font-medium bg-paper border border-line rounded-full px-3 py-1.5 text-charcoal/75">
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <p className="text-[11.5px] font-bold text-sec mb-2.5">عملکرد فنی</p>
            <div className="flex flex-wrap gap-2">
              {product.funcs.map((f) => (
                <span key={f} className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-brand bg-brand/6 border border-brand/20 rounded-full px-3 py-1.5">
                  <CheckIcon className="w-3 h-3" />
                  {f}
                </span>
              ))}
            </div>
          </div>

          {relIndustries.length > 0 && (
            <p className="text-[11.5px] text-sec mb-7">
              صنایع مرتبط: <b className="text-charcoal">{relIndustries.map((i) => i.name).join("، ")}</b>
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-5 border-t border-line">
            <button
              onClick={() => onInquire(product.id)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand text-white font-bold text-[13.5px] rounded-lg px-7 py-3 hover:bg-brand2 transition-colors"
            >
              استعلام قیمت و پیش‌فاکتور
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-sec leading-5 text-center sm:text-right">
              قیمت بر اساس حجم و شرایط پرداخت اعلام می‌شود؛ برگهٔ آنالیز همراه پیش‌فاکتور است.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Catalog({
  onInquire,
  onBrowseCategory,
}: {
  onInquire: (id: string) => void;
  onBrowseCategory: (id: string) => void;
}) {
  const [view, setView] = useState<Product | null>(null);
  const featured = featuredIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  return (
    <section id="catalog" className="bg-paper py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
        {/* ——— categories ——— */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <Reveal>
            <div>
              <p className="flex items-center gap-3 text-brand font-bold text-[13px] mb-3">
                <span className="w-8 h-[2px] bg-brand" />
                دسته‌بندی محصولات
              </p>
              <h2 className="font-black text-3xl md:text-[40px] text-charcoal leading-tight">
                معماری کامل محصولات نشاسته
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[13px] text-sec max-w-md leading-7 md:text-left">
              شش گروه تخصصی از نشاسته‌های پایه تا گریدهای دارویی و صنعتی؛ هر دسته با مستندات فنی و مسیر
              استعلام مشخص.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {categories.map((c, i) => {
            const count = products.filter((p) => p.category === c.id).length;
            return (
              <Reveal key={c.id} delay={(i % 3) * 90}>
                <div className="group h-full bg-surface border border-line rounded-xl overflow-hidden transition-all duration-300 hover:border-brand/40 hover:shadow-[0_18px_50px_rgba(23,25,28,0.09)] hover:-translate-y-1 flex flex-col">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.name}
                      className="img-grade w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                    <span className="latin absolute top-4 start-4 text-[9.5px] font-semibold tracking-[0.28em] text-white/85 bg-charcoal/55 border border-white/20 rounded px-2.5 py-1">
                      {c.code}
                    </span>
                    <span className="absolute bottom-4 start-4 text-[11px] font-bold text-white/80">
                      {count.toLocaleString("fa-IR")} محصول فعال
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-black text-[18px] text-charcoal mb-2">{c.name}</h3>
                    <p className="text-[12.5px] text-sec leading-6 mb-4 flex-1">{c.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {c.tags.slice(0, 3).map((t) => (
                        <span key={t} className="latin text-[10px] font-semibold bg-paper border border-line rounded-full px-2.5 py-1 text-sec">
                          {t}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => onBrowseCategory(c.id)}
                      className="inline-flex items-center gap-2 text-[13px] font-bold text-brand group-hover:gap-3 transition-all duration-200 self-start"
                    >
                      مشاهدهٔ محصولات این دسته
                      <ArrowLeftIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ——— featured products ——— */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <Reveal>
            <div>
              <p className="flex items-center gap-3 text-brand font-bold text-[13px] mb-3">
                <span className="w-8 h-[2px] bg-brand" />
                محصولات منتخب
              </p>
              <h2 className="font-black text-3xl md:text-[40px] text-charcoal leading-tight">
                پرتقاضاترین گریدهای بازار
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <a href="#finder" className="inline-flex items-center gap-2 text-[13px] font-bold text-charcoal border border-line rounded-lg px-5 py-2.5 hover:border-brand hover:text-brand transition-colors">
              مشاهدهٔ همهٔ محصولات
              <ArrowLeftIcon className="w-4 h-4" />
            </a>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {featured.map((p, i) => {
            const cat = categories.find((c) => c.id === p.category);
            return (
              <Reveal key={p.id} delay={(i % 4) * 80}>
                <div className="group h-full bg-surface border border-line rounded-xl p-5 flex flex-col transition-all duration-300 hover:border-brand/40 hover:shadow-[0_14px_40px_rgba(23,25,28,0.08)] hover:-translate-y-1">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10.5px] font-bold text-sec bg-paper border border-line rounded-full px-2.5 py-1">
                      {cat?.name}
                    </span>
                    <span className="flex items-center gap-1.5 text-[10.5px] font-bold text-sec">
                      <span className={`w-1.5 h-1.5 rounded-full ${availDot[p.availability]}`} />
                      {p.availability}
                    </span>
                  </div>

                  <h3 className="font-bold text-[16px] text-charcoal leading-7 flex items-center gap-2 flex-wrap">
                    {p.name}
                    {p.code && (
                      <span className="latin text-[10.5px] font-semibold text-brand bg-brand/8 border border-brand/20 rounded px-1.5 py-0.5">
                        {p.code}
                      </span>
                    )}
                  </h3>
                  <p className="text-[11.5px] text-sec mt-1 mb-3">
                    منبع: {p.source} • گرید {p.grade}
                  </p>
                  <p className="text-[12px] text-sec/90 leading-6 mb-4 line-clamp-2 flex-1">{p.blurb}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.applications.slice(0, 2).map((a) => (
                      <span key={a} className="text-[10.5px] font-medium bg-paper border border-line rounded-full px-2.5 py-1 text-sec">
                        {a}
                      </span>
                    ))}
                  </div>

                  <div className="text-[10.5px] text-sec/80 mb-4 pb-4 border-b border-line/70">{p.packaging}</div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setView(p)}
                      className="flex-1 text-[12px] font-bold border border-line rounded-md py-2.5 text-charcoal hover:border-charcoal transition-colors"
                    >
                      مشاهدهٔ محصول
                    </button>
                    <button
                      onClick={() => onInquire(p.id)}
                      className="flex-1 text-[12px] font-bold bg-brand text-white rounded-md py-2.5 hover:bg-brand2 transition-colors"
                    >
                      استعلام قیمت
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {view && <QuickView product={view} onClose={() => setView(null)} onInquire={(id) => { setView(null); onInquire(id); }} />}
    </section>
  );
}
