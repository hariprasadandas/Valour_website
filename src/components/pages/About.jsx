import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <main className="text-gray-800 min-h-screen bg-gradient-to-br from-blue-50 via-green-50/40 via-white to-orange-50/30">
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto py-12 space-y-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
          About Valour Technologies
        </h1>

        <div className="bg-white/75 backdrop-blur-md rounded-xl border border-blue-200/50 shadow-lg px-6 sm:px-10 py-10">
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto text-center">
            Valour Technologies is a full-service IT company that helps businesses build secure,
            scalable, and user-centered digital products. We combine engineering excellence,
            cloud expertise, and practical design to deliver software that drives measurable
            business outcomes.
          </p>
        </div>

        <section className="bg-white/75 backdrop-blur-md rounded-xl border border-blue-200/50 shadow-lg px-6 sm:px-10 py-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl">
            To empower organisations by delivering reliable and innovative technology solutions
            that accelerate growth and reduce operational risk.
          </p>
        </section>

        <section className="bg-white/75 backdrop-blur-md rounded-xl border border-blue-200/50 shadow-lg px-6 sm:px-10 py-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">What we do</h2>
          <ul className="space-y-4 list-disc pl-5 text-gray-700 text-lg">
            <li>Custom Software Development (Web & Mobile)</li>
            <li>Cloud Architecture & Migration (AWS / Azure / GCP)</li>
            <li>Managed DevOps & SRE</li>
            <li>Security Assessments & Compliance</li>
            <li>Data Engineering & Analytics</li>
          </ul>
        </section>

        <section className="bg-white/80 backdrop-blur-md rounded-xl p-8 border border-blue-200/60 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Why choose Valour?</h3>
          <ol className="space-y-4 list-decimal pl-5 text-gray-700 text-lg">
            <li>Experienced engineering teams that ship production-ready systems</li>
            <li>Focus on security and reliable operations from day one</li>
            <li>Practical, business-first approach to architecture and delivery</li>
          </ol>
        </section>

        <section className="bg-white/80 backdrop-blur-md rounded-xl p-8 border border-blue-200/60 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Get in touch</h3>
          <p className="text-gray-700 text-lg">
            Interested in working together? Email us at{' '}
            <a href="mailto:contact@valourtech.com" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              info@valourtechnologies.com
            </a>{' '}
            or{' '}
            <Link to="/contact" className="inline-block mt-4 px-6 py-3 text-white rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 shadow-lg">
              send us a message
            </Link>
          </p>
        </section>
      </div>
    </main>
  )
}

export default About
