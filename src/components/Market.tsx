import { marketRows, products } from "../data";
import { Reveal } from "../hooks";
import { TrendUpIcon, TrendDownIcon, MinusIcon, ArrowLeftIcon, ClockIcon } from "./Icons";

const fallback: Record<string, string> = { "نشاسته اصلاح‌شده": "e1442" };

function productIdFor(name: string): string {
  const found = products.find((p) => p.name === name || name.includes(p.name));
  return found?.id ?? fallback[name] ?? "corn";
}

const statusMeta = {
  up: { label: "افزایشی", cls: "text-accent bg-accent/12 border-accent/30", Icon: TrendUpIcon },
  down: { label: "کاهشی", cls: "text-ok bg-ok/12 border-ok/30", Icon: TrendDownIcon },
  flat: { label: "ثابت", cls: "text-paper/50 bg-white/6 border-white/15", Icon: MinusIcon },
} as const;

export default function Market({ onInquire }: { onInquire: (id: string) => void }) {
  return (
    <section id="market" className="relative bg-charcoal text-paper py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 grid-lines" />
      <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] rounded-full bg-brand/16 blur-[140px]" />

      <div className="relative max-w-[1440px] mx-auto px-5 lg:px-8">
        {/* header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <Reveal>
            <div>
              <p className="flex items-center gap-3 text-accent font-bold text-[13px] mb-3">
                <span className="w-8 h-[2px] bg-accent" />
                تابلوی بازار
                <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold text-paper/60 border border-white/15 rounded-full px-2.5 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-ok animate-pulsedot" />
                  بروزرسانی زنده
                </span>
              </p>
              <h2 className="font-black text-3xl md:text-[40px] leading-tight">قیمت روز بازار نشاسته</h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex items-center gap-3 text-[12px] text-paper/50">
              <ClockIcon className="w-4 h-4 text-accent" />
              آخرین بروزرسانی: <b className="text-paper/80">امروز ۱۱:۳۰</b>
            </div>
          </Reveal>
        </div>

        {/* board — desktop */}
        <Reveal delay={100}>
          <div className="hidden md:block bg-graphite/70 border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/40">
            <table className="w-full text-right">
              <thead>
                <tr className="text-[11px] font-bold text-paper/40 tracking-wider border-b border-white/10">
                  <th className="py-4 ps-6 pe-3 font-bold">محصول</th>
                  <th className="py-4 px-3 font-bold">واحد</th>
                  <th className="py-4 px-3 font-bold">وضعیت بازار</th>
                  <th className="py-4 px-3 font-bold">تغییر</th>
                  <th className="py-4 px-3 font-bold">آخرین بروزرسانی</th>
                  <th className="py-4 ps-3 pe-6 font-bold text-left">استعلام</th>
                </tr>
              </thead>
              <tbody>
                {marketRows.map((r) => {
                  const m = statusMeta[r.status];
                  return (
                    <tr key={r.product} className="border-b border-white/6 last:border-0 hover:bg-white/[0.035] transition-colors duration-200">
                      <td className="py-4 ps-6 pe-3">
                        <span className="font-bold text-[14px] text-paper">{r.product}</span>
                      </td>
                      <td className="py-4 px-3 text-[12px] text-paper/50">{r.unit}</td>
                      <td className="py-4 px-3">
                        <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold border rounded-full px-3 py-1 ${m.cls}`}>
                          <m.Icon className="w-3.5 h-3.5" />
                          {m.label}
                        </span>
                      </td>
                      <td className={`py-4 px-3 latin text-[13px] font-semibold ${r.status === "up" ? "text-accent" : r.status === "down" ? "text-ok" : "text-paper/40"}`}>
                        {r.change}
                      </td>
                      <td className="py-4 px-3 text-[11.5px] text-paper/40">{r.updated}</td>
                      <td className="py-4 ps-3 pe-6 text-left">
                        <button
                          onClick={() => onInquire(productIdFor(r.product))}
                          className="text-[11.5px] font-bold border border-white/20 text-paper/75 rounded-md px-4 py-2 hover:bg-accent hover:border-accent hover:text-white transition-all duration-200"
                        >
                          برای قیمت روز استعلام کنید
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* board — mobile cards */}
        <div className="md:hidden space-y-3">
          {marketRows.map((r, i) => {
            const m = statusMeta[r.status];
            return (
              <Reveal key={r.product} delay={i * 60}>
                <div className="bg-graphite/70 border border-white/10 rounded-xl p-5">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-bold text-[14.5px]">{r.product}</span>
                    <span className={`inline-flex items-center gap-1.5 text-[10.5px] font-bold border rounded-full px-2.5 py-1 ${m.cls}`}>
                      <m.Icon className="w-3 h-3" />
                      {m.label}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11.5px] text-paper/45 mb-4">
                    <span>{r.unit}</span>
                    <span className="latin font-semibold text-[12px]">{r.change}</span>
                    <span>{r.updated}</span>
                  </div>
                  <button
                    onClick={() => onInquire(productIdFor(r.product))}
                    className="w-full text-[12px] font-bold border border-white/20 rounded-md py-2.5 hover:bg-accent hover:border-accent transition-colors"
                  >
                    برای قیمت روز استعلام کنید
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* footer row */}
        <Reveal delay={150}>
          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <p className="text-[11.5px] text-paper/40 leading-6 max-w-xl">
              نمایش وضعیت بازار صرفاً جنبهٔ اطلاع‌رسانی دارد. قیمت نهایی بر اساس حجم سفارش، گرید و شرایط
              پرداخت از طریق کارشناسان فروش اعلام می‌شود و به‌صورت عمومی منتشر نمی‌گردد.
            </p>
            <a
              href="#rfq"
              className="inline-flex items-center gap-2.5 bg-accent text-white font-bold text-[13.5px] rounded-lg px-6 py-3.5 hover:bg-brand transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-accent/25 shrink-0"
            >
              استعلام قیمت روز
              <ArrowLeftIcon className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
