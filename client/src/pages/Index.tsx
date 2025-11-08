import { useEffect, useRef, useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import cover1Image from '@assets/cover1_1762419093421.jpg';
import cover2Image from '@assets/cover2_1762419093422.jpg';
import cover3Image from '@assets/cover3_1762419093423.jpg';
import CountdownSection from '@/components/CountdownSection';
import StorySection from '@/components/StorySection';
import ScrollTriggeredTimeline from '@/components/ScrollTriggeredTimeline';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import UnpluggedCeremonySection from '@/components/UnpluggedCeremonySection';
import HashtagGiftsSection from '@/components/HashtagGiftsSection';
import RSVPSection from '@/components/RSVPSection';
import EntourageSection from '@/components/EntourageSection';
import MemorableMomentsSection from '@/components/MemorableMomentsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CoverSection from '@/components/CoverSection';
import InvitationRevealSection from '@/components/InvitationRevealSection';
import MusicControl from '@/components/MusicControl';
import { AnimationContext } from '@/contexts/AnimationContext';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  useEffect(() => {
    setAnimationsEnabled(true);
    
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0.3;
      audio.loop = true;

      const handleCanPlay = () => {
        console.log('Audio is ready to play');
        audio.play().catch((error) => {
          console.error('Auto-play failed:', error);
        });
      };

      const handleError = (e: Event) => {
        console.error('Audio loading error:', e);
      };

      const handleLoadedData = () => {
        console.log('Audio data loaded successfully');
      };

      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('error', handleError);
      audio.addEventListener('loadeddata', handleLoadedData);

      if (audio.readyState >= 3) {
        audio.play().catch((error) => {
          console.error('Auto-play failed:', error);
        });
      }

      return () => {
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      {/* Background Music - Always present */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        crossOrigin="anonymous"
        style={{ display: 'none' }}
        data-testid="background-audio"
      >
        <source
          src="https://res.cloudinary.com/dsicpzepi/video/upload/v1762510143/ytmp3free.cc_elliot-james-reay-i-think-they-call-this-love-official-music-video-youtubemp3free.org_g8pdoi.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <div className="min-h-screen relative">
        <Navigation />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <HeroSection />
          <InvitationRevealSection />
          <CountdownSection />
          <StorySection />
          <CoverSection
            imageUrl={cover1Image}
            alt="Gards & Mj Wedding Cover Image 1"
          />
          <ScrollTriggeredTimeline />
          <VenueSection />
          <CoverSection
            imageUrl={cover2Image}
            alt="Gards & Mj Wedding Cover Image 2"
          />
          <DressCodeSection />
          <UnpluggedCeremonySection />
          <HashtagGiftsSection />
          <RSVPSection />
          <EntourageSection />
          <MemorableMomentsSection />
          <CoverSection
            imageUrl={cover3Image}
            alt="Gards & Mj Wedding Cover Image 3"
          />
          <FAQSection />
          <Footer />
        </main>

        {/* Music Control - always show */}
        <MusicControl audioRef={audioRef} />
      </div>
    </AnimationContext.Provider>
  );
};

export default Index;