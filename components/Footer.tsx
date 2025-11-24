export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-6 text-xs text-slate-400">
      <div className="container-main flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {year} daily_mebel_astana. Кухни и мебель под ключ в Астане.
        </div>
        <div className="flex flex-wrap gap-4">
          <div>
            Телефон / WhatsApp:{" "}
            <a
              href="https://wa.me/77070000000"
              target="_blank"
              rel="noreferrer"
              className="text-slate-200 hover:text-brand-300"
            >
              +7 707 000-00-00
            </a>
          </div>
          <div>
            Instagram:{" "}
            <a
              href="#"
              className="text-slate-200 hover:text-brand-300"
              target="_blank"
              rel="noreferrer"
            >
              @daily_mebel_astana
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
