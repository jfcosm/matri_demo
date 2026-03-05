import React from 'react';
import { useAppContext } from '../context/AppContext';
import { LANGUAGES, LanguageCode } from '../data/languages';
import { TEMPLATES, TemplateId } from '../data/templates';

const Navbar: React.FC = () => {
    const { currentLanguage, setLanguage, currentTemplate, setTemplate, t } = useAppContext();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-4 animate-in fade-in slide-in-from-top-4 duration-700 pointer-events-none">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center bg-white/70 backdrop-blur-md shadow-sm border border-white/50 rounded-2xl px-6 py-3 gap-4 pointer-events-auto">
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <label htmlFor="template-select" className="text-xs font-semibold text-gray-500 uppercase tracking-widest min-w-max">
                        {t('navbar.selectTemplate')}
                    </label>
                    <select
                        id="template-select"
                        value={currentTemplate}
                        onChange={(e) => setTemplate(e.target.value as TemplateId)}
                        className="bg-transparent text-sm text-gray-800 font-medium focus:outline-none cursor-pointer w-full md:w-auto appearance-none pr-4"
                    >
                        {TEMPLATES.map((template) => (
                            <option key={template.id} value={template.id}>
                                {template.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                    <label htmlFor="language-select" className="text-xs font-semibold text-gray-500 uppercase tracking-widest min-w-max">
                        {t('navbar.selectLanguage')}
                    </label>
                    <select
                        id="language-select"
                        value={currentLanguage}
                        onChange={(e) => setLanguage(e.target.value as LanguageCode)}
                        className="bg-transparent text-sm text-gray-800 font-medium focus:outline-none cursor-pointer appearance-none"
                    >
                        {LANGUAGES.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                                {lang.nativeName} ({lang.name})
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
