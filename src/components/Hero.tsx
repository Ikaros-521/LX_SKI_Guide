import { createPath } from '@/utils/path'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20 animate-pulse">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            2024 最新滑雪攻略
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fadeInUp">
            <span className="block">征服雪道的</span>
            <span className="block text-cyan-300">完美指南</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            从新手入门到高手进阶，装备选择、技巧教学、安全须知，一网打尽
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <a
              href={createPath("#equipment")}
              className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover-lift"
            >
              开始学习
            </a>
            <a
              href={createPath("#resorts")}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-all hover-lift"
            >
              找雪场
            </a>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 text-sm animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover-lift">
              🎿 初学者友好
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover-lift">
              ⛷️ 专业技巧
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover-lift">
              🏔️ 雪场推荐
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover-lift">
              🛡️ 安全指导
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-white fill-current animate-pulse" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,48 L0,48 Z" />
        </svg>
      </div>
    </section>
  )
}