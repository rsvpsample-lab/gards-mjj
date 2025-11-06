import { motion } from 'framer-motion';
import giftQRCode from '@assets/gift_1762419093423.png';
import prenupPhoto from '@assets/3_1760525627712.jpg';

const HashtagGiftsSection = () => {
  return (
    <motion.section 
      id="hashtag-gifts" 
      className="section-pastel-blue py-16 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Image with Overlay Card Container */}
        <motion.div 
          className="relative mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {/* Prenup Photo */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={prenupPhoto}
              alt="Prenup photo"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Gift Guide Overlay Card - centered, half inside image, half outside */}
          <motion.div
            className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-0 md:translate-y-1/2 mt-8 md:mt-0 mx-auto w-full max-w-lg px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="bg-white dark:bg-gray-50 rounded-3xl p-8 shadow-2xl">
              <h2 
                className="font-display italic text-center mb-5 text-5xl text-gray-800"
                data-testid="text-gifts-title"
              >
                Gift Guide
              </h2>

              <div className="text-center space-y-4">
                <p 
                  className="text-sm text-gray-600 leading-relaxed"
                  data-testid="text-gifts-message-1"
                >
                  Your presence is the greatest gift we could ever receive.
                </p>
                
                <p 
                  className="text-sm text-gray-600 leading-relaxed"
                  data-testid="text-gifts-message-2"
                >
                  Should you wish to extend your generosity, a token of love and support toward our future together would be deeply appreciated.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* QR Code Section Below */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <img 
            src={giftQRCode} 
            alt="InstaPay QR Code for monetary gifts" 
            className="max-w-xs w-full h-auto rounded-lg shadow-md"
            data-testid="img-gift-qr-code"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HashtagGiftsSection;
