export default function ResortsSection() {
  const resorts = [
    {
      name: '万科松花湖滑雪场',
      location: '吉林·吉林市',
      rating: 4.8,
      level: '适合所有水平',
      features: ['27条雪道', '最大落差605米', '专业教练团队', '温泉酒店'],
      price: '¥300-600/天',
      image: '🏔️'
    },
    {
      name: '亚布力滑雪场',
      location: '黑龙江·哈尔滨',
      rating: 4.7,
      level: '进阶到专业',
      features: ['17条雪道', '最长雪道5公里', '国际雪联认证', '夜场滑雪'],
      price: '¥280-500/天',
      image: '🏂'
    },
    {
      name: '崇礼万龙滑雪场',
      location: '河北·张家口',
      rating: 4.9,
      level: '专业级别',
      features: ['32条雪道', '奥运级别设施', '超长雪季', '多样化地形'],
      price: '¥400-800/天',
      image: '❄️'
    },
    {
      name: '万达长白山滑雪场',
      location: '吉林·长白山',
      rating: 4.6,
      level: '适合所有水平',
      features: ['43条雪道', '亚洲顶级雪场', '温泉度假村', '儿童滑雪学校'],
      price: '¥350-650/天',
      image: '🗻'
    }
  ]

  const getRatingStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐')
    }
    if (hasHalfStar) {
      stars.push('⭐')
    }

    return stars.join('')
  }

  return (
    <section id="resorts" className="mb-20 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          🏔️ 雪场推荐
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          精选国内顶级滑雪场，享受最佳滑雪体验
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {resorts.map((resort, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-[1.02]">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl">
              {resort.image}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{resort.name}</h3>
                  <p className="text-gray-600 flex items-center text-sm">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {resort.location}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-yellow-500">{getRatingStars(resort.rating)}</div>
                  <div className="text-sm text-gray-500">{resort.rating}</div>
                </div>
              </div>

              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  resort.level.includes('专业') ? 'bg-red-100 text-red-700' :
                  resort.level.includes('进阶') ? 'bg-orange-100 text-orange-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {resort.level}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {resort.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className="text-lg font-bold text-blue-600">{resort.price}</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  查看详情
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resort Selection Tips */}
      <div className="mt-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
        <h3 className="text-xl font-bold text-cyan-900 mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          选择雪场建议
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-cyan-800">
          <div>
            <h4 className="font-semibold mb-2">初学者选择：</h4>
            <ul className="space-y-1 text-sm">
              <li>• 选择有初级道的雪场</li>
              <li>• 确认有专业教练团队</li>
              <li>• 租赁设备齐全</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">进阶者选择：</h4>
            <ul className="space-y-1 text-sm">
              <li>• 关注雪道数量和难度分布</li>
              <li>• 雪季长度和雪质</li>
              <li>• 交通便利性</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}