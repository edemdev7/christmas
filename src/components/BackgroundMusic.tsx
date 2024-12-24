import React, { useState } from 'react';
import { Music, PauseCircle } from 'lucide-react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = document.getElementById('christmas-music') as HTMLAudioElement;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio
        id="christmas-music"
        loop
        src="/music.mp3"
      />
      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-20 bg-white/20 backdrop-blur-lg p-3 rounded-full hover:bg-white/30 transition-all"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <PauseCircle className="w-6 h-6 text-white" />
        ) : (
          <Music className="w-6 h-6 text-white" />
        )}
      </button>
    </>
  );
};

export default BackgroundMusic;