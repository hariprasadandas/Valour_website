import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
// import HeroSection from '../hero/HeroSection'
import About from './About'
import Services from './Services'
import Team from './Team'
import { CLIENTS_DATA } from './Clients'
import Careers from './Careers'
import Contact from './Contact'
import dashboardPic1 from '../../assets/Images/dashboard-pic1.png'
import dashboardPic2 from '../../assets/Images/dashboard-pic2.png'
import dashboardPic3 from '../../assets/Images/dashboard-pic3.png'
import dashboardPic4 from '../../assets/Images/dashboard-pic4.png'
import aiBanner from '../../assets/Banners/AI-banner.jpeg'
import bannerDiscuss from '../../assets/Banners/Banner-discuss-2mem.png'
import posBanner from '../../assets/Banners/POS-banner.jpeg'
import bannerWebDev from '../../assets/Banners/Banner-web-dev.jpeg'
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

const HERO_SLIDES = [
  {
    title: 'From Ideas to Launch in Weeks',
    subtitle: 'Collaborative product squads that design, build and ship with startup speed.',
    ctaLabel: 'Start a Project',
    ctaTo: '/contact',
    image: bannerDiscuss,
  },
  {
    title: 'We Deliver Intelligent AI Solutions That Drive Real Results',
    subtitle: 'Automation-first engineering for platforms that stay clean, fast and reliable.',
    ctaLabel: 'Explore Services',
    ctaTo: '/services',
    image: aiBanner,
  },
  {
    title: 'Smart POS for Restaurants',
    subtitle: 'Take orders at the counter, send tickets to the kitchen instantly, and track every live order in one simple dashboard.',
    ctaLabel: 'Book a Demo',
    ctaTo: '/contact',
    image: posBanner,
    imagePosition: 'center 30%',
  },
  {
    title: 'Web Experiences Built for Growth',
    subtitle: 'Performance-focused web solutions that convert visitors into loyal customers.',
    ctaLabel: 'Meet Our Team',
    ctaTo: '/our-team',
    image: bannerWebDev,
  },
]

