import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { cardVariants, sectionVariants, sectionViewport } from '../common/motionPresets'

function About() {
  return (
    <motion.main
      className="text-gray-800 min-h-screen bg-gradient-to-br from-blue-50 via-green-50/40 via-white to-orange-50/30"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      <div className="px-6 sm:px-10 md:px-12 lg:px-14 max-w-7xl mx-auto pt-2 sm:pt-4 md:pt-6 pb-12 space-y-12">
        <motion.h1
          variants={cardVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 leading-tight"
        >
          About Valour Technologies
        </motion.h1>

        <motion.div variants={cardVariants} className="relative overflow-hidden rounded-2xl border border-blue-200/60 bg-white/85 px-6 py-10 shadow-[0_20px_50px_rgba(30,64,175,0.12)] backdrop-blur-md sm:px-10">
          <div className="pointer-events-none absolute -top-20 -right-16 h-52 w-52 rounded-full bg-blue-200/35 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-12 h-52 w-52 rounded-full bg-emerald-200/30 blur-3xl" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Company Overview
            </span>

            <p className="mt-5 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
              Valour Technologies Pvt. Ltd. is a forward-thinking IT services and technology solutions company dedicated to helping businesses innovate, grow, and succeed in the digital era. We combine technical expertise with industry knowledge to deliver reliable, scalable solutions that support organisations in achieving their business goals.
            </p>
            <p className="mt-5 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
              At Valour Technologies, our team of passionate developers, consultants, and technology specialists is committed to delivering high-quality services using modern technologies and industry best practices. We believe strong collaboration, innovation, and continuous improvement are key to building impactful digital solutions.
            </p>
          </div>
        </motion.div>

        <motion.section variants={cardVariants} className="bg-white/75 backdrop-blur-md rounded-xl border border-blue-200/50 shadow-lg px-6 sm:px-10 py-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
          Our mission is to empower businesses with the right technology and skilled professionals, enabling them to stay competitive in an ever-evolving technology landscape. Through dedication, integrity, and a customer-focused approach, Valour Technologies continues to build long-term partnerships with clients across industries.
          </p>
        </motion.section>

        <motion.section variants={cardVariants} className="bg-white/75 backdrop-blur-md rounded-xl border border-blue-200/50 shadow-lg px-6 sm:px-10 py-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">What we do</h2>
          <ul className="space-y-4 list-disc pl-5 text-gray-700 text-lg">
            <li>Custom Software Development (Web & Mobile)</li>
            <li>Cloud Architecture & Migration (AWS / Azure / GCP)</li>
            <li>Managed DevOps & SRE</li>
            <li>Security Assessments & Compliance</li>
            <li>Data Engineering & Analytics</li>
          </ul>
        </motion.section>

        <motion.section variants={cardVariants} className="bg-white/80 backdrop-blur-md rounded-xl p-8 border border-blue-200/60 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Why choose Valour?</h3>
          <ol className="space-y-4 list-decimal pl-5 text-gray-700 text-lg">
            <li>Experienced engineering teams that ship production-ready systems</li>
            <li>Focus on security and reliable operations from day one</li>
            <li>Practical, business-first approach to architecture and delivery</li>
          </ol>
        </motion.section>

        {/* <section className="bg-white/80 backdrop-blur-md rounded-xl p-8 border border-blue-200/60 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Get in touch</h3>
          <p className="text-gray-700 text-lg">
            Interested in working together? Email us at{' '}
            <a href="mailto:contact@valourtech.com" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              info@valourtechnologies.com
            </a>{' '}
            or{' '}
            <Link to="/contact" state={{ openForm: true }} className="inline-block mt-4 px-6 py-3 text-white rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 shadow-lg">
              send us a message
            </Link>
          </p>
        </section> */}
      </div>
    </motion.main>
  )
}

export default About
