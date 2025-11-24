import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Кухни и мебель под ключ в Астане — daily_mebel_astana",
  description:
    "Проектирование, изготовление и монтаж кухонь и шкафов-купе под ключ в Астане. Бесплатный замер, честная смета, рассрочка через Kaspi.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
