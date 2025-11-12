import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
  return (
  <main className="text-gray-100 min-h-screen bg-gradient-to-b from-gray-900/90 via-gray-950 to-black">
    <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto py-12 space-y-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
        Our Services
      </h1>
      <div className="bg-white/75 backdrop-blur-md rounded-xl border border-blue-200/50 shadow-lg px-6 sm:px-10 py-10">
        <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto text-center">
          Valour Technologies helps organisations design, build and operate resilient
          digital platforms. We offer end-to-end services from product strategy to
          long-term platform operations.
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-blue-200/50 shadow-xl px-6 sm:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-blue-200/50 hover:bg-white/90 transition-all duration-200 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Custom Software Development
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Building secure, maintainable web and mobile applications with modern stacks and strong engineering practices.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-blue-200/50 hover:bg-white/90 transition-all duration-200 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Cloud Architecture & Migration
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Designing cloud-native platforms, migrations to AWS/Azure/GCP, and cost‑efficient infrastructure.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-blue-200/50 hover:bg-white/90 transition-all duration-200 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            DevOps & Site Reliability
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            CI/CD, observability, incident response, and SRE practices to keep services healthy and deployable.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-blue-200/50 hover:bg-white/90 transition-all duration-200 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Security & Compliance
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Threat modelling, security assessments, and remediation to meet compliance and reduce risk.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-blue-200/50 hover:bg-white/90 transition-all duration-200 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Data Engineering & Analytics
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Data pipelines, analytics platforms and ML-ready infrastructure to make data useful and reliable.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-blue-200/50 hover:bg-white/90 transition-all duration-200 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Consulting & Advisory
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Architecture reviews, technology selection, and project rescue to align engineering with business goals.
          </p>
        </div>
      </div>
      </div>

      <section className="bg-white/75 backdrop-blur-md rounded-3xl p-10 border border-blue-200/60 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">How we work</h2>
        <ul className="space-y-3 list-disc pl-5 text-gray-700 mb-8">
          <li>Small, senior-led teams that deliver continuously</li>
          <li>Clear milestones and measurable outcomes</li>
          <li>Security and operational reliability embedded into delivery</li>
        </ul>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 text-white rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 shadow-lg"
        >
          Start a project
        </Link>
      </section>
    </div>
  </main>
  )
}

export default Services

