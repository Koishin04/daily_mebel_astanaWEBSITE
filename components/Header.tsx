"use client";

import Link from "next/link";
import Image from "next/image";

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
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
      <div className="container-main flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-3">

          {/* ЛОГОТИП */}
          <div className="relative h-9 w-9 rounded-full overflow-hidden ring-2 ring-amber-500/70 ring-offset-2 ring-offset-slate-950 shadow-[0_0_25px_rgba(245,158,11,0.55)]">
            <Image
              src="/daily-mebel-logo.png"
              alt="Daily Mebel Astana"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold uppercase tracking-[0.16em]">
              DAILY_MEBEL_ASTANA
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
              className="transition-colors hover:text-white"
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
