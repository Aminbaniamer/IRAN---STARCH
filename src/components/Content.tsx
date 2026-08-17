import { stats, steps, resources, articles, articleCats } from "../data";
import { Reveal } from "../hooks";
import { DocIcon, SampleIcon, ArrowLeftIcon, ShieldIcon, TruckIcon, ChatIcon, TargetIcon, CheckIcon } from "./Icons";

/* ————— 9) trust / scale ————— */
export function Stats() {
  const pillars = [
    { icon: ShieldIcon, t: "کیفیت" },
    { icon: TargetIcon, t: "تأمین" },
    { icon: ChatIcon, t: "مشاوره" },
    { icon: TruckIcon, t: "لجستیک" },
  ];

  return (
    <section className="relative bg-charcoal text-paper py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 grid-lines" />
      <div className="absolute -bottom-32 right-1/4 w-[560px] h-[560px] rounded-full bg-brand/14 blur-[150px]" />

      <div className="relative max-w-[1440px] mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        {/* intro + COA visual */}
        <Reveal className="lg:col-span-5">
          <p className="flex items-center gap-3 text-accent font-bold text-[13px] mb-3">
            <span className="w-8 h-[2px] bg-accent" />
            مقیاس و اعتماد
          </p>
          <h2 className="font-black text-3xl md:text-[40px] leading-tight mb-5">
            زیرساختی برای تأمینِ
            <br />
            بی‌وقفهٔ صنعت
          </h2>
          <p className="text-[13.5px] text-paper/55 leading-8 max-w-md mb-8">
            چهار ستون همکاری ما با صنایع: کیفیت مستند، تأمین پایدار، مشاورهٔ تخصصی و لجستیک سراسری.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {pillars.map((p) => (
              <span key={p.t} className="inline-flex items-center gap-2.5 border border-white/15 bg-white/4 rounded-lg px-4 py-2.5 text-[13px] font-bold text-paper/85 hover:border-accent/60 transition-colors">
                <p.icon className="w-4.5 h-4.5 text-accent" />
                {p.t}
              </span>
            ))}
          </div>

          {/* COA mock document */}
          <div className="relative max-w-xs">
            <div className="absolute -inset-2 border border-white/15 rounded-lg rotate-2" />
            <div className="relative bg-paper text-ink2 rounded-lg p-5 -rotate-1 shadow-2xl shadow-black/50">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-line">
                <div>
                  <p className="font-black text-[12px] text-charcoal">برگهٔ آنالیز</p>
                  <p className="latin text-[8.5px] font-semibold tracking-[0.25em] text-brand">CERTIFICATE OF ANALYSIS</p>
                </div>
                <span className="w-8 h-8 grid place-items-center rounded-full border-2 border-brand text-brand">
                  <CheckIcon className="w-4 h-4" />
                </span>
              </div>
              {["خلوص", "رطوبت", "pH", "بار میکروبی"].map((k, i) => (
                <div key={k} className="flex items-center justify-between py-1.5 border-b border-dashed border-line last:border-0">
                  <span className="text-[10.5px] text-sec">{k}</span>
                  <span className="h-1.5 rounded-full bg-line w-20 overflow-hidden">
                    <span className="block h-full bg-brand/70 rounded-full" style={{ width: `${88 - i * 14}%` }} />
                  </span>
                </div>
              ))}
              <p className="text-[9px] text-sec/70 mt-3">صادرشده برای هر محموله — آزمایشگاه کنترل کیفیت</p>
            </div>
          </div>
        </Reveal>

        {/* stats grid */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="bg-graphite/60 border border-white/10 rounded-xl p-7 md:p-9 h-full transition-all duration-300 hover:border-accent/40 hover:-translate-y-1">
                <p className="font-black text-4xl md:text-[52px] leading-none text-white mb-4 flex items-center gap-1" dir="ltr">
                  <span className="text-accent">{s.prefix}</span>
                  {s.placeholder ? (
                    <span className="latin stat-placeholder text-white/60" title="عدد نهایی در حال تأیید">
                      {s.value}
                    </span>
                  ) : (
                    <span>{s.value}</span>
                  )}
                </p>
                <p className="text-[12.5px] font-bold text-paper/60 leading-6">{s.label}</p>
                {s.placeholder && (
                  <p className="mt-3 inline-block text-[9.5px] font-bold text-warn/90 bg-warn/10 border border-warn/25 rounded-full px-2.5 py-1">
                    عدد نهایی در حال تأیید
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————— 10) procurement steps ————— */
export function Steps() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mb-12">
          <Reveal>
            <p className="flex items-center gap-3 text-brand font-bold text-[13px] mb-3">
              <span className="w-8 h-[2px] bg-brand" />
              فرایند تأمین
            </p>
            <h2 className="font-black text-3xl md:text-[40px] text-charcoal leading-tight">
              از استعلام تا تأمین، ساده و شفاف
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 inset-x-16 border-t-2 border-dashed border-line" />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="group relative bg-paper border border-line rounded-xl p-6 h-full transition-all duration-300 hover:border-brand/45 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(23,25,28,0.08)]">
                  <span className="relative z-10 inline-grid place-items-center w-16 h-16 rounded-lg bg-charcoal text-white font-black text-[19px] mb-5 transition-colors duration-300 group-hover:bg-brand">
                    {s.n}
                  </span>
                  <h3 className="font-bold text-[15px] text-charcoal mb-2">{s.title}</h3>
                  <p className="text-[12px] text-sec leading-6">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————— 11) technical resources ————— */
export function Resources() {
  return (
    <section id="resources" className="bg-paper border-y border-line py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <Reveal>
            <div>
              <p className="flex items-center gap-3 text-brand font-bold text-[13px] mb-3">
                <span className="w-8 h-[2px] bg-brand" />
                منابع فنی
              </p>
              <h2 className="font-black text-3xl md:text-[40px] text-charcoal leading-tight">
                مستندات فنی، برای تصمیم‌گیرندگان فنی
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <a
              href="#rfq"
              className="inline-flex items-center gap-2 bg-brand text-white font-bold text-[13px] rounded-lg px-6 py-3 hover:bg-brand2 transition-colors"
            >
              درخواست مستندات و نمونه
              <ArrowLeftIcon className="w-4 h-4" />
            </a>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
          {resources.map((r, i) => {
            const Ic = r.icon === "sample" ? SampleIcon : DocIcon;
            return (
              <Reveal key={r.title} delay={i * 70}>
                <div className="group h-full bg-surface border border-line rounded-xl p-6 flex flex-col transition-all duration-300 hover:border-brand/45 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(23,25,28,0.08)]">
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-11 h-11 grid place-items-center rounded-lg bg-brand/8 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      <Ic className="w-5.5 h-5.5" />
                    </span>
                    <span className="latin text-[9.5px] font-bold tracking-[0.2em] text-sec bg-paper border border-line rounded px-2 py-1">
                      {r.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-[15px] text-charcoal mb-2">{r.title}</h3>
                  <p className="text-[12px] text-sec leading-6 flex-1">{r.desc}</p>
                  <a href="#rfq" className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold text-brand group-hover:gap-2.5 transition-all duration-200">
                    دریافت
                    <ArrowLeftIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ————— 12) knowledge center ————— */
export function Knowledge() {
  return (
    <section id="knowledge" className="bg-surface py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <Reveal>
            <div>
              <p className="flex items-center gap-3 text-brand font-bold text-[13px] mb-3">
                <span className="w-8 h-[2px] bg-brand" />
                مرکز دانش و بازار نشاسته
              </p>
              <h2 className="font-black text-3xl md:text-[40px] text-charcoal leading-tight">
                دانش فنی و نبض بازار، یک‌جا
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-2">
              {articleCats.map((c) => (
                <span key={c} className="text-[11px] font-bold text-sec bg-paper border border-line rounded-full px-3.5 py-1.5 hover:border-brand/50 hover:text-brand transition-colors cursor-default">
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <article className="group h-full bg-paper border border-line rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-brand/45 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(23,25,28,0.08)] cursor-pointer">
                {/* article image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.imgAlt ?? a.title}
                    className="img-grade w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent" />
                  <span className="absolute top-3 start-3 text-[9.5px] font-bold text-white bg-charcoal/55 backdrop-blur border border-white/20 rounded-full px-3 py-1">
                    {a.cat}
                  </span>
                </div>
                <div className="p-6 pt-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="latin text-[11px] font-semibold text-sec/50">{(i + 1).toLocaleString("fa-IR").padStart(2, "۰")}</span>
                  </div>
                  <h3 className="font-bold text-[15px] text-charcoal leading-7 flex-1 transition-colors duration-200 group-hover:text-brand">
                    {a.title}
                  </h3>
                  <div className="mt-6 pt-4 border-t border-line flex items-center justify-between text-[11px] text-sec">
                    <span>{a.date}</span>
                    <span className="flex items-center gap-1.5">
                      مطالعه {a.time}
                      <ArrowLeftIcon className="w-3.5 h-3.5 text-brand transition-transform duration-200 group-hover:-translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
