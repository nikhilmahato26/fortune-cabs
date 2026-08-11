import React, { useState, useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import CSS
import 'lenis/dist/lenis.css';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickHighlights from './components/QuickHighlights';
import About from './components/About';
import Services from './components/Services';
import Fleet from './components/Fleet';
import FeaturedFleet from './components/FeaturedFleet';
import BookingProcess from './components/BookingProcess';
import WhyChooseUs from './components/WhyChooseUs';
import Routes from './components/Routes';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState('Swift Dzire');

  const handleEnquireVehicle = (vehicleName) => {
    setSelectedVehicle(vehicleName);
  };

  useEffect(() => {
    // Connect GSAP ScrollTrigger to update on Lenis scroll events
    // A clean transition animation on sections or containers marked with '.reveal-section'
    const revealElements = gsap.utils.toArray('.reveal-section');
    revealElements.forEach((element) => {
      gsap.fromTo(element, 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

    // Clean up triggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="relative min-h-screen bg-brand-bg text-brand-dark flex flex-col justify-between selection:bg-brand-gold/30 selection:text-brand-dark">
        {/* Navigation Bar */}
        <Navbar />

        {/* Cinematic Hero Block */}
        <Hero />

        {/* Content sections grouped for layout flow */}
        <main className="flex-grow">
          {/* QuickHighlights Row */}
          <QuickHighlights />

          {/* About Section */}
          <div className="reveal-section">
            <About />
          </div>

          {/* Services Bento Grid Section */}
          <div className="reveal-section">
            <Services />
          </div>

          {/* Fleet Catalog Section */}
          <div className="reveal-section">
            <Fleet onEnquireVehicle={handleEnquireVehicle} />
          </div>

          {/* Featured Innova Crysta Banner */}
          <div className="reveal-section">
            <FeaturedFleet onEnquireVehicle={handleEnquireVehicle} />
          </div>

          {/* Booking Timeline Steps */}
          <div className="reveal-section">
            <BookingProcess />
          </div>

          {/* Why Choose Us Cards Grid */}
          <div className="reveal-section">
            <WhyChooseUs />
          </div>

          {/* Travel Routes / Accords Section */}
          <div className="reveal-section">
            <Routes onSelectRoute={handleEnquireVehicle} />
          </div>

          {/* Visual Grid Gallery */}
          <div className="reveal-section">
            <Gallery />
          </div>

          {/* Customer Reviews Embla Carousel */}
          <div className="reveal-section">
            <Testimonials />
          </div>

          {/* Contact Details & Custom Form */}
          <Contact selectedVehicle={selectedVehicle} />
        </main>

        {/* Sophisticated Dark Footer */}
        <Footer />

        {/* Floating Actions Shortcuts (WhatsApp, Calls, ScrollToTop) */}
        <FloatingActions />
      </div>
    </ReactLenis>
  );
}
