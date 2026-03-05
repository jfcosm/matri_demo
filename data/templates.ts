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

export interface TemplateTheme {
    primary: string;
    background: string;
    text: string;
    fonts: {
        script: string;
        serif: string;
        sans: string;
    };
    heroImage: {
        url: string;
        placeholder: string;
    };
}

export interface Template {
    id: TemplateId;
    name: string;
    features: TemplateFeatures;
    theme: TemplateTheme;
}

export const TEMPLATES: Template[] = [
    {
        id: 'classic_wedding',
        name: 'Matrimonio Clásico',
        features: { showCountdown: true, showGallery: true, showGiftSection: true, showRSVP: true, showTickets: false },
        theme: {
            primary: '#8fa189',
            background: '#fdfcfb',
            text: '#4a4a4a',
            fonts: { script: 'Great Vibes', serif: 'Playfair Display', sans: 'Montserrat' },
            heroImage: { url: 'matri_hero.jpg', placeholder: 'https://picsum.photos/seed/44c2ag/1000/800' }
        }
    },
    {
        id: 'kids_birthday',
        name: 'Cumpleaños Infantil',
        features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: true, showTickets: false },
        theme: {
            primary: '#FF6B6B',
            background: '#F0F8FF',
            text: '#2F4F4F',
            fonts: { script: 'Fredoka', serif: 'Comic Neue', sans: 'Quicksand' },
            heroImage: { url: 'https://picsum.photos/seed/7v82g/1000/800', placeholder: 'https://picsum.photos/seed/e07pz5/1000/800' }
        }
    },
    {
        id: 'adult_birthday',
        name: 'Cumpleaños de Adulto',
        features: { showCountdown: true, showGallery: true, showGiftSection: true, showRSVP: true, showTickets: false },
        theme: {
            primary: '#D4AF37',
            background: '#121212',
            text: '#E0E0E0',
            fonts: { script: 'Dancing Script', serif: 'Cinzel', sans: 'Lato' },
            heroImage: { url: 'https://picsum.photos/seed/sms6zs/1000/800', placeholder: 'https://picsum.photos/seed/5y81ko/1000/800' }
        }
    },
    {
        id: 'religious_ceremony',
        name: 'Bautizo / Comunión',
        features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: true, showTickets: false },
        theme: {
            primary: '#AEC6CF',
            background: '#FFFFFF',
            text: '#555555',
            fonts: { script: 'Alex Brush', serif: 'Lora', sans: 'Open Sans' },
            heroImage: { url: 'https://picsum.photos/seed/7u3tut/1000/800', placeholder: 'https://picsum.photos/seed/o9j6fs/1000/800' }
        }
    },
    {
        id: 'live_concert',
        name: 'Concierto en Vivo',
        features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: false, showTickets: true },
        theme: {
            primary: '#FF00FF',
            background: '#0a0a0a',
            text: '#ffffff',
            fonts: { script: 'Permanent Marker', serif: 'Russo One', sans: 'Roboto Mono' },
            heroImage: { url: 'https://picsum.photos/seed/iyrab/1000/800', placeholder: 'https://picsum.photos/seed/v8l66f/1000/800' }
        }
    },
    {
        id: 'b2b_activation',
        name: 'Lanzamiento B2B',
        features: { showCountdown: true, showGallery: false, showGiftSection: false, showRSVP: true, showTickets: false },
        theme: {
            primary: '#0056b3',
            background: '#f8f9fa',
            text: '#212529',
            fonts: { script: 'Caveat', serif: 'Merriweather', sans: 'Inter' },
            heroImage: { url: 'https://picsum.photos/seed/mhjaw7/1000/800', placeholder: 'https://picsum.photos/seed/hikrm/1000/800' }
        }
    },
    {
        id: 'book_launch',
        name: 'Estreno de Libro',
        features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: true, showTickets: false },
        theme: {
            primary: '#8b4513',
            background: '#fff8dc',
            text: '#3e2723',
            fonts: { script: 'Homemade Apple', serif: 'Crimson Text', sans: 'PT Sans' },
            heroImage: { url: 'https://picsum.photos/seed/kf5djv/1000/800', placeholder: 'https://picsum.photos/seed/ow9p6l/1000/800' }
        }
    },
    {
        id: 'gala',
        name: 'Gala / Graduación',
        features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: true, showTickets: true },
        theme: {
            primary: '#a2a2bd',
            background: '#0a0a1a',
            text: '#f5f5f5',
            fonts: { script: 'Pinyon Script', serif: 'Cormorant Garamond', sans: 'Raleway' },
            heroImage: { url: 'https://picsum.photos/seed/rctgz/1000/800', placeholder: 'https://picsum.photos/seed/plgown/1000/800' }
        }
    },
    {
        id: 'baby_shower',
        name: 'Baby Shower',
        features: { showCountdown: true, showGallery: true, showGiftSection: true, showRSVP: true, showTickets: false },
        theme: {
            primary: '#FFB6C1',
            background: '#FFFAFA',
            text: '#696969',
            fonts: { script: 'Pacifico', serif: 'Balsamiq Sans', sans: 'Nunito' },
            heroImage: { url: 'https://picsum.photos/seed/sfmcmb/1000/800', placeholder: 'https://picsum.photos/seed/lnlg7r/1000/800' }
        }
    },
    {
        id: 'corporate_dinner',
        name: 'Cena Corporativa',
        features: { showCountdown: true, showGallery: false, showGiftSection: false, showRSVP: true, showTickets: false },
        theme: {
            primary: '#2E8B57',
            background: '#ffffff',
            text: '#333333',
            fonts: { script: 'Satisfy', serif: 'Libre Baskerville', sans: 'Work Sans' },
            heroImage: { url: 'https://picsum.photos/seed/bgv5xf/1000/800', placeholder: 'https://picsum.photos/seed/vcu6a/1000/800' }
        }
    }
];
