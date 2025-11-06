import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.webp'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)
  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v)

  useEffect(() => {
    if (isMobileMenuOpen) {
      const previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = previousOverflow
      }
    }
  }, [isMobileMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 w-full max-w-[100vw] backdrop-blur-md shadow-lg" style={{background: '#0b2545', color: '#fff'}}>
      <div className="flex items-center gap-4">
        <img src={logo} alt="Valour Logo" className="h-10 w-10 object-contain" />
        <div className="flex flex-col">
          <div className="font-bold text-xl leading-tight" style={{color: '#fff'}}>Valour</div>
          <div className="font-bold text-lg leading-tight" style={{color: '#fff'}}>Technologies</div>
        </div>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden md:flex gap-5">
        <Link to="/" className="text-white px-2 py-1 rounded transition-all duration-200 hover:bg-white/10 hover:underline">Home</Link>
        <Link to="/about" className="text-white px-2 py-1 rounded transition-all duration-200 hover:bg-white/10 hover:underline">About</Link>
        <Link to="/services" className="text-white px-2 py-1 rounded transition-all duration-200 hover:bg-white/10 hover:underline">Services</Link>
        <Link to="/careers" className="text-white px-2 py-1 rounded transition-all duration-200 hover:bg-white/10 hover:underline">Careers</Link>
        <Link to="/contact" className="text-white px-2 py-1 rounded transition-all duration-200 hover:bg-white/10 hover:underline">Contact</Link>
      </nav>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={isMobileMenuOpen}
        onClick={toggleMobileMenu}
        className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
        style={{color: '#fff'}}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6.75a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6.75a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Mobile side drawer */}
      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-[1px] md:hidden z-[55]"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile side drawer (always mounted for smooth animation) */}
      <aside
        className={
          `fixed right-0 top-0 h-full w-64 max-w-[80vw] md:hidden shadow-2xl transform transition-transform duration-200 ease-out z-[60] ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`
        }
        style={{background: '#0b2545', color: '#fff'}}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMobileMenuOpen}
        onKeyDown={(e) => { if (e.key === 'Escape') closeMobileMenu() }}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Valour Logo" className="h-8 w-8 object-contain" />
            <span className="font-semibold">Valour Technologies</span>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMobileMenu}
            className="inline-flex items-center justify-center h-9 w-9 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-4">
          <Link to="/" onClick={closeMobileMenu} className="px-3 py-2 rounded hover:bg-white/10">Home</Link>
          <Link to="/about" onClick={closeMobileMenu} className="px-3 py-2 rounded hover:bg-white/10">About</Link>
          <Link to="/services" onClick={closeMobileMenu} className="px-3 py-2 rounded hover:bg-white/10">Services</Link>
          <Link to="/careers" onClick={closeMobileMenu} className="px-3 py-2 rounded hover:bg-white/10">Careers</Link>
          <Link to="/contact" onClick={closeMobileMenu} className="px-3 py-2 rounded hover:bg-white/10">Contact</Link>
        </nav>
      </aside>
    </header>
  )
}

export default Header

