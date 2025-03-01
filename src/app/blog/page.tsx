import Link from 'next/link';

export default function Blog() {
  return (
    <div className="py-10 bg-theme-dark">
      <h1 className="text-4xl font-bold mb-10 text-center text-theme-light">My Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link
          href="/blog/post-1"
          className="bg-theme-medium rounded-xl shadow-lg p-6 hover:-translate-y-2 transition-transform duration-300"
        >
          <h2 className="text-2xl font-semibold mb-3 text-theme-accent">Grokにポートフォリオ作らせた</h2>
          <p className="mb-4 text-theme-text">
            xAIのGrokを使って、自分のポートフォリオサイトをゼロから作ってみた記録。
          </p>
          <span className="text-sm text-theme-light">March 10, 2025</span>
        </Link>
        <Link
          href="/blog/post-2"
          className="bg-theme-medium rounded-xl shadow-lg p-6 hover:-translate-y-2 transition-transform duration-300"
        >
          <h2 className="text-2xl font-semibold mb-3 text-theme-accent">Next.jsなんもわからん</h2>
          <p className="mb-4 text-theme-text">
            Next.jsを初めて触った時の混乱と、学んだことをまとめてみた。
          </p>
          <span className="text-sm text-theme-light">March 15, 2025</span>
        </Link>
      </div>
    </div>
  );
}
