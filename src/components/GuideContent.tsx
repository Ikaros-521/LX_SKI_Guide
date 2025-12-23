import EquipmentSection from './EquipmentSection'
import TechniquesSection from './TechniquesSection'
import ResortsSection from './ResortsSection'
import SafetySection from './SafetySection'
import FAQsSection from './FAQsSection'

export default function GuideContent() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="scroll-animate">
        <EquipmentSection />
      </div>
      <div className="scroll-animate">
        <TechniquesSection />
      </div>
      <div className="scroll-animate">
        <ResortsSection />
      </div>
      <div className="scroll-animate">
        <SafetySection />
      </div>
      <div className="scroll-animate">
        <FAQsSection />
      </div>
    </main>
  )
}