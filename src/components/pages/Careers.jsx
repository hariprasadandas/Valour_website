import React from 'react'

function Careers() {
  return (
    <main className="px-4 md:px-8 max-w-6xl mx-auto text-gray-900 py-12">
      <h1 className="text-4xl font-bold text-primary mb-4">Careers at Valour Technologies</h1>

      <p className="text-lg text-gray-700 mb-6">
        We're a growing team of engineers, architects and product professionals solving
        cloud, security and data problems. We hire for curiosity, ownership and collaboration.
      </p>

      <div className="grid gap-8 md:grid-cols-2 mb-8">
        <section aria-labelledby="why-join" className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
          <h2 id="why-join" className="text-2xl font-semibold mb-4">Why join us</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Senior-led teams with real ownership.</li>
            <li>Work on secure, reliable production systems.</li>
            <li>Flexible working and clear paths for growth.</li>
          </ul>
        </section>

        <section aria-labelledby="open-roles" className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
          <h2 id="open-roles" className="text-2xl font-semibold mb-4">Open roles</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Senior Full-Stack Engineer</li>
            <li>Cloud Architect</li>
            <li>Site Reliability Engineer</li>
            <li>Security Engineer</li>
          </ul>
          <p className="mt-4 text-gray-700">If you don't see the perfect role, we're happy to hear from talented engineers — send your CV and a short note.</p>
        </section>
      </div>

      <section className="rounded-lg p-6 bg-secondary/10 border border-gray-200">
        <h3 className="text-xl font-semibold mb-3">How to apply</h3>
        <p className="text-gray-700 mb-4">
          Email your CV and a short message to{' '}
          <a href="mailto:careers@valourtech.com" className="text-primary hover:text-primary/80 font-medium">
            careers@valourtech.com
          </a>. Include links to your GitHub or portfolio if available.
        </p>
        <a href="/contact" className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 hover:shadow-lg transition-all duration-200">
          Contact us
        </a>
      </section>
    </main>
  )
}

export default Careers

