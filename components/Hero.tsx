
import React from 'react';
import AudioPlayer from './AudioPlayer';
import { useAppContext } from '../context/AppContext';
import { TEMPLATES } from '../data/templates';

const Hero: React.FC = () => {
  const { currentTemplate, t } = useAppContext();
  const activeTemplate = TEMPLATES.find(temp => temp.id === currentTemplate) || TEMPLATES[0];
  const heroImage = activeTemplate.theme.heroImage;

  return (
    <header className="relative h-screen w-full overflow-hidden flex flex-col justify-end">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-white/20">
        <img
          src={heroImage.url}
          alt="Banner"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = heroImage.placeholder;
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mb-10 md:mb-16 text-white px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <span className="uppercase tracking-[0.5em] text-[10px] md:text-sm font-semibold opacity-80 mb-4 block">
          {t(`${currentTemplate}.hero.subtitle`)}
        </span>
        <h1 className="font-script text-7xl md:text-[10rem] lg:text-[10rem] mb-4 md:mb-8 drop-shadow-2xl leading-tight">
          {t(`${currentTemplate}.hero.names`)}
        </h1>
        <div className="w-16 md:w-24 h-px bg-white/50 mx-auto mb-6 md:mb-10"></div>
        <p className="font-serif italic text-lg md:text-3xl opacity-90 tracking-widest">
          {t(`${currentTemplate}.hero.dateLocation`)}
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
