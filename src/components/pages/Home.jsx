import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
// import HeroSection from '../hero/HeroSection'
import bannerBg1 from '../../assets/banner-bg-1.avif'
import bannerBg2 from '../../assets/banner-bg-2.avif'
import bannerBg3 from '../../assets/banner-bg-3.avif'
import About from './About'
import Services from './Services'
import Team from './Team'
import { CLIENTS_DATA } from './Clients'
import Careers from './Careers'
import Contact from './Contact'

const CERTIFIED_PARTNERS = [
  {
    name: 'Microsoft',
    subtitle: 'Gold Cloud Solutions Partner',
    description: 'Building secure, scalable products on Azure and the Microsoft ecosystem.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    accent: 'from-sky-500/60 to-indigo-500/60',
  },
  {
    name: 'Salesforce',
    subtitle: 'Salesforce Consulting Partner',
    description: 'Delivering tailored CRM transformations and Lightning platform experiences.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
    accent: 'from-sky-400/60 to-cyan-500/60',
  },
]

function Home() {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const marqueeClients = useMemo(() => [...CLIENTS_DATA, ...CLIENTS_DATA], []);
  const marqueeTrackRef = useRef(null);

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
    }, 2000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);
  useEffect(() => {
    const track = marqueeTrackRef.current;
    if (!track) return;

    let frameId;
    let position = 0;
    const speed = 0.75;
    let segmentWidth = track.scrollWidth / 2;

    const updateSegmentWidth = () => {
      segmentWidth = track.scrollWidth / 2;
    };

    const step = () => {
      position -= speed;
      if (segmentWidth > 0 && -position >= segmentWidth) {
        position += segmentWidth;
      }
      track.style.transform = `translateX(${position}px)`;
      frameId = requestAnimationFrame(step);
    };

    const handleResize = () => {
      updateSegmentWidth();
    };

    updateSegmentWidth();
    frameId = requestAnimationFrame(step);

    window.addEventListener('resize', handleResize);

    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(updateSegmentWidth);
      resizeObserver.observe(track);
    }

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) resizeObserver.disconnect();
      track.style.transform = '';
    };
  }, [marqueeClients]);

  return (
    <main className="text-gray-100 min-h-screen bg-gradient-to-b from-gray-900/90 via-gray-950 to-black">
      {/* Banner Section with Auto Scrolling */}
      <div ref={containerRef} className="relative w-full min-h-[70vh] overflow-x-auto overflow-y-hidden snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
        <div className="flex h-[70vh] w-max scroll-smooth">
          {/* Slide 1 - Main Banner */}
          <div className={`relative w-screen h-[70vh] flex-shrink-0 flex items-center justify-center snap-center overflow-hidden transition-all duration-1000 ease-in-out ${currentSlide === 0 ? 'opacity-100 scale-100' : 'opacity-80 scale-95'}`}>
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${bannerBg1})`,
              }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Animated background elements removed for neutral theme */}

            <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full text-center">
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                {/* Main heading with floating and rotating effect */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 sm:mb-8">
                  <span className="inline-block text-white animate-float-rotate">
                    Valour
                  </span>
                  <span className="inline-block mx-2 sm:mx-4 text-white animate-jump-float">
                    Technologies
                  </span>
                </h1>

                {/* Subtitle with jumping animation */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-4xl mx-auto font-medium animate-jump">
                  Transforming Ideas Into Digital Reality
                </p>

                {/* Tagline with floating animation */}
                <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto animate-float-delayed">
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
          <div className={`relative w-screen h-[70vh] flex-shrink-0 flex items-center justify-center snap-center overflow-hidden transition-all duration-1000 ease-in-out ${currentSlide === 1 ? 'opacity-100 scale-100' : 'opacity-80 scale-95'}`}>
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${bannerBg2})`,
              }}
            >
              {/* Light overlay for better text readability */}
              <div className="absolute inset-0 bg-white/40"></div>
            </div>

            {/* Animated background elements removed for neutral theme */}

            <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full text-center">
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 text-gray-800 drop-shadow-lg">
                  Innovation at Scale
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
                  Building the future of technology, one solution at a time
                </p>
                <div className="flex justify-center gap-4 mt-8">
                  <Link
                    to="/services"
                    className="px-6 py-3 text-white rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 shadow-lg"
                  >
                    Our Services
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-3 text-white rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-lg"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 - Services Preview */}
          <div className={`relative w-screen h-[70vh] flex-shrink-0 flex items-center justify-center snap-center overflow-hidden transition-all duration-1000 ease-in-out ${currentSlide === 2 ? 'opacity-100 scale-100' : 'opacity-80 scale-95'}`}>
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${bannerBg3})`,
                // Replace the URL above with your own image path
              }}
            >
              {/* Light overlay for better text readability */}
              <div className="absolute inset-0 bg-white/40"></div>
            </div>

            {/* Animated background elements removed for neutral theme */}

            <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full text-center">
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-gray-800 drop-shadow-lg">
                  Excellence in Every Project
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <div className="p-6 bg-white/70 backdrop-blur-md rounded-xl border border-blue-200/50 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Engineering</h3>
                    <p className="text-gray-700">Custom solutions built with modern technology</p>
                  </div>
                  <div className="p-6 bg-white/70 backdrop-blur-md rounded-xl border border-blue-200/50 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Cloud & Infra</h3>
                    <p className="text-gray-700">Scalable infrastructure for your business</p>
                  </div>
                  <div className="p-6 bg-white/70 backdrop-blur-md rounded-xl border border-blue-200/50 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Security</h3>
                    <p className="text-gray-700">Protecting what matters most</p>
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
      
      <section className="relative py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-8">
          <p className="text-xs tracking-[0.35em] uppercase text-blue-200/60 mb-3">
            Our Clients
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Partnering With Forward-Thinking Teams
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-gray-950 via-gray-950/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-gray-950 via-gray-950/70 to-transparent" />
          <div
            ref={marqueeTrackRef}
            className="flex w-max gap-12 px-12 py-2 will-change-transform"
          >
            {marqueeClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex min-w-[260px] flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-md shadow-[0_10px_30px_rgba(8,8,20,0.35)]"
              >
                <div
                  className="flex h-20 w-32 items-center justify-center rounded-xl bg-white/90 p-3 shadow-inner"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="mt-4 text-base sm:text-lg font-semibold text-white text-center tracking-wide">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <Team />
      <Clients /> */}
      

      <section className="relative py-14 sm:py-16">
        <div className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl animate-pulse" />
        <div className="absolute inset-x-12 top-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent blur-2xl opacity-70 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-xs tracking-[0.4em] uppercase text-blue-200/70 mb-3">
              Certified Partners
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              Certified & Partnering with Microsoft and Salesforce
            </h2>
            <p className="mt-4 text-sm sm:text-base text-blue-100/80 max-w-2xl mx-auto">
              We bring platform expertise, trusted delivery playbooks, and joint go-to-market programs to every engagement.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {CERTIFIED_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-lg shadow-[0_15px_45px_rgba(8,8,20,0.38)] transition-transform duration-300 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.accent} opacity-40 animate-gradient-x`} />
                <div className="relative flex flex-col h-full gap-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-3 rounded-full bg-black/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.32em] text-white/80">
                      <span className="block h-2 w-2 rounded-full bg-cyan-300 animate-ping" />
                      Trusted Partner
                    </div>
                    <div className="h-12 w-32 sm:w-40 flex items-center justify-center bg-white/90 rounded-xl shadow-inner">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-h-8 sm:max-h-9 w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white drop-shadow">
                      {partner.name}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-blue-100/90">
                      {partner.subtitle}
                    </p>
                    <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-3 text-xs sm:text-sm text-blue-100/70">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.6}
                          d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Compliance ready
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.6}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Platform-certified leads
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.6}
                          d="M3 7v4a1 1 0 001 1h3m10-5h3a1 1 0 011 1v4m-14 0h10m-10 0v2a1 1 0 001 1h8a1 1 0 001-1v-2m-6 5v2m-2 0h4"
                        />
                      </svg>
                      Joint innovation labs
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* <Services /> */}
      <Careers />
      {/* <Contact /> */}
    </main>
  )
}

export default Home
