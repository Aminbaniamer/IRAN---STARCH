import { useState } from "react";
import { navLinks, contact } from "../data";
import { useScrolled } from "../hooks";
import { LogoMark, SearchIcon, PhoneIcon, MailIcon, ClockIcon, ArrowLeftIcon } from "./Icons";

export default function Header() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* utility strip */}
      <div className="hidden lg:block bg-charcoal text-paper/55 text-[11px] border-b border-white/8">
        <div className="max-w-[1440px] mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:02191304000" className="flex items-center gap-1.5 hover:text-paper transition-colors" dir="ltr">
              <PhoneIcon className="w-3.5 h-3.5 text-accent" />
              {contact.phone}
            </a>
            <span className="flex items-center gap-1.5" dir="ltr">
              <MailIcon className="w-3.5 h-3.5 text-accent" />
              {contact.email}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ClockIcon className="w-3.5 h-3.5 text-accent" />
              {contact.hours}
            </span>
            <span className="text-paper/35">|</span>
            <span>بدون ثبت‌نام — استعلام مستقیم از کارشناس فروش</span>
          </div>
        </div>
      </div>

      {/* main header */}
      <header
        className={`sticky top-0 z-50 bg-paper/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "shadow-[0_8px_30px_rgba(23,25,28,0.08)] border-b border-line" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 lg:px-8 flex items-center justify-between gap-6 h-[70px]">
          {/* logo */}
          <a href="#home" className="flex items-center gap-3 shrink-0 group">
            <LogoMark className="w-11 h-11 transition-transform duration-300 group-hover:rotate-6" />
            <span className="leading-none">
              <span className="block font-black text-[17px] text-brand">
                مرکز <span className="text-accent">نشاسته</span> ایران
              </span>
              <span className="latin block text-[8.5px] font-semibold tracking-[0.32em] text-sec mt-1.5">
                IRAN STARCH CENTER
              </span>
            </span>
          </a>

          {/* nav */}
          <nav className="hidden xl:flex items-center gap-7 text-[13px] font-medium text-sec">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="pb-1 border-b-2 border-transparent hover:text-brand hover:border-brand transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* actions */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#finder"
              aria-label="جستجوی محصول"
              className="hidden md:grid w-10 h-10 place-items-center rounded-lg border border-line text-sec hover:text-brand hover:border-brand transition-colors"
            >
              <SearchIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href="tel:02191304000"
              className="hidden lg:inline-flex items-center gap-2 text-[12.5px] font-bold text-charcoal border border-line rounded-lg px-4 py-2.5 hover:border-brand hover:text-brand transition-colors"
              dir="ltr"
            >
              <PhoneIcon className="w-4 h-4" />
              {contact.phone}
            </a>
            <a
              href="#rfq"
              className="inline-flex items-center gap-2 bg-brand text-white font-bold text-[13px] rounded-lg px-5 py-2.5 hover:bg-brand2 transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-brand/25"
            >
              استعلام قیمت
              <ArrowLeftIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label="منو"
              className="xl:hidden w-10 h-10 grid place-items-center rounded-lg border border-line text-charcoal hover:border-brand hover:text-brand transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
              </svg>
            </button>
          </div>
        </div>

        {/* mobile panel */}
        <div className={`xl:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-[420px] border-t border-line" : "max-h-0"}`}>
          <nav className="px-5 py-4 flex flex-col bg-surface">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-[14px] font-medium text-ink2 hover:text-brand border-b border-line/60 last:border-0 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#finder"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 border border-line rounded-lg px-4 py-2.5 text-[13px] font-bold text-charcoal"
            >
              <SearchIcon className="w-4 h-4" />
              جستجوی محصول
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
