'use client';

import React from "react";

export default function Home() {
  // Скролл к форме
  const handleScrollToRequest = () => {
    const el = document.getElementById('request');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Отправка в WhatsApp
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const msg = (form.elements.namedItem("msg") as HTMLTextAreaElement).value;

    const text =
      `Имя: ${name}%0A` +
      `Телефон: ${phone}%0A` +
      `Что нужно собрать: ${msg}`;

    const url = `https://wa.me/77070000000?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="page">
      {/* HEADER */}
      <header>
        <div className="logo">
          <div className="logo-mark">D</div>
          <div>
            <div className="logo-text-main">DAILY MEBEL ASTANA</div>
            <div className="logo-sub">Сборка · Установка · Замер</div>
          </div>
        </div>

        <nav>
          <a href="#services">Услуги</a>
          <a href="#gallery">Наши работы</a>
          <a href="#steps">Как мы работаем</a>
          <a href="#request">Оставить заявку</a>
        </nav>

        <div className="header-cta">
          <div className="phone-chip">📞 +7 7476802008</div>
          <button className="btn btn-outline" onClick={handleScrollToRequest}>
            Заказать звонок
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-label">
            <span className="hero-label-dot"></span>
            <span>Сборка мебели в Астане за 1 день</span>
          </div>

          <h1 className="hero-title">
            Профессиональная сборка и установка мебели{" "}
            <span>с гарантией до 12 месяцев</span>
          </h1>

          <p className="hero-subtitle">
            Приезжаем в удобное время, аккуратно собираем и устанавливаем мебель.
          </p>

          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={handleScrollToRequest}>
              Оставить заявку <span>→</span>
            </button>
            <button className="btn btn-outline" onClick={handleScrollToRequest}>
              Узнать цену по фото
            </button>
          </div>

          <div className="hero-note">
            Отправьте фото или список — мы быстро посчитаем стоимость.
          </div>

          <div className="hero-grid">
            <div className="hero-stat">
              <div className="hero-stat-main">250+</div>
              <div className="hero-stat-label">собранных кухонь</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-main">4.9★</div>
              <div className="hero-stat-label">оценка клиентов</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-main">1 день</div>
              <div className="hero-stat-label">выезд мастера</div>
            </div>
          </div>
        </div>

        {/* FORM BLOCK */}
        <aside className="hero-right" id="request">
          <div>
            <div className="hero-right-title">Оставить заявку на расчёт</div>
            <div className="hero-right-sub">
              В течение 10–15 минут перезвоним, уточним детали и скажем точную стоимость.
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Имя</label>
              <input id="name" name="name" type="text" placeholder="Как к вам обращаться?" required />
            </div>

            <div className="field">
              <label htmlFor="phone">Телефон / WhatsApp</label>
              <input id="phone" name="phone" type="tel" placeholder="+7 ___ ___-__-__" required />
            </div>

            <div className="field">
              <label htmlFor="msg">Что нужно собрать?</label>
              <textarea
                id="msg"
                name="msg"
                placeholder="Например: кухня 3 м, шкаф-купе, кровать"
              />
            </div>

            <div className="form-footer">
              <button className="btn btn-primary" type="submit">Отправить заявку</button>
              <div className="form-hint">
                Нажимая кнопку, вы соглашаетесь с обработкой данных.
              </div>
            </div>
          </form>

          <div className="badge-row">
            <span className="badge">Выезд по Астане</span>
            <span className="badge">Гарантия до 12 мес.</span>
            <span className="badge">Аккуратно, без мусора</span>
          </div>
        </aside>
      </section>

      {/* SERVICES */}
      <main>
        <section id="services">
          <h2 className="section-title">Наши услуги и цены</h2>
          <p className="section-sub">Точный расчёт делаем по фото.</p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-title">Сборка шкафа-купе</div>
              <div className="service-price">от 15 000 ₸</div>
            </div>

            <div className="service-card">
              <div className="service-title">Сборка кухни</div>
              <div className="service-price">от 25 000 ₸</div>
            </div>

            <div className="service-card">
              <div className="service-title">Кровати и детская мебель</div>
              <div className="service-price">от 8 000 ₸</div>
            </div>

            <div className="service-card">
              <div className="service-title">Мелкая мебель</div>
              <div className="service-price">от 3 000 ₸</div>
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section id="steps">
          <h2 className="section-title">Как мы работаем</h2>
          <p className="section-sub">Понятный процесс от заявки до результата.</p>

          <div className="steps">
            <div>
              <div className="step-num">Шаг 1</div>
              <div>Оставляете заявку или пишете в WhatsApp.</div>
            </div>
            <div>
              <div className="step-num">Шаг 2</div>
              <div>Присылаете фото мебели, мы называем точную цену.</div>
            </div>
            <div>
              <div className="step-num">Шаг 3</div>
              <div>Мастер приезжает и аккуратно собирает мебель.</div>
            </div>
            <div>
              <div className="step-num">Шаг 4</div>
              <div>Вы принимаете работу и получаете гарантию.</div>
            </div>
          </div>
        </section>
      </main>

      {/* GALLERY */}
      <section id="gallery">
        <h2 className="section-title">Наши работы</h2>
        <p className="section-sub">Позже добавим реальные фотографии проектов.</p>

        <div className="gallery-grid">
          <div className="gallery-item">Кухня 3 м</div>
          <div className="gallery-item">Шкаф-купе</div>
          <div className="gallery-item">Гардеробная</div>
          <div className="gallery-item">Детская комната</div>
          <div className="gallery-item">ТВ-зона</div>
          <div className="gallery-item">Офисная мебель</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>© 2025 Daily Mebel Astana</div>
        <div>
          WhatsApp: <a href="#">+7 707 000-00-00</a> · Instagram: <a href="#">@daily_mebel_astana</a>
        </div>
      </footer>
    </div>
  );
}
