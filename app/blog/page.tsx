import { getAllBlogPosts } from '@/lib/markdown';
import BlogCard from '@/components/BlogCard';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">技术博客</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            分享大数据、AI 和全栈开发的经验与思考
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">暂无博客文章</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                date={post.date}
                tags={post.tags}
                summary={post.summary}
                slug={post.slug}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
