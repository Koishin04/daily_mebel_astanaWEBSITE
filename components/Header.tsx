"use client";

import Link from "next/link";

const navItems = [
  { href: "#services", label: "Услуги" },
  { href: "#works", label: "Наши работы" },
  { href: "#steps", label: "Этапы работы" },
  { href: "#pricing", label: "Цены" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" }
];

export default function Header() {
  const handleScrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <div className="container-main flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-sm font-bold text-slate-950 shadow-lg shadow-brand-500/40">
            D
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold uppercase tracking-wide">
              daily_mebel_astana
            </span>
            <span className="text-xs text-slate-400">
              кухни · шкафы-купе · гардеробные
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={handleScrollToForm}
          className="btn-primary hidden sm:inline-flex"
        >
          Оставить заявку
        </button>
      </div>
    </header>
  );
}
