
import React from 'react';
import { BRIDE_NAME, GROOM_NAME, HERO_IMAGE } from '../constants';
import AudioPlayer from './AudioPlayer';

const Hero: React.FC = () => {
  return (
    <header className="relative h-screen w-full overflow-hidden flex flex-col justify-end">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-gray-100">
        <img 
          src={HERO_IMAGE.url} 
          alt="Nuestra Boda" 
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = HERO_IMAGE.placeholder;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mb-10 md:mb-16 text-white px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <span className="uppercase tracking-[0.5em] text-[10px] md:text-sm font-semibold opacity-80 mb-4 block">
          Nuestra Boda
        </span>
        <h1 className="font-script text-7xl md:text-[10rem] lg:text-[12rem] mb-4 md:mb-8 drop-shadow-2xl leading-tight">
          {BRIDE_NAME} & {GROOM_NAME}
        </h1>
        <div className="w-16 md:w-24 h-px bg-white/50 mx-auto mb-6 md:mb-10"></div>
        <p className="font-serif italic text-lg md:text-3xl opacity-90 tracking-widest">
          15.09.2026 • La Serena
        </p>
      </div>

      {/* Audio Player at bottom of Hero */}
      <div className="relative z-10 px-6 mb-12 md:mb-16 max-w-sm mx-auto w-full">
        <AudioPlayer />
      </div>
    </header>
  );
};

export default Hero;
// v1.16 - Hero actualizado con el nuevo Spotify Player.
