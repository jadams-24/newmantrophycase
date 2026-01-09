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
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-15"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0deg, white 2deg, transparent 4deg, transparent 15deg, white 17deg, transparent 19deg, transparent 30deg, white 32deg, transparent 34deg, transparent 45deg, white 47deg, transparent 49deg, transparent 60deg, white 62deg, transparent 64deg, transparent 75deg, white 77deg, transparent 79deg, transparent 90deg, white 92deg, transparent 94deg, transparent 105deg, white 107deg, transparent 109deg, transparent 120deg, white 122deg, transparent 124deg, transparent 135deg, white 137deg, transparent 139deg, transparent 150deg, white 152deg, transparent 154deg, transparent 165deg, white 167deg, transparent 169deg, transparent 180deg, white 182deg, transparent 184deg, transparent 195deg, white 197deg, transparent 199deg, transparent 210deg, white 212deg, transparent 214deg, transparent 225deg, white 227deg, transparent 229deg, transparent 240deg, white 242deg, transparent 244deg, transparent 255deg, white 257deg, transparent 259deg, transparent 270deg, white 272deg, transparent 274deg, transparent 285deg, white 287deg, transparent 289deg, transparent 300deg, white 302deg, transparent 304deg, transparent 315deg, white 317deg, transparent 319deg, transparent 330deg, white 332deg, transparent 334deg, transparent 345deg, white 347deg, transparent 349deg, transparent 360deg)',
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
