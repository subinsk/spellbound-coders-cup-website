"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-blue-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">S</span>
            </div>
            <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              <span className="hidden sm:inline">SpellBound Coders Cup</span>
              <span className="sm:hidden">SCC</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm lg:text-base">
              About
            </a>
            <a href="#schedule" className="text-gray-300 hover:text-blue-400 transition-colors text-sm lg:text-base">
              Schedule
            </a>
            <a href="#prizes" className="text-gray-300 hover:text-blue-400 transition-colors text-sm lg:text-base">
              Prizes
            </a>
            <a href="#faq" className="text-gray-300 hover:text-blue-400 transition-colors text-sm lg:text-base">
              FAQ
            </a>
            <button className="px-4 lg:px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/50 text-sm lg:text-base">
              Register Now
            </button>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-blue-500/20 bg-slate-900/95 backdrop-blur-md">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-blue-400 transition-colors py-2"
              >
                About
              </a>
              <a 
                href="#schedule" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-blue-400 transition-colors py-2"
              >
                Schedule
              </a>
              <a 
                href="#prizes" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-blue-400 transition-colors py-2"
              >
                Prizes
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-blue-400 transition-colors py-2"
              >
                FAQ
              </a>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/50">
                Register Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

