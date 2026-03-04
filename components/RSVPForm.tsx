
import React, { useState } from 'react';
import { RSVP_PHONE_NUMBER, BRIDE_NAME } from '../constants';

const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'yes',
    dietary: '',
    song: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Texto de asistencia
    const attendanceText = formData.attendance === 'yes' ? '¡Sí, allí estaré!' : 'No podré asistir';
    
    // Construir el mensaje de WhatsApp siguiendo la plantilla exacta del usuario
    const message = `Hola ${BRIDE_NAME}.
${attendanceText}
Mi nombre es "${formData.name}".
Mis intolerencias o alergias son "${formData.dietary}".
Mi canción que no puede faltar es "${formData.song}".
Mi mensaje para ustedes es: "${formData.message}".`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RSVP_PHONE_NUMBER}?text=${encodedMessage}`;
    
    // Redirigir a WhatsApp
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 bg-white rounded-[40px] shadow-sm border border-gray-100 px-8 animate-in zoom-in duration-500 max-w-xl mx-auto">
        <div className="flex justify-center mb-6 text-[#8fa189]">
           <div className="p-4 bg-[#f4f6f3] rounded-full">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
           </div>
        </div>
        <h3 className="font-serif italic text-3xl mb-4 text-gray-800">¡Confirmación en camino!</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          Si ya enviaste el mensaje de WhatsApp, tu confirmación ha sido recibida. ¡Estamos muy felices de que nos acompañes!
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-[10px] uppercase tracking-widest font-bold text-[#8fa189] hover:underline"
        >
          Enviar otra respuesta
        </button>
      </div>
    );
  }

  return (
    <section id="rsvp" className="space-y-10 py-10 max-w-xl mx-auto">
      <div className="text-center space-y-3">
        <h3 className="font-serif italic text-4xl text-gray-800">Confirmar Asistencia</h3>
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">
          Por favor, confirma antes del 15 de Agosto
        </p>
        <div className="w-12 h-px bg-[#8fa189]/30 mx-auto pt-2"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-gray-50">
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 py-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input 
                type="radio" 
                name="attendance" 
                checked={formData.attendance === 'yes'}
                onChange={() => setFormData({...formData, attendance: 'yes'})}
                className="sr-only" 
              />
              <div className={`w-5 h-5 border-2 rounded-full transition-all ${formData.attendance === 'yes' ? 'border-[#8fa189] bg-[#8fa189]' : 'border-gray-200 bg-white'}`}>
                {formData.attendance === 'yes' && <div className="w-2 h-2 bg-white rounded-full m-auto mt-1"></div>}
              </div>
            </div>
            <span className={`text-sm font-medium transition-colors ${formData.attendance === 'yes' ? 'text-gray-800' : 'text-gray-400'}`}>¡Sí, allí estaré!</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input 
                type="radio" 
                name="attendance" 
                checked={formData.attendance === 'no'}
                onChange={() => setFormData({...formData, attendance: 'no'})}
                className="sr-only" 
              />
              <div className={`w-5 h-5 border-2 rounded-full transition-all ${formData.attendance === 'no' ? 'border-[#8fa189] bg-[#8fa189]' : 'border-gray-200 bg-white'}`}>
                {formData.attendance === 'no' && <div className="w-2 h-2 bg-white rounded-full m-auto mt-1"></div>}
              </div>
            </div>
            <span className={`text-sm font-medium transition-colors ${formData.attendance === 'no' ? 'text-gray-800' : 'text-gray-400'}`}>No podré asistir</span>
          </label>
        </div>

        <div className="space-y-5">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Nombre y Apellido" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#8fa189] focus:ring-4 focus:ring-[#8fa189]/5 outline-none text-sm transition-all"
            />
          </div>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Intolerancias o alergias (opcional)" 
              value={formData.dietary}
              onChange={(e) => setFormData({...formData, dietary: e.target.value})}
              className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#8fa189] focus:ring-4 focus:ring-[#8fa189]/5 outline-none text-sm transition-all"
            />
          </div>

          <div className="relative">
            <input 
              type="text" 
              placeholder="¿Qué canción no puede faltar?" 
              value={formData.song}
              onChange={(e) => setFormData({...formData, song: e.target.value})}
              className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#8fa189] focus:ring-4 focus:ring-[#8fa189]/5 outline-none text-sm transition-all"
            />
          </div>

          <div className="relative">
            <textarea 
              placeholder="Mensaje para los novios" 
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#8fa189] focus:ring-4 focus:ring-[#8fa189]/5 outline-none text-sm transition-all resize-none"
            ></textarea>
          </div>
        </div>

        <div className="space-y-4">
          <button 
            type="submit"
            className="w-full bg-[#8fa189] text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] shadow-lg shadow-[#8fa189]/20 hover:bg-[#7a8c75] transition-all active:scale-[0.98] transform flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Confirmar vía WhatsApp
          </button>
          <p className="text-[9px] text-gray-400 text-center italic">
            * Se abrirá WhatsApp para enviar tu mensaje de confirmación.
          </p>
        </div>
      </form>
    </section>
  );
};

export default RSVPForm;
// v1.15 - Mensaje de WhatsApp personalizado según plantilla del usuario.
