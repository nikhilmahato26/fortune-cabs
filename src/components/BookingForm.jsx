import React from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, MapPin, User, Phone, Car, ArrowRight, MessageSquare } from 'lucide-react';

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      pickup: '',
      drop: '',
      date: '',
      tripType: 'One Way',
      vehicle: 'Swift Dzire',
    }
  });

  const onSubmit = (data) => {
    // Generate WhatsApp text
    const text = `Hello Fortune Cabs, I would like to book a ride / get a quote:
- *Name*: ${data.name}
- *Phone*: ${data.phone}
- *Pickup Location*: ${data.pickup}
- *Drop Location*: ${data.drop}
- *Travel Date*: ${data.date}
- *Trip Type*: ${data.tripType}
- *Vehicle Preference*: ${data.vehicle}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919391585856?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const onWhatsAppSubmit = (e) => {
    // We can also allow direct WhatsApp booking by fetching the form values and validating
    e.preventDefault();
    handleSubmit(onSubmit)();
  };

  return (
    <div className="glass-panel text-brand-dark p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-xl border border-white/20">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-brand-dark font-playfair tracking-wide">Book Your Ride</h3>
        <p className="text-xs text-brand-muted mt-1 uppercase tracking-widest font-semibold">Get a Quote Instantly</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
        {/* Name and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-brand-gold" /> Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              {...register('name', { 
                required: 'Name is required',
                minLength: { value: 2, message: 'Minimum 2 characters' }
              })}
              className={`w-full bg-white/60 border ${errors.name ? 'border-red-500' : 'border-brand-border'} focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all`}
            />
            {errors.name && <span className="text-[11px] text-red-500 mt-1 block">{errors.name.message}</span>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-brand-gold" /> Phone Number
            </label>
            <input
              type="tel"
              placeholder="10-Digit Mobile"
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: 'Enter a valid 10-digit number'
                }
              })}
              className={`w-full bg-white/60 border ${errors.phone ? 'border-red-500' : 'border-brand-border'} focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all`}
            />
            {errors.phone && <span className="text-[11px] text-red-500 mt-1 block">{errors.phone.message}</span>}
          </div>
        </div>

        {/* Pickup and Drop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" /> Pickup Location
            </label>
            <input
              type="text"
              placeholder="e.g. Airport, Hotel, City Center"
              {...register('pickup', { required: 'Pickup location is required' })}
              className={`w-full bg-white/60 border ${errors.pickup ? 'border-red-500' : 'border-brand-border'} focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all`}
            />
            {errors.pickup && <span className="text-[11px] text-red-500 mt-1 block">{errors.pickup.message}</span>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" /> Drop Location
            </label>
            <input
              type="text"
              placeholder="Destination Address"
              {...register('drop', { required: 'Drop location is required' })}
              className={`w-full bg-white/60 border ${errors.drop ? 'border-red-500' : 'border-brand-border'} focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all`}
            />
            {errors.drop && <span className="text-[11px] text-red-500 mt-1 block">{errors.drop.message}</span>}
          </div>
        </div>

        {/* Date and Trip Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-brand-gold" /> Travel Date
            </label>
            <input
              type="date"
              {...register('date', { required: 'Travel date is required' })}
              className={`w-full bg-white/60 border ${errors.date ? 'border-red-500' : 'border-brand-border'} focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all`}
            />
            {errors.date && <span className="text-[11px] text-red-500 mt-1 block">{errors.date.message}</span>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">
              Trip Type
            </label>
            <select
              {...register('tripType', { required: 'Trip type is required' })}
              className="w-full bg-white/60 border border-brand-border focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all"
            >
              <option value="One Way">One Way</option>
              <option value="Round Trip">Round Trip</option>
              <option value="Local">Local</option>
              <option value="Outstation">Outstation</option>
              <option value="Airport Transfer">Airport Transfer</option>
            </select>
          </div>
        </div>

        {/* Vehicle Preference */}
        <div>
          <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <Car className="w-3.5 h-3.5 text-brand-gold" /> Vehicle Preference
          </label>
          <select
            {...register('vehicle', { required: 'Vehicle preference is required' })}
            className="w-full bg-white/60 border border-brand-border focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all"
          >
            <option value="Swift Dzire">Swift Dzire (Sedan)</option>
            <option value="Toyota Etios">Toyota Etios (Sedan)</option>
            <option value="Maruti Ertiga">Maruti Ertiga (MUV)</option>
            <option value="Toyota Innova">Toyota Innova (MUV)</option>
            <option value="Toyota Innova Crysta">Toyota Innova Crysta (Premium MUV)</option>
          </select>
        </div>

        {/* Submit Buttons */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="submit"
            className="w-full bg-brand-dark hover:bg-black text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg uppercase text-xs tracking-wider"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4 text-brand-gold" />
          </button>
          
          <button
            type="button"
            onClick={onWhatsAppSubmit}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg uppercase text-xs tracking-wider"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Book on WhatsApp</span>
          </button>
        </div>
      </form>
    </div>
  );
}
