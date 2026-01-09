'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const navLinks = [
    { label: 'Academics', href: '/academics', position: '10' },
    { label: 'Athletics', href: '/athletics', position: '2' },
    { label: 'Fine Arts', href: '/fine-arts', position: '4' },
    { label: 'Legacy Knights', href: '/legacy-knights', position: '5' },
    { label: 'Vocations', href: '/vocations', position: '7' },
    { label: 'History', href: '/history', position: '8' },
  ]

  // Clock position styles (relative to center)
  const getPositionStyles = (position: string) => {
    switch (position) {
      case '10': // 10 o'clock - upper left
        return 'top-[20%] left-[18%]'
      case '2': // 2 o'clock - upper right
        return 'top-[20%] right-[18%]'
      case '4': // 4 o'clock - lower right
        return 'top-[55%] right-[15%]'
      case '5': // 5 o'clock - bottom right
        return 'bottom-[15%] right-[22%]'
      case '7': // 7 o'clock - bottom left
        return 'bottom-[15%] left-[22%]'
      case '8': // 8 o'clock - lower left
        return 'top-[55%] left-[15%]'
      default:
        return ''
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background Image - Full Screen */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background.png"
          alt="Newman Catholic Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Transparent Header */}
      <header className="relative py-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center tracking-widest drop-shadow-lg">
          NEWMAN CATHOLIC SCHOOLS
        </h1>
      </header>

      {/* Main Content Area with Knight Logo and Circular Navigation */}
      <main className="relative flex-1 flex items-center justify-center">
        <div className="relative w-full h-full min-h-[calc(100vh-80px)]">
          {/* Center Knight Logo with Sunburst */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Subtle White Sunburst */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-[0.05]"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0deg, white 0.5deg, transparent 1deg, transparent 45deg, white 45.5deg, transparent 46deg, transparent 90deg, white 90.5deg, transparent 91deg, transparent 135deg, white 135.5deg, transparent 136deg, transparent 180deg, white 180.5deg, transparent 181deg, transparent 225deg, white 225.5deg, transparent 226deg, transparent 270deg, white 270.5deg, transparent 271deg, transparent 315deg, white 315.5deg, transparent 316deg, transparent 360deg)',
                maskImage: 'radial-gradient(circle, white 30%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(circle, white 30%, transparent 70%)',
              }}
            />
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
              <Image
                src="/Correct Knight PNG (1).png"
                alt="Newman Catholic Knight Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Navigation Links positioned around the logo */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`absolute ${getPositionStyles(link.position)}`}
            >
              <button className="glass-button text-white px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <span className="font-bold text-lg md:text-xl tracking-wide">{link.label}</span>
              </button>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
