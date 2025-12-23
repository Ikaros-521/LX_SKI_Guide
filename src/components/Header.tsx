'use client'

import { createPath } from '@/utils/path'

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                <path className="text-white" fill="currentColor" d="M12 5.5l-6 3v6.5c0 3.31 2.23 6.24 5.5 7.12.12-.03.24-.06.36-.1L12 19l.14.12c.12.04.24.07.36.1 3.27-.88 5.5-3.81 5.5-7.12V8.5l-6-3z" opacity="0.8"/>
              </svg>
              <span className="text-xl font-bold text-gray-900">洛曦 滑雪攻略</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href={createPath("#equipment")} className="text-gray-700 hover:text-blue-600 transition-colors">装备推荐</a>
            <a href={createPath("#techniques")} className="text-gray-700 hover:text-blue-600 transition-colors">技巧教学</a>
            <a href={createPath("#resorts")} className="text-gray-700 hover:text-blue-600 transition-colors">雪场推荐</a>
            <a href={createPath("#safety")} className="text-gray-700 hover:text-blue-600 transition-colors">安全须知</a>
            <a href={createPath("#faqs")} className="text-gray-700 hover:text-blue-600 transition-colors">常见问题</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col space-y-2 py-4">
              <a href={createPath("#equipment")} className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2">装备推荐</a>
              <a href={createPath("#techniques")} className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2">技巧教学</a>
              <a href={createPath("#resorts")} className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2">雪场推荐</a>
              <a href={createPath("#safety")} className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2">安全须知</a>
              <a href={createPath("#faqs")} className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2">常见问题</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}