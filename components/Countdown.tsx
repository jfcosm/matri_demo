
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { CountdownTime } from '../types';
import { useAppContext } from '../context/AppContext';

const Countdown: React.FC = () => {
  const { currentTemplate, t } = useAppContext();
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  // Parse dynamic date or fallback to something far ahead
  const targetDate = useMemo(() => {
    const dateStr = t(`${currentTemplate}.date`);
    const parsed = new Date(dateStr);
    return isNaN(parsed.getTime()) ? new Date('2030-01-01T00:00:00') : parsed;
  }, [currentTemplate, t]);

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return null;
  }, [targetDate]);

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
        <p className="font-serif italic text-2xl text-[var(--color-primary)]">¡Llegó el gran día!</p>
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
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl border border-[var(--color-primary)]/20 bg-white shadow-sm mb-2 group hover:border-[var(--color-primary)] transition-all duration-300">
              <span className="text-2xl md:text-3xl font-light text-[var(--color-text)] opacity-80">
                {item.value.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-[9px] tracking-[0.2em] text-[var(--color-text)] opacity-50 font-bold uppercase">{item.label}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          const title = t(`${currentTemplate}.calendar.title`);
          const location = t(`${currentTemplate}.calendar.location`);
          const description = t(`${currentTemplate}.calendar.description`);
          const start = targetDate.toISOString().replace(/-|:|\.\d\d\d/g, "");
          window.open(`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${start}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`, '_blank');
        }}
        className="flex items-center gap-2 bg-white border border-[var(--color-primary)]/30 px-8 py-3 rounded-full text-[10px] text-[var(--color-primary)] font-bold uppercase tracking-widest shadow-sm hover:shadow-md hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-text)] transition-all active:scale-95"
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
