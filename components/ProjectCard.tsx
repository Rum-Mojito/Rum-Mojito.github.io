import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  summary: string;
  tech: string[];
  github: string;
  slug: string;
}

export default function ProjectCard({ title, summary, tech, github, slug }: ProjectCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
        <Link href={`/projects/${slug}`}>
          {title}
        </Link>
      </h2>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {summary}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((technology) => (
          <span
            key={technology}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
          >
            {technology}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          查看详情
          <ExternalLink size={16} className="ml-1" />
        </Link>
        
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <Github size={20} />
        </a>
      </div>
    </article>
  );
}
