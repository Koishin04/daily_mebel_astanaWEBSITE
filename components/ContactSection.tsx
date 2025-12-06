"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: "Кухня",
    comment: "",
  });

  // === Отправка формы → WhatsApp ===
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Здравствуйте! Хочу оставить заявку.%0A
Имя: ${form.name}%0A
Телефон: ${form.phone}%0A
Тип мебели: ${form.type}%0A
Комментарий: ${form.comment}`;

    const phone = "77760589029"; // <<< НОВЫЙ НОМЕР
    const url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contacts" className="py-20">
      <div className="container-main grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
        {/* Левая колонка */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Оставить заявку</h2>
            <p className="text-sm text-slate-400 max-w-md">
              Заполните форму — мы перезвоним, уточним детали и предложим варианты
              решения под ваш бюджет. Можно прикрепить фото или планировку позже
              в WhatsApp.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Телефон / WhatsApp
              </p>
              <p className="font-semibold text-slate-50">+7 776 058 9029</p>
              <p className="text-xs text-slate-500">Пн–Сб с 10:00 до 19:00</p>
            </div>

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Instagram
              </p>
              <p className="font-semibold text-slate-50">@daily_mebel_astana</p>
              <p className="text-xs text-slate-500">
                Больше фото проектов и отзывов в профиле.
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Город
              </p>
              <p className="font-semibold text-slate-50">Астана</p>
              <p className="text-xs text-slate-500">
                Работаем по городу и ближайшему пригороду.
              </p>
            </div>
          </div>
        </div>

        {/* Правая колонка — форма */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 px-6 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.95)]">
          <h3 className="mb-4 text-sm font-semibold text-slate-100">
            Краткая заявка на расчёт стоимости
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Имя
                </label>
                <input
                  placeholder="Как к вам обращаться?"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-100"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Телефон
                </label>
                <input
                  placeholder="+7 ___ ___-__-__"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-100"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">
                Тип мебели
              </label>
              <select
                className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-100"
                value={form.type}
                onChange={(e) =>
                  setForm({ ...form, type: e.target.value })
                }
              >
                <option>Кухня</option>
                <option>Шкаф-купе</option>
                <option>Гардеробная</option>
                <option>Офисная мебель</option>
                <option>Другое</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">
                Комментарий / описание проекта
              </label>
              <textarea
                rows={4}
                placeholder="Например: кухня 3,5 м, потолки 2,7 м, нужна встроенная техника."
                className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-100 resize-none"
                value={form.comment}
                onChange={(e) =>
                  setForm({ ...form, comment: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full justify-center rounded-full"
            >
              Отправить заявку
            </button>

            <p className="text-[11px] text-slate-500">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
