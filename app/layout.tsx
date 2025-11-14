import type { ReactNode } from "react";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"], 
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata = {
  title: "Mobile-First UI com React",
  description: "Trabalho de Assessment com 16 questões — Next.js App Router",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={openSans.variable}>
        <header className="site-header">
          <span className="brand-title">AT - Mobile-First UI</span>
        </header>

        <div className="site-wrap">{children}</div>

        <footer className="site-footer">© {new Date().getFullYear()}</footer>
      </body>
    </html>
  );
}
