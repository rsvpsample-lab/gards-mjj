import { motion } from 'framer-motion';
import giftQRCode from '@assets/gift_1762419093423.png';

const HashtagGiftsSection = () => {
  return (
    <motion.section 
      id="hashtag-gifts" 
      className="section-pastel-blue py-16 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Gift Guide Card */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <div className="bg-card/30 border-0 rounded-3xl p-12 shadow-elegant hover-elegant transition-all duration-500">
            <h2 
              className="font-display italic text-center mb-8 text-5xl text-[hsl(var(--burgundy))]"
              data-testid="text-gifts-title"
            >
              Gift Guide
            </h2>

            <div className="text-center space-y-6 max-w-2xl mx-auto">
              <p 
                className="text-base text-foreground/80 leading-relaxed"
                data-testid="text-gifts-message-1"
              >
                Your presence is the greatest gift we could ever receive.
              </p>
              
              <p 
                className="text-base text-foreground/80 leading-relaxed"
                data-testid="text-gifts-message-2"
              >
                Should you wish to extend your generosity, a token of love and support toward our future together would be deeply appreciated.
              </p>
            </div>
          </div>
        </motion.div>

        {/* QR Code Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-soft">
            <img 
              src={giftQRCode} 
              alt="InstaPay QR Code for monetary gifts" 
              className="max-w-xs w-full h-auto rounded-lg"
              data-testid="img-gift-qr-code"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HashtagGiftsSection;
