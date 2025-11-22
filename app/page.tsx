'use client';

import React from 'react';

export default function Home() {
  const handleScrollToRequest = () => {
    const el = document.getElementById('request');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Заявка отправлена! (пока просто алерт 🙂)');
  };

  return (
    <div className="page">
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
          <div className="phone-chip">📞 +7 707 000-00-00</div>
          <button className="btn btn-outline" onClick={handleScrollToRequest}>
            Заказать звонок
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-left">
          <div className="hero-label">
            <span className="hero-label-dot"></span>
            <span>Сборка мебели в Астане за 1 день</span>
          </div>

          <h1 className="hero-title">
            Профессиональная сборка и установка мебели{' '}
            <span>с гарантией до 12 месяцев</span>
          </h1>

          <p className="hero-subtitle">
            Приезжаем в удобное время, аккуратно собираем и устанавливаем мебель из
            любых магазинов: IKEA, Технодом, Леруа, онлайн-маркетплейсы и др.
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
            Отправьте фото или ссылку на мебель — мы быстро посчитаем стоимость работы в WhatsApp.
          </div>

          <div className="hero-grid">
            <div className="hero-stat">
              <div className="hero-stat-main">250+</div>
              <div className="hero-stat-label">собранных кухонь и шкафов</div>
            </div>

            <div className="hero-stat">
              <div className="hero-stat-main">4.9★</div>
              <div className="hero-stat-label">средняя оценка клиентов</div>
            </div>

            <div className="hero-stat">
              <div className="hero-stat-main">1 день</div>
              <div className="hero-stat-label">срок выезда мастера</div>
            </div>
          </div>
        </div>

        <aside className="hero-right" id="request">
          <div>
            <div className="hero-right-title">Оставить заявку на расчёт</div>
            <div className="hero-right-sub">
              Заполните форму — перезвоним в течение 10–15 минут, уточним детали и скажем точную стоимость.
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Имя</label>
              <input id="name" type="text" placeholder="Как к вам обращаться?" required />
            </div>

            <div className="field">
              <label htmlFor="phone">Телефон / WhatsApp</label>
              <input id="phone" type="tel" placeholder="+7 ___ ___-__-__" required />
            </div>

            <div className="field">
              <label htmlFor="msg">Что нужно собрать?</label>
              <textarea
                id="msg"
                placeholder="Например: кухня 3 м, шкаф-купе, детская кровать"
              ></textarea>
            </div>

            <div className="form-footer">
              <button className="btn btn-primary" type="submit">
                Отправить заявку
              </button>

              <div className="form-hint">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </div>
            </div>
          </form>

          <div className="badge-row">
            <span className="badge">Выезд по Астане и Пригород</span>
            <span className="badge">Гарантия на работу до 12 мес.</span>
            <span className="badge">Аккуратно, без мусора</span>
          </div>
        </aside>
      </section>

      <main>
        <section id="services">
          <h2 className="section-title">Наши услуги и ориентировочные цены</h2>

          <p className="section-sub">
            Стоимость зависит от сложности мебели. Точный расчёт сделаем по фото или списку
            позиций.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-title">Сборка шкафа-купе</div>
              <div className="service-price">от 15 000 ₸</div>
              <div className="service-note">
                С выравниванием дверей, регулировкой фурнитуры и уборкой места работы.
              </div>
            </div>

            <div className="service-card">
              <div className="service-title">Сборка кухни</div>
              <div className="service-price">от 25 000 ₸</div>
              <div className="service-note">
                Навеска модулей, установка столешницы, врезка мойки (по согласованию).
              </div>
            </div>

            <div className="service-card">
              <div className="service-title">Сборка кроватей и детской мебели</div>
              <div className="service-price">от 8 000 ₸</div>
              <div className="service-note">
                Детские комнаты, двухъярусные кровати, письменные столы.
              </div>
            </div>

            <div className="service-card">
              <div className="service-title">Мелкая мебель и аксессуары</div>
              <div className="service-price">от 3 000 ₸</div>
              <div className="service-note">
                Тумбы, стулья, полки, комоды, зеркало с подсветкой и т.д.
              </div>
            </div>
          </div>
        </section>

        <section id="steps">
          <h2 className="section-title">Как мы работаем</h2>

          <div className="steps">
            <div>
              <div className="step-num">Шаг 1</div>
              <div>Вы оставляете заявку на сайте или пишете нам в WhatsApp.</div>
            </div>

            <div>
              <div className="step-num">Шаг 2</div>
              <div>
                Мы уточняем детали, просим фото мебели или ссылку на товар и называем точную цену.
              </div>
            </div>

            <div>
              <div className="step-num">Шаг 3</div>
              <div>
                Мастер приезжает в удобное для вас время, аккуратно собирает и устанавливает мебель.
              </div>
            </div>

            <div>
              <div className="step-num">Шаг 4</div>
              <div>
                Вы принимаете работу, оплачиваете и получаете гарантию на выполненные услуги.
              </div>
            </div>
          </div>

          <div className="review">
            <div className="review-name">Айгерим, ЖК «Северный парк»</div>
            <div className="review-text">
              «Ребята за один день собрали кухню и два шкафа. Очень вежливые мастера, всё аккуратно,
              мусор за собой убрали. Теперь рекомендую всем соседям!»
            </div>

            <div className="review-tag">Видеоотчёт по запросу · WhatsApp</div>
          </div>
        </section>
      </main>

      <section id="gallery">
        <h2 className="section-title">Наши работы</h2>

        <p className="section-sub">
          Здесь будут реальные фото ваших проектов: кухни, шкафы-купе, гардеробные, детские.
        </p>

        <div className="gallery-grid">
          <div className="gallery-item">Кухня в ЖК · 3 м, белый глянец</div>
          <div className="gallery-item">Шкаф-купе с зеркалом · 2,4 м</div>
          <div className="gallery-item">Гардеробная комната · угловая</div>
          <div className="gallery-item">Детская комната · кровать + стол</div>
          <div className="gallery-item">ТВ-зона · тумба + панели</div>
          <div className="gallery-item">Офисная мебель · 4 рабочих места</div>
        </div>
      </section>

      <footer>
        <div>© 2025 Daily Mebel Astana. Сборка и установка мебели в Астане.</div>
        <div>
          WhatsApp: <a href="#">+7 707 000-00-00</a> · Instagram:{' '}
          <a href="#">@daily_mebel_astana</a>
        </div>
      </footer>
    </div>
  );
}
