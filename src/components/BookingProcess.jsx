import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car, FileCheck, CheckCircle } from 'lucide-react';

export default function BookingProcess() {
  const steps = [
    {
      step: "01",
      title: "Share Your Journey",
      description: "Tell us your pickup and destination location details.",
      icon: <MapPin className="w-6 h-6 text-brand-gold" />
    },
    {
      step: "02",
      title: "Choose Your Vehicle",
      description: "Select the vehicle that best suits your requirements.",
      icon: <Car className="w-6 h-6 text-brand-gold" />
    },
    {
      step: "03",
      title: "Confirm Your Booking",
      description: "Submit your travel details for verification and scheduling.",
      icon: <FileCheck className="w-6 h-6 text-brand-gold" />
    },
    {
      step: "04",
      title: "Start Your Journey",
      description: "Enjoy your comfortable ride with Fortune Cabs.",
      icon: <CheckCircle className="w-6 h-6 text-brand-gold" />
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-brand-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold block mb-2">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
            Booking Process
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4" />
          <p className="text-brand-muted mt-4 text-sm sm:text-base font-light">
            Reserving your cab with Fortune Cabs is straightforward, fast, and structured in four simple steps.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-[44px] left-[12%] right-[12%] h-0.5 bg-brand-border/60 z-0" />

          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center relative z-10 group"
            >
              {/* Step Icon Node */}
              <div className="w-[88px] h-[88px] rounded-full bg-brand-bg border-4 border-white shadow-md flex items-center justify-center transition-all duration-300 group-hover:border-brand-gold/40 group-hover:shadow-lg relative mb-6">
                {item.icon}
                {/* Step Index Circle Badge */}
                <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-brand-dark text-brand-gold text-[10px] font-bold flex items-center justify-center border border-brand-gold/30">
                  {item.step}
                </div>
              </div>

              {/* Step Text Details */}
              <div className="px-4">
                <h3 className="font-semibold text-brand-dark text-lg mb-2 font-inter">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
