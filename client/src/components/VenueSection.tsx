"use client";
import { MapPin, ExternalLink, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

import ceremonyImage from "@assets/ceremony_1762419093420.jpg";
import receptionImage from "@assets/reception_1762419093432.jpg";

const VenueSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const venues = [
    {
      title: 'Wedding Ceremony',
      name: 'CALERUEGA',
      address: 'Caleruega, Nasugbu, Batangas',
      image: ceremonyImage,
      mapUrl: 'https://maps.app.goo.gl/ruE7cH3gRXfXUsMk9',
      mapEmbed: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Caleruega+Nasugbu+Batangas&zoom=15',
      description: 'Join us at the beautiful Caleruega for our wedding ceremony. This serene venue will witness our vows of eternal love as we begin our journey together.',
      details: 'The ceremony begins promptly at 3:00 PM. Please arrive early to be seated.',
      startTime: '3:00 PM'
    },
    {
      title: 'Wedding Reception',
      name: 'VILLA IBARRA',
      address: 'Villa Ibarra, Tagaytay',
      image: receptionImage,
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Villa+Ibarra+Tagaytay',
      mapEmbed: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Villa+Ibarra+Tagaytay&zoom=15',
      description: 'Continue the celebration with us at Villa Ibarra in Tagaytay. This elegant venue will host our reception where we will celebrate with dinner, dancing, and joy.',
      details: 'The reception will follow immediately after the ceremony. Dinner and dancing to follow.',
      startTime: '5:00 PM'
    }
  ];

  return (
    <motion.section 
      id="venue" 
      className="section-pastel-blue py-12 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 6.5 } : { duration: 0 }}
    >
      {/* Section Title */}
      <motion.div 
        className="text-center mb-16"
        initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={animationsEnabled ? { duration: 0.8, delay: 6.8 } : { duration: 0 }}
      >
        <h1 className="text-5xl md:text-6xl font-display italic text-[hsl(var(--burgundy))] mb-2" data-testid="text-venue-section-title">
          Venue
        </h1>
      </motion.div>

      {/* Venues */}
      <div className="space-y-20 max-w-6xl mx-auto">
        {venues.map((venue, index) => (
          <motion.div 
            key={index}
            className="bg-white border-0 rounded-3xl overflow-hidden"
            style={{ boxShadow: '0 25px 60px -15px rgba(216, 181, 181, 0.3), 0 15px 30px -10px rgba(216, 181, 181, 0.25)' }}
            initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={animationsEnabled ? { duration: 0.8, delay: 7.2 + (index * 0.3) } : { duration: 0 }}
          >
            {/* Header */}
            <div className="text-center py-12 px-6">
              <h2 className="text-3xl md:text-4xl font-display italic text-[hsl(var(--burgundy))] mb-4" data-testid={`text-${venue.title.toLowerCase()}-title`}>
                {venue.title}
              </h2>
              <h3 className="text-xl md:text-2xl font-display italic text-[hsl(var(--burgundy))] mb-3" data-testid={`text-${venue.title.toLowerCase()}-name`}>
                {venue.name}
              </h3>
              <div className="flex items-center justify-center gap-2 text-[hsl(var(--burgundy))]/70">
                <MapPin className="w-4 h-4 text-[hsl(var(--gold))]" />
                <p className="text-sm" data-testid={`text-${venue.title.toLowerCase()}-address`}>
                  {venue.address}
                </p>
              </div>
            </div>

            {/* Venue Image */}
            <div className="px-8 pb-8">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  data-testid={`img-${venue.title.toLowerCase()}-venue`}
                />
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 px-8 pb-8">
              {/* About Section */}
              <div className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/60 border-l-2 border-[hsl(var(--gold))] pl-3">
                  About the Venue
                </h4>
                <p className="text-[hsl(var(--burgundy))]/80 leading-relaxed pl-3" data-testid={`text-${venue.title.toLowerCase()}-description`}>
                  {venue.description}
                </p>
                <p className="text-sm text-[hsl(var(--burgundy))]/70 italic pl-3" data-testid={`text-${venue.title.toLowerCase()}-details`}>
                  {venue.details}
                </p>
              </div>

              {/* Map Section */}
              <div className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/60 border-l-2 border-[hsl(var(--gold))] pl-3">
                  Location Map
                </h4>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src={venue.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    data-testid={`map-${venue.title.toLowerCase()}-embed`}
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-8 pb-8 pt-4 border-t border-primary/20 mx-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--gold))]/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[hsl(var(--gold))]" />
                </div>
                <div>
                  <p className="text-xs text-[hsl(var(--burgundy))]/60 uppercase tracking-wide">Start Time</p>
                  <p className="text-lg font-semibold text-[hsl(var(--burgundy))]" data-testid={`text-${venue.title.toLowerCase()}-start-time`}>
                    {venue.startTime}
                  </p>
                </div>
              </div>

              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[hsl(var(--gold))] border-2 border-[hsl(var(--gold))] rounded-lg hover:bg-[hsl(var(--gold))] hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                data-testid={`button-${venue.title.toLowerCase()}-location`}
              >
                Get Directions
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default VenueSection;
