const plans = [
  {
    name: "Кухня «Эконом»",
    price: "от 450 000 тг",
    description:
      "Прямые и угловые кухни с практичными ЛДСП-фасадами. Идеальный вариант для сдачи в аренду или первого жилья.",
    features: [
      "Фасады ЛДСП",
      "Столешница влагостойкая",
      "Фурнитура среднего сегмента",
      "Срок изготовления от 7 дней"
    ]
  },
  {
    name: "Кухня «Комфорт»",
    price: "от 750 000 тг",
    description:
      "Оптимальное сочетание цены и качества. Крашеный МДФ, больше вариантов цветов и планировок.",
    features: [
      "Фасады МДФ эмаль / плёнка",
      "Фурнитура с доводчиками",
      "Возможность встроенной техники",
      "Срок изготовления от 10–15 дней"
    ],
    popular: true
  },
  {
    name: "Кухня «Премиум»",
    price: "от 1 200 000 тг",
    description:
      "Для проектов, где важен вау-эффект: сложные фасады, шпон, премиальная фурнитура и нестандартные решения.",
    features: [
      "Фасады шпон / массив / комбинированные",
      "Премиальная фурнитура (Blum, Hettich)",
      "Сложные планировки и острова",
      "Индивидуальный подход"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-slate-950">
      <div className="container-main">
        <h2 className="section-title">Примерные расчёты</h2>
        <p className="section-subtitle">
          Итоговая стоимость зависит от метража, выбранных материалов и
          фурнитуры. Ниже — ориентиры, чтобы понимать порядок цен.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`card flex h-full flex-col border border-slate-800 bg-slate-950/85 shadow-[0_18px_35px_rgba(15,23,42,0.9)] p-6 ${
                plan.popular ? "border-brand-500 ring-1 ring-brand-500/40" : ""
              }`}
            >
              {plan.popular && (
                <div className="mb-3 inline-flex w-fit rounded-full bg-brand-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-300">
                  Самый популярный вариант
                </div>
              )}

              <div className="mb-4 space-y-1">
                <h3 className="text-base font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="text-sm font-semibold text-brand-400">
                  {plan.price}
                </p>
                <p className="text-xs text-slate-300">{plan.description}</p>
              </div>

              <ul className="flex-1 space-y-2 text-xs text-slate-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <a
                  href="#contacts"
                  className="btn-outline w-full justify-center rounded-full border-slate-700 text-xs font-semibold text-slate-100 hover:border-brand-400 hover:text-brand-200"
                >
                  Обсудить проект
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
