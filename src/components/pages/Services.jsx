import React from 'react'
import { Link } from 'react-router-dom'
import posBanner from '../../assets/Banners/POS-banner.jpeg'

const SERVICES_LIST = [
  {
    title: 'AI & Automation',
    path: '/services/ai-automation',
    description:
      'Designing and deploying intelligent AI solutions, copilots, and workflow automation that reduce manual effort, improve speed, and increase operational accuracy.',
  },
  {
    title: 'Cloud Computing & DevOps',
    description:
      'Building scalable cloud infrastructure, setting up CI/CD pipelines, and implementing DevOps best practices to deliver faster, safer, and more reliable releases.',
  },
  {
    title: 'Data & Analytics',
    description:
      'Creating modern data pipelines, dashboards, and analytics solutions that turn raw data into actionable insights for confident, data-driven decisions.',
  },
  {
    title: 'Cybersecurity',
    description:
      'Protecting business-critical systems with security assessments, hardening, threat monitoring, and compliance-focused controls to reduce risk.',
  },
  {
    title: 'Web & App Development',
    path: '/services/web-development',
    description:
      'Developing high-performance web and mobile applications with modern technologies, intuitive user experiences, and maintainable architecture.',
  },
  {
    title: 'API & System Integration',
    description:
      'Connecting platforms, applications, and third-party services through secure APIs and integration layers to enable seamless data and process flow.',
  },
  {
    title: 'Digital Transformation',
    description:
      'Modernizing legacy systems, reimagining customer journeys, and enabling technology-led operating models that accelerate business growth.',
  },
  {
    title: 'IT Outsourcing',
    description:
      'Providing dedicated engineering and support teams that extend your in-house capabilities with predictable delivery, quality, and cost control.',
  },
]

function Services() {
  return (
  <main className="text-gray-800 min-h-screen bg-gradient-to-br from-blue-50 via-green-50/40 via-white to-orange-50/30">
    <div className="px-6 sm:px-10 md:px-12 lg:px-14 max-w-7xl mx-auto pt-2 sm:pt-4 md:pt-6 pb-12 space-y-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
        Our Services
      </h1>

      <section className="overflow-hidden rounded-3xl border border-orange-200/60 bg-white/85 shadow-xl">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[280px]">
            <img src={posBanner} alt="Valour POS Restaurant Ordering System" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
          </div>
          <div className="p-6 sm:p-8">
            <span className="inline-flex rounded-full border border-orange-300/60 bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-orange-700">
              Valour Product
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-900">POS Restaurant Ordering System</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our own product built by Valour for restaurants to take orders quickly, send them to the kitchen instantly,
              and monitor all ongoing orders in real time from one dashboard.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/services/pos-restaurant-system"
                className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
              >
                View Product Details
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg border border-blue-300 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white/75 backdrop-blur-md rounded-xl border border-blue-200/50 shadow-lg px-6 sm:px-10 py-10">
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          Valour Technologies helps organisations design, build and operate resilient
          digital platforms. We offer end-to-end services from product strategy to
          long-term platform operations.
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-blue-200/50 shadow-xl px-6 sm:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_LIST.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-blue-200/60 bg-white/85 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
                {service.path && (
                  <Link
                    to={service.path}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Learn More →
                  </Link>
                )}
              </div>
            </article>
          ))}
      </div>
      </div>

      {/* <section className="bg-white/75 backdrop-blur-md rounded-3xl p-10 border border-blue-200/60 shadow-xl">
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
      </section> */}
    </div>
  </main>
  )
}

export default Services

