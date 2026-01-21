'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-5 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-xl border-b border-sage-400/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <Link href="/" className="font-display text-2xl font-bold tracking-tight">
        <span className="gradient-text">cooked</span>
      </Link>

      <div className="flex items-center gap-8">
        <a href="#about" className="nav-link hidden md:block">
          About
        </a>
        <a href="#features" className="nav-link hidden md:block">
          What You Get
        </a>
        
          href="https://twitter.com/asheredwards_"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-white border border-sage-100 rounded-xl text-sage-900 text-sm font-semibold transition-all duration-200 hover:border-sage-200 hover:shadow-md"
        >
          Follow @asheredwards_
        </a>
      </div>
    </nav>
  )
}
