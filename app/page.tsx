import Link from 'next/link';
import { ArrowRight, Code, Database, Brain, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">AI 全栈开发</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            专注于构建高性能的智能应用，将 AI 技术与全栈开发深度融合。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              阅读博客
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
            >
              查看项目
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">技能栈</h2>
          <p className="text-lg text-gray-600">AI 全栈开发的技术积累</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Database className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">数据处理</h3>
            <p className="text-gray-600 mb-4">
              Kafka, Flink, Spark, Elasticsearch, HBase
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Kafka', 'Flink', 'Spark', 'Elasticsearch'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Brain className="mx-auto mb-4 text-green-600" size={48} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI 技术</h3>
            <p className="text-gray-600 mb-4">
              PyTorch, Transformers, 推荐系统, 机器学习
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['PyTorch', 'Transformers', 'MLOps', '推荐系统'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Globe className="mx-auto mb-4 text-purple-600" size={48} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">全栈开发</h3>
            <p className="text-gray-600 mb-4">
              Next.js, Node.js, Docker, Kubernetes
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Next.js', 'Node.js', 'Docker', 'Kubernetes'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">准备开始合作？</h2>
          <p className="text-xl text-gray-300 mb-8">
            让我们一起构建下一代智能应用
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors"
            >
              联系我
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              了解更多
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}