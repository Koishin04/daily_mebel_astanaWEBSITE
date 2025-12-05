const steps = [
  {
    title: "Заявка или звонок",
    text: "Оставляете заявку на сайте или пишете нам в WhatsApp. Кратко описываете задачу."
  },
  {
    title: "Выезд на замер",
    text: "Специалист приезжает в удобное время, замеряет помещение и учитывает все нюансы."
  },
  {
    title: "Дизайн и согласование",
    text: "Готовим 3D-визуализацию и детальный расчёт. При необходимости вносим правки."
  },
  {
    title: "Производство",
    text: "Запускаем проект в производство на нашем цеху, средний срок изготовления — от 7 до 20 дней."
  },
  {
    title: "Доставка и монтаж",
    text: "Привозим мебель, аккуратно собираем и вывозим упаковку. Проверяем все механизмы."
  },
  {
    title: "Поддержка и гарантия",
    text: "При возникновении вопросов по эксплуатации вы всегда можете к нам обратиться."
  }
];

export default function Steps() {
  return (
    <section id="steps" className="py-16">
      <div className="container-main">
        <div className="mb-8 text-center space-y-2">
          <h2 className="text-3xl font-semibold">Как мы работаем</h2>
          <p className="text-sm text-slate-400">
            Прозрачный и понятный процесс от первой заявки до готовой мебели у вас дома.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* вертикальная линия */}
          <div className="pointer-events-none absolute left-5 top-0 h-full w-px bg-slate-800/90" />

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 px-5 py-4 shadow-[0_18px_35px_rgba(15,23,42,0.9)]"
              >
                {/* круг с номером */}
                <div className="relative z-10 flex flex-none flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(245,158,11,0.75)]">
                    {index + 1}
                  </div>
                </div>

                {/* текст */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
