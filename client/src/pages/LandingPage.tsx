import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import envelopeImage from '@assets/7a7e36e2-b156-4b15-b8cb-2b8c6516d9fc-removebg-preview_1762573270050.png';
import { Button } from '@/components/ui/button';

const LandingPage = () => {
  const [, setLocation] = useLocation();

  const handleOpenInvitation = () => {
    // Set flag to indicate user gesture for audio playback (iOS Safari requirement)
    sessionStorage.setItem('playMusic', 'true');
    setLocation('/invitation');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#F5E6D3] to-[#E8D4BA] overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-8 p-8 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <img
            src={envelopeImage}
            alt="Wedding Invitation Envelope"
            className="w-full h-auto drop-shadow-2xl"
            data-testid="img-envelope"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Button
            onClick={handleOpenInvitation}
            className="bg-[hsl(var(--gold))] hover:bg-[#B8960F] text-white font-serif text-lg md:text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            data-testid="button-open-invitation"
          >
            Open Invitation
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
