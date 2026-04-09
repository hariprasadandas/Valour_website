import React from 'react'
import { Link } from 'react-router-dom'
import posBanner from '../../assets/Banners/POS-banner.jpeg'
import { SERVICES_LIST, SERVICE_DETAILS } from './serviceData'

function Services() {
  return (
    <main className="text-gray-800 min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_36%),linear-gradient(135deg,_#f8fbff_0%,_#f4f7ff_45%,_#fff8f0_100%)]">
      <div className="px-6 sm:px-10 md:px-12 lg:px-14 max-w-7xl mx-auto pt-4 sm:pt-6 md:pt-8 pb-14 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-sm">
            What We Do
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-600">
            Our Services
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            A clean overview of the capabilities we deliver, with each service paired to its matching visual so the offer is easy to scan and easy to remember.
          </p>
        </div>

      <section className="overflow-hidden rounded-[2rem] border border-orange-200/60 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[280px]">
            <img src={posBanner} alt="Valour POS Restaurant Ordering System" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
          </div>
          <div className="p-6 sm:p-8 lg:p-10">
            <span className="inline-flex rounded-full border border-orange-300/60 bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-orange-700">
              Valour Product
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-900">POS Restaurant Ordering System</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-xl">
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

      <div className="rounded-3xl border border-blue-200/50 bg-white/80 px-6 sm:px-10 py-10 shadow-lg backdrop-blur-md">
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl">
          Valour Technologies helps organisations design, build and operate resilient
          digital platforms. We offer end-to-end services from product strategy to
          long-term platform operations.
        </p>
      </div>

      <div className="rounded-3xl border border-blue-200/50 bg-white/75 px-6 sm:px-8 py-10 shadow-xl backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service) => {
            const detail = SERVICE_DETAILS[service.slug]

            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.14)]"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={detail?.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/70">
                      Service
                    </p>
                    <h3 className="mt-1 text-lg font-bold leading-tight">{service.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700 transition-colors hover:text-blue-500"
                  >
                    Learn More →
                  </Link>
                </div>
              </article>
            )
          })}
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

