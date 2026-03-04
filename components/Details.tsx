
import React from 'react';
import { CEREMONY_DETAILS, CELEBRATION_DETAILS } from '../constants';

const Details: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 py-8 items-start">
      {/* Ceremony */}
      <div className="text-center space-y-4 group p-8 rounded-3xl border border-transparent hover:border-[#8fa189]/10 hover:bg-white hover:shadow-xl transition-all duration-500">
        <div className="flex justify-center mb-2">
          <div className="p-5 bg-[#f4f6f3] rounded-full transition-all group-hover:bg-[#8fa189] group-hover:text-white duration-500 text-[#8fa189]">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>
        <h3 className="uppercase tracking-[0.4em] font-bold text-[10px] text-gray-400">La Ceremonia</h3>
        <p className="font-serif italic text-3xl md:text-4xl text-gray-800">{CEREMONY_DETAILS.venue}</p>
        <div className="flex flex-col items-center text-gray-500 text-sm py-4">
          <span className="mb-3 text-xs uppercase tracking-widest opacity-60 font-medium">Acompáñanos a las</span>
          <div className="flex items-center gap-8 mb-4">
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-light text-[#8fa189]">{CEREMONY_DETAILS.date}</span>
              <span className="text-[9px] uppercase tracking-widest font-bold">2026</span>
            </div>
            <div className="w-px h-10 bg-[#8fa189]/20"></div>
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-light text-[#8fa189]">{CEREMONY_DETAILS.time}</span>
              <span className="text-[9px] uppercase tracking-widest font-bold">Puntual</span>
            </div>
          </div>
          <p className="text-xs italic text-gray-400 max-w-[200px]">{CEREMONY_DETAILS.address}</p>
        </div>
        <a 
          href={CEREMONY_DETAILS.mapUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[#8fa189]/40 text-[#8fa189] px-8 py-3 rounded-full hover:bg-[#8fa189] hover:text-white transition-all text-[10px] uppercase tracking-widest font-bold shadow-sm"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          Cómo llegar
        </a>
      </div>

      {/* Celebration */}
      <div className="text-center space-y-4 group p-8 rounded-3xl border border-transparent hover:border-[#8fa189]/10 hover:bg-white hover:shadow-xl transition-all duration-500">
        <div className="flex justify-center mb-2">
          <div className="p-5 bg-[#f4f6f3] rounded-full transition-all group-hover:bg-[#8fa189] group-hover:text-white duration-500 text-[#8fa189]">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 2l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" />
            </svg>
          </div>
        </div>
        <h3 className="uppercase tracking-[0.4em] font-bold text-[10px] text-gray-400">La Fiesta</h3>
        <p className="font-serif italic text-3xl md:text-4xl text-gray-800">{CELEBRATION_DETAILS.venue}</p>
        <div className="flex flex-col items-center text-gray-500 text-sm py-4">
          <span className="mb-3 text-xs uppercase tracking-widest opacity-60 font-medium">Celebremos juntos a las</span>
          <div className="flex items-center gap-8 mb-4">
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-light text-[#8fa189]">{CELEBRATION_DETAILS.date}</span>
              <span className="text-[9px] uppercase tracking-widest font-bold">15 SEPT</span>
            </div>
            <div className="w-px h-10 bg-[#8fa189]/20"></div>
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-light text-[#8fa189]">{CELEBRATION_DETAILS.time}</span>
              <span className="text-[9px] uppercase tracking-widest font-bold">Cena</span>
            </div>
          </div>
          <p className="text-xs italic text-gray-400 max-w-[200px]">{CELEBRATION_DETAILS.address}</p>
        </div>
        <a 
          href={CELEBRATION_DETAILS.mapUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[#8fa189]/40 text-[#8fa189] px-8 py-3 rounded-full hover:bg-[#8fa189] hover:text-white transition-all text-[10px] uppercase tracking-widest font-bold shadow-sm"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          Ver Ubicación
        </a>
      </div>
    </div>
  );
};

export default Details;
// v1.10 - Vista de dos columnas en escritorio.
