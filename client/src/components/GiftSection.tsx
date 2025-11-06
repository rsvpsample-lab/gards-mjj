import { Heart, Gift, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const GiftSection = () => {
  return (
    <motion.section 
      className="section-hard-blue py-2 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 9.5 }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-24 h-24 border border-primary/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.8 }}
        >
          <h2 className="text-5xl font-display italic text-[hsl(var(--burgundy))] mb-8" data-testid="text-gifts-title">
            Wedding Gifts
          </h2>
        </motion.div>

        {/* Main Gift Message */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.1 }}
        >
          <div className="bg-white border-0 rounded-xl p-12 hover-elegant" style={{ boxShadow: '0 25px 60px -15px rgba(216, 181, 181, 0.4), 0 15px 30px -10px rgba(216, 181, 181, 0.3)' }}>
            {/* Icon */}
            <div className="w-20 h-20 bg-[hsl(var(--gold))]/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-[hsl(var(--gold))]" />
            </div>

            {/* Main Message */}
            <div className="space-y-6">
              <p className="text-xl font-body text-primary-foreground leading-relaxed">
                As love is what the night is all about, your presence is one we can't celebrate without. But should you still believe that gift is worth giving, monetary gift for our future is a delightful blessing.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="mt-8 flex justify-center items-center space-x-4">
              <div className="w-12 h-px bg-[#ffffff]/30"></div>
              <div className="w-3 h-3 bg-[#ffffff] rounded-full animate-float"></div>
              <div className="w-12 h-px bg-[#ffffff]/30"></div>
            </div>
          </div>
        </motion.div>

        {/* Payment Options */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.4 }}
        >
          {/* BPI Payment */}
          <div>
            <div className="bg-white border-0 rounded-xl p-8 hover-elegant" style={{ boxShadow: '0 20px 40px -10px rgba(216, 181, 181, 0.4), 0 10px 20px -5px rgba(216, 181, 181, 0.3)' }}>
              <h3 className="text-lg font-display font-semibold text-[hsl(var(--burgundy))] mb-4 text-center">BPI</h3>
              <div className="text-center mb-4">
                <img 
                  src="https://res.cloudinary.com/diskgga1j/image/upload/v1762335288/giftSection_1762335182961_zygkaq.jpg"
                  alt="BPI Payment QR Code"
                  className="w-full max-w-sm mx-auto object-contain rounded-lg"
                />
              </div>
              <p className="text-primary-foreground leading-relaxed text-center text-sm">
                Scan the QR code or transfer to the account number above
              </p>
            </div>
          </div>

          {/* BDO Payment */}
          <div>
            <div className="bg-white border-0 rounded-xl p-8 hover-elegant" style={{ boxShadow: '0 20px 40px -10px rgba(216, 181, 181, 0.4), 0 10px 20px -5px rgba(216, 181, 181, 0.3)' }}>
              <h3 className="text-lg font-display font-semibold text-[hsl(var(--burgundy))] mb-4 text-center">BDO</h3>
              <div className="text-center mb-4">
                <img 
                  src="https://res.cloudinary.com/diskgga1j/image/upload/v1762335288/giftSection2_1762335182962_ipvdj5.jpg"
                  alt="BDO Payment QR Code"
                  className="w-full max-w-sm mx-auto object-contain rounded-lg"
                />
              </div>
              <p className="text-primary-foreground leading-relaxed text-center text-sm">
                Scan the QR code or transfer to the account number above
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GiftSection;