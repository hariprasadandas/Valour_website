import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
// import HeroSection from '../hero/HeroSection'
import bannerBg1 from '../../assets/banner-bg-1.avif'
import bannerBg2 from '../../assets/banner-bg-2.avif'
import bannerBg3 from '../../assets/banner-bg-3.avif'
import About from './About'
import Services from './Services'
import Team from './Team'
import Clients from './Clients'
import Careers from './Careers'
import Contact from './Contact'


function Home() {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const container = containerRef.current;
        const slideWidth = window.innerWidth;
        const nextSlide = (currentSlide + 1) % 3;
        setCurrentSlide(nextSlide);

        // Use scrollLeft for immediate jump to avoid reverse scrolling
        container.scrollLeft = nextSlide * slideWidth;
      }
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);
  return (
    <main className="text-gray-100 min-h-screen bg-gradient-to-b from-gray-900/90 via-gray-950 to-black">
      {/* Banner Section with Auto Scrolling */}
      <div ref={containerRef} className="relative w-full min-h-screen overflow-x-auto overflow-y-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                containerRef.current?.scrollTo({
                  left: index * window.innerWidth,
                  behavior: 'smooth'
                });
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
        {/* Horizontal scrollable container */}
        <div className="flex h-screen w-max scroll-smooth">
          {/* Slide 1 - Main Banner */}
          <div className={`relative w-screen h-screen flex-shrink-0 flex items-center justify-center snap-center overflow-hidden transition-all duration-1000 ease-in-out ${currentSlide === 0 ? 'opacity-100 scale-100' : 'opacity-80 scale-95'}`}>
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${bannerBg1})`,
              }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-950/70 to-black/80"></div>
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl animate-rotate-slow"></div>
            </div>

            <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full text-center">
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                {/* Main heading with floating and rotating effect */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 sm:mb-8">
                  <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-float-rotate">
                    Valour
                  </span>
                  <span className="inline-block mx-2 sm:mx-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-jump-float">
                    Technologies
                  </span>
                </h1>

                {/* Subtitle with jumping animation */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto font-medium animate-jump">
                  Transforming Ideas Into Digital Reality
                </p>

                {/* Tagline with floating animation */}
                <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto animate-float-delayed">
                  We design and build secure, scalable software and cloud platforms
                </p>

                {/* Animated decorative elements
                <div className="flex justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-12">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-jump"></div>
                  <div className="w-3 h-3 bg-indigo-400 rounded-full animate-jump-delayed"></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-jump"></div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Slide 2 - Additional Content */}
          <div className={`relative w-screen h-screen flex-shrink-0 flex items-center justify-center snap-center overflow-hidden transition-all duration-1000 ease-in-out ${currentSlide === 1 ? 'opacity-100 scale-100' : 'opacity-80 scale-95'}`}>
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${bannerBg2})`,
              }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-900/60 to-blue-900/70"></div>
            </div>

            <div className="absolute inset-0 overflow-hidden z-0">
              <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
            </div>

            <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full text-center">
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Innovation at Scale
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                  Building the future of technology, one solution at a time
                </p>
                <div className="flex justify-center gap-4 mt-8">
                  <Link
                    to="/services"
                    className="px-6 py-3 text-white rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-lg"
                  >
                    Our Services
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-3 text-white rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 shadow-lg"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 - Services Preview */}
          <div className={`relative w-screen h-screen flex-shrink-0 flex items-center justify-center snap-center overflow-hidden transition-all duration-1000 ease-in-out ${currentSlide === 2 ? 'opacity-100 scale-100' : 'opacity-80 scale-95'}`}>
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${bannerBg3})`,
                // Replace the URL above with your own image path
              }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/60 to-purple-900/70"></div>
            </div>

            <div className="absolute inset-0 overflow-hidden z-0">
              <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-rotate-slow"></div>
              <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
            </div>

            <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full text-center">
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                  Excellence in Every Project
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <div className="p-6 bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-700/50">
                    <h3 className="text-xl font-bold text-white mb-3">Engineering</h3>
                    <p className="text-gray-300">Custom solutions built with modern technology</p>
                  </div>
                  <div className="p-6 bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-700/50">
                    <h3 className="text-xl font-bold text-white mb-3">Cloud & Infra</h3>
                    <p className="text-gray-300">Scalable infrastructure for your business</p>
                  </div>
                  <div className="p-6 bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-700/50">
                    <h3 className="text-xl font-bold text-white mb-3">Security</h3>
                    <p className="text-gray-300">Protecting what matters most</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <HeroSection>
        <div className="px-4 sm:px-4 md:px-8 max-w-7xl mx-auto w-full">
          <section className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-8 md:gap-12 items-center min-h-screen">
            <div className="relative z-10 px-2 sm:px-4 md:px-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-400">
                Valour Technologies
              </h1>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 text-white">
                We design and build secure, scalable software and cloud platforms that help
                organisations accelerate digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                <Link
                  to="/contact"
                  className="px-5 py-3 sm:px-6 sm:py-3 text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 w-full sm:w-auto text-center"
                >
                  Contact Us
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:text-blue-200 transition-colors font-medium group flex items-center gap-1"
                >
                  Learn more <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Link>
              </div>
            </div>

            <div className="flex justify-center relative z-10 px-2 sm:px-4 md:px-0">
              <div className="inline-block w-full sm:w-auto p-6 sm:p-8 rounded-xl bg-gray-900/80 backdrop-blur-md shadow-2xl hover:shadow-3xl transition-all duration-200 text-center border border-gray-700/50">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">Our Focus</h3>
                <p className="text-blue-100 text-sm sm:text-base">Cloud platforms · Security · Reliable delivery</p>
              </div>
            </div>
          </section>
        </div>
      </HeroSection> */}




      <About />
      <Services />
      <Team />
      <Clients />
      <Careers />
      <Contact />
    </main>
  )
}

export default Home
