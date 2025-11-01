import React from 'react'

function Services() {
  return (
  <main className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-gray-900 py-8 sm:py-12 w-full">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">Our Services</h1>
      <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 mb-8 sm:mb-12">
        Valour Technologies helps organisations design, build and operate resilient
        digital platforms. We offer end-to-end services from product strategy to
        long-term platform operations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <div className="p-4 sm:p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
          <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
            Custom Software Development
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Building secure, maintainable web and mobile applications with modern stacks and strong engineering practices.
          </p>
        </div>

        <div className="p-4 sm:p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
          <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
            Cloud Architecture & Migration
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Designing cloud-native platforms, migrations to AWS/Azure/GCP, and cost‑efficient infrastructure.
          </p>
        </div>

        <div className="p-4 sm:p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
          <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
            DevOps & Site Reliability
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            CI/CD, observability, incident response, and SRE practices to keep services healthy and deployable.
          </p>
        </div>

        <div className="p-4 sm:p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
          <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
            Security & Compliance
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Threat modelling, security assessments, and remediation to meet compliance and reduce risk.
          </p>
        </div>

        <div className="p-4 sm:p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
          <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
            Data Engineering & Analytics
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Data pipelines, analytics platforms and ML-ready infrastructure to make data useful and reliable.
          </p>
        </div>

        <div className="p-4 sm:p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
          <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
            Consulting & Advisory
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Architecture reviews, technology selection, and project rescue to align engineering with business goals.
          </p>
        </div>
      </div>

      <section className="mt-8 sm:mt-12 p-6 sm:p-8 bg-secondary rounded-lg">
        <h2 className="text-lg sm:text-2xl font-bold text-primary mb-3">How we work</h2>
        <ul className="space-y-2 sm:space-y-3 list-disc pl-5 text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
          <li>Small, senior-led teams that deliver continuously</li>
          <li>Clear milestones and measurable outcomes</li>
          <li>Security and operational reliability embedded into delivery</li>
        </ul>
        <a 
          href="/contact" 
          className="inline-block px-5 py-3 bg-primary hover:bg-primary/90 hover:shadow-lg text-white rounded-lg transition-all duration-200"
        >
          Start a project
        </a>
      </section>
    </main>
  )
}

export default Services

