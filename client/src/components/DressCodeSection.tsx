import { motion } from 'framer-motion';

import principalSponsorsImage from "@assets/prin_1762432122490.png";
import guestsImage from "@assets/guests_1762431959312.png";

const DressCodeSection = () => {
  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          <h2 className="font-display italic text-[hsl(var(--burgundy))] mb-8 text-[48px]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
        </motion.div>

        {/* Principal Sponsors - Formal Attire */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
        >
          <div className="bg-white border-0 rounded-xl p-8 hover-elegant transition-all duration-500 relative" style={{ boxShadow: '0 20px 40px -10px rgba(216, 181, 181, 0.35), 0 10px 20px -5px rgba(216, 181, 181, 0.3)' }}>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 8.3 }}
              >
                <div className="mb-6 relative">
                  <h3 className="text-xl font-display font-medium text-[hsl(var(--burgundy))] mb-4">
                    FORMAL ATTIRE
                  </h3>
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                    <span className="text-sm font-normal text-[hsl(var(--burgundy))]">For Principal Sponsors</span>
                  </div>
                </div>
              </motion.div>
              <motion.img 
                src={principalSponsorsImage}
                alt="Formal attire guide for principal sponsors"
                className="w-full max-w-4xl mx-auto object-contain rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 8.5 }}
                data-testid="img-attire-guide-formal"
              />
              <div className="mt-6 grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                <p className="text-sm text-[hsl(var(--burgundy))]/80 text-center font-semibold">
                  Gentlemen: Suits and Ties or Long Sleeves with Closed Shoes
                </p>
                <p className="text-sm text-[hsl(var(--burgundy))]/80 text-center font-semibold">
                  Ladies: Full Length Dress or Gown with Heels of Choice
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Guests - Semi-Formal Attire */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.7 }}
        >
          <div className="bg-white border-0 rounded-xl p-8 hover-elegant transition-all duration-500 relative" style={{ boxShadow: '0 20px 40px -10px rgba(216, 181, 181, 0.35), 0 10px 20px -5px rgba(216, 181, 181, 0.3)' }}>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 8.9 }}
              >
                <div className="mb-6 relative">
                  <h3 className="text-xl font-display font-medium text-[hsl(var(--burgundy))] mb-4">
                    SEMI-FORMAL ATTIRE
                  </h3>
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                    <span className="text-sm font-normal text-[hsl(var(--burgundy))]">For Guests</span>
                  </div>
                </div>
              </motion.div>
              <motion.img 
                src={guestsImage}
                alt="Semi-formal attire guide for guests"
                className="w-full max-w-4xl mx-auto object-contain rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 9.1 }}
                data-testid="img-attire-guide-guests"
              />
              <div className="mt-6 grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                <p className="text-sm text-[hsl(var(--burgundy))]/80 text-center font-semibold">
                  Gentlemen: Smart casual or business casual attire
                </p>
                <p className="text-sm text-[hsl(var(--burgundy))]/80 text-center font-semibold">
                  Ladies: Full Length Dress or Gown with Heels of Choice
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Color Palette Recommendation */}
        <motion.div
          className="bg-white border-0 rounded-2xl p-8 max-w-5xl mx-auto mb-8"
          style={{ boxShadow: '0 20px 40px -10px rgba(216, 181, 181, 0.25), 0 10px 20px -5px rgba(216, 181, 181, 0.2)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <h3 className="text-2xl font-display text-[hsl(var(--burgundy))] text-center mb-6">Color Palette Recommendation</h3>
          <p className="text-sm text-[hsl(var(--burgundy))]/70 text-center mb-8">
            We recommend these elegant tones to complement our wedding theme
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Champagne', hex: '#F7E7CE' },
              { name: 'Taupe', hex: '#B38B6D' },
              { name: 'Beige', hex: '#E0D2C7' },
              { name: 'Blush Pink', hex: '#F4C2C2' },
              { name: 'Mauve', hex: '#D8B5D8' },
              { name: 'Deep Navy', hex: '#1C2951' },
              { name: 'Charcoal Gray', hex: '#36454F' },
              { name: 'Forest Green', hex: '#228B22' }
            ].map((color, index) => (
              <motion.div
                key={color.name}
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 9.2 + (index * 0.1) }}
                data-testid={`color-${color.name.toLowerCase().replace(' ', '-')}`}
              >
                <div 
                  className="w-20 h-20 rounded-full shadow-lg border-4 border-white/20 hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: color.hex }}
                  title={color.hex}
                />
                <div className="text-center">
                  <p className="text-sm font-semibold text-[hsl(var(--burgundy))]">{color.name}</p>
                  <p className="text-xs text-[hsl(var(--burgundy))]/60 font-mono">{color.hex}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Guidelines */}
        <motion.div
          className="bg-white border-0 rounded-2xl p-8 max-w-5xl mx-auto"
          style={{ boxShadow: '0 20px 40px -10px rgba(216, 181, 181, 0.25), 0 10px 20px -5px rgba(216, 181, 181, 0.2)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.7 }}
        >
          <h3 className="text-2xl font-display text-[hsl(var(--burgundy))] text-center mb-8">Additional Guidelines</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Gentlemen Details */}
            <div className="bg-card/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--gold))] mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base font-display font-semibold text-[hsl(var(--burgundy))] mb-2">
                    Gentlemen: Suits and Ties or Long Sleeves with Closed Shoes
                  </h4>
                  <p className="text-sm text-[hsl(var(--burgundy))]/70">
                    Please dress elegantly in formal attire with closed shoes.
                  </p>
                </div>
              </div>
            </div>

            {/* Ladies Details */}
            <div className="bg-card/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--gold))] mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base font-display font-semibold text-[hsl(var(--burgundy))] mb-2">
                    Ladies: Full Length Dress or Gown with Heels of Choice
                  </h4>
                  <p className="text-sm text-[hsl(var(--burgundy))]/70">
                    Please wear a full-length dress or gown with your choice of heels.
                  </p>
                </div>
              </div>
            </div>

            {/* Colors to avoid */}
            <div className="bg-card/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--gold))] mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base font-display font-semibold text-[hsl(var(--burgundy))] mb-2">
                    Colors to Avoid
                  </h4>
                  <p className="text-sm text-[hsl(var(--burgundy))]/70">
                    Please avoid wearing white, ivory, or black to this celebration.
                  </p>
                </div>
              </div>
            </div>

            {/* Respectful attire */}
            <div className="bg-card/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--gold))] mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base font-display font-semibold text-[hsl(var(--burgundy))] mb-2">
                    Respectful attire
                  </h4>
                  <p className="text-sm text-[hsl(var(--burgundy))]/70">
                    Kindly ensure your attire is respectful and appropriate for a religious ceremony.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default DressCodeSection;