function Home() {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const marqueeClients = useMemo(() => [...CLIENTS_DATA, ...CLIENTS_DATA], []);
  const marqueeTrackRef = useRef(null);
  const isHoveringMarqueeRef = useRef(false);
  const isDraggingMarqueeRef = useRef(false);
  const marqueePositionRef = useRef(0);
  const marqueeSegmentWidthRef = useRef(0);
  const dragStartXRef = useRef(0);
  const dragStartPositionRef = useRef(0);

  const goToSlide = (direction) => {
    const nextSlide = (currentSlide + direction + HERO_SLIDES.length) % HERO_SLIDES.length;

    setCurrentSlide(nextSlide);
    containerRef.current?.scrollTo({
      left: nextSlide * window.innerWidth,
      behavior: 'smooth',
    });
  };

  const normalizeMarqueePosition = (position) => {
    const segmentWidth = marqueeSegmentWidthRef.current;
    if (segmentWidth <= 0) return position;

    let normalized = position;
    while (normalized <= -segmentWidth) normalized += segmentWidth;
    while (normalized > 0) normalized -= segmentWidth;
    return normalized;
  };

  const applyMarqueeTransform = () => {
    if (marqueeTrackRef.current) {
      marqueeTrackRef.current.style.transform = `translateX(${marqueePositionRef.current}px)`;
    }
  };

  const handleMarqueePointerDown = (event) => {
    isDraggingMarqueeRef.current = true;
    isHoveringMarqueeRef.current = true;
    dragStartXRef.current = event.clientX;
    dragStartPositionRef.current = marqueePositionRef.current;
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handleMarqueePointerMove = (event) => {
    if (!isDraggingMarqueeRef.current) return;

    event.preventDefault();
    const deltaX = event.clientX - dragStartXRef.current;
    marqueePositionRef.current = normalizeMarqueePosition(dragStartPositionRef.current + deltaX);
    applyMarqueeTransform();
  };

  const handleMarqueePointerEnd = (event) => {
    isDraggingMarqueeRef.current = false;
    isHoveringMarqueeRef.current = false;
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const container = containerRef.current;
        const slideWidth = window.innerWidth;
        const nextSlide = (currentSlide + 1) % HERO_SLIDES.length;
        setCurrentSlide(nextSlide);

        // Use scrollLeft for immediate jump to avoid reverse scrolling
        container.scrollLeft = nextSlide * slideWidth;
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);
  useEffect(() => {
    const track = marqueeTrackRef.current;
    if (!track) return;

    let frameId;
    const speed = 0.75;

    const updateSegmentWidth = () => {
      marqueeSegmentWidthRef.current = track.scrollWidth / 2;
      marqueePositionRef.current = normalizeMarqueePosition(marqueePositionRef.current);
      applyMarqueeTransform();
    };

    const step = () => {
      if (!isHoveringMarqueeRef.current && !isDraggingMarqueeRef.current) {
        marqueePositionRef.current = normalizeMarqueePosition(marqueePositionRef.current - speed);
        applyMarqueeTransform();
      }
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
      isDraggingMarqueeRef.current = false;
      track.style.transform = '';
    };
  }, [marqueeClients]);

  return (
    <main className="text-gray-800 min-h-screen bg-gradient-to-br from-blue-50 via-green-50/40 via-white to-orange-50/30">
      {/* Banner Section with Auto Scrolling */}
      <div className="relative w-full min-h-[61vh] lg:h-[83vh]">
        <div ref={containerRef} className="relative w-full min-h-[61vh] lg:h-[83vh] overflow-x-auto overflow-y-hidden snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {/* Horizontal scrollable container */}
          <div className="flex h-[61vh] lg:h-[83vh] w-max scroll-smooth">
            {HERO_SLIDES.map((slide, index) => (
              <div
                key={slide.title}
                className={`relative w-screen h-[61vh] lg:h-[83vh] flex-shrink-0 flex items-start justify-center snap-center overflow-hidden transition-all duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 scale-100' : 'opacity-80 scale-95'}`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: slide.imagePosition || 'center center' }}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/55" />

                <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-10 pl-7 sm:pl-10 md:pl-14 lg:pl-16 pt-10 sm:pt-14 md:pt-16 max-w-7xl mx-auto w-full">
                  <div className="max-w-2xl space-y-4 text-left ml-[5px]">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white drop-shadow-xl">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl">
                      {slide.subtitle}
                    </p>
                    <div className="pt-2">
                      <Link
                        to={slide.ctaTo}
                        className="inline-flex items-center rounded-lg border border-white/35 bg-white/15 px-7 py-3 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-gray-900"
                      >
                        {slide.ctaLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-3 sm:px-5 lg:px-8">
          <button
            type="button"
            onClick={() => goToSlide(-1)}
            aria-label="Previous slide"
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-white hover:text-gray-900"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goToSlide(1)}
            aria-label="Next slide"
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-white hover:text-gray-900"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
        {/* Slide Indicators - Only visible within banner slides */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[10] flex space-x-3 pointer-events-auto">
          {HERO_SLIDES.map((_, index) => (
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
        </div> */}
      </div>

      <section className="relative py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-8">
          <p className="text-xs tracking-[0.35em] uppercase text-blue-500/70 mb-3">
            Our Clients
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Partnering With Forward-Thinking Teams
          </h2>
        </div>
        <div
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
          style={{ touchAction: 'pan-y' }}
          onMouseEnter={() => { isHoveringMarqueeRef.current = true; }}
          onMouseLeave={() => {
            if (!isDraggingMarqueeRef.current) {
              isHoveringMarqueeRef.current = false;
            }
          }}
          onPointerDown={handleMarqueePointerDown}
          onPointerMove={handleMarqueePointerMove}
          onPointerUp={handleMarqueePointerEnd}
          onPointerCancel={handleMarqueePointerEnd}
          onPointerLeave={handleMarqueePointerEnd}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-white via-white/70 to-transparent" />
          <div
            ref={marqueeTrackRef}
            className="flex w-max gap-10 px-10 py-2 will-change-transform"
          >
            {marqueeClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group flex min-w-[250px] flex-col items-center rounded-2xl border border-blue-200/50 bg-white/90 px-5 py-5 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-400/70 hover:ring-2 hover:ring-blue-200/70"
              >
                <div className="flex h-24 w-40 items-center justify-center rounded-xl bg-white p-3 shadow-inner">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="mt-3 text-sm sm:text-base font-semibold text-gray-900 text-center leading-snug">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <p className="text-[11px] tracking-[0.35em] uppercase text-blue-500/70 mb-2">
              Impact Snapshot
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
              Meaningful Outcomes for Modern Organisations
            </h2>
            <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
              We partner with leadership teams to unlock measurable improvements across growth, experience,
              and operational efficiency.
            </p>
          </div>
          <div className="grid gap-4 md:gap-5 md:grid-cols-2 xl:grid-cols-4">
            {IMPACT_STATS.map((stat) => (
              <div
                key={stat.title}
                className="group relative flex flex-col items-center rounded-2xl border border-white/60 bg-white/80 px-4 py-6 text-center shadow-[0_12px_32px_rgba(15,23,42,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.iconAccent} shadow-inner`}>
                  {stat.iconImage ? (
                    <img src={stat.iconImage} alt={stat.title} className="h-8 w-8 object-contain" />
                  ) : (
                    stat.icon
                  )}
                </div>
                <div className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-2">
                  {stat.value}
                </div>
                <p className="text-sm sm:text-base font-semibold text-gray-800 leading-snug">
                  {stat.title}
                </p>
                <p className="mt-2 text-xs sm:text-sm text-gray-500">
                  {stat.subtitle}
                </p>
                <div className="absolute inset-x-6 bottom-3 h-px bg-gradient-to-r from-transparent via-blue-200/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
