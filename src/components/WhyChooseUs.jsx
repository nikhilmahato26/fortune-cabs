import React from 'react';
import { motion } from 'framer-motion';
import { 
  Car, 
  Smile, 
  Calendar, 
  Sliders, 
  UserCheck, 
  MessageSquare, 
  Briefcase, 
  HeartHandshake 
} from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: "Multiple Vehicle Options",
      description: "Choose from a selection of sedans and multi-utility vehicles (MUVs) to match your travel needs.",
      icon: <Car className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Comfortable Travel",
      description: "Vehicles maintained to high standards of cleanliness and running condition for relaxed trips.",
      icon: <Smile className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Easy Booking",
      description: "Simplified procedures to get quotes and reserve vehicles quickly without tedious workflows.",
      icon: <Calendar className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Flexible Vehicle Selection",
      description: "Pick appropriate options ranging from compact sedans up to premium spacious multi-utility options.",
      icon: <Sliders className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Personalized Assistance",
      description: "Individual support to arrange pickups, schedule routes, and coordinate itinerary details.",
      icon: <UserCheck className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Convenient Enquiry",
      description: "Multiple communication options including direct calls, website submissions, and WhatsApp.",
      icon: <MessageSquare className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Professional Presentation",
      description: "Focus on business-grade vehicle maintenance and clean aesthetic setups.",
      icon: <Briefcase className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Customer-Focused Service",
      description: "Designed from the ground up to place passenger peace-of-mind and comfort at the forefront.",
      icon: <HeartHandshake className="w-6 h-6 text-brand-gold" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-20 sm:py-28 bg-brand-bg border-b border-brand-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold block mb-2">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
            Committed to Quality
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4" />
          <p className="text-brand-muted mt-4 text-sm sm:text-base font-light">
            We focus entirely on making your transportation safe, comfortable, and professionally arranged.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl border border-brand-border/40 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-bg flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-brand-dark text-base sm:text-lg mb-2 font-inter">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
