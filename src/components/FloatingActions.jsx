import React, { useState, useEffect } from 'react';
import { motion as fm, AnimatePresence as Ap } from 'framer-motion';
import { Phone, ArrowUp, MessageSquare, CalendarDays } from 'lucide-react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBooking = (e) => {
    e.preventDefault();
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/919391585856?text=${encodeURIComponent("Hello Fortune Cabs, I would like to enquire about a cab booking.")}`;

  return (
    <>
      {/* Desktop Floating Actions Stack (Bottom Right) */}
      <div className="hidden md:flex flex-col gap-3 fixed bottom-6 right-6 z-40">
        <Ap>
          {showScrollTop && (
            <fm.button
              key="scroll-top"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="p-3 bg-white border border-brand-border text-brand-dark hover:border-brand-gold hover:text-brand-gold rounded-full shadow-lg transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </fm.button>
          )}
        </Ap>

        {/* Desktop Call Shortcut */}
        <a
          href="tel:9391585856"
          className="p-3 bg-brand-dark border border-white/10 hover:border-brand-gold text-brand-gold rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-105"
          aria-label="Call Fortune Cabs"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Desktop WhatsApp Shortcut */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-105"
          aria-label="WhatsApp Fortune Cabs"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-border/60 shadow-2xl px-4 py-3 flex gap-3">
        {/* Call CTA */}
        <a
          href="tel:9391585856"
          className="flex-1 bg-brand-dark text-white rounded-xl py-3 px-2 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider shadow"
        >
          <Phone className="w-4 h-4 text-brand-gold" />
          <span>Call</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 text-white rounded-xl py-3 px-2 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider shadow"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* Book CTA */}
        <a
          href="#booking"
          onClick={scrollToBooking}
          className="flex-1 bg-brand-gold text-brand-dark rounded-xl py-3 px-2 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider shadow"
        >
          <CalendarDays className="w-4 h-4" />
          <span>Book Now</span>
        </a>
      </div>
    </>
  );
}
