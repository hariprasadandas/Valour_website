import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
// import HeroSection from '../hero/HeroSection'
import About from './About'
import Services from './Services'
import Team from './Team'
import { CLIENTS_DATA } from './Clients'
import Careers from './Careers'
import Contact from './Contact'
import dashboardPic1 from '../../assets/dashboard-pic1.png'
import dashboardPic2 from '../../assets/dashboard-pic2.png'
import dashboardPic3 from '../../assets/dashboard-pic3.png'
import dashboardPic4 from '../../assets/dashboard-pic4.png'
import OfficesSection from './OfficesSection';

const CERTIFIED_PARTNERS = [
  {
    name: 'Microsoft',
    subtitle: 'Gold Cloud Solutions Partner',
    description: 'Building secure, scalable products on Azure and the Microsoft ecosystem.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    accent: 'from-sky-300/40 to-blue-300/40',
  },
  {
    name: 'Salesforce',
    subtitle: 'Salesforce Consulting Partner',
    description: 'Delivering tailored CRM transformations and Lightning platform experiences.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
    accent: 'from-green-300/40 to-emerald-300/40',
  },
]

const IMPACT_STATS = [
  {
    value: '80%',
    title: 'Improvement in Data-Driven Decision Making',
    subtitle: '',
    iconAccent: 'from-rose-100 to-pink-200',
    iconImage: dashboardPic1,
  },
  {
    value: '90%',
    title: 'Improvement in Customer Satisfaction Scores',
    subtitle: '',
    iconAccent: 'from-amber-100 to-yellow-200',
    iconImage: dashboardPic2,
  },
  {
    value: '65%',
    title: 'Increase in User Engagement on Digital Platforms',
    subtitle: '',
    iconAccent: 'from-sky-100 to-blue-200',
    iconImage: dashboardPic3,
  },
  {
    value: '45%',
    title: 'Cost Reduction in IT Operations',
    subtitle: '',
    iconAccent: 'from-emerald-100 to-green-200',
    iconImage: dashboardPic4,
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
    <main className="text-gray-800 min-h-screen bg-gradient-to-br from-blue-50 via-green-50/40 via-white to-orange-50/30">
      {/* Banner Section with Auto Scrolling */}
      <div className="relative w-full min-h-[70vh]">
        <div ref={containerRef} className="relative w-full min-h-[70vh] overflow-x-auto overflow-y-hidden snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {/* Horizontal scrollable container */}
          <div className="flex h-[70vh] w-max scroll-smooth">
          {/* Slide 1 - Main Banner */}
          <div className={`relative w-screen h-[70vh] flex-shrink-0 flex items-center justify-center snap-center overflow-hidden transition-all duration-1000 ease-in-out ${currentSlide === 0 ? 'opacity-100 scale-100' : 'opacity-80 scale-95'}`}>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-sky-300/30 to-blue-500/20">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
              {/* Light overlay for better text readability */}
              <div className="absolute inset-0 bg-white/60"></div>
            </div>

            {/* Animated background elements removed for neutral theme */}

            <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full text-center">
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                {/* Main heading with floating and rotating effect */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 sm:mb-8 leading-tight">
                  <span className="inline-block bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent animate-float-rotate">
                    Valour
                  </span>
                  <span className="inline-block mx-2 sm:mx-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-jump-float">
                    Technologies
                  </span>
                </h1>

                {/* Subtitle with jumping animation */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 max-w-4xl mx-auto font-medium animate-jump">
                  Transforming Ideas Into Digital Reality
                </p>

                {/* Tagline with floating animation */}
                <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto animate-float-delayed">
                  We design and build secure, scalable software and cloud platforms
                </p>

              </div>
            </div>
          </div>

          {/* Slide 2 - Additional Content */}
          <div className={`relative w-screen h-[70vh] flex-shrink-0 flex items-center justify-center snap-center overflow-hidden transition-all duration-1000 ease-in-out ${currentSlide === 1 ? 'opacity-100 scale-100' : 'opacity-80 scale-95'}`}>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-emerald-300/30 to-green-500/20">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
              {/* Light overlay for better text readability */}
              <div className="absolute inset-0 bg-white/50"></div>
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
                    className="px-6 py-3 text-white rounded-lg bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 transition-all duration-200 shadow-lg"
                  >
                    Our Services
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-3 text-white rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 transition-all duration-200 shadow-lg"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 - Services Preview */}
          <div className={`relative w-screen h-[70vh] flex-shrink-0 flex items-center justify-center snap-center overflow-hidden transition-all duration-1000 ease-in-out ${currentSlide === 2 ? 'opacity-100 scale-100' : 'opacity-80 scale-95'}`}>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-amber-300/30 to-orange-500/20">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_50%)]"></div>
              {/* Light overlay for better text readability */}
              <div className="absolute inset-0 bg-white/50"></div>
            </div>

            {/* Animated background elements removed for neutral theme */}

            <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full text-center">
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-gray-800 drop-shadow-lg">
                  Excellence in Every Project
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-sky-50 backdrop-blur-md rounded-xl border border-blue-300/50 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Engineering</h3>
                    <p className="text-gray-700">Custom solutions built with modern technology</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 backdrop-blur-md rounded-xl border border-green-300/50 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Cloud & Infra</h3>
                    <p className="text-gray-700">Scalable infrastructure for your business</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 backdrop-blur-md rounded-xl border border-orange-300/50 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Security</h3>
                    <p className="text-gray-700">Protecting what matters most</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* Slide Indicators - Only visible within banner slides */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[10] flex space-x-3 pointer-events-auto">
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
                  ? 'bg-blue-500 scale-125 shadow-lg ring-2 ring-blue-300'
                  : 'bg-blue-300/70 hover:bg-blue-400/90 ring-1 ring-blue-200/50'
              }`}
            />
          ))}
        </div>
      </div>

      <section className="relative py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase text-blue-500/70 mb-3">
              Impact Snapshot
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
              Meaningful Outcomes for Modern Organisations
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
              We partner with leadership teams to unlock measurable improvements across growth, experience,
              and operational efficiency.
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-4">
            {IMPACT_STATS.map((stat) => (
              <div
                key={stat.title}
                className="group relative flex flex-col items-center rounded-3xl border border-white/60 bg-white/80 px-6 py-10 text-center shadow-[0_18px_48px_rgba(15,23,42,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]"
              >
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.iconAccent} shadow-inner`}>
                  {stat.iconImage ? (
                    <img src={stat.iconImage} alt={stat.title} className="h-10 w-10 object-contain" />
                  ) : (
                    stat.icon
                  )}
                </div>
                <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-3">
                  {stat.value}
                </div>
                <p className="text-base font-semibold text-gray-800 leading-snug">
                  {stat.title}
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  {stat.subtitle}
                </p>
                <div className="absolute inset-x-8 bottom-4 h-px bg-gradient-to-r from-transparent via-blue-200/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-8">
          <p className="text-xs tracking-[0.35em] uppercase text-blue-500/70 mb-3">
            Our Clients
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Partnering With Forward-Thinking Teams
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-white via-white/70 to-transparent" />
          <div
            ref={marqueeTrackRef}
            className="flex w-max gap-12 px-12 py-2 will-change-transform"
          >
            {marqueeClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex min-w-[260px] flex-col items-center rounded-2xl border border-blue-200/50 bg-white/80 px-6 py-6 backdrop-blur-md shadow-lg"
              >
                <div
                  className="flex h-20 w-32 items-center justify-center rounded-xl bg-white p-3 shadow-inner border border-gray-200"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="mt-4 text-base sm:text-lg font-semibold text-gray-800 text-center tracking-wide">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      

      <section className="relative py-14 sm:py-16">
        <div className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-300/30 blur-3xl animate-pulse" />
        <div className="absolute inset-x-12 top-1/2 -translate-y-1/2 rounded-3xl border border-blue-200/30 bg-gradient-to-b from-green-100/20 via-blue-100/20 to-orange-100/20 blur-2xl opacity-60 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-xs tracking-[0.4em] uppercase text-blue-500/70 mb-3">
              Certified Partners
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
              Certified & Partnering with Microsoft and Salesforce
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              We bring platform expertise, trusted delivery playbooks, and joint go-to-market programs to every engagement.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {CERTIFIED_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="relative overflow-hidden rounded-3xl border border-blue-200/50 bg-white/90 px-8 py-10 backdrop-blur-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.accent} opacity-30 animate-gradient-x`} />
                <div className="relative flex flex-col h-full gap-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-100 to-green-100 px-4 py-2 text-xs font-medium uppercase tracking-[0.32em] text-gray-700">
                      <span className="block h-2 w-2 rounded-full bg-green-400 animate-ping" />
                      Trusted Partner
                    </div>
                    <div className="h-12 w-32 sm:w-40 flex items-center justify-center bg-white rounded-xl shadow-inner border border-gray-200">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-h-8 sm:max-h-9 w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 drop-shadow">
                      {partner.name}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-blue-600">
                      {partner.subtitle}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-600">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 border border-blue-200/50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-4 w-4 text-blue-600"
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
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 border border-green-200/50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-4 w-4 text-green-600"
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
                    <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1 border border-orange-200/50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-4 w-4 text-orange-600"
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
      <OfficesSection />
      
    </main>
  )
}

export default Home
