import { createContext, useContext, useRef, ReactNode, RefObject } from 'react';

interface AudioContextType {
  audioRef: RefObject<HTMLAudioElement>;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <AudioContext.Provider value={{ audioRef }}>
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
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
