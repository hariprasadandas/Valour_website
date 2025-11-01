import React from 'react'

function About() {
  return (
    <main className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-gray-900 py-8 sm:py-12 w-full">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">About Valour Technologies</h1>

      <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12 text-gray-700">
        Valour Technologies is a full-service IT company that helps businesses build secure,
        scalable, and user-centered digital products. We combine engineering excellence,
        cloud expertise, and practical design to deliver software that drives measurable
        business outcomes.
      </p>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-lg sm:text-2xl font-bold text-primary mb-3">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          To empower organisations by delivering reliable and innovative technology solutions
          that accelerate growth and reduce operational risk.
        </p>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-lg sm:text-2xl font-bold text-primary mb-3">What we do</h2>
        <ul className="space-y-2 sm:space-y-3 list-disc pl-5 text-gray-700 text-sm sm:text-base">
          <li>Custom Software Development (Web & Mobile)</li>
          <li>Cloud Architecture & Migration (AWS / Azure / GCP)</li>
          <li>Managed DevOps & SRE</li>
          <li>Security Assessments & Compliance</li>
          <li>Data Engineering & Analytics</li>
        </ul>
      </section>

      <section className="bg-secondary/10 rounded-lg p-4 sm:p-6 mb-8 sm:mb-12">
        <h3 className="text-base sm:text-xl font-bold text-primary mb-3">Why choose Valour?</h3>
        <ol className="space-y-2 sm:space-y-3 list-decimal pl-5 text-gray-700 text-sm sm:text-base">
          <li>Experienced engineering teams that ship production-ready systems</li>
          <li>Focus on security and reliable operations from day one</li>
          <li>Practical, business-first approach to architecture and delivery</li>
        </ol>
      </section>

      <section className="border border-gray-200 rounded-lg p-4 sm:p-6">
        <h3 className="text-base sm:text-xl font-bold text-primary mb-3">Get in touch</h3>
        <p className="text-gray-700 text-sm sm:text-base">
          Interested in working together? Email us at{' '}
          <a href="mailto:contact@valourtech.com" className="text-primary hover:text-primary/80 font-medium">
            info@valourtechnologies.com 
          </a>{' '}
          or{' '}
          <a href="/contact" className="inline-block mt-3 sm:mt-0 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 hover:shadow-lg transition-all duration-200 font-medium">
            send us a message
          </a>
        </p>
      </section>
    </main>
  )
}

export default About
