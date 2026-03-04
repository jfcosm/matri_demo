
import React from 'react';

interface Props {
  onClose: () => void;
}

const TechnicalProposal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-8 text-center overflow-y-auto">
      <div className="max-w-lg space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="font-serif text-3xl text-gray-800">Propuesta Técnica</h1>
        
        <div className="space-y-6 text-left text-sm leading-relaxed text-gray-600">
          <p>
            Para desarrollar esta invitación digital <strong>Mobile-First</strong> con la estética y fluidez observada en el video, propongo el siguiente stack:
          </p>
          
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Framework:</strong> <span className="text-black font-semibold">React 18 + TypeScript</span> para una base robusta, tipada y mantenible.
            </li>
            <li>
              <strong>Estilos:</strong> <span className="text-black font-semibold">Tailwind CSS</span>. Ideal para layouts responsivos rápidos y manejo preciso de la paleta de colores (Sage/Nude).
            </li>
            <li>
              <strong>Animaciones:</strong> <span className="text-black font-semibold">Framer Motion</span>. Clave para los efectos de "Scroll Reveal" y transiciones suaves que le dan el toque premium de boda.
            </li>
            <li>
              <strong>Iconografía:</strong> <span className="text-black font-semibold">Lucide React</span> por su diseño minimalista y limpio.
            </li>
            <li>
              <strong>Fuentes:</strong> Google Fonts (Playfair Display para elegancia serif y Great Vibes para el toque manuscrito).
            </li>
            <li>
              <strong>Interactividad:</strong> Lógica de conteo regresivo (Countdown) nativa y reproductores de audio personalizados.
            </li>
          </ul>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <p className="text-xs italic">
              He preparado una <strong>versión funcional de alta fidelidad</strong> basada en el video adjunto para que puedas validar la experiencia de usuario inmediatamente.
            </p>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="bg-[#8fa189] text-white px-8 py-3 rounded-full font-medium tracking-wide hover:bg-[#7a8c75] transition-all transform hover:scale-105 active:scale-95"
        >
          Ver Prototipo Funcional
        </button>
      </div>
    </div>
  );
};

export default TechnicalProposal;
