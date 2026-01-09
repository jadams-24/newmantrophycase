'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Music, Shield } from 'lucide-react'

export default function FineArtsPage() {
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
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-6 h-6 text-newman-red" />
              <span className="text-lg font-semibold text-newman-red">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Music className="w-8 h-8 text-newman-red" />
                <h1 className="text-2xl font-bold text-newman-red">Fine Arts</h1>
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
          <div className="text-center">
            <Music className="w-24 h-24 text-newman-red mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-newman-red mb-6">Fine Arts</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Fine Arts content will be displayed here.
            </p>
            <div className="inline-block bg-newman-red/10 rounded-lg px-6 py-3">
              <p className="text-newman-red font-semibold">Coming Soon</p>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <div className="border-l-4 border-newman-red pl-4">
              <h3 className="font-bold text-lg">Music Programs</h3>
              <p className="text-gray-600">Band, Choir, and Orchestra achievements</p>
            </div>
            <div className="border-l-4 border-newman-red-secondary pl-4">
              <h3 className="font-bold text-lg">Theater & Drama</h3>
              <p className="text-gray-600">Productions and performance awards</p>
            </div>
            <div className="border-l-4 border-newman-red pl-4">
              <h3 className="font-bold text-lg">Visual Arts</h3>
              <p className="text-gray-600">Art competitions and exhibitions</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
