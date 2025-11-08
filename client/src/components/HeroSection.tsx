import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { ChevronDown } from 'lucide-react';
import heroImage1 from '@assets/1 best prenup_1762572100819.jpg';
import heroImage2 from '@assets/2 - best pic_1762572100820.jpg';
import heroImage3 from '@assets/3_-_best_pic_1762572100820.jpg';
import heroImage4 from '@assets/4 - best pic_1762572100821.JPG';
import heroImage5 from '@assets/5 - best pic_1762572100822.JPG';
import heroImage6 from '@assets/6_-_best_pic_1762572100824.jpg';

const HeroSection = () => {
  const [showElements, setShowElements] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { animationsEnabled } = useAnimationContext();

  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5, heroImage6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

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
      {/* Image Background Slideshow */}
      {heroImages.map((image, index) => (
        <div 
          key={index}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0,
            zIndex: currentImageIndex === index ? 1 : 0
          }}
        />
      ))}
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 2 }}></div>
      
      {/* Date - Top Right */}
      <div className={`absolute top-24 md:top-32 lg:top-40 right-8 md:right-16 lg:right-24 transition-opacity duration-700 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`} style={{ zIndex: 3 }}>
        <div 
          className="text-right"
          style={{
            fontFamily: 'Boska, serif',
            fontWeight: 300,
            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
            lineHeight: 1,
            color: 'white',
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
          }}
          data-testid="text-wedding-date"
        >
          <div>12</div>
          <div>02</div>
          <div>25</div>
        </div>
      </div>
      
      {/* Names - Left Side Centered Vertically */}
      <div className="relative z-10 w-full h-full flex items-center justify-start px-8 md:px-16 lg:px-24">
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
              color: 'white',
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
              color: 'white',
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
