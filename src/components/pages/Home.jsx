import React from 'react'
import HeroSection from '../hero/HeroSection'

function Home() {
  return (
    <main className="text-gray-100 min-h-screen bg-gradient-to-b from-gray-900/90 via-gray-950 to-black">
      <HeroSection>
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <section className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center min-h-screen">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-400">
                Valour Technologies
              </h1>
              <p className="text-xl leading-relaxed mb-8 text-white">
                We design and build secure, scalable software and cloud platforms that help
                organisations accelerate digital transformation.
              </p>
              <div className="flex gap-4 items-center">
                <a 
                  href="/contact" 
                  className="px-6 py-3 text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50" 
                >
                  Contact Us
                </a>
                <a 
                  href="/about" 
                  className="text-white hover:text-blue-200 transition-colors font-medium group flex items-center gap-1"
                >
                  Learn more <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center relative z-10">
              <div className="inline-block p-8 rounded-xl bg-gray-900/80 backdrop-blur-md shadow-2xl hover:shadow-3xl transition-all duration-200 text-center border border-gray-700/50">
                <h3 className="text-2xl font-semibold text-white mb-2">Our Focus</h3>
                <p className="text-blue-100">Cloud platforms · Security · Reliable delivery</p>
              </div>
            </div>
          </section>
        </div>
      </HeroSection>

      <div className="relative z-10 bg-gray-900/90 backdrop-blur-xl border-t border-gray-800/50">
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <section className="py-12">
            <h2 className="text-2xl font-bold mb-8 text-white">Core Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-900/90 backdrop-blur-xl rounded-lg shadow-2xl hover:shadow-3xl hover:bg-gray-800/90 transition-all duration-200 border border-gray-700/50">
                <strong className="block text-lg font-semibold text-white mb-2">
                  Engineering
                </strong>
                <p className="text-blue-100">
                  Custom web & mobile app development with modern stacks.
                </p>
              </div>
              <div className="p-6 bg-gray-900/90 backdrop-blur-xl rounded-lg shadow-2xl hover:shadow-3xl hover:bg-gray-800/90 transition-all duration-200 border border-gray-700/50">
                <strong className="block text-lg font-semibold text-white mb-2">
                  Cloud & Infra
                </strong>
                <p className="text-blue-100">
                  Design, migration and operations on public cloud platforms.
                </p>
              </div>
              <div className="p-6 bg-gray-900/90 backdrop-blur-xl rounded-lg shadow-2xl hover:shadow-3xl hover:bg-gray-800/90 transition-all duration-200 border border-gray-700/50">
                <strong className="block text-lg font-semibold text-white mb-2">
                  Security
                </strong>
                <p className="text-blue-100">
                  Security assessments, threat modelling and remediation.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Home

