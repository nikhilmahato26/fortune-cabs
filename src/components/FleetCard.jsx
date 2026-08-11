import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, CalendarCheck } from 'lucide-react';

export default function FleetCard({ vehicle, onEnquire }) {
  const whatsappUrl = `https://wa.me/919391585856?text=${encodeURIComponent(vehicle.enquiryText)}`;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-brand-border/40 hover:border-brand-gold/30 transition-colors duration-300 flex flex-col h-full group"
    >
      {/* Vehicle Image Container */}
      <div className="relative overflow-hidden aspect-[16/10] bg-brand-bg">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-brand-dark/95 backdrop-blur-sm text-brand-gold text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded border border-brand-gold/30">
          {vehicle.category}
        </div>
      </div>

      {/* Vehicle Info */}
      <div className="p-6 flex flex-col flex-grow text-left">
        <span className="text-xs text-brand-gold font-semibold uppercase tracking-wider block mb-1">
          {vehicle.tagline}
        </span>
        <h3 className="font-playfair text-xl sm:text-2xl font-bold text-brand-dark mb-3">
          {vehicle.name}
        </h3>
        <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed mb-6 flex-grow">
          {vehicle.description}
        </p>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
          <button
            onClick={() => onEnquire(vehicle.name)}
            className="w-full bg-brand-dark hover:bg-black text-white hover:text-brand-gold font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all text-xs uppercase tracking-wider shadow"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Enquire Now</span>
          </button>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all text-xs uppercase tracking-wider shadow"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
