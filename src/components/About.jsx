import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  const focusPoints = [
    "Comfortable transportation options",
    "Easy booking & enquiry processes",
    "Multiple reliable vehicle options",
    "Customer-focused & dedicated service",
    "Convenient local & outstation travel arrangements"
  ];

  const handleScrollToBooking = (e) => {
    e.preventDefault();
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-brand-bg overflow-hidden border-b border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Floating Accent */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80"
                alt="Professional travel experience with Fortune Cabs"
                className="w-full h-[350px] sm:h-[480px] object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
            </div>

            {/* Premium Gold Accent Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-brand-dark text-white p-5 rounded-xl shadow-xl max-w-[240px] border border-white/5">
              <p className="font-playfair text-brand-gold text-2xl font-bold">Reliable Services</p>
              <p className="text-xs text-gray-300 font-light mt-1">Comfortable and professional vehicles tailored for your journey.</p>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 text-left space-y-6"
          >
            <div>
              <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold block mb-2">
                About Fortune Cabs
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
                Travel With Confidence
              </h2>
            </div>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-light">
              Fortune Cabs is a professional cab service offering a selection of reliable vehicles for comfortable travel. Whether it's a corporate event, city transit, family outing, or airport transfer, our dedication remains focused on delivering safety, comfort, and dependability.
            </p>

            <div className="space-y-3 pt-2">
              {focusPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-brand-dark font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#booking"
                onClick={handleScrollToBooking}
                className="inline-flex items-center gap-2 bg-brand-dark hover:bg-black text-white hover:text-brand-gold font-semibold px-8 py-3.5 rounded shadow-lg hover:shadow-xl transition-all duration-300 uppercase text-xs tracking-wider"
              >
                <span>Book Your Ride</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
