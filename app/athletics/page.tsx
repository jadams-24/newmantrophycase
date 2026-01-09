'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export default function AthleticsPage() {
  const sports = [
    { name: 'Baseball', href: '/athletics/baseball' },
    { name: 'Boys Basketball', href: '/athletics/boys-basketball' },
    { name: 'Girls Basketball', href: '/athletics/girls-basketball' },
    { name: 'Softball', href: '/athletics/softball' },
    { name: 'Track', href: '/athletics/track' },
    { name: 'Golf', href: '/athletics/golf' },
    { name: 'Cross Country', href: '/athletics/cross-country' },
    { name: 'Dance', href: '/athletics/dance' },
    { name: 'Wrestling', href: '/athletics/wrestling' },
    { name: 'Football', href: '/athletics/football' },
    { name: 'Cheerleading', href: '/athletics/cheerleading' },
  ]

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background.png"
          alt="Newman Catholic Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <header className="relative py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-6 h-6 text-white" />
            <span className="text-lg font-semibold text-white drop-shadow-lg">Back to Home</span>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg tracking-wide">Athletics</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {sports.map((sport) => (
            <Link key={sport.href} href={sport.href}>
              <button className="glass-button text-white px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <span className="font-bold text-lg md:text-xl tracking-wide">{sport.name}</span>
              </button>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
