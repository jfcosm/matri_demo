
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const GiftSection: React.FC = () => {
  const { currentTemplate, t } = useAppContext();
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);

  // Bank Data fetched dynamically based on template
  const bankData = {
    banco: t(`${currentTemplate}.bank.banco`),
    tipo: t(`${currentTemplate}.bank.tipo`),
    numero: t(`${currentTemplate}.bank.numero`),
    rut: t(`${currentTemplate}.bank.rut`),
    titular: t(`${currentTemplate}.bank.titular`)
  };

  const copyToClipboard = async () => {
    const textToCopy = `Banco: ${bankData.banco}\nTipo de Cuenta: ${bankData.tipo}\nNúmero de Cuenta: ${bankData.numero}\nRUT: ${bankData.rut}\nTitular: ${bankData.titular}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  };

  return (
    <section className="text-center space-y-6 py-12 bg-[#f9f8f6] -mx-6 px-10 rounded-[40px] shadow-inner">
      <div className="flex justify-center mb-2">
        <div className="text-[var(--color-primary)]">
          <svg className="w-12 h-12 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14v4m0 0l8 4m-8-4l-8 4m8 4l-8-4V7" />
          </svg>
        </div>
      </div>
      <h3 className="uppercase tracking-[0.3em] font-bold text-xs text-[var(--color-text)] opacity-90">{t('gift.title')}</h3>
      <p className="text-sm text-[var(--color-text)] opacity-60 leading-relaxed font-light italic">
        {t('gift.subtitle')}
      </p>

      {!showDetails ? (
        <button
          onClick={() => setShowDetails(true)}
          className="inline-block bg-[var(--color-primary)] text-white px-10 py-3 rounded-full shadow-md hover:bg-[var(--color-primary)] transition-all transform active:scale-95 text-[10px] uppercase tracking-[0.2em] font-bold"
        >
          {t('gift.buttonShow')}
        </button>
      ) : (
        <div className="bg-white p-8 rounded-3xl border border-[var(--color-text)] border-opacity-10 shadow-xl animate-in fade-in zoom-in duration-500 relative">
          <div className="space-y-4 text-sm text-[var(--color-text)] opacity-70 text-left">
            <div className="border-b border-gray-50 pb-2">
              <p className="font-bold text-[var(--color-text)] opacity-50 text-[9px] uppercase tracking-widest mb-1">{t('gift.bankTitle')}</p>
              <p className="font-medium text-[var(--color-text)] opacity-80">{bankData.banco}</p>
            </div>
            <div className="border-b border-gray-50 pb-2">
              <p className="font-bold text-[var(--color-text)] opacity-50 text-[9px] uppercase tracking-widest mb-1">{t('gift.accountTypeTitle')}</p>
              <p className="font-medium text-[var(--color-text)] opacity-80">{bankData.tipo}</p>
            </div>
            <div className="border-b border-gray-50 pb-2">
              <p className="font-bold text-[var(--color-text)] opacity-50 text-[9px] uppercase tracking-widest mb-1">{t('gift.accountNumberTitle')}</p>
              <p className="font-mono bg-white/10 border-[var(--color-text)] border-opacity-10 p-2 rounded text-xs select-all text-[var(--color-text)] opacity-90 tracking-tight">{bankData.numero}</p>
            </div>
            <div className="border-b border-gray-50 pb-2">
              <p className="font-bold text-[var(--color-text)] opacity-50 text-[9px] uppercase tracking-widest mb-1">{t('gift.rutTitle')}</p>
              <p className="font-medium italic text-[var(--color-primary)]">{bankData.rut}</p>
            </div>
            <div>
              <p className="font-bold text-[var(--color-text)] opacity-50 text-[9px] uppercase tracking-widest mb-1">{t('gift.holderTitle')}</p>
              <p className="font-medium text-[var(--color-text)] opacity-80">{bankData.titular}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 items-center">
            <button
              onClick={copyToClipboard}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all transform active:scale-95 shadow-sm border ${copied
                ? 'bg-green-50 border-green-200 text-green-600'
                : 'bg-white border-[var(--color-primary)]/30 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white'
                }`}
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  {t('gift.copied')}
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                  {t('gift.buttonCopy')}
                </>
              )}
            </button>

            <button
              onClick={() => setShowDetails(false)}
              className="text-[9px] text-[var(--color-text)] opacity-50 uppercase tracking-widest font-bold hover:text-[var(--color-primary)] transition-colors"
            >
              {t('gift.close')}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GiftSection;
// v1.12 - Se agregó funcionalidad de copiado de datos bancarios.
