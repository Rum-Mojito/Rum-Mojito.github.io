import { getAllProjects } from '@/lib/markdown';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">项目展示</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            从大数据到 AI 全栈的项目实践
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">暂无项目展示</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                summary={project.summary}
                tech={project.tech}
                github={project.github}
                slug={project.slug}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
