import { useEffect, useState } from 'react';

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
import { useAudio } from '@/contexts/AudioContext';

const Index = () => {
  const { audioRef } = useAudio();
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  useEffect(() => {
    setAnimationsEnabled(true);
  }, []);

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
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