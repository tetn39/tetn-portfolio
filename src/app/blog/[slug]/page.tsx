// src/app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  const posts = {
    'post-1': {
      title: 'Grokにポートフォリオ作らせた',
      content: 'xAIのGrokに指示を出してポートフォリオを作った過程を詳しく書く...',
      date: 'March 10, 2025',
    },
    'post-2': {
      title: 'Next.jsなんもわからん',
      content: 'Next.jsを初めて使った時の戸惑いや解決策をまとめる...',
      date: 'March 15, 2025',
    },
  };
  const post = posts[params.slug as keyof typeof posts] || { title: 'Not Found', content: '', date: '' };

  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-gray-300 mb-4">{post.content}</p>
      <span className="text-sm text-gray-500">{post.date}</span>
    </div>
  );
}
