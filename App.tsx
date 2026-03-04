
import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Details from './components/Details';
import Gallery from './components/Gallery';
import RSVPForm from './components/RSVPForm';
import GiftSection from './components/GiftSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-[#fdfcfb] selection:bg-[#8fa189] selection:text-white overflow-x-hidden">
      <main className="opacity-100 scale-100 transition-opacity duration-1000">
        <Hero />
        
        <div className="max-w-6xl mx-auto px-6 pb-20 space-y-24 md:space-y-32">
          
          <section id="welcome" className="text-center pt-16 md:pt-24 animate-in fade-in slide-in-from-bottom-4 duration-1000 max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
               <div className="w-12 h-px bg-[#8fa189]/30 self-center"></div>
               <div className="mx-4 text-[#8fa189]">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
               </div>
               <div className="w-12 h-px bg-[#8fa189]/30 self-center"></div>
            </div>
            <h2 className="font-serif italic text-4xl md:text-5xl mb-6 text-gray-800">¡Nos Casamos!</h2>
            <p className="text-gray-500 leading-relaxed font-light text-sm md:text-base px-4">
              Hay momentos en la vida que son especiales por sí solos, pero compartirlos con las personas que quieres los hace inolvidables.
            </p>
          </section>

          <div className="max-w-lg mx-auto w-full">
            <Countdown />
          </div>

          <Details />

          <section id="gallery" className="space-y-10">
             <div className="text-center">
                <h3 className="uppercase tracking-[0.3em] font-bold text-xs text-gray-400 mb-2">Nuestro Álbum</h3>
                <p className="font-serif italic text-xl md:text-2xl text-gray-800 mb-8">Momentos juntos</p>
             </div>
             <Gallery />
          </section>

          <div className="max-w-2xl mx-auto w-full">
            <GiftSection />
          </div>

          <div className="max-w-2xl mx-auto w-full">
            <RSVPForm />
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default App;
// v1.22 - Sincronización de componentes para Vite.
