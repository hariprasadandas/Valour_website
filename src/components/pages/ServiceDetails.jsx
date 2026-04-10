import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import { SERVICE_DETAILS } from './serviceData'
import { cardVariants, sectionVariants, sectionViewport } from '../common/motionPresets'

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
    <motion.main
      className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_36%),linear-gradient(135deg,_#f8fbff_0%,_#f4f7ff_45%,_#fff8f0_100%)] text-gray-800"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      <motion.section variants={cardVariants} className="max-w-6xl mx-auto px-6 sm:px-8 py-8 sm:py-12">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur">
          <div className="relative h-[45vh] min-h-[300px]">
            <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/55 to-slate-950/40" />
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

          <div className="p-6 sm:p-10">
            <motion.div variants={cardVariants} className="max-w-4xl rounded-3xl border border-blue-200/60 bg-white px-6 sm:px-8 py-6 sm:py-8 shadow-sm">
              <p className="text-base sm:text-lg leading-8 text-gray-700 whitespace-pre-line">
                {service.description}
              </p>
            </motion.div>
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
      </motion.section>
    </motion.main>
  )
}

export default ServiceDetails
