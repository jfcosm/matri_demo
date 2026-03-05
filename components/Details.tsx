import React from 'react';
import { useAppContext } from '../context/AppContext';

const Details: React.FC = () => {
  const { currentTemplate, t } = useAppContext();

  const countStr = t(`${currentTemplate}.events.count`);
  const count = parseInt(countStr) || 0;

  const events = [];
  for (let i = 0; i < count; i++) {
    events.push({
      title: t(`${currentTemplate}.events.${i}.title`),
      venue: t(`${currentTemplate}.events.${i}.venue`),
      subtitle: t(`${currentTemplate}.events.${i}.subtitle`),
      date: t(`${currentTemplate}.events.${i}.date`),
      year: t(`${currentTemplate}.events.${i}.year`),
      time: t(`${currentTemplate}.events.${i}.time`),
      timeNote: t(`${currentTemplate}.events.${i}.timeNote`),
      address: t(`${currentTemplate}.events.${i}.address`),
      mapUrl: t(`${currentTemplate}.events.${i}.mapUrl`),
      mapText: t(`${currentTemplate}.events.${i}.mapText`)
    });
  }

  if (events.length === 0) return null;

  return (
    <div className={`grid grid-cols-1 ${events.length > 1 ? 'md:grid-cols-2' : 'max-w-md mx-auto'} gap-12 md:gap-24 py-8 items-start`}>
      {events.map((event, index) => (
        <div key={index} className="text-center space-y-4 group p-8 rounded-3xl border border-transparent hover:border-[var(--color-primary)]/10 hover:bg-white hover:shadow-xl transition-all duration-500">
          <div className="flex justify-center mb-2">
            <div className="p-5 bg-[var(--color-bg)] rounded-full transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white duration-500 text-[var(--color-primary)]">
              {/* Dynamic icon selection based on index (just a simple toggle for two events, could map more shapes) */}
              {index === 0 ? (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ) : (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 2l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" />
                </svg>
              )}
            </div>
          </div>
          <h3 className="uppercase tracking-[0.4em] font-bold text-[10px] text-[var(--color-text)] opacity-50">{event.title}</h3>
          <p className="font-serif italic text-3xl md:text-4xl text-[var(--color-text)] opacity-90">{event.venue}</p>
          <div className="flex flex-col items-center text-[var(--color-text)] opacity-60 text-sm py-4">
            <span className="mb-3 text-xs uppercase tracking-widest opacity-60 font-medium">{event.subtitle}</span>
            <div className="flex items-center gap-8 mb-4">
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-light text-[var(--color-primary)]">{event.date}</span>
                <span className="text-[9px] uppercase tracking-widest font-bold">{event.year}</span>
              </div>
              <div className="w-px h-10 bg-[var(--color-primary)]/20"></div>
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-light text-[var(--color-primary)]">{event.time}</span>
                <span className="text-[9px] uppercase tracking-widest font-bold">{event.timeNote}</span>
              </div>
            </div>
            <p className="text-xs italic text-[var(--color-text)] opacity-50 max-w-[200px]">{event.address}</p>
          </div>
          <a
            href={event.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--color-primary)]/40 text-[var(--color-primary)] px-8 py-3 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-all text-[10px] uppercase tracking-widest font-bold shadow-sm"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            {event.mapText}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Details;
