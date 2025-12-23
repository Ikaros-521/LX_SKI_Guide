export default function EquipmentSection() {
  const equipment = [
    {
      category: '滑雪板',
      items: [
        { name: '初学者滑雪板', desc: '软性板身，易控制', price: '¥800-1500' },
        { name: '进阶滑雪板', desc: '中等硬度，提升速度', price: '¥1500-3000' },
        { name: '专业竞技板', desc: '高硬度，极致性能', price: '¥3000-8000' }
      ]
    },
    {
      category: '滑雪鞋',
      items: [
        { name: '舒适型滑雪鞋', desc: '适合初学者，舒适度高', price: '¥600-1200' },
        { name: '性能型滑雪鞋', desc: '精准控制，适合进阶', price: '¥1200-2500' },
        { name: '竞速型滑雪鞋', desc: '专业竞速，极致支撑', price: '¥2500-5000' }
      ]
    },
    {
      category: '护具',
      items: [
        { name: '头盔', desc: '必备安全装备', price: '¥200-800' },
        { name: '护目镜', desc: '防风防雪防紫外线', price: '¥150-600' },
        { name: '护具套装', desc: '护肘护膝护臀', price: '¥300-800' }
      ]
    }
  ]

  return (
    <section id="equipment" className="mb-20 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          🎿 装备推荐
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          选择合适的装备是滑雪安全与乐趣的基础
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {equipment.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="border-l-4 border-blue-500 pl-4 hover:bg-blue-50 transition-colors rounded-r">
                  <h4 className="font-semibold text-gray-900 text-lg">{item.name}</h4>
                  <p className="text-gray-600 text-sm mb-1">{item.desc}</p>
                  <p className="text-blue-600 font-bold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Buying Tips */}
      <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          购买建议
        </h3>
        <ul className="space-y-2 text-blue-800">
          <li>• 初学者建议先租用装备，确认兴趣后再购买</li>
          <li>• 滑雪鞋是最重要的投资，一定要试穿合脚</li>
          <li>• 头盔和护具是必备的安全装备，不要省钱</li>
          <li>• 可以考虑二手装备，但要仔细检查磨损程度</li>
        </ul>
      </div>
    </section>
  )
}