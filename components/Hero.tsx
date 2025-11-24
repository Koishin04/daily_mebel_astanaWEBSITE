"use client";

export default function Hero() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-800 bg-[radial-gradient(circle_at_top,_#1f2937,_#020617)]"
    >
      {/* фон картинкой кухни – заменишь потом на свою */}
      <div className="absolute inset-0 bg-[url('/hero-kitchen.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/80 to-slate-950" />

      <div className="container-main relative z-10 flex flex-col gap-10 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-xs text-slate-300 ring-1 ring-slate-700/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Кухни и шкафы под ключ в Астане</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            Кухни и шкафы-купе{" "}
            <span className="text-brand-400">под ключ в Астане</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300">
            Проектируем, изготавливаем и аккуратно монтируем мебель под ваш
            интерьер. Бесплатный замер, честная смета, гарантия до 3 лет и
            удобная рассрочка через Kaspi без переплат.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button onClick={scrollToForm} className="btn-primary">
              Получить расчёт
            </button>
            <button
              onClick={scrollToForm}
              className="btn-outline text-xs sm:text-sm"
            >
              Отправить проект в WhatsApp
            </button>
          </div>

          <div className="grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
            <div>
              <div className="font-semibold text-white">от 7 дней</div>
              <div className="text-slate-400">срок производства кухни</div>
            </div>
            <div>
              <div className="font-semibold text-white">замер 0 тг</div>
              <div className="text-slate-400">выезд замерщика бесплатно</div>
            </div>
            <div>
              <div className="font-semibold text-white">до 3 лет</div>
              <div className="text-slate-400">официальная гарантия</div>
            </div>
          </div>
        </div>

        <div className="card max-w-md p-5 sm:p-6">
          <div className="mb-4 text-sm font-semibold text-white">
            Быстрый расчёт стоимости
          </div>
          <p className="mb-4 text-xs text-slate-300">
            Опишите свой проект и оставьте контакты — менеджер свяжется с вами
            в течение рабочего дня, задаст уточняющие вопросы и озвучит
            ориентировочную стоимость.
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>• Работаем по договору с прописанными сроками и гарантиями.</li>
            <li>• Свой цех в Астане, контролируем каждый этап производства.</li>
            <li>• Поможем подобрать материалы под ваш бюджет.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
