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
    <section id="steps" className="section bg-slate-950">
      <div className="container-main">
        <h2 className="section-title">Как мы работаем</h2>
        <p className="section-subtitle">
          Прозрачный и понятный процесс от первой заявки до готовой мебели у
          вас дома.
        </p>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step.title} className="card flex gap-4 p-5 sm:p-6">
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-slate-950">
                {index + 1}
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-300">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
