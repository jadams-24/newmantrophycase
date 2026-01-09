'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock } from 'lucide-react'

export default function HistoryPage() {
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

      <header className="relative bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/explore" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-6 h-6 text-newman-red" />
              <span className="text-lg font-semibold text-newman-red">Back to Categories</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-8 h-8 text-newman-red" />
                <h1 className="text-2xl font-bold text-newman-red">History</h1>
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
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-newman-red mb-6">Our Legacy</h2>
          <p className="text-gray-600 mb-8">
            For over 60 years, Newman Catholic High School has been a cornerstone of
            excellence in Mason City, Iowa. Our history is filled with remarkable
            achievements and memorable moments.
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-newman-red pl-4">
              <h3 className="font-bold text-lg">Founding Years</h3>
              <p className="text-gray-600">Established to provide Catholic education in North Iowa</p>
            </div>
            <div className="border-l-4 border-newman-red-secondary pl-4">
              <h3 className="font-bold text-lg">Decades of Excellence</h3>
              <p className="text-gray-600">Consistent academic and athletic achievements</p>
            </div>
            <div className="border-l-4 border-newman-red pl-4">
              <h3 className="font-bold text-lg">Alumni Success</h3>
              <p className="text-gray-600">Graduates making a difference across the world</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}