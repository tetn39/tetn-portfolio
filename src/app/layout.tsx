import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "tetn39 - Portfolio",
  description:
    "Portfolio of tetn39, a web developer specializing in modern technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col bg-theme-dark">
        <header className="bg-theme-dark p-6 shadow-lg">
          <nav className="container mx-auto flex justify-between items-center text-theme-text">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight hover:text-theme-accent transition"
            >
              tetn39
            </Link>
            <div className="space-x-6">
              <Link
                href="/blog"
                className="text-lg hover:text-theme-accent transition"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-lg hover:text-theme-accent transition"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-6 py-10 text-theme-text bg-theme-dark">
          {children}
        </main>
        <footer className="bg-theme-dark p-4 text-center text-theme-light">
          <p>© 2025 tetn39. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
