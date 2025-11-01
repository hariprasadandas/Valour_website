import React from 'react'

function Footer() {
	return (
		<footer className="w-full bg-[#09203a] text-white mt-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
				<div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
					<div className="w-full md:w-1/2">
						<h3 className="text-lg font-semibold mb-1">Valour Technologies</h3>
						<p className="text-sm text-white/90 mb-2">Innovate. Secure. Scale.</p>
						<p className="text-sm mb-1">Email: <a href="mailto:contact@valourtech.com" className="text-blue-200">contact@valourtech.com</a></p>
						<p className="text-sm">Phone: +1 (555) 123-4567</p>
					</div>

					<div className="w-full md:w-1/2 text-left md:text-right">
						<p className="text-sm">© {new Date().getFullYear()} Valour Technologies</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer

