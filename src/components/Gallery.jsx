import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { galleryData } from '../data/gallery';

export default function Gallery() {
  const [activeImageIdx, setActiveImageIdx] = useState(null);

  const openLightbox = (idx) => {
    setActiveImageIdx(idx);
  };

  const closeLightbox = () => {
    setActiveImageIdx(null);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 sm:py-28 bg-brand-bg border-b border-brand-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold block mb-2">
            Visual Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
            Our Gallery
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4" />
          <p className="text-brand-muted mt-4 text-sm sm:text-base font-light">
            Browse through highlights of our fleet, scenic highway routes, urban transit environments, and professional travel services.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6 auto-rows-[220px]">
          {galleryData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              onClick={() => openLightbox(index)}
              className={`${item.cols} ${item.rows} relative overflow-hidden rounded-2xl border border-brand-border/40 group cursor-pointer shadow-md`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <span className="text-brand-gold text-[10px] uppercase font-bold tracking-widest block mb-1">
                  {item.category}
                </span>
                <h4 className="font-playfair text-lg font-bold text-white tracking-wide">
                  {item.title}
                </h4>
                <div className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[1000]"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Slider Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-6 p-4 bg-white/5 hover:bg-white/15 text-white rounded-full transition-colors z-[1000] hidden sm:block"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-6 p-4 bg-white/5 hover:bg-white/15 text-white rounded-full transition-colors z-[1000] hidden sm:block"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Viewer Container */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] flex flex-col items-center"
            >
              <img
                src={galleryData[activeImageIdx].image}
                alt={galleryData[activeImageIdx].title}
                className="max-w-full max-h-[70vh] rounded-lg object-contain shadow-2xl"
              />
              
              {/* Caption Text Below Lightbox Image */}
              <div className="text-center mt-4">
                <span className="text-brand-gold text-xs uppercase font-bold tracking-widest block mb-1">
                  {galleryData[activeImageIdx].category}
                </span>
                <h4 className="font-playfair text-xl font-bold text-white">
                  {galleryData[activeImageIdx].title}
                </h4>
              </div>
            </motion.div>

            {/* Mobile swipe info/indicators */}
            <div className="absolute bottom-6 text-gray-400 text-xs sm:hidden">
              Swipe Left/Right to browse
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
