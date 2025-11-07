import { useEffect, useState } from 'react';

interface Glitter {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  opacity: number;
}

export const GlitterEffect = () => {
  const [glitters, setGlitters] = useState<Glitter[]>([]);

  useEffect(() => {
    const createGlitters = () => {
      const newGlitters: Glitter[] = [];
      const glitterCount = 15;

      for (let i = 0; i < glitterCount; i++) {
        newGlitters.push({
          id: i,
          left: Math.random() * 100,
          animationDuration: 8 + Math.random() * 6,
          animationDelay: Math.random() * 10,
          size: 4 + Math.random() * 8,
          opacity: 0.3 + Math.random() * 0.7,
        });
      }

      setGlitters(newGlitters);
    };

    createGlitters();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {glitters.map((glitter) => (
        <div
          key={glitter.id}
          className="absolute glitter-particle"
          style={{
            left: `${glitter.left}%`,
            width: `${glitter.size}px`,
            height: `${glitter.size}px`,
            animationDuration: `${glitter.animationDuration}s`,
            animationDelay: `${glitter.animationDelay}s`,
            opacity: glitter.opacity,
          }}
        />
      ))}
    </div>
  );
};
