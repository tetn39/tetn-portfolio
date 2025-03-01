import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16 animate-fade-in">
      <div className="text-center">
        {/* アイコン */}
        <div className="relative mx-auto mb-8 w-32 h-32 md:w-40 md:h-40">
          <Image
            src="/icon.png" // /public/icon.png にアイコン画像を配置
            alt="tetn39's Icon"
            fill
            className="rounded-full object-cover border-4 border-purple-500 shadow-lg"
          />
        </div>

        {/* 名前 */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          tetn39
        </h1>

        {/* プロフィール */}
        <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto">
          A passionate web developer crafting modern, responsive experiences with cutting-edge technologies.
        </p>

        {/* 使える技術 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">Skills</h2>
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
                className="bg-gray-800 text-purple-300 px-4 py-2 rounded-full shadow-md hover:bg-gray-700 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ブログへのリンク */}
        <Link
          href="/blog"
          className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-full hover:scale-105 hover:shadow-xl transition-transform duration-300"
        >
          View My Blog
        </Link>
      </div>
    </div>
  );
}
