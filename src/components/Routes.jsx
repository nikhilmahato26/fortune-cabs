import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ArrowRight } from 'lucide-react';
import { routesData } from '../data/routes';

export default function Routes({ onSelectRoute }) {
  const handleRouteEnquire = (routePath) => {
    // If the path contains placeholder, let's just trigger scroll, or if it has destinations we can set them
    onSelectRoute(routePath);
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-brand-border/40 overflow-hidden relative">
      {/* Decorative background element mimicking a route line */}
      <div className="absolute top-1/3 left-0 right-0 h-40 bg-gradient-to-r from-transparent via-brand-bg to-transparent -skew-y-6 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold block mb-2">
            Inter-City Travel
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
            Popular Routes
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4" />
          <p className="text-brand-muted mt-4 text-sm sm:text-base font-light">
            We provide structured transportation services across frequently requested routes. Below is our editable route configuration.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {routesData.map((route, index) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-brand-bg hover:bg-brand-dark p-6 sm:p-8 rounded-2xl border border-brand-border/40 hover:border-transparent hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between text-left"
            >
              <div>
                {/* Route Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white group-hover:bg-brand-gold text-brand-gold group-hover:text-brand-dark flex items-center justify-center transition-colors duration-500 shadow-sm">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase font-bold text-brand-gold font-inter tracking-wider">
                    {route.label}
                  </span>
                </div>

                {/* Route Path */}
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-brand-dark group-hover:text-white leading-snug mb-3 transition-colors duration-500">
                  {route.path}
                </h3>

                {/* Route Description */}
                <p className="text-xs sm:text-sm text-brand-muted group-hover:text-gray-300 font-light leading-relaxed mb-6 transition-colors duration-500">
                  {route.description}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleRouteEnquire(route.path)}
                className="w-full bg-white group-hover:bg-brand-gold border border-brand-border group-hover:border-transparent text-brand-dark font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all text-xs uppercase tracking-wider shadow-sm group-hover:shadow-md"
              >
                <span>Enquire For Route</span>
                <ArrowRight className="w-4 h-4 text-brand-gold group-hover:text-brand-dark" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
