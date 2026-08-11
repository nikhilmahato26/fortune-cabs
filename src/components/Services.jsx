import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { servicesData } from '../data/services';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
  };

  // Grid styling for bento layout
  const getBentoStyles = (idx) => {
    switch (idx) {
      case 0: // Cab Booking
        return "col-span-12 md:col-span-7 h-[260px]";
      case 1: // One Way
        return "col-span-12 md:col-span-5 h-[260px]";
      case 2: // Round Trip
        return "col-span-12 md:col-span-4 h-[240px]";
      case 3: // Local Travel
        return "col-span-12 md:col-span-4 h-[240px]";
      case 4: // Outstation Travel
        return "col-span-12 md:col-span-4 h-[240px]";
      case 5: // Airport Transfer
        return "col-span-12 h-[260px]";
      default:
        return "col-span-12 md:col-span-4 h-[240px]";
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-b border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold block mb-2">
            Tailored Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
            Premium Transportation Services
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4" />
          <p className="text-brand-muted mt-4 text-sm sm:text-base font-light">
            Whether for quick city transfers, executive travel, or inter-city journeys, select from our tailored services.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-12 gap-6"
        >
          {servicesData.map((service, index) => {
            const Icon = Icons[service.iconName] || Icons.Car;
            const isAirport = service.id === 'airport-transfer';

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`${getBentoStyles(index)} group relative overflow-hidden rounded-2xl bg-brand-bg hover:bg-brand-dark p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 border border-brand-border/40 hover:border-transparent hover:shadow-2xl`}
              >
                {/* Background overlay graphic for the Airport transfer (spans full width) */}
                {isAirport && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500" 
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80')` }}
                  />
                )}

                {/* Top/Icon element */}
                <div className="flex items-center justify-between z-10">
                  <div className="p-3 bg-white group-hover:bg-brand-gold rounded-xl transition-colors duration-500 text-brand-gold group-hover:text-brand-dark shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-bold text-brand-border/40 group-hover:text-brand-gold/10 font-playfair transition-colors duration-500">
                    0{index + 1}
                  </span>
                </div>

                {/* Bottom/Text element */}
                <div className="text-left mt-4 z-10">
                  <h3 className="text-lg font-bold text-brand-dark group-hover:text-white transition-colors duration-500 font-inter mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted group-hover:text-gray-300 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Accent line overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
