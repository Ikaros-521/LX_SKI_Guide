'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import GuideContent from '@/components/GuideContent'
import Footer from '@/components/Footer'
import { useScrollAnimation } from '@/hooks/scrollAnimation'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useScrollAnimation()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <GuideContent />
      <Footer />
    </div>
  )
}