import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Works from "@/components/Works";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">

        {/* 1. HERO — глубокий темный блок */}
        <section
          id="hero"
          className="bg-slate-950 border-b border-slate-900 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
        >
          <Hero />
        </section>

        {/* 2. Почему выбирают нас — графитовый блок */}
        <section
          id="advantages"
          className="bg-slate-900 border-t border-slate-800 shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
        >
          <Advantages />
        </section>

        {/* 3. Наши работы — светлее, контраст */}
        <section
          id="works"
          className="bg-slate-800/60 border-t border-slate-700 shadow-[0_25px_40px_rgba(0,0,0,0.35)]"
        >
          <Works />
        </section>

        {/* 4. Этапы работы — графит + глубина */}
        <section
          id="steps"
          className="bg-slate-900/70 border-t border-slate-800 shadow-[0_25px_40px_rgba(0,0,0,0.5)]"
        >
          <Steps />
        </section>

        {/* 5. Примерные расчёты — светло-серый акцент */}
        <section
          id="pricing"
          className="bg-slate-800 border-t border-slate-700 shadow-[0_30px_50px_rgba(0,0,0,0.55)]"
        >
          <Pricing />
        </section>

        {/* 6. Отзывы — выделяем другим оттенком */}
        <section
          id="reviews"
          className="bg-slate-900 border-t border-slate-800 shadow-[0_25px_45px_rgba(0,0,0,0.45)]"
        >
          <Reviews />
        </section>

        {/* 7. Контакты — финальный глубокий блок */}
        <section
          id="contacts"
          className="bg-slate-950 border-t border-slate-900 shadow-[0_-10px_20px_rgba(0,0,0,0.6)]"
        >
          <ContactSection />
        </section>

      </main>

      <Footer />
    </>
  );
}
