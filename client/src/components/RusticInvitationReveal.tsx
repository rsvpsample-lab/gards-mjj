import { motion } from 'framer-motion';
import prenupPhoto from '@assets/prenup1_1762420085164.jpg';
import groomPhoto from '@assets/prenup10_1762420085170.jpg';
import couplePhoto from '@assets/prenup3_1762420085166.jpg';
import bridePhoto from '@assets/prenup11_1762420085170.jpg';

interface RusticInvitationRevealProps {
  animationsEnabled: boolean;
}

const RusticInvitationReveal = ({ animationsEnabled }: RusticInvitationRevealProps) => {
  const scrollToRSVP = () => {
    const rsvpSection = document.getElementById('rsvp');
    if (rsvpSection) {
      const navHeight = 64;
      const elementTop = rsvpSection.offsetTop - navHeight;
      window.scrollTo({
        top: Math.max(0, elementTop),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-16 px-4 space-y-12">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"/>
      </div>
      {/* Main invitation card */}
      <motion.div
        className="relative z-10 max-w-5xl w-full bg-gradient-to-br from-amber-50/90 via-white to-amber-50/90 rounded-3xl shadow-2xl overflow-hidden border-4 border-primary/20"
        initial={animationsEnabled ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={animationsEnabled ? { duration: 1, delay: 0.5 } : { duration: 0 }}
        data-testid="invitation-card"
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left side - Photo with decorative frame */}
          <div className="relative p-8 md:p-12 flex items-center justify-center bg-gradient-to-br from-amber-100/50 to-white/50">
            <div className="relative">
              {/* Decorative frame border */}
              <div className="absolute -inset-4 border-4 border-primary/30 rounded-lg" 
                   style={{
                     background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(139,115,85,0.1) 10px, rgba(139,115,85,0.1) 20px)'
                   }}
              />
              
              {/* Photo frame */}
              <div className="relative bg-white p-4 shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-300"
                   style={{
                     boxShadow: '0 10px 40px rgba(0,0,0,0.2), inset 0 0 20px rgba(255,248,220,0.5)'
                   }}
              >
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src={prenupPhoto}
                    alt="Gards & Mj"
                    className="w-full h-auto object-cover"
                    style={{ maxWidth: '400px' }}
                    data-testid="invitation-photo"
                  />
                  {/* Subtle photo effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100/10 via-transparent to-amber-900/10 pointer-events-none"/>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-primary"/>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-primary"/>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-primary"/>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-primary"/>
            </div>
          </div>

          {/* Right side - Invitation text */}
          <div className="relative p-8 md:p-12 flex flex-col justify-center bg-white/50">
            {/* Top decorative element */}
            <motion.div 
              className="mb-8"
              initial={animationsEnabled ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.8, delay: 1 } : { duration: 0 }}
            >
              <h2 
                className="text-3xl md:text-4xl font-script italic text-primary mb-2"
                style={{ fontFamily: 'Boska, serif' }}
                data-testid="text-we-are-getting-married"
              >
                We are getting married!
              </h2>
              <div className="h-0.5 w-24 bg-primary/40 mt-2"/>
            </motion.div>

            {/* Main invitation text */}
            <motion.div
              className="space-y-6"
              initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={animationsEnabled ? { duration: 0.8, delay: 1.3 } : { duration: 0 }}
            >
              <p 
                className="text-lg md:text-xl text-foreground font-medium leading-relaxed"
                style={{ fontFamily: 'Georgia, serif' }}
                data-testid="text-join-us"
              >
                JOIN US AS WE CELEBRATE THE BEGINNING OF FOREVER
              </p>

              <div className="text-base md:text-lg text-foreground/80 space-y-3">
                <p data-testid="text-ceremony-detail">
                  WE CAN'T WAIT TO SAY "I DO" SURROUNDED BY THE PEOPLE WE LOVE MOST—YOU!
                </p>
                <p className="font-semibold text-foreground" data-testid="text-wedding-date">
                  DECEMBER 02, 2025
                </p>
                <p data-testid="text-wedding-venue">
                  CALERUEGA, NASUGBU, BATANGAS
                </p>
              </div>

              <p 
                className="text-sm md:text-base text-foreground/70 italic mt-6"
                data-testid="text-rsvp-instruction"
              >
                RSVP DETAILS WILL FOLLOW
              </p>
            </motion.div>

            {/* RSVP Button */}
            <motion.div
              className="mt-8 flex justify-center"
              initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.8, delay: 1.6 } : { duration: 0 }}
            >
              <button
                onClick={scrollToRSVP}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                data-testid="button-rsvp-invite"
              >
                RSVP NOW
              </button>
            </motion.div>

            {/* Bottom decorative elements */}
            <div className="mt-8 flex items-center justify-start opacity-40">
              <div className="h-px w-12 bg-primary"/>
              <svg className="w-4 h-4 mx-2 text-primary" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
              </svg>
              <div className="h-px w-12 bg-primary"/>
            </div>
          </div>
        </div>

        {/* Paper texture overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div 
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(139,115,85,0.1) 1px, transparent 1px),
                linear-gradient(rgba(139,115,85,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
            className="w-full h-full"
          />
        </div>
      </motion.div>
      {/* Polaroid Photos - Forever, Soulmates, Beloved - Outside the card */}
      <motion.div
        className="relative z-10 flex flex-wrap items-center justify-center gap-6 max-w-4xl"
        initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={animationsEnabled ? { duration: 0.8, delay: 1.8 } : { duration: 0 }}
      >
        {[
          { src: groomPhoto, alt: 'Forever', rotation: -5 },
          { src: couplePhoto, alt: 'Soulmates', rotation: 2 },
          { src: bridePhoto, alt: 'Beloved', rotation: -3 }
        ].map((polaroid, index) => (
          <motion.div
            key={index}
            className="relative group"
            style={{ transform: `rotate(${polaroid.rotation}deg)` }}
            data-testid={`mini-polaroid-${index}`}
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Polaroid Frame */}
            <div 
              className="bg-white p-3 pb-10 shadow-2xl"
              style={{
                boxShadow: '0 10px 30px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
              }}
            >
              <div className="relative overflow-hidden bg-gray-100" style={{ width: '140px', height: '140px' }}>
                <img
                  src={polaroid.src}
                  alt={polaroid.alt}
                  className="w-full h-full object-cover"
                />
                {/* Vintage photo effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-transparent to-amber-900/10 pointer-events-none mix-blend-overlay"/>
              </div>

              {/* Caption */}
              <div className="mt-3 text-center">
                <p 
                  className="italic text-sm text-[#d1a73d]"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {polaroid.alt}
                </p>
              </div>
            </div>

            {/* Tape effect */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-yellow-100/70 opacity-80"
                 style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }}/>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RusticInvitationReveal;
