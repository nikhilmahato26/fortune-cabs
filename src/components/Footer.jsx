import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark text-gray-400 pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-gray-800">
          
          {/* Column 1: Logo & Statement (4 Cols) */}
          <div className="lg:col-span-4 text-left space-y-4">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2 group select-none">
              <svg 
                className="w-8 h-8 text-brand-gold transition-transform duration-300 group-hover:scale-105" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 72H85" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M25 72L30 52C31.5 46.5 35.5 43 41.5 43H58.5C64.5 43 68.5 46.5 70 52L75 72" stroke="#D4A017" strokeWidth="3" strokeLinecap="round" />
                <circle cx="36" cy="72" r="5" fill="#D4A017" stroke="#111827" strokeWidth="2" />
                <circle cx="64" cy="72" r="5" fill="#D4A017" stroke="#111827" strokeWidth="2" />
                <path d="M10 82H90" stroke="#D4A017" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
              </svg>
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-lg tracking-wider leading-none text-white transition-colors duration-300 group-hover:text-brand-gold">
                  FORTUNE
                </span>
                <span className="font-inter text-[10px] uppercase tracking-[0.25em] font-semibold leading-none mt-1 text-gray-400">
                  Cabs
                </span>
              </div>
            </a>
            
            <p className="text-sm font-light leading-relaxed max-w-sm">
              Professional cab rental and transportation service dedicated to passenger safety, vehicle comfort, and reliability.
            </p>

            <div className="pt-2">
              <a
                href="#booking"
                onClick={(e) => handleLinkClick(e, '#booking')}
                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-amber text-brand-dark font-semibold px-5 py-2.5 rounded text-xs uppercase tracking-wider transition-all duration-300"
              >
                <span>Book a Cab</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 Cols) */}
          <div className="lg:col-span-2.5 text-left">
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-5 font-inter">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-brand-gold transition-colors font-light">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-brand-gold transition-colors font-light">
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-brand-gold transition-colors font-light">
                  Services
                </a>
              </li>
              <li>
                <a href="#fleet" onClick={(e) => handleLinkClick(e, '#fleet')} className="hover:text-brand-gold transition-colors font-light">
                  Fleet
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-brand-gold transition-colors font-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Fleet (2.5 Cols) */}
          <div className="lg:col-span-2.5 text-left">
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-5 font-inter">Our Fleet</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#fleet" onClick={(e) => handleLinkClick(e, '#fleet')} className="hover:text-brand-gold transition-colors font-light">
                  Swift Dzire
                </a>
              </li>
              <li>
                <a href="#fleet" onClick={(e) => handleLinkClick(e, '#fleet')} className="hover:text-brand-gold transition-colors font-light">
                  Toyota Etios
                </a>
              </li>
              <li>
                <a href="#fleet" onClick={(e) => handleLinkClick(e, '#fleet')} className="hover:text-brand-gold transition-colors font-light">
                  Maruti Ertiga
                </a>
              </li>
              <li>
                <a href="#fleet" onClick={(e) => handleLinkClick(e, '#fleet')} className="hover:text-brand-gold transition-colors font-light">
                  Toyota Innova
                </a>
              </li>
              <li>
                <a href="#fleet" onClick={(e) => handleLinkClick(e, '#fleet')} className="hover:text-brand-gold transition-colors font-light">
                  Toyota Innova Crysta
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Details (3 Cols) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-5 font-inter">Contact Us</h4>
            
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0 mt-1" />
                <div className="flex flex-col">
                  <a href="tel:9391585856" className="hover:text-brand-gold transition-colors font-medium">9391585856</a>
                  <a href="tel:9949585856" className="hover:text-brand-gold transition-colors font-medium mt-0.5">9949585856</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="mailto:fortunecabs19@gmail.com" className="hover:text-brand-gold transition-colors font-light">
                  fortunecabs19@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span className="font-light leading-relaxed">
                  Fortune Cabs Transportation Services, India.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Fortune Cabs. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <span className="hover:text-brand-gold cursor-pointer transition-colors font-light">Privacy Policy</span>
            <span className="hover:text-brand-gold cursor-pointer transition-colors font-light">Terms & Conditions</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
