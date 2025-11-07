import { motion } from 'framer-motion';
import { Camera, CameraOff } from 'lucide-react';

const UnpluggedCeremonySection = () => {
  return (
    <motion.section 
      className="py-16 px-4 relative overflow-hidden bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--card))]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="bg-white border-0 rounded-3xl p-8 md:p-12 hover-elegant transition-all duration-500"
          style={{ boxShadow: '0 20px 50px -10px rgba(216, 181, 181, 0.8)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Camera className="w-12 h-12 text-[hsl(var(--burgundy))]" />
              <CameraOff className="w-6 h-6 text-destructive absolute -top-1 -right-1" />
            </div>
          </div>
          
          <h2 
            className="font-display italic text-center mb-6 text-4xl md:text-5xl text-[hsl(var(--burgundy))]"
            data-testid="text-unplugged-title"
          >
            Unplugged Ceremony
          </h2>

          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <p 
              className="text-base md:text-lg text-foreground/80 leading-relaxed"
              data-testid="text-unplugged-message"
            >
              We kindly request that you turn off your phones and cameras during our ceremony. 
              We have a professional photographer capturing every precious moment. 
              Please be fully present with us as we exchange our vows.
            </p>
            
            <p 
              className="text-sm md:text-base text-foreground/60 italic"
              data-testid="text-unplugged-note"
            >
              After the ceremony, feel free to take all the photos you'd like!
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default UnpluggedCeremonySection;
