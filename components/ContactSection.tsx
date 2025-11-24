"use client";

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  furnitureType: string;
  message: string;
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    furnitureType: "Кухня",
    message: ""
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try:
    {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Ошибка при отправке формы");
      }

      setStatus("success");
      setForm({
        name: "",
        phone: "",
        furnitureType: "Кухня",
        message: ""
      });
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        err?.message || "Не удалось отправить заявку. Попробуйте ещё раз."
      );
    }
  };

  return (
    <section
      id="contacts"
      className="section border-t border-slate-800/80 bg-slate-950"
    >
      <div className="container-main grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div>
          <h2 className="section-title text-left md:text-left">
            Оставить заявку
          </h2>
          <p className="section-subtitle text-left md:text-left">
            Заполните форму — мы перезвоним, уточним детали и предложим варианты
            решения под ваш бюджет. Можно прикрепить фото или планировку позже
            в WhatsApp.
          </p>

          <div className="mt-8 grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
            <div className="card p-4">
              <div className="text-xs uppercase tracking-wide text-slate-400">
                Телефон / WhatsApp
              </div>
              <div className="mt-1 font-semibold text-white">
                +7 707 000-00-00
              </div>
              <div className="mt-1 text-xs text-slate-400">
                Пн–Сб с 10:00 до 19:00
              </div>
            </div>
            <div className="card p-4">
              <div className="text-xs uppercase tracking-wide text-slate-400">
                Instagram
              </div>
              <div className="mt-1 font-semibold text-white">
                @daily_mebel_astana
              </div>
              <div className="mt-1 text-xs text-slate-400">
                Больше фото проектов и отзывов в профиле
              </div>
            </div>
            <div className="card p-4">
              <div className="text-xs uppercase tracking-wide text-slate-400">
                Город
              </div>
              <div className="mt-1 font-semibold text-white">Астана</div>
              <div className="mt-1 text-xs text-slate-400">
                Работаем по городу и ближайшему пригороду
              </div>
            </div>
          </div>
        </div>

        <div id="lead-form" className="card p-5 sm:p-6">
          <h3 className="mb-4 text-base font-semibold text-white">
            Краткая заявка на расчёт стоимости
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="label" htmlFor="name">
                Имя
              </label>
              <input
                id="name"
                name="name"
                className="input"
                placeholder="Как к вам обращаться?"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="label" htmlFor="phone">
                Телефон
              </label>
              <input
                id="phone"
                name="phone"
                className="input"
                placeholder="+7 ___ ___-__-__"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="label" htmlFor="furnitureType">
                Тип мебели
              </label>
              <select
                id="furnitureType"
                name="furnitureType"
                className="input"
                value={form.furnitureType}
                onChange={handleChange}
              >
                <option>Кухня</option>
                <option>Шкаф-купе</option>
                <option>Гардеробная</option>
                <option>Гостиная / ТВ-зона</option>
                <option>Другое</option>
              </select>
            </div>

            <div>
              <label className="label" htmlFor="message">
                Комментарий / описание проекта
              </label>
              <textarea
                id="message"
                name="message"
                className="textarea"
                placeholder="Например: кухня 3,5 м, потолки 2,7 м, нужна встроенная техника и барная стойка."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full justify-center"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Отправляем..." : "Отправить заявку"}
            </button>

            {status === "success" && (
              <p className="text-xs text-emerald-400">
                Спасибо! Мы свяжемся с вами в ближайшее время.
              </p>
            )}

            {status === "error" && (
              <p className="text-xs text-red-400">
                {errorMessage || "Произошла ошибка. Попробуйте ещё раз."}
              </p>
            )}

            <p className="mt-2 text-[11px] leading-snug text-slate-500">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              и условиями конфиденциальности.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
