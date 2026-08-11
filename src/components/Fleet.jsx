import React from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fleetData } from '../data/fleet';
import FleetCard from './FleetCard';

export default function Fleet({ onEnquireVehicle }) {
  // Initialize Embla Carousel for mobile swiping
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trim',
    dragFree: true
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const handleEnquire = (vehicleName) => {
    onEnquireVehicle(vehicleName);
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section id="fleet" className="py-20 sm:py-28 bg-brand-bg border-b border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold block mb-2">
            The Fleet
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
            Choose Your Ride
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4" />
          <p className="text-brand-muted mt-4 text-sm sm:text-base font-light">
            Select from our range of well-maintained and comfortable sedans and multi-utility vehicles for your journey.
          </p>
        </div>

        {/* Desktop View: Grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {fleetData.map((vehicle) => (
            <FleetCard
              key={vehicle.id}
              vehicle={vehicle}
              onEnquire={handleEnquire}
            />
          ))}
        </motion.div>

        {/* Mobile View: Swipeable Embla Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 pl-4 pr-12">
              {fleetData.map((vehicle) => (
                <div 
                  key={vehicle.id} 
                  className="flex-[0_0_88%] min-w-0 sm:flex-[0_0_60%] pb-6"
                >
                  <FleetCard
                    vehicle={vehicle}
                    onEnquire={handleEnquire}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Slider Controls */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full bg-white border border-brand-border/60 text-brand-dark hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full bg-white border border-brand-border/60 text-brand-dark hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
