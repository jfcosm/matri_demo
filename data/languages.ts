export type LanguageCode = 'es' | 'en' | 'fr' | 'it' | 'de' | 'pt' | 'ja' | 'zh' | 'ko' | 'nl' | 'hi' | 'gu' | 'ta' | 'arn' | 'gn' | 'qu';

export interface Language {
    code: LanguageCode;
    name: string;
    nativeName: string;
}

export const LANGUAGES: Language[] = [
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'it', name: 'Italian', nativeName: 'Italiano' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語' },
    { code: 'zh', name: 'Mandarin Chinese', nativeName: '中文' },
    { code: 'ko', name: 'Korean', nativeName: '한국어' },
    { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'arn', name: 'Mapudungun', nativeName: 'Mapudungun' },
    { code: 'gn', name: 'Guarani', nativeName: 'Avañeʼẽ' },
    { code: 'qu', name: 'Quechua', nativeName: 'Runa Simi' }
];
