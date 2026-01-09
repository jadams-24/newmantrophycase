'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Trophy, GraduationCap, Users, Clock, ArrowLeft } from 'lucide-react'

export default function ExplorePage() {
  const categories = [
    {
      title: 'Athletics',
      icon: Trophy,
      description: 'Championships, team achievements, and individual honors',
      href: '/athletics',
      color: 'bg-red-600',
      stats: '89 Awards'
    },
    {
      title: 'Academics',
      icon: GraduationCap,
      description: 'Academic excellence, scholarships, and competition awards',
      href: '/academics',
      color: 'bg-blue-600',
      stats: '67 Awards'
    },
    {
      title: 'Student Life',
      icon: Users,
      description: 'Fine arts, service, clubs, and extracurricular achievements',
      href: '/student-life',
      color: 'bg-green-600',
      stats: '91 Awards'
    },
    {
      title: 'History',
      icon: Clock,
      description: 'Legacy achievements and historical milestones',
      href: '/history',
      color: 'bg-purple-600',
      stats: 'All Time'
    }
  ]

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
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

      {/* Header */}
      <header className="relative bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-6 h-6 text-newman-red" />
              <span className="text-lg font-semibold text-newman-red">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-newman-red">Explore Achievements</h1>
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

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.title} href={category.href}>
                <div className="group relative bg-white/90 backdrop-blur-md rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-2 ${category.color}`} />
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-4 rounded-lg ${category.color} bg-opacity-10`}>
                        <Icon className={`w-10 h-10 ${category.color.replace('bg-', 'text-')}`} />
                      </div>
                      <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {category.stats}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{category.title}</h2>
                    <p className="text-gray-600">{category.description}</p>
                    <div className="mt-6 flex items-center text-newman-red font-semibold group-hover:translate-x-2 transition-transform">
                      <span>View Collection</span>
                      <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-newman-red mb-8">Newman Catholic Excellence</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-newman-red">338</div>
              <div className="text-sm text-gray-600">Total Awards</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-newman-red-secondary">12</div>
              <div className="text-sm text-gray-600">State Titles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-newman-red">1,500+</div>
              <div className="text-sm text-gray-600">Students Honored</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-newman-red-secondary">60+</div>
              <div className="text-sm text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}