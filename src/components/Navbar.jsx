import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Logo = ({ light }) => (
    <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2.5 group select-none">
      <svg 
        className={`w-9 h-9 transition-transform duration-300 group-hover:scale-105 ${light ? 'text-brand-gold' : 'text-brand-gold'}`} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 72H85" stroke={light && !isScrolled ? "#FFFFFF" : "#111827"} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M25 72L30 52C31.5 46.5 35.5 43 41.5 43H58.5C64.5 43 68.5 46.5 70 52L75 72" stroke="#D4A017" strokeWidth="3" strokeLinecap="round" />
        <circle cx="36" cy="72" r="5" fill="#D4A017" stroke={light && !isScrolled ? "#111827" : "#FFFFFF"} strokeWidth="2" />
        <circle cx="64" cy="72" r="5" fill="#D4A017" stroke={light && !isScrolled ? "#111827" : "#FFFFFF"} strokeWidth="2" />
        <path d="M10 82H90" stroke="#D4A017" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col">
        <span className={`font-playfair font-bold text-lg tracking-wider leading-none transition-colors duration-300 ${light && !isScrolled ? 'text-white' : 'text-brand-dark'}`}>
          FORTUNE
        </span>
        <span className={`font-inter text-[10px] uppercase tracking-[0.25em] font-semibold leading-none mt-1 transition-colors duration-300 ${light && !isScrolled ? 'text-gray-300' : 'text-brand-muted'}`}>
          Cabs
        </span>
      </div>
    </a>
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-brand-border/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo light={true} />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-gold ${
                    isScrolled
                      ? 'text-brand-dark'
                      : 'text-white hover:text-brand-gold'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:9391585856"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  isScrolled ? 'text-brand-dark hover:text-brand-gold' : 'text-white hover:text-brand-gold'
                }`}
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>9391585856</span>
              </a>
              <a
                href="#booking"
                onClick={(e) => handleLinkClick(e, '#booking')}
                className="bg-brand-gold hover:bg-brand-amber text-brand-dark font-semibold text-sm px-5 py-2.5 rounded shadow transition-all duration-300 hover:shadow-lg uppercase tracking-wider"
              >
                Book a Cab
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded focus:outline-none ${
                  isScrolled ? 'text-brand-dark' : 'text-white'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-brand-dark border-b border-brand-border/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block text-gray-300 hover:text-brand-gold text-base font-medium py-2 border-b border-gray-800/40"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href="tel:9391585856"
                    className="flex items-center justify-center gap-2 text-white border border-gray-700 py-2.5 rounded font-medium text-sm"
                  >
                    <Phone className="w-4 h-4 text-brand-gold" />
                    <span>Call 9391585856</span>
                  </a>
                  <a
                    href="#booking"
                    onClick={(e) => handleLinkClick(e, '#booking')}
                    className="block text-center bg-brand-gold hover:bg-brand-amber text-brand-dark font-semibold py-3 rounded text-sm uppercase tracking-wider"
                  >
                    Book a Cab
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
