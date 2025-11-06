import { motion } from 'framer-motion';
import giftQRCode from '@assets/gift_1762419093423.png';
import prenupBackground from '@assets/3_1760525627712.jpg';

const HashtagGiftsSection = () => {
  return (
    <motion.section 
      id="hashtag-gifts" 
      className="relative py-20 px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${prenupBackground})`,
          filter: 'brightness(0.7)'
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="max-w-md mx-auto relative z-10">
        {/* Gift Guide Card */}
        <motion.div 
          className="bg-white dark:bg-gray-50 rounded-3xl p-10 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <motion.h2 
            className="font-display italic text-center mb-8 text-5xl text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            data-testid="text-gifts-title"
          >
            Gift Guide
          </motion.h2>

          <motion.div
            className="text-center space-y-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p 
              className="text-base text-gray-600 leading-relaxed"
              data-testid="text-gifts-message-1"
            >
              Your presence is the greatest gift we could ever receive.
            </p>
            
            <p 
              className="text-base text-gray-600 leading-relaxed"
              data-testid="text-gifts-message-2"
            >
              Should you wish to extend your generosity, a token of love and support toward our future together would be deeply appreciated.
            </p>
          </motion.div>
          
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <img 
              src={giftQRCode} 
              alt="InstaPay QR Code for monetary gifts" 
              className="max-w-xs w-full h-auto rounded-lg"
              data-testid="img-gift-qr-code"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HashtagGiftsSection;
