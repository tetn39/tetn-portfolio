import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'tetn39 - Portfolio',
  description: 'Portfolio of tetn39, a web developer specializing in modern technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-900 text-white flex flex-col">
        <header className="bg-gradient-to-r from-gray-800 to-purple-900 p-6 shadow-lg">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-extrabold tracking-tight hover:text-purple-300 transition">
              tetn39
            </Link>
            <div className="space-x-6">
              <Link href="/blog" className="text-lg hover:text-purple-300 transition">
                Blog
              </Link>
              <Link href="/contact" className="text-lg hover:text-purple-300 transition">
                Contact
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-6 py-10">{children}</main>
        <footer className="bg-gray-800 p-4 text-center text-gray-400">
          <p>© 2025 tetn39. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
