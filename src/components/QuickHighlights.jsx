import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck2, Car, Shield, Compass } from 'lucide-react';

export default function QuickHighlights() {
  const highlights = [
    {
      id: 1,
      title: "Easy Booking",
      description: "Quick enquiry and booking assistance.",
      icon: <CalendarCheck2 className="w-8 h-8 text-brand-gold" />
    },
    {
      id: 2,
      title: "Comfortable Cars",
      description: "Choose from a range of comfortable vehicles.",
      icon: <Car className="w-8 h-8 text-brand-gold" />
    },
    {
      id: 3,
      title: "Professional Service",
      description: "Travel with a reliable and professional experience.",
      icon: <Shield className="w-8 h-8 text-brand-gold" />
    },
    {
      id: 4,
      title: "Flexible Travel",
      description: "Suitable for local, outstation and other travel requirements.",
      icon: <Compass className="w-8 h-8 text-brand-gold" />
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex gap-4 items-start p-4 rounded-xl hover:bg-brand-bg transition-colors duration-300 group"
            >
              <div className="p-3 bg-brand-bg rounded-lg group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                {item.icon}
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-brand-dark text-base tracking-wide uppercase font-inter mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-brand-muted font-light leading-relaxed">
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
