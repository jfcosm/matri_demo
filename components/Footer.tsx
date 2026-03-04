
import React from 'react';
import { BRIDE_NAME, GROOM_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 text-center bg-white space-y-10 border-t border-gray-50">
      <div className="flex flex-col items-center animate-in fade-in duration-1000">
        <div className="mb-6 text-[#8fa189]/30">
          <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </div>
        <h3 className="font-script text-6xl text-[#8fa189] mb-4 drop-shadow-sm">Te esperamos</h3>
        <p className="font-serif text-xl italic text-gray-400">{BRIDE_NAME} & {GROOM_NAME}</p>
      </div>
      
      <div className="pt-12 px-6">
        <p className="text-[9px] text-gray-400 uppercase tracking-[0.3em] font-bold mb-4">
          Invitación desarrollada por <a href="https://www.melodialab.net" target="_blank" rel="noopener noreferrer" className="text-[#8fa189] underline underline-offset-4 hover:text-[#7a8c75] transition-colors">MelodIA lab</a>
        </p>
        <div className="w-12 h-px bg-gray-100 mx-auto"></div>
        <p className="mt-4 text-[8px] text-gray-300 uppercase tracking-widest">© 2026 • Hecho con amor</p>
      </div>
    </footer>
  );
};

export default Footer;
// v1.6 - Año de copyright actualizado a 2026
