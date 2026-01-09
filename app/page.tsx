'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Smartphone, Calendar, PlayCircle, Shield } from 'lucide-react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const topNavLinks = [
    { label: 'Academics', href: '/academics' },
    { label: 'Athletics', href: '/athletics' },
    { label: 'Fine Arts', href: '/fine-arts' },
    { label: 'History', href: '/history' },
    { label: 'Vocations', href: '/vocations' },
  ]

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

      {/* Header Section */}
      <header className="relative bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          {/* Left Side - Logo and School Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-newman-red rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-newman-red tracking-wide">
                NEWMAN CATHOLIC HIGH SCHOOL
              </h1>
            </div>
          </div>

          {/* Right Side - Location and Knight Logo */}
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              Mason City, Iowa
            </div>
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <Image
                src="/Correct Knight PNG (1).png"
                alt="Newman Catholic Knight Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Top Navigation Bar */}
      <nav className="relative py-4 px-6">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
            {topNavLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <button className="glass-button text-white px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <span className="font-bold text-lg md:text-xl tracking-wide">{link.label}</span>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="relative flex-1 flex flex-col items-center justify-center py-8">
        {/* Center Knight Logo - Main Focal Point */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
          <Image
            src="/Correct Knight PNG (1).png"
            alt="Newman Catholic Knight Logo"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="relative py-6 px-6 mt-auto">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
            <Link href="/mobile">
              <button className="glass-button text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <Smartphone className="w-5 h-5" />
                <span className="font-medium">View on Phone</span>
              </button>
            </Link>

            <a
              href="https://www.newmancatholic.org/athletics"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="glass-button text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Athletics Calendar</span>
              </button>
            </a>

            <a
              href="https://www.nfhsnetwork.com/schools/newman-catholic-high-school-mason-city-ia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="glass-button text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <PlayCircle className="w-5 h-5" />
                <span className="font-medium">Watch Live</span>
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
