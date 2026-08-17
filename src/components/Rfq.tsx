import { useState, type FormEvent } from "react";
import { products, categories, industries, resources, contact } from "../data";
import { Reveal } from "../hooks";
import {
  LogoMark,
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
  ArrowLeftIcon,
  CheckIcon,
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "./Icons";

const volumes = ["زیر ۱ تن", "۱ تا ۵ تن", "۵ تا ۲۰ تن", "بیش از ۲۰ تن", "هنوز مشخص نیست"];

const normalizeDigits = (s: string) =>
  s
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));

type Form = { name: string; company: string; phone: string; volume: string; message: string };

/* ————— 13) final RFQ ————— */
export default function Rfq({
  productValue,
  onProductChange,
}: {
  productValue: string;
  onProductChange: (id: string) => void;
}) {
  const [form, setForm] = useState<Form>({ name: "", company: "", phone: "", volume: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Form | "product", string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof Form, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs: typeof errors = {};
    if (form.name.trim().length < 3) errs.name = "لطفاً نام کامل را وارد کنید.";
    const phone = normalizeDigits(form.phone.trim()).replace(/[\s-]/g, "");
    if (!/^0\d{10}$/.test(phone)) errs.phone = "شمارهٔ تماس معتبر نیست. (مثال: ۰۹۱۲۱۲۳۴۵۶۷)";
    if (!productValue) errs.product = "محصول موردنظر را انتخاب کنید.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  return (
    <section id="rfq" className="relative bg-charcoal text-paper py-16 md:py-28 overflow-hidden">
      <img src="/images/powder-dark.jpg" alt="" aria-hidden className="img-grade absolute inset-0 w-full h-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-l from-charcoal via-charcoal/92 to-charcoal/70" />
      <div className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full bg-brand/20 blur-[150px]" />

      <div className="relative max-w-[1440px] mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-start">
        {/* copy */}
        <Reveal className="lg:col-span-5">
          <p className="flex items-center gap-3 text-accent font-bold text-[13px] mb-4">
            <span className="w-8 h-[2px] bg-accent" />
            استعلام قیمت و پیش‌فاکتور
          </p>
          <h2 className="font-black text-3xl md:text-[44px] leading-[1.4] mb-6">
            برای تأمین عمدهٔ محصول موردنیازتان{" "}
            <span className="text-accent">آماده‌ایم.</span>
          </h2>
          <p className="text-[14px] text-paper/60 leading-8 max-w-md mb-8">
            محصول، حجم موردنیاز و اطلاعات تماس خود را ثبت کنید تا کارشناسان فروش برای استعلام قیمت و
            شرایط تأمین با شما تماس بگیرند.
          </p>

          <ul className="space-y-3.5 mb-10">
            {["پاسخ‌گویی حداکثر ۲ ساعت کاری", "پیش‌فاکتور رسمی به‌همراه برگهٔ آنالیز (COA)", "بدون نیاز به ثبت‌نام یا پرداخت آنلاین"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-[13.5px] text-paper/75">
                <span className="w-6 h-6 shrink-0 grid place-items-center rounded-full bg-ok/15 text-ok">
                  <CheckIcon className="w-3.5 h-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${normalizeDigits(contact.phone)}`} className="inline-flex items-center justify-center gap-2.5 border border-white/20 rounded-lg px-5 py-3 text-[13px] font-bold text-paper hover:border-accent hover:text-accent transition-colors" dir="ltr">
              <PhoneIcon className="w-4.5 h-4.5" />
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="inline-flex items-center justify-center gap-2.5 border border-white/20 rounded-lg px-5 py-3 text-[13px] font-bold text-paper hover:border-accent hover:text-accent transition-colors" dir="ltr">
              <MailIcon className="w-4.5 h-4.5" />
              {contact.email}
            </a>
          </div>
        </Reveal>

        {/* form */}
        <Reveal delay={150} className="lg:col-span-7">
          {submitted ? (
            <div className="fade-up bg-surface text-ink2 rounded-xl p-10 md:p-14 text-center border border-line shadow-2xl shadow-black/50">
              <svg viewBox="0 0 56 56" className="w-20 h-20 mx-auto mb-6">
                <circle cx="28" cy="28" r="26" fill="rgba(47,118,84,0.1)" stroke="#2F7654" strokeWidth="2.5" className="draw-circle" style={{ strokeDasharray: 166 }} />
                <path d="M17 29l8 8 15-17" fill="none" stroke="#2F7654" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="draw-check" />
              </svg>
              <h3 className="font-black text-2xl text-charcoal mb-3">درخواست شما ثبت شد</h3>
              <p className="text-[13.5px] text-sec leading-8 max-w-md mx-auto mb-8">
                کارشناس فروش مرکز نشاسته ایران حداکثر تا <b className="text-charcoal">۲ ساعت کاری</b> آینده با
                شما تماس می‌گیرد و پیش‌فاکتور را به‌همراه برگهٔ آنالیز محصول ارسال می‌کند.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", company: "", phone: "", volume: "", message: "" });
                }}
                className="inline-flex items-center gap-2 bg-charcoal text-white font-bold text-[13px] rounded-lg px-6 py-3 hover:bg-graphite transition-colors"
              >
                ثبت درخواست جدید
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="bg-surface text-ink2 rounded-xl p-7 md:p-9 shadow-2xl shadow-black/50 border border-line">
              <div className="flex items-center justify-between gap-4 mb-7 pb-5 border-b border-line">
                <div>
                  <h3 className="font-black text-xl text-charcoal">درخواست پیش‌فاکتور</h3>
                  <p className="text-[11.5px] text-sec mt-1">فرم زیر را تکمیل کنید؛ استعلام شما مستقیم به کارشناس فروش ارجاع می‌شود.</p>
                </div>
                <span className="latin hidden sm:block text-[9px] font-bold tracking-[0.25em] text-brand border border-brand/25 bg-brand/6 rounded px-2.5 py-1.5">
                  RFQ
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11.5px] font-bold text-sec mb-2">نام و نام خانوادگی *</label>
                  <input className={`field ${errors.name ? "err" : ""}`} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="مثلاً: سارا احمدی" />
                  {errors.name && <p className="text-[11px] text-err font-bold mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-[11.5px] font-bold text-sec mb-2">شرکت / کارخانه</label>
                  <input className="field" value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="اختیاری" />
                </div>
                <div>
                  <label className="block text-[11.5px] font-bold text-sec mb-2">شمارهٔ تماس *</label>
                  <input className={`field ${errors.phone ? "err" : ""}`} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="۰۹۱۲۱۲۳۴۵۶۷" dir="ltr" />
                  {errors.phone && <p className="text-[11px] text-err font-bold mt-1.5">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-[11.5px] font-bold text-sec mb-2">محصول موردنظر *</label>
                  <select className={`field ${errors.product ? "err" : ""}`} value={productValue} onChange={(e) => onProductChange(e.target.value)}>
                    <option value="">انتخاب کنید…</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                        {p.code ? ` (${p.code})` : ""}
                      </option>
                    ))}
                    <option value="other">سایر / نیاز به مشاوره دارم</option>
                  </select>
                  {errors.product && <p className="text-[11px] text-err font-bold mt-1.5">{errors.product}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11.5px] font-bold text-sec mb-2">حجم تقریبی موردنیاز</label>
                  <div className="flex flex-wrap gap-2">
                    {volumes.map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => set("volume", form.volume === v ? "" : v)}
                        className={`text-[11.5px] font-bold rounded-full px-4 py-2 border transition-all duration-200 ${
                          form.volume === v
                            ? "bg-charcoal text-white border-charcoal"
                            : "bg-paper border-line text-sec hover:border-charcoal hover:text-charcoal"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11.5px] font-bold text-sec mb-2">توضیحات تکمیلی</label>
                  <textarea className="field min-h-20 resize-y" value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="گرید خاص، کاربرد، شهر مقصد و…" />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
                <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand text-white font-bold text-[14px] rounded-lg px-8 py-3.5 hover:bg-brand2 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-brand/30">
                  درخواست پیش‌فاکتور
                  <ArrowLeftIcon className="w-4.5 h-4.5" />
                </button>
                <a href={`tel:${normalizeDigits(contact.phone)}`} className="text-[12.5px] font-bold text-charcoal underline underline-offset-4 hover:text-brand transition-colors">
                  یا تماس مستقیم با کارشناس فروش
                </a>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* ————— mobile sticky RFQ bar ————— */
export function MobileBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-charcoal/96 backdrop-blur border-t border-white/12 px-4 py-3 flex items-center gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.35)]">
      <a href={`tel:${normalizeDigits(contact.phone)}`} aria-label="تماس" className="w-11 h-11 shrink-0 grid place-items-center rounded-lg border border-white/20 text-paper">
        <PhoneIcon className="w-5 h-5" />
      </a>
      <a href="#rfq" className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-charcoal font-bold text-[13.5px] rounded-lg py-3 active:bg-accent2 transition-colors">
        استعلام قیمت و پیش‌فاکتور
        <ArrowLeftIcon className="w-4 h-4" />
      </a>
    </div>
  );
}

/* ————— 14) footer ————— */
export function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-paper/55 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8 py-14 grid md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* brand */}
        <div className="lg:col-span-4">
          <a href="#home" className="flex items-center gap-3 mb-5">
            <LogoMark className="w-11 h-11" variant="light" />
            <span className="leading-none">
              <span className="block font-black text-[17px] text-paper">
                مرکز <span className="text-accent">نشاسته</span> ایران
              </span>
              <span className="latin block text-[8.5px] font-semibold tracking-[0.32em] text-paper/45 mt-1.5">IRAN STARCH CENTER</span>
            </span>
          </a>
          <p className="text-[12px] leading-7 max-w-xs mb-6">
            مرجع تخصصی تأمین عمدهٔ نشاسته، مشتقات و مواد اولیهٔ موردنیاز صنایع ایران؛ با اطلاعات شفاف
            بازار، مستندات فنی و مسیر سریع استعلام.
          </p>
          <div className="flex items-center gap-2.5">
            {[
              { Ic: InstagramIcon, label: "اینستاگرام" },
              { Ic: LinkedInIcon, label: "لینکدین" },
              { Ic: TelegramIcon, label: "تلگرام" },
              { Ic: WhatsAppIcon, label: "واتس‌اپ" },
            ].map(({ Ic, label }) => (
              <a key={label} href="#contact" aria-label={label} className="w-9 h-9 grid place-items-center rounded-lg border border-white/12 text-paper/50 hover:text-white hover:border-accent hover:bg-accent/15 transition-all duration-200">
                <Ic className="w-4.5 h-4.5" />
              </a>
            ))}
          </div>
        </div>

        {/* products */}
        <div className="lg:col-span-2">
          <h4 className="font-bold text-[13.5px] text-paper mb-4">محصولات</h4>
          <ul className="space-y-2.5 text-[12px]">
            {categories.map((c) => (
              <li key={c.id}>
                <a href="#catalog" className="hover:text-accent transition-colors">{c.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* industries */}
        <div className="lg:col-span-2">
          <h4 className="font-bold text-[13.5px] text-paper mb-4">صنایع</h4>
          <ul className="space-y-2.5 text-[12px]">
            {industries.slice(0, 6).map((i) => (
              <li key={i.id}>
                <a href="#industries" className="hover:text-accent transition-colors">{i.name}</a>
              </li>
            ))}
            <li>
              <a href="#industries" className="text-accent hover:text-white transition-colors">مشاهدهٔ همه…</a>
            </li>
          </ul>
        </div>

        {/* resources & market */}
        <div className="lg:col-span-2">
          <h4 className="font-bold text-[13.5px] text-paper mb-4">منابع و بازار</h4>
          <ul className="space-y-2.5 text-[12px]">
            {resources.map((r) => (
              <li key={r.title}>
                <a href="#resources" className="hover:text-accent transition-colors">{r.title}</a>
              </li>
            ))}
            <li>
              <a href="#knowledge" className="hover:text-accent transition-colors">مرکز دانش و بازار</a>
            </li>
          </ul>
        </div>

        {/* contact */}
        <div className="lg:col-span-2">
          <h4 className="font-bold text-[13.5px] text-paper mb-4">تماس با ما</h4>
          <ul className="space-y-3.5 text-[12px]">
            <li className="flex items-start gap-2.5">
              <PinIcon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {contact.address}
            </li>
            <li className="flex items-center gap-2.5" dir="ltr">
              <PhoneIcon className="w-4 h-4 text-accent shrink-0" />
              {contact.phone}
            </li>
            <li className="flex items-center gap-2.5" dir="ltr">
              <MailIcon className="w-4 h-4 text-accent shrink-0" />
              {contact.email}
            </li>
            <li className="flex items-start gap-2.5">
              <ClockIcon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              {contact.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-8 py-5 pb-24 lg:pb-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-paper/35">
          <p>© ۱۴۰۴ مرکز نشاسته ایران — تمامی حقوق محفوظ است.</p>
          <p>قیمت محصولات صرفاً از مسیر استعلام و بر اساس حجم و شرایط تأمین اعلام می‌شود.</p>
        </div>
      </div>
    </footer>
  );
}
