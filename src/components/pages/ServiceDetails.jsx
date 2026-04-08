import React, { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import posBanner from '../../assets/Banners/POS-banner.jpeg'
import aiBanner from '../../assets/Banners/AI-banner.jpeg'
import bannerWebDev from '../../assets/Banners/Banner-web-dev.jpeg'
import bannerDiscuss from '../../assets/Banners/Banner-discuss-2mem.png'

const SERVICE_DETAILS = {
  'pos-restaurant-system': {
    badge: 'Valour Product',
    title: 'Valour POS Restaurant Ordering System',
    subtitle:
      'Our in-house product for restaurants to take orders quickly, send tickets to the kitchen in real time, and track all ongoing orders from a single screen.',
    image: posBanner,
    highlights: [
      'Counter and table order taking from one interface',
      'Instant kitchen ticket routing to reduce delays',
      'Live order queue tracking for staff and managers',
      'Faster billing with fewer manual mistakes',
    ],
  },
  salesforce: {
    badge: 'Service',
    title: 'Salesforce Development',
    subtitle:
      'Implementation, customization, and integration services that help teams run sales, service, and operations on a unified CRM platform.',
    image: bannerDiscuss,
    highlights: [
      'Sales Cloud and Service Cloud implementation',
      'Custom flows, automations, and Apex development',
      'Third-party API and ERP integrations',
      'Admin enablement and long-term support',
    ],
  },
  'web-development': {
    badge: 'Service',
    title: 'Web Development',
    subtitle:
      'High-performance websites and web applications focused on UX, speed, and maintainable engineering standards.',
    image: bannerWebDev,
    highlights: [
      'Modern frontend and full-stack development',
      'Responsive design for mobile and desktop',
      'Performance optimization and SEO foundations',
      'Secure deployment and monitoring',
    ],
  },
  'ai-automation': {
    badge: 'Service',
    title: 'AI & Automation',
    subtitle:
      'Practical AI solutions and workflow automation that reduce repetitive work, improve turnaround time, and increase operational consistency.',
    image: aiBanner,
    highlights: [
      'Custom AI assistants and internal copilots',
      'Document and workflow automation',
      'AI integrations with existing tools',
      'Governance-focused implementation',
    ],
  },
}

function ServiceDetails() {
  const { serviceSlug } = useParams()
  const service = serviceSlug ? SERVICE_DETAILS[serviceSlug] : null

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [serviceSlug])

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <main className="text-gray-800 min-h-screen bg-gradient-to-br from-blue-50 via-green-50/40 via-white to-orange-50/30">
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-8 sm:py-12">
        <div className="overflow-hidden rounded-3xl border border-blue-200/50 bg-white/85 shadow-xl">
          <div className="relative h-[45vh] min-h-[280px]">
            <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/55" />
            <div className="relative z-10 h-full flex items-end p-6 sm:p-10">
              <div className="max-w-3xl text-white">
                <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1 text-xs tracking-[0.2em] uppercase border border-white/30">
                  {service.badge}
                </span>
                <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                  {service.title}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-white/90">{service.subtitle}</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 grid gap-6 md:grid-cols-2">
            {service.highlights.map((item) => (
              <div key={item} className="rounded-2xl border border-blue-200/60 bg-white p-5 shadow-sm">
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="px-6 sm:px-10 pb-8 sm:pb-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Talk to Us
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center rounded-lg border border-blue-300 bg-white px-6 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServiceDetails
