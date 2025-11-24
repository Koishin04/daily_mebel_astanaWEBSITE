const projects = [
  {
    title: "Кухня в ЖК «Expo Boulevard»",
    img: "/projects/kitchen-1.jpg",
    price: "от 950 000 тг",
    description: "Прямая кухня 3,2 м, фасады МДФ эмаль, фурнитура Blum."
  },
  {
    title: "Гардеробная в частном доме",
    img: "/projects/wardrobe-1.jpg",
    price: "от 680 000 тг",
    description: "Угловая гардеробная система с подсветкой и штангами лифт."
  },
  {
    title: "Шкаф-купе в прихожую",
    img: "/projects/closet-1.jpg",
    price: "от 380 000 тг",
    description: "Шкаф с зеркалами во весь рост, встроенная обувница и антресоль."
  },
  {
    title: "Кухня с островом",
    img: "/projects/kitchen-2.jpg",
    price: "от 1 400 000 тг",
    description: "Комбинация шпона и крашеного МДФ, встроенная техника."
  },
  {
    title: "Гостиная со стеллажами",
    img: "/projects/living-1.jpg",
    price: "от 520 000 тг",
    description: "ТВ-зона с нишей и закрытыми системами хранения."
  },
  {
    title: "Офисная кухня",
    img: "/projects/kitchen-3.jpg",
    price: "от 750 000 тг",
    description: "Практичные материалы, устойчивые к износу и частому использованию."
  }
];

export default function Works() {
  return (
    <section id="works" className="section bg-slate-950">
      <div className="container-main">
        <h2 className="section-title">Наши работы</h2>
        <p className="section-subtitle">
          Ниже — часть реализованных проектов. В каждом случае мы адаптировали
          решения под планировку квартиры и пожелания заказчика.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="card overflow-hidden">
              <div className="aspect-[4/3] w-full bg-slate-800">
                {/* Просто img, позже заменишь на свои фото */}
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-2 p-4 sm:p-5">
                <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                <p className="text-xs text-slate-300">{p.description}</p>
                <p className="text-sm font-semibold text-brand-400">{p.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
