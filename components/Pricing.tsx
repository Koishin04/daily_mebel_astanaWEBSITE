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

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`card flex flex-col p-6 ${
                plan.popular ? "border-brand-500 ring-1 ring-brand-500/40" : ""
              }`}
            >
              {plan.popular && (
                <div className="mb-3 inline-flex w-fit rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-300">
                  Самый популярный вариант
                </div>
              )}
              <h3 className="mb-2 text-base font-semibold text-white">
                {plan.name}
              </h3>
              <p className="mb-3 text-sm text-brand-400">{plan.price}</p>
              <p className="mb-4 text-sm text-slate-300">{plan.description}</p>
              <ul className="mb-4 space-y-2 text-sm text-slate-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <a href="#contacts" className="btn-outline w-full justify-center">
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
