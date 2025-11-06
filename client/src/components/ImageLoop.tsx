import { useAnimationContext } from '@/contexts/AnimationContext';

// Image loop images - Prenup photos
import imageLoop1 from '@assets/prenup1_1762420085164.jpg';
import imageLoop2 from '@assets/prenup2_1762420085165.jpg';
import imageLoop3 from '@assets/prenup3_1762420085166.jpg';
import imageLoop4 from '@assets/prenup4_1762420085166.jpg';
import imageLoop5 from '@assets/prenup5_1762420085167.jpg';
import imageLoop6 from '@assets/prenup6_1762420085168.jpg';
import imageLoop7 from '@assets/prenup7_1762420085169.jpg';
import imageLoop9 from '@assets/prenup9_1762420085169.jpg';
import imageLoop10 from '@assets/prenup10_1762420085170.jpg';
import imageLoop11 from '@assets/prenup11_1762420085170.jpg';
import imageLoop12 from '@assets/prenup12_1762420085171.jpg';

const ImageLoop = () => {
  const { animationsEnabled } = useAnimationContext();
  const images = [
    imageLoop1,
    imageLoop2,
    imageLoop3,
    imageLoop4,
    imageLoop5,
    imageLoop6,
    imageLoop7,
    imageLoop9,
    imageLoop10,
    imageLoop11,
    imageLoop12
  ];

  return (
    <section id="slideshow" className="image-loop-section section-hard-blue w-full overflow-hidden py-4">
      <div className="image-loop-container">
        <div className={`${animationsEnabled ? 'image-loop-track' : 'image-loop-track-static'}`}>
          {/* First set of images */}
          {images.map((image, index) => (
            <div key={`set1-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Wedding soulmates moment ${index + 1}`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-${index + 1}`}
              />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {images.map((image, index) => (
            <div key={`set2-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Wedding soulmates moment ${index + 1} duplicate`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-dup-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageLoop;
