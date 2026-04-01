import React from 'react'

const SERVICES_LIST = [
  {
    title: 'Custom Software Development',
    description:
      'Building secure, maintainable web and mobile applications with modern stacks and strong engineering practices.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Software engineer writing code on multiple screens',
  },
  {
    title: 'Cloud Architecture & Migration',
    description:
      'Designing cloud-native platforms, migrations to AWS/Azure/GCP, and cost-efficient infrastructure.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Cloud computing network visualization',
  },
  {
    title: 'DevOps & Site Reliability',
    description:
      'CI/CD, observability, incident response, and SRE practices to keep services healthy and deployable.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Operations dashboard and deployment monitoring',
  },
  {
    title: 'Security & Compliance',
    description:
      'Threat modelling, security assessments, and remediation to meet compliance and reduce risk.',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Cyber security lock and digital protection concept',
  },
  {
    title: 'Data Engineering & Analytics',
    description:
      'Data pipelines, analytics platforms and ML-ready infrastructure to make data useful and reliable.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Business analytics charts and data dashboard',
  },
  {
    title: 'Consulting & Advisory',
    description:
      'Architecture reviews, technology selection, and project rescue to align engineering with business goals.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Business consulting team in strategy meeting',
  },
]

function Services() {
  return (
  <main className="text-gray-800 min-h-screen bg-gradient-to-br from-blue-50 via-green-50/40 via-white to-orange-50/30">
    <div className="px-6 sm:px-10 md:px-12 lg:px-14 max-w-7xl mx-auto pt-2 sm:pt-4 md:pt-6 pb-12 space-y-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
        Our Services
      </h1>
      <div className="bg-white/75 backdrop-blur-md rounded-xl border border-blue-200/50 shadow-lg px-6 sm:px-10 py-10">
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          Valour Technologies helps organisations design, build and operate resilient
          digital platforms. We offer end-to-end services from product strategy to
          long-term platform operations.
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-blue-200/50 shadow-xl px-6 sm:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-blue-200/60 bg-white/80 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/10 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
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

