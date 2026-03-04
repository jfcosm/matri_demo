
import React, { useState, useEffect, useCallback } from 'react';
import { WEDDING_DATE } from '../constants';
import { CountdownTime } from '../types';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = WEDDING_DATE.getTime() - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return null;
  }, []);

  useEffect(() => {
    const initial = calculateTimeLeft();
    if (initial) {
      setTimeLeft(initial);
    } else {
      setIsExpired(true);
    }
    
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      if (updated) {
        setTimeLeft(updated);
      } else {
        setIsExpired(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  if (isExpired) {
    return (
      <div className="text-center py-8 animate-in fade-in duration-1000">
        <p className="font-serif italic text-2xl text-[#8fa189]">¡Llegó el gran día!</p>
      </div>
    );
  }

  const items = [
    { label: 'DÍAS', value: timeLeft.days },
    { label: 'HORAS', value: timeLeft.hours },
    { label: 'MINUTOS', value: timeLeft.minutes },
    { label: 'SEGUNDOS', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto">
      <div className="flex justify-between w-full gap-2 mb-8">
        {items.map((item, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl border border-[#8fa189]/20 bg-white shadow-sm mb-2 group hover:border-[#8fa189] transition-all duration-300">
              <span className="text-2xl md:text-3xl font-light text-gray-700">
                {item.value.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-[9px] tracking-[0.2em] text-gray-400 font-bold uppercase">{item.label}</span>
          </div>
        ))}
      </div>
      
      <button 
        onClick={() => {
          const title = `Boda de Rebe y Javi`;
          const start = WEDDING_DATE.toISOString().replace(/-|:|\.\d\d\d/g, "");
          window.open(`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${start}&details=¡No te pierdas el gran día!&location=La+Serena,+Chile`, '_blank');
        }}
        className="flex items-center gap-2 bg-white border border-[#8fa189]/30 px-8 py-3 rounded-full text-[10px] text-[#8fa189] font-bold uppercase tracking-widest shadow-sm hover:shadow-md hover:bg-[#8fa189] hover:text-white transition-all active:scale-95"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Agendar Fecha
      </button>
    </div>
  );
};

export default Countdown;
// v1.8 - Optimización de lógica de tiempo y visibilidad.
