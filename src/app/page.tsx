'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'theme1');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-16 animate-fade-in bg-theme-dark">
      <div className="text-center">
        <div className="relative mx-auto mb-8 w-32 h-32 md:w-40 md:h-40">
          <Image
            src="/icon.png"
            alt="tetn39's Icon"
            fill
            className="rounded-full object-cover border-4 border-theme-accent shadow-lg"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-theme-accent">tetn39</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-theme-light">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Python',
              'Go',
              'Django',
              'Flask',
              'JavaScript',
              'TypeScript',
              'React',
              'Next.js',
              'HTML',
              'CSS',
              'MySQL',
              'PostgreSQL',
              'GitHub Actions',
            ].map((skill) => (
              <span
                key={skill}
                className="bg-theme-medium text-theme-accent px-4 py-2 rounded-full shadow-md hover:bg-theme-accent hover:text-theme-dark transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <button
            onClick={() => handleThemeChange('theme1')}
            className="bg-theme-medium text-theme-text px-4 py-2 rounded-full mr-4 hover:bg-theme-accent hover:text-theme-text transition"
          >
            Theme 1
          </button>
          <button
            onClick={() => handleThemeChange('theme2')}
            className="bg-theme-medium text-theme-text px-4 py-2 rounded-full hover:bg-theme-accent hover:text-theme-text transition"
          >
            Theme 2
          </button>
        </div>
        <Link
          href="/blog"
          className="inline-block bg-theme-accent text-theme-dark px-6 py-3 rounded-full hover:scale-105 hover:shadow-xl transition-transform duration-300"
        >
          View My Blog
        </Link>
      </div>
    </div>
  );
}
