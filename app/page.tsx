'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Smartphone, Calendar, PlayCircle, Shield } from 'lucide-react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen overflow-hidden">
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

      {/* Header Section - Minimal Height */}
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

      {/* Main Content Area */}
      <main className="relative flex flex-col items-center justify-center min-h-[calc(100vh-76px)]">
        {/* Center Logo/Emblem */}
        <div className="mb-16">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-white/90 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center">
            <div className="text-center">
              <Shield className="w-32 h-32 md:w-40 md:h-40 text-newman-red mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-newman-red">NEWMAN</h2>
              <p className="text-lg md:text-xl text-newman-red-secondary font-semibold">KNIGHTS</p>
              <p className="text-sm text-gray-600 mt-2">Virtual Trophy Case</p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons Container */}
        <div className="absolute bottom-20 left-0 right-0 px-8 md:px-16">
          <div className="flex justify-between items-end">
            {/* Left Side - Main Explore Button */}
            <div>
              <Link href="/explore">
                <button className="group glass-button text-white px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold">Explore</span>
                    <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-sm mt-1 opacity-90">Browse All Achievements</p>
                </button>
              </Link>
            </div>

            {/* Right Side - Secondary Actions */}
            <div className="flex flex-col space-y-3">
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
        </div>
      </main>
    </div>
  )
}