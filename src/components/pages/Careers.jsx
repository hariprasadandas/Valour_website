import React from 'react'
import { Link } from 'react-router-dom'

function Careers() {
  return (
    <main className="text-gray-800 min-h-screen bg-gradient-to-br from-blue-50 via-green-50/40 via-white to-orange-50/30">
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto py-12 space-y-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 leading-tight">
          Careers at Valour Technologies
        </h1>

        <div className="bg-white/75 backdrop-blur-md rounded-xl border border-blue-200/50 shadow-lg px-6 sm:px-10 py-10">
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto text-center">
            We're a growing team of engineers, architects and product professionals solving
            cloud, security and data problems. We hire for curiosity, ownership and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section aria-labelledby="why-join" className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-blue-200/60 shadow-xl">
            <h2 id="why-join" className="text-2xl font-bold text-gray-800 mb-6">Why join us</h2>
            <ul className="list-disc pl-5 space-y-4 text-gray-700 text-lg">
              <li>Senior-led teams with real ownership.</li>
              <li>Work on secure, reliable production systems.</li>
              <li>Flexible working and clear paths for growth.</li>
            </ul>
          </section>

          <section aria-labelledby="open-roles" className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-blue-200/60 shadow-xl">
            <h2 id="open-roles" className="text-2xl font-bold text-gray-800 mb-6">Open roles</h2>
            <ul className="list-disc pl-5 space-y-4 text-gray-700 text-lg">
              <li>Senior Full-Stack Engineer</li>
              <li>Cloud Architect</li>
              <li>Site Reliability Engineer</li>
              <li>Security Engineer</li>
            </ul>
            <p className="mt-6 text-gray-700 text-lg">If you don't see the perfect role, we're happy to hear from talented engineers — send your CV and a short note.</p>
          </section>
        </div>

        <section className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-blue-200/60 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">How to apply</h3>
          <p className="text-gray-700 mb-8 text-lg">
            Email your CV and a short message to{' '}
            <a href="mailto:hr@valourtechnologies.com" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              hr@valourtechnologies.com
            </a>. Include links to your GitHub or portfolio if available.
          </p>
          <Link to="/contact" className="inline-block px-6 py-3 text-white rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 shadow-lg">
            Contact us
          </Link>
        </section>
      </div>
    </main>
  )
}

export default Careers

