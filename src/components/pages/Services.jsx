import React from 'react'

function Services() {
  return (
  <main className="px-4 md:px-8 max-w-6xl mx-auto text-gray-900 py-12">
      <h1 className="text-4xl font-bold text-primary mb-6">Our Services</h1>
      <p className="text-xl leading-relaxed text-gray-700 mb-12">
        Valour Technologies helps organisations design, build and operate resilient
        digital platforms. We offer end-to-end services from product strategy to
        long-term platform operations.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-primary mb-3">
            Custom Software Development
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Building secure, maintainable web and mobile applications with modern stacks and strong engineering practices.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-primary mb-3">
            Cloud Architecture & Migration
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Designing cloud-native platforms, migrations to AWS/Azure/GCP, and cost‑efficient infrastructure.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-primary mb-3">
            DevOps & Site Reliability
          </h3>
          <p className="text-gray-600 leading-relaxed">
            CI/CD, observability, incident response, and SRE practices to keep services healthy and deployable.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-primary mb-3">
            Security & Compliance
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Threat modelling, security assessments, and remediation to meet compliance and reduce risk.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-primary mb-3">
            Data Engineering & Analytics
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Data pipelines, analytics platforms and ML-ready infrastructure to make data useful and reliable.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-primary mb-3">
            Consulting & Advisory
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Architecture reviews, technology selection, and project rescue to align engineering with business goals.
          </p>
        </div>
      </div>

      <section className="mt-12 p-8 bg-secondary rounded-lg">
        <h2 className="text-2xl font-bold text-primary mb-4">How we work</h2>
        <ul className="space-y-3 list-disc pl-6 text-gray-700 mb-6">
          <li>Small, senior-led teams that deliver continuously</li>
          <li>Clear milestones and measurable outcomes</li>
          <li>Security and operational reliability embedded into delivery</li>
        </ul>
        <a 
          href="/contact" 
          className="inline-block px-6 py-3 bg-primary hover:bg-primary/90 hover:shadow-lg text-white rounded-lg transition-all duration-200"
        >
          Start a project
        </a>
      </section>
    </main>
  )
}

export default Services

