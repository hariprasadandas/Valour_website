import React from 'react'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const message = document.getElementById('message')?.value || ''
    const email = document.getElementById('email')?.value || ''
    const name = document.getElementById('name')?.value || ''
    
    window.location.href = `mailto:contact@valourtech.com?subject=Website enquiry from ${name}&body=${encodeURIComponent(message)}\n\nReply to: ${email}`
  }

  return (
    <main className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 max-w-7xl mx-auto text-gray-900 w-full">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">Contact Us</h1>
      <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 mb-6 sm:mb-12">
        Ready to discuss a project, partnership or job opportunity? Get in touch
        using the details below or send us a message.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-secondary/20 p-6 sm:p-8 rounded-lg shadow-sm">
          <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4">Contact Details</h3>
          <div className="space-y-3 text-gray-700 text-sm sm:text-base">
            <p>
              Email:{' '}
              <a href="mailto:contact@valourtech.com" className="text-primary hover:text-primary/80 transition-colors">
                contact@valourtech.com
              </a>
            </p>
            <p>
              Careers:{' '}
              <a href="mailto:careers@valourtech.com" className="text-primary hover:text-primary/80 transition-colors">
                careers@valourtech.com
              </a>
            </p>
            <p>Phone: +1 (555) 123-4567</p>
            <p className="text-sm sm:text-base">
              Address:<br />
              123 Valour Way, Suite 100<br />
              Anytown, USA
            </p>
          </div>
        </div>

        <div className="border border-gray-200 p-6 sm:p-8 rounded-lg shadow-sm">
          <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                Your name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Full name"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Tell us about your project"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto text-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Contact