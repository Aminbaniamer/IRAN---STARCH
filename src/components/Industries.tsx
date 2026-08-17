import { useState } from "react";
import { industries, products, benefits } from "../data";
import { Reveal } from "../hooks";
import { industryIcons, benefitIcons, ArrowLeftIcon } from "./Icons";

function IndustryExplorer({ onBrowseIndustry }: { onBrowseIndustry: (id: string) => void }) {
  const [activeId, setActiveId] = useState(industries[0].id);
  const active = industries.find((i) => i.id === activeId) ?? industries[0];
  const ActiveIcon = industryIcons[active.icon];
  const related = active.related
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section id="industries" className="bg-paper py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <Reveal>
            <div>
              <p className="flex items-center gap-3 text-brand font-bold text-[13px] mb-3">
                <span className="w-8 h-[2px] bg-brand" />
                صنایع و کاربردها
              </p>
              <h2 className="font-black text-3xl md:text-[40px] text-charcoal leading-tight">
                راهکارهای ما برای صنایع
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[13px] text-sec max-w-md leading-7 md:text-left">
              ما فقط محصول نمی‌فروشیم؛ گرید مناسب کاربرد شما را پیشنهاد می‌دهیم و تا تأمین نهایی همراه
              خط تولیدتان هستیم.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* selector */}
          <Reveal className="lg:col-span-4" delay={80}>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              {industries.map((ind) => {
                const Ic = industryIcons[ind.icon];
                const isActive = ind.id === activeId;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveId(ind.id)}
                    className={`flex items-center gap-3 rounded-lg border px-4 py-3.5 text-right transition-all duration-200 ${
                      isActive
                        ? "bg-charcoal text-white border-charcoal shadow-lg shadow-charcoal/20"
                        : "bg-surface border-line text-charcoal/80 hover:border-brand/50 hover:text-brand"
                    }`}
                  >
                    <Ic className={`w-5 h-5 shrink-0 transition-colors ${isActive ? "text-accent" : "text-brand/70"}`} />
                    <span className="text-[13px] font-bold truncate">{ind.name}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* detail */}
          <Reveal className="lg:col-span-8" delay={160}>
            <div key={active.id} className="fade-up h-full bg-surface border border-line rounded-xl p-7 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-brand/6 blur-3xl rounded-full pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-13 h-13 grid place-items-center rounded-lg bg-charcoal text-accent p-3">
                    <ActiveIcon className="w-7 h-7" />
                  </span>
                  <div>
                    <h3 className="font-black text-[22px] text-charcoal">{active.name}</h3>
                    <p className="latin text-[9.5px] font-semibold tracking-[0.3em] text-brand mt-1">INDUSTRY SOLUTION</p>
                  </div>
                </div>

                <p className="text-[14px] text-sec leading-8 max-w-2xl mb-7">{active.desc}</p>

                <p className="text-[11.5px] font-bold text-sec mb-3">محصولات مرتبط با این صنعت</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {related.map((p) => (
                    <span key={p.id} className="inline-flex items-center gap-2 text-[12px] font-bold text-charcoal bg-paper border border-line rounded-full px-3.5 py-2">
                      {p.name}
                      {p.code && <span className="latin text-[9.5px] font-semibold text-brand">{p.code}</span>}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onBrowseIndustry(active.id)}
                    className="inline-flex items-center gap-2 bg-brand text-white font-bold text-[13px] rounded-lg px-6 py-3 hover:bg-brand2 transition-colors"
                  >
                    مشاهدهٔ راهکارها
                    <ArrowLeftIcon className="w-4 h-4" />
                  </button>
                  <a
                    href="#rfq"
                    className="inline-flex items-center gap-2 border border-line text-charcoal font-bold text-[13px] rounded-lg px-6 py-3 hover:border-brand hover:text-brand transition-colors"
                  >
                    مشاورهٔ تخصصی این صنعت
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function WhyUs() {
  return (
    <section id="about" className="bg-surface border-y border-line py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12">
        {/* sticky intro */}
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="flex items-center gap-3 text-brand font-bold text-[13px] mb-3">
              <span className="w-8 h-[2px] bg-brand" />
              درباره ما
            </p>
            <h2 className="font-black text-3xl md:text-[40px] text-charcoal leading-tight mb-5">
              چرا مرکز نشاسته ایران؟
            </h2>
            <p className="text-[13.5px] text-sec leading-8 mb-8 max-w-md">
              مرکز نشاسته ایران یک پلتفرم تخصصی تأمین عمده است؛ ترکیبی از دانش فنی محصول، شفافیت بازار و
              لجستیک سراسری که خرید سازمانی نشاسته را ساده، قابل اتکا و شفاف می‌کند.
            </p>

            {/* visual composition: main image + video + two supporting */}
            <div className="grid grid-cols-2 gap-3 max-w-md">
              {/* main large image */}
              <figure className="group relative col-span-2 rounded-xl overflow-hidden border border-line shadow-lg shadow-charcoal/10">
                <img
                  src="/images/warehouse.jpg"
                  alt="انبار مرکزی و لجستیک ارسال سراسری"
                  className="img-grade w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-4 pt-14 text-white">
                  <p className="font-bold text-[13.5px]">انبار مرکزی و لجستیک سراسری</p>
                  <p className="text-[10.5px] text-white/60 mt-0.5">از کیسه تا تانکر — ارسال هماهنگ به سراسر کشور</p>
                </figcaption>
              </figure>

              {/* video area (clearly a placeholder — no fabricated company footage) */}
              <div className="group relative col-span-2 rounded-xl overflow-hidden border border-line shadow-md cursor-pointer">
                <img
                  src="/images/plant.jpg"
                  alt="ویدئو — نمای خط تولید مکانیزه"
                  className="img-grade w-full h-40 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/35 transition-colors group-hover:bg-charcoal/20" />
                {/* play button */}
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid place-items-center w-14 h-14 rounded-full bg-paper/90 text-brand shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-4 pt-12 text-white">
                  <p className="font-bold text-[13px]">ویدئو — نمای خط تولید مکانیزه</p>
                  <p className="text-[10px] text-white/55 mt-0.5">پیش‌نمایش ویدئوی بررسی سایت — نمایی از تجهیزات و فرایند</p>
                </div>
              </div>

              {/* supporting image 1 */}
              <figure className="group relative rounded-xl overflow-hidden border border-line shadow-md">
                <img
                  src="/images/lab.jpg"
                  alt="آزمایشگاه کنترل کیفیت"
                  className="img-grade w-full h-36 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-3 pt-10 text-white">
                  <p className="font-bold text-[12px]">کنترل کیفیت</p>
                </figcaption>
              </figure>

              {/* supporting image 2 */}
              <figure className="group relative rounded-xl overflow-hidden border border-line shadow-md">
                <img
                  src="/images/powder-dark.jpg"
                  alt="پودر نشاسته خالص"
                  className="img-grade w-full h-36 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-3 pt-10 text-white">
                  <p className="font-bold text-[12px]">محصولات خالص</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </Reveal>

        {/* benefits */}
        <div className="lg:col-span-7">
          {benefits.map((b, i) => {
            const Ic = benefitIcons[b.icon];
            return (
              <Reveal key={b.title} delay={i * 60}>
                <div className="group flex items-start gap-5 py-6 border-b border-line first:pt-0 last:border-0 transition-all duration-300 hover:ps-3">
                  <span className="latin text-[13px] font-semibold text-sec/50 pt-1 w-8 shrink-0">
                    {(i + 1).toLocaleString("fa-IR").padStart(2, "۰")}
                  </span>
                  <span className="w-12 h-12 shrink-0 grid place-items-center rounded-lg bg-paper border border-line text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:border-brand">
                    <Ic className="w-6 h-6" />
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] text-charcoal mb-1.5">{b.title}</h3>
                    <p className="text-[13px] text-sec leading-7 max-w-lg">{b.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { IndustryExplorer };
