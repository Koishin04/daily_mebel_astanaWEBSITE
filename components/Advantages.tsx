const items = [
  {
    title: "Бесплатный замер",
    text: "Замерщик приедет в удобное время, сделает точные замеры и подскажет оптимальные решения по планировке."
  },
  {
    title: "Гарантия до 3 лет",
    text: "Официальная гарантия на мебель и фурнитуру. В случае дефектов приедем и всё исправим."
  },
  {
    title: "Работаем по договору",
    text: "Фиксируем сроки и стоимость в договоре. Никаких скрытых доплат по ходу проекта."
  },
  {
    title: "Рассрочка через Kaspi",
    text: "Удобная рассрочка без переплат. Можно разделить оплату на несколько месяцев."
  },
  {
    title: "Собственное производство",
    text: "Изготавливаем мебель на своём производстве в Астане — от распила до сборки."
  },
  {
    title: "Честная смета",
    text: "Прозрачный расчёт с разбивкой по материалам, фурнитуре и работам."
  }
];

export default function Advantages() {
  return (
    <section id="services" className="section bg-slate-950">
      <div className="container-main">
        <h2 className="section-title">Почему выбирают daily_mebel_astana</h2>
        <p className="section-subtitle">
          Мы делаем кухни, шкафы-купе и гардеробные, которые реально удобны в
          повседневной жизни — без лишнего пафоса, но с аккуратным исполнением
          и продуманной эргономикой.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="card p-5 sm:p-6">
              <h3 className="mb-2 text-sm font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
