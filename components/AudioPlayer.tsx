
import React, { useState, useEffect, useRef } from 'react';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [player, setPlayer] = useState<any>(null);
  const videoId = '450p7goxZqg'; // ID de All of Me - John Legend

  useEffect(() => {
    const loadYoutubeAPI = () => {
      if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = createPlayer;
      } else {
        createPlayer();
      }
    };

    const createPlayer = () => {
      new window.YT.Player('youtube-player-hidden', {
        height: '0',
        width: '0',
        videoId: videoId,
        playerVars: {
          'autoplay': 1,
          'playsinline': 1,
          'controls': 0,
          'disablekb': 1,
          'modestbranding': 1,
          'loop': 1,
          'playlist': videoId // Necesario para el loop
        },
        events: {
          'onReady': (event: any) => {
            const ytPlayer = event.target;
            setPlayer(ytPlayer);
            
            // Intentar autoplay (puede ser bloqueado por el navegador si no hay interacción previa)
            ytPlayer.playVideo();
            
            // Sincronizar estado inicial
            setIsMuted(ytPlayer.isMuted());
          },
          'onStateChange': (event: any) => {
            // 1 = playing, 2 = paused
            if (event.data === window.YT.PlayerState.PLAYING) setIsPlaying(true);
            else if (event.data === window.YT.PlayerState.PAUSED) setIsPlaying(false);
          }
        }
      });
    };

    loadYoutubeAPI();
  }, []);

  const togglePlay = () => {
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  const toggleMute = () => {
    if (!player) return;
    if (isMuted) {
      player.unMute();
      setIsMuted(false);
    } else {
      player.mute();
      setIsMuted(true);
    }
  };

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in zoom-in duration-1000 delay-300">
      {/* Reproductor oculto de YouTube */}
      <div id="youtube-player-hidden" className="hidden"></div>

      {/* Interfaz de Música Personalizada */}
      <div className="w-full max-w-[320px] bg-white/10 backdrop-blur-md rounded-full p-1.5 shadow-2xl border border-white/20 flex items-center gap-2 group hover:bg-white/15 transition-all duration-500">
        
        {/* Botón Play/Pause */}
        <button 
          onClick={togglePlay}
          title={isPlaying ? "Pausar" : "Reproducir"}
          className="w-11 h-11 rounded-full bg-[#8fa189] text-white flex items-center justify-center shadow-lg hover:bg-[#7a8c75] transition-all transform active:scale-90 flex-shrink-0"
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6zm8 0h4v16h-4z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>

        {/* Info de la canción */}
        <div className="flex-1 overflow-hidden ml-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white truncate leading-tight">
            All of Me
          </p>
          <p className="text-[9px] text-white/60 uppercase tracking-wider truncate">
            John Legend
          </p>
          
          {/* Barra de progreso decorativa */}
          <div className="w-full h-[2px] bg-white/10 mt-1.5 rounded-full overflow-hidden">
            <div className={`h-full bg-[#8fa189] transition-all ${isPlaying ? 'w-full' : 'w-0'}`} 
                 style={{ 
                   transitionDuration: isPlaying ? '270s' : '0.5s',
                   transitionTimingFunction: 'linear'
                 }}>
            </div>
          </div>
        </div>

        {/* Botón Mute/Unmute */}
        <button 
          onClick={toggleMute}
          title={isMuted ? "Activar Sonido" : "Silenciar"}
          className="w-11 h-11 rounded-full text-white/70 flex items-center justify-center hover:bg-white/10 transition-all flex-shrink-0"
        >
          {isMuted ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>
      </div>
      
      <p className="mt-4 text-[9px] uppercase tracking-[0.3em] text-white/50 font-bold">
        {isPlaying ? 'Sonando ahora' : 'Pausado'}
      </p>
    </div>
  );
};

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default AudioPlayer;
// v1.18 - Player con Autoplay, Loop y función de Silencio (Mute).
