import { ShieldCheck, Ruler, HandCoins, FileText, Factory, Scale } from "lucide-react";

const advantages = [
  {
    title: "Бесплатный замер",
    text: "Замерщик приедет в удобное время, сделает точные замеры и подскажет оптимальные решения по планировке.",
    icon: Ruler
  },
  {
    title: "Гарантия до 3 лет",
    text: "Официальная гарантия на мебель и фурнитуру. В случае дефектов приедем и всё исправим.",
    icon: ShieldCheck
  },
  {
    title: "Работаем по договору",
    text: "Фиксируем сроки и стоимость в договоре. Никаких скрытых доплат по ходу проекта.",
    icon: FileText
  },
  {
    title: "Рассрочка через Kaspi",
    text: "Удобная рассрочка без переплат. Можно разделить оплату на несколько месяцев.",
    icon: HandCoins
  },
  {
    title: "Собственное производство",
    text: "Изготавливаем мебель на своём производстве в Астане — от распила до сборки.",
    icon: Factory
  },
  {
    title: "Честная смета",
    text: "Прозрачный расчёт с разбивкой по материалам, фурнитуре и работам.",
    icon: Scale
  }
];

export default function Advantages() {
  return (
    <section id="services" className="py-16">
      <div className="container-main space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-semibold">Почему выбирают daily_mebel_astana</h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Мы делаем кухни, шкафы-купе и гардеробные, которые реально удобны в повседневной жизни —
            без лишнего пафоса, но с аккуратным исполнением и продуманной эргономикой.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {advantages.map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="group flex h-full flex-col rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/70 to-slate-950/90 px-5 py-6 shadow-[0_18px_35px_rgba(15,23,42,0.85)]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/90 ring-1 ring-slate-700/70">
                <Icon className="h-5 w-5 text-slate-100" />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-slate-50">
                {title}
              </h3>
              <p className="text-xs text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
