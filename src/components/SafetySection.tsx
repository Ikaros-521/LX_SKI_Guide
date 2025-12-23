export default function SafetySection() {
  const safetyRules = [
    {
      category: '必备装备',
      icon: '🛡️',
      items: [
        { title: '头盔', desc: '始终佩戴专业滑雪头盔，保护头部安全' },
        { title: '护目镜', desc: '防紫外线、防风雪，保持视野清晰' },
        { title: '护具套装', desc: '护肘、护膝、护臀，减少摔倒伤害' },
        { title: '合适服装', desc: '防水防风，保持体温和活动自由度' }
      ]
    },
    {
      category: '安全准则',
      icon: '⚠️',
      items: [
        { title: '控制速度', desc: '根据自己技术水平控制速度，避免失控' },
        { title: '保持距离', desc: '与其他滑雪者保持安全距离' },
        { title: '选择合适雪道', desc: '严格按照雪道难度等级选择' },
        { title: '观察天气', desc: '恶劣天气避免滑雪' }
      ]
    },
    {
      category: '应急处理',
      icon: '🆘',
      items: [
        { title: '正确摔倒', desc: '向侧方摔倒，避免头部着地' },
        { title: '求助方式', desc: '记住雪场救援电话位置' },
        { title: '基本急救', desc: '学习简单的急救知识' },
        { title: '团队滑雪', desc: '尽量结伴滑雪，互相照应' }
      ]
    }
  ]

  const emergencySteps = [
    { step: 1, action: '立即停止滑雪，确保自身安全' },
    { step: 2, action: '检查伤者意识，必要时呼叫救援' },
    { step: 3, action: '标记事故位置，防止二次事故' },
    { step: 4, action: '联系雪场救援人员' }
  ]

  return (
    <section id="safety" className="mb-20 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          🛡️ 安全须知
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          安全第一，掌握这些重要安全知识，享受快乐滑雪
        </p>
      </div>

      {/* Safety Categories */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {safetyRules.map((category, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-red-600 text-white p-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Procedures */}
      <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200 mb-8">
        <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
          <svg className="w-8 h-8 mr-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          紧急情况处理流程
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {emergencySteps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-red-200">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                  {step.step}
                </div>
              </div>
              <p className="text-sm text-gray-700">{step.action}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Important Reminders */}
      <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
        <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          重要提醒
        </h3>
        <ul className="space-y-2 text-yellow-800">
          <li>• 酒后绝对禁止滑雪</li>
          <li>• 身体不适时不要强行滑雪</li>
          <li>• 严格遵守雪场管理规定</li>
          <li>• 定期检查装备状况</li>
          <li>• 学习基本的滑雪礼仪和规则</li>
          <li>• 购买滑雪保险</li>
        </ul>
      </div>
    </section>
  )
}