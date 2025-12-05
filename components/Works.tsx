import Image from "next/image";

type Work = {
  title: string;
  price: string;
  description: string;
  image: string;
};

const works: Work[] = [
  {
    title: "Кухня в ЖК «Expo Boulevard»",
    price: "от 950 000 тг",
    description: "Прямая кухня 3,2 м, фасады МДФ эмаль, фурнитура Blum.",
    image: "/works/kitchen-expo-boulevard.jpg"
  },
  {
    title: "Гардеробная в частном доме",
    price: "от 680 000 тг",
    description: "Угловая гардеробная с подсветкой и штангами лифт.",
    image: "/works/wardrobe-private-house.jpg"
  },
  {
    title: "Шкаф-купе в прихожую",
    price: "от 380 000 тг",
    description: "Шкаф с зеркалами во весь рост и удобными секциями хранения.",
    image: "/works/hallway-wardrobe.jpg"
  },
  {
    title: "Кухня с островом",
    price: "от 1 400 000 тг",
    description: "Комбинация шпона и крашеного МДФ, остров и встроенная техника.",
    image: "/works/kitchen-island.jpg"
  },
  {
    title: "Гостиная со стеллажами",
    price: "от 520 000 тг",
    description: "ТВ-зона с нишей и закрытыми системами хранения.",
    image: "/works/livingroom-shelves.jpg"
  },
  {
    title: "Офисная кухня",
    price: "от 750 000 тг",
    description: "Практичные материалы, устойчивые к износу и частому использованию.",
    image: "/works/office-kitchen.jpg"
  }
];

export default function Works() {
  return (
    <section id="works" className="py-16">
      <div className="container-main space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-semibold">Наши работы</h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Ниже — часть реализованных проектов. В каждом случае мы адаптировали решения
            под планировку квартиры и пожелания заказчика.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {works.map((work) => (
            <article
              key={work.title}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/90 shadow-[0_18px_35px_rgba(15,23,42,0.9)]"
            >
              <div className="relative h-56 w-full bg-slate-900">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>

              <div className="flex flex-1 flex-col px-5 py-4">
                <h3 className="text-sm font-semibold text-slate-50 mb-1">
                  {work.title}
                </h3>
                <p className="text-xs text-slate-400 flex-1">
                  {work.description}
                </p>
                <p className="mt-3 text-xs font-semibold text-amber-400">
                  {work.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
