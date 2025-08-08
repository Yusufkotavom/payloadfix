import React from 'react'
import { RenderBlocks } from '@/blocks/RenderBlocks'

interface KotacomHomepageProps {
  layout?: Array<{
    blockType: string
    [key: string]: any
  }>
}

export const KotacomHomepage: React.FC<KotacomHomepageProps> = ({ layout }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* KOTACOM Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 rounded-lg p-4 mr-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">K</span>
                </div>
              </div>
              <h1 className="text-5xl font-bold">
                KOTACOM<span className="text-blue-200 ml-2 text-3xl">AGENCY</span>
              </h1>
            </div>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Professional Digital Solutions & Content Management
            </p>
            <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto">
              Transforming businesses through innovative web development, content management
              systems, and digital marketing strategies that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View Our Work
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-600 text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Web Development</h3>
              <p className="text-gray-600">
                Custom websites and web applications built with modern technologies for optimal
                performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-600 text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Content Management</h3>
              <p className="text-gray-600">
                Professional CMS solutions that make content management simple and efficient.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-600 text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Digital Marketing</h3>
              <p className="text-gray-600">
                Strategic digital marketing campaigns that increase visibility and drive growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content from CMS */}
      {layout && layout.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <RenderBlocks blocks={layout} />
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how KOTACOM AGENCY can help transform your digital presence
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  )
}
