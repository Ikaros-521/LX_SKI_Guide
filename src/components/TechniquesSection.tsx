export default function TechniquesSection() {
  const techniques = [
    {
      level: '入门技巧',
      icon: '🟢',
      color: 'green',
      skills: [
        { name: '正确站立姿势', desc: '膝盖微弯，重心前倾，手臂自然下垂' },
        { name: '基础转弯', desc: '利用腿部力量和雪板边缘进行转向' },
        { name: '控制速度', desc: '通过犁式姿势控制下滑速度' },
        { name: '安全摔倒', desc: '向侧方摔倒，避免头部着地' }
      ]
    },
    {
      level: '进阶技巧',
      icon: '🔵',
      color: 'blue',
      skills: [
        { name: '平行转弯', desc: '双板平行，更高效的转弯技巧' },
        { name: '卡宾转弯', desc: '利用雪板侧切进行高速转弯' },
        { name: '跳跃技巧', desc: '小跳、旋转等基础跳跃动作' },
        { name: '粉雪技巧', desc: '在松软雪地中的特殊技巧' }
      ]
    },
    {
      level: '高级技巧',
      icon: '🔴',
      color: 'red',
      skills: [
        { name: '速降技巧', desc: '高速直线滑行控制技巧' },
        { name: '自由式技巧', desc: '花式跳跃、抓板等动作' },
        { name: '雪上技巧', desc: '雪地摩托、雪上芭蕾等' },
        { name: '竞技技巧', desc: '回转、大回转等比赛技巧' }
      ]
    }
  ]

  return (
    <section id="techniques" className="mb-20 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ⛷️ 技巧教学
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          从基础到高级，系统学习滑雪技巧
        </p>
      </div>

      <div className="space-y-8">
        {techniques.map((level, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className={`bg-gradient-to-r from-${level.color}-500 to-${level.color}-600 text-white p-6`}>
              <div className="flex items-center">
                <span className="text-3xl mr-4">{level.icon}</span>
                <h3 className="text-2xl font-bold">{level.level}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {level.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className={`w-8 h-8 bg-${level.color}-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                      {skillIndex + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">{skill.name}</h4>
                      <p className="text-gray-600 text-sm">{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Learning Tips */}
      <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
        <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
          学习建议
        </h3>
        <ul className="space-y-2 text-purple-800">
          <li>• 建议找专业教练指导，避免养成错误习惯</li>
          <li>• 每次练习专注掌握1-2个新技巧</li>
          <li>• 多观看专业选手的视频，学习动作要领</li>
          <li>• 保持耐心，滑雪技巧需要大量练习才能熟练掌握</li>
          <li>• 安全第一，不要挑战超出能力范围的动作</li>
        </ul>
      </div>
    </section>
  )
}