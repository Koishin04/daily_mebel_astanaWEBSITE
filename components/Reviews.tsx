const reviews = [
  {
    name: "Айгерим, ЖК «Нурлы Жол»",
    text: "Заказывали кухню и шкаф в прихожую. Помогли продумать хранение, учли все мои пожелания по цветам. Монтаж прошёл аккуратно, без пыли и грязи.",
    area: "Кухня + шкаф-купе"
  },
  {
    name: "Руслан, район Есиль",
    text: "Делали гардеробную и ТВ-зону в гостиной. Понравилось, что честно рассказали, где можно сэкономить, а где лучше взять фурнитуру подороже.",
    area: "Гардеробная + гостиная"
  },
  {
    name: "Салтанат, ЖК «Зеленый квартал»",
    text: "Нужно было вписать кухню в сложную планировку. Ребята предложили несколько вариантов, в итоге получилось очень удобно и красиво.",
    area: "Кухня под ключ"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="section bg-slate-950">
      <div className="container-main">
        <h2 className="section-title">Отзывы клиентов</h2>
        <p className="section-subtitle">
          Большая часть заказов приходит к нам по рекомендациям. Для нас важно,
          чтобы мебель радовала вас каждый день, а не только на фото.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="card flex flex-col p-5 sm:p-6">
              <div className="mb-2 text-xs font-semibold text-brand-300">
                {r.area}
              </div>
              <p className="mb-4 text-sm text-slate-200">“{r.text}”</p>
              <div className="mt-auto text-sm font-semibold text-white">
                {r.name}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
