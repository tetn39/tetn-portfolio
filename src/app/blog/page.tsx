import Link from 'next/link';

export default function Blog() {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-10 text-center">My Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ブログ記事1 */}
        <Link
          href="/blog/post-1"
          className="bg-gray-800 rounded-xl shadow-lg p-6 hover:-translate-y-2 transition-transform duration-300"
        >
          <h2 className="text-2xl font-semibold mb-3 text-purple-300">Grokにポートフォリオ作らせた</h2>
          <p className="text-gray-400 mb-4">
            xAIのGrokを使って、自分のポートフォリオサイトをゼロから作ってみた記録。
          </p>
          <span className="text-sm text-gray-500">March 10, 2025</span>
        </Link>

        {/* ブログ記事2 */}
        <Link
          href="/blog/post-2"
          className="bg-gray-800 rounded-xl shadow-lg p-6 hover:-translate-y-2 transition-transform duration-300"
        >
          <h2 className="text-2xl font-semibold mb-3 text-purple-300">Next.jsなんもわからん</h2>
          <p className="text-gray-400 mb-4">
            Next.jsを初めて触った時の混乱と、学んだことをまとめてみた。
          </p>
          <span className="text-sm text-gray-500">March 15, 2025</span>
        </Link>
      </div>
    </div>
  );
}
