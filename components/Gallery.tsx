
import React from 'react';

const Gallery: React.FC = () => {
  return (
    <div className="w-full py-16 px-6 bg-[#f4f6f3] rounded-[40px] border border-dashed border-[#8fa189]/30 flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-700">
      <div className="p-4 bg-white rounded-full shadow-sm text-[#8fa189]">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      
      <div className="max-w-md space-y-4">
        <p className="text-[11px] md:text-xs text-[#8fa189] uppercase tracking-[0.3em] font-bold">
          Feed de Instagram
        </p>
        <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">
          PRÓXIMAMENTE APARECERÁN ACÁ LAS FOTOS QUE SUBAS A INSTAGRAM CON EL HASHTAG
        </p>
        <p className="text-2xl md:text-3xl font-serif italic text-gray-800 py-2">
          #alisonyjavi2026
        </p>
        <div className="pt-4">
          <a 
            href="https://www.instagram.com/explore/tags/alisonyjavi2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-gray-100 px-6 py-2 rounded-full shadow-sm text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-[#8fa189] transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            Explorar en Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
// v1.13 - Sección de galería reemplazada por mensaje de hashtag de Instagram.
