'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export default function VocationsPage() {
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
          <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg tracking-wide">Vocations</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-newman-red mb-6">Vocations</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Vocations content will be displayed here.
          </p>
          <div className="inline-block bg-newman-red/10 rounded-lg px-6 py-3 mb-8">
            <p className="text-newman-red font-semibold">Coming Soon</p>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-newman-red pl-4">
              <h3 className="font-bold text-lg">Religious Vocations</h3>
              <p className="text-gray-600">Alumni who have entered religious life</p>
            </div>
            <div className="border-l-4 border-newman-red-secondary pl-4">
              <h3 className="font-bold text-lg">Service & Ministry</h3>
              <p className="text-gray-600">Students and alumni serving their communities</p>
            </div>
            <div className="border-l-4 border-newman-red pl-4">
              <h3 className="font-bold text-lg">Faith Formation</h3>
              <p className="text-gray-600">Spiritual growth and development programs</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
