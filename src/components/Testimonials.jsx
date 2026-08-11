import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trim',
    loop: true
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-brand-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
          <div className="text-left max-w-2xl">
            <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold block mb-2">
              Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
              Customer Experiences
            </h2>
            <div className="w-16 h-1 bg-brand-gold mt-4" />
            <p className="text-brand-muted mt-4 text-sm sm:text-base font-light">
              Here are testimonials from our passengers. This section is structured for actual client reviews to be added easily later.
            </p>
          </div>
          
          {/* Slider controls */}
          <div className="flex gap-3 mt-6 sm:mt-0">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full border border-brand-border/60 text-brand-dark hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full border border-brand-border/60 text-brand-dark hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Carousel viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 pl-4 pr-12">
            {testimonialsData.map((item) => (
              <div 
                key={item.id} 
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pb-6"
              >
                <div className="bg-brand-bg p-8 rounded-2xl border border-brand-border/40 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between text-left relative">
                  
                  {/* Quote icon watermark */}
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-brand-gold/10" />

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed mb-6 italic">
                    "{item.review}"
                  </p>

                  {/* Customer and Route */}
                  <div className="mt-auto pt-4 border-t border-brand-border/60 flex flex-col">
                    <span className="font-semibold text-brand-dark text-base font-inter">
                      {item.customerName}
                    </span>
                    <span className="text-xs text-brand-gold font-medium mt-0.5">
                      {item.route}
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
