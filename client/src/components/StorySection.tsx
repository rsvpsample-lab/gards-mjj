import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { Sparkles, Compass } from 'lucide-react';

import promiseImage from '@assets/prenup3_1762435311713.jpg';
import futureImage from '@assets/prenup4_1762435311714.jpg';

const StorySection = () => {
  const { animationsEnabled } = useAnimationContext();

  const storyCards = [
    {
      id: 1,
      title: "Our Promise",
      text: "Through every season, we promise to walk hand in hand, embracing both joy and challenge with unwavering love and faith.",
      image: promiseImage,
      icon: Sparkles
    },
    {
      id: 2,
      title: "Our Future",
      text: "Together, we step into a future filled with hope and endless possibilities, building a life rooted in love and shared dreams.",
      image: futureImage,
      icon: Compass
    }
  ];

  return (
    <motion.section 
      id="story" 
      className="section-hard-blue relative overflow-hidden isolate py-16"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 3.5 } : { duration: 0 }}
    >
      <div className="text-center py-16 sm:py-20 px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12"
          style={{ boxShadow: '0 25px 60px -15px rgba(216, 181, 181, 0.3), 0 15px 30px -10px rgba(216, 181, 181, 0.25)' }}
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 3.8 } : { duration: 0 }}
        >
          <h2 className="text-4xl sm:text-5xl font-script italic font-black mb-6 sm:mb-8 text-[hsl(var(--burgundy))]" data-testid="text-story-title">
            Together Forever
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-4 text-[hsl(var(--burgundy))]/80">
            Our commitment to each other
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-16">
        {storyCards.map((card, index) => (
          <motion.div
            key={card.id}
            className="story-card"
            initial={animationsEnabled ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div 
              className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative overflow-hidden rounded-3xl p-8 transition-all duration-300 bg-white border-0"
              style={{
                boxShadow: '0 25px 60px -15px rgba(216, 181, 181, 0.3), 0 15px 30px -10px rgba(216, 181, 181, 0.25)'
              }}
              data-testid={`card-story-${card.id}`}
            >
              <div className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
                  <card.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[hsl(var(--gold))]" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-script italic mb-4 sm:mb-6 text-[hsl(var(--burgundy))]" data-testid={`text-story-card-${card.id}-title`}>
                  {card.title}
                </h3>
                
                <p className="text-lg sm:text-xl leading-relaxed text-[hsl(var(--burgundy))]/80" data-testid={`text-story-card-${card.id}-text`}>
                  {card.text}
                </p>

                <div className="flex items-center space-x-4 pt-4 sm:pt-6">
                  <div className="w-12 sm:w-16 h-px bg-primary-foreground/60"></div>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground/70" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                  <div className="w-12 sm:w-16 h-px bg-primary-foreground/60"></div>
                </div>
              </div>

              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-square max-w-[70vw] sm:max-w-sm md:max-w-md mx-auto relative">
                  <img
                    src={card.image}
                    alt={`${card.title} moment`}
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                    data-testid={`img-story-card-${card.id}`}
                  />

                  <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground/70 animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
                    </svg>
                  </div>

                  <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground/60 animate-pulse" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div 
          className="story-card"
          initial={animationsEnabled ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto text-center relative bg-white rounded-3xl p-8 sm:p-12"
               style={{ boxShadow: '0 25px 60px -15px rgba(216, 181, 181, 0.3), 0 15px 30px -10px rgba(216, 181, 181, 0.25)' }}>
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600">
              <defs>
                <radialGradient id="vowGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(var(--primary-foreground))" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="hsl(var(--primary-foreground))" stopOpacity="0"/>
                </radialGradient>
              </defs>
              <circle cx="400" cy="300" r="250" fill="url(#vowGradient)"/>
              
              <g className="animate-pulse">
                <path d="M200,150 C200,140 185,130 175,140 C165,130 155,140 155,150 C155,160 175,180 200,200 C225,180 245,160 245,150 C245,140 235,130 225,140 C215,130 200,140 200,150 Z" 
                      fill="hsl(var(--primary-foreground))" opacity="0.2"/>
                <path d="M600,450 C600,440 585,430 575,440 C565,430 555,440 555,450 C555,460 575,480 600,500 C625,480 645,460 645,450 C645,440 635,430 625,440 C615,430 600,440 600,450 Z" 
                      fill="hsl(var(--primary-foreground))" opacity="0.2"/>
              </g>
            </svg>

            <div className="relative z-10 space-y-6 sm:space-y-8">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-script italic font-black mb-6 sm:mb-8 text-primary" data-testid="text-story-vow-title">
                Our Vow
              </h3>
              
              <div className="max-w-2xl mx-auto">
                <p className="text-xl sm:text-2xl leading-relaxed italic mb-4 text-[hsl(var(--burgundy))]/85">
                  "Above all, clothe yourselves with love, which binds us all together in perfect harmony."
                </p>
                <p className="text-base sm:text-lg font-body text-[hsl(var(--burgundy))]/75">
                  Colossians 3:14
                </p>
              </div>
              
              <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-8 sm:mt-12">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                </svg>
                <div className="w-16 sm:w-24 h-px bg-primary/60"></div>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-pulse" viewBox="0 0 24 24" style={{ animationDelay: '0.5s' }}>
                  <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                </svg>
                <div className="w-16 sm:w-24 h-px bg-primary/60"></div>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" viewBox="0 0 24 24" style={{ animationDelay: '1s' }}>
                  <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StorySection;
