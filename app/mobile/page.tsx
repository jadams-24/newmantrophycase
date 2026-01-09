'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Smartphone, QrCode } from 'lucide-react'

export default function MobilePage() {
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
                <Smartphone className="w-8 h-8 text-newman-red" />
                <h1 className="text-2xl font-bold text-newman-red">Mobile Access</h1>
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
        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 max-w-2xl mx-auto text-center">
          <QrCode className="w-32 h-32 text-newman-red mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-newman-red mb-4">View on Your Phone</h2>
          <p className="text-gray-600 mb-8">
            Scan the QR code above or visit the URL below to access the Newman Catholic
            Virtual Trophy Case on your mobile device.
          </p>
          
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <p className="font-mono text-sm break-all">trophycase.newmancatholic.org</p>
          </div>
          
          <p className="text-sm text-gray-500">
            The mobile version is optimized for viewing on phones and tablets,
            with touch-friendly navigation and fast loading times.
          </p>
        </div>
      </main>
    </div>
  )
}