import React from 'react'
import OfficesSection from './OfficesSection';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const message = document.getElementById('message')?.value || ''
    const email = document.getElementById('email')?.value || ''
    const name = document.getElementById('name')?.value || ''

    window.location.href = `mailto:info@valourtechnologies.com?subject=Website enquiry from ${name}&body=${encodeURIComponent(message)}\n\nReply to: ${email}`
  }

  return (
    <main className="text-gray-800 min-h-screen bg-gradient-to-br from-blue-50 via-green-50/40 via-white to-orange-50/30">
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto py-12 space-y-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
          Contact Us
        </h1>
        <div className="bg-white/75 backdrop-blur-md rounded-xl border border-blue-200/50 shadow-lg px-6 sm:px-10 py-10">
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto text-center">
            Ready to discuss a project, partnership or job opportunity? Get in touch
            using the details below or send us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-blue-200/60 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Details</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Email:{' '}
                <a href="mailto:info@valourtechnologies.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                  info@valourtechnologies.com
                </a>
              </p>
              <p>
                Careers:{' '}
                <a href="mailto:careers@valourtechnologies.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                  hr@valourtechnologies.com
                </a>
              </p>
              <p>Phone: +91 9515272424</p>
              <p>
                Address:<br />
                123 Valour Way, Suite 100<br />
                Anytown, USA
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-blue-200/60 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Full name"
                  className="w-full p-3 bg-white/80 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all text-gray-800 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full p-3 bg-white/80 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all text-gray-800 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us about your project"
                  className="w-full p-3 bg-white/80 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all text-gray-800 placeholder-gray-400 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-white rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <OfficesSection />
      </div>
    </main>
  )
}

export default Contact