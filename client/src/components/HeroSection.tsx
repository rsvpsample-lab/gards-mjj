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
      <div className="relative z-10 w-full h-full flex justify-between items-center px-8 md:px-16 lg:px-24">
        
        {/* Left Side - Names */}
        <div className="flex flex-col items-start">
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
                fontSize: 'clamp(3rem, 10vw, 7rem)',
                lineHeight: 1,
                color: '#FFD700',
                textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
                textAlign: 'left'
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
                fontSize: 'clamp(3rem, 10vw, 7rem)',
                lineHeight: 1,
                color: '#FFD700',
                textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
                textAlign: 'left'
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

        {/* Right Side - Date */}
        <div className={`flex flex-col items-end transition-all duration-700 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}>
          <div 
            className="text-right"
            style={{
              fontFamily: 'Boska, serif',
              fontWeight: 300,
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
              lineHeight: 1,
              color: '#FFD700',
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
            }}
            data-testid="text-wedding-date"
          >
            <div>12</div>
            <div>02</div>
            <div>25</div>
          </div>
        </div>
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
            padding: 1.5rem 1rem;
            padding-top: 6rem !important;
          }
        }
        
        /* Custom underscore cursor for TypeAnimation */
        .react-type-animation-cursor {
          color: #FFD700;
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
