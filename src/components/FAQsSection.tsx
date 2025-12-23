'use client'

import { useState } from 'react'

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '初学者需要准备什么装备？',
      answer: '初学者最基础的装备包括：头盔（必备）、护目镜、防水手套、防水滑雪服、滑雪板和滑雪鞋。建议初次体验时先租赁装备，确认兴趣后再购买。一定要购买质量可靠的头盔，这是最重要的安全装备。'
    },
    {
      question: '滑雪学习大概需要多长时间？',
      answer: '一般来说，初学者经过2-3次课程（每次2-3小时）就能掌握基本技巧，可以在初级道上独立滑行。要达到熟练程度通常需要整个雪季的练习。进阶技巧如平行转弯可能需要10-20次练习。每个人的学习速度不同，保持耐心很重要。'
    },
    {
      question: '滑雪受伤的几率高吗？如何避免？',
      answer: '滑雪确实有一定风险，但通过正确防护可以大大降低受伤几率。数据显示，正确佩戴头盔可减少50%的头部伤害。建议：佩戴完整护具、控制速度、选择合适雪道、避免单独滑雪、充分热身、不要在疲劳时继续滑雪。初学者最好找专业教练指导。'
    },
    {
      question: '什么季节最适合滑雪？',
      answer: '北方雪场通常从12月到次年3月是最佳季节，其中1-2月雪质最好。南方室内滑雪场全年开放。建议避开节假日高峰期，此时人少价格也更合理。关注天气预报，选择雪量充足、温度适宜的日期出行。'
    },
    {
      question: '儿童多大可以开始学滑雪？',
      answer: '一般建议4-5岁开始接触滑雪，这个年龄段的儿童已经具备了基本的平衡能力和理解能力。很多雪场都有专门的儿童滑雪学校和幼儿装备。关键是选择专业的儿童教练，使用适合儿童的小尺寸装备，从简单的游戏开始培养兴趣。'
    },
    {
      question: '滑雪费用大概是多少？',
      answer: '滑雪费用主要包括：门票（¥200-600/天）、装备租赁（¥100-300/天）、教练费（¥300-800/小时）、交通住宿等。不同雪场价格差异较大。新手建议购买包含门票和租赁的套票更划算。如果经常滑雪，考虑购买季卡会更经济。'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="mb-20 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ❓ 常见问题
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          解答滑雪新手最关心的问题
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 bg-white rounded-xl shadow-md overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
              <div className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <div className={`transition-all duration-200 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">还有其他问题？</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          如果您还有其他关于滑雪的问题，欢迎联系我们的专业团队，我们将为您提供详细的解答和建议。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            在线咨询
          </button>
          <button className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
            <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            加入社群
          </button>
        </div>
      </div>
    </section>
  )
}