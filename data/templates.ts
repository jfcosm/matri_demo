export type TemplateId =
    | 'classic_wedding'
    | 'kids_birthday'
    | 'adult_birthday'
    | 'religious_ceremony'
    | 'live_concert'
    | 'b2b_activation'
    | 'book_launch'
    | 'gala'
    | 'baby_shower'
    | 'corporate_dinner';

export interface TemplateFeatures {
    showCountdown: boolean;
    showGallery: boolean;
    showGiftSection: boolean;
    showRSVP: boolean;
    showTickets: boolean;
}

export interface Template {
    id: TemplateId;
    name: string;
    features: TemplateFeatures;
}

export const TEMPLATES: Template[] = [
    { id: 'classic_wedding', name: 'Matrimonio Clásico', features: { showCountdown: true, showGallery: true, showGiftSection: true, showRSVP: true, showTickets: false } },
    { id: 'kids_birthday', name: 'Cumpleaños Infantil', features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: true, showTickets: false } },
    { id: 'adult_birthday', name: 'Cumpleaños de Adulto', features: { showCountdown: true, showGallery: true, showGiftSection: true, showRSVP: true, showTickets: false } },
    { id: 'religious_ceremony', name: 'Bautizo / Comunión', features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: true, showTickets: false } },
    { id: 'live_concert', name: 'Concierto en Vivo', features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: false, showTickets: true } },
    { id: 'b2b_activation', name: 'Lanzamiento B2B', features: { showCountdown: true, showGallery: false, showGiftSection: false, showRSVP: true, showTickets: false } },
    { id: 'book_launch', name: 'Estreno de Libro', features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: true, showTickets: false } },
    { id: 'gala', name: 'Gala / Graduación', features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: true, showTickets: true } },
    { id: 'baby_shower', name: 'Baby Shower', features: { showCountdown: true, showGallery: true, showGiftSection: true, showRSVP: true, showTickets: false } },
    { id: 'corporate_dinner', name: 'Cena Corporativa', features: { showCountdown: true, showGallery: false, showGiftSection: false, showRSVP: true, showTickets: false } }
];
