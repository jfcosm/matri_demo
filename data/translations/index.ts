import { LanguageCode } from '../languages';
import { es } from './es';
import { en } from './en';
import { fr } from './fr';
import { it } from './it';
import { de } from './de';
import { pt } from './pt';
import { ja } from './ja';
import { zh } from './zh';
import { ko } from './ko';
import { nl } from './nl';
import { hi } from './hi';
import { gu } from './gu';
import { ta } from './ta';
import { arn } from './arn';
import { gn } from './gn';
import { qu } from './qu';

// Dictionary type
export type TranslationDictionary = Record<string, string>;

export const translations: Record<LanguageCode, TranslationDictionary> = {
    es,
    en,
    fr,
    it,
    de,
    pt,
    ja,
    zh,
    ko,
    nl,
    hi,
    gu,
    ta,
    arn,
    gn,
    qu
};

export const t = (langCode: LanguageCode, key: string): string => {
    const langDict = translations[langCode] || translations['es'];
    // Fallback: look in target language -> look in spanish -> display key
    return langDict[key] || translations['es'][key] || key;
}
