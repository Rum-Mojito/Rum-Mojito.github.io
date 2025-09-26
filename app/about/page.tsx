import { Database, Brain, Globe, Code, Users, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">关于我</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI 全栈开发者，专注于构建高性能的智能应用，
            将 AI 技术与全栈开发深度融合。
          </p>
        </div>

        {/* Background Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">背景介绍</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Database className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">数据处理能力</h3>
              <p className="text-gray-600">
                深度掌握 Kafka、Flink、Spark 等数据处理技术栈，
                具备大规模分布式系统设计和运维经验。
              </p>
            </div>
            <div className="text-center">
              <Brain className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI 全栈开发</h3>
              <p className="text-gray-600">
                掌握 PyTorch、Transformers 等 AI 技术，
                具备端到端的 AI 应用开发能力。
              </p>
            </div>
            <div className="text-center">
              <Globe className="mx-auto mb-4 text-purple-600" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">全栈开发</h3>
              <p className="text-gray-600">
                熟练使用 Next.js、Node.js 等现代前端技术，
                具备完整的全栈开发能力。
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">技能栈</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Database className="mr-2 text-blue-600" size={24} />
                数据处理技术
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Kafka', 'Flink', 'Spark', 'Elasticsearch', 'HBase', 'HDFS'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Brain className="mr-2 text-green-600" size={24} />
                AI 技术
              </h3>
              <div className="flex flex-wrap gap-2">
                {['PyTorch', 'Transformers', '推荐系统', 'MLOps', 'TensorFlow', 'Scikit-learn'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Code className="mr-2 text-purple-600" size={24} />
                全栈开发
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Node.js', 'React', 'TypeScript', 'Python', 'FastAPI'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Globe className="mr-2 text-orange-600" size={24} />
                云原生技术
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Kubernetes', 'AWS', 'GCP', 'Terraform', 'Helm'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">工作经历</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">数据处理工程师</h3>
              <p className="text-gray-600 mb-2">2019 - 2024</p>
              <ul className="text-gray-700 space-y-1">
                <li>• 设计和实现高吞吐量的实时数据处理系统</li>
                <li>• 使用 Kafka + Flink 构建百万级 QPS 的数据管道</li>
                <li>• 负责大规模分布式系统的监控和运维</li>
                <li>• 参与数据湖架构设计和数据治理</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">AI 全栈开发</h3>
              <p className="text-gray-600 mb-2">2024 - 至今</p>
              <ul className="text-gray-700 space-y-1">
                <li>• 掌握深度学习技术，熟练使用 PyTorch 和 Transformers</li>
                <li>• 开发个性化推荐系统，点击率提升 18%</li>
                <li>• 构建端到端的 AI 应用，从模型训练到生产部署</li>
                <li>• 探索 MLOps 最佳实践，实现模型全生命周期管理</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <Users className="mr-4 text-blue-600 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">技术驱动</h3>
                <p className="text-gray-600">
                  始终关注最新技术趋势，通过技术创新解决实际问题，
                  推动业务发展。
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Award className="mr-4 text-green-600 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">持续学习</h3>
                <p className="text-gray-600">
                  保持学习热情，不断拓展技术边界，
                  在 AI 全栈开发领域持续精进。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
