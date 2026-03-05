import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LanguageCode } from '../data/languages';
import { TemplateId } from '../data/templates';
import { t as translate } from '../data/translations';

interface AppContextType {
    currentLanguage: LanguageCode;
    setLanguage: (lang: LanguageCode) => void;
    currentTemplate: TemplateId;
    setTemplate: (template: TemplateId) => void;
    t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentLanguage, setLanguage] = useState<LanguageCode>('es');
    const [currentTemplate, setTemplate] = useState<TemplateId>('classic_wedding');

    // Helper dictionary lookup bound to the current language state
    const t = (key: string) => translate(currentLanguage, key);

    return (
        <AppContext.Provider value={{ currentLanguage, setLanguage, currentTemplate, setTemplate, t }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
