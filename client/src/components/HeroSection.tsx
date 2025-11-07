import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { ChevronDown } from 'lucide-react';
import heroImage from '@assets/hero-section_1762419093424.jpg';

const HeroSection = () => {
  const [showElements, setShowElements] = useState(false);
  const { animationsEnabled } = useAnimationContext();

  const scrollToNext = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="hero-section relative h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Image Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-between px-8 md:px-16 lg:px-24">
        
        {/* Left Side - Names */}
        <div className="flex-1 flex items-start justify-start pt-20 md:pt-32">
          <div className="text-left">
            {animationsEnabled ? (
              <TypeAnimation
                sequence={[
                  'Gards\n&\nMj',
                  () => {
                    setShowElements(true);
                  }
                ]}
                wrapper="h1"
                speed={{ type: 'keyStrokeDelayInMs', value: 273 }}
                style={{ 
                  whiteSpace: 'pre-line',
                  display: 'block',
                  fontFamily: 'Boska, serif',
                  fontWeight: 300,
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  lineHeight: 1.1,
                  color: 'white',
                  textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
                }}
                cursor={true}
                repeat={0}
                data-testid="text-main-names"
              />
            ) : (
              <h1 
                style={{ 
                  whiteSpace: 'pre-line',
                  display: 'block',
                  fontFamily: 'Boska, serif',
                  fontWeight: 300,
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  lineHeight: 1.1,
                  color: 'white',
                  textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
                }}
                data-testid="text-main-names"
              >
                Gards
                <br />
                &
                <br />
                Mj
              </h1>
            )}
          </div>
        </div>

        {/* Right Side - Date */}
        <div className={`flex-1 flex items-start justify-end pt-20 md:pt-32 transition-all duration-700 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}>
          <div className="text-right">
            <div 
              className="text-white"
              style={{
                fontFamily: 'Boska, serif',
                fontWeight: 300,
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 1.2,
                textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
              }}
              data-testid="text-wedding-date"
            >
              <div>12</div>
              <div>02</div>
              <div>25</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Bottom Center */}
      <div 
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer transition-all duration-700 hover:opacity-80 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}
        onClick={scrollToNext}
        data-testid="scroll-indicator"
      >
        <p 
          className="text-white text-sm tracking-widest mb-2"
          style={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 400,
            letterSpacing: '0.2em',
            textShadow: '1px 1px 4px rgba(0,0,0,0.3)'
          }}
        >
          SCROLL
        </p>
        <ChevronDown 
          className="text-white animate-bounce" 
          size={28}
          style={{
            filter: 'drop-shadow(1px 1px 4px rgba(0,0,0,0.3))'
          }}
        />
      </div>

      {/* Mobile Styles */}
      <style>{`
        .hero-section {
          background-attachment: fixed;
        }
        
        @media (max-width: 768px) {
          .hero-section {
            background-attachment: scroll !important;
          }
          
          .hero-section > div:nth-child(3) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem 1.5rem;
            gap: 3rem;
          }
          
          .hero-section > div:nth-child(3) > div:first-child,
          .hero-section > div:nth-child(3) > div:last-child {
            padding-top: 0 !important;
            text-align: center !important;
            justify-content: center !important;
          }
          
          .hero-section h1 {
            text-align: center !important;
          }
          
          .hero-section > div:nth-child(3) > div:last-child > div {
            text-align: center !important;
          }
        }
        
        /* Custom underscore cursor for TypeAnimation */
        .react-type-animation-cursor {
          color: white;
          animation: blink 1.2s infinite;
        }

        .react-type-animation-cursor::after {
          content: '_';
          font-weight: bold;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
