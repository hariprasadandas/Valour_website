import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.webp'

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4" style={{background: '#0b2545', color: '#fff'}}>
      <div className="flex items-center gap-4">
        <img src={logo} alt="Valour Logo" className="h-10 w-10 object-contain" />
        <div className="flex flex-col">
          <div className="font-bold text-xl leading-tight" style={{color: '#fff'}}>Valour</div>
          <div className="font-bold text-lg leading-tight" style={{color: '#fff'}}>Technologies</div>
        </div>
        {/* <div className="opacity-90 text-sm" style={{color: '#fff'}}>Innovate. Secure. Scale.</div> */}
      </div>

      <nav className="flex gap-5">
        <Link to="/" className="text-white px-2 py-1 rounded transition-all duration-200 hover:bg-white/10 hover:underline">Home</Link>
        <Link to="/about" className="text-white px-2 py-1 rounded transition-all duration-200 hover:bg-white/10 hover:underline">About</Link>
        <Link to="/services" className="text-white px-2 py-1 rounded transition-all duration-200 hover:bg-white/10 hover:underline">Services</Link>
        <Link to="/careers" className="text-white px-2 py-1 rounded transition-all duration-200 hover:bg-white/10 hover:underline">Careers</Link>
        <Link to="/contact" className="text-white px-2 py-1 rounded transition-all duration-200 hover:bg-white/10 hover:underline">Contact</Link>
      </nav>
    </header>
  )
}

export default Header

