import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { Calendar, Clock, Heart } from 'lucide-react';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const { animationsEnabled } = useAnimationContext();

  useEffect(() => {
    const targetDate = new Date('December 02, 2025 15:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      id="countdown" 
      className="section-pastel-blue py-20 px-4 relative overflow-hidden"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 2.5 } : { duration: 0 }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary rounded-full"/>
        <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-primary rounded-full"/>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/30 rounded-full"/>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 0.3 } : { duration: 0 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-[hsl(var(--gold))] fill-[hsl(var(--gold))]" />
            <h2 className="text-5xl md:text-6xl font-display italic text-[hsl(var(--burgundy))]" data-testid="text-countdown-title">
              Counting Down
            </h2>
            <Heart className="w-8 h-8 text-[hsl(var(--gold))] fill-[hsl(var(--gold))]" />
          </div>
          <p className="text-xl md:text-2xl text-[hsl(var(--burgundy))]/70 font-light">
            Until we say "I Do"
          </p>
        </motion.div>

        {/* Date Display */}
        <motion.div
          className="mb-12 flex items-center justify-center gap-4 bg-white border-0 rounded-2xl p-6 max-w-md mx-auto"
          style={{ boxShadow: '0 20px 40px -10px rgba(216, 181, 181, 0.25), 0 10px 20px -5px rgba(216, 181, 181, 0.2)' }}
          initial={animationsEnabled ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={animationsEnabled ? { duration: 0.6, delay: 0.5 } : { duration: 0 }}
        >
          <Calendar className="w-6 h-6 text-[hsl(var(--gold))]" />
          <div>
            <p className="text-sm text-[hsl(var(--burgundy))]/60 uppercase tracking-wider">Wedding Day</p>
            <p className="text-2xl font-display font-semibold text-[hsl(var(--burgundy))]">
              December 02, 2025
            </p>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 0.7 } : { duration: 0 }}
        >
          {[
            { label: 'Days', value: timeLeft.days, icon: Calendar },
            { label: 'Hours', value: timeLeft.hours, icon: Clock },
            { label: 'Minutes', value: timeLeft.minutes, icon: Clock },
            { label: 'Seconds', value: timeLeft.seconds, icon: Clock }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="relative bg-white border-0 rounded-2xl p-6 transition-all duration-300"
              style={{ boxShadow: '0 20px 40px -10px rgba(216, 181, 181, 0.25), 0 10px 20px -5px rgba(216, 181, 181, 0.2)' }}
              initial={animationsEnabled ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={animationsEnabled ? { 
                duration: 0.6, 
                ease: "easeOut", 
                delay: 0.9 + (index * 0.1) 
              } : { duration: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              data-testid={`countdown-${item.label.toLowerCase()}`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-3">
                <div className="bg-[hsl(var(--gold))]/20 p-2 rounded-full">
                  <item.icon className="w-5 h-5 text-[hsl(var(--gold))]" />
                </div>
              </div>

              {/* Value */}
              <motion.div 
                className="text-5xl md:text-6xl font-display font-bold text-[hsl(var(--burgundy))] mb-2"
                key={item.value}
                initial={animationsEnabled ? { opacity: 0.7, scale: 0.9 } : { opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={animationsEnabled ? { duration: 0.3 } : { duration: 0 }}
              >
                {item.value.toString().padStart(2, '0')}
              </motion.div>

              {/* Label */}
              <div className="text-sm md:text-base font-body uppercase tracking-widest text-[hsl(var(--burgundy))]/70 font-medium">
                {item.label}
              </div>

              {/* Decorative corner */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary/30"/>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary/30"/>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom message */}
        <motion.div
          className="mt-12"
          initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={animationsEnabled ? { duration: 0.8, delay: 1.5 } : { duration: 0 }}
        >
          <p className="text-lg md:text-xl text-[hsl(var(--burgundy))]/70 italic font-light">
            Every second brings us closer to forever
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CountdownSection;
