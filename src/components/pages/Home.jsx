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
import bannerDiscuss from '../../assets/Banner-discuss-2mem.jpeg'
import bannerTyping from '../../assets/Banner-lap-typing.jpeg'
import bannerWebDev from '../../assets/Banner-web-dev.jpeg'
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
    subtitle: 'Collaborative product squads that design, build, and ship with startup speed.',
    ctaLabel: 'Start a Project',
    ctaTo: '/contact',
    image: bannerDiscuss,
  },
  {
    title: 'Digital Workflows That Actually Flow',
    subtitle: 'Automation-first engineering for platforms that stay clean, fast, and reliable.',
    ctaLabel: 'Explore Services',
    ctaTo: '/services',
    image: bannerTyping,
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const marqueeClients = useMemo(() => [...CLIENTS_DATA, ...CLIENTS_DATA], []);
  const marqueeTrackRef = useRef(null);
  const isHoveringMarqueeRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);
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
      if (!isHoveringMarqueeRef.current) {
        position -= speed;
        if (segmentWidth > 0 && -position >= segmentWidth) {
          position += segmentWidth;
        }
        track.style.transform = `translateX(${position}px)`;
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
      track.style.transform = '';
    };
  }, [marqueeClients]);

  return (
    <main className="text-gray-800 min-h-screen bg-gradient-to-br from-blue-50 via-green-50/40 via-white to-orange-50/30">
      {/* Banner Section with split content and image */}
      <section className="relative w-full pt-2 sm:pt-4 md:pt-6 pb-10 sm:pb-14 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6 lg:pr-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                Innovative IT Solutions for Modern Business
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                We provide advanced IT technology solutions designed to help businesses grow, innovate, and succeed in the digital world. Our expertise includes Mobile Application Development, Salesforce Solutions, and Web Development, delivering scalable and secure solutions tailored to your business needs.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                With a team of skilled professionals and industry expertise, we help organizations transform their ideas into powerful digital products that enhance productivity, improve customer engagement, and drive business growth.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-md transition-colors duration-300 hover:bg-blue-700"
                >
                  Start a Project
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center rounded-lg border border-blue-200 bg-white px-6 py-3 text-sm sm:text-base font-semibold text-blue-700 transition-colors duration-300 hover:bg-blue-50"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[280px] sm:h-[360px] md:h-[430px] w-full overflow-hidden rounded-3xl border border-white/70 bg-white/70 p-2 shadow-[0_24px_55px_rgba(15,23,42,0.16)] backdrop-blur-md">
                {HERO_SLIDES.map((slide, index) => (
                  <img
                    key={slide.title}
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] rounded-2xl object-cover transition-opacity duration-700 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                ))}

                <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full bg-black/35 px-3 py-2 backdrop-blur-sm">
                  {HERO_SLIDES.map((_, index) => (
                    <span
                      key={index}
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white scale-110' : 'bg-white/45'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10 sm:py-12 md:py-14">
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

      <section className="relative py-8 sm:py-10 md:py-12">
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
            onMouseEnter={() => { isHoveringMarqueeRef.current = true; }}
            onMouseLeave={() => { isHoveringMarqueeRef.current = false; }}
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
      
      

      <section className="relative py-10 sm:py-12 md:py-14">
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
