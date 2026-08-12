import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact({ selectedVehicle }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      pickup: '',
      drop: '',
      date: '',
      vehicle: 'Swift Dzire',
      message: '',
    }
  });

  // Sync selected vehicle with dropdown
  useEffect(() => {
    if (selectedVehicle) {
      setValue('vehicle', selectedVehicle);
    }
  }, [selectedVehicle, setValue]);

  const onSubmit = (data) => {
    const text = `Hello Fortune Cabs, I would like to submit an enquiry:
- *Name*: ${data.name}
- *Phone*: ${data.phone}
- *Email*: ${data.email || 'N/A'}
- *Pickup Location*: ${data.pickup}
- *Drop Location*: ${data.drop}
- *Travel Date*: ${data.date}
- *Vehicle Preference*: ${data.vehicle}
- *Message*: ${data.message || 'N/A'}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919391585856?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    handleSubmit(onSubmit)();
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-brand-bg scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div>
              <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold block mb-2">
                Connect With Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
                Ready For Your Journey?
              </h2>
              <div className="w-16 h-1 bg-brand-gold mt-4" />
              <p className="text-brand-muted mt-4 text-sm sm:text-base font-light leading-relaxed">
                Have questions or special travel requests? Contact us through any of our channels or submit our premium enquiry form.
              </p>
            </div>

            <div className="space-y-6">
              {/* Contact Item: Phone */}
              <div className="flex gap-4 items-start">
                <div className="p-3.5 bg-white rounded-xl text-brand-gold shadow-sm border border-brand-border/40">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark text-sm uppercase tracking-wider mb-1">Phone Numbers</h4>
                  <a href="tel:9391585856" className="block text-brand-muted hover:text-brand-gold transition-colors font-medium">
                    9391585856
                  </a>
                  <a href="tel:9949585856" className="block text-brand-muted hover:text-brand-gold transition-colors font-medium">
                    9949585856
                  </a>
                </div>
              </div>

              {/* Contact Item: Email */}
              <div className="flex gap-4 items-start">
                <div className="p-3.5 bg-white rounded-xl text-brand-gold shadow-sm border border-brand-border/40">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark text-sm uppercase tracking-wider mb-1">Email Address</h4>
                  <a href="mailto:fortunecabs19@gmail.com" className="text-brand-muted hover:text-brand-gold transition-colors font-medium">
                    fortunecabs19@gmail.com
                  </a>
                </div>
              </div>


              {/* Contact Item: Business Info */}
              <div className="flex gap-4 items-start">
                <div className="p-3.5 bg-white rounded-xl text-brand-gold shadow-sm border border-brand-border/40">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark text-sm uppercase tracking-wider mb-1">Office Address</h4>
                  <p className="text-brand-muted font-light text-sm leading-relaxed">
                    8-3-678, Emerald block, Shop no-4,<br />
                    Sri Sai Ram Manor, Pragathi Nagar,<br />
                    Yousufguda, Hyderabad-500045. TG
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-brand-border/40">
            <h3 className="font-playfair text-2xl font-bold text-brand-dark mb-2 text-left">Send an Enquiry</h3>
            <p className="text-xs text-brand-muted uppercase tracking-widest font-semibold mb-8 text-left">We'll respond promptly with quotes</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full bg-brand-bg border ${errors.name ? 'border-red-500' : 'border-brand-border'} focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all`}
                  />
                  {errors.name && <span className="text-[11px] text-red-500 mt-1 block">{errors.name.message}</span>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="10-Digit Mobile"
                    {...register('phone', {
                      required: 'Phone is required',
                      pattern: { value: /^[6-9]\d{9}$/, message: 'Enter valid 10-digit number' }
                    })}
                    className={`w-full bg-brand-bg border ${errors.phone ? 'border-red-500' : 'border-brand-border'} focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all`}
                  />
                  {errors.phone && <span className="text-[11px] text-red-500 mt-1 block">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    {...register('email', {
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' }
                    })}
                    className={`w-full bg-brand-bg border ${errors.email ? 'border-red-500' : 'border-brand-border'} focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all`}
                  />
                  {errors.email && <span className="text-[11px] text-red-500 mt-1 block">{errors.email.message}</span>}
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">Travel Date</label>
                  <input
                    type="date"
                    {...register('date', { required: 'Travel date is required' })}
                    className={`w-full bg-brand-bg border ${errors.date ? 'border-red-500' : 'border-brand-border'} focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all`}
                  />
                  {errors.date && <span className="text-[11px] text-red-500 mt-1 block">{errors.date.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Pickup */}
                <div>
                  <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">Pickup Location</label>
                  <input
                    type="text"
                    placeholder="Pickup Address"
                    {...register('pickup', { required: 'Pickup location is required' })}
                    className={`w-full bg-brand-bg border ${errors.pickup ? 'border-red-500' : 'border-brand-border'} focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all`}
                  />
                  {errors.pickup && <span className="text-[11px] text-red-500 mt-1 block">{errors.pickup.message}</span>}
                </div>

                {/* Drop */}
                <div>
                  <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">Drop Location</label>
                  <input
                    type="text"
                    placeholder="Destination Address"
                    {...register('drop', { required: 'Drop location is required' })}
                    className={`w-full bg-brand-bg border ${errors.drop ? 'border-red-500' : 'border-brand-border'} focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all`}
                  />
                  {errors.drop && <span className="text-[11px] text-red-500 mt-1 block">{errors.drop.message}</span>}
                </div>
              </div>

              {/* Vehicle */}
              <div>
                <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">Vehicle Preference</label>
                <select
                  {...register('vehicle', { required: 'Vehicle preference is required' })}
                  className="w-full bg-brand-bg border border-brand-border focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all"
                >
                  <option value="Swift Dzire">Swift Dzire (Sedan)</option>
                  <option value="Toyota Etios">Toyota Etios (Sedan)</option>
                  <option value="Maruti Ertiga">Maruti Ertiga (MUV)</option>
                  <option value="Toyota Innova">Toyota Innova (MUV)</option>
                  <option value="Toyota Innova Crysta">Toyota Innova Crysta (Premium MUV)</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">Message / Requirements</label>
                <textarea
                  rows="3"
                  placeholder="e.g. luggage requirements, multi-stop details..."
                  {...register('message')}
                  className="w-full bg-brand-bg border border-brand-border focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="submit"
                  className="bg-brand-dark hover:bg-black text-white hover:text-brand-gold font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg text-xs uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </button>
                
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg text-xs uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Submit via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
