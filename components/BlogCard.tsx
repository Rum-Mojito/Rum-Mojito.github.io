import Link from 'next/link';
import { Calendar, Tag } from 'lucide-react';

interface BlogCardProps {
  title: string;
  date: string;
  tags: string[];
  summary: string;
  slug: string;
}

export default function BlogCard({ title, date, tags, summary, slug }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <Calendar size={16} className="mr-2" />
        <time dateTime={date}>{date}</time>
      </div>
      
      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
        <Link href={`/blog/${slug}`}>
          {title}
        </Link>
      </h2>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {summary}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
          >
            <Tag size={12} className="mr-1" />
            {tag}
          </span>
        ))}
      </div>
      
      <Link
        href={`/blog/${slug}`}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
      >
        阅读更多
        </Link>
    </article>
  );
}
