import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import BookingForm from './BookingForm';

export default function Hero() {
  const scrollToBooking = (e) => {
    e.preventDefault();
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden bg-brand-dark">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent lg:bg-brand-dark/75" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-7 text-left space-y-6 lg:pr-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded text-brand-gold text-xs uppercase tracking-widest font-semibold mb-3">
              Premium Corporate & Travel Transportation
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-playfair">
              Your Journey.<br />
              <span className="text-brand-gold">Our Priority.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl text-gray-300 max-w-xl font-light"
          >
            Comfortable, Reliable & Professional Cab Services
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base text-gray-400 max-w-lg"
          >
            Travel comfortably with Fortune Cabs and choose from our range of trusted vehicles.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#booking"
              onClick={scrollToBooking}
              className="bg-brand-gold hover:bg-brand-amber text-brand-dark font-semibold px-7 py-3.5 rounded shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 uppercase text-xs tracking-wider"
            >
              <span>Book a Cab</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:9391585856"
              className="bg-transparent border border-white/30 hover:border-white text-white hover:bg-white/10 font-semibold px-6 py-3.5 rounded transition-all duration-300 flex items-center gap-2 uppercase text-xs tracking-wider"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/919391585856?text=Hello%20Fortune%20Cabs,%20I%20would%20like%20to%20enquire%20about%20a%20cab%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-semibold px-6 py-3.5 rounded transition-all duration-300 flex items-center gap-2 uppercase text-xs tracking-wider"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side Form */}
        <motion.div
          id="booking"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center w-full lg:my-8"
        >
          <BookingForm />
        </motion.div>
      </div>

      {/* Decorative Bottom Curve/Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />
    </section>
  );
}
