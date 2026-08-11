import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

export default function FeaturedFleet({ onEnquireVehicle }) {
  const innovaCrystaInfo = {
    name: "Toyota Innova Crysta",
    tagline: "Premium Fleet Choice",
    description: "The Toyota Innova Crysta stands as our premier vehicle option, designed to offer refined comfort and a spacious cabin for longer journeys. Known for its stable ride quality, premium cabin refinement, and professional presence, it is the ideal choice for business travelers, executive airport transfers, and families seeking comfortable, uninterrupted travel.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    enquiryText: "Hello Fortune Cabs, I would like to enquire about Toyota Innova Crysta booking."
  };

  const handleEnquire = () => {
    onEnquireVehicle(innovaCrystaInfo.name);
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/919391585856?text=${encodeURIComponent(innovaCrystaInfo.enquiryText)}`;

  return (
    <section className="py-20 sm:py-28 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel-dark rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Details Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 text-left space-y-6"
            >
              <div className="flex items-center gap-2 text-brand-gold">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-bold font-inter">Featured Vehicle</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-playfair tracking-wide text-white leading-tight">
                {innovaCrystaInfo.name}
              </h2>
              
              <p className="text-brand-gold text-sm uppercase tracking-widest font-semibold font-inter">
                {innovaCrystaInfo.tagline}
              </p>
              
              <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed">
                {innovaCrystaInfo.description}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={handleEnquire}
                  className="bg-brand-gold hover:bg-brand-amber text-brand-dark font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 uppercase text-xs tracking-wider"
                >
                  <span>Enquire About Innova Crysta</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 uppercase text-xs tracking-wider"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Enquire</span>
                </a>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                <img
                  src={innovaCrystaInfo.image}
                  alt={innovaCrystaInfo.name}
                  className="w-full h-[250px] sm:h-[350px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent pointer-events-none" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
